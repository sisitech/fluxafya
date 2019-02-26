(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datatable-datatable-module"],{

/***/ "./src/app/datatable/data-table/data-table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/datatable/data-table/data-table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable class=\"fullscreen no-shadow rounded-0\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"0\"\n  [rowHeight]=\"40\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\n  <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/data-table/data-table.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/datatable/data-table/data-table.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/datatable/data-table/data-table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/datatable/data-table/data-table.component.ts ***!
  \**************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
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

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    DataTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/datatable/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/datatable/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/datatable/datatable.module.ts":
/*!***********************************************!*\
  !*** ./src/app/datatable/datatable.module.ts ***!
  \***********************************************/
/*! exports provided: DatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableModule", function() { return DatatableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datatable_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatable.routing */ "./src/app/datatable/datatable.routing.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/datatable/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/datatable/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/datatable/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/datatable/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/datatable/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/datatable/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/datatable/table-sorting/table-sorting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DatatableModule = /** @class */ (function () {
    function DatatableModule() {
    }
    DatatableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_datatable_routing__WEBPACK_IMPORTED_MODULE_4__["DatatableRoutes"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]
            ],
            declarations: [
                _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"],
                _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_6__["TableEditingComponent"],
                _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_7__["TableFilterComponent"],
                _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_8__["TablePagingComponent"],
                _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_9__["TablePinningComponent"],
                _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_10__["TableSelectionComponent"],
                _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_11__["TableSortingComponent"]
            ]
        })
    ], DatatableModule);
    return DatatableModule;
}());



/***/ }),

/***/ "./src/app/datatable/datatable.routing.ts":
/*!************************************************!*\
  !*** ./src/app/datatable/datatable.routing.ts ***!
  \************************************************/
/*! exports provided: DatatableRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRoutes", function() { return DatatableRoutes; });
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/datatable/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/datatable/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/datatable/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/datatable/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/datatable/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/datatable/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/datatable/table-sorting/table-sorting.component.ts");







var DatatableRoutes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"],
                data: {
                    heading: 'Fullscreen'
                }
            },
            {
                path: 'editing',
                component: _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__["TableEditingComponent"],
                data: {
                    heading: 'Editing'
                }
            },
            {
                path: 'filter',
                component: _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__["TableFilterComponent"],
                data: {
                    heading: 'Filter'
                }
            },
            {
                path: 'paging',
                component: _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__["TablePagingComponent"],
                data: {
                    heading: 'Paging'
                }
            },
            {
                path: 'pinning',
                component: _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_4__["TablePinningComponent"],
                data: {
                    heading: 'Pinning'
                }
            },
            {
                path: 'selection',
                component: _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_5__["TableSelectionComponent"],
                data: {
                    heading: 'Selection'
                }
            },
            {
                path: 'sorting',
                component: _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_6__["TableSortingComponent"],
                data: {
                    heading: 'Sorting'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/datatable/table-editing/table-editing.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-editing/table-editing.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable #mydatatable [headerHeight]=\"40\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n  [rows]=\"rows\">\n  <ngx-datatable-column name=\"Name\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n      <span title=\"Double click to edit\" (dblclick)=\"editing[row.$$index + '-name'] = true\" *ngIf=\"!editing[row.$$index + '-name']\">\n        {{value}}\n      </span>\n      <input autofocus (blur)=\"updateValue($event, 'name', value, row)\" *ngIf=\"editing[row.$$index + '-name']\" type=\"text\"\n        [value]=\"value\" />\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\">\n    <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\n      <span title=\"Double click to edit\" (dblclick)=\"editing[row.$$index + '-gender'] = true\" *ngIf=\"!editing[row.$$index + '-gender']\">\n        {{value}}\n      </span>\n      <select *ngIf=\"editing[row.$$index + '-gender']\" (change)=\"updateValue($event, 'gender', value, row)\" [value]=\"value\">\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n      </select>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\">\n    <ng-template ngx-datatable-cell-template let-value=\"value\">\n      {{value}}\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-editing/table-editing.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-editing/table-editing.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/table-editing/table-editing.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-editing/table-editing.component.ts ***!
  \********************************************************************/
