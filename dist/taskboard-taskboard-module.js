(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./src/app/taskboard/taskboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"taskboard page-height\">\n  <div class=\"taskboard-wrapper\" *ngFor=\"let board of taskboard\">\n    <div class=\"taskboard-list\">\n      <div class=\"taskboard-header text-uppercase\">\n        <strong>{{board.title}}</strong>\n      </div>\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\n        <div class=\"taskboard-task\" *ngFor=\"let task of board.tasks\" [ngClass]=\"task.class\">\n          <div class=\"taskboard-task-title\">{{task.title}}</div>\n          <small class=\"card-text text-muted\">{{task.description}}</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* $colors\n ------------------------------------------*/\n.taskboard {\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  height: calc(100vh - 3.5rem);\n  padding: 1rem; }\n.taskboard .taskboard-wrapper {\n    width: 280px;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    box-sizing: border-box;\n    display: inline-block;\n    vertical-align: top;\n    height: 100%; }\n.taskboard .taskboard-wrapper:first-child {\n      padding-left: 0; }\n.taskboard .taskboard-wrapper:last-child {\n      padding-right: 0; }\n.taskboard .taskboard-list {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    white-space: normal;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.07);\n    background-clip: border-box;\n    border-radius: 0.25rem; }\n.taskboard .taskboard-header {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-transform: uppercase;\n    letter-spacing: 0.02rem;\n    font-size: 13px;\n    padding: 0.5rem 0.5rem 0; }\n.taskboard .taskboard-task {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-clip: border-box;\n    border-radius: 0.25rem;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem; }\n.taskboard .taskboard-task:last-child {\n      margin-bottom: 0; }\n.taskboard .taskboard-task:hover {\n      cursor: -webkit-grab;\n      cursor: grab; }\n.taskboard .taskboard-task:after {\n    content: \"\";\n    position: absolute;\n    border: 4px solid transparent;\n    top: 0;\n    border-top-width: 12px;\n    border-bottom-color: transparent;\n    right: 6px; }\n.taskboard .taskboard-task.task-status-success:after {\n    border-top-color: #66bb6a;\n    border-right-color: #66bb6a;\n    border-left-color: #66bb6a; }\n.taskboard .taskboard-task.task-status-info:after {\n    border-top-color: #29b6f6;\n    border-right-color: #29b6f6;\n    border-left-color: #29b6f6; }\n.taskboard .taskboard-task.task-status-warning:after {\n    border-top-color: #ffee58;\n    border-right-color: #ffee58;\n    border-left-color: #ffee58; }\n.taskboard .taskboard-task.task-status-danger:after {\n    border-top-color: #ef5350;\n    border-right-color: #ef5350;\n    border-left-color: #ef5350; }\n.taskboard .taskboard-cards {\n    padding: 0.5rem;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: auto; }\n.taskboard .taskboard-task-title {\n    margin-bottom: 0.5rem; }\n:host {\n  padding: 0 !important;\n  height: 100%; }\n.gu-mirror {\n  background-color: white;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent() {
        this.taskboard = [
            {
                title: 'backlog',
                tasks: [
                    {
                        title: 'Responsive bug',
                        description: 'Etiam porta sem malesuada magna mollis euismod.'
                    },
                    {
                        title: 'Travel checklist',
                        description: 'Curabitur blandit tempus porttitor.'
                    },
                    {
                        title: 'Budget review',
                        description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
                        class: 'task-status-success'
                    }
                ]
            },
            {
                title: 'todo',
                tasks: [
                    {
                        title: 'QA Testing',
                        description: 'Etiam porta sem malesuada magna mollis euismod.'
                    },
                    {
                        title: 'Layout design',
                        description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                        class: 'task-status-danger'
                    },
                    {
                        title: 'Fix navigation menu',
                        description: 'Donec sed odio dui.',
                        class: 'task-status-info'
                    },
                    {
                        title: 'Update bootstrap 4',
                        description: 'Aenean lacinia bibendum nulla sed consectetur.'
                    },
                    {
                        title: 'Run build tools',
                        description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                    },
                    {
                        title: 'List article ideas',
                        description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
                        class: 'task-status-success'
                    },
                    {
                        title: 'Reactjs fixes',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    },
                    {
                        title: 'Implement SSL',
                        description: 'Etiam porta sem malesuada magna mollis euismod.',
                        class: 'task-status-warning'
                    },
                    {
                        title: 'Cleanup code',
                        description: 'Sollicitudin',
                        class: 'task-status-danger'
                    }
                ]
            },
            {
                title: 'In Process',
                tasks: [
                    {
                        title: 'QOS Assessment',
                        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
                    },
                    {
                        title: 'Schedule new tasks',
                        description: 'Sed posuere consectetur est at lobortis.',
                        class: 'task-status-warning'
                    },
                    {
                        title: 'Add dashboard variants',
                        description: 'Nulla vitae elit libero, a pharetra augue.'
                    },
                    {
                        title: 'Extended color scheme support',
                        description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
                    },
                    {
                        title: 'Merge unit tests',
                        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
                        class: 'task-status-info'
                    },
                    {
                        title: 'Test final version',
                        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                    }
                ]
            },
            {
                title: 'backlog',
                tasks: [
                    {
                        title: 'Integrate Angular 4',
                        description: 'Nulla vitae elit libero, a pharetra augue.'
                    },
                    {
                        title: 'Additional fields',
                        description: 'Donec id elit non mi porta gravida at eget metus.'
                    },
                    {
                        title: 'Draggable task board',
                        description: 'Sed posuere consectetur est at lobortis.',
                        class: 'task-status-danger'
                    },
                    {
                        title: 'Setup CI server',
                        description: 'Maecenas faucibus mollis interdum.'
                    },
                    {
                        title: 'Assign new tasks',
                        description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
                        class: 'task-status-success'
                    },
                    {
                        title: 'Contact administrator',
                        description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
                    },
                    {
                        title: 'Commit changes',
                        description: 'Aenean lacinia bibendum nulla sed consectetur.'
                    }
                ]
            },
            {
                title: 'Complete',
                tasks: [
                    {
                        title: 'Store new files',
                        description: 'Sed posuere consectetur est at lobortis.'
                    },
                    {
                        title: 'Build landing page',
                        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
                    },
                    {
                        title: 'Setup basic layout',
                        description: 'Vestibulum id ligula porta felis euismod semper.',
                        class: 'task-status-info'
                    },
                    {
                        title: 'Graphical fixes',
                        description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
                    },
                    {
                        title: 'Email alerts',
                        description: 'Donec sed odio dui.'
                    }
                ]
            }
        ];
    }
    TaskboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__(/*! ./taskboard.component.html */ "./src/app/taskboard/taskboard.component.html"),
            styles: [__webpack_require__(/*! ./taskboard.component.scss */ "./src/app/taskboard/taskboard.component.scss")]
        })
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
/* harmony import */ var _taskboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard.routing */ "./src/app/taskboard/taskboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_taskboard_routing__WEBPACK_IMPORTED_MODULE_5__["TaskboardRoutes"]),
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"].forRoot()
            ],
            declarations: [_taskboard_component__WEBPACK_IMPORTED_MODULE_4__["TaskboardComponent"]]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.routing.ts ***!
  \************************************************/
/*! exports provided: TaskboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutes", function() { return TaskboardRoutes; });
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");

var TaskboardRoutes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_0__["TaskboardComponent"],
        data: {
            heading: 'Taskboard',
            removeFooter: true
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module.js.map