(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["triage-triage-module"],{

/***/ "./src/app/triage/patients/patients.component.html":
/*!*********************************************************!*\
  !*** ./src/app/triage/patients/patients.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\" style=\"width:90% !important\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h6 style=\"font-weight:600; color:#cf005d\">Welcome, Dennis Sigei </h6>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row top-padding-80\">\n                <div class=\"col-md-6\">\n                    <!-- <div class=\"card\"> -->\n                            <!-- <div class=\"card-header\">\n                                Patients in Queue\n                            </div> -->\n                                <div class=\"table-responsive table-scroll\">\n                                    <table class=\"table table-striped\">\n                                        <thead>\n                                            <tr>\n                                                <th></th>\n                                                <th>\n                                                    #\n                                                </th>\n                                                <th>\n                                                    PATIENT ID\n                                                <th>\n                                                    FULL NAME\n                                                </th>\n                                                <!-- <th>\n                                                    PHONE NUMBER\n                                                </th> -->\n                                                <th>\n                                                    GENDER\n                                                </th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr [routerLink]=\"['/labs/see-patient']\">\n                                                <th>\n                                                    NEXT>\n                                                </th>\n                                                <th scope=\"row\">\n                                                    1.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Mark Otto\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    2.\n                                                </th>\n                                                <td>\n                                                    23870933424\n                                                </td>\n                                                <td>\n                                                    Jane Thornton\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Female\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    3.\n                                                </th>\n                                                <td>\n                                                    23870933445\n                                                </td>\n                                                <td>\n                                                    Larry the Bird\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    4.\n                                                </th>\n                                                <td>\n                                                    23870933193\n                                                </td>\n                                                <td>\n                                                    Mark Otto\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    5.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Jane Thornton\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Female\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    6.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Larry the Bird\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    7.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Mark Otto\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    8.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Jane Thornton\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Female\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td></td>\n                                                <th scope=\"row\">\n                                                    9.\n                                                </th>\n                                                <td>\n                                                    23870933423\n                                                </td>\n                                                <td>\n                                                    Larry the Bird\n                                                </td>\n                                                <!-- <td>\n                                                    (254) 720\n                                                </td> -->\n                                                <td>\n                                                    Male\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                <!-- </div> -->\n                          </div>\n                <!-- <div class=\"col\">\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/landing/dashboard.png\" alt=\"\" class=\"img-links\">\n                    </div>\n                    <div class=\"center-text\">\n                        <p>Dashboard</p>\n                    </div>\n                </div>\n                <div class=\"col\"></div>\n                <div class=\"col\">\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/landing/settings.png\" alt=\"\" class=\"img-links\">\n                    </div>\n                    <div class=\"center-text\">\n                        <p>Settings</p>\n                    </div>\n                </div> -->\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"text-center\">\n                                <img src=\"assets/images/labs/Patients in Waiting.png\" alt=\"\" class=\"img-links first-image-small\">\n                                <p  class=\"center-text patients-in-queue\"><b>15</b> PATIENTS <br>IN WAITING</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\" style=\"margin-top:5%\">\n                            <div class=\"text-center\">\n                                <img src=\"assets/images/labs/Patients seen.png\" alt=\"\" class=\"img-links second-image-align second-image-small\">\n                                <p class=\"patients-seen\">20 <br> PATIENTS <br> SEEN</p>\n                                <!-- <div class=\"center-text\" style=\"margin-top:40%; margin-right: 40%\">\n                                    <p>20 <br> PATIENTS <br> SEEN</p>\n                                </div> -->\n                            </div>\n                            \n                        </div>\n                    </div>\n                    <div class=\"row\" class=\"center-image-align\">\n                        <div class=\"col-md-6\">\n                            <div class=\"text-center\">\n                                <img  src=\"assets/images/labs/Waiting.png\" alt=\"\" class=\"img-links waiting-image\">\n                            </div>\n                            <div class=\"text-center logged_in_for\">\n                                <div><p>LOGGED IN FOR:</p></div>\n                                <img src=\"assets/images/labs/Logged in for 1 hr.png\" alt=\"\" class=\"img-links fourth-image-small\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"text-center\">\n                                <img src=\"assets/images/labs/Average Time per Patient.png\" alt=\"\" class=\"img-links third-image-small  third-image-align\">\n                                <p class=\"average_time_patient\"><b style=\"font-size:40px\">5</b><br>MINS</p>\n                                <p class=\"average_time_patient_text\">AVERAGE <br>TIME PER<br> PATIENT</p>\n                                <!-- <div class=\"center-text\" style=\"margin-top:40%; margin-right: 40%\">\n                                    <p>20 <br> PATIENTS <br> SEEN</p>\n                                </div> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- <div class=\"row \">\n                <div class=\"col-sm-12 mx-auto\">\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/landing/landing.png\" class=\"img-landing\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/landing/reports.png\" alt=\"\" class=\"img-links\">\n                    </div>\n                    <div class=\"center-text\">\n                        <p>Reports</p>\n                    </div>\n                </div>\n                <div class=\"col\"></div>\n                <div class=\"col\">\n                    <div class=\"text-center\">\n                        <img src=\"assets/images/landing/stations.png\" alt=\"\" class=\"img-links\">\n                    </div>\n                    <div class=\"center-text\">\n                        <p>Stations</p>\n                    </div>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/triage/patients/patients.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/triage/patients/patients.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-padding-80 {\n  padding-top: 80px; }\n\n.top-padding-20 {\n  padding-top: 20px; }\n\n.table-scroll {\n  overflow: auto;\n  height: 70%; }\n\n.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {\n  background-color: #F9DEEB; }\n\nth {\n  color: #D44874; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-button {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-track {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-track-piece:start {\n  background-color: #D44874; }\n\n::-webkit-scrollbar-thumb:vertical {\n  background-color: #F9DEEB; }\n\n::-webkit-scrollbar-corner {\n  background-color: #D44874; }\n\n.patients-in-queue {\n  margin-left: 35%;\n  margin-top: -35%; }\n\n.patients-seen {\n  margin-left: -35%;\n  margin-top: -30%; }\n\n.logged_in_for {\n  margin-top: 20%; }\n\n.average_time_patient {\n  margin-top: -87%;\n  margin-left: 60%;\n  width: 100%; }\n\n.average_time_patient_text {\n  margin-top: -32%;\n  margin-left: 85%;\n  width: 100%; }\n\n.second-image-align {\n  margin-top: 20%;\n  margin-left: -100%; }\n\n.third-image-align {\n  margin-top: -140%;\n  margin-left: 80%; }\n\n.center-image-align {\n  margin-top: -10%; }\n\n.waiting-image {\n  width: 80%; }\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (max-width: 600px) {\n  .patients-in-queue {\n    margin-left: 35%;\n    margin-top: -45%; }\n  .patients-seen {\n    display: none; }\n  .logged_in_for {\n    display: none; }\n  .average_time_patient {\n    display: none; }\n  .average_time_patient_text {\n    display: none; }\n  .second-image-align {\n    margin-top: 20%;\n    margin-left: -100%; }\n  .second-image-small {\n    display: none; }\n  .first-image-small {\n    margin-top: -60%; }\n  .fourth-image-small {\n    margin-top: -40%; }\n  .third-image-small {\n    display: none; }\n  .center-image-align {\n    margin-top: -10%; }\n  .waiting-image {\n    display: none; } }\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  .patients-in-queue {\n    margin-left: 50%;\n    margin-top: -45%; }\n  .patients-seen {\n    margin-left: -15%;\n    margin-top: -40%; }\n  .average_time_patient {\n    margin-top: -95%;\n    margin-left: 70%;\n    width: 100%; }\n  .average_time_patient_text {\n    margin-top: -58%;\n    margin-left: 110%;\n    width: 100%; } }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  .patients-in-queue {\n    margin-left: 35%;\n    margin-top: -35%; }\n  .patients-seen {\n    margin-left: -35%;\n    margin-top: -30%; }\n  .logged_in_for {\n    margin-top: 20%; }\n  .average_time_patient {\n    margin-top: -87%;\n    margin-left: 60%;\n    width: 100%; }\n  .average_time_patient_text {\n    margin-top: -32%;\n    margin-left: 85%;\n    width: 100%; }\n  .second-image-align {\n    margin-top: 20%;\n    margin-left: -100%; }\n  .third-image-align {\n    margin-top: -140%;\n    margin-left: 80%; }\n  .center-image-align {\n    margin-top: -10%; }\n  .waiting-image {\n    width: 80%; } }\n"

/***/ }),

