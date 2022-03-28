(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3kiY":function(n,e){n.exports='<div class="d-flex justify-content-center align-items-center min-height-100 h-100">\n    <div class="auth-container">\n        <div class="card card-body m-3 p-5">\n            <h3 class="fw-100 text-success mb-4">Recover your password</h3>\n            <form [formGroup]="form" (ngSubmit)="onSubmit()">\n                <fieldset class="form-group">\n                    <input type="text" class="form-control" placeholder="Username" [formControl]="form.controls[\'uname\']" [ngClass]="{\'is-invalid\': form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched}" />\n                    <div class="invalid-feedback" *ngIf="form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched">Username is required.</div>\n                </fieldset>\n                <div class="d-flex justify-content-center mt-4 mb-4">\n                    <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Reset password</button>\n                </div>\n                <div class="text-center">\n                    <p>Don\'t have an account? <a [routerLink]="[\'/account/signup\']">Create Account</a></p>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class="bg-cover"></div>\n</div>'},"8uPh":function(n,e){n.exports='<div class="d-flex justify-content-center align-items-center min-height-100 h-100">\n    <div class="auth-container">\n        <div class="card card-body m-3 p-5">\n            <h3 class="fw-100 text-success mb-4">Request Account Creation</h3>\n            <form [formGroup]="form" (ngSubmit)="onSubmit()">\n                <fieldset class="form-group">\n                    <input type="text" class="form-control" placeholder="Name of healthcare centre" [formControl]="form.controls[\'uname\']" [ngClass]="{\'is-invalid\': form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched}" />\n                    <div class="invalid-feedback" *ngIf="form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched">Healthcare name is required.</div>\n                </fieldset>\n                <fieldset class="form-group">\n                    \x3c!-- <input type="text" class="form-control" placeholder="Location" [formControl]="form.controls[\'password\']" [ngClass]="{\'is-invalid\': form.controls[\'password\'].hasError(\'required\') && form.controls[\'password\'].touched}" /> --\x3e\n                    \x3c!-- <div class="invalid-feedback" *ngIf="form.controls[\'password\'].hasError(\'required\') && form.controls[\'password\'].touched">Password is required.</div> --\x3e\n\n                    <select class="form-control" id="sel1">\n                      <option>Choose healthcare location</option>\n                      <option>Nairobi</option>\n                      <option>Mombasa</option>\n                      <option>Kisumu</option>\n                    </select>\n                </fieldset>\n                <fieldset class="form-group">\n                    <input type="text" class="form-control" placeholder="Contact Email Address" [formControl]="form.controls[\'confirmPassword\']" [ngClass]="{\'is-invalid\': form.controls[\'confirmPassword\'].hasError(\'required\') && form.controls[\'confirmPassword\'].touched}"\n                    />\n                    <div class="invalid-feedback" *ngIf="form.controls[\'confirmPassword\'].hasError(\'required\') && form.controls[\'confirmPassword\'].touched">Contact Email Address</div>\n                </fieldset>\n                <div class="d-flex justify-content-center mt-4 mb-4">\n                    <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Request Account Creation</button>\n                </div>\n                <div class="text-center">\n                    <p>Already have an account? <a [routerLink]="[\'/account/signin\']">Access Account</a></p>\n                </div>\n\n            </form>\n        </div>\n    </div>\n    <div class="bg-cover"></div>\n</div>'},DtMr:function(n,e){n.exports="input.form-control {\n  border-radius: 90px;\n  padding: 1rem 1.5rem; }\n\n.btn {\n  border-radius: 90px;\n  padding: 1rem 1.5rem;\n  min-width: 120px; }\n"},TNhn:function(n,e){n.exports='<div class="d-flex justify-content-center align-items-center min-height-80 h-100" style="background-color: white;">\n    <div class="auth-container" style="margin-top: -50px;">\n        <div class="card card-body m-3 p-5" style="box-shadow: none;">\n            <img src="assets/landing/images/logo.png" class="logo" alt="">\n            <form [formGroup]="form" (ngSubmit)="onSubmit()" style="margin-top:10%">\n                <fieldset class="form-group mb-4" [ngClass]="{\'has-danger\': form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched}">\n                    <input type="text" class="form-control" placeholder="username" [formControl]="form.controls[\'uname\']" [ngClass]="{\'form-control-danger\': form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched}" />\n                    <div class="invalid-feedback" *ngIf="form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched">Username is required.</div>\n                </fieldset>\n                <fieldset class="form-group mb-4" [ngClass]="{\'has-danger\': form.controls[\'password\'].hasError(\'required\') && form.controls[\'password\'].touched}">\n                    <input type="password" class="form-control" placeholder="********" [formControl]="form.controls[\'password\']" [ngClass]="{\'form-control-danger\': form.controls[\'password\'].hasError(\'required\') && form.controls[\'password\'].touched}" />\n                    <div class="invalid-feedback" *ngIf="form.controls[\'password\'].hasError(\'required\') && form.controls[\'password\'].touched">Password is required.</div>\n                </fieldset>\n\n                <div *ngIf="error && !success" class="text-center alert alert-danger rounded-alerts">{{error}}</div>\n                <div *ngIf="success && !success" class="text-center alert alert-success rounded-alerts">{{success}}</div>\n                <div class="d-flex w-100 align-items-center">\n                    <div class="col">\n                        <label class="custom-control custom-checkbox mb-0">\n                          <input type="checkbox" class="custom-control-input">\n                          <span class="custom-control-label"></span>\n                          <span class="custom-control-description">Stay logged in</span>\n                        </label>\n                    </div>\n                    <div class="col text-right">\n                        <a [routerLink]="[\'/account/forgot\']">Recover password</a>\n                    </div>\n                </div>\n                <div class="d-flex justify-content-center mt-4 mb-4">\n                    <button (click)="onSubmit()" class="btn btn-primary" type="submit">login</button>\n                    \x3c!-- <a [routerLink]="[\'/\']">\n                        <button class="btn btn-primary" type="submit">login</button>\n                    </a> --\x3e\n                </div>\n                <div class="text-center">\n                    <p>Don\'t have an account? <a [routerLink]="[\'/account/signup\']">Request for Account</a></p>\n                </div>\n            </form>\n        </div>\n    </div>\n    \x3c!-- <div class="bg-cover"></div> --\x3e\n\n</div>\n\n<nav class="navbar custom-navbar small px-3" style="background-color:white;">\n    <ul class="navbar-nav mr-auto">\n        <li class="nav-item">\n            <a class="nav-link text-color" style="color:#cf005d">\n                <span>&copy;</span> <span class="">FluxAfya2019 &nbsp; <img src="./assets/images/landing/kenyan-small.png" style = "width: 20%; padding-top: 0px;" class="logo" alt=""></span>\n            </a>\n        </li>\n    </ul>\n    <ul class="navbar-nav hidden-xs-down">\n        <li class="nav-item">\n            About Us&nbsp;\n        </li>\n        <li class="nav-item">\n            Partners&nbsp;\n        </li>\n        <li class="nav-item">\n            Contact Us&nbsp;\n        </li>\n        \x3c!-- <li class="nav-item" style="color: #000">\n            <img src="./assets/images/landing/kenya-small.png" style = "width: 20%; padding-top: 0px;" class="logo" alt="">\n        </li> --\x3e\n    </ul>\n</nav>'},YKtk:function(n,e){n.exports='<div class="d-flex justify-content-center align-items-center min-height-100 h-100">\n  <div class="auth-container">\n    <div class="card card-body m-3 p-5">\n      <h3 class="fw-100 text-success mb-4">Please enter your lock code</h3>\n      <form [formGroup]="form" (ngSubmit)="onSubmit()">\n        <fieldset class="form-group">\n          <input type="text" class="form-control" placeholder="Enter passcode and press enter" [formControl]="form.controls[\'uname\']" [ngClass]="{\'is-invalid\': form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched}"/>\n          <div class="invalid-feedback" *ngIf="form.controls[\'uname\'].hasError(\'required\') && form.controls[\'uname\'].touched">Username is required.</div>\n        </fieldset>\n        <div class="d-flex justify-content-center mt-4 mb-4">\n          <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Unlock account</button>\n        </div>\n        <div class="text-center">\n          <p>Don\'t have an account? <a [routerLink]="[\'/account/signup\']">Create one now!</a></p>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="bg-cover"></div>\n</div>'},jcJX:function(n,e,o){"use strict";o.r(e);var t=o("CcnG"),r=o("ZYCi"),s=o("Ip0R"),a=o("gIcY"),i=o("IYxj"),c=function(n,e,o,t){var r,s=arguments.length,a=s<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},l=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},d=function(){function n(n,e,o){this.fb=n,this.router=e,this.loginService=o,this.USERS=[{name:"Dennis Sigei",role:"FA",username:"dsigei@gmail.com",password:"#dsigei"},{name:"Norman Munge",role:"R",username:"normanmunge@gmail.com",password:"#munge"},{name:"FluxAfya Administrator",role:"SA",username:"admin",password:"admin123"},{name:"Hospital Administrator",role:"A",username:"hospital",password:"admin123"},{name:"Jane Doe",role:"P",username:"patient",password:"admin123"},{name:"Finance Administrator",role:"F",username:"finance",password:"admin123"},{name:"Triage Administrator",role:"T",username:"triage",password:"admin123"},{name:"Lab Administrator",role:"L",username:"lab",password:"admin123"},{name:"Reception Administrator",role:"R",username:"reception",password:"admin123"},{name:"Reception - Finance Administrator",role:"RF",username:"recfinance",password:"admin123"},{name:"Pharmacy Administrator",role:"PH",username:"pharmacy",password:"admin123"},{name:"Doctor Account",role:"D",username:"doctor",password:"admin123"}]}return n.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,a.Validators.compose([a.Validators.required])],password:[null,a.Validators.compose([a.Validators.required])]})},n.prototype.onSubmit=function(){this.router.navigate(["/patients/register"])},n=c([Object(t.Component)({selector:"app-signin",template:o("TNhn"),styles:[o("DtMr")]}),l("design:paramtypes",[a.FormBuilder,r.f,i.a])],n)}(),m=o("JdLL"),u=function(n,e,o,t){var r,s=arguments.length,a=s<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},f=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},p=new a.FormControl("",a.Validators.required),g=new a.FormControl("",m.CustomValidators.equalTo(p)),h=function(){function n(n,e){this.fb=n,this.router=e}return n.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,a.Validators.compose([a.Validators.required])],password:p,confirmPassword:g})},n.prototype.onSubmit=function(){this.router.navigate(["/"])},n=u([Object(t.Component)({selector:"app-signup",template:o("8uPh"),styles:[o("yeVY")]}),f("design:paramtypes",[a.FormBuilder,r.f])],n)}(),b=function(n,e,o,t){var r,s=arguments.length,a=s<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},v=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},y=function(){function n(n,e){this.fb=n,this.router=e}return n.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,a.Validators.compose([a.Validators.required])]})},n.prototype.onSubmit=function(){this.router.navigate(["/"])},n=b([Object(t.Component)({selector:"app-forgot",template:o("3kiY"),styles:[o("kXYi")]}),v("design:paramtypes",[a.FormBuilder,r.f])],n)}(),x=function(n,e,o,t){var r,s=arguments.length,a=s<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},w=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},R=function(){function n(n,e){this.fb=n,this.router=e}return n.prototype.ngOnInit=function(){this.form=this.fb.group({uname:[null,a.Validators.compose([a.Validators.required])]})},n.prototype.onSubmit=function(){this.router.navigate(["/"])},n=x([Object(t.Component)({selector:"app-lockscreen",template:o("YKtk"),styles:[o("mG4f")]}),w("design:paramtypes",[a.FormBuilder,r.f])],n)}(),C=[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"",children:[{path:"signin",component:d},{path:"signup",component:h},{path:"forgot",component:y},{path:"lockscreen",component:R}]}];o.d(e,"AccountModule",function(){return k});var j=function(n,e,o,t){var r,s=arguments.length,a=s<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,e,o,t);else for(var i=n.length-1;i>=0;i--)(r=n[i])&&(a=(s<3?r(a):s>3?r(e,o,a):r(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a},k=function(){function n(){}return n=j([Object(t.NgModule)({imports:[s.CommonModule,r.g.forChild(C),a.FormsModule,a.ReactiveFormsModule],declarations:[d,h,y,R]})],n)}()},kXYi:function(n,e){n.exports="input.form-control {\n  border-radius: 90px;\n  padding: 1rem 1.5rem; }\n\n.btn {\n  border-radius: 90px;\n  padding: 1rem 1.5rem;\n  min-width: 120px; }\n"},mG4f:function(n,e){n.exports="input.form-control {\n  border-radius: 90px;\n  padding: 1rem 1.5rem; }\n\n.btn {\n  border-radius: 90px;\n  padding: 1rem 1.5rem;\n  min-width: 120px; }\n"},yeVY:function(n,e){n.exports="input.form-control {\n  border-radius: 90px;\n  padding: 1rem 1.5rem; }\n\n.btn {\n  border-radius: 90px;\n  padding: 1rem 1.5rem;\n  min-width: 120px; }\n"}}]);