/*! exports provided: TableEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditingComponent", function() { return TableEditingComponent; });
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

var TableEditingComponent = /** @class */ (function () {
    function TableEditingComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditingComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    TableEditingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-editing',
            template: __webpack_require__(/*! ./table-editing.component.html */ "./src/app/datatable/table-editing/table-editing.component.html"),
            styles: [__webpack_require__(/*! ./table-editing.component.scss */ "./src/app/datatable/table-editing/table-editing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableEditingComponent);
    return TableEditingComponent;
}());



/***/ }),

/***/ "./src/app/datatable/table-filter/table-filter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-filter/table-filter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"email\" class=\"form-control mb-3\" placeholder=\"Type to filter the name column...\" required (keyup)='updateFilter($event)'>\n<ngx-datatable [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"\n  [limit]=\"10\" [rows]='rows'>\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-filter/table-filter.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-filter/table-filter.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/table-filter/table-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/datatable/table-filter/table-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: TableFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterComponent", function() { return TableFilterComponent; });
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

var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent() {
        var _this = this;
        this.rows = [];
        this.temp = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.fetch(function (data) {
            // cache our list
            _this.temp = data.slice();
            // push our inital complete list
            _this.rows = data;
        });
    }
    TableFilterComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableFilterComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    TableFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-filter',
            template: __webpack_require__(/*! ./table-filter.component.html */ "./src/app/datatable/table-filter/table-filter.component.html"),
            styles: [__webpack_require__(/*! ./table-filter.component.scss */ "./src/app/datatable/table-filter/table-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableFilterComponent);
    return TableFilterComponent;
}());



/***/ }),

/***/ "./src/app/datatable/table-paging/table-paging.component.html":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-paging/table-paging.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable [rows]=\"rows\" [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\" [columnMode]=\"'force'\"\n  [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [externalPaging]=\"true\" [count]=\"count\" [offset]=\"offset\"\n  [limit]=\"limit\" (page)='onPage($event)'>\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-paging/table-paging.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-paging/table-paging.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/table-paging/table-paging.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/datatable/table-paging/table-paging.component.ts ***!
  \******************************************************************/
/*! exports provided: TablePagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePagingComponent", function() { return TablePagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablePagingComponent = /** @class */ (function () {
    function TablePagingComponent() {
        this.rows = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
    }
    TablePagingComponent.prototype.ngOnInit = function () {
        this.page(this.offset, this.limit);
    };
    TablePagingComponent.prototype.page = function (offset, limit) {
        var _this = this;
        this.fetch(function (results) {
            _this.count = results.length;
            var start = offset * limit;
            var end = start + limit;
            var rows = _this.rows.slice();
            for (var i = start; i < end; i++) {
                rows[i] = results[i];
            }
            _this.rows = rows;
            console.log('Page Results', start, end, rows);
        });
    };
    TablePagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePagingComponent.prototype.onPage = function (event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    };
    TablePagingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-paging',
            template: __webpack_require__(/*! ./table-paging.component.html */ "./src/app/datatable/table-paging/table-paging.component.html"),
            styles: [__webpack_require__(/*! ./table-paging.component.scss */ "./src/app/datatable/table-paging/table-paging.component.scss")]
        })
    ], TablePagingComponent);
    return TablePagingComponent;
}());



/***/ }),

