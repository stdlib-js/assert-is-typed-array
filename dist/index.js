"use strict";var i=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var y=i(function(w,n){
var p=require('@stdlib/array-int8/dist'),c=require('@stdlib/array-uint8/dist'),l=require('@stdlib/array-uint8c/dist'),F=require('@stdlib/array-int16/dist'),U=require('@stdlib/array-uint16/dist'),m=require('@stdlib/array-int32/dist'),I=require('@stdlib/array-uint32/dist'),d=require('@stdlib/array-float16/dist'),T=require('@stdlib/array-float32/dist'),h=require('@stdlib/array-float64/dist'),C=[h,T,d,m,I,F,U,p,c,l];n.exports=C
});var u=i(function(D,S){S.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float16Array","Float32Array","Float64Array"]});var s=i(function(E,f){
var g=require('@stdlib/utils-constructor-name/dist'),x=require('@stdlib/utils-function-name/dist'),q=require('@stdlib/utils-get-prototype-of/dist'),N=require('@stdlib/assert-has-float64array-support/dist'),O=require('@stdlib/array-float64/dist'),A=y(),o=u(),t=N()?q(O):v;t=x(t)==="TypedArray"?t:v;function v(){}function R(r){var a,e;if(typeof r!="object"||r===null)return!1;if(r instanceof t)return!0;for(e=0;e<A.length;e++)if(r instanceof A[e])return!0;for(;r;){for(a=g(r),e=0;e<o.length;e++)if(o[e]===a)return!0;r=q(r)}return!1}f.exports=R
});var b=s();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
