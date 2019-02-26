(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12"],{

/***/ "./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Simple\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdAccordionBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionBasic", function() { return NgbdAccordionBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionBasic = /** @class */ (function () {
    function NgbdAccordionBasic() {
    }
    NgbdAccordionBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-accordion-basic',
            template: __webpack_require__(/*! ./accordion-basic.html */ "./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.html")
        })
    ], NgbdAccordionBasic);
    return NgbdAccordionBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/config/accordion-config.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/config/accordion-config.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This accordion uses customized default values.</p>\n\n<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\">\n  <ngb-panel title=\"One\" id=\"config-panel-one\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Two\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/config/accordion-config.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/config/accordion-config.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdAccordionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionConfig", function() { return NgbdAccordionConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdAccordionConfig = /** @class */ (function () {
    function NgbdAccordionConfig(config) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        config.type = 'info';
    }
    NgbdAccordionConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-accordion-config',
            template: __webpack_require__(/*! ./accordion-config.html */ "./src/app/components/ng-bootstrap/accordion/config/accordion-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]] // add the NgbAccordionConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]])
    ], NgbdAccordionConfig);
    return NgbdAccordionConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/index.ts":
/*!************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/index.ts ***!
  \************************************************************/
/*! exports provided: ACCORDION_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCORDION_DIRECTIVES", function() { return ACCORDION_DIRECTIVES; });
/* harmony import */ var _basic_accordion_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/accordion-basic */ "./src/app/components/ng-bootstrap/accordion/basic/accordion-basic.ts");
/* harmony import */ var _preventchange_accordion_preventchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preventchange/accordion-preventchange */ "./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.ts");
/* harmony import */ var _static_accordion_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/accordion-static */ "./src/app/components/ng-bootstrap/accordion/static/accordion-static.ts");
/* harmony import */ var _toggle_accordion_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle/accordion-toggle */ "./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.ts");
/* harmony import */ var _config_accordion_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/accordion-config */ "./src/app/components/ng-bootstrap/accordion/config/accordion-config.ts");





var ACCORDION_DIRECTIVES = [
    _basic_accordion_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdAccordionBasic"],
    _preventchange_accordion_preventchange__WEBPACK_IMPORTED_MODULE_1__["NgbdAccordionPreventchange"],
    _static_accordion_static__WEBPACK_IMPORTED_MODULE_2__["NgbdAccordionStatic"],
    _toggle_accordion_toggle__WEBPACK_IMPORTED_MODULE_3__["NgbdAccordionToggle"],
    _config_accordion_config__WEBPACK_IMPORTED_MODULE_4__["NgbdAccordionConfig"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion (panelChange)=\"beforeChange($event)\">\n  <ngb-panel id=\"preventchange-1\" title=\"Simple\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-2\" title=\"I can't be toggled...\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-3\" title=\"I can be opened, but not closed...\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.ts ***!
  \********************************************************************************************/
/*! exports provided: NgbdAccordionPreventchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionPreventchange", function() { return NgbdAccordionPreventchange; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionPreventchange = /** @class */ (function () {
    function NgbdAccordionPreventchange() {
    }
    NgbdAccordionPreventchange.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    NgbdAccordionPreventchange = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-accordion-preventchange',
            template: __webpack_require__(/*! ./accordion-preventchange.html */ "./src/app/components/ng-bootstrap/accordion/preventchange/accordion-preventchange.html"),
        })
    ], NgbdAccordionPreventchange);
    return NgbdAccordionPreventchange;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/static/accordion-static.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/static/accordion-static.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n  <ngb-panel id=\"static-1\" title=\"Simple\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-2\">\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Fancy</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/static/accordion-static.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/static/accordion-static.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdAccordionStatic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionStatic", function() { return NgbdAccordionStatic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionStatic = /** @class */ (function () {
    function NgbdAccordionStatic() {
    }
    NgbdAccordionStatic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-accordion-static',
            template: __webpack_require__(/*! ./accordion-static.html */ "./src/app/components/ng-bootstrap/accordion/static/accordion-static.html")
        })
    ], NgbdAccordionStatic);
    return NgbdAccordionStatic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\">\n  <ngb-panel id=\"toggle-1\" title=\"First panel\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"toggle-2\" title=\"Second\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\n\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdAccordionToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionToggle", function() { return NgbdAccordionToggle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionToggle = /** @class */ (function () {
    function NgbdAccordionToggle() {
    }
    NgbdAccordionToggle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-accordion-toggle',
            template: __webpack_require__(/*! ./accordion-toggle.html */ "./src/app/components/ng-bootstrap/accordion/toggle/accordion-toggle.html")
        })
    ], NgbdAccordionToggle);
    return NgbdAccordionToggle;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/basic/alert-basic.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/basic/alert-basic.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <ngb-alert [dismissible]=\"false\">\n    <strong>Warning!</strong> Better check yourself, you're not looking too good.\n  </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/basic/alert-basic.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/basic/alert-basic.ts ***!
  \********************************************************************/
/*! exports provided: NgbdAlertBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertBasic", function() { return NgbdAlertBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAlertBasic = /** @class */ (function () {
    function NgbdAlertBasic() {
    }
    NgbdAlertBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-alert-basic',
            template: __webpack_require__(/*! ./alert-basic.html */ "./src/app/components/ng-bootstrap/alert/basic/alert-basic.html")
        })
    ], NgbdAlertBasic);
    return NgbdAlertBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\n</p>\n<p>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdAlertCloseable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertCloseable", function() { return NgbdAlertCloseable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgbdAlertCloseable = /** @class */ (function () {
    function NgbdAlertCloseable() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        }, {
            id: 5,
            type: 'primary',
            message: 'This is a primary alert',
        }, {
            id: 6,
            type: 'secondary',
            message: 'This is a secondary alert',
        }, {
            id: 7,
            type: 'light',
            message: 'This is a light alert',
        }, {
            id: 8,
            type: 'dark',
            message: 'This is a dark alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertCloseable.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertCloseable.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NgbdAlertCloseable.prototype, "alerts", void 0);
    NgbdAlertCloseable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-alert-closeable',
            template: __webpack_require__(/*! ./alert-closeable.html */ "./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.html")
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertCloseable);
    return NgbdAlertCloseable;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/config/alert-config.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/config/alert-config.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <ngb-alert>\n    This alert's type is success and it's not dismissible because the config has been customized\n  </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/config/alert-config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/config/alert-config.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdAlertConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertConfig", function() { return NgbdAlertConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdAlertConfig = /** @class */ (function () {
    function NgbdAlertConfig(alertConfig) {
        this.alerts = [];
        // customize default values of alerts used by this component tree
        alertConfig.type = 'success';
        alertConfig.dismissible = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NgbdAlertConfig.prototype, "alerts", void 0);
    NgbdAlertConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-alert-config',
            template: __webpack_require__(/*! ./alert-config.html */ "./src/app/components/ng-bootstrap/alert/config/alert-config.html"),
            // add NgbAlertConfig  to the component providers
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAlertConfig"]])
    ], NgbdAlertConfig);
    return NgbdAlertConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/custom/alert-custom.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/custom/alert-custom.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/custom/alert-custom.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/custom/alert-custom.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdAlertCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertCustom", function() { return NgbdAlertCustom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAlertCustom = /** @class */ (function () {
    function NgbdAlertCustom() {
    }
    NgbdAlertCustom = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-alert-custom',
            template: __webpack_require__(/*! ./alert-custom.html */ "./src/app/components/ng-bootstrap/alert/custom/alert-custom.html"),
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        })
    ], NgbdAlertCustom);
    return NgbdAlertCustom;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/index.ts ***!
  \********************************************************/
/*! exports provided: ALERT_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_DIRECTIVES", function() { return ALERT_DIRECTIVES; });
/* harmony import */ var _basic_alert_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/alert-basic */ "./src/app/components/ng-bootstrap/alert/basic/alert-basic.ts");
/* harmony import */ var _closeable_alert_closeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeable/alert-closeable */ "./src/app/components/ng-bootstrap/alert/closeable/alert-closeable.ts");
/* harmony import */ var _custom_alert_custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom/alert-custom */ "./src/app/components/ng-bootstrap/alert/custom/alert-custom.ts");
/* harmony import */ var _selfclosing_alert_selfclosing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selfclosing/alert-selfclosing */ "./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.ts");
/* harmony import */ var _config_alert_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/alert-config */ "./src/app/components/ng-bootstrap/alert/config/alert-config.ts");





var ALERT_DIRECTIVES = [
    _basic_alert_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdAlertBasic"],
    _closeable_alert_closeable__WEBPACK_IMPORTED_MODULE_1__["NgbdAlertCloseable"],
    _custom_alert_custom__WEBPACK_IMPORTED_MODULE_2__["NgbdAlertCustom"],
    _selfclosing_alert_selfclosing__WEBPACK_IMPORTED_MODULE_3__["NgbdAlertSelfclosing"],
    _config_alert_config__WEBPACK_IMPORTED_MODULE_4__["NgbdAlertConfig"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)\n</p>\n<ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\n\n<hr/>\n\n<p>\n  Show a self-closing success message that disappears after 5 seconds.\n</p>\n<ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\n<p>\n  <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdAlertSelfclosing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertSelfclosing", function() { return NgbdAlertSelfclosing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgbdAlertSelfclosing = /** @class */ (function () {
    function NgbdAlertSelfclosing() {
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
    }
    NgbdAlertSelfclosing.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(5000)).subscribe(function () { return _this.successMessage = null; });
    };
    NgbdAlertSelfclosing.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    NgbdAlertSelfclosing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-alert-selfclosing',
            template: __webpack_require__(/*! ./alert-selfclosing.html */ "./src/app/components/ng-bootstrap/alert/selfclosing/alert-selfclosing.html")
        })
    ], NgbdAlertSelfclosing);
    return NgbdAlertSelfclosing;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-toggle\">\n  <label class=\"btn-primary\" ngbButtonLabel>\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\n  </label>\n  <label class=\"btn-primary\" ngbButtonLabel>\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\n  </label>\n  <label class=\"btn-primary\" ngbButtonLabel>\n    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\n  </label>\n</div>\n<hr>\n<pre>{{model | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdButtonsCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdButtonsCheckbox", function() { return NgbdButtonsCheckbox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdButtonsCheckbox = /** @class */ (function () {
    function NgbdButtonsCheckbox() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    NgbdButtonsCheckbox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-buttons-checkbox',
            template: __webpack_require__(/*! ./buttons-checkbox.html */ "./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.html")
        })
    ], NgbdButtonsCheckbox);
    return NgbdButtonsCheckbox;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"checkboxGroupForm\">\n  <div class=\"btn-group btn-group-toggle\">\n    <label class=\"btn-primary\" ngbButtonLabel>\n      <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\n    </label>\n    <label class=\"btn-primary\" ngbButtonLabel>\n      <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\n    </label>\n    <label class=\"btn-primary\" ngbButtonLabel>\n      <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\n    </label>\n  </div>\n</form>\n<hr>\n<pre>{{checkboxGroupForm.value | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgbdButtonsCheckboxreactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdButtonsCheckboxreactive", function() { return NgbdButtonsCheckboxreactive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdButtonsCheckboxreactive = /** @class */ (function () {
    function NgbdButtonsCheckboxreactive(formBuilder) {
        this.formBuilder = formBuilder;
    }
    NgbdButtonsCheckboxreactive.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
    };
    NgbdButtonsCheckboxreactive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-buttons-checkboxreactive',
            template: __webpack_require__(/*! ./buttons-checkboxreactive.html */ "./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NgbdButtonsCheckboxreactive);
    return NgbdButtonsCheckboxreactive;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/index.ts ***!
  \**********************************************************/
/*! exports provided: BUTTONS_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONS_DIRECTIVES", function() { return BUTTONS_DIRECTIVES; });
/* harmony import */ var _checkbox_buttons_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox/buttons-checkbox */ "./src/app/components/ng-bootstrap/buttons/checkbox/buttons-checkbox.ts");
/* harmony import */ var _checkboxreactive_buttons_checkboxreactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxreactive/buttons-checkboxreactive */ "./src/app/components/ng-bootstrap/buttons/checkboxreactive/buttons-checkboxreactive.ts");
/* harmony import */ var _radio_buttons_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio/buttons-radio */ "./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.ts");
/* harmony import */ var _radioreactive_buttons_radioreactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radioreactive/buttons-radioreactive */ "./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.ts");




var BUTTONS_DIRECTIVES = [
    _checkbox_buttons_checkbox__WEBPACK_IMPORTED_MODULE_0__["NgbdButtonsCheckbox"],
    _checkboxreactive_buttons_checkboxreactive__WEBPACK_IMPORTED_MODULE_1__["NgbdButtonsCheckboxreactive"],
    _radio_buttons_radio__WEBPACK_IMPORTED_MODULE_2__["NgbdButtonsRadio"],
    _radioreactive_buttons_radioreactive__WEBPACK_IMPORTED_MODULE_3__["NgbdButtonsRadioreactive"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\n  <label ngbButtonLabel class=\"btn-primary\">\n    <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n  </label>\n  <label ngbButtonLabel class=\"btn-primary\">\n    <input ngbButton type=\"radio\" value=\"middle\"> Middle\n  </label>\n  <label ngbButtonLabel class=\"btn-primary\">\n    <input ngbButton type=\"radio\" [value]=\"false\"> Right\n  </label>\n</div>\n<hr>\n<pre>{{model}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.ts ***!
  \************************************************************************/
/*! exports provided: NgbdButtonsRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdButtonsRadio", function() { return NgbdButtonsRadio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdButtonsRadio = /** @class */ (function () {
    function NgbdButtonsRadio() {
        this.model = 1;
    }
    NgbdButtonsRadio = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-buttons-radio',
            template: __webpack_require__(/*! ./buttons-radio.html */ "./src/app/components/ng-bootstrap/buttons/radio/buttons-radio.html")
        })
    ], NgbdButtonsRadio);
    return NgbdButtonsRadio;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"radioGroupForm\">\n  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n    <label ngbButtonLabel class=\"btn-primary\">\n      <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\n    </label>\n    <label ngbButtonLabel class=\"btn-primary\">\n      <input ngbButton type=\"radio\" value=\"middle\"> Middle\n    </label>\n    <label ngbButtonLabel class=\"btn-primary\">\n      <input ngbButton type=\"radio\" [value]=\"false\"> Right\n    </label>\n  </div>\n</form>\n<hr>\n<pre>{{radioGroupForm.value['model']}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.ts ***!
  \****************************************************************************************/
/*! exports provided: NgbdButtonsRadioreactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdButtonsRadioreactive", function() { return NgbdButtonsRadioreactive; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdButtonsRadioreactive = /** @class */ (function () {
    function NgbdButtonsRadioreactive(formBuilder) {
        this.formBuilder = formBuilder;
    }
    NgbdButtonsRadioreactive.prototype.ngOnInit = function () {
        this.radioGroupForm = this.formBuilder.group({
            'model': 1
        });
    };
    NgbdButtonsRadioreactive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-buttons-radioreactive',
            template: __webpack_require__(/*! ./buttons-radioreactive.html */ "./src/app/components/ng-bootstrap/buttons/radioreactive/buttons-radioreactive.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NgbdButtonsRadioreactive);
    return NgbdButtonsRadioreactive;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\" alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdCarouselBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasic", function() { return NgbdCarouselBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdCarouselBasic = /** @class */ (function () {
    function NgbdCarouselBasic() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    NgbdCarouselBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'ngbd-carousel-basic', template: __webpack_require__(/*! ./carousel-basic.html */ "./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.html") })
    ], NgbdCarouselBasic);
    return NgbdCarouselBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/config/carousel-config.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/config/carousel-config.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <img [src]=\"images[0]\" alt=\"Random first slide\">\n    <div class=\"carousel-caption\">\n      <h3>10 seconds between slides...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div class=\"carousel-caption\">\n      <h3>No mouse events...</h3>\n      <p>This carousel doesn't pause or resume on mouse events</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[2]\"  alt=\"Random third slide\">\n    <div class=\"carousel-caption\">\n      <h3>No keyboard...</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <img [src]=\"images[3]\" alt=\"Random fourth slide\">\n    <div class=\"carousel-caption\">\n      <h3>And no wrap after last slide.</h3>\n      <p>This carousel uses customized default values.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/config/carousel-config.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/config/carousel-config.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdCarouselConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselConfig", function() { return NgbdCarouselConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdCarouselConfig = /** @class */ (function () {
    function NgbdCarouselConfig(config) {
        this.images = [1, 2, 3, 4].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    NgbdCarouselConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-carousel-config',
            template: __webpack_require__(/*! ./carousel-config.html */ "./src/app/components/ng-bootstrap/carousel/config/carousel-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], NgbdCarouselConfig);
    return NgbdCarouselConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/index.ts ***!
  \***********************************************************/
/*! exports provided: CAROUSEL_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_DIRECTIVES", function() { return CAROUSEL_DIRECTIVES; });
/* harmony import */ var _basic_carousel_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/carousel-basic */ "./src/app/components/ng-bootstrap/carousel/basic/carousel-basic.ts");
/* harmony import */ var _config_carousel_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/carousel-config */ "./src/app/components/ng-bootstrap/carousel/config/carousel-config.ts");
/* harmony import */ var _navigation_carousel_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/carousel-navigation */ "./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.ts");



var CAROUSEL_DIRECTIVES = [_basic_carousel_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdCarouselBasic"], _config_carousel_config__WEBPACK_IMPORTED_MODULE_1__["NgbdCarouselConfig"], _navigation_carousel_navigation__WEBPACK_IMPORTED_MODULE_2__["NgbdCarouselNavigation"]];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\n  <ng-template ngbSlide *ngFor=\"let image of images\">\n    <img [src]=\"image\" alt=\"Random slide\">\n    <div class=\"carousel-caption\">\n      <h3>No mouse navigation</h3>\n      <p>This carousel hides navigation arrows and indicators.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n\n<hr>\n\n<div class=\"btn-group\" role=\"group\" aria-label=\"Carousel toggle controls\">\n  <button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\n  <button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdCarouselNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselNavigation", function() { return NgbdCarouselNavigation; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdCarouselNavigation = /** @class */ (function () {
    function NgbdCarouselNavigation(config, _http) {
        this._http = _http;
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    NgbdCarouselNavigation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-carousel-navigation',
            template: __webpack_require__(/*! ./carousel-navigation.html */ "./src/app/components/ng-bootstrap/carousel/navigation/carousel-navigation.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]] // add NgbCarouselConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], NgbdCarouselNavigation);
    return NgbdCarouselNavigation;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n    Toggle\n  </button>\n</p>\n<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      You can collapse this card by clicking Toggle\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdCollapseBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCollapseBasic", function() { return NgbdCollapseBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdCollapseBasic = /** @class */ (function () {
    function NgbdCollapseBasic() {
        this.isCollapsed = false;
    }
    NgbdCollapseBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-collapse-basic',
            template: __webpack_require__(/*! ./collapse-basic.html */ "./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.html")
        })
    ], NgbdCollapseBasic);
    return NgbdCollapseBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/collapse/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/collapse/index.ts ***!
  \***********************************************************/
/*! exports provided: COLLAPSE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSE_DIRECTIVES", function() { return COLLAPSE_DIRECTIVES; });
/* harmony import */ var _basic_collapse_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/collapse-basic */ "./src/app/components/ng-bootstrap/collapse/basic/collapse-basic.ts");

var COLLAPSE_DIRECTIVES = [_basic_collapse_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdCollapseBasic"]];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>These datepickers use custom Date adapter that lets you use your own model implementation.\nIn this example we are converting from and to a JS native Date object</p>\n\n<div class=\"row\">\n  <div class=\"col-6\">\n    <ngb-datepicker #d1 [(ngModel)]=\"model1\" #c1=\"ngModel\"></ngb-datepicker>\n\n    <hr/>\n    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model1 = today\">Select Today</button>\n    <hr/>\n\n    <pre>Model: {{ model1 | json }}</pre>\n    <pre>State: {{ c1.status }}</pre>\n  </div>\n\n  <div class=\"col-6\">\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                 name=\"d2\" #c2=\"ngModel\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <hr/>\n    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"model2 = today\">Select Today</button>\n    <hr/>\n\n\n    <pre>Model: {{ model2 | json }}</pre>\n    <pre>State: {{ c2.status }}</pre>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdDatepickerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerAdapter", function() { return NgbdDatepickerAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdDatepickerAdapter = /** @class */ (function () {
    function NgbdDatepickerAdapter() {
    }
    Object.defineProperty(NgbdDatepickerAdapter.prototype, "today", {
        get: function () {
            return new Date();
        },
        enumerable: true,
        configurable: true
    });
    NgbdDatepickerAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-adapter',
            template: __webpack_require__(/*! ./datepicker-adapter.html */ "./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.html"),
            // NOTE: For this example we are only providing current component, but probably
            // NOTE: you will want to provide your main App Module
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"] }]
        })
    ], NgbdDatepickerAdapter);
    return NgbdDatepickerAdapter;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Simple datepicker</p>\n\n<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n\n<hr/>\n\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdDatepickerBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerBasic", function() { return NgbdDatepickerBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerBasic = /** @class */ (function () {
    function NgbdDatepickerBasic(calendar) {
        this.calendar = calendar;
    }
    NgbdDatepickerBasic.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    NgbdDatepickerBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-basic',
            template: __webpack_require__(/*! ./datepicker-basic.html */ "./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerBasic);
    return NgbdDatepickerBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <ngbd-islamic-civil></ngbd-islamic-civil>\n    </div>\n    <div class=\"col\">\n      <ngbd-islamic-umalqura></ngbd-islamic-umalqura>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.ts ***!
  \**************************************************************************************/
/*! exports provided: IslamicI18n, NgbdDatepickerCalendars, NgbdIslamicCivil, NgbdIslamicUmalqura */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IslamicI18n", function() { return IslamicI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerCalendars", function() { return NgbdDatepickerCalendars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdIslamicCivil", function() { return NgbdIslamicCivil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdIslamicUmalqura", function() { return NgbdIslamicUmalqura; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    weekdays: ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'],
    months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
        'ذو القعدة', 'ذو الحجة']
};
var IslamicI18n = /** @class */ (function (_super) {
    __extends(IslamicI18n, _super);
    function IslamicI18n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IslamicI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES.weekdays[weekday - 1];
    };
    IslamicI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES.months[month - 1];
    };
    IslamicI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    IslamicI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    IslamicI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], IslamicI18n);
    return IslamicI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var NgbdDatepickerCalendars = /** @class */ (function () {
    function NgbdDatepickerCalendars() {
    }
    NgbdDatepickerCalendars = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-calendars',
            template: __webpack_require__(/*! ./datepicker-calendars.html */ "./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.html")
        })
    ], NgbdDatepickerCalendars);
    return NgbdDatepickerCalendars;
}());

var NgbdIslamicCivil = /** @class */ (function () {
    function NgbdIslamicCivil(calendar) {
        this.calendar = calendar;
        this.name = 'Civil';
    }
    NgbdIslamicCivil.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    NgbdIslamicCivil = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-islamic-civil',
            template: __webpack_require__(/*! ./islamic-calendars.html */ "./src/app/components/ng-bootstrap/datepicker/calendars/islamic-calendars.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarIslamicCivil"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: IslamicI18n }
            ]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdIslamicCivil);
    return NgbdIslamicCivil;
}());

var NgbdIslamicUmalqura = /** @class */ (function (_super) {
    __extends(NgbdIslamicUmalqura, _super);
    function NgbdIslamicUmalqura() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Umalqura';
        return _this;
    }
    NgbdIslamicUmalqura = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-islamic-umalqura',
            template: __webpack_require__(/*! ./islamic-calendars.html */ "./src/app/components/ng-bootstrap/datepicker/calendars/islamic-calendars.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarIslamicUmalqura"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: IslamicI18n }
            ]
        })
    ], NgbdIslamicUmalqura);
    return NgbdIslamicUmalqura;
}(NgbdIslamicCivil));



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/calendars/islamic-calendars.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/calendars/islamic-calendars.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><b>Islamic <i>{{name}}</i> Calendar</b></p>\n\n<ngb-datepicker class=\"rtl\" #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [firstDayOfWeek]=\"7\">\n</ngb-datepicker>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday();\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 1434, month: 2})\">To Saf. 1434</button>\n\n<hr/>\n\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This datepicker uses customized default values.</p>\n\n<ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdDatepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerConfig", function() { return NgbdDatepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerConfig = /** @class */ (function () {
    function NgbdDatepickerConfig(config, calendar) {
        // customize default values of datepickers used by this component tree
        config.minDate = { year: 1900, month: 1, day: 1 };
        config.maxDate = { year: 2099, month: 12, day: 31 };
        // days that don't belong to current month are not visible
        config.outsideDays = 'hidden';
        // weekends are disabled
        config.markDisabled = function (date) { return calendar.getWeekday(date) >= 6; };
    }
    NgbdDatepickerConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-config',
            template: __webpack_require__(/*! ./datepicker-config.html */ "./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerConfig"]] // add NgbDatepickerConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerConfig);
    return NgbdDatepickerConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\n\n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n\n<ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n  <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.focused]=\"focused\"\n        [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n    {{ date.day }}\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.ts ***!
  \**************************************************************************************/
/*! exports provided: NgbdDatepickerCustomday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerCustomday", function() { return NgbdDatepickerCustomday; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerCustomday = /** @class */ (function () {
    function NgbdDatepickerCustomday(calendar) {
        var _this = this;
        this.calendar = calendar;
        this.isDisabled = function (date, current) { return date.month !== current.month; };
        this.isWeekend = function (date) { return _this.calendar.getWeekday(date) >= 6; };
    }
    NgbdDatepickerCustomday = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-customday',
            template: __webpack_require__(/*! ./datepicker-customday.html */ "./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.html"),
            styles: ["\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      border-radius: 0.25rem;\n      display: inline-block;\n      width: 2rem;\n    }\n    .custom-day:hover, .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .weekend {\n      background-color: #f0ad4e;\n      border-radius: 1rem;\n      color: white;\n    }\n    .hidden {\n      display: none;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerCustomday);
    return NgbdDatepickerCustomday;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Disabled datepicker</p>\n\n<ngb-datepicker [(ngModel)]=\"model\" [disabled]=\"disabled\"></ngb-datepicker>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n  {{ disabled ? \"disabled\" : \"enabled\"}}\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdDatepickerDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerDisabled", function() { return NgbdDatepickerDisabled; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerDisabled = /** @class */ (function () {
    function NgbdDatepickerDisabled(calendar) {
        this.disabled = true;
        this.model = calendar.getToday();
    }
    NgbdDatepickerDisabled = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-disabled',
            template: __webpack_require__(/*! ./datepicker-disabled.html */ "./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerDisabled);
    return NgbdDatepickerDisabled;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Hebrew calendar</p>\n\n<ngb-datepicker class=\"rtl\" #dp [(ngModel)]=\"model\" [displayMonths]=\"2\" [firstDayOfWeek]=\"7\">\n</ngb-datepicker>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n\n<hr/>\n\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdDatepickerHebrew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerHebrew", function() { return NgbdDatepickerHebrew; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerHebrew = /** @class */ (function () {
    function NgbdDatepickerHebrew(calendar) {
        this.calendar = calendar;
    }
    NgbdDatepickerHebrew.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    NgbdDatepickerHebrew = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-hebrew',
            template: __webpack_require__(/*! ./datepicker-hebrew.html */ "./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarHebrew"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18nHebrew"] }
            ]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerHebrew);
    return NgbdDatepickerHebrew;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-alert [dismissible]=\"false\">\n  If you configure the locale and register the locale data as explained in the\n  <a href=\"https://angular.io/guide/i18n\">i18n guide</a>, the date picker will honor\n  the locale and use days and months names from the locale data. You can however\n  provide a custom service, as demonstrated in this example, to customize the\n  days and months names the way you want to.\n</ngb-alert>\n\n<p>Datepicker in French</p>\n\n<ngb-datepicker [(ngModel)]=\"model\"></ngb-datepicker>\n\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.ts ***!
  \****************************************************************************/
/*! exports provided: I18n, CustomDatepickerI18n, NgbdDatepickerI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerI18n", function() { return NgbdDatepickerI18n; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    'fr': {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'fr';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var NgbdDatepickerI18n = /** @class */ (function () {
    function NgbdDatepickerI18n() {
    }
    NgbdDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-i18n',
            template: __webpack_require__(/*! ./datepicker-i18n.html */ "./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.html"),
            providers: [I18n, { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
        })
    ], NgbdDatepickerI18n);
    return NgbdDatepickerI18n;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/index.ts ***!
  \*************************************************************/
/*! exports provided: DATEPICKER_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATEPICKER_DIRECTIVES", function() { return DATEPICKER_DIRECTIVES; });
/* harmony import */ var _adapter_datepicker_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter/datepicker-adapter */ "./src/app/components/ng-bootstrap/datepicker/adapter/datepicker-adapter.ts");
/* harmony import */ var _basic_datepicker_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/datepicker-basic */ "./src/app/components/ng-bootstrap/datepicker/basic/datepicker-basic.ts");
/* harmony import */ var _config_datepicker_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/datepicker-config */ "./src/app/components/ng-bootstrap/datepicker/config/datepicker-config.ts");
/* harmony import */ var _i18n_datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/datepicker-i18n */ "./src/app/components/ng-bootstrap/datepicker/i18n/datepicker-i18n.ts");
/* harmony import */ var _disabled_datepicker_disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled/datepicker-disabled */ "./src/app/components/ng-bootstrap/datepicker/disabled/datepicker-disabled.ts");
/* harmony import */ var _popup_datepicker_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/datepicker-popup */ "./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.ts");
/* harmony import */ var _customday_datepicker_customday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customday/datepicker-customday */ "./src/app/components/ng-bootstrap/datepicker/customday/datepicker-customday.ts");
/* harmony import */ var _multiple_datepicker_multiple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiple/datepicker-multiple */ "./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.ts");
/* harmony import */ var _calendars_datepicker_calendars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendars/datepicker-calendars */ "./src/app/components/ng-bootstrap/datepicker/calendars/datepicker-calendars.ts");
/* harmony import */ var _range_datepicker_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./range/datepicker-range */ "./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.ts");
/* harmony import */ var _hebrew_datepicker_hebrew__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hebrew/datepicker-hebrew */ "./src/app/components/ng-bootstrap/datepicker/hebrew/datepicker-hebrew.ts");
/* harmony import */ var _jalali_datepicker_jalali__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jalali/datepicker-jalali */ "./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.ts");












