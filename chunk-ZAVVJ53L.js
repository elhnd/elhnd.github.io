import{a as O,b as V,c as D,d as G,e as d,f as H,g as R,h as I,i as Y,j as A,k as $,l as j,m as B}from"./chunk-UGRKWFNB.js";import{a as M}from"./chunk-GSE7IEJU.js";import{a as E}from"./chunk-QZQVTIST.js";import{Ba as k,Ia as g,K as S,La as u,Ma as s,Na as _,Oa as b,Pa as y,Qa as o,Ra as i,Sa as C,V as m,Va as F,Wa as w,X as v,Xa as c,Ya as x,_a as T,cb as N,xa as r}from"./chunk-PRUGMS2J.js";function U(e,t){if(e&1&&(o(0,"option",9),c(1),i()),e&2){let l=t.$implicit;g("ngValue",l),r(1),x(l.description)}}function q(e,t){if(e&1&&c(0),e&2){let l=w();T("Range: ",l.selectedConfig.range," - Max Speed: ",l.selectedConfig.speed," - Cost: ",l.selectedConfig.price,"")}}function z(e,t){e&1&&(o(0,"div",10)(1,"label",11),c(2," Tow hitch ? "),C(3,"input",12),i()())}function J(e,t){e&1&&(o(0,"div",13)(1,"label",14),c(2," Yoke steering wheel ? "),C(3,"input",15),i()())}var te=(()=>{let t=class t{constructor(){this.carService=m(M),this.carStateService=m(E),this.destroyRef=m(k),this.configForm=new G({config:new d(""),towHitch:new d({value:!1,disabled:!0}),yoke:new d({value:!1,disabled:!0})})}ngOnInit(){this.getOption()}getOption(){this.carStateService.selectedModelState$.pipe(S(n=>this.carService.getOption(n.code))).pipe(B(this.destroyRef)).subscribe(n=>{this.configs=n.configs,n.towHitch&&this.configForm.get("towHitch")?.enable(),n.yoke&&this.configForm.get("yoke")?.enable(),this.configForm.patchValue(n)})}updateSelectedConfig(){this.selectedConfig=this.configForm.value.config,this.carStateService.updateConfigState(this.configForm.value)}};t.\u0275fac=function(f){return new(f||t)},t.\u0275cmp=v({type:t,selectors:[["app-car-config"]],standalone:!0,features:[N],decls:16,vars:4,consts:[[1,"row"],[3,"formGroup","change"],[1,"col-4","mb-2"],["for","configSelect",1,"fs-5"],["formControlName","config","id","configSelect","aria-label","Configuration Select",1,"form-select","fs-5"],["selected",""],[1,"col-12","fs-5"],["class","col-12 mb-2 form-check"],["class","col-12 form-check"],[3,"ngValue"],[1,"col-12","mb-2","form-check"],["for","includeTow",1,"form-check-label","fs-5"],["formControlName","towHitch","type","checkbox","id","includeTow",1,"form-check-input"],[1,"col-12","form-check"],["for","includeYoke",1,"form-check-label","fs-5"],["formControlName","yoke","type","checkbox","id","includeYoke",1,"form-check-input"]],template:function(f,a){if(f&1&&(o(0,"h2"),c(1,"Step 2: Select your Tesla config and options"),i(),o(2,"div",0)(3,"form",1),F("change",function(){return a.updateSelectedConfig()}),o(4,"div",2)(5,"label",3),c(6,"Config:"),i(),o(7,"select",4)(8,"option",5),c(9,"Select a config"),i(),b(10,U,2,2,"option",9,_),i()(),o(12,"div",6),u(13,q,1,3),i(),u(14,z,4,0,"div",7)(15,J,4,0,"div",8),i()()),f&2){let p,h;r(3),g("formGroup",a.configForm),r(7),y(a.configs),r(3),s(13,a.selectedConfig?13:-1),r(1),s(14,(p=a.configForm.get("towHitch"))!=null&&p.enabled?14:-1),r(1),s(15,(h=a.configForm.get("yoke"))!=null&&h.enabled?15:-1)}},dependencies:[j,H,A,$,O,Y,V,D,R,I]});let e=t;return e})();export{te as CarConfigComponent};