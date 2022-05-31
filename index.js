// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).isTypedArray=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,o=e;var i=function(r){return o.call(r)},a=Object.prototype.hasOwnProperty;var u=function(r,t){return null!=r&&a.call(r,t)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,y=f,l=e;var p=i,v=function(r){var t,n,e;if(null==r)return l.call(r);n=r[y],t=c(r,y);try{r[y]=void 0}catch(t){return l.call(r)}return e=l.call(r),t?r[y]=n:delete r[y],e},A=n()?v:p,d="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=function(){try{return d({},"x",{}),!0}catch(r){return!1}},b=Object.defineProperty,m=Object.prototype,w=m.toString,j=m.__defineGetter__,h=m.__defineSetter__,_=m.__lookupGetter__,g=m.__lookupSetter__;var U=function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===w.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===w.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(_.call(r,t)||g.call(r,t)?(e=r.__proto__,r.__proto__=m,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&j&&j.call(r,t,n.get),a&&h&&h.call(r,t,n.set),r},I=b,E=U,O=s()?I:E;var F=function(r,t,n){O(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},P=F;var S=function(){return/^\s*function\s*([^(]*)/i},T=S;P(T,"REGEXP",S());var C=T,x=A;var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===x(r)};var N=function(r){return null!==r&&"object"==typeof r};P(N,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!B(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(N));var V=N;var G=A,k=C.REGEXP,M=function(r){return V(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var L=function(r){var t,n,e;if(("Object"===(n=G(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=k.exec(e.toString()))return t[1]}return M(r)?"Buffer":n},R=L,X=/./;var z=function(r){return"boolean"==typeof r},D=Boolean.prototype.toString;var Y=A,q=function(r){try{return D.call(r),!0}catch(r){return!1}},H=n();var J=function(r){return"object"==typeof r&&(r instanceof Boolean||(H?q(r):"[object Boolean]"===Y(r)))},K=z,Q=J;var W=P,Z=function(r){return K(r)||Q(r)},$=J;W(Z,"isPrimitive",z),W(Z,"isObject",$);var rr=Z;var tr=function(){return new Function("return this;")()},nr="object"==typeof self?self:null,er="object"==typeof window?window:null,or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ir="object"==typeof or?or:null;module.exports=ir;var ar=rr.isPrimitive,ur=tr,fr=nr,cr=er,yr=r(Object.freeze({__proto__:null}));var lr=function(r){if(arguments.length){if(!ar(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ur()}if(fr)return fr;if(cr)return cr;if(yr)return yr;throw new Error("unexpected error. Unable to resolve global object.")},pr=lr(),vr=pr.document&&pr.document.childNodes,Ar=Int8Array,dr=X,sr=vr,br=Ar;var mr=R;var wr=R;var jr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?mr(r).toLowerCase():t},hr=function(r){return wr(r).toLowerCase()},_r=function(){return"function"==typeof dr||"object"==typeof br||"function"==typeof sr}()?hr:jr;var gr=function(r){return"function"===_r(r)};var Ur=function(){};var Ir=gr,Er=C.REGEXP,Or=function(){return"foo"===Ur.name}();var Fr=function(r){if(!1===Ir(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Or?r.name:Er.exec(r.toString())[1]},Pr=Object.getPrototypeOf;var Sr=function(r){return r.__proto__},Tr=A,Cr=Sr;var xr=function(r){var t=Cr(r);return t||null===t?t:"[object Function]"===Tr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Br=Pr,Nr=xr,Vr=gr(Object.getPrototypeOf)?Br:Nr;var Gr=function(r){return null==r?null:(r=Object(r),Vr(r))},kr=A,Mr="function"==typeof Float64Array;var Lr="function"==typeof Float64Array?Float64Array:null,Rr=function(r){return Mr&&r instanceof Float64Array||"[object Float64Array]"===kr(r)},Xr=Lr;var zr=function(){var r,t;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),r=Rr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Dr="function"==typeof Float64Array?Float64Array:void 0,Yr=function(){throw new Error("not implemented")},qr=zr()?Dr:Yr,Hr=A,Jr="function"==typeof Int8Array;var Kr="function"==typeof Int8Array?Int8Array:null,Qr=function(r){return Jr&&r instanceof Int8Array||"[object Int8Array]"===Hr(r)},Wr=Kr;var Zr="function"==typeof Int8Array?Int8Array:void 0,$r=function(){throw new Error("not implemented")},rt=function(){var r,t;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,128]),r=Qr(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Zr:$r,tt=A,nt="function"==typeof Uint8Array;var et="function"==typeof Uint8Array?Uint8Array:null,ot=function(r){return nt&&r instanceof Uint8Array||"[object Uint8Array]"===tt(r)},it=et;var at="function"==typeof Uint8Array?Uint8Array:void 0,ut=function(){throw new Error("not implemented")},ft=function(){var r,t;if("function"!=typeof it)return!1;try{t=new it(t=[1,3.14,-3.14,256,257]),r=ot(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?at:ut,ct=A,yt="function"==typeof Uint8ClampedArray;var lt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,pt=function(r){return yt&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ct(r)},vt=lt;var At="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,dt=function(){throw new Error("not implemented")},st=function(){var r,t;if("function"!=typeof vt)return!1;try{t=new vt([-1,0,1,3.14,4.99,255,256]),r=pt(t)&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?At:dt,bt=A,mt="function"==typeof Int16Array;var wt="function"==typeof Int16Array?Int16Array:null,jt=function(r){return mt&&r instanceof Int16Array||"[object Int16Array]"===bt(r)},ht=wt;var _t="function"==typeof Int16Array?Int16Array:void 0,gt=function(){throw new Error("not implemented")},Ut=function(){var r,t;if("function"!=typeof ht)return!1;try{t=new ht([1,3.14,-3.14,32768]),r=jt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?_t:gt,It=A,Et="function"==typeof Uint16Array;var Ot="function"==typeof Uint16Array?Uint16Array:null,Ft=function(r){return Et&&r instanceof Uint16Array||"[object Uint16Array]"===It(r)},Pt=Ot;var St="function"==typeof Uint16Array?Uint16Array:void 0,Tt=function(){throw new Error("not implemented")},Ct=function(){var r,t;if("function"!=typeof Pt)return!1;try{t=new Pt(t=[1,3.14,-3.14,65536,65537]),r=Ft(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?St:Tt,xt=A,Bt="function"==typeof Int32Array;var Nt="function"==typeof Int32Array?Int32Array:null,Vt=function(r){return Bt&&r instanceof Int32Array||"[object Int32Array]"===xt(r)},Gt=Nt;var kt="function"==typeof Int32Array?Int32Array:void 0,Mt=function(){throw new Error("not implemented")},Lt=function(){var r,t;if("function"!=typeof Gt)return!1;try{t=new Gt([1,3.14,-3.14,2147483648]),r=Vt(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?kt:Mt,Rt=A,Xt="function"==typeof Uint32Array;var zt="function"==typeof Uint32Array?Uint32Array:null,Dt=function(r){return Xt&&r instanceof Uint32Array||"[object Uint32Array]"===Rt(r)},Yt=zt;var qt="function"==typeof Uint32Array?Uint32Array:void 0,Ht=function(){throw new Error("not implemented")},Jt=function(){var r,t;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,4294967296,4294967297]),r=Dt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qt:Ht,Kt=A,Qt="function"==typeof Float32Array;var Wt=function(r){return Qt&&r instanceof Float32Array||"[object Float32Array]"===Kt(r)},Zt=Number.POSITIVE_INFINITY,$t="function"==typeof Float32Array?Float32Array:null,rn=Wt,tn=Zt,nn=$t;var en,on="function"==typeof Float32Array?Float32Array:void 0,an=function(){throw new Error("not implemented")};en=function(){var r,t;if("function"!=typeof nn)return!1;try{t=new nn([1,3.14,-3.14,5e40]),r=rn(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===tn}catch(t){r=!1}return r}()?on:an;var un=R,fn=Fr,cn=Gr,yn=qr,ln=[qr,en,Lt,Jt,Ut,Ct,rt,ft,st],pn=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],vn=zr()?cn(yn):An;function An(){}return vn="TypedArray"===fn(vn)?vn:An,function(r){var t,n;if("object"!=typeof r||null===r)return!1;if(r instanceof vn)return!0;for(n=0;n<ln.length;n++)if(r instanceof ln[n])return!0;for(;r;){for(t=un(r),n=0;n<pn.length;n++)if(pn[n]===t)return!0;r=cn(r)}return!1}}));
//# sourceMappingURL=index.js.map
