(this["webpackJsonp@resultadosdigitais/playground-main"]=this["webpackJsonp@resultadosdigitais/playground-main"]||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),o=n.n(r),c=n(1),l=n.n(c),i=n(31),s=n(3),u=n(4);n(6);const p=l.a.div.withConfig({displayName:"ButtonGroup__Root",componentId:"sc-1iginm8-0"})(["display:inline-flex;.button-group__child:not(:first-child){margin-left:var(--size-spacing-03);}"]),m=Object(r.forwardRef)((e,t)=>{let{children:n}=e,a=Object(u.a)(e,["children"]);const r=o.a.Children.toArray(n).map((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return o.a.cloneElement(e,Object(s.a)({},e.props,n,{key:e.key||t}))});return o.a.createElement(p,Object(s.a)({ref:t,role:"group"},a),r)});m.displayName="ButtonGroup";var d=m,b=n(30),f=n(7);function _templateObject2(){const e=Object(a.a)(["\n  margin: 20px 0;\n"]);return _templateObject2=function(){return e},e}function _templateObject(){const e=Object(a.a)(["\n  color: var(--color-white);\n"]);return _templateObject=function(){return e},e}const g=l()(i.a)(_templateObject()),_=l.a.div(_templateObject2());t.default=()=>{const[e,t]=o.a.useState(0);return o.a.useEffect(()=>{let e;for(let n=0;n<2e3;n++)e=setTimeout(()=>t(e=>e+1),1);return()=>{clearInterval(e)}},[]),o.a.createElement(f.Profiler,{id:"count",delay:1500,onLog:e=>console.log(e)},o.a.createElement(_,null,o.a.createElement(g,{token:i.a.tokens.TEXT_SM_BOLD},"Count: ",e),o.a.createElement(d,null,o.a.createElement(b.a,{onClick:()=>t(e=>e+1)},"+"),o.a.createElement(b.a,{onClick:()=>t(e=>e-1)},"-"))))}}}]);
//# sourceMappingURL=count.63ff3580.chunk.js.map