import{l as I,m as P}from"./chunk-QUL6E34M.js";import{k as h,p as C}from"./chunk-ENHFV74K.js";import{$a as a,Ca as x,Ma as v,Na as y,Ra as e,Sa as t,V as u,X as S,Za as f,_a as i,ab as g,fb as E,gb as l,hb as d,ya as r}from"./chunk-772RCOAV.js";function b(o,m){if(o&1&&(e(0,"tr")(1,"td",2)(2,"strong"),i(3,"Tow Hitch Package"),t()(),e(4,"td",3),i(5),l(6,"currency"),t()()),o&2){let s=f();r(5),a(d(6,1,s.summary.towHitchPrice,"USD"))}}function D(o,m){if(o&1&&(e(0,"tr")(1,"td",2)(2,"strong"),i(3,"Yoke Package"),t()(),e(4,"td",3),i(5),l(6,"currency"),t()()),o&2){let s=f();r(5),a(d(6,1,s.summary.yokPrice,"USD"))}}var w=(()=>{let m=class m{constructor(){this.carState=u(C),this.destroyRef=u(x)}ngOnInit(){this.carState.updateSummary().pipe(P(this.destroyRef)).subscribe(p=>this.summary=p)}};m.\u0275fac=function(c){return new(c||m)},m.\u0275cmp=S({type:m,selectors:[["app-summary"]],standalone:!0,features:[E],decls:43,vars:19,consts:[[1,"col-lg-12","col-sm-5"],[1,"table","table-clear","table-custom"],[1,"left"],[1,"right"]],template:function(c,n){c&1&&(e(0,"h2"),i(1,"Step 3: Summary"),t(),e(2,"div",0)(3,"h4"),i(4),t(),e(5,"table",1)(6,"tbody")(7,"tr")(8,"td",2)(9,"strong"),i(10),t()(),e(11,"td",3),i(12),l(13,"currency"),t()(),e(14,"tr")(15,"td",2)(16,"strong"),i(17,"Range"),t()(),e(18,"td",3),i(19),t()(),e(20,"tr")(21,"td",2)(22,"strong"),i(23,"Max Speed"),t()(),e(24,"td",3),i(25),t()(),e(26,"tr")(27,"td",2)(28,"strong"),i(29),t()(),e(30,"td",3),i(31),l(32,"currency"),t()(),v(33,b,7,4,"tr")(34,D,7,4,"tr"),e(35,"tr")(36,"td",2)(37,"strong"),i(38,"TOTAL COST"),t()(),e(39,"td",3)(40,"strong"),i(41),l(42,"currency"),t()()()()()()),c&2&&(r(4),g("Your Tesla ",n.summary.model.description,""),r(6),a(n.summary.config.config==null?null:n.summary.config.config.description),r(2),a(d(13,10,n.summary.config.config==null?null:n.summary.config.config.price,"USD")),r(7),g("",n.summary.config.config==null?null:n.summary.config.config.range," miles"),r(6),a(n.summary.config.config==null?null:n.summary.config.config.speed),r(4),a(n.summary.model.color==null?null:n.summary.model.color.description),r(2),a(d(32,13,n.summary.model.color==null?null:n.summary.model.color.price,"USD")),r(2),y(33,n.summary.towHitchPrice?33:-1),r(1),y(34,n.summary.yokPrice?34:-1),r(7),a(d(42,16,n.summary.total,"USD")))},dependencies:[I,h],styles:['@charset "UTF-8";.table-custom[_ngcontent-%COMP%]{border-top:2px solid #000}.table-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:13px;padding:5px}']});let o=m;return o})();export{w as SummaryComponent};
