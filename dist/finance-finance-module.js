(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module"],{

/***/ "./src/app/finance/finance.module.ts":
/*!*******************************************!*\
  !*** ./src/app/finance/finance.module.ts ***!
  \*******************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance/finance.component */ "./src/app/finance/finance/finance.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/finance/patients/patients.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _finance_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finance.routing */ "./src/app/finance/finance.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FinanceModule = /** @class */ (function () {
    function FinanceModule() {
    }
    FinanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_finance_routing__WEBPACK_IMPORTED_MODULE_5__["FinanceRoutes"])
            ],
            declarations: [_finance_finance_component__WEBPACK_IMPORTED_MODULE_2__["FinanceComponent"], _patients_patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"]]
        })
    ], FinanceModule);
    return FinanceModule;
}());



/***/ }),

/***/ "./src/app/finance/finance.routing.ts":
/*!********************************************!*\
  !*** ./src/app/finance/finance.routing.ts ***!
  \********************************************/
/*! exports provided: FinanceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutes", function() { return FinanceRoutes; });
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance/finance.component */ "./src/app/finance/finance/finance.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/finance/patients/patients.component.ts");


var FinanceRoutes = [
    {
        path: '',
        children: [
            {
                path: 'see-patient',
                component: _finance_finance_component__WEBPACK_IMPORTED_MODULE_0__["FinanceComponent"],
                data: {
                    heading: 'CASHIER'
                }
            },
            {
                path: '**',
                component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_1__["PatientsComponent"],
                data: {
                    heading: 'PATIENTS IN QUEUE'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/finance/finance/finance.component.html":
/*!********************************************************!*\
  !*** ./src/app/finance/finance/finance.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shorten-cards\">\n    <div class=\"card\">\n        <div class=\"card-body\">Welcome <b>Dennis Sigei,</b></div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">Payment Information</div>\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Choose Payment Service</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control form-background-color\" id=\"sel1\">\n                    <option>Choose option</option>\n                    <option>Laboratory services</option>\n                    <option>Consultancy Fees</option>\n                    <option>Pharmacy</option>\n                </select>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">Mode of Payment</div>\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Mode of Payment</label>\n                <div class=\"col-sm-10 \">\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input form-background-color\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineRadio1\">M-PESA</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input form-background-color\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                        <label class=\"form-check-label\" for=\"inlineRadio2\">VISA</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input form-background-color\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                        <label class=\"form-check-label\" for=\"inlineRadio2\">CASH</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Insurance Policy</label>\n                <div class=\"col-sm-10\">\n                    <select class=\"form-control form-background-color\" id=\"sel1\">\n                    <option>Choose Insurer</option>\n                    <option>Jubilee Insurance</option>\n                    <option>UAP Insurance</option>\n                </select>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Insurance Policy Number</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n            <!-- <div class=\"card-header\">Mode of Payment</div> -->\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Amount Paid</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"KES\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <a [routerLink]=\"['/doctors/see-patient']\">\n        <button type=\"button\" class=\"btn btn-primary\">Send to Doctor</button>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/finance/finance/finance.component.scss":
/*!********************************************************!*\
  !*** ./src/app/finance/finance/finance.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/finance/finance/finance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/finance/finance/finance.component.ts ***!
  \******************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
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

var FinanceComponent = /** @class */ (function () {
    function FinanceComponent() {
    }
    FinanceComponent.prototype.ngOnInit = function () {
    };
    FinanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-finance',
            template: __webpack_require__(/*! ./finance.component.html */ "./src/app/finance/finance/finance.component.html"),
            styles: [__webpack_require__(/*! ./finance.component.scss */ "./src/app/finance/finance/finance.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FinanceComponent);
    return FinanceComponent;
}());



/***/ }),

/***/ "./src/app/finance/patients/patients.component.html":
/*!**********************************************************!*\
  !*** ./src/app/finance/patients/patients.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\" style=\"width:90% !important\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h6 style=\"font-weight:600; color:#cf005d\">Welcome, Dennis Sigei </h6>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row top-padding-80\">\n                    <div class=\"col-md-6\">\n                        <!-- <div class=\"card\"> -->\n                                <!-- <div class=\"card-header\">\n                                    Patients in Queue\n                                </div> -->\n                                    <div class=\"table-responsive table-scroll\">\n                                        <table class=\"table table-striped\">\n                                            <thead>\n                                                <tr>\n                                                    <th></th>\n                                                    <th>\n                                                        #\n                                                    </th>\n                                                    <th>\n                                                        PATIENT ID\n                                                    <th>\n                                                        FULL NAME\n                                                    </th>\n                                                    <!-- <th>\n                                                        PHONE NUMBER\n                                                    </th> -->\n                                                    <th>\n                                                        GENDER\n                                                    </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr [routerLink]=\"['/labs/see-patient']\">\n                                                    <th>\n                                                        NEXT>\n                                                    </th>\n                                                    <th scope=\"row\">\n                                                        1.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Mark Otto\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        2.\n                                                    </th>\n                                                    <td>\n                                                        23870933424\n                                                    </td>\n                                                    <td>\n                                                        Jane Thornton\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Female\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        3.\n                                                    </th>\n                                                    <td>\n                                                        23870933445\n                                                    </td>\n                                                    <td>\n                                                        Larry the Bird\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        4.\n                                                    </th>\n                                                    <td>\n                                                        23870933193\n                                                    </td>\n                                                    <td>\n                                                        Mark Otto\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        5.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Jane Thornton\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Female\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        6.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Larry the Bird\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        7.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Mark Otto\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        8.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Jane Thornton\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Female\n                                                    </td>\n                                                </tr>\n                                                <tr>\n                                                    <td></td>\n                                                    <th scope=\"row\">\n                                                        9.\n                                                    </th>\n                                                    <td>\n                                                        23870933423\n                                                    </td>\n                                                    <td>\n                                                        Larry the Bird\n                                                    </td>\n                                                    <!-- <td>\n                                                        (254) 720\n                                                    </td> -->\n                                                    <td>\n                                                        Male\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    <!-- </div> -->\n                              </div>\n                    <!-- <div class=\"col\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/images/landing/dashboard.png\" alt=\"\" class=\"img-links\">\n                        </div>\n                        <div class=\"center-text\">\n                            <p>Dashboard</p>\n                        </div>\n                    </div>\n                    <div class=\"col\"></div>\n                    <div class=\"col\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/images/landing/settings.png\" alt=\"\" class=\"img-links\">\n                        </div>\n                        <div class=\"center-text\">\n                            <p>Settings</p>\n                        </div>\n                    </div> -->\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"text-center\">\n                                    <img src=\"assets/images/labs/Patients in Waiting.png\" alt=\"\" class=\"img-links first-image-small\">\n                                    <p  class=\"center-text patients-in-queue\"><b>15</b> PATIENTS <br>IN WAITING</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\" style=\"margin-top:5%\">\n                                <div class=\"text-center\">\n                                    <img src=\"assets/images/labs/Patients seen.png\" alt=\"\" class=\"img-links second-image-align second-image-small\">\n                                    <p class=\"patients-seen\">20 <br> PATIENTS <br> SEEN</p>\n                                    <!-- <div class=\"center-text\" style=\"margin-top:40%; margin-right: 40%\">\n                                        <p>20 <br> PATIENTS <br> SEEN</p>\n                                    </div> -->\n                                </div>\n                                \n                            </div>\n                        </div>\n                        <div class=\"row\" class=\"center-image-align\">\n                            <div class=\"col-md-6\">\n                                <div class=\"text-center\">\n                                    <img  src=\"assets/images/labs/Waiting.png\" alt=\"\" class=\"img-links waiting-image\">\n                                </div>\n                                <div class=\"text-center logged_in_for\">\n                                    <div><p>LOGGED IN FOR:</p></div>\n                                    <img src=\"assets/images/labs/Logged in for 1 hr.png\" alt=\"\" class=\"img-links fourth-image-small\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"text-center\">\n                                    <img src=\"assets/images/labs/Average Time per Patient.png\" alt=\"\" class=\"img-links third-image-small  third-image-align\">\n                                    <p class=\"average_time_patient\"><b style=\"font-size:40px\">5</b><br>MINS</p>\n                                    <p class=\"average_time_patient_text\">AVERAGE <br>TIME PER<br> PATIENT</p>\n                                    <!-- <div class=\"center-text\" style=\"margin-top:40%; margin-right: 40%\">\n                                        <p>20 <br> PATIENTS <br> SEEN</p>\n                                    </div> -->\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n    \n                <!-- <div class=\"row \">\n                    <div class=\"col-sm-12 mx-auto\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/images/landing/landing.png\" class=\"img-landing\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n    \n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/images/landing/reports.png\" alt=\"\" class=\"img-links\">\n                        </div>\n                        <div class=\"center-text\">\n                            <p>Reports</p>\n                        </div>\n                    </div>\n                    <div class=\"col\"></div>\n                    <div class=\"col\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/images/landing/stations.png\" alt=\"\" class=\"img-links\">\n                        </div>\n                        <div class=\"center-text\">\n                            <p>Stations</p>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/finance/patients/patients.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/finance/patients/patients.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-padding-80 {\n  padding-top: 80px; }\n\n.top-padding-20 {\n  padding-top: 20px; }\n\n.table-scroll {\n  overflow: auto;\n  height: 70%; }\n\n.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {\n  background-color: #F9DEEB; }\n\nth {\n  color: #D44874; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-button {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-track {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-track-piece:start {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-thumb:vertical {\n  background-color: #F9DEEB; }\n\n::-webkit-scrollbar-corner {\n  background-color: #D44874; }\n\n.patients-in-queue {\n  margin-left: 35%;\n  margin-top: -35%; }\n\n.patients-seen {\n  margin-left: -35%;\n  margin-top: -30%; }\n\n.logged_in_for {\n  margin-top: 20%; }\n\n.average_time_patient {\n  margin-top: -87%;\n  margin-left: 60%;\n  width: 100%; }\n\n.average_time_patient_text {\n  margin-top: -32%;\n  margin-left: 85%;\n  width: 100%; }\n\n.second-image-align {\n  margin-top: 20%;\n  margin-left: -100%; }\n\n.third-image-align {\n  margin-top: -140%;\n  margin-left: 80%; }\n\n.center-image-align {\n  margin-top: -10%; }\n\n.waiting-image {\n  width: 80%; }\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (max-width: 600px) {\n  .patients-in-queue {\n    margin-left: 35%;\n    margin-top: -45%; }\n  .patients-seen {\n    display: none; }\n  .logged_in_for {\n    display: none; }\n  .average_time_patient {\n    display: none; }\n  .average_time_patient_text {\n    display: none; }\n  .second-image-align {\n    margin-top: 20%;\n    margin-left: -100%; }\n  .second-image-small {\n    display: none; }\n  .first-image-small {\n    margin-top: -60%; }\n  .fourth-image-small {\n    margin-top: -40%; }\n  .third-image-small {\n    display: none; }\n  .center-image-align {\n    margin-top: -10%; }\n  .waiting-image {\n    display: none; } }\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  .patients-in-queue {\n    margin-left: 50%;\n    margin-top: -45%; }\n  .patients-seen {\n    margin-left: -15%;\n    margin-top: -40%; }\n  .average_time_patient {\n    margin-top: -95%;\n    margin-left: 70%;\n    width: 100%; }\n  .average_time_patient_text {\n    margin-top: -58%;\n    margin-left: 110%;\n    width: 100%; } }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  .patients-in-queue {\n    margin-left: 35%;\n    margin-top: -35%; }\n  .patients-seen {\n    margin-left: -35%;\n    margin-top: -30%; }\n  .logged_in_for {\n    margin-top: 20%; }\n  .average_time_patient {\n    margin-top: -87%;\n    margin-left: 60%;\n    width: 100%; }\n  .average_time_patient_text {\n    margin-top: -32%;\n    margin-left: 85%;\n    width: 100%; }\n  .second-image-align {\n    margin-top: 20%;\n    margin-left: -100%; }\n  .third-image-align {\n    margin-top: -140%;\n    margin-left: 80%; }\n  .center-image-align {\n    margin-top: -10%; }\n  .waiting-image {\n    width: 80%; } }\n"

/***/ }),

/***/ "./src/app/finance/patients/patients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/finance/patients/patients.component.ts ***!
  \********************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
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

var PatientsComponent = /** @class */ (function () {
    function PatientsComponent() {
    }
    PatientsComponent.prototype.ngOnInit = function () {
    };
    PatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/finance/patients/patients.component.html"),
            styles: [__webpack_require__(/*! ./patients.component.scss */ "./src/app/finance/patients/patients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=finance-finance-module.js.map