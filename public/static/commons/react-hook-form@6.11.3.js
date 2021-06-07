define("react-hook-form@6.11.3",["react@16.12.0"],(function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=98)}({0:function(r,t){r.exports=e},98:function(e,r,t){"use strict";t.r(r);var n=t(0),c=e=>e instanceof HTMLElement;const s="blur",u="change",i="input",a="onBlur",o="onChange",l="onSubmit",f="onTouched",d="all",b="max",y="min",O="maxLength",g="minLength",j="pattern",m="required",h="validate";var v=e=>null==e;const p=e=>"object"==typeof e;var A=e=>!v(e)&&!Array.isArray(e)&&p(e)&&!(e instanceof Date),R=e=>!Array.isArray(e)&&(/^\w*$/.test(e)||!/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(e)),F=e=>e.filter(Boolean),V=e=>F(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function C(e,r,t){let n=-1;const c=R(r)?[r]:V(r),s=c.length,u=s-1;for(;++n<s;){const r=c[n];let s=t;if(n!==u){const t=e[r];s=A(t)||Array.isArray(t)?t:isNaN(+c[n+1])?{}:[]}e[r]=s,e=e[r]}return e}var x=(e,r={})=>{for(const t in e)R(t)?r[t]=e[t]:C(r,t,e[t]);return r},S=e=>void 0===e,k=(e,r,t)=>{const n=F(r.split(/[,[\].]+?/)).reduce((e,r)=>v(e)?e:e[r],e);return S(n)||n===e?S(e[r])?t:e[r]:n},w=(e,r)=>{c(e)&&e.removeEventListener&&(e.removeEventListener(i,r),e.removeEventListener(u,r),e.removeEventListener(s,r))};const D={isValid:!1,value:""};var E=e=>Array.isArray(e)?e.reduce((e,r)=>r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e,D):D,B=e=>"radio"===e.type,M=e=>"file"===e.type,L=e=>"checkbox"===e.type,T=e=>"select-multiple"===e.type;const N={value:!1,isValid:!1},P={value:!0,isValid:!0};var W=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(e=>e&&e.ref.checked).map(({ref:{value:e}})=>e);return{value:r,isValid:!!r.length}}const{checked:r,value:t,attributes:n}=e[0].ref;return r?n&&!S(n.value)?S(t)||""===t?P:{value:t,isValid:!0}:P:N}return N};function $(e,r,t,n){const c=e.current[r];if(c){const{ref:{value:e,disabled:r},ref:t}=c;if(r&&n)return;return M(t)?t.files:B(t)?E(c.options).value:T(t)?(s=t.options,[...s].filter(({selected:e})=>e).map(({value:e})=>e)):L(t)?W(c.options).value:e}var s;if(t)return k(t.current,r)}function I(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&I(e.parentNode)}var _=e=>A(e)&&!Object.keys(e).length,H=e=>"boolean"==typeof e;function U(e,r){const t=R(r)?[r]:V(r),n=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=S(e)?n++:e[r[n++]];return e}(e,t),c=t[t.length-1];let s=void 0;n&&delete n[c];for(let r=0;r<t.slice(0,-1).length;r++){let n=-1,c=void 0;const u=t.slice(0,-(r+1)),i=u.length-1;for(r>0&&(s=e);++n<u.length;){const r=u[n];c=c?c[r]:e[r],i===n&&(A(c)&&_(c)||Array.isArray(c)&&!c.filter(e=>A(e)&&!_(e)||H(e)).length)&&(s?delete s[r]:delete e[r]),s=c}}return e}const q=(e,r)=>e&&e.ref===r;var z=e=>"string"==typeof e,G=e=>v(e)||!p(e);var J=(e,r,t,n,c)=>{const s={};for(const r in e.current)(S(c)||(z(c)?r.startsWith(c):Array.isArray(c)&&c.find(e=>r.startsWith(e))))&&(s[r]=$(e,r,void 0,n));return t?x(s):function e(r,t){if(G(r)||G(t))return t;for(const n in t){const c=r[n],s=t[n];try{r[n]=A(c)&&A(s)||Array.isArray(c)&&Array.isArray(s)?e(c,s):s}catch(e){}}return r}(r,x(s))};function K(e,r,t){if(G(e)||G(r)||e instanceof Date||r instanceof Date)return e===r;const n=Object.keys(e),c=Object.keys(r);if(n.length!==c.length)return!1;for(const c of n)if(!t||!["ref","context"].includes(c)){const n=e[c],s=r[c];if((A(n)||Array.isArray(n))&&(A(s)||Array.isArray(s))?!K(n,s,t):n!==s)return!1}return!0}var Q=e=>e instanceof RegExp,X=e=>A(e)&&!Q(e)?e:{value:e,message:""},Y=e=>"function"==typeof e,Z=e=>z(e)||A(e)&&Object(n.isValidElement)(e);function ee(e,r,t="validate"){if(Z(e)||H(e)&&!e)return{type:t,message:Z(e)?e:"",ref:r}}var re=(e,r,t,n,c)=>{if(r){const r=t[e];return Object.assign(Object.assign({},r),{types:Object.assign(Object.assign({},r&&r.types?r.types:{}),{[n]:c||!0})})}return{}},te=async(e,r,{ref:t,ref:{type:n,value:c},options:s,required:u,maxLength:i,minLength:a,min:o,max:l,pattern:f,validate:d},p)=>{const R=t.name,F={},V=B(t),C=L(t),x=V||C,S=""===c,k=re.bind(null,R,r,F),w=(e,r,n,c=O,s=g)=>{const u=e?r:n;F[R]=Object.assign({type:e?c:s,message:u,ref:t},k(e?c:s,u))};if(u&&(!V&&!C&&(S||v(c))||H(c)&&!c||C&&!W(s).isValid||V&&!E(s).isValid)){const{value:n,message:c}=Z(u)?{value:!!u,message:u}:X(u);if(n&&(F[R]=Object.assign({type:m,message:c,ref:x?((e.current[R].options||[])[0]||{}).ref:t},k(m,c)),!r))return F}if(!v(o)||!v(l)){let e,s;const u=X(l),i=X(o);if("number"===n||!n&&!isNaN(c)){const r=t.valueAsNumber||parseFloat(c);v(u.value)||(e=r>u.value),v(i.value)||(s=r<i.value)}else{const r=t.valueAsDate||new Date(c);z(u.value)&&(e=r>new Date(u.value)),z(i.value)&&(s=r<new Date(i.value))}if((e||s)&&(w(!!e,u.message,i.message,b,y),!r))return F}if(z(c)&&!S&&(i||a)){const e=X(i),t=X(a),n=!v(e.value)&&c.length>e.value,s=!v(t.value)&&c.length<t.value;if((n||s)&&(w(n,e.message,t.message),!r))return F}if(f&&!S){const{value:e,message:n}=X(f);if(Q(e)&&!e.test(c)&&(F[R]=Object.assign({type:j,message:n,ref:t},k(j,n)),!r))return F}if(d){const n=$(e,R,p),c=x&&s?s[0].ref:t;if(Y(d)){const e=ee(await d(n),c);if(e&&(F[R]=Object.assign(Object.assign({},e),k(h,e.message)),!r))return F}else if(A(d)){let e={};for(const[t,s]of Object.entries(d)){if(!_(e)&&!r)break;const u=ee(await s(n),c,t);u&&(e=Object.assign(Object.assign({},u),k(t,u.message)),r&&(F[R]=e))}if(!_(e)&&(F[R]=Object.assign({ref:c},e),!r))return F}}return F};const ne=(e,r)=>Object.entries(r).map(([t,n])=>((r,t,n)=>{const c=n?`${e}.${r}`:`${e}[${r}]`;return G(t)?c:ne(c,t)})(t,n,A(r))).flat(1/0);var ce=(e,r,t,n,c)=>{let s;return t.add(r),_(e)?s=void 0:(s=k(e,r),(A(s)||Array.isArray(s))&&ne(r,s).forEach(e=>t.add(e))),S(s)?c?n:k(n,r):s},se=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:n,isReValidateOnBlur:c,isReValidateOnChange:s,isBlurEvent:u,isSubmitted:i,isOnAll:a})=>!a&&(!i&&t?!(n||u):(i?c:e)?!u:!(i?s:r)||u),ue=e=>e.substring(0,e.indexOf("["));const ie=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var ae=(e,r)=>[...e].some(e=>ie(r,e));function oe(e,r){let t;if(G(e)||r&&e instanceof File)return e;if(e instanceof Date)return t=new Date(e.getTime()),t;if(e instanceof Set){t=new Set;for(const r of e)t.add(r);return t}if(e instanceof Map){t=new Map;for(const n of e.keys())t.set(n,oe(e.get(n),r));return t}t=Array.isArray(e)?[]:{};for(const n in e)t[n]=oe(e[n],r);return t}var le=e=>({isOnSubmit:!e||e===l,isOnBlur:e===a,isOnChange:e===o,isOnAll:e===d,isOnTouch:e===f}),fe=e=>B(e)||L(e);const de="undefined"==typeof window,be="undefined"!=typeof document&&!de&&!S(window.HTMLElement),ye=be?"Proxy"in window:"undefined"!=typeof Proxy;function Oe({mode:e=l,reValidateMode:r=o,resolver:t,context:a,defaultValues:f={},shouldFocusError:b=!0,shouldUnregister:y=!0,criteriaMode:O}={}){const g=Object(n.useRef)({}),j=Object(n.useRef)({}),m=Object(n.useRef)({}),h=Object(n.useRef)(new Set),p=Object(n.useRef)({}),V=Object(n.useRef)({}),D=Object(n.useRef)({}),E=Object(n.useRef)({}),N=Object(n.useRef)(f),P=Object(n.useRef)({}),W=Object(n.useRef)(!1),H=Object(n.useRef)(!1),Q=Object(n.useRef)(),X=Object(n.useRef)({}),Z=Object(n.useRef)({}),ee=Object(n.useRef)(a),re=Object(n.useRef)(t),ie=Object(n.useRef)(new Set),Oe=Object(n.useRef)(le(e)),{isOnSubmit:ge,isOnTouch:je}=Oe.current,me=O===d,[he,ve]=Object(n.useState)({isDirty:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!ge,errors:{}}),pe=Object(n.useRef)({isDirty:!ye,dirtyFields:!ye,touched:!ye||je,isSubmitting:!ye,isValid:!ye}),Ae=Object(n.useRef)(he),Re=Object(n.useRef)(),{isOnBlur:Fe,isOnChange:Ve}=Object(n.useRef)(le(r)).current;ee.current=a,re.current=t,Ae.current=he,X.current=y?{}:_(X.current)?oe(f,be):X.current;const Ce=Object(n.useCallback)((e={})=>!W.current&&ve(Object.assign(Object.assign({},Ae.current),e)),[]),xe=Object(n.useCallback)((e,r,t=!1,n={},c)=>{let s=t||function({errors:e,name:r,error:t,validFields:n,fieldsWithValidation:c}){const s=S(t),u=k(e,r);return s&&!!u||!s&&!K(u,t,!0)||s&&k(c,r)&&!k(n,r)}({errors:Ae.current.errors,error:r,name:e,validFields:E.current,fieldsWithValidation:D.current});const u=k(Ae.current.errors,e);r?(U(E.current,e),s=s||!u||!K(u,r,!0),C(Ae.current.errors,e,r)):((k(D.current,e)||re.current)&&(C(E.current,e,!0),s=s||u),U(Ae.current.errors,e)),(s&&!v(t)||!_(n))&&Ce(Object.assign(Object.assign(Object.assign({},n),{errors:Ae.current.errors}),re.current?{isValid:!!c}:{}))},[]),Se=Object(n.useCallback)((e,r)=>{const{ref:t,options:n}=g.current[e],s=be&&c(t)&&v(r)?"":r;B(t)&&n?n.forEach(({ref:e})=>e.checked=e.value===s):M(t)&&!z(s)?t.files=s:T(t)?[...t.options].forEach(e=>e.selected=s.includes(e.value)):L(t)&&n?n.length>1?n.forEach(({ref:e})=>e.checked=Array.isArray(s)?!!s.find(r=>r===e.value):s===e.value):n[0].ref.checked=!!s:t.value=s},[]),ke=Object(n.useCallback)((e,r)=>{if(pe.current.isDirty||pe.current.dirtyFields){const t=We();return e&&r&&C(t,e,r),!K(t,_(N.current)?P.current:N.current)}return!1},[]),we=Object(n.useCallback)((e,r=!0)=>{if(pe.current.isDirty||pe.current.dirtyFields){const t=!K(k(P.current,e),$(g,e,X)),n=k(Ae.current.dirtyFields,e),c=Ae.current.isDirty;t?C(Ae.current.dirtyFields,e,!0):U(Ae.current.dirtyFields,e);const s={isDirty:ke(),dirtyFields:Ae.current.dirtyFields},u=pe.current.isDirty&&c!==s.isDirty||pe.current.dirtyFields&&n!==k(Ae.current.dirtyFields,e);return u&&r&&(Ae.current=Object.assign(Object.assign({},Ae.current),s),Ce(Object.assign({},s))),u?s:{}}return{}},[]),De=Object(n.useCallback)(async(e,r)=>{if(g.current[e]){const t=(await te(g,me,g.current[e],X))[e];return xe(e,t,r),S(t)}return!1},[xe,me]),Ee=Object(n.useCallback)(async e=>{const{errors:r}=await re.current(We(),ee.current,me),t=Ae.current.isValid;if(Array.isArray(e)){const t=e.map(e=>{const t=k(r,e);return t?C(Ae.current.errors,e,t):U(Ae.current.errors,e),!t}).every(Boolean);return Ce({isValid:_(r),errors:Ae.current.errors}),t}{const n=k(r,e);return xe(e,n,t!==_(r),{},_(r)),!n}},[xe,me]),Be=Object(n.useCallback)(async e=>{const r=e||Object.keys(g.current);if(re.current)return Ee(r);if(Array.isArray(r)){!e&&(Ae.current.errors={});const t=await Promise.all(r.map(async e=>await De(e,null)));return Ce(),t.every(Boolean)}return await De(r,pe.current.isValid)},[Ee,De]),Me=Object(n.useCallback)((e,r,{shouldDirty:t,shouldValidate:n})=>{const c={};C(c,e,r);for(const s of ne(e,r))g.current[s]&&(Se(s,k(c,s)),t&&we(s),n&&Be(s))},[Be,Se,we]),Le=Object(n.useCallback)((e,r,t={})=>{g.current[e]?(Se(e,r),t.shouldDirty&&we(e)):G(r)||(Me(e,r,t),ie.current.has(e)&&(j.current[e]=r,Z.current[e]({[e]:r}),(pe.current.isDirty||pe.current.dirtyFields)&&t.shouldDirty&&(C(Ae.current.dirtyFields,e,function e(r,t,n,c,s){let u=-1;for(;++u<r.length;){for(const c in r[u])Array.isArray(r[u][c])?(!n[u]&&(n[u]={}),n[u][c]=[],e(r[u][c],k(t[u]||{},c,[]),n[u][c],n[u],c)):k(t[u]||{},c)===r[u][c]?C(n[u]||{},c):n[u]=Object.assign(Object.assign({},n[u]),{[c]:!0});!n.length&&c&&delete c[s]}return n.length?n:void 0}(r,k(N.current,e,[]),k(Ae.current.dirtyFields,e,[]))),Ce({isDirty:!K(Object.assign(Object.assign({},We()),{[e]:r}),N.current),dirtyFields:Ae.current.dirtyFields})))),!y&&C(X.current,e,r)},[we,Se,Me]),Te=e=>H.current||h.current.has(e)||h.current.has((e.match(/\w+/)||[])[0]),Ne=(e,r=!0)=>{if(!_(p.current))for(const t in p.current)e&&p.current[t].size&&!p.current[t].has(e)&&!p.current[t].has(ue(e))||(V.current[t](),r=!1);return r};function Pe(e){if(!y){let r=oe(e,be);for(const e of ie.current)R(e)&&!r[e]&&(r=Object.assign(Object.assign({},r),{[e]:[]}));return r}return e}function We(e){if(z(e))return $(g,e,X);if(Array.isArray(e)){const r={};for(const t of e)C(r,t,$(g,t,X));return r}return Pe(J(g,oe(X.current,be),y))}Q.current=Q.current?Q.current:async({type:e,target:r})=>{let t=r.name;const n=g.current[t];let c,u;if(n){const i=e===s,a=se(Object.assign({isBlurEvent:i,isReValidateOnChange:Ve,isReValidateOnBlur:Fe,isTouched:!!k(Ae.current.touched,t),isSubmitted:Ae.current.isSubmitted},Oe.current));let o=we(t,!1),l=!_(o)||Te(t);if(i&&!k(Ae.current.touched,t)&&pe.current.touched&&(C(Ae.current.touched,t,!0),o=Object.assign(Object.assign({},o),{touched:Ae.current.touched})),a)return Ne(t),(!_(o)||l&&_(o))&&Ce(o);if(re.current){const{errors:e}=await re.current(We(),ee.current,me),n=Ae.current.isValid;if(c=k(e,t),L(r)&&!c&&re.current){const r=t.substring(0,t.lastIndexOf(".")>t.lastIndexOf("[")?t.lastIndexOf("."):t.lastIndexOf("[")),n=k(e,r,{});n.type&&n.message&&(c=n),r&&(n||k(Ae.current.errors,r))&&(t=r)}u=_(e),n!==u&&(l=!0)}else c=(await te(g,me,n,X))[t];Ne(t),xe(t,c,l,o,u)}};const $e=Object(n.useCallback)(async(e={})=>{const{errors:r}=await re.current(Object.assign(Object.assign(Object.assign({},N.current),We()),e),ee.current,me),t=_(r);Ae.current.isValid!==t&&Ce({isValid:t})},[me]),Ie=Object(n.useCallback)((e,r)=>function(e,r,t,n,c,s){const{ref:u,ref:{name:i,type:a}}=t,o=e.current[i];if(!c){const r=$(e,i,n);!S(r)&&C(n.current,i,r)}a?(B(u)||L(u))&&o?Array.isArray(o.options)&&o.options.length?(F(o.options).forEach((e,t)=>{(e.ref&&I(e.ref)&&q(e,e.ref)||s)&&(w(e.ref,r),U(o.options,`[${t}]`))}),o.options&&!F(o.options).length&&delete e.current[i]):delete e.current[i]:(I(u)&&q(o,u)||s)&&(w(u,r),delete e.current[i]):delete e.current[i]}(g,Q.current,e,X,y,r),[y]),_e=Object(n.useCallback)(e=>{if(H.current)Ce();else if(h){for(const r of h.current)if(r.startsWith(e)){Ce();break}Ne(e)}},[]),He=Object(n.useCallback)((e,r)=>{e&&(Ie(e,r),y&&!F(e.options||[]).length&&(U(P.current,e.ref.name),U(E.current,e.ref.name),U(D.current,e.ref.name),U(Ae.current.errors,e.ref.name),C(Ae.current.dirtyFields,e.ref.name,!0),Ce({errors:Ae.current.errors,isDirty:ke(),dirtyFields:Ae.current.dirtyFields}),pe.current.isValid&&re.current&&$e(),_e(e.ref.name)))},[$e,Ie]);const Ue=Object(n.useCallback)((e,r,t)=>{const n=t?p.current[t]:h.current,c=S(r)?N.current:r;let s=J(g,oe(X.current,be),y,!1,e);if(z(e)){if(ie.current.has(e)){const r=k(m.current,e,[]);s=r.length===F(k(s,e,[])).length&&r.length?s:m.current}return ce(s,e,n,S(r)?k(c,e):r,!0)}return Array.isArray(e)?e.reduce((e,r)=>Object.assign(Object.assign({},e),{[r]:ce(s,r,n,c)}),{}):(H.current=S(t),x(!_(s)&&s||c))},[]);function qe(e,r={}){const{name:t,type:n,value:a}=e,o=Object.assign({ref:e},r),l=g.current,f=fe(e),d=ae(ie.current,t),b=r=>be&&(!c(e)||r===e);let y,O=l[t],j=!0;if(O&&(f?Array.isArray(O.options)&&F(O.options).find(e=>a===e.ref.value&&b(e.ref)):b(O.ref)))return void(l[t]=Object.assign(Object.assign({},O),r));O=n?f?Object.assign({options:[...F(O&&O.options||[]),{ref:e}],ref:{type:n,name:t}},r):Object.assign({},o):o,l[t]=O;const m=S(k(X.current,t));if(_(N.current)&&m||(y=k(m?N.current:X.current,t),j=S(y),j||d||Se(t,y)),_(r)||(C(D.current,t,!0),!ge&&pe.current.isValid&&te(g,me,O,X).then(e=>{const r=Ae.current.isValid;_(e)?C(E.current,t,!0):U(E.current,t),r!==_(e)&&Ce()})),!(P.current[t]||d&&j)){const e=$(g,t,X);C(P.current,t,j?A(e)?Object.assign({},e):e:y),!d&&U(Ae.current.dirtyFields,t)}n&&function({ref:e},r,t){c(e)&&t&&(e.addEventListener(r?u:i,t),e.addEventListener(s,t))}(f&&O.options?O.options[O.options.length-1]:O,f||"select-one"===e.type,Q.current)}const ze=Object(n.useCallback)((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let n={},c=Pe(J(g,oe(X.current,be),y,!0));pe.current.isSubmitting&&Ce({isSubmitting:!0});try{if(re.current){const{errors:e,values:r}=await re.current(c,ee.current,me);Ae.current.errors=n=e,c=r}else for(const e of Object.values(g.current))if(e){const{ref:{name:r}}=e,t=await te(g,me,e,X);t[r]?(C(n,r,t[r]),U(E.current,r)):k(D.current,r)&&(U(Ae.current.errors,r),C(E.current,r,!0))}_(n)&&Object.keys(Ae.current.errors).every(e=>e in g.current)?(Ce({errors:{},isSubmitting:!0}),await e(c,t)):(Ae.current.errors=Object.assign(Object.assign({},Ae.current.errors),n),r&&await r(Ae.current.errors,t),b&&((e,r)=>{for(const t in e)if(k(r,t)){const r=e[t];if(r){if(r.ref.focus&&S(r.ref.focus()))break;if(r.options){r.options[0].ref.focus();break}}}})(g.current,Ae.current.errors))}finally{Ae.current.isSubmitting=!1,Ce({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:_(Ae.current.errors),errors:Ae.current.errors,submitCount:Ae.current.submitCount+1})}},[b,me]);Object(n.useEffect)(()=>{t&&pe.current.isValid&&$e(),Re.current=Re.current||!be?Re.current:function(e,r){const t=new MutationObserver(()=>{for(const t of Object.values(e.current))if(t&&t.options)for(const e of t.options)e&&e.ref&&I(e.ref)&&r(t);else t&&I(t.ref)&&r(t)});return t.observe(window.document,{childList:!0,subtree:!0}),t}(g,He)},[He,N.current]),Object(n.useEffect)(()=>()=>{W.current=!0,Re.current&&Re.current.disconnect(),Object.values(g.current).forEach(e=>He(e,!0))},[]),!t&&pe.current.isValid&&(he.isValid=K(E.current,D.current)&&_(Ae.current.errors));const Ge={trigger:Be,setValue:Object(n.useCallback)((function(e,r,t){Le(e,r,t),Te(e)&&Ce(),Ne(e),(t||{}).shouldValidate&&Be(e)}),[Le,Be]),getValues:Object(n.useCallback)(We,[]),register:Object(n.useCallback)((function(e,r){if(!de)if(z(e))qe({name:e},r);else{if(!A(e)||!("name"in e))return r=>r&&qe(r,e);qe(e,r)}}),[N.current]),unregister:Object(n.useCallback)((function(e){for(const r of Array.isArray(e)?e:[e])He(g.current[r],!0)}),[])},Je=Object(n.useMemo)(()=>Object.assign({isFormDirty:ke,updateWatchedValue:_e,shouldUnregister:y,updateFormState:Ce,removeFieldEventListener:Ie,watchInternal:Ue,mode:Oe.current,reValidateMode:{isReValidateOnBlur:Fe,isReValidateOnChange:Ve},validateResolver:t?$e:void 0,fieldsRef:g,resetFieldArrayFunctionRef:Z,useWatchFieldsRef:p,useWatchRenderFunctionsRef:V,fieldArrayDefaultValuesRef:j,validFieldsRef:E,fieldsWithValidationRef:D,fieldArrayNamesRef:ie,readFormStateRef:pe,formStateRef:Ae,defaultValuesRef:N,shallowFieldsStateRef:X,fieldArrayValuesRef:m},Ge),[N.current,_e,y,Ie,Ue]);return Object.assign({watch:function(e,r){return Ue(e,r)},control:Je,formState:ye?new Proxy(he,{get:(e,r)=>{if(r in e)return pe.current[r]=!0,e[r]}}):he,handleSubmit:ze,reset:Object(n.useCallback)((e,r={})=>{if(be)for(const e of Object.values(g.current))if(e){const{ref:r,options:t}=e,n=fe(r)&&Array.isArray(t)?t[0].ref:r;if(c(n))try{n.closest("form").reset();break}catch(e){}}g.current={},N.current=oe(e||N.current,be),e&&Ne(""),Object.values(Z.current).forEach(e=>Y(e)&&e()),X.current=y?{}:oe(e,be)||{},(({errors:e,isDirty:r,isSubmitted:t,touched:n,isValid:c,submitCount:s,dirtyFields:u})=>{c||(E.current={},D.current={}),P.current={},j.current={},h.current=new Set,H.current=!1,Ce({submitCount:s?Ae.current.submitCount:0,isDirty:!!r&&Ae.current.isDirty,isSubmitted:!!t&&Ae.current.isSubmitted,isValid:!!c&&Ae.current.isValid,dirtyFields:u?Ae.current.dirtyFields:{},touched:n?Ae.current.touched:{},errors:e?Ae.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(r)},[]),clearErrors:Object(n.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach(e=>g.current[e]&&R(e)?delete Ae.current.errors[e]:U(Ae.current.errors,e)),Ce({errors:e?Ae.current.errors:{}})}),[]),setError:Object(n.useCallback)((function(e,r){const t=(g.current[e]||{}).ref;C(Ae.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),Ce({isValid:!1,errors:Ae.current.errors}),r.shouldFocus&&t&&t.focus&&t.focus()}),[]),errors:he.errors},Ge)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ge(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t}const je=Object(n.createContext)(null);je.displayName="RHFContext";const me=()=>Object(n.useContext)(je),he=e=>{var{children:r}=e,t=ge(e,["children"]);return Object(n.createElement)(je.Provider,{value:Object.assign({},t)},r)};var ve=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(r){const t=(16*Math.random()+e)%16|0;return("x"==r?t:3&t|8).toString(16)}))};var pe=(e,r)=>S(r)?[]:Array.isArray(r)?function(e,r){let t=-1;for(;++t<e.length;)r.indexOf(t)>=0&&delete e[t];return F(e)}(e,r):((e,r)=>[...e.slice(0,r),...e.slice(r+1)])(e,r),Ae=(e,r,t)=>Array.isArray(e)?(S(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],Re=(e,r,t)=>{const n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]};function Fe(e,r){return[...Array.isArray(r)?r:[r||void 0],...e]}function Ve(e,r,t){return[...e.slice(0,r),...Array.isArray(t)?t:[t||void 0],...e.slice(r)]}var Ce=e=>Array.isArray(e)?Array(e.length).fill(void 0):void 0;function xe(e){if(A(e)){const r={};for(const t in e)r[t]=!0;return[r]}return[!0]}var Se=e=>(Array.isArray(e)?e:[e]).map(xe).flat();const ke=(e=[],r)=>e.map(e=>Object.assign({[r]:ve()},e)),we=({control:e,name:r,keyName:t="id"})=>{const c=me();const s=Object(n.useRef)(-1),{isFormDirty:u,updateWatchedValue:i,resetFieldArrayFunctionRef:a,fieldArrayNamesRef:o,fieldsRef:l,defaultValuesRef:f,removeFieldEventListener:d,formStateRef:b,shallowFieldsStateRef:y,updateFormState:O,readFormStateRef:g,validFieldsRef:j,fieldsWithValidationRef:m,fieldArrayDefaultValuesRef:h,validateResolver:v,getValues:p,shouldUnregister:A,fieldArrayValuesRef:R}=e||c.control,V=ue(r),x=Object(n.useRef)([...k(h.current,V)?k(h.current,r,[]):k(A?f.current:y.current,r,[])]),[S,w]=Object(n.useState)(ke(x.current,t));C(R.current,r,S);const D=Object(n.useCallback)(()=>k(R.current,r,[]),[]),E=()=>k(p(),r,D()).map((e,r)=>Object.assign(Object.assign({},D()[r]),e));o.current.add(r),V&&!k(h.current,V)&&C(h.current,V,k(f.current,V));const B=e=>{if(w(e),C(R.current,r,e),g.current.isValid&&v){const t=p();C(t,r,e),v(t)}},M=()=>{for(const e in l.current)ie(e,r)&&d(l.current[e],!0)},L=e=>!F(k(e,r,[])).length&&U(e,r),T=e=>{const n=k(f.current,r,[]),c=(e,n)=>{for(const c in e)for(const s in e[c])s===t||n[c]&&e[c]&&e[c][s]===n[c][s]||C(b.current.dirtyFields,`${r}[${c}]`,Object.assign(Object.assign({},k(b.current.dirtyFields,`${r}[${c}]`,{})),{[s]:!0}))};e&&(c(n,e),c(e,n))},N=(e,n,c,s=[],i=!0,a=!1)=>{if(k(y.current,r)){const t=e(k(y.current,r),n.argA,n.argB);i&&C(y.current,r,t)}if(k(h.current,r)){const t=e(k(h.current,r),n.argA,n.argB);i&&C(h.current,r,t),L(h.current)}if(Array.isArray(k(b.current.errors,r))){const t=e(k(b.current.errors,r),n.argA,n.argB);i&&C(b.current.errors,r,t),L(b.current.errors)}if(g.current.touched&&k(b.current.touched,r)){const t=e(k(b.current.touched,r),n.argA,n.argB);i&&C(b.current.touched,r,t),L(b.current.touched)}if(g.current.dirtyFields||g.current.isDirty){const t=e(k(b.current.dirtyFields,r,[]),n.argC,n.argD);i&&C(b.current.dirtyFields,r,t),T(c),L(b.current.dirtyFields)}a&&g.current.isValid&&!v&&(C(j.current,r,e(k(j.current,r,[]),n.argA)),L(j.current),C(m.current,r,e(k(m.current,r,[]),n.argA)),L(m.current)),O({errors:b.current.errors,dirtyFields:b.current.dirtyFields,isDirty:u(r,s.map((e={})=>{var r=t;e[r];return ge(e,["symbol"==typeof r?r:r+""])})),touched:b.current.touched})};return Object(n.useEffect)(()=>{const e=k(h.current,r);if(e&&S.length<e.length&&(e.pop(),C(h.current,r,e)),i(r),s.current>-1)for(const e in l.current){const t=l.current[e];if(e.startsWith(`${r}[${s.current}]`)&&t.ref.focus){t.ref.focus();break}}s.current=-1},[S,r]),Object(n.useEffect)(()=>{const e=a.current,n=o.current;return ue(r)||(e[r]=e=>{M(),!e&&U(h.current,r),U(y.current,r),x.current=k(e||f.current,r),w(ke(x.current,t))}),()=>{M(),delete e[r],U(R,r),n.delete(r)}},[]),{swap:Object(n.useCallback)((e,r)=>{const t=E();Re(t,e,r),M(),B([...t]),N(Re,{argA:e,argB:r,argC:e,argD:r},void 0,t,!1)},[r]),move:Object(n.useCallback)((e,r)=>{const t=E();Ae(t,e,r),M(),B([...t]),N(Ae,{argA:e,argB:r,argC:e,argD:r},void 0,t,!1)},[r]),prepend:Object(n.useCallback)((e,r=!0)=>{const n=Ce(e),c=Fe(E(),ke(Array.isArray(e)?e:[e],t));B(c),M(),N(Fe,{argA:n,argC:Se(e)},c),s.current=r?0:-1},[r]),append:Object(n.useCallback)((e,n=!0)=>{const c=[...D(),...ke(Array.isArray(e)?e:[e],t)];B(c),(g.current.dirtyFields||g.current.isDirty)&&(T(c),O({isDirty:!0,dirtyFields:b.current.dirtyFields})),!A&&C(y.current,r,[...k(y.current,r)||[],e]),s.current=n?S.length:-1},[r,S]),remove:Object(n.useCallback)(e=>{const r=E(),t=pe(r,e);B(t),M(),N(pe,{argA:e,argC:e},t,pe(r,e),!0,!0)},[r]),insert:Object(n.useCallback)((e,r,n=!0)=>{const c=Ce(r),u=E(),i=Ve(u,e,ke(Array.isArray(r)?r:[r],t));B(i),M(),N(Ve,{argA:e,argB:c,argC:e,argD:Se(r)},i,Ve(u,e)),s.current=n?e:-1},[r]),fields:S}};function De({control:e,name:r,defaultValue:t}){const c=me();const{useWatchFieldsRef:s,useWatchRenderFunctionsRef:u,watchInternal:i,defaultValuesRef:a}=e||c.control,o=Object(n.useState)()[1],l=Object(n.useRef)(),f=Object(n.useRef)(t);return Object(n.useEffect)(()=>{const e=l.current=ve(),t=u.current,n=s.current;return n[e]=new Set,t[e]=()=>o({}),i(r,f.current,e),()=>{delete n[e],delete t[e]}},[r,u,s,i,f]),l.current?i(r,f.current,l.current):S(t)?z(r)?k(a.current,r):Array.isArray(r)?r.reduce((e,r)=>Object.assign(Object.assign({},e),{[r]:k(a.current,r)}),{}):a.current:t}const Ee=e=>{var{name:r,rules:t,as:c,render:s,defaultValue:u,control:i,onFocus:a}=e,o=ge(e,["name","rules","as","render","defaultValue","control","onFocus"]);const l=me();const{defaultValuesRef:f,setValue:d,register:b,unregister:y,trigger:O,mode:g,reValidateMode:{isReValidateOnBlur:j,isReValidateOnChange:m},formStateRef:{current:{isSubmitted:h,touched:v}},updateFormState:p,readFormStateRef:R,fieldsRef:F,fieldArrayNamesRef:V,shallowFieldsStateRef:x}=i||l.control,w=!ae(V.current,r),D=()=>!S(k(x.current,r))&&w?k(x.current,r):S(u)?k(f.current,r):u,[E,B]=Object(n.useState)(D()),M=Object(n.useRef)(E),L=Object(n.useRef)({focus:()=>null}),T=Object(n.useRef)(a||(()=>{Y(L.current.focus)&&L.current.focus()})),N=Object(n.useCallback)(e=>!se(Object.assign({isBlurEvent:e,isReValidateOnBlur:j,isReValidateOnChange:m,isSubmitted:h,isTouched:!!k(v,r)},g)),[j,m,h,v,r,g]),P=Object(n.useCallback)(([e])=>{const r=(e=>G(e)||!A(e.target)||A(e.target)&&!e.type?e:S(e.target.value)?e.target.checked:e.target.value)(e);return B(r),M.current=r,r},[]),W=Object(n.useCallback)(e=>{F.current[r]?F.current[r]=Object.assign({ref:F.current[r].ref},t):(b(Object.defineProperty({name:r,focus:T.current},"value",{set(e){B(e),M.current=e},get:()=>M.current}),t),e=!k(f.current,r)),e&&w&&B(D())},[t,r,b]);Object(n.useEffect)(()=>()=>y(r),[y,r]),Object(n.useEffect)(()=>{W()},[W]),Object(n.useEffect)(()=>{!F.current[r]&&W(!0)});const $=Object(n.useCallback)(()=>{R.current.touched&&!k(v,r)&&(C(v,r,!0),p({touched:v})),N(!0)&&O(r)},[r,v,p,N,O,R]),I={onChange:Object(n.useCallback)((...e)=>d(r,P(e),{shouldValidate:N(),shouldDirty:!0}),[d,r,N]),onBlur:$,name:r,value:E,ref:L},_=Object.assign(Object.assign({},o),I);return c?Object(n.isValidElement)(c)?Object(n.cloneElement)(c,_):Object(n.createElement)(c,_):s?s(I):null};t.d(r,"Controller",(function(){return Ee})),t.d(r,"FormProvider",(function(){return he})),t.d(r,"appendErrors",(function(){return re})),t.d(r,"get",(function(){return k})),t.d(r,"transformToNestObject",(function(){return x})),t.d(r,"useFieldArray",(function(){return we})),t.d(r,"useForm",(function(){return Oe})),t.d(r,"useFormContext",(function(){return me})),t.d(r,"useWatch",(function(){return De}))}})}));
//# sourceMappingURL=react-hook-form@6.11.3.js.map