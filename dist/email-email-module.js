(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-email-module"],{

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar custom-navbar px-0\">\n  <div class=\"nav navbar-nav\">\n    <div class=\"nav-item mx-3 d-lg-none\">\n      <a (click)=\"mailnav.toggle()\" class=\"nav-link\" href=\"javascript:;\">\n        <i class=\"icon ion-navicon\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Archive\">\n        <i class=\"icon ion-ios-albums\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Send to trash\">\n        <i class=\"icon ion-ios-trash\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Recover message\">\n        <i class=\"icon ion-ios-medkit\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Reply\">\n        <i class=\"icon ion-reply\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link text-muted\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Reply all\">\n        <i class=\"icon ion-reply-all\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Forward\">\n        <i class=\"icon ion-forward\"></i>\n      </a>\n    </div>\n\n    <div class=\"nav-item mr-3\">\n      <a href=\"javascript:;\" class=\"nav-link\" container=\"body\" placement=\"bottom\" ngbTooltip=\"Flag\">\n        <i class=\"icon ion-ios-flag\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<mat-sidenav-container class=\"page-height app-inner card card-block p-0 m-0 rounded-0 shadow-none\">\n  <mat-sidenav #mailnav [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"email-panel pl-xs pr-xs\">\n    <div class=\"messages-container\">\n      <div (click)=\"onSelect(message)\" *ngFor=\"let message of messages; let i = index; let first = first;\"\n        [class.selected]=\"message === selectedMessage\" [ngClass]=\"{'border-top-0': first}\" class=\"list-group-item list-group-item-action border-left-0 border-right-0 rounded-0 flex-column align-items-start\">\n        <a class=\"d-flex b-b w-100\" href=\"javascript:;\">\n          <div class=\"mr-auto\">\n            <div class=\"widget-icon rounded-circle bg-{{message.type ? message.type : 'black'}} text-white\">{{\n              getInitials(message.from) }}</div>\n          </div>\n          <div class=\"pl-3\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\n              <small class=\"bold ff-headers\">\n                {{message.from}}\n              </small>\n              <small class=\"bold text-muted time\">\n                {{ message.date | date: 'MMMM d, y' }}\n              </small>\n            </div>\n            <p class=\"mb-0\">\n              {{message.subject}}\n            </p>\n          </div>\n        </a>\n      </div>\n      <div></div>\n    </div>\n  </mat-sidenav>\n\n  <div *ngIf=\"selectedMessage\">\n    <div class=\"d-flex mb-3\">\n      <div class=\"mr-3\">\n        <div class=\"widget-icon rounded-circle bg-{{selectedMessage.type ? selectedMessage.type : 'black'}} text-white\">{{\n          getInitials(selectedMessage.from) }}</div>\n      </div>\n      <div class=\"pl-0\">\n        <div class=\"date\">\n          {{selectedMessage.date | date: 'fullDate'}}\n        </div>\n        <h4 class=\"lead mt-0\">\n          {{selectedMessage.subject}}\n        </h4>\n        <small class=\"d-block mb-4\">\n          <b>\n            {{selectedMessage.from}}\n          </b>\n          to Jeff &amp; Suzzane\n        </small>\n\n        <div [innerHtml]=\"selectedMessage.body\"></div>\n      </div>\n    </div>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/email/email.component.scss":
/*!********************************************!*\
  !*** ./src/app/email/email.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n:host ::ng-deep {\n  height: 100%; }\n:host ::ng-deep ng-sidebar-container {\n    height: 100%; }\n:host ::ng-deep .email-panel {\n    width: 300px;\n    border-right: 1px solid rgba(0, 0, 0, 0.06); }\n:host ::ng-deep .messages-container {\n    overflow-y: auto;\n    overflow-x: hidden;\n    order: 2;\n    flex: 1 1 auto; }\n:host ::ng-deep .mat-drawer-content {\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-clip: border-box;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.07);\n    padding: 1rem; }\n:host ::ng-deep .list-group-item {\n    border-radius: 0 !important;\n    background-color: transparent;\n    border: 1px solid rgba(0, 0, 0, 0.02); }\n:host ::ng-deep .list-group-item.selected {\n      background-color: rgba(255, 238, 88, 0.1); }\n:host ::ng-deep .list-group-item.selected:hover, :host ::ng-deep .list-group-item.selected:focus, :host ::ng-deep .list-group-item.selected:active {\n        background-color: rgba(255, 238, 88, 0.1); }\n:host ::ng-deep .list-group-item a .time {\n      font-size: 10px; }\n:host {\n  padding: 0 !important; }\n:host .custom-navbar {\n    min-height: 2rem;\n    background-color: #fff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06); }\n:host .custom-navbar .nav-link {\n      color: rgba(0, 0, 0, 0.3); }\n:host .page-height {\n    height: calc(100vh - 6.25rem); }\n:host .messages-container .widget-icon {\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 12px;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.service */ "./src/app/email/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SMALL_WIDTH_BREAKPOINT = 991;
var EmailComponent = /** @class */ (function () {
    function EmailComponent(mailService, zone) {
        var _this = this;
        this.mailService = mailService;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.messageOpen = false;
        this.isOpened = true;
        this._autoCollapseWidth = 991;
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () {
                _this.mediaMatcher = mql;
            });
        });
    }
    EmailComponent.prototype.ngOnInit = function () {
        if (this.isOver()) {
            this.isOpened = false;
        }
        this.getMessages();
    };
    EmailComponent.prototype.toogleSidebar = function () {
        this.isOpened = !this.isOpened;
    };
    EmailComponent.prototype.isOver = function () {
        return this.mediaMatcher.matches;
    };
    EmailComponent.prototype.getInitials = function (name) {
        return name.match(/\b(\w)/g).join('');
    };
    EmailComponent.prototype.getMessages = function () {
        var _this = this;
        this.mailService.getMessages().then(function (messages) {
            _this.messages = messages;
            _this.selectedMessage = _this.messages[0];
        });
    };
    EmailComponent.prototype.onSelect = function (message) {
        this.selectedMessage = message;
        if (this.isOver()) {
            this.isOpened = false;
        }
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.scss */ "./src/app/email/email.component.scss")],
            providers: [_email_service__WEBPACK_IMPORTED_MODULE_1__["MailService"]]
        }),
        __metadata("design:paramtypes", [_email_service__WEBPACK_IMPORTED_MODULE_1__["MailService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/email/email.module.ts":
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/*! exports provided: EmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _email_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.routing */ "./src/app/email/email.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EmailModule = /** @class */ (function () {
    function EmailModule() {
    }
    EmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_email_routing__WEBPACK_IMPORTED_MODULE_6__["EmailRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
            ],
            declarations: [_email_component__WEBPACK_IMPORTED_MODULE_5__["EmailComponent"]]
        })
    ], EmailModule);
    return EmailModule;
}());



