(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/charts/bar/bar.component.html":
/*!***********************************************!*\
  !*** ./src/app/charts/bar/bar.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Vertical bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-vertical class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\"\n            [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\" [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\" (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Horizontal bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-horizontal class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\"\n            [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\" [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Grouped vertical bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-vertical-2d class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [groupPadding]=\"groupPadding\" [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-2d>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Grouped horizontal bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-horizontal-2d class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\" [groupPadding]=\"groupPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-2d>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked vertical bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-vertical-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked horizontal bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-horizontal-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized vertical bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-vertical-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized horizontal bar chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bar-horizontal-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" (legendLabelClick)=\"onLegendLabelClick($event)\" [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charts/bar/bar.component.scss":
/*!***********************************************!*\
  !*** ./src/app/charts/bar/bar.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/charts/bar/bar.component.ts":
/*!*********************************************!*\
  !*** ./src/app/charts/bar/bar.component.ts ***!
  \*********************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarComponent = /** @class */ (function () {
    function BarComponent() {
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: _core__WEBPACK_IMPORTED_MODULE_2__["colors"]
        };
        this.schemeType = 'ordinal';
        Object.assign(this, {
            single: _core__WEBPACK_IMPORTED_MODULE_2__["single"],
            multi: _core__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
    }
    BarComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    BarComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(/*! ./bar.component.html */ "./src/app/charts/bar/bar.component.html"),
            styles: [__webpack_require__(/*! ./bar.component.scss */ "./src/app/charts/bar/bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts.routing */ "./src/app/charts/charts.routing.ts");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/charts/bar/bar.component.ts");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/charts/pie/pie.component.ts");
/* harmony import */ var _line_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line/line.component */ "./src/app/charts/line/line.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/charts/misc/misc.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_4__["ChartsRoutes"]), _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"]],
            declarations: [_bar_bar_component__WEBPACK_IMPORTED_MODULE_5__["BarComponent"], _pie_pie_component__WEBPACK_IMPORTED_MODULE_6__["PieComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"], _misc_misc_component__WEBPACK_IMPORTED_MODULE_8__["MiscComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.routing.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.routing.ts ***!
  \******************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/charts/bar/bar.component.ts");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/charts/pie/pie.component.ts");
/* harmony import */ var _line_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line/line.component */ "./src/app/charts/line/line.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/charts/misc/misc.component.ts");




var ChartsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'bar',
                component: _bar_bar_component__WEBPACK_IMPORTED_MODULE_0__["BarComponent"],
                data: {
                    heading: 'Bar'
                }
            },
            {
                path: 'pie',
                component: _pie_pie_component__WEBPACK_IMPORTED_MODULE_1__["PieComponent"],
                data: {
                    heading: 'Pie'
                }
            },
            {
                path: 'line',
                component: _line_line_component__WEBPACK_IMPORTED_MODULE_2__["LineComponent"],
                data: {
                    heading: 'Line'
                }
            },
            {
                path: 'misc',
                component: _misc_misc_component__WEBPACK_IMPORTED_MODULE_3__["MiscComponent"],
                data: {
                    heading: 'Misc'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/charts/line/line.component.html":
/*!*************************************************!*\
  !*** ./src/app/charts/line/line.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Line chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-line-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateDataWithOrWithoutRange\"\n            [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\"\n            [curve]=\"curve\" [rangeFillOpacity]=\"rangeFillOpacity\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"true\"\n            (select)=\"select($event)\">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Area chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-area-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\"\n            [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\" [curve]=\"curve\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n          </ngx-charts-area-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked area chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-area-chart-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"dateData\" [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"tooltipDisabled\" [curve]=\"curve\" (select)=\"select($event)\">\n          </ngx-charts-area-chart-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized area chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-area-chart-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\"\n            [results]=\"dateData\" [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\" [curve]=\"curve\" (select)=\"select($event)\">\n          </ngx-charts-area-chart-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charts/line/line.component.scss":
/*!*************************************************!*\
  !*** ./src/app/charts/line/line.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/charts/line/line.component.ts":
/*!***********************************************!*\
  !*** ./src/app/charts/line/line.component.ts ***!
  \***********************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = /** @class */ (function () {
    function LineComponent() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        // line interpolation
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"];
        this.colorScheme = {
            domain: _core__WEBPACK_IMPORTED_MODULE_2__["colors"]
        };
        this.schemeType = 'ordinal';
        this.rangeFillOpacity = 0.15;
        // line, area
        this.autoScale = true;
        this.timeline = false;
        Object.assign(this, {
            single: _core__WEBPACK_IMPORTED_MODULE_2__["single"],
            multi: _core__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
        this.dateData = Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateData"])(5, false);
        this.dateDataWithRange = Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateData"])(2, true);
    }
    Object.defineProperty(LineComponent.prototype, "dateDataWithOrWithoutRange", {
        get: function () {
            if (this.range) {
                return this.dateDataWithRange;
            }
            else {
                return this.dateData;
            }
        },
        enumerable: true,
        configurable: true
    });
    LineComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    LineComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    LineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line',
            template: __webpack_require__(/*! ./line.component.html */ "./src/app/charts/line/line.component.html"),
            styles: [__webpack_require__(/*! ./line.component.scss */ "./src/app/charts/line/line.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "./src/app/charts/misc/misc.component.html":
/*!*************************************************!*\
  !*** ./src/app/charts/misc/misc.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Bubble chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-bubble-chart class=\"chart-container\" [view]=\"view\" [results]=\"bubble\" [showGridLines]=\"showGridLines\"\n            [legend]=\"false\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"false\"\n            [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"tooltipDisabled\" [minRadius]=\"minRadius\"\n            [maxRadius]=\"maxRadius\">\n          </ngx-charts-bubble-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Heat map</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-heat-map class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"multi\" [legend]=\"showLegend\"\n            [gradient]=\"gradient\" (legendLabelClick)=\"onLegendLabelClick($event)\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\"\n            [innerPadding]=\"innerPadding\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Forced directed graph</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-force-directed-graph class=\"chart-container\" [legend]=\"showLegend\" [links]=\"graph.links\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\" [nodes]=\"graph.nodes\" [scheme]=\"colorScheme\"\n            [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n          </ngx-charts-force-directed-graph>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Heat map - Calendar</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-heat-map class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"calendarData\" [legend]=\"showLegend\"\n            [gradient]=\"gradient\" (legendLabelClick)=\"onLegendLabelClick($event)\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"false\" [showYAxisLabel]=\"false\" [xAxisTickFormatting]=\"calendarAxisTickFormatting\"\n            [tooltipText]=\"calendarTooltipText\" [innerPadding]=\"innerPadding\" [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Tree map</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-tree-map class=\"chart-container\" (legendLabelClick)=\"onLegendLabelClick($event)\" [scheme]=\"colorScheme\"\n            [results]=\"single\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n          </ngx-charts-tree-map>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Number cards</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-number-card class=\"chart-container\" (legendLabelClick)=\"onLegendLabelClick($event)\" [scheme]=\"colorScheme\"\n            [results]=\"single\" (select)=\"select($event)\">\n          </ngx-charts-number-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Gauge</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-gauge class=\"chart-container\" [legend]=\"showLegend\" [results]=\"single\" [textValue]=\"gaugeTextValue\"\n            [scheme]=\"colorScheme\" [min]=\"gaugeMin\" [max]=\"gaugeMax\" [units]=\"gaugeUnits\" [angleSpan]=\"gaugeAngleSpan\"\n            [startAngle]=\"gaugeStartAngle\" [showAxis]=\"gaugeShowAxis\" [bigSegments]=\"gaugeLargeSegments\"\n            [smallSegments]=\"gaugeSmallSegments\" [margin]=\"margin ? [marginTop, marginRight, marginBottom, marginLeft] : null\"\n            [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\" (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-gauge>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Linear gauge</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-linear-gauge class=\"chart-container\" [scheme]=\"colorScheme\" [min]=\"gaugeMin\" [max]=\"gaugeMax\"\n            [value]=\"gaugeValue\" [previousValue]=\"gaugePreviousValue\" [units]=\"gaugeUnits\" (select)=\"select($event)\">\n          </ngx-charts-linear-gauge>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charts/misc/misc.component.scss":
/*!*************************************************!*\
  !*** ./src/app/charts/misc/misc.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/charts/misc/misc.component.ts":
/*!***********************************************!*\
  !*** ./src/app/charts/misc/misc.component.ts ***!
  \***********************************************/
/*! exports provided: MiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscComponent", function() { return MiscComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
var weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });
var MiscComponent = /** @class */ (function () {
    function MiscComponent() {
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"];
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: _core__WEBPACK_IMPORTED_MODULE_2__["colors"]
        };
        this.schemeType = 'ordinal';
        // line, area
        this.autoScale = true;
        this.timeline = false;
        // margin
        this.margin = false;
        this.marginTop = 40;
        this.marginRight = 40;
        this.marginBottom = 40;
        this.marginLeft = 40;
        // gauge
        this.gaugeMin = 0;
        this.gaugeMax = 100;
        this.gaugeLargeSegments = 10;
        this.gaugeSmallSegments = 5;
        this.gaugeTextValue = '';
        this.gaugeUnits = 'alerts';
        this.gaugeAngleSpan = 240;
        this.gaugeStartAngle = -120;
        this.gaugeShowAxis = true;
        this.gaugeValue = 50; // linear gauge value
        this.gaugePreviousValue = 70;
        Object.assign(this, {
            single: _core__WEBPACK_IMPORTED_MODULE_2__["single"],
            multi: _core__WEBPACK_IMPORTED_MODULE_2__["multi"],
            graph: Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateGraph"])(50),
            bubble: _core__WEBPACK_IMPORTED_MODULE_2__["bubble"]
        });
        this.view = undefined;
        this.calendarData = this.getCalendarData();
    }
    MiscComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    MiscComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    MiscComponent.prototype.getCalendarData = function () {
        // today
        var now = new Date();
        var todaysDay = now.getDate();
        var thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);
        // Monday
        var thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
        var thisMondayDay = thisMonday.getDate();
        var thisMondayYear = thisMonday.getFullYear();
        var thisMondayMonth = thisMonday.getMonth();
        // 52 weeks before monday
        var calendarData = [];
        var getDate = function (d) { return new Date(thisMondayYear, thisMondayMonth, d); };
        for (var week = -52; week <= 0; week++) {
            var mondayDay = thisMondayDay + week * 7;
            var monday = getDate(mondayDay);
            // one week
            var series = [];
            for (var dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
                var date = getDate(mondayDay - 1 + dayOfWeek);
                // skip future dates
                if (date > now) {
                    continue;
                }
                // value
                var value = dayOfWeek < 6 ? date.getMonth() + 1 : 0;
                series.push({
                    date: date,
                    name: weekdayName.format(date),
                    value: value
                });
            }
            calendarData.push({
                name: monday.toString(),
                series: series
            });
        }
        return calendarData;
    };
    MiscComponent.prototype.calendarAxisTickFormatting = function (mondayString) {
        var monday = new Date(mondayString);
        var month = monday.getMonth();
        var day = monday.getDate();
        var year = monday.getFullYear();
        var lastSunday = new Date(year, month, day - 1);
        var nextSunday = new Date(year, month, day + 6);
        return lastSunday.getMonth() !== nextSunday.getMonth()
            ? monthName.format(nextSunday)
            : '';
    };
    MiscComponent.prototype.calendarTooltipText = function (c) {
        return "\n      <span class=\"tooltip-label\">" + c.label + " \u2022 " + c.cell.date.toLocaleDateString() + "</span>\n      <span class=\"tooltip-val\">" + c.data.toLocaleString() + "</span>\n    ";
    };
    MiscComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-misc',
            template: __webpack_require__(/*! ./misc.component.html */ "./src/app/charts/misc/misc.component.html"),
            styles: [__webpack_require__(/*! ./misc.component.scss */ "./src/app/charts/misc/misc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MiscComponent);
    return MiscComponent;
}());



/***/ }),

/***/ "./src/app/charts/pie/pie.component.html":
/*!***********************************************!*\
  !*** ./src/app/charts/pie/pie.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Pie chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\"\n            [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-pie-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Advanced pie chart</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-advanced-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-advanced-pie-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Pie grid</div>\n      <div class=\"card-body\">\n        <div>\n          <ngx-charts-pie-grid class=\"chart-container\" [scheme]=\"colorScheme\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [results]=\"single\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n          </ngx-charts-pie-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/charts/pie/pie.component.scss":
/*!***********************************************!*\
  !*** ./src/app/charts/pie/pie.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/charts/pie/pie.component.ts":
/*!*********************************************!*\
  !*** ./src/app/charts/pie/pie.component.ts ***!
  \*********************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_1__["curveBasis"];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: _core__WEBPACK_IMPORTED_MODULE_2__["colors"]
        };
        this.schemeType = 'ordinal';
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        Object.assign(this, {
            single: _core__WEBPACK_IMPORTED_MODULE_2__["single"]
        });
    }
    PieComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    PieComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    PieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__(/*! ./pie.component.html */ "./src/app/charts/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/charts/pie/pie.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PieComponent);
    return PieComponent;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map