var DATEPICKER_DIRECTIVES = [
    _basic_datepicker_basic__WEBPACK_IMPORTED_MODULE_1__["NgbdDatepickerBasic"],
    _popup_datepicker_popup__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerPopup"],
    _disabled_datepicker_disabled__WEBPACK_IMPORTED_MODULE_4__["NgbdDatepickerDisabled"],
    _i18n_datepicker_i18n__WEBPACK_IMPORTED_MODULE_3__["NgbdDatepickerI18n"],
    _customday_datepicker_customday__WEBPACK_IMPORTED_MODULE_6__["NgbdDatepickerCustomday"],
    _config_datepicker_config__WEBPACK_IMPORTED_MODULE_2__["NgbdDatepickerConfig"],
    _multiple_datepicker_multiple__WEBPACK_IMPORTED_MODULE_7__["NgbdDatepickerMultiple"],
    _calendars_datepicker_calendars__WEBPACK_IMPORTED_MODULE_8__["NgbdDatepickerCalendars"],
    _range_datepicker_range__WEBPACK_IMPORTED_MODULE_9__["NgbdDatepickerRange"],
    _calendars_datepicker_calendars__WEBPACK_IMPORTED_MODULE_8__["NgbdIslamicCivil"],
    _calendars_datepicker_calendars__WEBPACK_IMPORTED_MODULE_8__["NgbdIslamicUmalqura"],
    _adapter_datepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgbdDatepickerAdapter"],
    _hebrew_datepicker_hebrew__WEBPACK_IMPORTED_MODULE_10__["NgbdDatepickerHebrew"],
    _jalali_datepicker_jalali__WEBPACK_IMPORTED_MODULE_11__["NgbdDatepickerJalali"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Persian calendar</p>\n\n<ngb-datepicker #dp [(ngModel)]=\"model\"\n                (navigate)=\"date = $event.next\"\n                [firstDayOfWeek]=\"6\">\n</ngb-datepicker>\n\n<hr/>\n\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 1396, month: 4})\">To Tir. 1396</button>\n\n<hr/>\n\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.ts ***!
  \********************************************************************************/
/*! exports provided: NgbDatepickerI18nPersian, NgbdDatepickerJalali */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nPersian", function() { return NgbDatepickerI18nPersian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerJalali", function() { return NgbdDatepickerJalali; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
var MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
var NgbDatepickerI18nPersian = /** @class */ (function (_super) {
    __extends(NgbDatepickerI18nPersian, _super);
    function NgbDatepickerI18nPersian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nPersian.prototype.getWeekdayShortName = function (weekday) { return WEEKDAYS_SHORT[weekday - 1]; };
    NgbDatepickerI18nPersian.prototype.getMonthShortName = function (month) { return MONTHS[month - 1]; };
    NgbDatepickerI18nPersian.prototype.getMonthFullName = function (month) { return MONTHS[month - 1]; };
    NgbDatepickerI18nPersian.prototype.getDayAriaLabel = function (date) { return date.year + "-" + this.getMonthFullName(date.month) + "-" + date.day; };
    NgbDatepickerI18nPersian = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbDatepickerI18nPersian);
    return NgbDatepickerI18nPersian;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var NgbdDatepickerJalali = /** @class */ (function () {
    function NgbdDatepickerJalali(calendar) {
        this.calendar = calendar;
    }
    NgbdDatepickerJalali.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    NgbdDatepickerJalali = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-jalali',
            template: __webpack_require__(/*! ./datepicker-jalali.html */ "./src/app/components/ng-bootstrap/datepicker/jalali/datepicker-jalali.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendarPersian"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: NgbDatepickerI18nPersian }
            ]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerJalali);
    return NgbdDatepickerJalali;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"\n                [showWeekNumbers]=\"showWeekNumbers\" [outsideDays]=\"outsideDays\">\n</ngb-datepicker>\n\n<hr/>\n\n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" [outsideDays]=\"outsideDays\"\n             [showWeekNumbers]=\"showWeekNumbers\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n\n<hr/>\n\n<div class=\"d-flex flex-wrap align-content-between p-2\">\n  <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\n    <option [ngValue]=\"1\">One month</option>\n    <option [ngValue]=\"2\">Two months</option>\n    <option [ngValue]=\"3\">Three months</option>\n  </select>\n\n  <select class=\"custom-select\" [(ngModel)]=\"navigation\">\n    <option value=\"none\">Without navigation</option>\n    <option value=\"select\">With select boxes</option>\n    <option value=\"arrows\">Without select boxes</option>\n  </select>\n\n  <select class=\"custom-select\" [(ngModel)]=\"showWeekNumbers\">\n    <option [ngValue]=\"true\">Week numbers</option>\n    <option [ngValue]=\"false\">No week numbers</option>\n  </select>\n\n  <select class=\"custom-select\" [(ngModel)]=\"outsideDays\">\n    <option value=\"visible\">Visible outside days</option>\n    <option value=\"hidden\">Hidden outside days</option>\n    <option value=\"collapsed\">Collapsed outside days</option>\n  </select>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdDatepickerMultiple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerMultiple", function() { return NgbdDatepickerMultiple; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDatepickerMultiple = /** @class */ (function () {
    function NgbdDatepickerMultiple() {
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        this.outsideDays = 'visible';
    }
    NgbdDatepickerMultiple = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-multiple',
            template: __webpack_require__(/*! ./datepicker-multiple.html */ "./src/app/components/ng-bootstrap/datepicker/multiple/datepicker-multiple.html"),
            styles: ["\n    select.custom-select {\n      margin: 0.5rem 0.5rem 0 0;\n      width: auto;\n    }\n  "]
        })
    ], NgbdDatepickerMultiple);
    return NgbdDatepickerMultiple;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n\n<hr/>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdDatepickerPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerPopup", function() { return NgbdDatepickerPopup; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDatepickerPopup = /** @class */ (function () {
    function NgbdDatepickerPopup() {
    }
    NgbdDatepickerPopup = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-popup',
            template: __webpack_require__(/*! ./datepicker-popup.html */ "./src/app/components/ng-bootstrap/datepicker/popup/datepicker-popup.html")
        })
    ], NgbdDatepickerPopup);
    return NgbdDatepickerPopup;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Example of the range selection</p>\n\n<ngb-datepicker #dp (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\n</ngb-datepicker>\n\n<ng-template #t let-date=\"date\" let-focused=\"focused\">\n  <span class=\"custom-day\"\n        [class.focused]=\"focused\"\n        [class.range]=\"isRange(date)\"\n        [class.faded]=\"isHovered(date) || isInside(date)\"\n        (mouseenter)=\"hoveredDate = date\"\n        (mouseleave)=\"hoveredDate = null\">\n    {{ date.day }}\n  </span>\n</ng-template>\n\n<hr>\n\n<pre>From: {{ fromDate | json }} </pre>\n<pre>To: {{ toDate | json }} </pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdDatepickerRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerRange", function() { return NgbdDatepickerRange; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDatepickerRange = /** @class */ (function () {
    function NgbdDatepickerRange(calendar) {
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    NgbdDatepickerRange.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    NgbdDatepickerRange.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    NgbdDatepickerRange.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    NgbdDatepickerRange.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    NgbdDatepickerRange = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-datepicker-range',
            template: __webpack_require__(/*! ./datepicker-range.html */ "./src/app/components/ng-bootstrap/datepicker/range/datepicker-range.html"),
            styles: ["\n    .custom-day {\n      text-align: center;\n      padding: 0.185rem 0.25rem;\n      display: inline-block;\n      height: 2rem;\n      width: 2rem;\n    }\n    .custom-day.focused {\n      background-color: #e6e6e6;\n    }\n    .custom-day.range, .custom-day:hover {\n      background-color: rgb(2, 117, 216);\n      color: white;\n    }\n    .custom-day.faded {\n      background-color: rgba(2, 117, 216, 0.5);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerRange);
    return NgbdDatepickerRange;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col text-right\">\n    <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdDropdownBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasic", function() { return NgbdDropdownBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownBasic = /** @class */ (function () {
    function NgbdDropdownBasic() {
    }
    NgbdDropdownBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-basic',
            template: __webpack_require__(/*! ./dropdown-basic.html */ "./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.html")
        })
    ], NgbdDropdownBasic);
    return NgbdDropdownBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This dropdown uses customized default values.</p>\n\n<div ngbDropdown>\n  <button class=\"btn btn-outline-primary\" id=\"dropdownConfig\" ngbDropdownToggle>Toggle</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n    <button class=\"dropdown-item\">Action - 1</button>\n    <button class=\"dropdown-item\">Another Action</button>\n    <button class=\"dropdown-item\">Something else is here</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdDropdownConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownConfig", function() { return NgbdDropdownConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdDropdownConfig = /** @class */ (function () {
    function NgbdDropdownConfig(config) {
        // customize default values of dropdowns used by this component tree
        config.placement = 'top-left';
        config.autoClose = false;
    }
    NgbdDropdownConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-config',
            template: __webpack_require__(/*! ./dropdown-config.html */ "./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]] // add NgbDropdownConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])
    ], NgbdDropdownConfig);
    return NgbdDropdownConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/index.ts ***!
  \***********************************************************/
/*! exports provided: DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_DIRECTIVES", function() { return DROPDOWN_DIRECTIVES; });
/* harmony import */ var _basic_dropdown_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/dropdown-basic */ "./src/app/components/ng-bootstrap/dropdown/basic/dropdown-basic.ts");
/* harmony import */ var _config_dropdown_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/dropdown-config */ "./src/app/components/ng-bootstrap/dropdown/config/dropdown-config.ts");
/* harmony import */ var _manual_dropdown_manual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual/dropdown-manual */ "./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.ts");
/* harmony import */ var _split_dropdown_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./split/dropdown-split */ "./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.ts");




var DROPDOWN_DIRECTIVES = [
    _basic_dropdown_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdDropdownBasic"],
    _config_dropdown_config__WEBPACK_IMPORTED_MODULE_1__["NgbdDropdownConfig"],
    _manual_dropdown_manual__WEBPACK_IMPORTED_MODULE_2__["NgbdDropdownManual"],
    _split_dropdown_split__WEBPACK_IMPORTED_MODULE_3__["NgbdDropdownSplit"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n\n<div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\n  <button class=\"btn btn-outline-primary mr-2\" id=\"dropdownManual\" ngbDropdownAnchor (focus)=\"myDrop.open()\">Toggle dropdown</button>\n  <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\n    <button class=\"dropdown-item\">Action - 1</button>\n    <button class=\"dropdown-item\">Another Action</button>\n    <button class=\"dropdown-item\">Something else is here</button>\n  </div>\n\n  <button class=\"btn btn-outline-success mr-2\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\n  <button class=\"btn btn-outline-danger mr-2\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdDropdownManual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownManual", function() { return NgbdDropdownManual; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownManual = /** @class */ (function () {
    function NgbdDropdownManual() {
    }
    NgbdDropdownManual = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-manual',
            template: __webpack_require__(/*! ./dropdown-manual.html */ "./src/app/components/ng-bootstrap/dropdown/manual/dropdown-manual.html")
        })
    ], NgbdDropdownManual);
    return NgbdDropdownManual;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Bootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.</p>\n\n<div class=\"btn-group mr-3\">\n  <button type=\"button\" class=\"btn btn-outline-success\">Plain ol' button</button>\n  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Drop me</button>\n    <div class=\"dropdown-menu\" ngbDropdownMenu>\n      <button class=\"dropdown-item\">One</button>\n      <button class=\"dropdown-item\">Two</button>\n      <button class=\"dropdown-item\">Four!</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"btn-group mr-3\">\n  <button type=\"button\" class=\"btn btn-primary\">Split me</button>\n  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle></button>\n    <div class=\"dropdown-menu\" ngbDropdownMenu>\n      <button class=\"dropdown-item\">One</button>\n      <button class=\"dropdown-item\">Two</button>\n      <button class=\"dropdown-item\">Four!</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"btn-group mr-3\">\n  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button class=\"btn btn-outline-danger\" ngbDropdownToggle>Select me</button>\n    <div class=\"dropdown-menu\" ngbDropdownMenu>\n      <button class=\"dropdown-item\">One</button>\n      <button class=\"dropdown-item\">Two</button>\n      <button class=\"dropdown-item\">Four!</button>\n    </div>\n  </div>\n  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n    <button class=\"btn btn-outline-success\" ngbDropdownToggle>Or me</button>\n    <div class=\"dropdown-menu\" ngbDropdownMenu>\n      <button class=\"dropdown-item\">One</button>\n      <button class=\"dropdown-item\">Two</button>\n      <button class=\"dropdown-item\">Four!</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdDropdownSplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownSplit", function() { return NgbdDropdownSplit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownSplit = /** @class */ (function () {
    function NgbdDropdownSplit() {
    }
    NgbdDropdownSplit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-dropdown-split',
            template: __webpack_require__(/*! ./dropdown-split.html */ "./src/app/components/ng-bootstrap/dropdown/split/dropdown-split.html")
        })
    ], NgbdDropdownSplit);
    return NgbdDropdownSplit;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/index.ts":
/*!**************************************************!*\
  !*** ./src/app/components/ng-bootstrap/index.ts ***!
  \**************************************************/
