define("react-hook-form@6.9.2",["react@16.12.0"],(function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=98)}({0:function(r,t){r.exports=e},98:function(e,r,t){"use strict";t.r(r),t.d(r,"Controller",(function(){return Be})),t.d(r,"FormProvider",(function(){return ye})),t.d(r,"appendErrors",(function(){return te})),t.d(r,"get",(function(){return E})),t.d(r,"transformToNestObject",(function(){return S})),t.d(r,"useFieldArray",(function(){return De})),t.d(r,"useForm",(function(){return Oe})),t.d(r,"useFormContext",(function(){return he})),t.d(r,"useWatch",(function(){return Ae}));var n=t(0),c=e=>e instanceof HTMLElement;const s="blur",u="change",i="input",a="onBlur",o="onChange",l="onSubmit",f="onTouched",d="all",b="max",g="min",O="maxLength",j="minLength",m="pattern",h="required",y="validate";var v=e=>null==e,p=e=>Array.isArray(e);const R=e=>"object"==typeof e;var F=e=>!v(e)&&!p(e)&&R(e)&&!(e instanceof Date),V=e=>!p(e)&&(/^\w*$/.test(e)||!/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(e)),x=e=>{const r=[];return e.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,(e,t,n,c)=>{r.push(n?c.replace(/\\(\\)?/g,"$1"):t||e)}),r};function C(e,r,t){let n=-1;const c=V(r)?[r]:x(r),s=c.length,u=s-1;for(;++n<s;){const r=c[n];let s=t;if(n!==u){const t=e[r];s=F(t)||p(t)?t:isNaN(+c[n+1])?{}:[]}e[r]=s,e=e[r]}return e}var S=e=>Object.entries(e).reduce((e,[r,t])=>V(r)?Object.assign(Object.assign({},e),{[r]:t}):(C(e,r,t),e),{}),k=e=>void 0===e,w=e=>e.filter(Boolean),E=(e,r,t)=>{const n=w(r.split(/[,[\].]+?/)).reduce((e,r)=>v(e)?e:e[r],e);return k(n)||n===e?k(e[r])?t:e[r]:n},D=(e,r)=>{c(e)&&e.removeEventListener&&(e.removeEventListener(i,r),e.removeEventListener(u,r),e.removeEventListener(s,r))};const A={isValid:!1,value:""};var B=e=>p(e)?e.reduce((e,r)=>r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e,A):A,W=e=>"radio"===e.type,L=e=>"file"===e.type,N=e=>"checkbox"===e.type,P=e=>"select-multiple"===e.type;const T={value:!1,isValid:!1},M={value:!0,isValid:!0};var $=e=>{if(p(e)){if(e.length>1){const r=e.filter(e=>e&&e.ref.checked).map(({ref:{value:e}})=>e);return{value:r,isValid:!!r.length}}const{checked:r,value:t,attributes:n}=e[0].ref;return r?n&&!k(n.value)?k(t)||""===t?M:{value:t,isValid:!0}:M:T}return T};function _(e,r,t,n){const c=e.current[r];if(c){const{ref:{value:e,disabled:r},ref:t}=c;if(r&&n)return;return L(t)?t.files:W(t)?B(c.options).value:P(t)?(s=t.options,[...s].filter(({selected:e})=>e).map(({value:e})=>e)):N(t)?$(c.options).value:e}var s;if(t)return E(t.current,r)}function I(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&I(e.parentNode)}var H=e=>F(e)&&!Object.keys(e).length,U=e=>"boolean"==typeof e;function q(e,r){const t=V(r)?[r]:x(r),n=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=k(e)?n++:e[r[n++]];return e}(e,t),c=t[t.length-1];let s=void 0;n&&delete n[c];for(let r=0;r<t.slice(0,-1).length;r++){let n=-1,c=void 0;const u=t.slice(0,-(r+1)),i=u.length-1;for(r>0&&(s=e);++n<u.length;){const r=u[n];c=c?c[r]:e[r],i===n&&(F(c)&&H(c)||p(c)&&!c.filter(e=>F(e)&&!H(e)||U(e)).length)&&(s?delete s[r]:delete e[r]),s=c}}return e}const z=(e,r)=>e&&e.ref===r;var G=e=>"string"==typeof e,J=e=>v(e)||!R(e);var K=(e,r,t,n)=>{const c={};for(const r in e.current)(k(n)||(G(n)?r.startsWith(n):p(n)&&n.find(e=>r.startsWith(e))))&&(c[r]=_(e,r,void 0,t));return function e(r,t){if(J(r)||J(t))return t;for(const n in t){const c=r[n],s=t[n];try{F(c)&&F(s)||p(c)&&p(s)?r[n]=e(c,s):r[n]=s}catch(e){}}return r}(S(Object.assign({},(r||{}).current||{})),S(c))};function Q(e=[],r=[],t){const n=Object.keys(e),c=Object.keys(r);if(n.length!==c.length)return!1;for(const c of n)if(!t||!["ref","context"].includes(c)){const n=e[c],s=r[c];if((F(n)||p(n))&&(F(s)||p(s))?!Q(n,s,t):n!==s)return!1}return!0}var X=e=>e instanceof RegExp;var Y=e=>{return F(r=e)&&!X(r)?e:{value:e,message:""};var r},Z=e=>"function"==typeof e,ee=e=>G(e)||F(e)&&Object(n.isValidElement)(e);function re(e,r,t="validate"){if(ee(e)||U(e)&&!e)return{type:t,message:ee(e)?e:"",ref:r}}var te=(e,r,t,n,c)=>{if(r){const r=t[e];return Object.assign(Object.assign({},r),{types:Object.assign(Object.assign({},r&&r.types?r.types:{}),{[n]:c||!0})})}return{}},ne=async(e,r,{ref:t,ref:{type:n,value:c},options:s,required:u,maxLength:i,minLength:a,min:o,max:l,pattern:f,validate:d},p)=>{const R=e.current,V=t.name,x={},C=W(t),S=N(t),k=C||S,w=""===c,E=te.bind(null,V,r,x),D=(e,r,n,c=O,s=j)=>{const u=e?r:n;x[V]=Object.assign({type:e?c:s,message:u,ref:t},E(e?c:s,u))};if(u&&(!C&&!S&&(w||v(c))||U(c)&&!c||S&&!$(s).isValid||C&&!B(s).isValid)){const{value:e,message:n}=ee(u)?{value:!!u,message:u}:Y(u);if(e&&(x[V]=Object.assign({type:h,message:n,ref:k?((R[V].options||[])[0]||{}).ref:t},E(h,n)),!r))return x}if(!v(o)||!v(l)){let e,s;const{value:u,message:i}=Y(l),{value:a,message:f}=Y(o);if("number"===n||!n&&!isNaN(c)){const r=t.valueAsNumber||parseFloat(c);v(u)||(e=r>u),v(a)||(s=r<a)}else{const r=t.valueAsDate||new Date(c);G(u)&&(e=r>new Date(u)),G(a)&&(s=r<new Date(a))}if((e||s)&&(D(!!e,i,f,b,g),!r))return x}if(G(c)&&!w&&(i||a)){const{value:e,message:t}=Y(i),{value:n,message:s}=Y(a),u=c.toString().length,o=!v(e)&&u>e,l=!v(n)&&u<n;if((o||l)&&(D(!!o,t,s),!r))return x}if(f&&!w){const{value:e,message:n}=Y(f);if(X(e)&&!e.test(c)&&(x[V]=Object.assign({type:m,message:n,ref:t},E(m,n)),!r))return x}if(d){const n=_(e,V,p),c=k&&s?s[0].ref:t;if(Z(d)){const e=re(await d(n),c);if(e&&(x[V]=Object.assign(Object.assign({},e),E(y,e.message)),!r))return x}else if(F(d)){let e={};for(const[t,s]of Object.entries(d)){if(!H(e)&&!r)break;const u=re(await s(n),c,t);u&&(e=Object.assign(Object.assign({},u),E(t,u.message)),r&&(x[V]=e))}if(!H(e)&&(x[V]=Object.assign({ref:c},e),!r))return x}}return x};const ce=(e,r)=>Object.entries(r).map(([t,n])=>((r,t,n)=>{const c=n?`${e}.${r}`:`${e}[${r}]`;return J(t)?c:ce(c,t)})(t,n,F(r))).flat(1/0);var se=(e,r,t,n,c)=>{let s;return t.add(r),H(e)?s=void 0:(s=E(e,r),(F(s)||p(s))&&ce(r,s).forEach(e=>t.add(e))),k(s)?c?n:E(n,r):s},ue=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:n,isReValidateOnBlur:c,isReValidateOnChange:s,isBlurEvent:u,isSubmitted:i,isOnAll:a})=>!a&&(!i&&t?!(n||u):(i?c:e)?!u:!(i?s:r)||u),ie=e=>e.substring(0,e.indexOf("["));const ae=(e,r)=>RegExp(`^${r}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var oe=(e,r)=>[...e].some(e=>ae(r,e));var le=e=>({isOnSubmit:!e||e===l,isOnBlur:e===a,isOnChange:e===o,isOnAll:e===d,isOnTouch:e===f}),fe=e=>W(e)||N(e);const de="undefined"==typeof window,be="undefined"!=typeof document&&!de&&!k(window.HTMLElement),ge=be?"Proxy"in window:"undefined"!=typeof Proxy;function Oe({mode:e=l,reValidateMode:r=o,resolver:t,context:a,defaultValues:f={},shouldFocusError:b=!0,shouldUnregister:g=!0,criteriaMode:O}={}){const j=Object(n.useRef)({}),m=Object(n.useRef)({}),h=Object(n.useRef)(new Set),y=Object(n.useRef)({}),R=Object(n.useRef)({}),x=Object(n.useRef)({}),A=Object(n.useRef)({}),B=Object(n.useRef)(f),T=Object(n.useRef)({}),M=Object(n.useRef)(!1),$=Object(n.useRef)(!1),U=Object(n.useRef)(),X=Object(n.useRef)(g?{}:Object.assign({},f)),Y=Object(n.useRef)({}),ee=Object(n.useRef)(a),re=Object(n.useRef)(t),te=Object(n.useRef)(new Set),ae=Object(n.useRef)(le(e)),{isOnSubmit:Oe,isOnTouch:je}=ae.current,me=O===d,[he,ye]=Object(n.useState)({isDirty:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!Oe,errors:{}}),ve=Object(n.useRef)({isDirty:!ge,dirtyFields:!ge,touched:!ge||je,isSubmitting:!ge,isValid:!ge}),pe=Object(n.useRef)(he),Re=Object(n.useRef)(),{isOnBlur:Fe,isOnChange:Ve}=Object(n.useRef)(le(r)).current;ee.current=a,re.current=t,pe.current=he;const xe=Object(n.useCallback)((e={})=>!M.current&&ye(Object.assign(Object.assign({},pe.current),e)),[]),Ce=Object(n.useCallback)((e,r,t=!1,n={},c)=>{let s=t||function({errors:e,name:r,error:t,validFields:n,fieldsWithValidation:c}){const s=k(t),u=E(e,r);return s&&!!u||!s&&!Q(u,t,!0)||s&&E(c,r)&&!E(n,r)}({errors:pe.current.errors,error:r,name:e,validFields:A.current,fieldsWithValidation:x.current});const u=E(pe.current.errors,e);r?(q(A.current,e),s=s||!u||!Q(u,r,!0),C(pe.current.errors,e,r)):((E(x.current,e)||re.current)&&(C(A.current,e,!0),s=s||u),q(pe.current.errors,e)),(s&&!v(t)||!H(n))&&xe(Object.assign(Object.assign(Object.assign({},n),{errors:pe.current.errors}),re.current?{isValid:!!c}:{}))},[]),Se=Object(n.useCallback)((e,r)=>{const{ref:t,options:n}=j.current[e],s=be&&c(t)&&v(r)?"":r;W(t)&&n?n.forEach(({ref:e})=>e.checked=e.value===s):L(t)&&!G(s)?t.files=s:P(t)?[...t.options].forEach(e=>e.selected=s.includes(e.value)):N(t)&&n?n.length>1?n.forEach(({ref:e})=>e.checked=p(s)?!!s.find(r=>r===e.value):s===e.value):n[0].ref.checked=!!s:t.value=s},[]),ke=()=>!Q(Te(),H(B.current)?T.current:B.current)||!H(pe.current.dirtyFields),we=Object(n.useCallback)((e,r=!0)=>{if(ve.current.isDirty||ve.current.dirtyFields){const t=E(T.current,e)!==_(j,e,X),n=E(pe.current.dirtyFields,e),c=pe.current.isDirty;t?C(pe.current.dirtyFields,e,!0):q(pe.current.dirtyFields,e);const s={isDirty:ke(),dirtyFields:pe.current.dirtyFields},u=ve.current.isDirty&&c!==s.isDirty||ve.current.dirtyFields&&n!==E(pe.current.dirtyFields,e);return u&&r&&(pe.current=Object.assign(Object.assign({},pe.current),s),xe(Object.assign({},s))),u?s:{}}return{}},[]),Ee=Object(n.useCallback)(async(e,r)=>{if(j.current[e]){const t=(await ne(j,me,j.current[e],X))[e];return Ce(e,t,r),k(t)}return!1},[Ce,me]),De=Object(n.useCallback)(async e=>{const{errors:r}=await re.current(Te(),ee.current,me),t=pe.current.isValid;if(p(e)){const t=e.map(e=>{const t=E(r,e);return t?C(pe.current.errors,e,t):q(pe.current.errors,e),!t}).every(Boolean);return xe({isValid:H(r),errors:pe.current.errors}),t}{const n=E(r,e);return Ce(e,n,t!==H(r),{},H(r)),!n}},[Ce,me]),Ae=Object(n.useCallback)(async e=>{const r=e||Object.keys(j.current);if(re.current)return De(r);if(p(r)){const e=await Promise.all(r.map(async e=>await Ee(e,null)));return xe(),e.every(Boolean)}return await Ee(r,ve.current.isValid)},[De,Ee]),Be=Object(n.useCallback)((e,r,{shouldDirty:t,shouldValidate:n})=>{const c={};C(c,e,r);for(const s of ce(e,r))j.current[s]&&(Se(s,E(c,s)),t&&we(s),n&&Ae(s))},[Ae,Se,we]),We=Object(n.useCallback)((e,r,t={})=>{j.current[e]?(Se(e,r),t.shouldDirty&&we(e)):J(r)||(Be(e,r,t),te.current.has(e)&&(m.current[e]=r,Y.current[e]({[e]:r}),(ve.current.isDirty||ve.current.dirtyFields)&&(C(pe.current.dirtyFields,e,function e(r,t,n,c,s){let u=-1;for(;++u<r.length;){for(const c in r[u])p(r[u][c])?(!n[u]&&(n[u]={}),n[u][c]=[],e(r[u][c],E(t[u]||{},c,[]),n[u][c],n[u],c)):E(t[u]||{},c)===r[u][c]?C(n[u]||{},c):n[u]=Object.assign(Object.assign({},n[u]),{[c]:!0});!n.length&&c&&delete c[s]}return n.length?n:void 0}(r,E(B.current,e,[]),E(pe.current.dirtyFields,e,[]))),xe({isDirty:!Q(Object.assign(Object.assign({},Te()),{[e]:r}),B.current),dirtyFields:pe.current.dirtyFields})))),!g&&C(X.current,e,r)},[we,Se,Be]),Le=e=>$.current||h.current.has(e)||h.current.has((e.match(/\w+/)||[])[0]),Ne=(e,r=!0)=>{if(!H(y.current))for(const t in y.current)e&&y.current[t].size&&!y.current[t].has(e)&&!y.current[t].has(ie(e))||(R.current[t](),r=!1);return r};function Pe(e){if(!g)for(const r of te.current)V(r)&&!e[r]&&(e=Object.assign(Object.assign({},e),{[r]:[]}));return e}function Te(e){if(G(e))return _(j,e,X);if(p(e)){const r={};for(const t of e)C(r,t,_(j,t,X));return r}return Pe(K(j,X))}U.current=U.current?U.current:async({type:e,target:r})=>{const t=r.name,n=j.current[t];let c,u;if(n){const r=e===s,i=ue(Object.assign({isBlurEvent:r,isReValidateOnChange:Ve,isReValidateOnBlur:Fe,isTouched:!!E(pe.current.touched,t),isSubmitted:pe.current.isSubmitted},ae.current));let a=we(t,!1),o=!H(a)||Le(t);if(r&&!E(pe.current.touched,t)&&ve.current.touched&&(C(pe.current.touched,t,!0),a=Object.assign(Object.assign({},a),{touched:pe.current.touched})),i)return Ne(t),(!H(a)||o&&H(a))&&xe(a);if(re.current){const{errors:e}=await re.current(Te(),ee.current,me),r=pe.current.isValid;c=E(e,t),u=H(e),r!==u&&(o=!0)}else c=(await ne(j,me,n,X))[t];Ne(t),Ce(t,c,o,a,u)}};const Me=Object(n.useCallback)(async(e={})=>{const{errors:r}=await re.current(Object.assign(Object.assign(Object.assign({},B.current),Te()),e),ee.current,me),t=H(r);pe.current.isValid!==t&&xe({isValid:t})},[me]),$e=Object(n.useCallback)((e,r)=>function(e,r,t,n,c,s){const{ref:u,ref:{name:i,type:a}}=t,o=e.current[i];if(!c){const r=_(e,i,n);k(r)||C(n.current,i,r)}if(a)if((W(u)||N(u))&&o){const{options:t}=o;p(t)&&t.length?(w(t).forEach((e,n)=>{const{ref:c}=e;(c&&I(c)&&z(e,c)||s)&&(D(c,r),q(t,`[${n}]`))}),t&&!w(t).length&&delete e.current[i]):delete e.current[i]}else(I(u)&&z(o,u)||s)&&(D(u,r),delete e.current[i]);else delete e.current[i]}(j,U.current,e,X,g,r),[g]),_e=Object(n.useCallback)((e,r)=>{e&&($e(e,r),g&&!w(e.options||[]).length&&(q(T.current,e.ref.name),q(A.current,e.ref.name),q(x.current,e.ref.name),q(pe.current.errors,e.ref.name),C(pe.current.dirtyFields,e.ref.name,!0),xe({errors:pe.current.errors,isDirty:ke(),dirtyFields:pe.current.dirtyFields}),re.current&&Me()))},[Me,$e]);const Ie=Object(n.useCallback)((e,r,t)=>{const n=t?y.current[t]:h.current,c=k(r)?B.current:r,s=K(j,X,!1,e);return G(e)?se(s,e,n,k(r)?E(c,e):r,!0):p(e)?e.reduce((e,r)=>Object.assign(Object.assign({},e),{[r]:se(s,r,n,c)}),{}):($.current=k(t),S(!H(s)&&s||c))},[]);function He(e,r={}){const{name:t,type:n,value:a}=e,o=Object.assign({ref:e},r),l=j.current,f=fe(e),d=oe(te.current,t),b=r=>be&&(!c(e)||r===e);let g,O=l[t],m=!0;if(O&&(f?p(O.options)&&w(O.options).find(e=>a===e.ref.value&&b(e.ref)):b(O.ref)))return void(l[t]=Object.assign(Object.assign({},O),r));O=n?f?Object.assign({options:[...w(O&&O.options||[]),{ref:e}],ref:{type:n,name:t}},r):Object.assign({},o):o,l[t]=O;const h=k(E(X.current,t));if(H(B.current)&&h||(g=E(h?B.current:X.current,t),m=k(g),m||d||Se(t,g)),H(r)||(C(x.current,t,!0),!Oe&&ve.current.isValid&&ne(j,me,O,X).then(e=>{const r=pe.current.isValid;H(e)?C(A.current,t,!0):q(A.current,t),r!==H(e)&&xe()})),!(T.current[t]||d&&m)){const e=_(j,t,X);C(T.current,t,m?F(e)?Object.assign({},e):e:g),!d&&q(pe.current.dirtyFields,t)}n&&function({ref:e},r,t){c(e)&&t&&(e.addEventListener(r?u:i,t),e.addEventListener(s,t))}(f&&O.options?O.options[O.options.length-1]:O,f||"select-one"===e.type,U.current)}const Ue=Object(n.useCallback)((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let n={},c=Pe(K(j,X,!0));ve.current.isSubmitting&&xe({isSubmitting:!0});try{if(re.current){const{errors:e,values:r}=await re.current(c,ee.current,me);pe.current.errors=e,n=e,c=r}else for(const e of Object.values(j.current))if(e){const{ref:{name:r}}=e,t=await ne(j,me,e,X);t[r]?(C(n,r,t[r]),q(A.current,r)):E(x.current,r)&&(q(pe.current.errors,r),C(A.current,r,!0))}H(n)&&Object.keys(pe.current.errors).every(e=>e in j.current)?(xe({errors:{},isSubmitting:!0}),await e(c,t)):(pe.current.errors=Object.assign(Object.assign({},pe.current.errors),n),r&&await r(n,t),b&&((e,r)=>{for(const t in e)if(E(r,t)){const r=e[t];if(r){if(r.ref.focus){r.ref.focus();break}if(r.options){r.options[0].ref.focus();break}}}})(j.current,n))}finally{xe({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:H(pe.current.errors),errors:pe.current.errors,submitCount:pe.current.submitCount+1})}},[b,me]);Re.current=Re.current||!be?Re.current:function(e,r){const t=new MutationObserver(()=>{for(const t of Object.values(e.current))if(t&&t.options)for(const e of t.options)e&&e.ref&&I(e.ref)&&r(t);else t&&I(t.ref)&&r(t)});return t.observe(window.document,{childList:!0,subtree:!0}),t}(j,_e),Object(n.useEffect)(()=>(M.current=!1,t&&ve.current.isValid&&Me(),()=>{M.current=!0,Re.current&&Re.current.disconnect(),X.current={},j.current&&Object.values(j.current).forEach(e=>_e(e,!0))}),[_e]),!t&&ve.current.isValid&&(he.isValid=Q(A.current,x.current)&&H(pe.current.errors));const qe={trigger:Ae,setValue:Object(n.useCallback)((function(e,r,t){We(e,r,t),Le(e)&&xe(),Ne(e),(t||{}).shouldValidate&&Ae(e)}),[We,Ae]),getValues:Object(n.useCallback)(Te,[]),register:Object(n.useCallback)((function(e,r){if(!de)if(G(e))He({name:e},r);else{if(!F(e)||!("name"in e))return r=>r&&He(r,e);He(e,r)}}),[B.current]),unregister:Object(n.useCallback)((function(e){for(const r of p(e)?e:[e])_e(j.current[r],!0)}),[])},ze=Object.assign({renderWatchedInputs:Ne,shouldUnregister:g,removeFieldEventListener:$e,watchInternal:Ie,mode:ae.current,reValidateMode:{isReValidateOnBlur:Fe,isReValidateOnChange:Ve},fieldsRef:j,isWatchAllRef:$,watchFieldsRef:h,resetFieldArrayFunctionRef:Y,useWatchFieldsRef:y,useWatchRenderFunctionsRef:R,fieldArrayDefaultValuesRef:m,validFieldsRef:A,fieldsWithValidationRef:x,fieldArrayNamesRef:te,readFormStateRef:ve,formStateRef:pe,defaultValuesRef:B,shallowFieldsStateRef:X,updateFormState:xe,validateResolver:t?Me:void 0},qe);return Object.assign({watch:function(e,r){return Ie(e,r)},control:ze,formState:ge?new Proxy(he,{get:(e,r)=>{if(r in e)return ve.current[r]=!0,e[r]}}):he,handleSubmit:Ue,reset:Object(n.useCallback)((e,r={})=>{if(be)for(const e of Object.values(j.current))if(e){const{ref:r,options:t}=e,n=fe(r)&&p(t)?t[0].ref:r;if(c(n))try{n.closest("form").reset();break}catch(e){}}j.current={},B.current=Object.assign({},e||B.current),e&&Ne(""),X.current=g?{}:Object.assign({},e)||{},Object.values(Y.current).forEach(e=>Z(e)&&e()),(({errors:e,isDirty:r,isSubmitted:t,touched:n,isValid:c,submitCount:s,dirtyFields:u})=>{c||(A.current={},x.current={}),T.current={},m.current={},h.current=new Set,$.current=!1,xe({submitCount:s?pe.current.submitCount:0,isDirty:!!r&&pe.current.isDirty,isSubmitted:!!t&&pe.current.isSubmitted,isValid:!!c&&pe.current.isValid,dirtyFields:u?pe.current.dirtyFields:{},touched:n?pe.current.touched:{},errors:e?pe.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(r)},[]),clearErrors:Object(n.useCallback)((function(e){e&&(p(e)?e:[e]).forEach(e=>j.current[e]?V(e)?delete pe.current.errors[e]:C(pe.current.errors,e,void 0):q(pe.current.errors,e)),xe({errors:e?pe.current.errors:{}})}),[]),setError:Object(n.useCallback)((function(e,r){const t=(j.current[e]||{}).ref;C(pe.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),xe({isValid:!1,errors:pe.current.errors}),r.shouldFocus&&t&&t.focus&&t.focus()}),[]),errors:he.errors},qe)}
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
***************************************************************************** */function je(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t}const me=Object(n.createContext)(null);me.displayName="RHFContext";const he=()=>Object(n.useContext)(me),ye=e=>{var{children:r}=e,t=je(e,["children"]);return Object(n.createElement)(me.Provider,{value:Object.assign({},t)},r)};var ve=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(r){const t=(16*Math.random()+e)%16|0;return("x"==r?t:3&t|8).toString(16)}))};var pe=(e,r)=>k(r)?[]:p(r)?function(e,r){let t=-1;for(;++t<e.length;)r.indexOf(t)>=0&&delete e[t];return w(e)}(e,r):((e,r)=>[...e.slice(0,r),...e.slice(r+1)])(e,r),Re=(e,r,t)=>p(e)?(k(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[],Fe=(e,r,t)=>{const n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]};function Ve(e,r){return[...p(r)?r:[r||void 0],...e]}function xe(e,r,t){return[...e.slice(0,r),...p(t)?t:[t||void 0],...e.slice(r)]}var Ce=e=>p(e)?Array(e.length).fill(void 0):void 0;function Se(e){if(F(e)){const r={};for(const t in e)r[t]=!0;return[r]}return[!0]}var ke=e=>(p(e)?e:[e]).map(Se).flat();const we=(e,r)=>Object.assign({[r]:ve()},e),Ee=(e,r)=>(p(e)?e:[]).map(e=>we(e,r)),De=({control:e,name:r,keyName:t="id"})=>{const c=he();const s=Object(n.useRef)(-1),{isWatchAllRef:u,resetFieldArrayFunctionRef:i,fieldArrayNamesRef:a,fieldsRef:o,defaultValuesRef:l,removeFieldEventListener:f,formStateRef:d,formStateRef:{current:{dirtyFields:b,touched:g}},shallowFieldsStateRef:O,updateFormState:j,readFormStateRef:m,watchFieldsRef:h,validFieldsRef:y,fieldsWithValidationRef:v,fieldArrayDefaultValuesRef:R,validateResolver:F,renderWatchedInputs:V,getValues:x,shouldUnregister:S}=e||c.control,D=ie(r),A=Object(n.useRef)([...E(R.current,D)?E(R.current,r,[]):E(S?l.current:O.current,r,[])]),[B,W]=Object(n.useState)(Ee(A.current,t)),L=Object(n.useRef)(B),N=()=>E(x()||{},r,L.current).map((e,r)=>Object.assign(Object.assign({},L.current[r]),e));L.current=B,a.current.add(r),E(R.current,D)||C(R.current,D,E(l.current,D));const P=e=>e.map(e=>we(e,t)),T=e=>{if(W(e),m.current.isValid&&F){const t=x();C(t,r,e),F(t)}},M=e=>(m.current.isDirty||m.current.dirtyFields)&&(k(e)||!Q(e.map((e={})=>{var r=t;e[r];return je(e,["symbol"==typeof r?r:r+""])}),E(l.current,r))),$=()=>{for(const e in o.current)ae(e,r)&&o.current[e]&&f(o.current[e],!0)},_=e=>!w(E(e,r,[])).length&&q(e,r),I=(e,t,n=!0,c=!0,s=!1)=>{if(E(O.current,r)){const n=e(E(O.current,r),t.argA,t.argB);c&&C(O.current,r,n)}if(E(R.current,r)){const n=e(E(R.current,r),t.argA,t.argB);c&&C(R.current,r,n),_(R.current)}if(p(E(d.current.errors,r))){const n=e(E(d.current.errors,r),t.argA,t.argB);c&&C(d.current.errors,r,n),_(d.current.errors)}if(m.current.touched&&E(g,r)){const n=e(E(g,r),t.argA,t.argB);c&&C(g,r,n),_(g)}if(m.current.dirtyFields||m.current.isDirty){const n=e(E(b,r,[]),t.argC,t.argD);c&&C(b,r,n),_(b)}s&&m.current.isValid&&!F&&(C(y.current,r,e(E(y.current,r,[]),t.argA)),_(y.current),C(v.current,r,e(E(v.current,r,[]),t.argA)),_(v.current)),j({errors:d.current.errors,dirtyFields:b,isDirty:n,touched:g})},H=e=>{$(),!e&&q(R.current,r),q(O.current,r),A.current=E(e||l.current,r),W(Ee(A.current,t))};return Object(n.useEffect)(()=>{const e=E(R.current,r);if(e&&B.length<e.length&&(e.pop(),C(R.current,r,e)),u.current)j();else if(h){let e=!0;for(const t of h.current)if(t.startsWith(r)){j(),e=!1;break}e&&V(r)}if(s.current>-1)for(const e in o.current){const t=o.current[e];if(e.startsWith(`${r}[${s.current}]`)&&t.ref.focus){t.ref.focus();break}}s.current=-1},[B,r]),Object(n.useEffect)(()=>{const e=i.current,t=a.current;return ie(r)||(e[r]=H),()=>{$(),delete e[r],t.delete(r)}},[]),{swap:Object(n.useCallback)((e,r)=>{const t=N();Fe(t,e,r),$(),T([...t]),I(Fe,{argA:e,argB:r,argC:e,argD:r},M(t),!1)},[r]),move:Object(n.useCallback)((e,r)=>{const t=N();Re(t,e,r),$(),T([...t]),I(Re,{argA:e,argB:r,argC:e,argD:r},M(t),!1)},[r]),prepend:Object(n.useCallback)((e,r=!0)=>{const n=Ce(e);T(Ve(N(),p(e)?P(e):[we(e,t)])),$(),I(Ve,{argA:n,argC:ke(e)}),s.current=r?0:-1},[r]),append:Object(n.useCallback)((e,n=!0)=>{if(T([...L.current,...p(e)?P(e):[we(e,t)]]),m.current.dirtyFields||m.current.isDirty){const t=E(b,r,[]);C(b,r,[...L.current.length>t.length?(Ce(L.current)||[]).map((e,r)=>t[r]):t,...ke(e)]),j({isDirty:!0,dirtyFields:b})}S||(O.current[r]=[...O.current[r]||[],e]),s.current=n?L.current.length:-1},[r]),remove:Object(n.useCallback)(e=>{const r=N();T(pe(r,e)),$(),I(pe,{argA:e,argC:e},M(pe(r,e)),!0,!0)},[r]),insert:Object(n.useCallback)((e,r,n=!0)=>{const c=Ce(r),u=N();T(xe(u,e,p(r)?P(r):[we(r,t)])),$(),I(xe,{argA:e,argB:c,argC:e,argD:ke(r)},M(xe(u,e))),s.current=n?e:-1},[r]),fields:B}};function Ae({control:e,name:r,defaultValue:t}){const c=he();const{useWatchFieldsRef:s,useWatchRenderFunctionsRef:u,watchInternal:i,defaultValuesRef:a}=e||c.control,[o,l]=Object(n.useState)(k(t)?G(r)?E(a.current,r):p(r)?r.reduce((e,r)=>Object.assign(Object.assign({},e),{[r]:E(a.current,r)}),{}):a.current:t),f=Object(n.useRef)(),d=Object(n.useRef)(t),b=Object(n.useCallback)(()=>{const e=i(r,d.current,f.current);l(F(e)?Object.assign({},e):p(e)?[...e]:e)},[l,i,d,r,f]);return Object(n.useEffect)(()=>{const e=f.current=ve(),t=u.current,n=s.current;return n[e]=new Set,t[e]=b,i(r,d.current,e),()=>{delete n[e],delete t[e]}},[r,b,u,s,i,d]),k(o)?t:o}const Be=e=>{var{name:r,rules:t,as:c,render:s,defaultValue:u,control:i,onFocus:a}=e,o=je(e,["name","rules","as","render","defaultValue","control","onFocus"]);const l=he();const{defaultValuesRef:f,setValue:d,register:b,unregister:g,trigger:O,mode:j,reValidateMode:{isReValidateOnBlur:m,isReValidateOnChange:h},formStateRef:{current:{isSubmitted:y,touched:v}},updateFormState:p,readFormStateRef:R,fieldsRef:V,fieldArrayNamesRef:x,shallowFieldsStateRef:S}=i||l.control,w=!oe(x.current,r),D=()=>!k(E(S.current,r))&&w?E(S.current,r):k(u)?E(f.current,r):u,[A,B]=Object(n.useState)(D()),W=Object(n.useRef)(A),L=Object(n.useRef)(a),N=e=>!ue(Object.assign({isBlurEvent:e,isReValidateOnBlur:m,isReValidateOnChange:h,isSubmitted:y,isTouched:!!E(v,r)},j)),P=([e])=>{const r=(e=>J(e)||!F(e.target)||F(e.target)&&!e.type?e:k(e.target.value)?e.target.checked:e.target.value)(e);return B(r),W.current=r,r},T=Object(n.useCallback)(()=>{V.current[r]?V.current[r]=Object.assign({ref:V.current[r].ref},t):(b(Object.defineProperty({name:r,focus:L.current},"value",{set(e){B(e),W.current=e},get:()=>W.current}),t),w&&!E(f.current,r)&&B(D()))},[t,r,b]);Object(n.useEffect)(()=>()=>{!oe(x.current,r)&&g(r)},[g,r,x]),Object(n.useEffect)(()=>{T()},[T]),Object(n.useEffect)(()=>{V.current[r]||(T(),w&&B(D()))});const M=()=>{R.current.touched&&!E(v,r)&&(C(v,r,!0),p({touched:v})),N(!0)&&O(r)},$=(...e)=>d(r,P(e),{shouldValidate:N(),shouldDirty:!0}),_=Object.assign(Object.assign({},o),{onChange:$,onBlur:M,name:r,value:A});return c?Object(n.isValidElement)(c)?Object(n.cloneElement)(c,_):Object(n.createElement)(c,_):s?s({onChange:$,onBlur:M,value:A,name:r}):null}}})}));
//# sourceMappingURL=react-hook-form@6.9.2.js.map