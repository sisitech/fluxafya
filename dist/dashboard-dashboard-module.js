(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Start Date</label>\n            <div class=\"col-sm-10\">\n                <input class=\"form-control form-background-color\" type=\"date\" value=\"2019-01-15\" id=\"example-date-input\">\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">End Date</label>\n            <div class=\"col-sm-10\">\n                <input class=\"form-control form-background-color\" type=\"date\" value=\"2019-01-15\" id=\"example-date-input\">\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-2 col-lg-2\">\n            <button type=\"button\" class=\"btn btn-primary\">Filter Graphs</button>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Hopsital Attendance</p>\n                <small class=\"d-block text-muted\">Pie Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                        [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n                    </ngx-charts-pie-chart>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card-header d-block\">\n                        <p class=\"mb-0\">Male</p>\n                        <small class=\"d-block text-muted\">Patient Attendance</small>\n                    </div>\n                    <div class=\"card-body px-0 py-4  rounded-bottom\">\n                        <div class=\"text-center top-image-position\">\n                            <img style=\"height:160%; width:92%;\" src=\"assets/images/labs/Waiting.png\" alt=\"\" class=\"img-links\">\n                            <p style=\"font-size:20px;\">37%</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card-header d-block\">\n                        <p class=\"mb-0\">Female</p>\n                        <small class=\"d-block text-muted\">Patient Attendance</small>\n                    </div>\n                    <div class=\"card-body px-0 py-4  rounded-bottom\">\n                        <div class=\"text-center top-image-position\">\n                            <img style=\"height:160%; width:92%;\" src=\"assets/images/labs/Waiting.png\" alt=\"\" class=\"img-links\">\n                            <p style=\"font-size:20px;\">63%</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Hosptial Patient Breakdown</p>\n                <small class=\"d-block text-muted\">Pie Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                        [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n                    </ngx-charts-pie-chart>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Mother & Child</p>\n                <small class=\"d-block text-muted\">Analytics Summary</small>\n            </div>\n            <div class=\"card-body  rounded-bottom\">\n                <!-- <h6 class=\"pt-4\">Progress bars with custom labels</h6> -->\n                <ngbd-progressbar-labels></ngbd-progressbar-labels>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header d-block\">\n                    <p class=\"mb-0\">Disease Breakdown</p>\n                    <small class=\"d-block text-muted\">Pie Chart Analytics</small>\n                </div>\n                <div class=\"card-body px-0 py-4  rounded-bottom\">\n                    <div>\n                        <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                            [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n                        </ngx-charts-pie-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Lab Tests</p>\n                <small class=\"d-block text-muted\">Horizontal Bar Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-bar-horizontal class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n                        [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (legendLabelClick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\">\n                    </ngx-charts-bar-horizontal>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Patients Trends per Gender</p>\n                <small class=\"d-block text-muted\">Line Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4 rounded-bottom\">\n                <div>\n                    <ngx-charts-line-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateDataWithOrWithoutRange\" [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n                        [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [curve]=\"curve\" [rangeFillOpacity]=\"rangeFillOpacity\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"true\"\n                        (select)=\"select($event)\">\n                    </ngx-charts-line-chart>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Daily Trends</p>\n                <small class=\"d-block text-muted\">Area Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-area-chart class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\" [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [autoScale]=\"autoScale\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\" [curve]=\"curve\" [tooltipDisabled]=\"tooltipDisabled\"\n                        (select)=\"select($event)\">\n                    </ngx-charts-area-chart>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Disease Trends</p>\n                <small class=\"d-block text-muted\">Stacked Area Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-area-chart-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\" [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                        [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"tooltipDisabled\"\n                        [curve]=\"curve\" (select)=\"select($event)\">\n                    </ngx-charts-area-chart-stacked>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Patients per Countries</p>\n                <small class=\"d-block text-muted\">Vertical Bar Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-bar-vertical class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n                        [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\" (legendLabelClick)=\"onLegendLabelClick($event)\">\n                    </ngx-charts-bar-vertical>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Visits per Country</p>\n                <small class=\"d-block text-muted\">Horizontal Bar Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-bar-horizontal class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"single\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\"\n                        [tooltipDisabled]=\"tooltipDisabled\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (legendLabelClick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\">\n                    </ngx-charts-bar-horizontal>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Segregation per Gender</p>\n                <small class=\"d-block text-muted\">Stacked Vertical Bar Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-bar-vertical-stacked class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                        [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n                    </ngx-charts-bar-vertical-stacked>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Conversions</p>\n                <small class=\"d-block text-muted\">Pie Chart Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-pie-chart class=\"chart-container\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"showLegend\" [explodeSlices]=\"explodeSlices\" [labels]=\"showLabels\" [doughnut]=\"doughnut\" [arcWidth]=\"arcWidth\" (legendLabelClick)=\"onLegendLabelClick($event)\"\n                        [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" (select)=\"select($event)\">\n                    </ngx-charts-pie-chart>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Disease Trends</p>\n                <small class=\"d-block text-muted\">Linear Gauge Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-area-chart-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"dateData\" [legend]=\"showLegend\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" (legendLabelClick)=\"onLegendLabelClick($event)\" [yAxis]=\"showYAxis\"\n                        [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\" [showGridLines]=\"showGridLines\" [roundDomains]=\"roundDomains\" [tooltipDisabled]=\"tooltipDisabled\"\n                        [curve]=\"curve\" (select)=\"select($event)\">\n                    </ngx-charts-area-chart-normalized>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\n        <div class=\"card\">\n            <div class=\"card-header d-block\">\n                <p class=\"mb-0\">Age - Disease Distribution</p>\n                <small class=\"d-block text-muted\">Tree Map Analytics</small>\n            </div>\n            <div class=\"card-body px-0 py-4  rounded-bottom\">\n                <div>\n                    <ngx-charts-bar-vertical-normalized class=\"chart-container\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [results]=\"multi\" [gradient]=\"gradient\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\n                        (legendLabelClick)=\"onLegendLabelClick($event)\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showGridLines]=\"showGridLines\" [barPadding]=\"barPadding\" [roundDomains]=\"roundDomains\" (select)=\"select($event)\">\n                    </ngx-charts-bar-vertical-normalized>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .chart-container {\n  height: 170px;\n  width: 100%;\n  display: block; }\n\n:host ::ng-deep .ngx-charts .gridline-path {\n  stroke-width: 0.5; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
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
        // pie
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.arcWidth = 0.25;
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
            graph: Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateGraph"])(50),
            multi: _core__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
        this.dateData = Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateData"])(2, false);
        this.dateDataWithRange = Object(_core__WEBPACK_IMPORTED_MODULE_2__["generateData"])(2, true);
    }
    Object.defineProperty(DashboardComponent.prototype, "dateDataWithOrWithoutRange", {
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
    DashboardComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    DashboardComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ng-bootstrap */ "./src/app/components/ng-bootstrap/index.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutes"]),
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _components_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbdDemoModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        data: {
            heading: 'Dashboard'
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map