/*! exports provided: NgbdDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDemoModule", function() { return NgbdDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion */ "./src/app/components/ng-bootstrap/accordion/index.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert */ "./src/app/components/ng-bootstrap/alert/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons */ "./src/app/components/ng-bootstrap/buttons/index.ts");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel */ "./src/app/components/ng-bootstrap/carousel/index.ts");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapse */ "./src/app/components/ng-bootstrap/collapse/index.ts");
/* harmony import */ var _datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datepicker */ "./src/app/components/ng-bootstrap/datepicker/index.ts");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown */ "./src/app/components/ng-bootstrap/dropdown/index.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal */ "./src/app/components/ng-bootstrap/modal/index.ts");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagination */ "./src/app/components/ng-bootstrap/pagination/index.ts");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover */ "./src/app/components/ng-bootstrap/popover/index.ts");
/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progressbar */ "./src/app/components/ng-bootstrap/progressbar/index.ts");
/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rating */ "./src/app/components/ng-bootstrap/rating/index.ts");
/* harmony import */ var _tabset__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabset */ "./src/app/components/ng-bootstrap/tabset/index.ts");
/* harmony import */ var _timepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timepicker */ "./src/app/components/ng-bootstrap/timepicker/index.ts");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tooltip */ "./src/app/components/ng-bootstrap/tooltip/index.ts");
/* harmony import */ var _typeahead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typeahead */ "./src/app/components/ng-bootstrap/typeahead/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var NgbdDemoModule = /** @class */ (function () {
    function NgbdDemoModule() {
    }
    NgbdDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            exports: _accordion__WEBPACK_IMPORTED_MODULE_4__["ACCORDION_DIRECTIVES"].concat(_alert__WEBPACK_IMPORTED_MODULE_5__["ALERT_DIRECTIVES"], _buttons__WEBPACK_IMPORTED_MODULE_6__["BUTTONS_DIRECTIVES"], _carousel__WEBPACK_IMPORTED_MODULE_7__["CAROUSEL_DIRECTIVES"], _collapse__WEBPACK_IMPORTED_MODULE_8__["COLLAPSE_DIRECTIVES"], _datepicker__WEBPACK_IMPORTED_MODULE_9__["DATEPICKER_DIRECTIVES"], _datepicker__WEBPACK_IMPORTED_MODULE_9__["DATEPICKER_DIRECTIVES"], _dropdown__WEBPACK_IMPORTED_MODULE_10__["DROPDOWN_DIRECTIVES"], _modal__WEBPACK_IMPORTED_MODULE_11__["MODAL_DIRECTIVES"], _pagination__WEBPACK_IMPORTED_MODULE_12__["PAGINATION_DIRECTIVES"], _popover__WEBPACK_IMPORTED_MODULE_13__["POPOVER_DIRECTIVES"], _progressbar__WEBPACK_IMPORTED_MODULE_14__["PROGRESSBAR_DIRECTIVES"], _rating__WEBPACK_IMPORTED_MODULE_15__["RATING_DIRECTIVES"], _tabset__WEBPACK_IMPORTED_MODULE_16__["TABSET_DIRECTIVES"], _timepicker__WEBPACK_IMPORTED_MODULE_17__["TIMEPICKER_DIRECTIVES"], _tooltip__WEBPACK_IMPORTED_MODULE_18__["TOOLTIP_DIRECTIVES"], _typeahead__WEBPACK_IMPORTED_MODULE_19__["TYPEAHEAD_DIRECTIVES"]),
            declarations: _accordion__WEBPACK_IMPORTED_MODULE_4__["ACCORDION_DIRECTIVES"].concat(_alert__WEBPACK_IMPORTED_MODULE_5__["ALERT_DIRECTIVES"], _buttons__WEBPACK_IMPORTED_MODULE_6__["BUTTONS_DIRECTIVES"], _carousel__WEBPACK_IMPORTED_MODULE_7__["CAROUSEL_DIRECTIVES"], _collapse__WEBPACK_IMPORTED_MODULE_8__["COLLAPSE_DIRECTIVES"], _datepicker__WEBPACK_IMPORTED_MODULE_9__["DATEPICKER_DIRECTIVES"], _datepicker__WEBPACK_IMPORTED_MODULE_9__["DATEPICKER_DIRECTIVES"], _dropdown__WEBPACK_IMPORTED_MODULE_10__["DROPDOWN_DIRECTIVES"], _modal__WEBPACK_IMPORTED_MODULE_11__["MODAL_DIRECTIVES"], _pagination__WEBPACK_IMPORTED_MODULE_12__["PAGINATION_DIRECTIVES"], _popover__WEBPACK_IMPORTED_MODULE_13__["POPOVER_DIRECTIVES"], _progressbar__WEBPACK_IMPORTED_MODULE_14__["PROGRESSBAR_DIRECTIVES"], _rating__WEBPACK_IMPORTED_MODULE_15__["RATING_DIRECTIVES"], _tabset__WEBPACK_IMPORTED_MODULE_16__["TABSET_DIRECTIVES"], _timepicker__WEBPACK_IMPORTED_MODULE_17__["TIMEPICKER_DIRECTIVES"], _tooltip__WEBPACK_IMPORTED_MODULE_18__["TOOLTIP_DIRECTIVES"], _typeahead__WEBPACK_IMPORTED_MODULE_19__["TYPEAHEAD_DIRECTIVES"], [
                _modal__WEBPACK_IMPORTED_MODULE_11__["NgbdModalContent"]
            ]),
            entryComponents: [_modal__WEBPACK_IMPORTED_MODULE_11__["NgbdModalContent"]]
        })
    ], NgbdDemoModule);
    return NgbdDemoModule;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/basic/modal-basic.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/basic/modal-basic.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"dateOfBirth\">Date of birth</label>\n        <div class=\"input-group\">\n          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n\n<hr>\n\n<pre>{{closeResult}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/basic/modal-basic.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/basic/modal-basic.ts ***!
  \********************************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.html */ "./src/app/components/ng-bootstrap/modal/basic/modal-basic.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/component/modal-component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/component/modal-component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/component/modal-component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/component/modal-component.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal-component.html */ "./src/app/components/ng-bootstrap/modal/component/modal-component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/config/modal-config.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/config/modal-config.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Hi there!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Hello, World!</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/config/modal-config.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/config/modal-config.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdModalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalConfig", function() { return NgbdModalConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalConfig = /** @class */ (function () {
    function NgbdModalConfig(config, modalService) {
        this.modalService = modalService;
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    NgbdModalConfig.prototype.open = function (content) {
        this.modalService.open(content);
    };
    NgbdModalConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-config',
            template: __webpack_require__(/*! ./modal-config.html */ "./src/app/components/ng-bootstrap/modal/config/modal-config.html"),
            // add NgbModalConfig and NgbModal to the component providers
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalConfig);
    return NgbdModalConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdModalCustomclassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalCustomclassComponent", function() { return NgbdModalCustomclassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalCustomclassComponent = /** @class */ (function () {
    function NgbdModalCustomclassComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalCustomclassComponent.prototype.open = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalCustomclassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-customclass',
            template: __webpack_require__(/*! ./modal-customclass.html */ "./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalCustomclassComponent);
    return NgbdModalCustomclassComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/index.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/index.ts ***!
  \********************************************************/
/*! exports provided: MODAL_DIRECTIVES, NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_DIRECTIVES", function() { return MODAL_DIRECTIVES; });
/* harmony import */ var _basic_modal_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/modal-basic */ "./src/app/components/ng-bootstrap/modal/basic/modal-basic.ts");
/* harmony import */ var _component_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/modal-component */ "./src/app/components/ng-bootstrap/modal/component/modal-component.ts");
/* harmony import */ var _customclass_modal_customclass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customclass/modal-customclass */ "./src/app/components/ng-bootstrap/modal/customclass/modal-customclass.ts");
/* harmony import */ var _config_modal_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/modal-config */ "./src/app/components/ng-bootstrap/modal/config/modal-config.ts");
/* harmony import */ var _options_modal_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/modal-options */ "./src/app/components/ng-bootstrap/modal/options/modal-options.ts");
/* harmony import */ var _stacked_modal_stacked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacked/modal-stacked */ "./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return _component_modal_component__WEBPACK_IMPORTED_MODULE_1__["NgbdModalContent"]; });







var MODAL_DIRECTIVES = [
    _basic_modal_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdModalBasic"],
    _component_modal_component__WEBPACK_IMPORTED_MODULE_1__["NgbdModalComponent"],
    _customclass_modal_customclass__WEBPACK_IMPORTED_MODULE_2__["NgbdModalCustomclassComponent"],
    _config_modal_config__WEBPACK_IMPORTED_MODULE_3__["NgbdModalConfig"],
    _options_modal_options__WEBPACK_IMPORTED_MODULE_4__["NgbdModalOptions"],
    _stacked_modal_stacked__WEBPACK_IMPORTED_MODULE_5__["NgbdModalStacked"],
    _stacked_modal_stacked__WEBPACK_IMPORTED_MODULE_5__["NgbdModal1Content"],
    _stacked_modal_stacked__WEBPACK_IMPORTED_MODULE_5__["NgbdModal2Content"]
];



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/options/modal-options.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/options/modal-options.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine body&hellip;</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content)\">Modal with window custom class</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content)\">Modal with backdrop custom class</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content)\">Small modal</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Large modal</button>\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Modal vertically centered</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/options/modal-options.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/options/modal-options.ts ***!
  \************************************************************************/
/*! exports provided: NgbdModalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalOptions", function() { return NgbdModalOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalOptions = /** @class */ (function () {
    function NgbdModalOptions(modalService) {
        this.modalService = modalService;
    }
    NgbdModalOptions.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    NgbdModalOptions.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalOptions.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    NgbdModalOptions.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    NgbdModalOptions.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    NgbdModalOptions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-options',
            template: __webpack_require__(/*! ./modal-options.html */ "./src/app/components/ng-bootstrap/modal/options/modal-options.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalOptions);
    return NgbdModalOptions;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.ts ***!
  \************************************************************************/
/*! exports provided: NgbdModal1Content, NgbdModal2Content, NgbdModalStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModal1Content", function() { return NgbdModal1Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModal2Content", function() { return NgbdModal2Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalStacked", function() { return NgbdModalStacked; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModal1Content = /** @class */ (function () {
    function NgbdModal1Content(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    NgbdModal1Content.prototype.open = function () {
        this.modalService.open(NgbdModal2Content, {
            size: 'lg'
        });
    };
    NgbdModal1Content = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n      <p><button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button></p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModal1Content);
    return NgbdModal1Content;
}());

var NgbdModal2Content = /** @class */ (function () {
    function NgbdModal2Content(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModal2Content = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi there!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, World!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModal2Content);
    return NgbdModal2Content;
}());

var NgbdModalStacked = /** @class */ (function () {
    function NgbdModalStacked(modalService) {
        this.modalService = modalService;
    }
    NgbdModalStacked.prototype.open = function () {
        this.modalService.open(NgbdModal1Content);
    };
    NgbdModalStacked = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-stacked',
            template: __webpack_require__(/*! ./modal-stacked.html */ "./src/app/components/ng-bootstrap/modal/stacked/modal-stacked.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalStacked);
    return NgbdModalStacked;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Restricted size, no rotation:</p>\n<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n<p>Restricted size with rotation:</p>\n<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n<p>Restricted size with rotation and no ellipses:</p>\n<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n<hr>\n\n<pre>Current page: {{page}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdPaginationAdvanced */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationAdvanced", function() { return NgbdPaginationAdvanced; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPaginationAdvanced = /** @class */ (function () {
    function NgbdPaginationAdvanced() {
        this.page = 1;
    }
    NgbdPaginationAdvanced = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-advanced',
            template: __webpack_require__(/*! ./pagination-advanced.html */ "./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.html")
        })
    ], NgbdPaginationAdvanced);
    return NgbdPaginationAdvanced;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Default pagination:</p>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n\n<p>No direction links:</p>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n\n<p>With boundary links:</p>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n<hr>\n\n<pre>Current page: {{page}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdPaginationBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationBasic", function() { return NgbdPaginationBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPaginationBasic = /** @class */ (function () {
    function NgbdPaginationBasic() {
        this.page = 4;
    }
    NgbdPaginationBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-basic',
            template: __webpack_require__(/*! ./pagination-basic.html */ "./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.html")
        })
    ], NgbdPaginationBasic);
    return NgbdPaginationBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/config/pagination-config.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/config/pagination-config.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This pagination uses custom default values</p>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/config/pagination-config.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/config/pagination-config.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationConfig", function() { return NgbdPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdPaginationConfig = /** @class */ (function () {
    function NgbdPaginationConfig(config) {
        this.page = 4;
        // customize default values of paginations used by this component tree
        config.size = 'sm';
        config.boundaryLinks = true;
    }
    NgbdPaginationConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-config',
            template: __webpack_require__(/*! ./pagination-config.html */ "./src/app/components/ng-bootstrap/pagination/config/pagination-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]] // add NgbPaginationConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationConfig"]])
    ], NgbdPaginationConfig);
    return NgbdPaginationConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Pagination control can be disabled:</p>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [disabled]='isDisabled'></ngb-pagination>\n<hr>\n<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n  Toggle disabled\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdPaginationDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationDisabled", function() { return NgbdPaginationDisabled; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPaginationDisabled = /** @class */ (function () {
    function NgbdPaginationDisabled() {
        this.page = 3;
        this.isDisabled = true;
    }
    NgbdPaginationDisabled.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    NgbdPaginationDisabled = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-disabled',
            template: __webpack_require__(/*! ./pagination-disabled.html */ "./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.html")
        })
    ], NgbdPaginationDisabled);
    return NgbdPaginationDisabled;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/index.ts ***!
  \*************************************************************/
/*! exports provided: PAGINATION_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_DIRECTIVES", function() { return PAGINATION_DIRECTIVES; });
/* harmony import */ var _advanced_pagination_advanced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced/pagination-advanced */ "./src/app/components/ng-bootstrap/pagination/advanced/pagination-advanced.ts");
/* harmony import */ var _basic_pagination_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/pagination-basic */ "./src/app/components/ng-bootstrap/pagination/basic/pagination-basic.ts");
/* harmony import */ var _size_pagination_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size/pagination-size */ "./src/app/components/ng-bootstrap/pagination/size/pagination-size.ts");
/* harmony import */ var _config_pagination_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/pagination-config */ "./src/app/components/ng-bootstrap/pagination/config/pagination-config.ts");
/* harmony import */ var _disabled_pagination_disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled/pagination-disabled */ "./src/app/components/ng-bootstrap/pagination/disabled/pagination-disabled.ts");
/* harmony import */ var _justify_pagination_justify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./justify/pagination-justify */ "./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.ts");






var PAGINATION_DIRECTIVES = [
    _advanced_pagination_advanced__WEBPACK_IMPORTED_MODULE_0__["NgbdPaginationAdvanced"],
    _basic_pagination_basic__WEBPACK_IMPORTED_MODULE_1__["NgbdPaginationBasic"],
    _size_pagination_size__WEBPACK_IMPORTED_MODULE_2__["NgbdPaginationSize"],
    _config_pagination_config__WEBPACK_IMPORTED_MODULE_3__["NgbdPaginationConfig"],
    _disabled_pagination_disabled__WEBPACK_IMPORTED_MODULE_4__["NgbdPaginationDisabled"],
    _justify_pagination_justify__WEBPACK_IMPORTED_MODULE_5__["NgbdPaginationJustify"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>Change the alignment of pagination components with flexbox utilities.</p>\n<ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n<ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n<ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\n\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdPaginationJustify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationJustify", function() { return NgbdPaginationJustify; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPaginationJustify = /** @class */ (function () {
    function NgbdPaginationJustify() {
        this.page = 4;
    }
    NgbdPaginationJustify = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-justify',
            template: __webpack_require__(/*! ./pagination-justify.html */ "./src/app/components/ng-bootstrap/pagination/justify/pagination-justify.html")
        })
    ], NgbdPaginationJustify);
    return NgbdPaginationJustify;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/size/pagination-size.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/size/pagination-size.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/pagination/size/pagination-size.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/pagination/size/pagination-size.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdPaginationSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPaginationSize", function() { return NgbdPaginationSize; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPaginationSize = /** @class */ (function () {
    function NgbdPaginationSize() {
        this.currentPage = 3;
    }
    NgbdPaginationSize = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination-size',
            template: __webpack_require__(/*! ./pagination-size.html */ "./src/app/components/ng-bootstrap/pagination/size/pagination-size.html")
        })
    ], NgbdPaginationSize);
    return NgbdPaginationSize;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>As for some other popup-based widgets, you can set the popover to close automatically upon some events.</p>\n<p>In the following examples, they will all close on <code>Escape</code> as well as:</p>\n\n<ul>\n  <li class=\"mb-2\">\n    click inside:\n    <button\n      type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n      [autoClose]=\"'inside'\" ngbPopover=\"Click inside or press Escape to close\"\n    >\n        Click to toggle\n    </button>\n  </li>\n\n  <li class=\"mb-2\">\n    click outside:\n    <button\n      type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n      [autoClose]=\"'outside'\" ngbPopover=\"Click outside or press Escape to close\"\n    >\n      Click to toggle\n    </button>\n  </li>\n\n  <li class=\"mb-2\">\n      all clicks:\n      <button\n        type=\"button\" class=\"btn btn-outline-secondary\" popoverTitle=\"Pop title\"\n        [autoClose]=\"true\" ngbPopover=\"Click anywhere or press Escape to close (try the toggling element too)\"\n        #popover3=\"ngbPopover\"\n      >\n          Click to toggle\n      </button>\n      &nbsp;\n      <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"popover3.toggle()\">\n        Click to toggle the external popover\n      </button>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdPopoverAutoclose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverAutoclose", function() { return NgbdPopoverAutoclose; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverAutoclose = /** @class */ (function () {
    function NgbdPopoverAutoclose() {
    }
    NgbdPopoverAutoclose = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-autoclose',
            template: __webpack_require__(/*! ./popover-autoclose.html */ "./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.html")
        })
    ], NgbdPopoverAutoclose);
    return NgbdPopoverAutoclose;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/basic/popover-basic.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/basic/popover-basic.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"top\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n  Popover on top\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n  Popover on right\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n  Popover on bottom\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"left\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n  Popover on left\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/basic/popover-basic.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/basic/popover-basic.ts ***!
  \************************************************************************/
