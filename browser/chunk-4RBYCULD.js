import{b,c as x,e as w}from"./chunk-HIBTCPNO.js";import{a as y}from"./chunk-Q2UC3VMY.js";import"./chunk-DRDPVNCI.js";import{Eb as S,Ga as c,Ja as g,Ka as h,Oa as n,Pa as o,Qa as a,Ua as v,V as u,Va as s,X as m,ab as p,qa as f,wa as d}from"./chunk-3XT2KXII.js";var M=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-stepper"]],standalone:!0,features:[p],decls:9,vars:0,consts:[[1,"position-relative","mb-5"],[1,"progress",2,"height","2px"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","100%"],["id","step1","routerLink","/","type","button",1,"position-absolute","top-0","start-0","translate-middle","btn","btn-sm","btn-secondary","rounded-pill",2,"width","5rem","height","3rem","font-weight","bold"],["id","step2","routerLink","/config","type","button",1,"position-absolute","top-0","start-50","translate-middle","btn","btn-sm","btn-secondary","rounded-pill",2,"width","5rem","height","3rem","font-weight","bold"],["id","step3","routerLink","/summary","type","button",1,"position-absolute","top-0","start-100","translate-middle","btn","btn-sm","btn-secondary","rounded-pill",2,"width","5rem","height","3rem","font-weight","bold"]],template:function(i,l){i&1&&(n(0,"div",0)(1,"div",1),a(2,"div",2),o(),n(3,"button",3),s(4,"Step 1"),o(),n(5,"button",4),s(6,"Step 2"),o(),n(7,"button",5),s(8,"Step 3"),o()())},dependencies:[w,x]});let t=e;return t})();function D(t,e){if(t&1&&a(0,"img",3),t&2){let E=v();c("src",E.image,f)}}function F(t,e){t&1&&s(0," Select a Tesla Model and Color ")}var T=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-image-viewer"]],inputs:{image:"image"},standalone:!0,features:[p],decls:4,vars:1,consts:[[2,"max-width","100% !important"],[1,"card","shadow","p-3","mb-5","bg-white","rounded",2,"max-width","100% !important","margin","auto","border","none","height","570px !important"],["class","","style","max-width: 100%; max-height: 100%; object-fit: cover;","alt","tesla_image",3,"src"],["alt","tesla_image",1,"",2,"max-width","100%","max-height","100%","object-fit","cover",3,"src"]],template:function(i,l){i&1&&(n(0,"div",0)(1,"div",1),g(2,D,1,1,"img",2)(3,F,1,0),o()()),i&2&&(d(2),h(2,l.image?2:3))}});let t=e;return t})();var U=(()=>{let e=class e{constructor(){this.teslaService=u(y),this.teslaState=u(S)}ngOnInit(){this.teslaState.selectedModelState$.subscribe(r=>this.image=r.color?.image)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["app-home"]],standalone:!0,features:[p],decls:5,vars:1,consts:[[1,"container","mt-5"],[2,"height","310px"],[3,"image"]],template:function(i,l){i&1&&(n(0,"div",0),a(1,"app-stepper"),n(2,"div",1),a(3,"router-outlet"),o(),a(4,"app-image-viewer",2),o()),i&2&&(d(4),c("image",l.image))},dependencies:[b,M,T]});let t=e;return t})();export{U as HomeComponent};