/***/ "./src/app/datatable/table-pinning/table-pinning.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-pinning/table-pinning.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable [columnMode]=\"'force'\" [headerHeight]=\"40\" [footerHeight]=\"50\" [rowHeight]=\"40\" [scrollbarV]=\"true\"\n  [scrollbarH]=\"true\" [rows]=\"rows\">\n  <ngx-datatable-column name=\"Name\" [width]=\"300\" [frozenLeft]=\"true\">\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Gender\">\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Age\">\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"City\" [width]=\"150\" prop=\"address.city\">\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\" [frozenRight]=\"true\">\n  </ngx-datatable-column>\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-pinning/table-pinning.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-pinning/table-pinning.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/datatable/table-pinning/table-pinning.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-pinning/table-pinning.component.ts ***!
  \********************************************************************/
/*! exports provided: TablePinningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePinningComponent", function() { return TablePinningComponent; });
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

var TablePinningComponent = /** @class */ (function () {
    function TablePinningComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TablePinningComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePinningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-pinning',
            template: __webpack_require__(/*! ./table-pinning.component.html */ "./src/app/datatable/table-pinning/table-pinning.component.html"),
            styles: [__webpack_require__(/*! ./table-pinning.component.scss */ "./src/app/datatable/table-pinning/table-pinning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablePinningComponent);
    return TablePinningComponent;
}());



/***/ }),

/***/ "./src/app/datatable/table-selection/table-selection.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/datatable/table-selection/table-selection.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable class=\"selection-cell\" [rows]=\"rows\" [columnMode]=\"'force'\" [columns]=\"columns\" [headerHeight]=\"40\"\n  [footerHeight]=\"50\" [rowHeight]=\"40\" [selected]=\"selected\" [selectionType]=\"'cell'\" (select)=\"onSelect($event)\"\n  (activate)=\"onActivate($event)\">\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-selection/table-selection.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/datatable/table-selection/table-selection.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/table-selection/table-selection.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/datatable/table-selection/table-selection.component.ts ***!
  \************************************************************************/
/*! exports provided: TableSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionComponent", function() { return TableSelectionComponent; });
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

var TableSelectionComponent = /** @class */ (function () {
    function TableSelectionComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSelectionComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableSelectionComponent.prototype.onSelect = function (event) {
        console.log('Event: select', event, this.selected);
    };
    TableSelectionComponent.prototype.onActivate = function (event) {
        console.log('Event: activate', event);
    };
    TableSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-selection',
            template: __webpack_require__(/*! ./table-selection.component.html */ "./src/app/datatable/table-selection/table-selection.component.html"),
            styles: [__webpack_require__(/*! ./table-selection.component.scss */ "./src/app/datatable/table-selection/table-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableSelectionComponent);
    return TableSelectionComponent;
}());



/***/ }),

/***/ "./src/app/datatable/table-sorting/table-sorting.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-sorting/table-sorting.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-datatable [rows]=\"rows\" [columns]=\"columns\" [sortType]=\"'multi'\" [columnMode]=\"'force'\" [headerHeight]=\"40\"\n  [footerHeight]=\"50\" [rowHeight]=\"40\">\n</ngx-datatable>\n"

/***/ }),

/***/ "./src/app/datatable/table-sorting/table-sorting.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/datatable/table-sorting/table-sorting.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datatable,\n.datatable > div,\n.datatable.fixed-header .datatable-header .datatable-header-inner {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/datatable/table-sorting/table-sorting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/datatable/table-sorting/table-sorting.component.ts ***!
  \********************************************************************/
/*! exports provided: TableSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingComponent", function() { return TableSortingComponent; });
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

var TableSortingComponent = /** @class */ (function () {
    function TableSortingComponent() {
        var _this = this;
        this.rows = [];
        this.columns = [{ name: 'Company' }, { name: 'Name' }, { name: 'Gender' }];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSortingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    TableSortingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-sorting',
            template: __webpack_require__(/*! ./table-sorting.component.html */ "./src/app/datatable/table-sorting/table-sorting.component.html"),
            styles: [__webpack_require__(/*! ./table-sorting.component.scss */ "./src/app/datatable/table-sorting/table-sorting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableSortingComponent);
    return TableSortingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=datatable-datatable-module.js.map