/*! exports provided: NgbdPopoverBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverBasic", function() { return NgbdPopoverBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverBasic = /** @class */ (function () {
    function NgbdPopoverBasic() {
    }
    NgbdPopoverBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-basic',
            template: __webpack_require__(/*! ./popover-basic.html */ "./src/app/components/ng-bootstrap/popover/basic/popover-basic.html")
        })
    ], NgbdPopoverBasic);
    return NgbdPopoverBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/config/popover-config.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/config/popover-config.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-secondary\"\n        ngbPopover=\"This popover gets its inputs from the customized configuration\" popoverTitle=\"Customized popover\">\n  Customized popover\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/config/popover-config.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/config/popover-config.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdPopoverConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverConfig", function() { return NgbdPopoverConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdPopoverConfig = /** @class */ (function () {
    function NgbdPopoverConfig(config) {
        // customize default values of popovers used by this component tree
        config.placement = 'right';
        config.triggers = 'hover';
    }
    NgbdPopoverConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-config',
            template: __webpack_require__(/*! ./popover-config.html */ "./src/app/components/ng-bootstrap/popover/config/popover-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]] // add NgbPopoverConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopoverConfig"]])
    ], NgbdPopoverConfig);
    return NgbdPopoverConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/container/popover-container.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/container/popover-container.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tSet the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\n</p>\n\n<div class=\"row\">\n\t<div class=\"card px-1 py-5\">\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary mb-2\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t\tDefault popover\n\t\t</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\tngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n\t\t\tPopover appended to body\n\t\t</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/container/popover-container.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/container/popover-container.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdPopoverContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverContainer", function() { return NgbdPopoverContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverContainer = /** @class */ (function () {
    function NgbdPopoverContainer() {
    }
    NgbdPopoverContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-container',
            template: __webpack_require__(/*! ./popover-container.html */ "./src/app/components/ng-bootstrap/popover/container/popover-container.html"),
            styles: ['.card { overflow: hidden }']
        })
    ], NgbdPopoverContainer);
    return NgbdPopoverContainer;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can optionally pass in a custom class via <code>popoverClass</code>\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary\" ngbPopover=\"Nice class!\"\n  popoverClass=\"my-custom-class\">\n  Popover with custom class\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdPopoverCustomclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverCustomclass", function() { return NgbdPopoverCustomclass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverCustomclass = /** @class */ (function () {
    function NgbdPopoverCustomclass() {
    }
    NgbdPopoverCustomclass = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-customclass',
            template: __webpack_require__(/*! ./popover-customclass.html */ "./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .my-custom-class {\n      background: aliceblue;\n      font-size: 125%;\n    }\n    .my-custom-class .arrow::after {\n      border-top-color: aliceblue;\n    }\n  "]
        })
    ], NgbdPopoverCustomclass);
    return NgbdPopoverCustomclass;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/index.ts ***!
  \**********************************************************/
/*! exports provided: POPOVER_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_DIRECTIVES", function() { return POPOVER_DIRECTIVES; });
/* harmony import */ var _basic_popover_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/popover-basic */ "./src/app/components/ng-bootstrap/popover/basic/popover-basic.ts");
/* harmony import */ var _tplcontent_popover_tplcontent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tplcontent/popover-tplcontent */ "./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.ts");
/* harmony import */ var _tplwithcontext_popover_tplwithcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tplwithcontext/popover-tplwithcontext */ "./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.ts");
/* harmony import */ var _triggers_popover_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triggers/popover-triggers */ "./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.ts");
/* harmony import */ var _visibility_popover_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visibility/popover-visibility */ "./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.ts");
/* harmony import */ var _container_popover_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/popover-container */ "./src/app/components/ng-bootstrap/popover/container/popover-container.ts");
/* harmony import */ var _config_popover_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/popover-config */ "./src/app/components/ng-bootstrap/popover/config/popover-config.ts");
/* harmony import */ var _autoclose_popover_autoclose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autoclose/popover-autoclose */ "./src/app/components/ng-bootstrap/popover/autoclose/popover-autoclose.ts");
/* harmony import */ var _customclass_popover_customclass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customclass/popover-customclass */ "./src/app/components/ng-bootstrap/popover/customclass/popover-customclass.ts");









var POPOVER_DIRECTIVES = [
    _basic_popover_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdPopoverBasic"],
    _tplcontent_popover_tplcontent__WEBPACK_IMPORTED_MODULE_1__["NgbdPopoverTplcontent"],
    _tplwithcontext_popover_tplwithcontext__WEBPACK_IMPORTED_MODULE_2__["NgbdPopoverTplwithcontext"],
    _triggers_popover_triggers__WEBPACK_IMPORTED_MODULE_3__["NgbdPopoverTriggers"],
    _visibility_popover_visibility__WEBPACK_IMPORTED_MODULE_4__["NgbdPopoverVisibility"],
    _container_popover_container__WEBPACK_IMPORTED_MODULE_5__["NgbdPopoverContainer"],
    _config_popover_config__WEBPACK_IMPORTED_MODULE_6__["NgbdPopoverConfig"],
    _autoclose_popover_autoclose__WEBPACK_IMPORTED_MODULE_7__["NgbdPopoverAutoclose"],
    _customclass_popover_customclass__WEBPACK_IMPORTED_MODULE_8__["NgbdPopoverCustomclass"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Popovers can contain any arbitrary HTML, Angular bindings and even directives!\n  Simply enclose desired content or title in a <code>&lt;ng-template&gt;</code> element.\n</p>\n\n<ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\n<ng-template #popTitle>Fancy <b>content!!</b></ng-template>\n<button type=\"button\" class=\"btn btn-outline-secondary\" [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\">\n  I've got markup and bindings in my popover!\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdPopoverTplcontent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverTplcontent", function() { return NgbdPopoverTplcontent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverTplcontent = /** @class */ (function () {
    function NgbdPopoverTplcontent() {
        this.name = 'World';
    }
    NgbdPopoverTplcontent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-tplcontent',
            template: __webpack_require__(/*! ./popover-tplcontent.html */ "./src/app/components/ng-bootstrap/popover/tplcontent/popover-tplcontent.html")
        })
    ], NgbdPopoverTplcontent);
    return NgbdPopoverTplcontent;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can optionally pass in a context when manually triggering a popover.\n</p>\n\n<ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n<ng-template #popTitle let-language=\"language\">Greeting in {{language}}</ng-template>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n  triggers=\"manual\" #p1=\"ngbPopover\" (click)=\"toggleWithGreeting(p1, 'Bonjour', 'French')\"\n>\n  French\n</button>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n  triggers=\"manual\" #p2=\"ngbPopover\" (click)=\"toggleWithGreeting(p2, 'Gutentag', 'German')\"\n>\n  German\n</button>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbPopover]=\"popContent\" [popoverTitle]=\"popTitle\"\n  triggers=\"manual\" #p3=\"ngbPopover\" (click)=\"toggleWithGreeting(p3, 'Hello', 'English')\"\n>\n  English\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.ts ***!
  \******************************************************************************************/
/*! exports provided: NgbdPopoverTplwithcontext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverTplwithcontext", function() { return NgbdPopoverTplwithcontext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverTplwithcontext = /** @class */ (function () {
    function NgbdPopoverTplwithcontext() {
        this.name = 'World';
    }
    NgbdPopoverTplwithcontext.prototype.toggleWithGreeting = function (popover, greeting, language) {
        if (popover.isOpen()) {
            popover.close();
        }
        else {
            popover.open({ greeting: greeting, language: language });
        }
    };
    NgbdPopoverTplwithcontext = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-tplwithcontext',
            template: __webpack_require__(/*! ./popover-tplwithcontext.html */ "./src/app/components/ng-bootstrap/popover/tplwithcontext/popover-tplwithcontext.html")
        })
    ], NgbdPopoverTplwithcontext);
    return NgbdPopoverTplwithcontext;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\n  Hover over me!\n</button>\n\n<hr>\n<p>\n  Alternatively you can take full manual control over popover opening / closing events.\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" ngbPopover=\"What a great tip!\" [autoClose]=\"false\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\n  Click me to open a popover\n</button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"p.close()\">\n  Click me to close a popover\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdPopoverTriggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverTriggers", function() { return NgbdPopoverTriggers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverTriggers = /** @class */ (function () {
    function NgbdPopoverTriggers() {
    }
    NgbdPopoverTriggers = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-triggers',
            template: __webpack_require__(/*! ./popover-triggers.html */ "./src/app/components/ng-bootstrap/popover/triggers/popover-triggers.html")
        })
    ], NgbdPopoverTriggers);
    return NgbdPopoverTriggers;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-secondary\" placement=\"top\"\n        ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\"\n        #popover=\"ngbPopover\" (shown)=\"recordShown()\" (hidden)=\"recordHidden()\">\n  Open Popover\n</button>\n\n<hr>\n\n<ul>\n  <li>Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code></li>\n  <li>Last shown at: <code>{{lastShown | date:'h:mm:ss'}}</code></li>\n  <li>Last hidden at: <code>{{lastHidden | date:'h:mm:ss'}}</code></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdPopoverVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopoverVisibility", function() { return NgbdPopoverVisibility; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopoverVisibility = /** @class */ (function () {
    function NgbdPopoverVisibility() {
    }
    NgbdPopoverVisibility.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    NgbdPopoverVisibility.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    NgbdPopoverVisibility = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-popover-visibility',
            template: __webpack_require__(/*! ./popover-visibility.html */ "./src/app/components/ng-bootstrap/popover/visibility/popover-visibility.html")
        })
    ], NgbdPopoverVisibility);
    return NgbdPopoverVisibility;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdProgressbarBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarBasic", function() { return NgbdProgressbarBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdProgressbarBasic = /** @class */ (function () {
    function NgbdProgressbarBasic() {
    }
    NgbdProgressbarBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-basic',
            template: __webpack_require__(/*! ./progressbar-basic.html */ "./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.html"),
            styles: ["\n    ngb-progressbar {\n      margin-top: 5rem;\n    }\n  "]
        })
    ], NgbdProgressbarBasic);
    return NgbdProgressbarBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This progress bar uses the customized default values.</p>\n<p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\n\n<p>This progress bar uses the customized default values, but changes the type using an input.</p>\n<p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdProgressbarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarConfig", function() { return NgbdProgressbarConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdProgressbarConfig = /** @class */ (function () {
    function NgbdProgressbarConfig(config) {
        // customize default values of progress bars used by this component tree
        config.max = 1000;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
        config.height = '20px';
    }
    NgbdProgressbarConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-config',
            template: __webpack_require__(/*! ./progressbar-config.html */ "./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]] // add the NgbProgressbarConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], NgbdProgressbarConfig);
    return NgbdProgressbarConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar></p>\n<p><ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar></p>\n<p><ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar></p>\n<p><ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar></p>"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdProgressbarHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarHeight", function() { return NgbdProgressbarHeight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdProgressbarHeight = /** @class */ (function () {
    function NgbdProgressbarHeight() {
        this.height = '20px';
    }
    NgbdProgressbarHeight = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-height',
            template: __webpack_require__(/*! ./progressbar-height.html */ "./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.html"),
            styles: ["\n    ngb-progressbar {\n      margin-top: 5rem;\n    }\n  "]
        })
    ], NgbdProgressbarHeight);
    return NgbdProgressbarHeight;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/index.ts ***!
  \**************************************************************/
/*! exports provided: PROGRESSBAR_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESSBAR_DIRECTIVES", function() { return PROGRESSBAR_DIRECTIVES; });
/* harmony import */ var _basic_progressbar_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/progressbar-basic */ "./src/app/components/ng-bootstrap/progressbar/basic/progressbar-basic.ts");
/* harmony import */ var _showvalue_progressbar_showvalue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showvalue/progressbar-showvalue */ "./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.ts");
/* harmony import */ var _striped_progressbar_striped__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./striped/progressbar-striped */ "./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.ts");
/* harmony import */ var _config_progressbar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/progressbar-config */ "./src/app/components/ng-bootstrap/progressbar/config/progressbar-config.ts");
/* harmony import */ var _labels_progressbar_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labels/progressbar-labels */ "./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.ts");
/* harmony import */ var _height_progressbar_height__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./height/progressbar-height */ "./src/app/components/ng-bootstrap/progressbar/height/progressbar-height.ts");