/***/ "./src/app/triage/patients/patients.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/triage/patients/patients.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./patients.component.html */ "./src/app/triage/patients/patients.component.html"),
            styles: [__webpack_require__(/*! ./patients.component.scss */ "./src/app/triage/patients/patients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ }),

/***/ "./src/app/triage/triage.module.ts":
/*!*****************************************!*\
  !*** ./src/app/triage/triage.module.ts ***!
  \*****************************************/
/*! exports provided: TriageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriageModule", function() { return TriageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _triage_triage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triage/triage.component */ "./src/app/triage/triage/triage.component.ts");
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/triage/patients/patients.component.ts");
/* harmony import */ var _triage_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triage.routing */ "./src/app/triage/triage.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TriageModule = /** @class */ (function () {
    function TriageModule() {
    }
    TriageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_triage_routing__WEBPACK_IMPORTED_MODULE_6__["TriageRoutes"])
            ],
            declarations: [_triage_triage_component__WEBPACK_IMPORTED_MODULE_4__["TriageComponent"], _patients_patients_component__WEBPACK_IMPORTED_MODULE_5__["PatientsComponent"]]
        })
    ], TriageModule);
    return TriageModule;
}());



/***/ }),

/***/ "./src/app/triage/triage.routing.ts":
/*!******************************************!*\
  !*** ./src/app/triage/triage.routing.ts ***!
  \******************************************/
