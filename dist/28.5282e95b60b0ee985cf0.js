(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{mmXq:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},o=u("pMnS"),i=u("ZYCi"),a=u("Ip0R"),r=u("gIcY"),s=u("IYxj"),d=function(){function l(l,n,u,e){this.fb=l,this.registerService=n,this.route=u,this.router=e,this.listbutton=!1,this.triageform=this.fb.group({weight:[null,r.Validators.compose([r.Validators.required])],temperature:[null,r.Validators.compose([r.Validators.required])],bp_diastolic:[null,r.Validators.compose([r.Validators.required])],bp_systolic:[null,r.Validators.compose([r.Validators.required])],symptoms:[null],allergies:[null],urgency:[null]})}return l.prototype.ngOnInit=function(){this.patient_id=this.router.snapshot.paramMap.get("id"),null===this.patient_id&&this.route.navigate(["/triage"])},l.prototype.ngOnDestroy=function(){this.patient_id=null},l.prototype.registerTriage=function(){var l=this;this.registerService.registerTriage(this.triageform.value,this.patient_id).subscribe(function(n){console.log(n),l.triageform.reset(),l.success="Successful registered and sent patient to triage",l.listbutton=!0},function(n){console.log(n),l.failed=n.weight?n.weight:"Failed to add triage form"})},l}(),c=e["\u0275crt"]({encapsulation:0,styles:[[".symptoms-form[_ngcontent-%COMP%]{margin-left:2.5%}.prority-form[_ngcontent-%COMP%]{margin-right:4.5%}.form-width[_ngcontent-%COMP%]{width:90%}.allergy-form-width[_ngcontent-%COMP%]{width:103%}.strike-line[_ngcontent-%COMP%]{font-size:20px;color:#f9deeb}@media only screen and (max-width:600px){.form-width[_ngcontent-%COMP%]{width:100%}.form-space[_ngcontent-%COMP%]{margin-top:2px}br[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px){.label-size[_ngcontent-%COMP%]{width:100%}.symptoms-form[_ngcontent-%COMP%]{margin-right:2.5%}.form-width[_ngcontent-%COMP%]{width:120%}.strike-line[_ngcontent-%COMP%]{font-size:20px;color:#f9deeb}}"]],data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Weight is required."]))],null,null)}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Temperatir is required."]))],null,null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Blood pressure systolic cannot be empty."]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Blood pressure diastolic cannot be empty."]))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.failed)})}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.component.success)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Send to Cashier"]))],null,function(l,n){l(n,0,0,!n.component.triageform.valid)})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,i.r,[i.o,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,1),(l()(),e["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Go back to triage list"]))],function(l,n){l(n,1,0,l(n,2,0,"/triage"))},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,126,"div",[["class","shorten-cards"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,123,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,3).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,3).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.registerTriage()&&t),t},null,null)),e["\u0275did"](2,16384,null,0,r["\u0275angular_packages_forms_forms_bg"],[],null,null),e["\u0275did"](3,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),e["\u0275did"](5,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(l()(),e["\u0275eld"](6,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Welcome "])),(l()(),e["\u0275eld"](9,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Dennis Sigei,"])),(l()(),e["\u0275eld"](11,0,null,null,67,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MEASURE OF PATIENT'S VITALS"])),(l()(),e["\u0275eld"](14,0,null,null,64,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,63,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,51,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"label",[["class","col-sm-5 symptoms-form col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Weight"])),(l()(),e["\u0275eld"](20,0,null,null,6,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,5,"input",[["class","form-control form-background-color"],["formControlName","weight"],["id","staticEmail"],["placeholder","80 Kgs"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,22)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,22).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,22)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,22)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](22,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),e["\u0275did"](24,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](26,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](28,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"label",[["class","col-sm-5 symptoms-form col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Temperature"])),(l()(),e["\u0275eld"](33,0,null,null,6,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,5,"input",[["class","form-control form-background-color"],["formControlName","temperature"],["id","staticEmail"],["placeholder","30"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,35)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,35).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,35)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,35)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](35,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),e["\u0275did"](37,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](39,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](41,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,1,"label",[["class","col-sm-5  symptoms-form col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Blood Pressure"])),(l()(),e["\u0275eld"](46,0,null,null,21,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,6,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,5,"input",[["class","form-control form-background-color"],["formControlName","bp_diastolic"],["id","staticEmail"],["placeholder","120"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,50)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,50).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](50,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),e["\u0275did"](52,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](54,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275eld"](55,0,null,null,1,"span",[["class","strike-line"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["/"])),(l()(),e["\u0275eld"](57,0,null,null,6,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,5,"input",[["class","form-control form-background-color"],["formControlName","bp_systolic"],["id","staticEmail"],["placeholder","80"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,59)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,59).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,59)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,59)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](59,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),e["\u0275did"](61,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](63,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](65,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](67,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](68,0,null,null,10,"div",[["class","col-md-6 form-space"]],null,null,null,null,null)),(l()(),e["\u0275eld"](69,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"label",[["class","col-sm-3 col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Allergies"])),(l()(),e["\u0275eld"](72,0,null,null,6,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,5,"textarea",[["class","form-control form-background-color allergy-form-width"],["cols","30"],["formControlName","allergies"],["id",""],["name",""],["rows","8"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["\u0275nov"](l,74)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,74).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,74)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,74)._compositionEnd(u.target.value)&&t),t},null,null)),e["\u0275did"](74,16384,null,0,r.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.DefaultValueAccessor]),e["\u0275did"](76,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](78,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275eld"](79,0,null,null,10,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["SYMPTOMS SUMMARY"])),(l()(),e["\u0275eld"](82,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](83,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](84,0,null,null,3,"label",[["class","col-sm-2 symptoms-form col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Symptoms "])),(l()(),e["\u0275eld"](86,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Summary"])),(l()(),e["\u0275eld"](88,0,null,null,1,"div",[["class","col-sm-8 form-space"]],null,null,null,null,null)),(l()(),e["\u0275eld"](89,0,null,null,0,"textarea",[["class","form-control form-background-color form-width"],["cols","30"],["formContolName","symptoms"],["id",""],["name",""],["rows","8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](90,0,null,null,32,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](91,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["PRIORITY"])),(l()(),e["\u0275eld"](93,0,null,null,24,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](94,0,null,null,23,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](95,0,null,null,3,"label",[["class","col-sm-2 symptoms-form col-form-label"],["for","staticEmail"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Patient "])),(l()(),e["\u0275eld"](97,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Urgency"])),(l()(),e["\u0275eld"](99,0,null,null,18,"div",[["class","col-sm-8 form-space"]],null,null,null,null,null)),(l()(),e["\u0275eld"](100,0,null,null,17,"select",[["class","form-control form-background-color form-width"],["formControlName","urgency"],["id",""],["name",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e["\u0275nov"](l,101).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,101).onTouched()&&t),t},null,null)),e["\u0275did"](101,16384,null,0,r.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(l){return[l]},[r.SelectControlValueAccessor]),e["\u0275did"](103,671744,null,0,r.FormControlName,[[3,r.ControlContainer],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR],[2,r["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,r.NgControl,null,[r.FormControlName]),e["\u0275did"](105,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(l()(),e["\u0275eld"](106,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](107,147456,null,0,r.NgSelectOption,[e.ElementRef,e.Renderer2,[2,r.SelectControlValueAccessor]],null,null),e["\u0275did"](108,147456,null,0,r["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](-1,null,["-----"])),(l()(),e["\u0275eld"](110,0,null,null,3,"option",[["value","false"]],null,null,null,null,null)),e["\u0275did"](111,147456,null,0,r.NgSelectOption,[e.ElementRef,e.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](112,147456,null,0,r["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Normal"])),(l()(),e["\u0275eld"](114,0,null,null,3,"option",[["value","true"]],null,null,null,null,null)),e["\u0275did"](115,147456,null,0,r.NgSelectOption,[e.ElementRef,e.Renderer2,[2,r.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](116,147456,null,0,r["\u0275angular_packages_forms_forms_r"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["High"])),(l()(),e["\u0275eld"](118,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](120,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](122,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](124,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](126,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,u.triageform),l(n,24,0,"weight"),l(n,28,0,(null==u.triageform.controls.weight.errors?null:u.triageform.controls.weight.errors.required)&&u.triageform.controls.weight.touched),l(n,37,0,"temperature"),l(n,41,0,(null==u.triageform.controls.temperature.errors?null:u.triageform.controls.temperature.errors.required)&&u.triageform.controls.temperature.touched),l(n,52,0,"bp_diastolic"),l(n,61,0,"bp_systolic"),l(n,65,0,(null==u.triageform.controls.bp_systolic.errors?null:u.triageform.controls.bp_systolic.errors.required)&&u.triageform.controls.bp_systolic.touched),l(n,67,0,(null==u.triageform.controls.bp_diastolic.errors?null:u.triageform.controls.bp_diastolic.errors.required)&&u.triageform.controls.bp_diastolic.touched),l(n,76,0,"allergies"),l(n,103,0,"urgency"),l(n,111,0,"false"),l(n,112,0,"false"),l(n,115,0,"true"),l(n,116,0,"true"),l(n,120,0,u.failed&&!u.success),l(n,122,0,u.success&&!u.failed),l(n,124,0,!u.listbutton),l(n,126,0,u.listbutton)},function(l,n){l(n,1,0,e["\u0275nov"](n,5).ngClassUntouched,e["\u0275nov"](n,5).ngClassTouched,e["\u0275nov"](n,5).ngClassPristine,e["\u0275nov"](n,5).ngClassDirty,e["\u0275nov"](n,5).ngClassValid,e["\u0275nov"](n,5).ngClassInvalid,e["\u0275nov"](n,5).ngClassPending),l(n,21,0,e["\u0275nov"](n,26).ngClassUntouched,e["\u0275nov"](n,26).ngClassTouched,e["\u0275nov"](n,26).ngClassPristine,e["\u0275nov"](n,26).ngClassDirty,e["\u0275nov"](n,26).ngClassValid,e["\u0275nov"](n,26).ngClassInvalid,e["\u0275nov"](n,26).ngClassPending),l(n,34,0,e["\u0275nov"](n,39).ngClassUntouched,e["\u0275nov"](n,39).ngClassTouched,e["\u0275nov"](n,39).ngClassPristine,e["\u0275nov"](n,39).ngClassDirty,e["\u0275nov"](n,39).ngClassValid,e["\u0275nov"](n,39).ngClassInvalid,e["\u0275nov"](n,39).ngClassPending),l(n,49,0,e["\u0275nov"](n,54).ngClassUntouched,e["\u0275nov"](n,54).ngClassTouched,e["\u0275nov"](n,54).ngClassPristine,e["\u0275nov"](n,54).ngClassDirty,e["\u0275nov"](n,54).ngClassValid,e["\u0275nov"](n,54).ngClassInvalid,e["\u0275nov"](n,54).ngClassPending),l(n,58,0,e["\u0275nov"](n,63).ngClassUntouched,e["\u0275nov"](n,63).ngClassTouched,e["\u0275nov"](n,63).ngClassPristine,e["\u0275nov"](n,63).ngClassDirty,e["\u0275nov"](n,63).ngClassValid,e["\u0275nov"](n,63).ngClassInvalid,e["\u0275nov"](n,63).ngClassPending),l(n,73,0,e["\u0275nov"](n,78).ngClassUntouched,e["\u0275nov"](n,78).ngClassTouched,e["\u0275nov"](n,78).ngClassPristine,e["\u0275nov"](n,78).ngClassDirty,e["\u0275nov"](n,78).ngClassValid,e["\u0275nov"](n,78).ngClassInvalid,e["\u0275nov"](n,78).ngClassPending),l(n,100,0,e["\u0275nov"](n,105).ngClassUntouched,e["\u0275nov"](n,105).ngClassTouched,e["\u0275nov"](n,105).ngClassPristine,e["\u0275nov"](n,105).ngClassDirty,e["\u0275nov"](n,105).ngClassValid,e["\u0275nov"](n,105).ngClassInvalid,e["\u0275nov"](n,105).ngClassPending)})}var O=e["\u0275ccf"]("app-triage",d,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-triage",[],null,null,null,b,c)),e["\u0275did"](1,245760,null,0,d,[r.FormBuilder,s.a,i.o,i.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),P=function(){function l(l,n){this.providerService=l,this.route=n}return l.prototype.ngOnInit=function(){this.getTriageList()},l.prototype.getTriageList=function(){var l=this;this.providerService.getTriagePatients().subscribe(function(n){var u=n;u.results.map(function(l){return l}),l.allPatientsTriage=u.results,console.log(l.allPatientsTriage,"showing triage patients")},function(l){console.log(l)})},l.prototype.goToTriage=function(l){this.route.navigate(["/triage/see-patient",{id:l.id}])},l}(),M=e["\u0275crt"]({encapsulation:0,styles:[[".top-padding-80[_ngcontent-%COMP%]{padding-top:80px}.top-padding-20[_ngcontent-%COMP%]{padding-top:20px}.table-scroll[_ngcontent-%COMP%]{overflow:auto;height:70%}.table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n+1) > th[_ngcontent-%COMP%]{background-color:#f9deeb}th[_ngcontent-%COMP%]{color:#d44874}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-button{background-color:#d44874}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#d44874}[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece:start{background-color:#d44874}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:vertical{background-color:#f9deeb}[_ngcontent-%COMP%]::-webkit-scrollbar-corner{background-color:#d44874}.patients-in-queue[_ngcontent-%COMP%]{margin-left:35%;margin-top:-35%}.patients-seen[_ngcontent-%COMP%]{margin-left:-35%;margin-top:-30%}.logged_in_for[_ngcontent-%COMP%]{margin-top:20%}.average_time_patient[_ngcontent-%COMP%]{margin-top:-87%;margin-left:60%;width:100%}.average_time_patient_text[_ngcontent-%COMP%]{margin-top:-32%;margin-left:85%;width:100%}.second-image-align[_ngcontent-%COMP%]{margin-top:20%;margin-left:-100%}.third-image-align[_ngcontent-%COMP%]{margin-top:-140%;margin-left:80%}.center-image-align[_ngcontent-%COMP%]{margin-top:-10%}.waiting-image[_ngcontent-%COMP%]{width:80%}@media only screen and (max-width:600px){.patients-in-queue[_ngcontent-%COMP%]{margin-left:35%;margin-top:-45%}.average_time_patient[_ngcontent-%COMP%], .average_time_patient_text[_ngcontent-%COMP%], .logged_in_for[_ngcontent-%COMP%], .patients-seen[_ngcontent-%COMP%]{display:none}.second-image-align[_ngcontent-%COMP%]{margin-top:20%;margin-left:-100%}.second-image-small[_ngcontent-%COMP%]{display:none}.first-image-small[_ngcontent-%COMP%]{margin-top:-60%}.fourth-image-small[_ngcontent-%COMP%]{margin-top:-40%}.third-image-small[_ngcontent-%COMP%]{display:none}.center-image-align[_ngcontent-%COMP%]{margin-top:-10%}.waiting-image[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px){.patients-in-queue[_ngcontent-%COMP%]{margin-left:50%;margin-top:-45%}.patients-seen[_ngcontent-%COMP%]{margin-left:-15%;margin-top:-40%}.average_time_patient[_ngcontent-%COMP%]{margin-top:-95%;margin-left:70%;width:100%}.average_time_patient_text[_ngcontent-%COMP%]{margin-top:-58%;margin-left:110%;width:100%}}@media only screen and (min-width:1200px){.patients-in-queue[_ngcontent-%COMP%]{margin-left:35%;margin-top:-35%}.patients-seen[_ngcontent-%COMP%]{margin-left:-35%;margin-top:-30%}.logged_in_for[_ngcontent-%COMP%]{margin-top:20%}.average_time_patient[_ngcontent-%COMP%]{margin-top:-87%;margin-left:60%;width:100%}.average_time_patient_text[_ngcontent-%COMP%]{margin-top:-32%;margin-left:85%;width:100%}.second-image-align[_ngcontent-%COMP%]{margin-top:20%;margin-left:-100%}.third-image-align[_ngcontent-%COMP%]{margin-top:-140%;margin-left:80%}.center-image-align[_ngcontent-%COMP%]{margin-top:-10%}.waiting-image[_ngcontent-%COMP%]{width:80%}}"]],data:{}});function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" NEXT> "]))],null,null)}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"th",[],null,null,null,null,null))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,12,"tr",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToTriage(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](2,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](4,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](5,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[" ",". "])),(l()(),e["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,[" "," "])),(l()(),e["\u0275eld"](9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](10,null,[" "," "])),(l()(),e["\u0275eld"](11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" "," "]))],function(l,n){l(n,2,0,0==n.context.index),l(n,4,0,n.context.index>0)},function(l,n){l(n,6,0,n.context.$implicit.patient_details.id),l(n,8,0,n.context.$implicit.patient_details.national_id),l(n,10,0,n.context.$implicit.patient_details.name),l(n,12,0,n.context.$implicit.patient_details.gender)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,67,"div",[["class","contain"],["style","width:90% !important"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h6",[["style","font-weight:600; color:#cf005d"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Welcome, Dennis Sigei "])),(l()(),e["\u0275eld"](5,0,null,null,62,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,61,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,60,"div",[["class","row top-padding-80"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,16,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,15,"div",[["class","table-responsive table-scroll"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,14,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" # "])),(l()(),e["\u0275eld"](16,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" PATIENT ID "])),(l()(),e["\u0275eld"](18,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" FULL NAME "])),(l()(),e["\u0275eld"](20,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" GENDER "])),(l()(),e["\u0275eld"](22,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](24,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](25,0,null,null,42,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,8,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,0,"img",[["alt",""],["class","img-links first-image-small"],["src","assets/images/labs/Patients in Waiting.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,5,"p",[["class","center-text patients-in-queue"]],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["15"])),(l()(),e["\u0275ted"](-1,null,[" PATIENTS "])),(l()(),e["\u0275eld"](34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["IN WAITING"])),(l()(),e["\u0275eld"](36,0,null,null,8,"div",[["class","col-md-6"],["style","margin-top:5%"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,0,"img",[["alt",""],["class","img-links second-image-align second-image-small"],["src","assets/images/labs/Patients seen.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,5,"p",[["class","patients-seen"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["20 "])),(l()(),e["\u0275eld"](41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" PATIENTS "])),(l()(),e["\u0275eld"](43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" SEEN"])),(l()(),e["\u0275eld"](45,0,null,null,22,"div",[["class","center-image-align"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,7,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,1,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,0,"img",[["alt",""],["class","img-links waiting-image"],["src","assets/images/labs/Waiting.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,4,"div",[["class","text-center logged_in_for"]],null,null,null,null,null)),(l()(),e["\u0275eld"](50,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["LOGGED IN FOR:"])),(l()(),e["\u0275eld"](53,0,null,null,0,"img",[["alt",""],["class","img-links fourth-image-small"],["src","assets/images/labs/Logged in for 1 hr.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,13,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,12,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,0,"img",[["alt",""],["class","img-links third-image-small  third-image-align"],["src","assets/images/labs/Average Time per Patient.png"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,4,"p",[["class","average_time_patient"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,1,"b",[["style","font-size:40px"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["5"])),(l()(),e["\u0275eld"](60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MINS"])),(l()(),e["\u0275eld"](62,0,null,null,5,"p",[["class","average_time_patient_text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["AVERAGE "])),(l()(),e["\u0275eld"](64,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["TIME PER"])),(l()(),e["\u0275eld"](66,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" PATIENT"]))],function(l,n){l(n,24,0,n.component.allPatientsTriage)},null)}var w=e["\u0275ccf"]("app-patients",P,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-patients",[],null,null,null,R,M)),e["\u0275did"](1,114688,null,0,P,[s.a,i.o],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),S=u("4GxJ");u.d(n,"TriageModuleNgFactory",function(){return I});var I=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,O,w]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_i"],r["\u0275angular_packages_forms_forms_i"],[]),e["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,S.d,S.d,[]),e["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bb"],r["\u0275angular_packages_forms_forms_bb"],[]),e["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),e["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,i.s,i.s,[[2,i.y],[2,i.o]]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,i.m,function(){return[[{path:"",children:[{path:"see-patient",component:d,data:{heading:"TRIAGE FORM"}},{path:"**",component:P,data:{heading:"Patients in Queue"}}]}]]},[])])})}}]);