var PROGRESSBAR_DIRECTIVES = [
    _basic_progressbar_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdProgressbarBasic"],
    _showvalue_progressbar_showvalue__WEBPACK_IMPORTED_MODULE_1__["NgbdProgressbarShowvalue"],
    _striped_progressbar_striped__WEBPACK_IMPORTED_MODULE_2__["NgbdProgressbarStriped"],
    _config_progressbar_config__WEBPACK_IMPORTED_MODULE_3__["NgbdProgressbarConfig"],
    _labels_progressbar_labels__WEBPACK_IMPORTED_MODULE_4__["NgbdProgressbarLabels"],
    _height_progressbar_height__WEBPACK_IMPORTED_MODULE_5__["NgbdProgressbarHeight"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><ngb-progressbar type=\"success\" [value]=\"11\">&nbsp;&nbsp;11% Antenatal Care</ngb-progressbar></p>\n<p><ngb-progressbar type=\"info\" [value]=\"29\">&nbsp;&nbsp;29% Antenatal Care</ngb-progressbar></p>\n<p><ngb-progressbar type=\"warning\" [value]=\"17\">&nbsp;&nbsp;17% Immunization</ngb-progressbar></p>\n<p><ngb-progressbar type=\"danger\" [value]=\"13\">&nbsp;&nbsp;13% Family Planning</ngb-progressbar></p>\n<p><ngb-progressbar type=\"info\" [value]=\"30\">&nbsp;&nbsp;30% Child Health Monitoring</ngb-progressbar></p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdProgressbarLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarLabels", function() { return NgbdProgressbarLabels; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdProgressbarLabels = /** @class */ (function () {
    function NgbdProgressbarLabels() {
    }
    NgbdProgressbarLabels = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-labels',
            template: __webpack_require__(/*! ./progressbar-labels.html */ "./src/app/components/ng-bootstrap/progressbar/labels/progressbar-labels.html"),
            styles: ["\n    ngb-progressbar {\n      margin-top: 5rem;\n    }\n  "]
        })
    ], NgbdProgressbarLabels);
    return NgbdProgressbarLabels;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"11\"></ngb-progressbar></p>\n<p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"29\"></ngb-progressbar></p>\n<p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\n<p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.ts ***!
  \****************************************************************************************/
/*! exports provided: NgbdProgressbarShowvalue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarShowvalue", function() { return NgbdProgressbarShowvalue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdProgressbarShowvalue = /** @class */ (function () {
    function NgbdProgressbarShowvalue() {
    }
    NgbdProgressbarShowvalue = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-showvalue',
            template: __webpack_require__(/*! ./progressbar-showvalue.html */ "./src/app/components/ng-bootstrap/progressbar/showvalue/progressbar-showvalue.html"),
            styles: ["\n    ngb-progressbar {\n      margin-top: 5rem;\n    }\n  "]
        })
    ], NgbdProgressbarShowvalue);
    return NgbdProgressbarShowvalue;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\n<p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdProgressbarStriped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdProgressbarStriped", function() { return NgbdProgressbarStriped; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdProgressbarStriped = /** @class */ (function () {
    function NgbdProgressbarStriped() {
    }
    NgbdProgressbarStriped = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-progressbar-striped',
            template: __webpack_require__(/*! ./progressbar-striped.html */ "./src/app/components/ng-bootstrap/progressbar/striped/progressbar-striped.html")
        })
    ], NgbdProgressbarStriped);
    return NgbdProgressbarStriped;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/basic/rating-basic.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/basic/rating-basic.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n<hr>\n<pre>Rate: <b>{{currentRate}}</b></pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/basic/rating-basic.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/basic/rating-basic.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdRatingBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingBasic", function() { return NgbdRatingBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdRatingBasic = /** @class */ (function () {
    function NgbdRatingBasic() {
        this.currentRate = 8;
    }
    NgbdRatingBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-basic',
            template: __webpack_require__(/*! ./rating-basic.html */ "./src/app/components/ng-bootstrap/rating/basic/rating-basic.html")
        })
    ], NgbdRatingBasic);
    return NgbdRatingBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/config/rating-config.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/config/rating-config.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This rating uses customized default values.</p>\n\n<ngb-rating [rate]=\"3\"></ngb-rating>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/config/rating-config.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/config/rating-config.ts ***!
  \************************************************************************/
/*! exports provided: NgbdRatingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingConfig", function() { return NgbdRatingConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdRatingConfig = /** @class */ (function () {
    function NgbdRatingConfig(config) {
        // customize default values of ratings used by this component tree
        config.max = 5;
        config.readonly = true;
    }
    NgbdRatingConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-config',
            template: __webpack_require__(/*! ./rating-config.html */ "./src/app/components/ng-bootstrap/rating/config/rating-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]] // add NgbRatingConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])
    ], NgbdRatingConfig);
    return NgbdRatingConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\n\n<ng-template #t let-fill=\"fill\">\n  <span class=\"star\" [class.full]=\"fill === 100\">\n    <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n  </span>\n</ng-template>\n\n<ngb-rating [(rate)]=\"currentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n\n<hr>\n<pre>Rate: <b>{{currentRate}}</b></pre>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"currentRate = 1.35\">1.35</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"currentRate = 4.72\">4.72</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdRatingDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingDecimal", function() { return NgbdRatingDecimal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdRatingDecimal = /** @class */ (function () {
    function NgbdRatingDecimal() {
        this.currentRate = 3.14;
    }
    NgbdRatingDecimal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-decimal',
            template: __webpack_require__(/*! ./rating-decimal.html */ "./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.html"),
            styles: ["\n    .star {\n      position: relative;\n      display: inline-block;\n      font-size: 3rem;\n      color: #d3d3d3;\n    }\n    .full {\n      color: red;\n    }\n    .half {\n      position: absolute;\n      display: inline-block;\n      overflow: hidden;\n      color: red;\n    }\n  "]
        })
    ], NgbdRatingDecimal);
    return NgbdRatingDecimal;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/events/rating-events.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/events/rating-events.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n<hr>\n<pre>\nSelected: <b>{{selected}}</b>\nHovered: <b>{{hovered}}</b>\n</pre>\n<button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n  {{ readonly ? \"readonly\" : \"editable\"}}\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/events/rating-events.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/events/rating-events.ts ***!
  \************************************************************************/
/*! exports provided: NgbdRatingEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingEvents", function() { return NgbdRatingEvents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdRatingEvents = /** @class */ (function () {
    function NgbdRatingEvents() {
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
    }
    NgbdRatingEvents = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-events',
            template: __webpack_require__(/*! ./rating-events.html */ "./src/app/components/ng-bootstrap/rating/events/rating-events.html")
        })
    ], NgbdRatingEvents);
    return NgbdRatingEvents;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/form/rating-form.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/form/rating-form.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>NgModel and reactive forms can be used without the 'rate' binding</p>\n\n<div class=\"form-group\">\n  <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\n  <div class=\"form-text small\">\n    <div *ngIf=\"ctrl.valid\" class=\"text-success\">Thanks!</div>\n    <div *ngIf=\"ctrl.invalid\" class=\"text-danger\">Please rate us</div>\n  </div>\n</div>\n\n<hr>\n<pre>Model: <b>{{ ctrl.value }}</b></pre>\n<button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}} mr-2\" (click)=\"toggle()\">\n  {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\n</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"ctrl.setValue(null)\">Clear</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/form/rating-form.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/form/rating-form.ts ***!
  \********************************************************************/
/*! exports provided: NgbdRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingForm", function() { return NgbdRatingForm; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdRatingForm = /** @class */ (function () {
    function NgbdRatingForm() {
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    NgbdRatingForm.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    NgbdRatingForm = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-form',
            template: __webpack_require__(/*! ./rating-form.html */ "./src/app/components/ng-bootstrap/rating/form/rating-form.html")
        })
    ], NgbdRatingForm);
    return NgbdRatingForm;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/index.ts ***!
  \*********************************************************/
/*! exports provided: RATING_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_DIRECTIVES", function() { return RATING_DIRECTIVES; });
/* harmony import */ var _basic_rating_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/rating-basic */ "./src/app/components/ng-bootstrap/rating/basic/rating-basic.ts");
/* harmony import */ var _config_rating_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/rating-config */ "./src/app/components/ng-bootstrap/rating/config/rating-config.ts");
/* harmony import */ var _template_rating_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/rating-template */ "./src/app/components/ng-bootstrap/rating/template/rating-template.ts");
/* harmony import */ var _events_rating_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/rating-events */ "./src/app/components/ng-bootstrap/rating/events/rating-events.ts");
/* harmony import */ var _decimal_rating_decimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimal/rating-decimal */ "./src/app/components/ng-bootstrap/rating/decimal/rating-decimal.ts");
/* harmony import */ var _form_rating_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/rating-form */ "./src/app/components/ng-bootstrap/rating/form/rating-form.ts");






var RATING_DIRECTIVES = [
    _basic_rating_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdRatingBasic"],
    _config_rating_config__WEBPACK_IMPORTED_MODULE_1__["NgbdRatingConfig"],
    _template_rating_template__WEBPACK_IMPORTED_MODULE_2__["NgbdRatingTemplate"],
    _events_rating_events__WEBPACK_IMPORTED_MODULE_3__["NgbdRatingEvents"],
    _decimal_rating_decimal__WEBPACK_IMPORTED_MODULE_4__["NgbdRatingDecimal"],
    _form_rating_form__WEBPACK_IMPORTED_MODULE_5__["NgbdRatingForm"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/template/rating-template.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/template/rating-template.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Custom rating template provided as child element</p>\n\n<ngb-rating [(rate)]=\"currentRate\">\n  <ng-template let-fill=\"fill\" let-index=\"index\">\n    <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 3\">&#9733;</span>\n  </ng-template>\n</ngb-rating>\n<hr>\n<pre>Rate: <b>{{currentRate}}</b></pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/rating/template/rating-template.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/rating/template/rating-template.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdRatingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdRatingTemplate", function() { return NgbdRatingTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdRatingTemplate = /** @class */ (function () {
    function NgbdRatingTemplate() {
        this.currentRate = 6;
    }
    NgbdRatingTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-rating-template',
            template: __webpack_require__(/*! ./rating-template.html */ "./src/app/components/ng-bootstrap/rating/template/rating-template.html"),
            styles: ["\n    .star {\n      font-size: 1.5rem;\n      color: #b0c4de;\n    }\n    .filled {\n      color: #1e90ff;\n    }\n    .bad {\n      color: #deb0b0;\n    }\n    .filled.bad {\n      color: #ff1e1e;\n    }\n  "]
        })
    ], NgbdRatingTemplate);
    return NgbdRatingTemplate;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbTabContent>\n      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdTabsetBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetBasic", function() { return NgbdTabsetBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetBasic = /** @class */ (function () {
    function NgbdTabsetBasic() {
    }
    NgbdTabsetBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-basic',
            template: __webpack_require__(/*! ./tabset-basic.html */ "./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.html")
        })
    ], NgbdTabsetBasic);
    return NgbdTabsetBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/config/tabset-config.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/config/tabset-config.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab title=\"One\">\n    <ng-template ngbTabContent>\n      <p>These tabs are displayed as pills...</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Two\">\n    <ng-template ngbTabContent>\n      <p>Because default values have been customized.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/config/tabset-config.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/config/tabset-config.ts ***!
  \************************************************************************/
/*! exports provided: NgbdTabsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetConfig", function() { return NgbdTabsetConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdTabsetConfig = /** @class */ (function () {
    function NgbdTabsetConfig(config) {
        // customize default values of tabsets used by this component tree
        config.justify = 'center';
        config.type = 'pills';
    }
    NgbdTabsetConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-config',
            template: __webpack_require__(/*! ./tabset-config.html */ "./src/app/components/ng-bootstrap/tabset/config/tabset-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]] // add NgbTabsetConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabsetConfig"]])
    ], NgbdTabsetConfig);
    return NgbdTabsetConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/index.ts ***!
  \*********************************************************/
/*! exports provided: TABSET_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABSET_DIRECTIVES", function() { return TABSET_DIRECTIVES; });
/* harmony import */ var _basic_tabset_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/tabset-basic */ "./src/app/components/ng-bootstrap/tabset/basic/tabset-basic.ts");
/* harmony import */ var _pills_tabset_pills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pills/tabset-pills */ "./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.ts");
/* harmony import */ var _preventchange_tabset_preventchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preventchange/tabset-preventchange */ "./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.ts");
/* harmony import */ var _selectbyid_tabset_selectbyid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectbyid/tabset-selectbyid */ "./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.ts");
/* harmony import */ var _config_tabset_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/tabset-config */ "./src/app/components/ng-bootstrap/tabset/config/tabset-config.ts");
/* harmony import */ var _justify_tabset_justify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./justify/tabset-justify */ "./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.ts");
/* harmony import */ var _orientation_tabset_orientation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orientation/tabset-orientation */ "./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.ts");







var TABSET_DIRECTIVES = [
    _basic_tabset_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdTabsetBasic"],
    _pills_tabset_pills__WEBPACK_IMPORTED_MODULE_1__["NgbdTabsetPills"],
    _preventchange_tabset_preventchange__WEBPACK_IMPORTED_MODULE_2__["NgbdTabsetPreventchange"],
    _selectbyid_tabset_selectbyid__WEBPACK_IMPORTED_MODULE_3__["NgbdTabsetSelectbyid"],
    _config_tabset_config__WEBPACK_IMPORTED_MODULE_4__["NgbdTabsetConfig"],
    _justify_tabset_justify__WEBPACK_IMPORTED_MODULE_5__["NgbdTabsetJustify"],
    _orientation_tabset_orientation__WEBPACK_IMPORTED_MODULE_6__["NgbdTabsetOrientation"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset [justify]=\"currentJustify\">\n  <ngb-tab title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"A very long nav title\">\n    <ng-template ngbTabContent>\n      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n\n<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"start\">Start\n  </label>\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"center\">Center\n  </label>\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"end\">End\n  </label>\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"fill\">Fill\n  </label>\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"justified\">Justified\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdTabsetJustify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetJustify", function() { return NgbdTabsetJustify; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetJustify = /** @class */ (function () {
    function NgbdTabsetJustify() {
        this.currentJustify = 'start';
    }
    NgbdTabsetJustify = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-justify',
            template: __webpack_require__(/*! ./tabset-justify.html */ "./src/app/components/ng-bootstrap/tabset/justify/tabset-justify.html")
        })
    ], NgbdTabsetJustify);
    return NgbdTabsetJustify;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\n  <ngb-tab title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbTabContent>\n      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n\n<div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\n  </label>\n  <label ngbButtonLabel class=\"btn-outline-primary btn-sm\">\n    <input ngbButton type=\"radio\" value=\"vertical\">Vertical\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdTabsetOrientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetOrientation", function() { return NgbdTabsetOrientation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetOrientation = /** @class */ (function () {
    function NgbdTabsetOrientation() {
        this.currentOrientation = 'horizontal';
    }
    NgbdTabsetOrientation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-orientation',
            template: __webpack_require__(/*! ./tabset-orientation.html */ "./src/app/components/ng-bootstrap/tabset/orientation/tabset-orientation.html")
        })
    ], NgbdTabsetOrientation);
    return NgbdTabsetOrientation;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.html":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset type=\"pills\">\n  <ngb-tab title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbTabContent>\n      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdTabsetPills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetPills", function() { return NgbdTabsetPills; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetPills = /** @class */ (function () {
    function NgbdTabsetPills() {
    }
    NgbdTabsetPills = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-pills',
            template: __webpack_require__(/*! ./tabset-pills.html */ "./src/app/components/ng-bootstrap/tabset/pills/tabset-pills.html")
        })
    ], NgbdTabsetPills);
    return NgbdTabsetPills;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset (tabChange)=\"beforeChange($event)\">\n  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"But I can!\" >\n    <ng-template ngbTabContent>\n      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.ts ***!
  \**************************************************************************************/
