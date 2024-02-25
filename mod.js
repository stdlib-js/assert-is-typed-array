// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return r&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"";var a=t()?function(r){var t,o,a,c,f;if(null==r)return n.call(r);o=r[i],f=i,t=null!=(c=r)&&e.call(c,f);try{r[i]=void 0}catch(t){return n.call(r)}return a=n.call(r),t?r[i]=o:delete r[i],a}:function(r){return n.call(r)},c="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function p(r,t,n){var e=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+l(o):l(o)+r,e&&(r="-"+r)),r}var s=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function d(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!u(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=p(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=p(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===y.call(r.specifier)?y.call(n):s.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var v=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,w=String.prototype.replace,b=/e\+(\d)$/,A=/e-(\d)$/,m=/^(\d+)$/,j=/^(\d+)e/,I=/\.0$/,E=/\.0*e/,U=/(\..*[^0])0*e/;function _(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":v(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=w.call(n,U,"$1e"),n=w.call(n,E,"e"),n=w.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=w.call(n,b,"e+0$1"),n=w.call(n,A,"e-0$1"),r.alternate&&(n=w.call(n,m,"$1."),n=w.call(n,j,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===h.call(r.specifier)?h.call(n):g.call(n)}function F(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var S=String.fromCharCode,x=isNaN,k=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,n,e,o,i,a,c,f,u,l,s,y,v;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,f=0;f<r.length;f++)if(e=r[f],"string"==typeof e)a+=e;else{if(t=void 0!==e.precision,!(e=O(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,x(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,x(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=d(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!x(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=x(i)?String(e.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=_(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=p(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,s=e.width,y=e.padRight,v=void 0,(v=s-l.length)<0?l:l=y?l+F(v):F(v)+l)),a+=e.arg||"",c+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function P(r){var t,n,e,o;for(n=[],o=0,e=C.exec(r);e;)(t=r.slice(o,C.lastIndex-e[0].length)).length&&n.push(t),n.push(V(e)),o=C.lastIndex,e=C.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function $(r){var t,n;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[P(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return T.apply(null,t)}var N,B=Object.prototype,R=B.toString,L=B.__defineGetter__,G=B.__defineSetter__,Z=B.__lookupGetter__,M=B.__lookupSetter__;N=function(){try{return c({},"x",{}),!0}catch(r){return!1}}()?f:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===R.call(n))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(Z.call(r,t)||M.call(r,t)?(e=r.__proto__,r.__proto__=B,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,t,n.get),a&&G&&G.call(r,t,n.set),r};var W=N;function X(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function z(){return/^\s*function\s*([^(]*)/i}var Y=/^\s*function\s*([^(]*)/i;X(z,"REGEXP",Y);var q=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)};function D(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=a(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Y.exec(e.toString()))return t[1]}return D(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}X(D,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(D));var J=/./;function K(r){return"boolean"==typeof r}var Q=Boolean,rr=Boolean.prototype.toString;var tr=t();function nr(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===a(r)))}function er(r){return K(r)||nr(r)}X(er,"isPrimitive",K),X(er,"isObject",nr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ar?ar:null,fr="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!K(r))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(fr)return fr;if(or)return or;if(ir)return ir;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=ur.document&&ur.document.childNodes,pr=Int8Array;var sr="function"==typeof J||"object"==typeof pr||"function"==typeof lr?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function yr(r){return"function"===sr(r)}function dr(){}var vr="foo"===dr.name;var gr,hr=Object,wr=Object.getPrototypeOf;gr=yr(Object.getPrototypeOf)?wr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===a(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=gr;function Ar(r){return null==r?null:(r=hr(r),br(r))}var mr="function"==typeof Float64Array;var jr="function"==typeof Float64Array?Float64Array:null;function Ir(){var r,t,n;if("function"!=typeof jr)return!1;try{t=new jr([1,3.14,-3.14,NaN]),n=t,r=(mr&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}var Er="function"==typeof Float64Array?Float64Array:void 0;var Ur=Ir()?Er:function(){throw new Error("not implemented")},_r="function"==typeof Int8Array;var Fr="function"==typeof Int8Array?Int8Array:null;var Sr="function"==typeof Int8Array?Int8Array:void 0;var xr=function(){var r,t,n;if("function"!=typeof Fr)return!1;try{t=new Fr([1,3.14,-3.14,128]),n=t,r=(_r&&n instanceof Int8Array||"[object Int8Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},kr="function"==typeof Uint8Array;var Or="function"==typeof Uint8Array?Uint8Array:null;var Tr="function"==typeof Uint8Array?Uint8Array:void 0;var Cr=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or(t=[1,3.14,-3.14,256,257]),n=t,r=(kr&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},Vr="function"==typeof Uint8ClampedArray;var Pr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var $r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Nr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr([-1,0,1,3.14,4.99,255,256]),n=t,r=(Vr&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Br="function"==typeof Int16Array;var Rr="function"==typeof Int16Array?Int16Array:null;var Lr="function"==typeof Int16Array?Int16Array:void 0;var Gr=function(){var r,t,n;if("function"!=typeof Rr)return!1;try{t=new Rr([1,3.14,-3.14,32768]),n=t,r=(Br&&n instanceof Int16Array||"[object Int16Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Zr="function"==typeof Uint16Array;var Mr="function"==typeof Uint16Array?Uint16Array:null;var Wr="function"==typeof Uint16Array?Uint16Array:void 0;var Xr=function(){var r,t,n;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Zr&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},zr="function"==typeof Int32Array;var Yr="function"==typeof Int32Array?Int32Array:null;var qr="function"==typeof Int32Array?Int32Array:void 0;var Dr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,2147483648]),n=t,r=(zr&&n instanceof Int32Array||"[object Int32Array]"===a(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")},Hr="function"==typeof Uint32Array;var Jr="function"==typeof Uint32Array?Uint32Array:null;var Kr="function"==typeof Uint32Array?Uint32Array:void 0;var Qr=function(){var r,t,n;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Hr&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")},rt="function"==typeof Float32Array;var tt=Number.POSITIVE_INFINITY,nt="function"==typeof Float32Array?Float32Array:null;var et="function"==typeof Float32Array?Float32Array:void 0;var ot=[Ur,function(){var r,t,n;if("function"!=typeof nt)return!1;try{t=new nt([1,3.14,-3.14,5e40]),n=t,r=(rt&&n instanceof Float32Array||"[object Float32Array]"===a(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===tt}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")},Dr,Qr,Gr,Xr,xr,Cr,Nr],it=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],at=Ir()?Ar(Ur):ct;function ct(){}function ft(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof at)return!0;for(n=0;n<ot.length;n++)if(r instanceof ot[n])return!0;for(;r;){for(t=H(r),n=0;n<it.length;n++)if(it[n]===t)return!0;r=Ar(r)}return!1}at="TypedArray"===function(r){if(!1===yr(r))throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return vr?r.name:Y.exec(r.toString())[1]}(at)?at:ct;export{ft as default};
//# sourceMappingURL=mod.js.map