/*! exports provided: TriageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriageRoutes", function() { return TriageRoutes; });
/* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/triage/patients/patients.component.ts");
/* harmony import */ var _triage_triage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triage/triage.component */ "./src/app/triage/triage/triage.component.ts");


var TriageRoutes = [
    {
        path: '',
        children: [
            {
                path: 'see-patient',
                component: _triage_triage_component__WEBPACK_IMPORTED_MODULE_1__["TriageComponent"],
                data: {
                    heading: 'TRIAGE FORM'
                }
            },
            {
                path: '**',
                component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_0__["PatientsComponent"],
                data: {
                    heading: 'Patients in Queue'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/triage/triage/triage.component.html":
/*!*****************************************************!*\
  !*** ./src/app/triage/triage/triage.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shorten-cards\">\n    <div class=\"card\">\n        <div class=\"card-body\">Welcome <b>Dennis Sigei,</b></div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">MEASURE OF PATIENT'S VITALS</div>\n\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <div class=\"col-md-6\">\n                    <div class=\"row\">\n                        <label for=\"staticEmail\" class=\"col-sm-5 symptoms-form col-form-label\">Weight</label>\n                        <div class=\"col-sm-5\">\n                            <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"80 Kgs\">\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                        <label for=\"staticEmail\" class=\"col-sm-5 symptoms-form col-form-label\">Temperature</label>\n                        <div class=\"col-sm-5\">\n                            <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"30\">\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                        <label for=\"staticEmail\" class=\"col-sm-5  symptoms-form col-form-label\">Blood Pressure</label>\n                        <div class=\"col-sm-5\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-5\">\n                                        <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"120\">\n                                </div>\n                                <span class=\"strike-line\">/</span>\n                                <div class=\"col-sm-5\">\n                                    <input type=\"text\" class=\"form-control form-background-color\" id=\"staticEmail\" placeholder=\"80\">\n                                </div>\n                            </div>\n                        <!-- </div>/\n                        <div class=\"col-sm-4\">\n                            <input type=\"text\" class=\"form-control\" id=\"staticEmail\" placeholder=\"Diastolic\">\n                        </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 form-space\">\n                    <div class=\"row\">\n                        <label for=\"staticEmail\" class=\"col-sm-3 col-form-label\">Allergies</label>\n                        <div class=\"col-sm-9\">\n                            <textarea name=\"\" class=\"form-control form-background-color allergy-form-width\" id=\"\" cols=\"30\" rows=\"8\"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">SYMPTOMS SUMMARY</div>\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 symptoms-form col-form-label\">Symptoms <br> Summary</label>\n                <div  class=\"col-sm-8 form-space\">\n                    <textarea  name=\"\" class=\"form-control form-background-color form-width\" id=\"\" cols=\"30\" rows=\"8\"></textarea>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-header\">PRIORITY</div>\n        <div class=\"card-body\">\n            <div class=\"form-group row\">\n                <label for=\"staticEmail\" class=\"col-sm-2 symptoms-form col-form-label\">Patient <br> Urgency</label>\n                <div  class=\"col-sm-8 form-space\">\n                    <select name=\"\" class=\"form-control form-background-color form-width\" id=\"\">\n                    <option>-----</option>\n                    <option>Normal</option>\n                    <option>High</option>\n                </select>\n                </div>\n            </div>\n        </div>\n    </div>\n    <a [routerLink]=\"['/finance/see-patient']\">\n        <button type=\"button\" class=\"btn btn-primary\">Send to Cashier</button>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/triage/triage/triage.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/triage/triage/triage.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".symptoms-form {\n  margin-left: 2.5%; }\n\n.prority-form {\n  margin-right: 4.5%; }\n\n.form-width {\n  width: 90%; }\n\n.allergy-form-width {\n  width: 103%; }\n\n.strike-line {\n  font-size: 20px;\n  color: #F9DEEB; }\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (max-width: 600px) {\n  .form-width {\n    width: 100%; }\n  .form-space {\n    margin-top: 2px; }\n  br {\n    display: none; } }\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  .label-size {\n    width: 100%; }\n  .symptoms-form {\n    margin-right: 2.5%; }\n  .form-width {\n    width: 120%; }\n  .strike-line {\n    font-size: 20px;\n    color: #F9DEEB; } }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n"

/***/ }),

/***/ "./src/app/triage/triage/triage.component.ts":
/*!***************************************************!*\
  !*** ./src/app/triage/triage/triage.component.ts ***!
  \***************************************************/
/*! exports provided: TriageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriageComponent", function() { return TriageComponent; });
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

var TriageComponent = /** @class */ (function () {
    function TriageComponent() {
    }
    TriageComponent.prototype.ngOnInit = function () {
    };
    TriageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-triage',
            template: __webpack_require__(/*! ./triage.component.html */ "./src/app/triage/triage/triage.component.html"),
            styles: [__webpack_require__(/*! ./triage.component.scss */ "./src/app/triage/triage/triage.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TriageComponent);
    return TriageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=triage-triage-module.js.map