/*! exports provided: NgbdTabsetPreventchange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetPreventchange", function() { return NgbdTabsetPreventchange; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetPreventchange = /** @class */ (function () {
    function NgbdTabsetPreventchange() {
    }
    NgbdTabsetPreventchange.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    NgbdTabsetPreventchange = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-preventchange',
            template: __webpack_require__(/*! ./tabset-preventchange.html */ "./src/app/components/ng-bootstrap/tabset/preventchange/tabset-preventchange.html")
        })
    ], NgbdTabsetPreventchange);
    return NgbdTabsetPreventchange;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset #t=\"ngbTabset\">\n  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\n    <ng-template ngbTabContent>\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab id=\"tab-selectbyid2\">\n    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n      sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n\n<p>\n  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\n</p>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdTabsetSelectbyid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTabsetSelectbyid", function() { return NgbdTabsetSelectbyid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTabsetSelectbyid = /** @class */ (function () {
    function NgbdTabsetSelectbyid() {
    }
    NgbdTabsetSelectbyid = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tabset-selectbyid',
            template: __webpack_require__(/*! ./tabset-selectbyid.html */ "./src/app/components/ng-bootstrap/tabset/selectbyid/tabset-selectbyid.html")
        })
    ], NgbdTabsetSelectbyid);
    return NgbdTabsetSelectbyid;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This timepicker uses a custom Time adapter that lets you use your own model implementation.\n  In this example we are converting from and to an ISO string (with the format <code>HH:mm:ss</code>)</p>\n\n<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n<hr>\n<pre>Selected time: {{ time }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbTimeStringAdapter, NgbdTimepickerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbTimeStringAdapter", function() { return NgbTimeStringAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerAdapter", function() { return NgbdTimepickerAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Example of a String Time adapter
 */
var NgbTimeStringAdapter = /** @class */ (function (_super) {
    __extends(NgbTimeStringAdapter, _super);
    function NgbTimeStringAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbTimeStringAdapter.prototype.fromModel = function (value) {
        if (!value) {
            return null;
        }
        var split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    };
    NgbTimeStringAdapter.prototype.toModel = function (time) {
        if (!time) {
            return null;
        }
        return this.pad(time.hour) + ":" + this.pad(time.minute) + ":" + this.pad(time.second);
    };
    NgbTimeStringAdapter.prototype.pad = function (i) {
        return i < 10 ? "0" + i : "" + i;
    };
    NgbTimeStringAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbTimeStringAdapter);
    return NgbTimeStringAdapter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"]));

var NgbdTimepickerAdapter = /** @class */ (function () {
    function NgbdTimepickerAdapter() {
    }
    NgbdTimepickerAdapter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-adapter',
            template: __webpack_require__(/*! ./timepicker-adapter.html */ "./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.html"),
            // NOTE: For this example we are only providing current component, but probably
            // NOTE: you will want to provide your main App Module
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"], useClass: NgbTimeStringAdapter }]
        })
    ], NgbdTimepickerAdapter);
    return NgbdTimepickerAdapter;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n<hr>\n<pre>Selected time: {{time | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdTimepickerBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerBasic", function() { return NgbdTimepickerBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTimepickerBasic = /** @class */ (function () {
    function NgbdTimepickerBasic() {
        this.time = { hour: 13, minute: 30 };
    }
    NgbdTimepickerBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-basic',
            template: __webpack_require__(/*! ./timepicker-basic.html */ "./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.html")
        })
    ], NgbdTimepickerBasic);
    return NgbdTimepickerBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This timepicker uses customized default values.</p>\n\n<ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdTimepickerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerConfig", function() { return NgbdTimepickerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdTimepickerConfig = /** @class */ (function () {
    function NgbdTimepickerConfig(config) {
        this.time = { hour: 13, minute: 30, second: 0 };
        // customize default values of ratings used by this component tree
        config.seconds = true;
        config.spinners = false;
    }
    NgbdTimepickerConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-config',
            template: __webpack_require__(/*! ./timepicker-config.html */ "./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepickerConfig"]] // add NgbTimepickerConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepickerConfig"]])
    ], NgbdTimepickerConfig);
    return NgbdTimepickerConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/index.ts ***!
  \*************************************************************/
/*! exports provided: TIMEPICKER_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEPICKER_DIRECTIVES", function() { return TIMEPICKER_DIRECTIVES; });
/* harmony import */ var _basic_timepicker_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/timepicker-basic */ "./src/app/components/ng-bootstrap/timepicker/basic/timepicker-basic.ts");
/* harmony import */ var _meridian_timepicker_meridian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meridian/timepicker-meridian */ "./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.ts");
/* harmony import */ var _seconds_timepicker_seconds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seconds/timepicker-seconds */ "./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.ts");
/* harmony import */ var _steps_timepicker_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps/timepicker-steps */ "./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.ts");
/* harmony import */ var _validation_timepicker_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation/timepicker-validation */ "./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.ts");
/* harmony import */ var _spinners_timepicker_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinners/timepicker-spinners */ "./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.ts");
/* harmony import */ var _config_timepicker_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/timepicker-config */ "./src/app/components/ng-bootstrap/timepicker/config/timepicker-config.ts");
/* harmony import */ var _adapter_timepicker_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adapter/timepicker-adapter */ "./src/app/components/ng-bootstrap/timepicker/adapter/timepicker-adapter.ts");








var TIMEPICKER_DIRECTIVES = [
    _basic_timepicker_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdTimepickerBasic"],
    _meridian_timepicker_meridian__WEBPACK_IMPORTED_MODULE_1__["NgbdTimepickerMeridian"],
    _seconds_timepicker_seconds__WEBPACK_IMPORTED_MODULE_2__["NgbdTimepickerSeconds"],
    _spinners_timepicker_spinners__WEBPACK_IMPORTED_MODULE_5__["NgbdTimepickerSpinners"],
    _steps_timepicker_steps__WEBPACK_IMPORTED_MODULE_3__["NgbdTimepickerSteps"],
    _validation_timepicker_validation__WEBPACK_IMPORTED_MODULE_4__["NgbdTimepickerValidation"],
    _config_timepicker_config__WEBPACK_IMPORTED_MODULE_6__["NgbdTimepickerConfig"],
    _adapter_timepicker_adapter__WEBPACK_IMPORTED_MODULE_7__["NgbdTimepickerAdapter"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\n<button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\n    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n</button>\n<hr>\n<pre>Selected time: {{time | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdTimepickerMeridian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerMeridian", function() { return NgbdTimepickerMeridian; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTimepickerMeridian = /** @class */ (function () {
    function NgbdTimepickerMeridian() {
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
    }
    NgbdTimepickerMeridian.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    NgbdTimepickerMeridian = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-meridian',
            template: __webpack_require__(/*! ./timepicker-meridian.html */ "./src/app/components/ng-bootstrap/timepicker/meridian/timepicker-meridian.html")
        })
    ], NgbdTimepickerMeridian);
    return NgbdTimepickerMeridian;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\n<button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\n    Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n</button>\n<hr>\n<pre>Selected time: {{time | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdTimepickerSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerSeconds", function() { return NgbdTimepickerSeconds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTimepickerSeconds = /** @class */ (function () {
    function NgbdTimepickerSeconds() {
        this.time = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
    }
    NgbdTimepickerSeconds.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    NgbdTimepickerSeconds = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-seconds',
            template: __webpack_require__(/*! ./timepicker-seconds.html */ "./src/app/components/ng-bootstrap/timepicker/seconds/timepicker-seconds.html")
        })
    ], NgbdTimepickerSeconds);
    return NgbdTimepickerSeconds;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\n\n<hr/>\n\n<button class=\"m-t-1 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\n    Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdTimepickerSpinners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerSpinners", function() { return NgbdTimepickerSpinners; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTimepickerSpinners = /** @class */ (function () {
    function NgbdTimepickerSpinners() {
        this.time = { hour: 13, minute: 30 };
        this.spinners = true;
    }
    NgbdTimepickerSpinners.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    NgbdTimepickerSpinners = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-spinners',
            template: __webpack_require__(/*! ./timepicker-spinners.html */ "./src/app/components/ng-bootstrap/timepicker/spinners/timepicker-spinners.html")
        })
    ], NgbdTimepickerSpinners);
    return NgbdTimepickerSpinners;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\"\n    [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <label for=\"changeHourStep\">Hour Step</label>\n        <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n    </div>\n    <div class=\"col-sm-3\">\n        <label for=\"changeMinuteStep\">Minute Step</label>\n        <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n    </div>\n    <div class=\"col-sm-3\">\n        <label for=\"changeSecondStep\">Second Step</label>\n        <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n    </div>\n</div>\n<hr>\n<pre>Selected time: {{time | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdTimepickerSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerSteps", function() { return NgbdTimepickerSteps; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTimepickerSteps = /** @class */ (function () {
    function NgbdTimepickerSteps() {
        this.time = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
    }
    NgbdTimepickerSteps = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-steps',
            template: __webpack_require__(/*! ./timepicker-steps.html */ "./src/app/components/ng-bootstrap/timepicker/steps/timepicker-steps.html")
        })
    ], NgbdTimepickerSteps);
    return NgbdTimepickerSteps;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\n\n<div class=\"form-group\">\n  <ngb-timepicker [formControl]=\"ctrl\" required></ngb-timepicker>\n  <div *ngIf=\"ctrl.valid\" class=\"small form-text text-success\">Great choice</div>\n  <div class=\"small form-text text-danger\" *ngIf=\"!ctrl.valid\">\n    <div *ngIf=\"ctrl.errors['required']\">Select some time during lunchtime</div>\n    <div *ngIf=\"ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n    <div *ngIf=\"ctrl.errors['tooEarly']\">It's a bit too early</div>\n  </div>\n</div>\n\n<hr>\n<pre>Selected time: {{ctrl.value | json}}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.ts ***!
  \****************************************************************************************/
/*! exports provided: NgbdTimepickerValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTimepickerValidation", function() { return NgbdTimepickerValidation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdTimepickerValidation = /** @class */ (function () {
    function NgbdTimepickerValidation() {
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    NgbdTimepickerValidation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-timepicker-validation',
            template: __webpack_require__(/*! ./timepicker-validation.html */ "./src/app/components/ng-bootstrap/timepicker/validation/timepicker-validation.html")
        })
    ], NgbdTimepickerValidation);
    return NgbdTimepickerValidation;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>As for some other popup-based widgets, you can set the tooltip to close automatically upon some events.</p>\n<p>In the following examples, they will all close on <code>Escape</code> as well as:</p>\n\n<ul>\n  <li class=\"mb-2\">\n    click inside:\n    <button\n      type=\"button\" class=\"btn btn-outline-secondary\"\n      triggers=\"click\" [autoClose]=\"'inside'\" ngbTooltip=\"Click inside or press Escape to close\"\n    >\n        Click to toggle\n    </button>\n  </li>\n\n  <li class=\"mb-2\">\n    click outside:\n    <button\n      type=\"button\" class=\"btn btn-outline-secondary\"\n      triggers=\"click\" [autoClose]=\"'outside'\" ngbTooltip=\"Click outside or press Escape to close\"\n    >\n      Click to toggle\n    </button>\n  </li>\n\n  <li class=\"mb-2\">\n      all clicks:\n      <button\n        type=\"button\" class=\"btn btn-outline-secondary\"\n        triggers=\"click\" [autoClose]=\"true\" ngbTooltip=\"Click anywhere or press Escape to close (try the toggling element too)\"\n        #tooltip3=\"ngbTooltip\"\n      >\n          Click to toggle\n      </button>\n\n      &nbsp;\n\n      <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"tooltip3.toggle()\">\n        Click to toggle the external tooltip\n      </button>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdTooltipAutoclose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipAutoclose", function() { return NgbdTooltipAutoclose; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipAutoclose = /** @class */ (function () {
    function NgbdTooltipAutoclose() {
    }
    NgbdTooltipAutoclose = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-autoclose',
            template: __webpack_require__(/*! ./tooltip-autoclose.html */ "./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.html")
        })
    ], NgbdTooltipAutoclose);
    return NgbdTooltipAutoclose;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n  Tooltip on top\n</button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n  Tooltip on right\n</button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n  Tooltip on bottom\n</button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n  Tooltip on left\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.ts ***!
  \************************************************************************/
/*! exports provided: NgbdTooltipBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipBasic", function() { return NgbdTooltipBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipBasic = /** @class */ (function () {
    function NgbdTooltipBasic() {
    }
    NgbdTooltipBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-basic',
            template: __webpack_require__(/*! ./tooltip-basic.html */ "./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.html")
        })
    ], NgbdTooltipBasic);
    return NgbdTooltipBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"This tooltip gets its inputs from the customized configuration\">\n  Customized tooltip\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.ts ***!
  \**************************************************************************/
/*! exports provided: NgbdTooltipConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipConfig", function() { return NgbdTooltipConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdTooltipConfig = /** @class */ (function () {
    function NgbdTooltipConfig(config) {
        // customize default values of tooltips used by this component tree
        config.placement = 'right';
        config.triggers = 'click';
    }
    NgbdTooltipConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-config',
            template: __webpack_require__(/*! ./tooltip-config.html */ "./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]] // add NgbTooltipConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltipConfig"]])
    ], NgbdTooltipConfig);
    return NgbdTooltipConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tSet the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\n</p>\n\n<div class=\"row\">\n\t<div class=\"card px-1 py-5\">\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary mb-2\"\n\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n\t\t\tDefault tooltip\n\t\t</button>\n\t\t<button type=\"button\" class=\"btn btn-outline-secondary\"\n\t\t\t\t\t\tngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\n\t\t\tTooltip appended to body\n\t\t</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdTooltipContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipContainer", function() { return NgbdTooltipContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipContainer = /** @class */ (function () {
    function NgbdTooltipContainer() {
    }
    NgbdTooltipContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-container',
            template: __webpack_require__(/*! ./tooltip-container.html */ "./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.html"),
            styles: ['.card { overflow:hidden }']
        })
    ], NgbdTooltipContainer);
    return NgbdTooltipContainer;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can optionally pass in a custom class via <code>tooltipClass</code>\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Nice class!\"\n  tooltipClass=\"my-custom-class\">\n  Tooltip with custom class\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.ts ***!
  \************************************************************************************/
/*! exports provided: NgbdTooltipCustomclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipCustomclass", function() { return NgbdTooltipCustomclass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipCustomclass = /** @class */ (function () {
    function NgbdTooltipCustomclass() {
    }
    NgbdTooltipCustomclass = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-customclass',
            template: __webpack_require__(/*! ./tooltip-customclass.html */ "./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n    .my-custom-class .tooltip-inner {\n      background-color: darkgreen;\n      font-size: 125%;\n    }\n    .my-custom-class .arrow::before {\n      border-top-color: darkgreen;\n    }\n  "]
        })
    ], NgbdTooltipCustomclass);
    return NgbdTooltipCustomclass;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/index.ts ***!
  \**********************************************************/
/*! exports provided: TOOLTIP_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_DIRECTIVES", function() { return TOOLTIP_DIRECTIVES; });
/* harmony import */ var _basic_tooltip_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/tooltip-basic */ "./src/app/components/ng-bootstrap/tooltip/basic/tooltip-basic.ts");
/* harmony import */ var _container_tooltip_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/tooltip-container */ "./src/app/components/ng-bootstrap/tooltip/container/tooltip-container.ts");
/* harmony import */ var _tplcontent_tooltip_tplcontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tplcontent/tooltip-tplcontent */ "./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.ts");
/* harmony import */ var _tplwithcontext_tooltip_tplwithcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tplwithcontext/tooltip-tplwithcontext */ "./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.ts");
/* harmony import */ var _triggers_tooltip_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triggers/tooltip-triggers */ "./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.ts");
/* harmony import */ var _config_tooltip_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/tooltip-config */ "./src/app/components/ng-bootstrap/tooltip/config/tooltip-config.ts");
/* harmony import */ var _autoclose_tooltip_autoclose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autoclose/tooltip-autoclose */ "./src/app/components/ng-bootstrap/tooltip/autoclose/tooltip-autoclose.ts");
/* harmony import */ var _customclass_tooltip_customclass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customclass/tooltip-customclass */ "./src/app/components/ng-bootstrap/tooltip/customclass/tooltip-customclass.ts");








