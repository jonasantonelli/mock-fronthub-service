define("numeral@2.0.6",[],(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=37)}({13:function(e,r,t){var n,o;
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */void 0===(o="function"==typeof(n=function(){var e,r,t,n,o,i={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function c(e,r){this._input=e,this._value=r}return(e=function(t){var n,o,a,l;if(e.isNumeral(t))n=t.value();else if(0===t||void 0===t)n=0;else if(null===t||r.isNaN(t))n=null;else if("string"==typeof t)if(u.zeroFormat&&t===u.zeroFormat)n=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)n=null;else{for(o in i)if((l="function"==typeof i[o].regexps.unformat?i[o].regexps.unformat():i[o].regexps.unformat)&&t.match(l)){a=i[o].unformat;break}n=(a=a||e._.stringToNumber)(t)}else n=Number(t)||null;return new c(t,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof c},e._=r={numberToFormat:function(r,t,n){var o,i,l,u,c,s,f,m,d=a[e.options.currentLocale],b=!1,h=!1,p="",g="",v=!1;if(r=r||0,l=Math.abs(r),e._.includes(t,"(")?(b=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(s=e._.includes(t,"+")?t.indexOf("+"):r<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),e._.includes(t,"a")&&(i=!!(i=t.match(/a(k|m|b|t)?/))&&i[1],e._.includes(t," a")&&(p=" "),t=t.replace(new RegExp(p+"a[kmbt]?"),""),l>=1e12&&!i||"t"===i?(p+=d.abbreviations.trillion,r/=1e12):l<1e12&&l>=1e9&&!i||"b"===i?(p+=d.abbreviations.billion,r/=1e9):l<1e9&&l>=1e6&&!i||"m"===i?(p+=d.abbreviations.million,r/=1e6):(l<1e6&&l>=1e3&&!i||"k"===i)&&(p+=d.abbreviations.thousand,r/=1e3)),e._.includes(t,"[.]")&&(h=!0,t=t.replace("[.]",".")),u=r.toString().split(".")[0],c=t.split(".")[1],f=t.indexOf(","),o=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,c?(e._.includes(c,"[")?(c=(c=c.replace("]","")).split("["),g=e._.toFixed(r,c[0].length+c[1].length,n,c[1].length)):g=e._.toFixed(r,c.length,n),u=g.split(".")[0],g=e._.includes(g,".")?d.delimiters.decimal+g.split(".")[1]:"",h&&0===Number(g.slice(1))&&(g="")):u=e._.toFixed(r,0,n),p&&!i&&Number(u)>=1e3&&p!==d.abbreviations.trillion)switch(u=String(Number(u)/1e3),p){case d.abbreviations.thousand:p=d.abbreviations.million;break;case d.abbreviations.million:p=d.abbreviations.billion;break;case d.abbreviations.billion:p=d.abbreviations.trillion}if(e._.includes(u,"-")&&(u=u.slice(1),v=!0),u.length<o)for(var _=o-u.length;_>0;_--)u="0"+u;return f>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===t.indexOf(".")&&(u=""),m=u+g+(p||""),b?m=(b&&v?"(":"")+m+(b&&v?")":""):s>=0?m=0===s?(v?"-":"+")+m:m+(v?"-":"+"):v&&(m="-"+m),m},stringToNumber:function(e){var r,t,n,o=a[u.currentLocale],i=e,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)t=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in t=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[r]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){t*=Math.pow(10,l[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)t=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=r(t,n[i],i,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,t){var n=r.multiplier(t);return e>n?e:n}),1)},toFixed:function(e,r,t,n){var o,i,a,l,u=e.toString().split("."),c=r-(n||0);return o=2===u.length?Math.min(Math.max(u[1].length,c),r):c,a=Math.pow(10,o),l=(t(e+"e+"+o)/a).toFixed(o),n>r-o&&(i=new RegExp("\\.?0{1,"+(n-(r-o))+"}$"),l=l.replace(i,"")),l}},e.options=u,e.formats=i,e.locales=a,e.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},e.localeData=function(e){if(!e)return a[u.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in l)u[e]=l[e]},e.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},e.validate=function(r,t){var n,o,i,a,l,u,c,s;if("string"!=typeof r&&(r+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{c=e.localeData(t)}catch(r){c=e.localeData(e.locale())}return i=c.currency.symbol,l=c.abbreviations,n=c.delimiters.decimal,o="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,!(null!==(s=r.match(/^[^\d]+/))&&(r=r.substr(1),s[0]!==i)||null!==(s=r.match(/[^\d]+$/))&&(r=r.slice(0,-1),s[0]!==l.thousand&&s[0]!==l.million&&s[0]!==l.billion&&s[0]!==l.trillion)||(u=new RegExp(o+"{2}"),r.match(/[^\d.,]/g)||(a=r.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(u):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(u)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(u)||!a[1].match(/^\d+$/))))},e.fn=c.prototype={clone:function(){return e(this)},format:function(r,t){var n,o,a,l=this._value,c=r||u.defaultFormat;if(t=t||Math.round,0===l&&null!==u.zeroFormat)o=u.zeroFormat;else if(null===l&&null!==u.nullFormat)o=u.nullFormat;else{for(n in i)if(c.match(i[n].regexps.format)){a=i[n].format;break}o=(a=a||e._.numberToFormat)(l,c,t)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([this._value,e],(function(e,r,n,o){return e+Math.round(t*r)}),0)/t,this},subtract:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([e],(function(e,r,n,o){return e-Math.round(t*r)}),Math.round(this._value*t))/t,this},multiply:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)*Math.round(t*i)/Math.round(i*i)}),1),this},divide:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)/Math.round(t*i)})),this},difference:function(r){return Math.abs(e(this._value).subtract(r).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(r,t,n){var o,i=e._.includes(t," BPS")?" ":"";return r*=1e4,t=t.replace(/\s?BPS/,""),o=e._.numberToFormat(r,t,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(r){return+(1e-4*e._.stringToNumber(r)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},o="("+(o=(t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(r,o,i){var a,l,u,c=e._.includes(o,"ib")?n:t,s=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=c.suffixes.length;a++)if(l=Math.pow(c.base,a),u=Math.pow(c.base,a+1),null===r||0===r||r>=l&&r<u){s+=c.suffixes[a],l>0&&(r/=l);break}return e._.numberToFormat(r,o,i)+s},unformat:function(r){var o,i,a=e._.stringToNumber(r);if(a){for(o=t.suffixes.length-1;o>=0;o--){if(e._.includes(r,t.suffixes[o])){i=Math.pow(t.base,o);break}if(e._.includes(r,n.suffixes[o])){i=Math.pow(n.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(r,t,n){var o,i,a=e.locales[e.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),o=e._.numberToFormat(r,t,n),r>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):r<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":o=i===l.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(l.after.length-(1+i)));break;case" ":o=i===l.after.length-1?o+" ":e._.insert(o," ",-(l.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(r,t,n){var o=("number"!=typeof r||e._.isNaN(r)?"0e+0":r.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),t,n)+"e"+o[1]},unformat:function(r){var t=e._.includes(r,"e+")?r.split("e+"):r.split("e-"),n=Number(t[0]),o=Number(t[1]);return o=e._.includes(r,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],(function(r,t,n,o){var i=e._.correctionFactor(r,t);return r*i*(t*i)/(i*i)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(r,t,n){var o=e.locales[e.options.currentLocale],i=e._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),i+=o.ordinal(r),e._.numberToFormat(r,t,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(r,t,n){var o,i=e._.includes(t," %")?" ":"";return e.options.scalePercentBy100&&(r*=100),t=t.replace(/\s?\%/,""),o=e._.numberToFormat(r,t,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(r){var t=e._.stringToNumber(r);return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}}),e})?n.call(r,t,r,e):n)||(e.exports=o)},37:function(e,r,t){"use strict";t.r(r);var n=t(13),o=t.n(n);for(var i in t.d(r,"default",(function(){return o.a})),n)["default","default"].indexOf(i)<0&&function(e){t.d(r,e,(function(){return n[e]}))}(i)}})}));
//# sourceMappingURL=numeral@2.0.6.js.map