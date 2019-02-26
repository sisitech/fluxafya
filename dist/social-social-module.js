(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-social-module"],{

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-md-12 col-lg-6\">\n                        <figure class=\"mb-0\">\n                            <div class=\"text-center\">\n                                <img src=\"assets/images/avatar.jpg\" alt=\"\" class=\"rounded-circle\">\n                            </div>\n                        </figure>\n                    </div>\n                    <div class=\"col-md-12 col-lg-6 text-center text-lg-left\">\n                        <h5 class=\"mb-0\"><span class=\"fw-200\">Dennis</span> <span>Sigei</span></h5>\n                        <small>gerald@morris.com</small>\n                        <p class=\"mb-0 pb-0\">Triage Nurse</p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card-body\">\n                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>\n                <a href=\"javascript:;\" class=\"btn btn-primary btn-block\">Follow</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-8\">\n        <div class=\"card\">\n            <ngb-tabset class=\"card-tab\">\n                <ngb-tab title=\"Activity\">\n                    <ng-template ngbTabContent>\n                        <div class=\"activity-stream\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <img class=\"card-avatar\" src=\"assets/images/face1.jpg\">\n                                    <div class=\"card-header-text\">\n                                        <div class=\"card-title\">Received a call from Joel</div>\n                                        <div class=\"card-subtitle\">Header subtitle</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <img class=\"card-avatar\" src=\"assets/images/avatar.jpg\">\n                                    <div class=\"card-header-text\">\n                                        <div class=\"card-title\">Header title</div>\n                                        <div class=\"card-subtitle\">Header subtitle</div>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non\n                                        mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n                                    <div class=\"btn-group\">\n                                        <a href=\"javascript:;\" class=\"btn btn-secondary btn-sm\">Like</a>\n                                        <a href=\"javascript:;\" class=\"btn btn-secondary btn-sm\">Comment</a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <img class=\"card-avatar\" src=\"assets/images/face2.jpg\">\n                                    <div class=\"card-header-text\">\n                                        <div class=\"card-title\">Header title</div>\n                                        <div class=\"card-subtitle\">Added a photo</div>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"media-tile media-tile-footer\">\n                                        <figure style=\"width: 300px\">\n                                            <img src=\"assets/images/unsplash/20.jpg\" alt=\"Card image cap\" class=\"img-fluid\" />\n                                            <figcaption>\n                                                <h6 class=\"media-title fw-300\">Photo</h6>\n                                                <small class=\"media-subtitle\">Photo Image</small>\n                                            </figcaption>\n                                        </figure>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <img class=\"card-avatar\" src=\"assets/images/face3.jpg\">\n                                    <div class=\"card-header-text\">\n                                        <div class=\"card-title\">Header title</div>\n                                        <div class=\"card-subtitle\">Header subtitle</div>\n                                    </div>\n                                </div>\n                                <div class=\"card-body\">\n                                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non\n                                        mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <img class=\"card-avatar\" src=\"assets/images/face4.jpg\">\n                                    <div class=\"card-header-text\">\n                                        <div class=\"card-title\">Uploaded new file</div>\n                                        <div class=\"card-subtitle\">Header subtitle</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Edit Profile\">\n                    <ng-template ngbTabContent>\n                        <form>\n                            <div class=\"p-3\">\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-4\">\n                                        <label for=\"company\" class=\"col-form-label\">Company</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"company\" value=\"Google\" disabled>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <label for=\"fname\" class=\"col-form-label\">First name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"First name\">\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <label for=\"lname\" class=\"col-form-label\">Last name</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Last name\">\n                                    </div>\n                                </div>\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"inputEmail4\" class=\"col-form-label\">Email</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n                                    </div>\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"inputPassword4\" class=\"col-form-label\">Password</label>\n                                        <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"address\" class=\"col-form-label\">Address</label>\n                                    <textarea class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\"></textarea>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"address2\" class=\"col-form-label\">Address 2</label>\n                                    <textarea class=\"form-control\" id=\"address2\" placeholder=\"Apartment, studio, or floor\"></textarea>\n                                </div>\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"city\" class=\"col-form-label\">City</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\">\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <label for=\"state\" class=\"col-form-label\">State</label>\n                                        <select id=\"state\" class=\"form-control\"></select>\n                                    </div>\n                                    <div class=\"form-group col-md-2\">\n                                        <label for=\"zip\" class=\"col-form-label\">Zip</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"ZIP Code\">\n                                    </div>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-primary\">Update Profile</button>\n                            </div>\n                        </form>\n                    </ng-template>\n                </ngb-tab>\n            </ngb-tabset>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/social/social.component.scss":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
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

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
        this.images = [];
        this.num = 1;
        for (this.num; this.num <= 20; this.num += 1) {
            this.images.push(this.num);
        }
    }
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/app/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/social/social.module.ts":
/*!*****************************************!*\
  !*** ./src/app/social/social.module.ts ***!
  \*****************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _social_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social.routing */ "./src/app/social/social.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_social_routing__WEBPACK_IMPORTED_MODULE_5__["SocialRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"]
            ],
            declarations: [_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ }),

/***/ "./src/app/social/social.routing.ts":
/*!******************************************!*\
  !*** ./src/app/social/social.routing.ts ***!
  \******************************************/
/*! exports provided: SocialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRoutes", function() { return SocialRoutes; });
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");

var SocialRoutes = [
    {
        path: '',
        component: _social_component__WEBPACK_IMPORTED_MODULE_0__["SocialComponent"],
        data: {
            heading: 'Social'
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=social-social-module.js.map