var TOOLTIP_DIRECTIVES = [
    _basic_tooltip_basic__WEBPACK_IMPORTED_MODULE_0__["NgbdTooltipBasic"],
    _container_tooltip_container__WEBPACK_IMPORTED_MODULE_1__["NgbdTooltipContainer"],
    _tplcontent_tooltip_tplcontent__WEBPACK_IMPORTED_MODULE_2__["NgbdTooltipTplcontent"],
    _triggers_tooltip_triggers__WEBPACK_IMPORTED_MODULE_4__["NgbdTooltipTriggers"],
    _config_tooltip_config__WEBPACK_IMPORTED_MODULE_5__["NgbdTooltipConfig"],
    _tplwithcontext_tooltip_tplwithcontext__WEBPACK_IMPORTED_MODULE_3__["NgbdTooltipTplwithcontext"],
    _autoclose_tooltip_autoclose__WEBPACK_IMPORTED_MODULE_6__["NgbdTooltipAutoclose"],
    _customclass_tooltip_customclass__WEBPACK_IMPORTED_MODULE_7__["NgbdTooltipCustomclass"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Tooltips can contain any arbitrary HTML, Angular bindings and even directives!\n  Simply enclose desired content in a <code>&lt;ng-template&gt;</code> element.\n</p>\n\n<ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\n<button type=\"button\" class=\"btn btn-outline-secondary\" [ngbTooltip]=\"tipContent\">\n  I've got markup and bindings in my tooltip!\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdTooltipTplcontent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipTplcontent", function() { return NgbdTooltipTplcontent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipTplcontent = /** @class */ (function () {
    function NgbdTooltipTplcontent() {
        this.name = 'World';
    }
    NgbdTooltipTplcontent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-tplcontent',
            template: __webpack_require__(/*! ./tooltip-tplcontent.html */ "./src/app/components/ng-bootstrap/tooltip/tplcontent/tooltip-tplcontent.html")
        })
    ], NgbdTooltipTplcontent);
    return NgbdTooltipTplcontent;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can optionally pass in a context when manually triggering a tooltip.\n</p>\n\n<ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbTooltip]=\"tipContent\"\n  triggers=\"manual\" #t1=\"ngbTooltip\" (click)=\"toggleWithGreeting(t1, 'Bonjour')\"\n>\n  French\n</button>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbTooltip]=\"tipContent\"\n  triggers=\"manual\" #t2=\"ngbTooltip\" (click)=\"toggleWithGreeting(t2, 'Gutentag')\"\n>\n  German\n</button>\n<button\n  type=\"button\" class=\"btn btn-outline-secondary mr-2\"\n  [ngbTooltip]=\"tipContent\"\n  triggers=\"manual\" #t3=\"ngbTooltip\" (click)=\"toggleWithGreeting(t3, 'Hello')\"\n>\n  English\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.ts ***!
  \******************************************************************************************/
/*! exports provided: NgbdTooltipTplwithcontext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipTplwithcontext", function() { return NgbdTooltipTplwithcontext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipTplwithcontext = /** @class */ (function () {
    function NgbdTooltipTplwithcontext() {
        this.name = 'World';
    }
    NgbdTooltipTplwithcontext.prototype.toggleWithGreeting = function (tooltip, greeting) {
        if (tooltip.isOpen()) {
            tooltip.close();
        }
        else {
            tooltip.open({ greeting: greeting });
        }
    };
    NgbdTooltipTplwithcontext = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-tplwithcontext',
            template: __webpack_require__(/*! ./tooltip-tplwithcontext.html */ "./src/app/components/ng-bootstrap/tooltip/tplwithcontext/tooltip-tplwithcontext.html")
        })
    ], NgbdTooltipTplwithcontext);
    return NgbdTooltipTplwithcontext;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\n  Click me!\n</button>\n\n<hr>\n<p>\n  Alternatively you can take full manual control over tooltip opening / closing events.\n</p>\n\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" ngbTooltip=\"What a great tip!\" [autoClose]=\"false\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n  Click me to open a tooltip\n</button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"t.close()\">\n  Click me to close a tooltip\n</button>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdTooltipTriggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTooltipTriggers", function() { return NgbdTooltipTriggers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdTooltipTriggers = /** @class */ (function () {
    function NgbdTooltipTriggers() {
    }
    NgbdTooltipTriggers = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-tooltip-triggers',
            template: __webpack_require__(/*! ./tooltip-triggers.html */ "./src/app/components/ng-bootstrap/tooltip/triggers/tooltip-triggers.html")
        })
    ], NgbdTooltipTriggers);
    return NgbdTooltipTriggers;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "A typeahead example that gets values from a static <code>string[]</code>\n<ul>\n  <li><code>debounceTime</code> operator</li>\n  <li>kicks in only if 2+ characters typed</li>\n  <li>limits to 10 results</li>\n</ul>\n\n<label for=\"typeahead-basic\">Search for a state:</label>\n<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\"/>\n<hr>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdTypeaheadBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadBasic", function() { return NgbdTypeaheadBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var NgbdTypeaheadBasic = /** @class */ (function () {
    function NgbdTypeaheadBasic() {
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
    }
    NgbdTypeaheadBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-basic',
            template: __webpack_require__(/*! ./typeahead-basic.html */ "./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.html"),
            styles: [".form-control { width: 300px; }"]
        })
    ], NgbdTypeaheadBasic);
    return NgbdTypeaheadBasic;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This typeahead shows a hint when the input matches because the default values have been customized.</p>\n\n<label for=\"typeahead-config\">Search for a state:</label>\n<input id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\n\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdTypeaheadConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadConfig", function() { return NgbdTypeaheadConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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



var states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];
var NgbdTypeaheadConfig = /** @class */ (function () {
    function NgbdTypeaheadConfig(config) {
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) {
                return term.length < 2
                    ? []
                    : states
                        .filter(function (v) {
                        return v.toLowerCase().startsWith(term.toLocaleLowerCase());
                    })
                        .splice(0, 10);
            }));
        };
        // customize default values of typeaheads used by this component tree
        config.showHint = true;
    }
    NgbdTypeaheadConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ngbd-typeahead-config",
            template: __webpack_require__(/*! ./typeahead-config.html */ "./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.html"),
            styles: [
                "\n      .form-control {\n        width: 300px;\n      }\n    "
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]] // add NgbTypeaheadConfig to the component providers
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeaheadConfig"]])
    ], NgbdTypeaheadConfig);
    return NgbdTypeaheadConfig;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- It is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\n\nIn this simple example, a search is done no matter the content of the input:\n\n<ul>\n  <li>on empty input all options will be taken</li>\n  <li>otherwise options will be filtered against the search term</li>\n  <li>it will limit the display to 10 results in all cases</li>\n</ul> -->\n\n<!-- <label for=\"typeahead-focus\">Drug:</label> -->\n\n<div class=\"col-sm-10\">\n  <input\n    id=\"typeahead-diagnosis\"\n    type=\"text\"\n    class=\"form-control\"\n    [(ngModel)]=\"model\"\n    [ngbTypeahead]=\"search\"\n    (focus)=\"focus$.next($event.target.value)\"\n    (click)=\"click$.next($event.target.value)\"\n    #instance=\"ngbTypeahead\"\n  />\n</div><!-- \n<hr>\n<pre>Model: {{ model | json }}</pre> -->\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.ts ***!
  \********************************************************************************/
/*! exports provided: NgbdTypeaheadDiagnosis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadDiagnosis", function() { return NgbdTypeaheadDiagnosis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var states = ['Malaria', 'Typhoid', 'Ulcers', 'Headache'];
var NgbdTypeaheadDiagnosis = /** @class */ (function () {
    function NgbdTypeaheadDiagnosis() {
        var _this = this;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.search = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? states
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], NgbdTypeaheadDiagnosis.prototype, "instance", void 0);
    NgbdTypeaheadDiagnosis = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-diagnosis',
            template: __webpack_require__(/*! ./typeahead-focus.html */ "./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.html"),
            styles: [".form-control { width: 300px; }"]
        })
    ], NgbdTypeaheadDiagnosis);
    return NgbdTypeaheadDiagnosis;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- It is possible to get the focus events with the current input value to emit results on focus with a great flexibility.\n\nIn this simple example, a search is done no matter the content of the input:\n\n<ul>\n  <li>on empty input all options will be taken</li>\n  <li>otherwise options will be filtered against the search term</li>\n  <li>it will limit the display to 10 results in all cases</li>\n</ul> -->\n\n<!-- <label for=\"typeahead-focus\">Drug:</label> -->\n\n<div class=\"col-sm-3\">\n  <input\n    id=\"typeahead-focus\"\n    type=\"text\"\n    class=\"form-control\"\n    [(ngModel)]=\"model\"\n    [ngbTypeahead]=\"search\"\n    (focus)=\"focus$.next($event.target.value)\"\n    (click)=\"click$.next($event.target.value)\"\n    #instance=\"ngbTypeahead\"\n  />\n</div><!-- \n<hr>\n<pre>Model: {{ model | json }}</pre> -->\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdTypeaheadFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadFocus", function() { return NgbdTypeaheadFocus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var states = ['Piriton', 'Hedex', 'Actal', 'Panadol'];
var NgbdTypeaheadFocus = /** @class */ (function () {
    function NgbdTypeaheadFocus() {
        var _this = this;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.search = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return (term === '' ? states
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
        };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], NgbdTypeaheadFocus.prototype, "instance", void 0);
    NgbdTypeaheadFocus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-focus',
            template: __webpack_require__(/*! ./typeahead-focus.html */ "./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.html"),
            styles: [".form-control { width: 300px; }"]
        })
    ], NgbdTypeaheadFocus);
    return NgbdTypeaheadFocus;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>A typeahead example that uses a formatter function for string results</p>\n\n<label for=\"typeahead-format\">Search for a state:</label>\n<input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\" />\n<hr>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdTypeaheadFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadFormat", function() { return NgbdTypeaheadFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var NgbdTypeaheadFormat = /** @class */ (function () {
    function NgbdTypeaheadFormat() {
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return term === '' ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
    }
    NgbdTypeaheadFormat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-format',
            template: __webpack_require__(/*! ./typeahead-format.html */ "./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.html"),
            styles: [".form-control { width: 300px; }"]
        })
    ], NgbdTypeaheadFormat);
    return NgbdTypeaheadFormat;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "A typeahead example that gets values from the <code>WikipediaService</code>\n<ul>\n  <li>remote data retrieval</li>\n  <li><code>debounceTime</code> operator</li>\n  <li><code>do</code> operator</li>\n  <li><code>distinctUntilChanged</code> operator</li>\n  <li><code>switchMap</code> operator</li>\n  <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\n</ul>\n\n<div class=\"form-group\">\n  <label for=\"typeahead-http\">Search for a wiki page:</label>\n  <input id=\"typeahead-http\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"searchFailed\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" placeholder=\"Wikipedia search\" />\n  <span *ngIf=\"searching\">searching...</span>\n  <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\n</div>\n\n<hr>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.ts ***!
  \**************************************************************************/
/*! exports provided: WikipediaService, NgbdTypeaheadHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadHttp", function() { return NgbdTypeaheadHttp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http
            .get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response[1]; }));
    };
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WikipediaService);
    return WikipediaService;
}());

var NgbdTypeaheadHttp = /** @class */ (function () {
    function NgbdTypeaheadHttp(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return _this._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
                }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searching = false; }));
        };
    }
    NgbdTypeaheadHttp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-http',
            template: __webpack_require__(/*! ./typeahead-http.html */ "./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.html"),
            providers: [WikipediaService],
            styles: [".form-control { width: 300px; display: inline; }"]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], NgbdTypeaheadHttp);
    return NgbdTypeaheadHttp;
}());



/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/index.ts":
/*!************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/index.ts ***!
  \************************************************************/
/*! exports provided: TYPEAHEAD_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPEAHEAD_DIRECTIVES", function() { return TYPEAHEAD_DIRECTIVES; });
/* harmony import */ var _format_typeahead_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format/typeahead-format */ "./src/app/components/ng-bootstrap/typeahead/format/typeahead-format.ts");
/* harmony import */ var _http_typeahead_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/typeahead-http */ "./src/app/components/ng-bootstrap/typeahead/http/typeahead-http.ts");
/* harmony import */ var _basic_typeahead_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/typeahead-basic */ "./src/app/components/ng-bootstrap/typeahead/basic/typeahead-basic.ts");
/* harmony import */ var _focus_typeahead_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focus/typeahead-focus */ "./src/app/components/ng-bootstrap/typeahead/focus/typeahead-focus.ts");
/* harmony import */ var _diagnosis_typeahead_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diagnosis/typeahead-focus */ "./src/app/components/ng-bootstrap/typeahead/diagnosis/typeahead-focus.ts");
/* harmony import */ var _template_typeahead_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/typeahead-template */ "./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.ts");
/* harmony import */ var _config_typeahead_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/typeahead-config */ "./src/app/components/ng-bootstrap/typeahead/config/typeahead-config.ts");







var TYPEAHEAD_DIRECTIVES = [
    _format_typeahead_format__WEBPACK_IMPORTED_MODULE_0__["NgbdTypeaheadFormat"],
    _http_typeahead_http__WEBPACK_IMPORTED_MODULE_1__["NgbdTypeaheadHttp"],
    _basic_typeahead_basic__WEBPACK_IMPORTED_MODULE_2__["NgbdTypeaheadBasic"],
    _focus_typeahead_focus__WEBPACK_IMPORTED_MODULE_3__["NgbdTypeaheadFocus"],
    _diagnosis_typeahead_focus__WEBPACK_IMPORTED_MODULE_4__["NgbdTypeaheadDiagnosis"],
    _template_typeahead_template__WEBPACK_IMPORTED_MODULE_5__["NgbdTypeaheadTemplate"],
    _config_typeahead_config__WEBPACK_IMPORTED_MODULE_6__["NgbdTypeaheadConfig"]
];


/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>A typeahead example that uses a custom template for results display, an object as the model,\n  and the highlight directive to highlight the term inside the custom template.\n</p>\n\n<ng-template #rt let-r=\"result\" let-t=\"term\">\n  <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r['flag']\" class=\"mr-1\" style=\"width: 16px\">\n  <ngb-highlight [result]=\"r.name\" [term]=\"t\"></ngb-highlight>\n</ng-template>\n\n<label for=\"typeahead-template\">Search for a state:</label>\n<input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\"\n  [inputFormatter]=\"formatter\" />\n<hr>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.ts ***!
  \**********************************************************************************/
/*! exports provided: NgbdTypeaheadTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdTypeaheadTemplate", function() { return NgbdTypeaheadTemplate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        'name': 'Georgia',
        'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var NgbdTypeaheadTemplate = /** @class */ (function () {
    function NgbdTypeaheadTemplate() {
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter = function (x) { return x.name; };
    }
    NgbdTypeaheadTemplate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-typeahead-template',
            template: __webpack_require__(/*! ./typeahead-template.html */ "./src/app/components/ng-bootstrap/typeahead/template/typeahead-template.html"),
            styles: [".form-control { width: 300px; }"]
        })
    ], NgbdTypeaheadTemplate);
    return NgbdTypeaheadTemplate;
}());



/***/ })

}]);
//# sourceMappingURL=default~components-components-module~dashboard-dashboard-module~doctors-doctors-module~pharmacy-phar~08a8ea12.js.map