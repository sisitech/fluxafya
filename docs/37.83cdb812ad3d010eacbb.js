(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2wCO":function(e,n){e.exports=":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%; }\n\n:host img {\n  height: 140px; }\n"},IMGs:function(e,n){e.exports=":host .icon {\n  width: 180px;\n  height: 180px;\n  position: relative;\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%; }\n\n:host img {\n  height: 140px; }\n"},Lvv7:function(e,n){e.exports='<div class="d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0">\n  <div class="d-flex align-self-center align-items-center p-5">\n    <div class="icon d-flex justify-content-center align-items-center">\n      <img src="assets/images/server.svg" alt="">\n    </div>\n    <div class="ml-5">\n      <div class="error-number fw-100 text-danger">Internal server failure :(</div>\n      <h6 class="fw-300 mb-1 mt-1">Error 500</h6>\n      <small class="fw-300 d-block mb-1">Sorry something went wrong with our servers.</small>\n      <a class="btn btn-primary" [routerLink]="[\'/\']">Report this error!</a>\n    </div>\n  </div>\n</div>\n'},"PQ9+":function(e,n,t){"use strict";t.r(n);var r=t("CcnG"),o=t("ZYCi"),i=t("Ip0R"),c=function(e,n,t,r){var o,i=arguments.length,c=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(n,t,c):o(n,t))||c);return i>3&&c&&Object.defineProperty(n,t,c),c},s=function(){function e(){}return e=c([Object(r.Component)({selector:"app-error4",template:t("gYR2"),styles:[t("IMGs")]})],e)}(),l=function(e,n,t,r){var o,i=arguments.length,c=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(n,t,c):o(n,t))||c);return i>3&&c&&Object.defineProperty(n,t,c),c},a=function(){function e(){}return e=l([Object(r.Component)({selector:"app-error5",template:t("Lvv7"),styles:[t("2wCO")]})],e)}(),d=[{path:"",children:[{path:"404",component:s},{path:"500",component:a}]}];t.d(n,"ErrorModule",function(){return p});var f=function(e,n,t,r){var o,i=arguments.length,c=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(i<3?o(c):i>3?o(n,t,c):o(n,t))||c);return i>3&&c&&Object.defineProperty(n,t,c),c},p=function(){function e(){}return e=f([Object(r.NgModule)({imports:[i.CommonModule,o.g.forChild(d)],declarations:[s,a]})],e)}()},gYR2:function(e,n){e.exports='<div class="d-flex justify-content-center align-items-center min-height-100 card card-block rounded-0 no-shadow mb-0">\n  <div class="d-flex align-self-center align-items-center p-5">\n    <div class="icon d-flex justify-content-center align-items-center">\n      <img src="assets/images/server.svg" alt="">\n    </div>\n    <div class="ml-5">\n      <div class="error-number fw-100 text-warning">Page not found :(</div>\n      <h6 class="fw-300 mb-1 mt-1">Error 404</h6>\n      <small class="fw-300 d-block mb-1">Sorry, but the page you were trying to view does not exist.</small>\n      <a class="btn btn-primary" [routerLink]="[\'/\']">Take me home</a>\n    </div>\n  </div>\n</div>\n'}}]);