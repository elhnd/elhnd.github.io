import{a as N}from"./chunk-Q2UC3VMY.js";import"./chunk-DRDPVNCI.js";import{a as M,b as E,c as I,d as V,e as s,f as G,g as O,h as D,i as Y,j,k as A,l as H}from"./chunk-RRFNJ7RD.js";import{Eb as _,Ga as p,Ja as S,K as g,Ka as C,La as h,Ma as v,Na as x,Oa as i,Pa as n,Qa as d,Ta as b,Ua as k,Va as r,Wa as w,X as u,Ya as F,ab as T,wa as a,xa as f,zb as y}from"./chunk-3XT2KXII.js";function R(e,t){if(e&1&&(i(0,"option",11),r(1),n()),e&2){let c=t.$implicit;p("ngValue",c),a(1),w(c.description)}}function $(e,t){if(e&1&&r(0),e&2){let c=k();F("Range: ",c.selectedConfig.range," - Max Speed: ",c.selectedConfig.speed," - Cost: ",c.selectedConfig.price,"")}}var U=(()=>{let t=class t{constructor(o,l){this.teslaService=o,this.teslaStateService=l,this.configForm=new V({config:new s(""),towHitch:new s(!1),yoke:new s(!1)})}ngOnInit(){this.teslaStateService.selectedModelState$.pipe(g(o=>this.teslaService.getOption(o.code))).subscribe(o=>{this.configs=o.configs,this.configForm.patchValue(o)})}updateSelectedConfig(){this.selectedConfig=this.configForm.value.config,this.teslaStateService.updateConfigState(this.configForm.value)}};t.\u0275fac=function(l){return new(l||t)(f(N),f(_))},t.\u0275cmp=u({type:t,selectors:[["app-tesla-config"]],standalone:!0,features:[T],decls:20,vars:2,consts:[[1,"row"],[3,"formGroup","change"],[1,"col-4","mb-3"],["for","configSelect",1,"fs-5"],["formControlName","config","id","configSelect","aria-label","Configuration Select",1,"form-select","fs-5"],[1,"col-12","mb-3","fs-5"],[1,"col-12","mb-3","form-check",2,"margin-left","12px"],["for","includeTow",1,"form-check-label","fs-5"],["formControlName","towHitch","type","checkbox","id","includeTow",1,"form-check-input"],["for","includeYoke",1,"form-check-label","fs-5"],["formControlName","yoke","type","checkbox","id","includeYoke",1,"form-check-input"],[3,"ngValue"]],template:function(l,m){l&1&&(i(0,"h2"),r(1,"Step 2: Select your config and options"),n(),i(2,"div",0)(3,"form",1),b("change",function(){return m.updateSelectedConfig()}),i(4,"div",2)(5,"label",3),r(6,"Config:"),n(),i(7,"select",4),v(8,R,2,2,"option",11,h),n()(),i(10,"div",5),S(11,$,1,3),n(),i(12,"div",6)(13,"label",7),r(14," Tow hitch ? "),d(15,"input",8),n()(),i(16,"div",6)(17,"label",9),r(18," Yoke steering wheel ? "),d(19,"input",10),n()()()()),l&2&&(a(3),p("formGroup",m.configForm),a(5),x(m.configs),a(3),C(11,m.selectedConfig?11:-1))},dependencies:[y,H,G,j,A,M,Y,E,I,O,D]});let e=t;return e})();export{U as TeslaConfigComponent};
