(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/activity/activity.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/activity/activity.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-8\">\n    <div class=\"card\">\n      <div class=\"activity-stream\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face1.jpg\">\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Received a call from Joel</div>\n              <div class=\"card-subtitle\">Header subtitle</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-avatar widget-icon rounded-circle bg-orange text-white icon ion-ios-star\"></div>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Header with icon</div>\n              <div class=\"card-subtitle\">Header subtitle</div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus,\n              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec\n              id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor\n              ligula, eget lacinia odio sem nec elit.</p>\n            <a href=\"javascript:;\" class=\"mr-1\">Like</a>\n            <a href=\"javascript:;\">Comment</a>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face2.jpg\">\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Header title</div>\n              <div class=\"card-subtitle\">Added a photo</div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <img src=\"assets/images/unsplash/20.jpg\" style=\"width: 300px;\">\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face3.jpg\">\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Header title</div>\n              <div class=\"card-subtitle\">Header subtitle</div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus,\n              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec\n              id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor\n              ligula, eget lacinia odio sem nec elit.</p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face4.jpg\">\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Uploaded new file</div>\n              <div class=\"card-subtitle\">Header subtitle</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-avatar widget-icon rounded-circle bg-purple text-white icon ion-ios-navigate\"></div>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">Header with icon</div>\n              <div class=\"card-subtitle\">Header subtitle</div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus,\n              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec\n              id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor\n              ligula, eget lacinia odio sem nec elit.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/activity/activity.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/activity/activity.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/activity/activity.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/activity/activity.component.ts ***!
  \******************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/pages/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/app/pages/activity/activity.component.scss")]
        })
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/pages/blank/blank.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blank works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/blank/blank.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/blank/blank.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/blank/blank.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/pages/blank/blank.component.scss")]
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/pages/forum/forum.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/forum/forum.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"card-header\">\n    <div class=\"card-header-text w-100\">\n      <div class=\"card-title\">\n        General Topics\n      </div>\n      <div class=\"card-subtitle text-capitalize ff-sans\">\n        Total posts: 73,564\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-red text-white icon ion-ios-pricetag\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Forum Rules</a>\n        <div>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>890</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>465</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>375</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-purple text-white icon ion-ios-cart\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Official Announcements</a>\n        <div>Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n          auctor.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>46</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>78</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>22</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-brown text-white icon ion-ios-alarm\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Technical Announcements</a>\n        <div>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>567</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>686</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>982</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-indigo text-white icon ion-ios-game-controller-b\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Marketing</a>\n        <div>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>4653</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>6785</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>9456</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"card\">\n\n  <div class=\"card-header\">\n    <div class=\"card-header-text w-100\">\n      <div class=\"card-title\">\n        Client Topics\n      </div>\n      <div class=\"card-subtitle text-capitalize ff-sans\">\n        Total posts: 78,548\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-info text-white icon ion-ios-medkit\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Wordpress support</a>\n        <div>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>890</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>465</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>375</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-success text-white icon ion-ios-navigate\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">HTML Templates</a>\n        <div>Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\n          auctor.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>46</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>78</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>22</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-danger text-white icon ion-ios-speedometer\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">UI/UX Designs</a>\n        <div>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>567</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>686</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>982</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-green text-white icon ion-ios-analytics\"></div>\n      </div>\n      <div class=\"mr-auto\">\n        <a href=\"javascript:;\" class=\"fw-400 text-color\">Customizations</a>\n        <div>Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"forum-stat\">\n          <h6>4653</h6>\n          <small class=\"d-block\">Views</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>6785</h6>\n          <small class=\"d-block\">Topics</small>\n        </div>\n        <div class=\"forum-stat\">\n          <h6>9456</h6>\n          <small class=\"d-block\">Replies</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/forum/forum.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/forum/forum.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum-stat {\n  width: 70px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/forum/forum.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/forum/forum.component.ts ***!
  \************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
    }
    ForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/pages/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.scss */ "./src/app/pages/forum/forum.component.scss")]
        })
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/pages/invoice/invoice.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/invoice/invoice.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row mb-5\">\n      <div class=\"col\">\n        <p class=\"mb-0\">Company LLC</p>\n        <p class=\"mb-0\">123 Fake Street</p>\n        <p class=\"mb-0\">Email: company@address.com</p>\n        <p class=\"mb-0\">Tel: +012 345 678 90</p>\n      </div>\n    </div>\n\n    <div class=\"mt-5\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <p class=\"mb-1\"><strong>Bill to</strong></p>\n          <h5 class=\"fw-300 mb-3\">John Smith</h5>\n\n          <p class=\"mb-0\">1234 Main</p>\n          <p class=\"mb-0\">Apt. 4B</p>\n          <p class=\"mb-0\">Springfield, ST 54321</p>\n        </div>\n        <div class=\"col\">\n          <p class=\"mb-1\"><strong>Invoice number</strong></p>\n          <h5 class=\"fw-300 mb-3\">#0001</h5>\n\n          <p class=\"mb-0\">Payment due by 31 May 2016</p>\n        </div>\n      </div>\n    </div>\n\n    <ngx-datatable class=\"material no-shadow mb-0\" [rows]=\"invoiceItems\" [columnMode]=\"'flex'\" [headerHeight]=\"38\"\n      [footerHeight]=\"0\" [rowHeight]=\"'auto'\">\n      <ngx-datatable-column name=\"Description\" [flexGrow]=\"4\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.title}}</strong><br /><span class=\"mat-text-muted\">{{row.subtitle}}</span>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Unit Price\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.price | currency:'USD':true:'1.2-2'}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Quantity\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{row.quantity}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n      <ngx-datatable-column name=\"Amount\" [flexGrow]=\"1\">\n        <ng-template ngx-datatable-cell-template let-row=\"row\">\n          <strong>{{ (row.price * row.quantity) | currency:'USD':true:'1.2-2'}}</strong>\n        </ng-template>\n      </ngx-datatable-column>\n    </ngx-datatable>\n\n    <div class=\"row\">\n      <div class=\"col mt-1\">\n        <p class=\"m-0\"><strong>Subtotal</strong></p>\n        <h3 class=\"fw-100 m-0\">{{getSubTotal() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n      <div class=\"col mt-1 text-sm-right text-md-left\">\n        <p class=\"m-0\"><strong>Tax (15%)</strong></p>\n        <h3 class=\"fw-100 m-0\">{{getCalculatedTax() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n      <div class=\"col mt-1\">\n        <p class=\"m-0\"><strong>Discount</strong></p>\n        <h3 class=\"fw-100 m-0\">$0.00</h3>\n      </div>\n      <div class=\"col mt-1 text-xs-left text-sm-right\">\n        <p class=\"m-0\"><strong>Total</strong></p>\n        <h3 class=\"fw-100 m-0 text-success\">{{ getTotal() | currency:'USD':true:'1.2-2'}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/invoice/invoice.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/invoice/invoice.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/invoice/invoice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/invoice/invoice.component.ts ***!
  \****************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
        this.invoiceItems = [
            {
                title: 'Maintanance',
                subtitle: 'Monthly web updates for http://www.themeforest.net',
                price: 250.0,
                quantity: 1
            },
            {
                title: 'Recurring Bill (Hosting)',
                subtitle: 'Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)',
                price: 652.87,
                quantity: 3
            },
            {
                title: 'Recurring Bill (Domain)',
                subtitle: '2 year domain name purchase',
                price: 239.0,
                quantity: 3
            },
            {
                title: 'Web design',
                subtitle: 'PSD to HTML Conversion (3 pages)',
                price: 958.0,
                quantity: 1
            }
        ];
        this.invoiceTotals = [
            {
                subtotal: this.getSubTotal(),
                tax: this.getCalculatedTax(),
                discount: 0.0,
                total: 0
            }
        ];
    }
    InvoiceComponent.prototype.getSubTotal = function () {
        var total = 0.0;
        for (var i = 1; i < this.invoiceItems.length; i++) {
            total += this.invoiceItems[i].price * this.invoiceItems[i].quantity;
        }
        return total;
    };
    InvoiceComponent.prototype.getCalculatedTax = function () {
        return (15 * this.getSubTotal()) / 100;
    };
    InvoiceComponent.prototype.getTotal = function () {
        return this.getSubTotal() + this.getCalculatedTax();
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/pages/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/pages/invoice/invoice.component.scss")]
        })
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/pages/invoice/invoice.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/pages/timeline/timeline.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/pages/forum/forum.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/pages/activity/activity.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutes"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]
            ],
            declarations: [
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_5__["InvoiceComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_8__["ForumComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_9__["ActivityComponent"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_10__["BlankComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/pages/invoice/invoice.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/pages/timeline/timeline.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/pages/activity/activity.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/pages/forum/forum.component.ts");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/pages/blank/blank.component.ts");






var PagesRoutes = [
    {
        path: '',
        children: [
            {
                path: 'invoice',
                component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_0__["InvoiceComponent"],
                data: {
                    heading: 'Invoice'
                }
            },
            {
                path: 'forum',
                component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_4__["ForumComponent"],
                data: {
                    heading: 'Forum'
                }
            },
            {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"],
                data: {
                    heading: 'Timeline'
                }
            },
            {
                path: 'activity',
                component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__["ActivityComponent"],
                data: {
                    heading: 'Activity'
                }
            },
            {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"],
                data: {
                    heading: 'Pricing'
                }
            },
            {
                path: 'blank',
                component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"],
                data: {
                    heading: 'Blank'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"switch my-3\">\n  <div class=\"slide-toggle-bar\">\n    <input type=\"checkbox\" checked>\n    <span></span>\n  </div>\n  <span class=\"slide-toggle-content\">Pay annual save up to 25%</span>\n</label>\n\n\n<div class=\"card-group pricing\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"plan-icon\"><i class=\"icon ion-ios-lightbulb-outline text-primary\"></i></div>\n      <div class=\"plan-title\">Developer</div>\n      <h1>\n        <span class=\"plan-price text-primary\">\n          <span>Free</span>\n        </span>\n      </h1>\n      <ul class=\"plan-features\">\n        <li>Secure storage</li>\n        <li>Limited to 1 user</li>\n        <li>Data analytics</li>\n        <li class=\"plan-feature-inactive text-muted\">Full search access</li>\n        <li class=\"plan-feature-inactive text-muted\">Automatic backups</li>\n      </ul>\n      <button class=\"btn btn-primary\">Choose plan</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"plan-icon\"><i class=\"icon ion-ios-flask-outline text-primary\"></i></div>\n      <div class=\"plan-title\">Basic</div>\n      <h1>\n        <span class=\"plan-price text-primary\">\n          <span class=\"plan-price-symbol\">$</span>\n          <span>10</span>\n          <span class=\"plan-price-period\">/ month</span>\n        </span>\n      </h1>\n      <ul class=\"plan-features\">\n        <li>Secure storage</li>\n        <li>5 concurrent users</li>\n        <li>Data analytics</li>\n        <li class=\"plan-feature-inactive text-muted\">Full search access</li>\n        <li class=\"plan-feature-inactive text-muted\">Automatic backups</li>\n      </ul>\n      <button class=\"btn btn-primary\">Choose plan</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"plan-icon\"><i class=\"icon ion-ios-rose-outline text-primary\"></i></div>\n      <div class=\"plan-title\">Managed</div>\n      <h1>\n        <span class=\"plan-price text-primary\">\n          <span class=\"plan-price-symbol\">$</span>\n          <span>49</span>\n          <span class=\"plan-price-period\">/ month</span>\n        </span>\n      </h1>\n      <ul class=\"plan-features\">\n        <li>Secure storage</li>\n        <li>Unlimited users</li>\n        <li>Data analytics</li>\n        <li>Full search access</li>\n        <li class=\"plan-feature-inactive text-muted\">Automatic backups</li>\n      </ul>\n      <button class=\"btn btn-primary\">Choose plan</button>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"plan-icon\"><i class=\"icon ion-ios-game-controller-b-outline text-primary\"></i></div>\n      <div class=\"plan-title\">Enterprise</div>\n      <h1>\n        <span class=\"plan-price text-primary\">\n          <span class=\"plan-price-symbol\">$</span>\n          <span>99</span>\n          <span class=\"plan-price-period\">/ month</span>\n        </span>\n      </h1>\n      <ul class=\"plan-features\">\n        <li>Secure storage</li>\n        <li>Unlimited users</li>\n        <li>Data analytics</li>\n        <li>Full search access</li>\n        <li>Automatic backups</li>\n      </ul>\n      <button class=\"btn btn-primary\">Choose plan</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n.pricing {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center; }\n.pricing .card {\n    margin-left: -1px; }\n.pricing .plan-icon > .icon {\n    font-size: 2rem;\n    margin-bottom: .5rem;\n    display: block; }\n.pricing.card-group .card + .card {\n    margin-left: -1px; }\n.pricing .pricing-plan {\n    text-align: center;\n    overflow: hidden;\n    cursor: default; }\n.pricing .plan-price {\n    font-size: 2.5rem;\n    font-weight: 400;\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n.pricing .plan-price-symbol {\n    font-size: 1rem;\n    vertical-align: super; }\n.pricing .plan-price-period {\n    font-size: 0.8125rem;\n    display: inline-block;\n    padding: 0;\n    opacity: .7; }\n.pricing .plan-title {\n    font-size: 0.8125rem;\n    font-weight: 500;\n    overflow: hidden;\n    margin-bottom: 1rem;\n    white-space: nowrap;\n    text-transform: uppercase;\n    text-overflow: ellipsis; }\n.pricing .plan-features {\n    line-height: 2.5;\n    margin: 0;\n    padding: .5rem;\n    list-style: none; }\n.pricing .plan-features li {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n.switch {\n  display: table;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/app/pages/pricing/pricing.component.scss")]
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/timeline/timeline.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/timeline/timeline.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"timeline\" [ngClass]=\"{'stacked': stacked}\">\n  <li class=\"timeline-card timeline-button\">\n    <button class=\"btn btn-secondary\" [ngClass]=\"{'active': !stacked}\" (click)=\"stacked = !stacked\">Toggle</button>\n  </li>\n  <li class=\"timeline-card\">\n    <div class=\"timeline-icon bg-grey\"></div>\n    <section class=\"timeline-content\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et\n            magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id\n            elit. Maecenas faucibus mollis interdum.</p>\n        </div>\n      </div>\n      <div class=\"timeline-date\">13:12 am</div>\n    </section>\n  </li>\n  <li class=\"timeline-card\">\n    <div class=\"timeline-icon bg-purple\"></div>\n    <section class=\"timeline-content\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"mb-0\">Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut\n            id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>\n        </div>\n      </div>\n      <div class=\"timeline-date\">Yesterday</div>\n    </section>\n  </li>\n  <li class=\"timeline-card timeline-button\">\n    <button class=\"btn btn-danger\">2016</button>\n  </li>\n  <li class=\"timeline-card timeline-button\"></li>\n  <li class=\"timeline-card\">\n    <div class=\"timeline-icon bg-green\"></div>\n    <section class=\"timeline-content\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"mb-0\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </div>\n      <div class=\"timeline-date\">6 Days Ago</div>\n    </section>\n  </li>\n  <li class=\"timeline-card\">\n    <div class=\"timeline-icon bg-lime\"></div>\n    <section class=\"timeline-content\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"mb-0\">3 more people joined your campaign.</p>\n        </div>\n      </div>\n      <div class=\"timeline-date\">2 Months Ago</div>\n    </section>\n  </li>\n  <li class=\"timeline-card\">\n    <div class=\"timeline-icon bg-brown\"></div>\n    <section class=\"timeline-content\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"mb-0\">Six new friend requests</p>\n        </div>\n      </div>\n      <div class=\"timeline-date\">23 September 2013</div>\n    </section>\n  </li>\n  <li class=\"timeline-card timeline-button\">\n    <button class=\"btn btn-secondary\">2015</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/pages/timeline/timeline.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/timeline/timeline.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n.timeline {\n  position: relative;\n  margin: 0.33333333rem;\n  padding: 0;\n  list-style: none; }\n.timeline::before {\n    position: absolute;\n    top: 6px;\n    width: 4px;\n    height: 100%;\n    content: '';\n    background: rgba(0, 0, 0, 0.06);\n    left: 4px; }\n.timeline .timeline-icon {\n    position: absolute;\n    top: 15px;\n    width: 12px;\n    height: 12px;\n    text-align: center;\n    left: 0;\n    border-radius: 50%; }\n.timeline .timeline-icon::after {\n      content: '';\n      position: absolute;\n      top: 2px;\n      left: 2px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: white; }\n.timeline .timeline-card {\n    position: relative;\n    margin: 40px 0; }\n.timeline .timeline-card::after {\n      display: block;\n      clear: both;\n      content: \"\"; }\n.timeline .timeline-card:first-child .timeline-icon {\n      top: 0; }\n.timeline .timeline-card:last-child .timeline-icon {\n      top: 0; }\n.timeline .timeline-card:first-child {\n    margin-top: 0; }\n.timeline .timeline-content {\n    position: relative;\n    margin-left: 30px; }\n.timeline .timeline-content::after {\n      display: block;\n      clear: both;\n      content: \"\"; }\n.timeline .timeline-content > .card {\n      float: left;\n      display: inline-block;\n      margin: 0; }\n.timeline .timeline-content .timeline-date {\n    display: inline-block;\n    padding: 4px 0 10px; }\n@media (min-width: 992px) {\n      .timeline .timeline-content .timeline-date {\n        position: absolute;\n        top: 7px;\n        width: 100%;\n        left: 112%; } }\n@media (max-width: 991.98px) {\n      .timeline .timeline-content .timeline-date {\n        position: relative;\n        top: 0;\n        width: 100%;\n        left: auto; } }\n.timeline .timeline-content > .card::before {\n    position: absolute;\n    top: 11px;\n    width: 0;\n    height: 0;\n    content: ' ';\n    pointer-events: none;\n    border-width: 10px;\n    border-style: solid;\n    right: 100%;\n    border-color: transparent white transparent transparent; }\n.timeline .timeline-content > .card::after {\n    position: absolute;\n    top: 12px;\n    width: 0;\n    height: 0;\n    content: ' ';\n    pointer-events: none;\n    border-width: 9px;\n    border-style: solid;\n    right: 100%;\n    border-color: transparent white transparent transparent; }\n@media (min-width: 992px) {\n    .timeline:not(.stacked)::before {\n      left: 50%;\n      margin-left: -2px; }\n    .timeline:not(.stacked) .timeline-card:nth-child(odd) .timeline-content {\n      float: right; }\n    .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content {\n      float: left; }\n    .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .card {\n      float: right; }\n    .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .card::before {\n      position: absolute;\n      right: auto;\n      left: 100%;\n      border-color: transparent transparent transparent white; }\n    .timeline:not(.stacked) .timeline-card:nth-child(even) .timeline-content > .card::after {\n      position: absolute;\n      right: auto;\n      left: 100%;\n      border-color: transparent transparent transparent white; }\n    .timeline:not(.stacked) .timeline-card:nth-child(odd) .timeline-content .timeline-date {\n      right: 112%;\n      left: auto;\n      text-align: right; }\n    .timeline:not(.stacked) .timeline-card:first-child {\n      margin-top: 0; }\n    .timeline:not(.stacked) .timeline-card.timeline-button {\n      text-align: center; }\n    .timeline:not(.stacked) .timeline-icon {\n      left: 50%;\n      margin-left: -6px; }\n    .timeline:not(.stacked) .timeline-content {\n      width: 47%;\n      margin-left: 0; } }\n@media (min-width: 992px) {\n    .timeline.stacked .timeline-content > .card {\n      margin-bottom: 0; }\n    .timeline.stacked .timeline-date {\n      position: relative;\n      top: 0;\n      width: 100%;\n      left: auto; } }\n"

/***/ }),

/***/ "./src/app/pages/timeline/timeline.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/timeline/timeline.component.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.stacked = false;
    }
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/pages/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/pages/timeline/timeline.component.scss")]
        })
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map