(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Gc5z:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){},r=u("pMnS"),t=u("gIcY"),s=u("Ip0R"),a=u("ZYCi"),i=function(){function l(l,n){this.fb=l,this.router=n,this.USERS=[{name:"Dennis Sigei",role:"SA",username:"dsigei@gmail.com",password:"#dsigei"},{name:"Norman Munge",role:"R",username:"normanmunge@gmail.com",password:"#munge"},{name:"FluxAfya Administrator",role:"SA",username:"admin",password:"admin123"},{name:"Hospital Administrator",role:"A",username:"hospital",password:"admin123"},{name:"Jane Doe",role:"P",username:"patient",password:"admin123"},{name:"Finance Administrator",role:"F",username:"finance",password:"admin123"},{name:"Triage Administrator",role:"T",username:"triage",password:"admin123"},{name:"Lab Administrator",role:"L",username:"lab",password:"admin123"},{name:"Reception Administrator",role:"R",username:"reception",password:"admin123"},{name:"Reception - Finance Administrator",role:"RF",username:"recfinance",password:"admin123"},{name:"Pharmacy Administrator",role:"PH",username:"pharmacy",password:"admin123"},{name:"Doctor Account",role:"D",username:"doctor",password:"admin123"}]}return l.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,t.Validators.compose([t.Validators.required])],password:[null,t.Validators.compose([t.Validators.required])]})},l.prototype.onSubmit=function(){var l=this.form.value.uname,n=this.form.value.password;console.log(this.USERS,"email:",l,"password:",n);for(var u=0;u<this.USERS.length;u++){if(l==this.USERS[u].username&&n==this.USERS[u].password)return console.log("great"),this.success="Successfully logged in ... ",localStorage.setItem("userProfile",JSON.stringify(this.USERS[u])),void this.router.navigate(["/dashboard"]);console.log("wrong"),this.error="Wrong email-password combination",this.router.navigate(["/account/signin"])}this.router.navigate(["/"])},l}(),d=e["\u0275crt"]({encapsulation:0,styles:[["input.form-control[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem}.btn[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem;min-width:120px}"]],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Username is required."]))],null,null)}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password is required."]))],null,null)}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","text-center alert alert-danger rounded-alerts"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.error)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","text-center alert alert-success rounded-alerts"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.success)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,61,"div",[["class","d-flex justify-content-center align-items-center min-height-80 h-100"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,59,"div",[["class","auth-container"],["style","margin-top: -50px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,58,"div",[["class","card card-body m-3 p-5"],["style","box-shadow: none;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt",""],["class","logo"],["src","./assets/images/landing/hc-logo.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,56,"form",[["novalidate",""],["style","margin-top:10%"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,6).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,6).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.onSubmit()&&o),o},null,null)),e["\u0275did"](5,16384,null,0,t["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](6,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),e["\u0275did"](8,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(l()(),e["\u0275eld"](9,0,null,null,12,"fieldset",[["class","form-group mb-4"]],null,null,null,null,null)),e["\u0275did"](10,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](11,{"has-danger":0}),(l()(),e["\u0275eld"](12,0,null,null,7,"input",[["class","form-control"],["placeholder","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,15)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,15).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,15)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,15)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](13,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](14,{"form-control-danger":0}),e["\u0275did"](15,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](17,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](19,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](21,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](22,0,null,null,12,"fieldset",[["class","form-group mb-4"]],null,null,null,null,null)),e["\u0275did"](23,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](24,{"has-danger":0}),(l()(),e["\u0275eld"](25,0,null,null,7,"input",[["class","form-control"],["placeholder","********"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,28)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,28).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,28)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,28)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](26,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](27,{"form-control-danger":0}),e["\u0275did"](28,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](30,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](32,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](34,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](36,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](38,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](39,0,null,null,11,"div",[["class","d-flex w-100 align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,5,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,4,"label",[["class","custom-control custom-checkbox mb-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,0,"input",[["class","custom-control-input"],["type","checkbox"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,0,"span",[["class","custom-control-label"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,1,"span",[["class","custom-control-description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Stay logged in"])),(l()(),e["\u0275eld"](46,0,null,null,4,"div",[["class","col text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,48).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e["\u0275did"](48,671744,null,0,a.r,[a.o,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](49,1),(l()(),e["\u0275ted"](-1,null,["Recover password"])),(l()(),e["\u0275eld"](51,0,null,null,2,"div",[["class","d-flex justify-content-center mt-4 mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["login"])),(l()(),e["\u0275eld"](54,0,null,null,6,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Don't have an account? "])),(l()(),e["\u0275eld"](57,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,58).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e["\u0275did"](58,671744,null,0,a.r,[a.o,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](59,1),(l()(),e["\u0275ted"](-1,null,["Request for Account"])),(l()(),e["\u0275eld"](61,0,null,null,0,"div",[["class","bg-cover"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,15,"nav",[["class","navbar custom-navbar small px-3"],["style","background-color:white;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,7,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,6,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,5,"a",[["class","nav-link text-color"],["style","color:#cf005d"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xa9"])),(l()(),e["\u0275eld"](68,0,null,null,2,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["FluxAfya2019 \xa0 "])),(l()(),e["\u0275eld"](70,0,null,null,0,"img",[["alt",""],["class","logo"],["src","./assets/images/landing/kenyan-small.png"],["style","width: 20%; padding-top: 0px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,6,"ul",[["class","navbar-nav hidden-xs-down"]],null,null,null,null,null)),(l()(),e["\u0275eld"](72,0,null,null,1,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" About Us\xa0 "])),(l()(),e["\u0275eld"](74,0,null,null,1,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Partners\xa0 "])),(l()(),e["\u0275eld"](76,0,null,null,1,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Contact Us\xa0 "]))],function(l,n){var u=n.component;l(n,6,0,u.form),l(n,10,0,"form-group mb-4",l(n,11,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched)),l(n,13,0,"form-control",l(n,14,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched)),l(n,17,0,u.form.controls.uname),l(n,21,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched),l(n,23,0,"form-group mb-4",l(n,24,0,u.form.controls.password.hasError("required")&&u.form.controls.password.touched)),l(n,26,0,"form-control",l(n,27,0,u.form.controls.password.hasError("required")&&u.form.controls.password.touched)),l(n,30,0,u.form.controls.password),l(n,34,0,u.form.controls.password.hasError("required")&&u.form.controls.password.touched),l(n,36,0,u.error&&!u.success),l(n,38,0,u.success&&!u.success),l(n,48,0,l(n,49,0,"/account/forgot")),l(n,58,0,l(n,59,0,"/account/signup"))},function(l,n){l(n,4,0,e["\u0275nov"](n,8).ngClassUntouched,e["\u0275nov"](n,8).ngClassTouched,e["\u0275nov"](n,8).ngClassPristine,e["\u0275nov"](n,8).ngClassDirty,e["\u0275nov"](n,8).ngClassValid,e["\u0275nov"](n,8).ngClassInvalid,e["\u0275nov"](n,8).ngClassPending),l(n,12,0,e["\u0275nov"](n,19).ngClassUntouched,e["\u0275nov"](n,19).ngClassTouched,e["\u0275nov"](n,19).ngClassPristine,e["\u0275nov"](n,19).ngClassDirty,e["\u0275nov"](n,19).ngClassValid,e["\u0275nov"](n,19).ngClassInvalid,e["\u0275nov"](n,19).ngClassPending),l(n,25,0,e["\u0275nov"](n,32).ngClassUntouched,e["\u0275nov"](n,32).ngClassTouched,e["\u0275nov"](n,32).ngClassPristine,e["\u0275nov"](n,32).ngClassDirty,e["\u0275nov"](n,32).ngClassValid,e["\u0275nov"](n,32).ngClassInvalid,e["\u0275nov"](n,32).ngClassPending),l(n,47,0,e["\u0275nov"](n,48).target,e["\u0275nov"](n,48).href),l(n,57,0,e["\u0275nov"](n,58).target,e["\u0275nov"](n,58).href)})}var v=e["\u0275ccf"]("app-signin",i,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-signin",[],null,null,null,p,d)),e["\u0275did"](1,114688,null,0,i,[t.FormBuilder,a.o],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=u("JdLL"),h=new t.FormControl("",t.Validators.required),b=new t.FormControl("",C.CustomValidators.equalTo(h)),_=function(){function l(l,n){this.fb=l,this.router=n}return l.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,t.Validators.compose([t.Validators.required])],password:h,confirmPassword:b})},l.prototype.onSubmit=function(){this.router.navigate(["/"])},l}(),y=e["\u0275crt"]({encapsulation:0,styles:[["input.form-control[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem}.btn[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem;min-width:120px}"]],data:{}});function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Healthcare name is required."]))],null,null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Contact Email Address"]))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,60,"div",[["class","d-flex justify-content-center align-items-center min-height-100 h-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,58,"div",[["class","auth-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,57,"div",[["class","card card-body m-3 p-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h3",[["class","fw-100 text-success mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Request Account Creation"])),(l()(),e["\u0275eld"](5,0,null,null,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,7).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.onSubmit()&&o),o},null,null)),e["\u0275did"](6,16384,null,0,t["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](7,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),e["\u0275did"](9,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(l()(),e["\u0275eld"](10,0,null,null,10,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,7,"input",[["class","form-control"],["placeholder","Name of healthcare centre"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,14)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,14).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](12,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](13,{"is-invalid":0}),e["\u0275did"](14,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](16,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](18,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](20,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](21,0,null,null,17,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,16,"select",[["class","form-control"],["id","sel1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](24,147456,null,0,t.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](25,147456,null,0,t["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["Choose healthcare location"])),(l()(),e["\u0275eld"](27,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](28,147456,null,0,t.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](29,147456,null,0,t["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["Nairobi"])),(l()(),e["\u0275eld"](31,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](32,147456,null,0,t.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](33,147456,null,0,t["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["Mombasa"])),(l()(),e["\u0275eld"](35,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](36,147456,null,0,t.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](37,147456,null,0,t["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["Kisumu"])),(l()(),e["\u0275eld"](39,0,null,null,10,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,7,"input",[["class","form-control"],["placeholder","Contact Email Address"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,43)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,43).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,43)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,43)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](41,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](42,{"is-invalid":0}),e["\u0275did"](43,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](45,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](47,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](49,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](50,0,null,null,2,"div",[["class","d-flex justify-content-center mt-4 mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Request Account Creation"])),(l()(),e["\u0275eld"](53,0,null,null,6,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Already have an account? "])),(l()(),e["\u0275eld"](56,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,57).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e["\u0275did"](57,671744,null,0,a.r,[a.o,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](58,1),(l()(),e["\u0275ted"](-1,null,["Access Account"])),(l()(),e["\u0275eld"](60,0,null,null,0,"div",[["class","bg-cover"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,7,0,u.form),l(n,12,0,"form-control",l(n,13,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched)),l(n,16,0,u.form.controls.uname),l(n,20,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched),l(n,41,0,"form-control",l(n,42,0,u.form.controls.confirmPassword.hasError("required")&&u.form.controls.confirmPassword.touched)),l(n,45,0,u.form.controls.confirmPassword),l(n,49,0,u.form.controls.confirmPassword.hasError("required")&&u.form.controls.confirmPassword.touched),l(n,57,0,l(n,58,0,"/account/signin"))},function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,11,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,40,0,e["\u0275nov"](n,47).ngClassUntouched,e["\u0275nov"](n,47).ngClassTouched,e["\u0275nov"](n,47).ngClassPristine,e["\u0275nov"](n,47).ngClassDirty,e["\u0275nov"](n,47).ngClassValid,e["\u0275nov"](n,47).ngClassInvalid,e["\u0275nov"](n,47).ngClassPending),l(n,51,0,!u.form.valid),l(n,56,0,e["\u0275nov"](n,57).target,e["\u0275nov"](n,57).href)})}var k=e["\u0275ccf"]("app-signup",_,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-signup",[],null,null,null,E,y)),e["\u0275did"](1,114688,null,0,_,[t.FormBuilder,a.o],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=function(){function l(l,n){this.fb=l,this.router=n}return l.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,t.Validators.compose([t.Validators.required])]})},l.prototype.onSubmit=function(){this.router.navigate(["/"])},l}(),I=e["\u0275crt"]({encapsulation:0,styles:[["input.form-control[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem}.btn[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem;min-width:120px}"]],data:{}});function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Username is required."]))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,31,"div",[["class","d-flex justify-content-center align-items-center min-height-100 h-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,29,"div",[["class","auth-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,28,"div",[["class","card card-body m-3 p-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h3",[["class","fw-100 text-success mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Recover your password"])),(l()(),e["\u0275eld"](5,0,null,null,25,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,7).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.onSubmit()&&o),o},null,null)),e["\u0275did"](6,16384,null,0,t["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](7,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),e["\u0275did"](9,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(l()(),e["\u0275eld"](10,0,null,null,10,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,7,"input",[["class","form-control"],["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,14)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,14).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](12,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](13,{"is-invalid":0}),e["\u0275did"](14,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](16,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](18,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](20,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](21,0,null,null,2,"div",[["class","d-flex justify-content-center mt-4 mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reset password"])),(l()(),e["\u0275eld"](24,0,null,null,6,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Don't have an account? "])),(l()(),e["\u0275eld"](27,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,28).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e["\u0275did"](28,671744,null,0,a.r,[a.o,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](29,1),(l()(),e["\u0275ted"](-1,null,["Create Account"])),(l()(),e["\u0275eld"](31,0,null,null,0,"div",[["class","bg-cover"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,7,0,u.form),l(n,12,0,"form-control",l(n,13,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched)),l(n,16,0,u.form.controls.uname),l(n,20,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched),l(n,28,0,l(n,29,0,"/account/signup"))},function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,11,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,22,0,!u.form.valid),l(n,27,0,e["\u0275nov"](n,28).target,e["\u0275nov"](n,28).href)})}var A=e["\u0275ccf"]("app-forgot",D,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-forgot",[],null,null,null,w,I)),e["\u0275did"](1,114688,null,0,D,[t.FormBuilder,a.o],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),V=function(){function l(l,n){this.fb=l,this.router=n}return l.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,t.Validators.compose([t.Validators.required])]})},l.prototype.onSubmit=function(){this.router.navigate(["/"])},l}(),F=e["\u0275crt"]({encapsulation:0,styles:[["input.form-control[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem}.btn[_ngcontent-%COMP%]{border-radius:90px;padding:1rem 1.5rem;min-width:120px}"]],data:{}});function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Username is required."]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,31,"div",[["class","d-flex justify-content-center align-items-center min-height-100 h-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,29,"div",[["class","auth-container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,28,"div",[["class","card card-body m-3 p-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h3",[["class","fw-100 text-success mb-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Please enter your lock code"])),(l()(),e["\u0275eld"](5,0,null,null,25,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e["\u0275nov"](l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,7).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.onSubmit()&&o),o},null,null)),e["\u0275did"](6,16384,null,0,t["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](7,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),e["\u0275did"](9,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(l()(),e["\u0275eld"](10,0,null,null,10,"fieldset",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,7,"input",[["class","form-control"],["placeholder","Enter passcode and press enter"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,14)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,14).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,14)._compositionEnd(u.target.value)&&o),o},null,null)),e["\u0275did"](12,278528,null,0,s.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](13,{"is-invalid":0}),e["\u0275did"](14,16384,null,0,t.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,t.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,t.NG_VALUE_ACCESSOR,function(l){return[l]},[t.DefaultValueAccessor]),e["\u0275did"](16,540672,null,0,t.FormControlDirective,[[8,null],[8,null],[6,t.NG_VALUE_ACCESSOR],[2,t["\u0275angular_packages_forms_forms_j"]]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,t.NgControl,null,[t.FormControlDirective]),e["\u0275did"](18,16384,null,0,t.NgControlStatus,[[4,t.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](20,16384,null,0,s.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](21,0,null,null,2,"div",[["class","d-flex justify-content-center mt-4 mb-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unlock account"])),(l()(),e["\u0275eld"](24,0,null,null,6,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Don't have an account? "])),(l()(),e["\u0275eld"](27,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e["\u0275nov"](l,28).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),e["\u0275did"](28,671744,null,0,a.r,[a.o,a.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](29,1),(l()(),e["\u0275ted"](-1,null,["Create one now!"])),(l()(),e["\u0275eld"](31,0,null,null,0,"div",[["class","bg-cover"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,7,0,u.form),l(n,12,0,"form-control",l(n,13,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched)),l(n,16,0,u.form.controls.uname),l(n,20,0,u.form.controls.uname.hasError("required")&&u.form.controls.uname.touched),l(n,28,0,l(n,29,0,"/account/signup"))},function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,11,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,22,0,!u.form.valid),l(n,27,0,e["\u0275nov"](n,28).target,e["\u0275nov"](n,28).href)})}var x=e["\u0275ccf"]("app-lockscreen",V,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-lockscreen",[],null,null,null,P,F)),e["\u0275did"](1,114688,null,0,V,[t.FormBuilder,a.o],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);u.d(n,"AccountModuleNgFactory",function(){return U});var U=e["\u0275cmf"](o,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,v,k,A,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[e.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,t["\u0275angular_packages_forms_forms_i"],t["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),e["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),e["\u0275mpd"](1073742336,a.s,a.s,[[2,a.y],[2,a.o]]),e["\u0275mpd"](1073742336,t["\u0275angular_packages_forms_forms_bb"],t["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,t.FormsModule,t.FormsModule,[]),e["\u0275mpd"](1073742336,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,a.m,function(){return[[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"",children:[{path:"signin",component:i},{path:"signup",component:_},{path:"forgot",component:D},{path:"lockscreen",component:V}]}]]},[])])})}}]);