/***/ }),

/***/ "./src/app/email/email.routing.ts":
/*!****************************************!*\
  !*** ./src/app/email/email.routing.ts ***!
  \****************************************/
/*! exports provided: EmailRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRoutes", function() { return EmailRoutes; });
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ "./src/app/email/email.component.ts");

var EmailRoutes = [
    {
        path: '',
        component: _email_component__WEBPACK_IMPORTED_MODULE_0__["EmailComponent"],
        data: {
            heading: 'Email',
            removeFooter: true,
            modeDocked: true
        }
    }
];


/***/ }),

/***/ "./src/app/email/email.service.ts":
/*!****************************************!*\
  !*** ./src/app/email/email.service.ts ***!
  \****************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-messages */ "./src/app/email/mock-messages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MailService = /** @class */ (function () {
    function MailService() {
    }
    MailService.prototype.getMessages = function () {
        return Promise.resolve(_mock_messages__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"]);
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/email/mock-messages.ts":
/*!****************************************!*\
  !*** ./src/app/email/mock-messages.ts ***!
  \****************************************/
/*! exports provided: MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
/* tslint:disable:max-line-length */
var MESSAGES = [
    {
        from: 'Social',
        date: 1427207139000,
        subject: 'Check out this weeks most popular website designs in the Milkyway!',
        avatar: 'assets/images/face4.jpg',
        icon: 'group',
        iconClass: 'mat-text-primary',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'danger',
        important: true,
        id: 1
    },
    {
        from: 'Promotions',
        date: 1427412725000,
        subject: 'eBook: The complete guide to creating Angularjs single page applications is here.',
        avatar: 'assets/images/face2.jpg',
        icon: 'local_offer',
        iconClass: 'mat-text-warn',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 2
    },
    {
        from: 'Updates',
        date: 1427546580000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face3.jpg',
        icon: 'info',
        iconClass: 'mat-text-accent',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Clients',
        type: 'info',
        important: false,
        id: 3
    },
    {
        from: 'Melissa Welch',
        date: 1427891640000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face1.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'warning',
        important: true,
        id: 4
    },
    {
        from: 'Vincent Peterson',
        date: 1428275520000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face2.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: false,
        id: 5
    },
    {
        from: 'Pamela Wood',
        date: 1428830580000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face3.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 6
    },
    {
        from: 'Tammy Carpenter',
        date: 1429363920000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face4.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        important: false,
        id: 7
    },
    {
        from: 'Emma Sullican',
        date: 1430274720000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face5.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Clients',
        important: false,
        id: 8
    },
    {
        from: 'Andrea Brewer',
        date: 1431293520000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face2.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'success',
        important: false,
        id: 9
    },
    {
        from: 'Sean Carpenter',
        date: 1433115240000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face1.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: true,
        id: 10
    }
];


/***/ })

}]);
//# sourceMappingURL=email-email-module.js.map