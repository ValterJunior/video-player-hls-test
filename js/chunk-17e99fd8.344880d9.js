(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17e99fd8"],{"320c":function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach((function(e){l[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(a){return!1}}e.exports=o()?Object.assign:function(e,t){for(var n,o,i=u(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]),n)l.call(n,s)&&(i[s]=n[s]);if(r){o=r(n);for(var f=0;f<o.length;f++)a.call(n,o[f])&&(i[o[f]]=n[o[f]])}}return i}},4029:function(e,t,n){"use strict";e.exports=n("fb07")},"8bc8":function(e,t,n){"use strict";function r(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}}r(),e.exports=n("ca5d")},ab5b:function(e,t,n){"use strict";e.exports=n("be24")},be24:function(e,t,n){"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("320c"),l=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,o=60110,i=60112;t.Suspense=60113;var c=60115,s=60116;if("function"===typeof Symbol&&Symbol.for){var f=Symbol.for;l=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),u=f("react.provider"),o=f("react.context"),i=f("react.forward_ref"),t.Suspense=f("react.suspense"),c=f("react.memo"),s=f("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function p(e){return null===e||"object"!==typeof e?null:(e=d&&e[d]||e["@@iterator"],"function"===typeof e?e:null)}function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||v}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=y.prototype=new b;k.constructor=y,r(k,g.prototype),k.isPureReactComponent=!0;var w={current:null},E=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,a={},u=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(u=""+t.key),t)E.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var c=Array(i),s=0;s<i;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:l,type:e,key:u,ref:o,props:a,_owner:w.current}}function O(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function x(e){return"object"===typeof e&&null!==e&&e.$$typeof===l}function N(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}var P=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?N(""+e.key):t.toString(36)}function T(e,t,n,r,u){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case a:i=!0}}if(i)return i=e,u=u(i),e=""===r?"."+_(i,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),T(u,t,n,"",(function(e){return e}))):null!=u&&(x(u)&&(u=O(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){o=e[c];var s=r+_(o,c);i+=T(o,t,n,s,u)}else if(s=p(e),"function"===typeof s)for(e=s.call(e),c=0;!(o=e.next()).done;)o=o.value,s=r+_(o,c++),i+=T(o,t,n,s,u);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function L(e,t,n){if(null==e)return e;var r=[],l=0;return T(e,r,"","",(function(e){return t.call(n,e,l++)})),r}function M(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var j={current:null};function R(){var e=j.current;if(null===e)throw Error(m(321));return e}var z={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(m(143));return e}},t.Component=g,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(m(267,e));var a=r({},e.props),u=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)E.call(t,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:l,type:e.type,key:u,ref:o,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},ca5d:function(e,t,n){"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("ab5b"),l=n("320c"),a=n("4029");function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(u(227));var o=new Set,i={};function c(e,t){s(e,t),s(e+"Capture",t)}function s(e,t){for(i[e]=t,e=0;e<t.length;e++)o.add(t[e])}var f=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p=Object.prototype.hasOwnProperty,m={},v={};function h(e){return!!p.call(v,e)||!p.call(m,e)&&(d.test(e)?v[e]=!0:(m[e]=!0,!1))}function g(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),"data-"!==e&&"aria-"!==e));default:return!1}}function b(e,t,n,r){if(null===t||"undefined"===typeof t||g(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function y(e,t,n,r,l,a,u){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){k[e]=new y(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];k[t]=new y(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){k[e]=new y(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){k[e]=new y(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){k[e]=new y(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){k[e]=new y(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){k[e]=new y(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){k[e]=new y(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){k[e]=new y(e,5,!1,e.toLowerCase(),null,!1,!1)}));var w=/[\-:]([a-z])/g;function E(e){return e[1].toUpperCase()}function S(e,t,n,r){var l=k.hasOwnProperty(t)?k[t]:null,a=null!==l?0===l.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1]));a||(b(t,n,l,r)&&(n=null),r||null===l?h(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=null===n?3!==l.type&&"":n:(t=l.attributeName,r=l.attributeNamespace,null===n?e.removeAttribute(t):(l=l.type,n=3===l||4===l&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(w,E);k[t]=new y(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(w,E);k[t]=new y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(w,E);k[t]=new y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){k[e]=new y(e,1,!1,e.toLowerCase(),null,!1,!1)})),k.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){k[e]=new y(e,1,!1,e.toLowerCase(),null,!0,!0)}));var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=60103,x=60106,N=60107,P=60108,_=60114,T=60109,L=60110,M=60112,j=60113,R=60120,z=60115,I=60116,D=60121,A=60128,F=60129,U=60130,V=60131;if("function"===typeof Symbol&&Symbol.for){var B=Symbol.for;O=B("react.element"),x=B("react.portal"),N=B("react.fragment"),P=B("react.strict_mode"),_=B("react.profiler"),T=B("react.provider"),L=B("react.context"),M=B("react.forward_ref"),j=B("react.suspense"),R=B("react.suspense_list"),z=B("react.memo"),I=B("react.lazy"),D=B("react.block"),B("react.scope"),A=B("react.opaque.id"),F=B("react.debug_trace_mode"),U=B("react.offscreen"),V=B("react.legacy_hidden")}var Q,H="function"===typeof Symbol&&Symbol.iterator;function W(e){return null===e||"object"!==typeof e?null:(e=H&&e[H]||e["@@iterator"],"function"===typeof e?e:null)}function $(e){if(void 0===Q)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Q=t&&t[1]||""}return"\n"+Q+e}var q=!1;function K(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(i){var r=i}Reflect.construct(e,[],t)}else{try{t.call()}catch(i){r=i}e.call(t.prototype)}else{try{throw Error()}catch(i){r=i}e()}}catch(i){if(i&&r&&"string"===typeof i.stack){for(var l=i.stack.split("\n"),a=r.stack.split("\n"),u=l.length-1,o=a.length-1;1<=u&&0<=o&&l[u]!==a[o];)o--;for(;1<=u&&0<=o;u--,o--)if(l[u]!==a[o]){if(1!==u||1!==o)do{if(u--,o--,0>o||l[u]!==a[o])return"\n"+l[u].replace(" at new "," at ")}while(1<=u&&0<=o);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function Y(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 22:return e=K(e.type._render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function G(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case N:return"Fragment";case x:return"Portal";case _:return"Profiler";case P:return"StrictMode";case j:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case L:return(e.displayName||"Context")+".Consumer";case T:return(e._context.displayName||"Context")+".Provider";case M:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case z:return G(e.type);case D:return G(e._render);case I:t=e._payload,e=e._init;try{return G(e(t))}catch(n){}}return null}function X(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function J(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Z(e){var t=J(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ee(e){e._valueTracker||(e._valueTracker=Z(e))}function te(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=J(e)?e.checked?"true":"false":e.value),e=r,e!==n&&(t.setValue(e),!0)}function ne(e){if(e=e||("undefined"!==typeof document?document:void 0),"undefined"===typeof e)return null;try{return e.activeElement||e.body}catch(t){return e.body}}function re(e,t){var n=t.checked;return l({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function le(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=X(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ae(e,t){t=t.checked,null!=t&&S(e,"checked",t,!1)}function ue(e,t){ae(e,t);var n=X(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&ie(e,t.type,X(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function oe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,""!==n&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ie(e,t,n){"number"===t&&ne(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ce(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}function se(e,t){return e=l({children:void 0},t),(t=ce(t.children))&&(e.children=t),e}function fe(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+X(n),t=null,l=0;l<e.length;l++){if(e[l].value===n)return e[l].selected=!0,void(r&&(e[l].defaultSelected=!0));null!==t||e[l].disabled||(t=e[l])}null!==t&&(t.selected=!0)}}function de(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(u(91));return l({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(u(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(u(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:X(n)}}function me(e,t){var n=X(t.value),r=X(t.defaultValue);null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ve(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var he={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ge(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function be(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ge(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ye,ke=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction((function(){return e(t,n,r,l)}))}:e}((function(e,t){if(e.namespaceURI!==he.svg||"innerHTML"in e)e.innerHTML=t;else{for(ye=ye||document.createElement("div"),ye.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ye.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function we(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ee={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Se=["Webkit","ms","Moz","O"];function Ce(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||Ee.hasOwnProperty(e)&&Ee[e]?(""+t).trim():t+"px"}function Oe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),l=Ce(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}Object.keys(Ee).forEach((function(e){Se.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ee[t]=Ee[e]}))}));var xe=l({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ne(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(u(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(u(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(u(62))}}function Pe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function _e(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Te=null,Le=null,Me=null;function je(e){if(e=Ol(e)){if("function"!==typeof Te)throw Error(u(280));var t=e.stateNode;t&&(t=Nl(t),Te(e.stateNode,e.type,t))}}function Re(e){Le?Me?Me.push(e):Me=[e]:Le=e}function ze(){if(Le){var e=Le,t=Me;if(Me=Le=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Ie(e,t){return e(t)}function De(e,t,n,r,l){return e(t,n,r,l)}function Ae(){}var Fe=Ie,Ue=!1,Ve=!1;function Be(){null===Le&&null===Me||(Ae(),ze())}function Qe(e,t,n){if(Ve)return e(t,n);Ve=!0;try{return Fe(e,t,n)}finally{Ve=!1,Be()}}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=Nl(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!("button"===e||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(u(231,t,typeof n));return n}var We=!1;if(f)try{var $e={};Object.defineProperty($e,"passive",{get:function(){We=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch(Fc){We=!1}function qe(e,t,n,r,l,a,u,o,i){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(s){this.onError(s)}}var Ke=!1,Ye=null,Ge=!1,Xe=null,Je={onError:function(e){Ke=!0,Ye=e}};function Ze(e,t,n,r,l,a,u,o,i){Ke=!1,Ye=null,qe.apply(Je,arguments)}function et(e,t,n,r,l,a,o,i,c){if(Ze.apply(this,arguments),Ke){if(!Ke)throw Error(u(198));var s=Ye;Ke=!1,Ye=null,Ge||(Ge=!0,Xe=s)}}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{t=e,0!==(1026&t.flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(e=e.alternate,null!==e&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(u(188))}function lt(e){var t=e.alternate;if(!t){if(t=tt(e),null===t)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(null===l)break;var a=l.alternate;if(null===a){if(r=l.return,null!==r){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return rt(l),e;if(a===r)return rt(l),t;a=a.sibling}throw Error(u(188))}if(n.return!==r.return)n=l,r=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,r=a;break}if(i===r){o=!0,r=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,r=l;break}if(i===r){o=!0,r=a,n=l;break}i=i.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(3!==n.tag)throw Error(u(188));return n.stateNode.current===n?e:t}function at(e){if(e=lt(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ut(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var ot,it,ct,st,ft=!1,dt=[],pt=null,mt=null,vt=null,ht=new Map,gt=new Map,bt=[],yt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kt(e,t,n,r,l){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:l,targetContainers:[r]}}function wt(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gt.delete(t.pointerId)}}function Et(e,t,n,r,l,a){return null===e||e.nativeEvent!==a?(e=kt(t,n,r,l,a),null!==t&&(t=Ol(t),null!==t&&it(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==l&&-1===t.indexOf(l)&&t.push(l),e)}function St(e,t,n,r,l){switch(t){case"focusin":return pt=Et(pt,e,t,n,r,l),!0;case"dragenter":return mt=Et(mt,e,t,n,r,l),!0;case"mouseover":return vt=Et(vt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return ht.set(a,Et(ht.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,gt.set(a,Et(gt.get(a)||null,e,t,n,r,l)),!0}return!1}function Ct(e){var t=Cl(e.target);if(null!==t){var n=tt(t);if(null!==n)if(t=n.tag,13===t){if(t=nt(n),null!==t)return e.blockedOn=t,void st(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){ct(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ot(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=fn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return t=Ol(n),null!==t&&it(t),e.blockedOn=n,!1;t.shift()}return!0}function xt(e,t,n){Ot(e)&&n.delete(t)}function Nt(){for(ft=!1;0<dt.length;){var e=dt[0];if(null!==e.blockedOn){e=Ol(e.blockedOn),null!==e&&ot(e);break}for(var t=e.targetContainers;0<t.length;){var n=fn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&dt.shift()}null!==pt&&Ot(pt)&&(pt=null),null!==mt&&Ot(mt)&&(mt=null),null!==vt&&Ot(vt)&&(vt=null),ht.forEach(xt),gt.forEach(xt)}function Pt(e,t){e.blockedOn===t&&(e.blockedOn=null,ft||(ft=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Nt)))}function _t(e){function t(t){return Pt(t,e)}if(0<dt.length){Pt(dt[0],e);for(var n=1;n<dt.length;n++){var r=dt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==pt&&Pt(pt,e),null!==mt&&Pt(mt,e),null!==vt&&Pt(vt,e),ht.forEach(t),gt.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],null===n.blockedOn);)Ct(n),null===n.blockedOn&&bt.shift()}function Tt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lt={animationend:Tt("Animation","AnimationEnd"),animationiteration:Tt("Animation","AnimationIteration"),animationstart:Tt("Animation","AnimationStart"),transitionend:Tt("Transition","TransitionEnd")},Mt={},jt={};function Rt(e){if(Mt[e])return Mt[e];if(!Lt[e])return e;var t,n=Lt[e];for(t in n)if(n.hasOwnProperty(t)&&t in jt)return Mt[e]=n[t];return e}f&&(jt=document.createElement("div").style,"AnimationEvent"in window||(delete Lt.animationend.animation,delete Lt.animationiteration.animation,delete Lt.animationstart.animation),"TransitionEvent"in window||delete Lt.transitionend.transition);var zt=Rt("animationend"),It=Rt("animationiteration"),Dt=Rt("animationstart"),At=Rt("transitionend"),Ft=new Map,Ut=new Map,Vt=["abort","abort",zt,"animationEnd",It,"animationIteration",Dt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",At,"transitionEnd","waiting","waiting"];function Bt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],l=e[n+1];l="on"+(l[0].toUpperCase()+l.slice(1)),Ut.set(r,t),Ft.set(r,l),c(l,[r])}}var Qt=a.unstable_now;Qt();var Ht=8;function Wt(e){if(0!==(1&e))return Ht=15,1;if(0!==(2&e))return Ht=14,2;if(0!==(4&e))return Ht=13,4;var t=24&e;return 0!==t?(Ht=12,t):0!==(32&e)?(Ht=11,32):(t=192&e,0!==t?(Ht=10,t):0!==(256&e)?(Ht=9,256):(t=3584&e,0!==t?(Ht=8,t):0!==(4096&e)?(Ht=7,4096):(t=4186112&e,0!==t?(Ht=6,t):(t=62914560&e,0!==t?(Ht=5,t):67108864&e?(Ht=4,67108864):0!==(134217728&e)?(Ht=3,134217728):(t=805306368&e,0!==t?(Ht=2,t):0!==(1073741824&e)?(Ht=1,1073741824):(Ht=8,e))))))}function $t(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function qt(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(u(358,e))}}function Kt(e,t){var n=e.pendingLanes;if(0===n)return Ht=0;var r=0,l=0,a=e.expiredLanes,u=e.suspendedLanes,o=e.pingedLanes;if(0!==a)r=a,l=Ht=15;else if(a=134217727&n,0!==a){var i=a&~u;0!==i?(r=Wt(i),l=Ht):(o&=a,0!==o&&(r=Wt(o),l=Ht))}else a=n&~u,0!==a?(r=Wt(a),l=Ht):0!==o&&(r=Wt(o),l=Ht);if(0===r)return 0;if(r=31-en(r),r=n&((0>r?0:1<<r)<<1)-1,0!==t&&t!==r&&0===(t&u)){if(Wt(t),l<=Ht)return t;Ht=l}if(t=e.entangledLanes,0!==t)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),l=1<<n,r|=e[n],t&=~l;return r}function Yt(e){return e=-1073741825&e.pendingLanes,0!==e?e:1073741824&e?1073741824:0}function Gt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Xt(24&~t),0===e?Gt(10,t):e;case 10:return e=Xt(192&~t),0===e?Gt(8,t):e;case 8:return e=Xt(3584&~t),0===e&&(e=Xt(4186112&~t),0===e&&(e=512)),e;case 2:return t=Xt(805306368&~t),0===t&&(t=268435456),t}throw Error(u(358,e))}function Xt(e){return e&-e}function Jt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-en(t),e[t]=n}var en=Math.clz32?Math.clz32:rn,tn=Math.log,nn=Math.LN2;function rn(e){return 0===e?32:31-(tn(e)/nn|0)|0}var ln=a.unstable_UserBlockingPriority,an=a.unstable_runWithPriority,un=!0;function on(e,t,n,r){Ue||Ae();var l=sn,a=Ue;Ue=!0;try{De(l,e,t,n,r)}finally{(Ue=a)||Be()}}function cn(e,t,n,r){an(ln,sn.bind(null,e,t,n,r))}function sn(e,t,n,r){var l;if(un)if((l=0===(4&t))&&0<dt.length&&-1<yt.indexOf(e))e=kt(null,e,t,n,r),dt.push(e);else{var a=fn(e,t,n,r);if(null===a)l&&wt(e,r);else{if(l){if(-1<yt.indexOf(e))return e=kt(a,e,t,n,r),void dt.push(e);if(St(a,e,t,n,r))return;wt(e,r)}nl(e,t,r,null,n)}}}function fn(e,t,n,r){var l=_e(r);if(l=Cl(l),null!==l){var a=tt(l);if(null===a)l=null;else{var u=a.tag;if(13===u){if(l=nt(a),null!==l)return l;l=null}else if(3===u){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;l=null}else a!==l&&(l=null)}}return nl(e,t,r,l,n),null}var dn=null,pn=null,mn=null;function vn(){if(mn)return mn;var e,t,n=pn,r=n.length,l="value"in dn?dn.value:dn.textContent,a=l.length;for(e=0;e<r&&n[e]===l[e];e++);var u=r-e;for(t=1;t<=u&&n[r-t]===l[a-t];t++);return mn=l.slice(e,1<t?1-t:void 0)}function hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,0===e&&13===t&&(e=13)):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function bn(){return!1}function yn(e){function t(t,n,r,l,a){for(var u in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=l,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(null!=l.defaultPrevented?l.defaultPrevented:!1===l.returnValue)?gn:bn,this.isPropagationStopped=bn,this}return l(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var kn,wn,En,Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=yn(Sn),On=l({},Sn,{view:0,detail:0}),xn=yn(On),Nn=l({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&"mousemove"===e.type?(kn=e.screenX-En.screenX,wn=e.screenY-En.screenY):wn=kn=0,En=e),kn)},movementY:function(e){return"movementY"in e?e.movementY:wn}}),Pn=yn(Nn),_n=l({},Nn,{dataTransfer:0}),Tn=yn(_n),Ln=l({},On,{relatedTarget:0}),Mn=yn(Ln),jn=l({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rn=yn(jn),zn=l({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),In=yn(zn),Dn=l({},Sn,{data:0}),An=yn(Dn),Fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Vn[e])&&!!t[e]}function Qn(){return Bn}var Hn=l({},On,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?(e=hn(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?Un[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qn,charCode:function(e){return"keypress"===e.type?hn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?hn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Wn=yn(Hn),$n=l({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qn=yn($n),Kn=l({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qn}),Yn=yn(Kn),Gn=l({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xn=yn(Gn),Jn=l({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zn=yn(Jn),er=[9,13,27,32],tr=f&&"CompositionEvent"in window,nr=null;f&&"documentMode"in document&&(nr=document.documentMode);var rr=f&&"TextEvent"in window&&!nr,lr=f&&(!tr||nr&&8<nr&&11>=nr),ar=String.fromCharCode(32),ur=!1;function or(e,t){switch(e){case"keyup":return-1!==er.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ir(e){return e=e.detail,"object"===typeof e&&"data"in e?e.data:null}var cr=!1;function sr(e,t){switch(e){case"compositionend":return ir(t);case"keypress":return 32!==t.which?null:(ur=!0,ar);case"textInput":return e=t.data,e===ar&&ur?null:e;default:return null}}function fr(e,t){if(cr)return"compositionend"===e||!tr&&or(e,t)?(e=vn(),mn=pn=dn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lr&&"ko"!==t.locale?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!dr[e.type]:"textarea"===t}function mr(e,t,n,r){Re(r),t=ll(t,"onChange"),0<t.length&&(n=new Cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,hr=null;function gr(e){Gr(e,0)}function br(e){var t=xl(e);if(te(t))return e}function yr(e,t){if("change"===e)return t}var kr=!1;if(f){var wr;if(f){var Er="oninput"in document;if(!Er){var Sr=document.createElement("div");Sr.setAttribute("oninput","return;"),Er="function"===typeof Sr.oninput}wr=Er}else wr=!1;kr=wr&&(!document.documentMode||9<document.documentMode)}function Cr(){vr&&(vr.detachEvent("onpropertychange",Or),hr=vr=null)}function Or(e){if("value"===e.propertyName&&br(hr)){var t=[];if(mr(t,hr,e,_e(e)),e=gr,Ue)e(t);else{Ue=!0;try{Ie(e,t)}finally{Ue=!1,Be()}}}}function xr(e,t,n){"focusin"===e?(Cr(),vr=t,hr=n,vr.attachEvent("onpropertychange",Or)):"focusout"===e&&Cr()}function Nr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return br(hr)}function Pr(e,t){if("click"===e)return br(t)}function _r(e,t){if("input"===e||"change"===e)return br(t)}function Tr(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t}var Lr="function"===typeof Object.is?Object.is:Tr,Mr=Object.prototype.hasOwnProperty;function jr(e,t){if(Lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Mr.call(t,n[r])||!Lr(e[n[r]],t[n[r]]))return!1;return!0}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n,r=Rr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rr(r)}}function Ir(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Ir(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Dr(){for(var e=window,t=ne();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;e=t.contentWindow,t=ne(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Fr=f&&"documentMode"in document&&11>=document.documentMode,Ur=null,Vr=null,Br=null,Qr=!1;function Hr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Qr||null==Ur||Ur!==ne(r)||(r=Ur,"selectionStart"in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=ll(Vr,"onSelect"),0<r.length&&(t=new Cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}Bt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Bt(Vt,2);for(var Wr="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),$r=0;$r<Wr.length;$r++)Ut.set(Wr[$r],0);s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kr=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Yr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,et(r,t,void 0,e),e.currentTarget=null}function Gr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var o=r[u],i=o.instance,c=o.currentTarget;if(o=o.listener,i!==a&&l.isPropagationStopped())break e;Yr(l,o,c),a=i}else for(u=0;u<r.length;u++){if(o=r[u],i=o.instance,c=o.currentTarget,o=o.listener,i!==a&&l.isPropagationStopped())break e;Yr(l,o,c),a=i}}}if(Ge)throw e=Xe,Ge=!1,Xe=null,e}function Xr(e,t){var n=Pl(t),r=e+"__bubble";n.has(r)||(tl(t,e,2,!1),n.add(r))}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){e[Jr]||(e[Jr]=!0,o.forEach((function(t){Kr.has(t)||el(t,!1,e,null),el(t,!0,e,null)})))}function el(e,t,n,r){var l=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=n;if("selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Kr.has(e)){if("scroll"!==e)return;l|=2,a=r}var u=Pl(a),o=e+"__"+(t?"capture":"bubble");u.has(o)||(t&&(l|=4),tl(a,e,l,t),u.add(o))}function tl(e,t,n,r){var l=Ut.get(t);switch(void 0===l?2:l){case 0:l=on;break;case 1:l=cn;break;default:l=sn}n=l.bind(null,t,n,e),l=void 0,!We||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(l=!0),r?void 0!==l?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):void 0!==l?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,l){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var u=r.tag;if(3===u||4===u){var o=r.stateNode.containerInfo;if(o===l||8===o.nodeType&&o.parentNode===l)break;if(4===u)for(u=r.return;null!==u;){var i=u.tag;if((3===i||4===i)&&(i=u.stateNode.containerInfo,i===l||8===i.nodeType&&i.parentNode===l))return;u=u.return}for(;null!==o;){if(u=Cl(o),null===u)return;if(i=u.tag,5===i||6===i){r=a=u;continue e}o=o.parentNode}}r=r.return}Qe((function(){var r=a,l=_e(n),u=[];e:{var o=Ft.get(e);if(void 0!==o){var i=Cn,c=e;switch(e){case"keypress":if(0===hn(n))break e;case"keydown":case"keyup":i=Wn;break;case"focusin":c="focus",i=Mn;break;case"focusout":c="blur",i=Mn;break;case"beforeblur":case"afterblur":i=Mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":i=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":i=Tn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":i=Yn;break;case zt:case It:case Dt:i=Rn;break;case At:i=Xn;break;case"scroll":i=xn;break;case"wheel":i=Zn;break;case"copy":case"cut":case"paste":i=In;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":i=qn}var s=0!==(4&t),f=!s&&"scroll"===e,d=s?null!==o?o+"Capture":null:o;s=[];for(var p,m=r;null!==m;){p=m;var v=p.stateNode;if(5===p.tag&&null!==v&&(p=v,null!==d&&(v=He(m,d),null!=v&&s.push(rl(m,v,p)))),f)break;m=m.return}0<s.length&&(o=new i(o,c,null,n,l),u.push({event:o,listeners:s}))}}if(0===(7&t)){if(o="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e,(!o||0!==(16&t)||!(c=n.relatedTarget||n.fromElement)||!Cl(c)&&!c[El])&&(i||o)&&(o=l.window===l?l:(o=l.ownerDocument)?o.defaultView||o.parentWindow:window,i?(c=n.relatedTarget||n.toElement,i=r,c=c?Cl(c):null,null!==c&&(f=tt(c),c!==f||5!==c.tag&&6!==c.tag)&&(c=null)):(i=null,c=r),i!==c)){if(s=Pn,v="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(s=qn,v="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==i?o:xl(i),p=null==c?o:xl(c),o=new s(v,m+"leave",i,n,l),o.target=f,o.relatedTarget=p,v=null,Cl(l)===r&&(s=new s(d,m+"enter",c,n,l),s.target=p,s.relatedTarget=f,v=s),f=v,i&&c)e:{for(s=i,d=c,m=0,p=s;p;p=al(p))m++;for(p=0,v=d;v;v=al(v))p++;for(;0<m-p;)s=al(s),m--;for(;0<p-m;)d=al(d),p--;for(;m--;){if(s===d||null!==d&&s===d.alternate)break e;s=al(s),d=al(d)}s=null}else s=null;null!==i&&ul(u,o,i,s,!1),null!==c&&null!==f&&ul(u,f,c,s,!0)}if(o=r?xl(r):window,i=o.nodeName&&o.nodeName.toLowerCase(),"select"===i||"input"===i&&"file"===o.type)var h=yr;else if(pr(o))if(kr)h=_r;else{h=Nr;var g=xr}else(i=o.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(h=Pr);switch(h&&(h=h(e,r))?mr(u,h,n,l):(g&&g(e,o,r),"focusout"===e&&(g=o._wrapperState)&&g.controlled&&"number"===o.type&&ie(o,"number",o.value)),g=r?xl(r):window,e){case"focusin":(pr(g)||"true"===g.contentEditable)&&(Ur=g,Vr=r,Br=null);break;case"focusout":Br=Vr=Ur=null;break;case"mousedown":Qr=!0;break;case"contextmenu":case"mouseup":case"dragend":Qr=!1,Hr(u,n,l);break;case"selectionchange":if(Fr)break;case"keydown":case"keyup":Hr(u,n,l)}var b;if(tr)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else cr?or(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(lr&&"ko"!==n.locale&&(cr||"onCompositionStart"!==y?"onCompositionEnd"===y&&cr&&(b=vn()):(dn=l,pn="value"in dn?dn.value:dn.textContent,cr=!0)),g=ll(r,y),0<g.length&&(y=new An(y,e,null,n,l),u.push({event:y,listeners:g}),b?y.data=b:(b=ir(n),null!==b&&(y.data=b)))),(b=rr?sr(e,n):fr(e,n))&&(r=ll(r,"onBeforeInput"),0<r.length&&(l=new An("onBeforeInput","beforeinput",null,n,l),u.push({event:l,listeners:r}),l.data=b))}Gr(u,t)}))}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];null!==e;){var l=e,a=l.stateNode;5===l.tag&&null!==a&&(l=a,a=He(e,n),null!=a&&r.unshift(rl(e,a,l)),a=He(e,t),null!=a&&r.push(rl(e,a,l))),e=e.return}return r}function al(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ul(e,t,n,r,l){for(var a=t._reactName,u=[];null!==n&&n!==r;){var o=n,i=o.alternate,c=o.stateNode;if(null!==i&&i===r)break;5===o.tag&&null!==c&&(o=c,l?(i=He(n,a),null!=i&&u.unshift(rl(n,i,o))):l||(i=He(n,a),null!=i&&u.push(rl(n,i,o)))),n=n.return}0!==u.length&&e.push({event:t,listeners:u})}function ol(){}var il=null,cl=null;function sl(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function fl(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var dl="function"===typeof setTimeout?setTimeout:void 0,pl="function"===typeof clearTimeout?clearTimeout:void 0;function ml(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(e=e.body,null!=e&&(e.textContent=""))}function vl(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function hl(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var gl=0;function bl(e){return{$$typeof:A,toString:e,valueOf:e}}var yl=Math.random().toString(36).slice(2),kl="__reactFiber$"+yl,wl="__reactProps$"+yl,El="__reactContainer$"+yl,Sl="__reactEvents$"+yl;function Cl(e){var t=e[kl];if(t)return t;for(var n=e.parentNode;n;){if(t=n[El]||n[kl]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=hl(e);null!==e;){if(n=e[kl])return n;e=hl(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){return e=e[kl]||e[El],!e||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xl(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(u(33))}function Nl(e){return e[wl]||null}function Pl(e){var t=e[Sl];return void 0===t&&(t=e[Sl]=new Set),t}var _l=[],Tl=-1;function Ll(e){return{current:e}}function Ml(e){0>Tl||(e.current=_l[Tl],_l[Tl]=null,Tl--)}function jl(e,t){Tl++,_l[Tl]=e.current,e.current=t}var Rl={},zl=Ll(Rl),Il=Ll(!1),Dl=Rl;function Al(e,t){var n=e.type.contextTypes;if(!n)return Rl;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l,a={};for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fl(e){return e=e.childContextTypes,null!==e&&void 0!==e}function Ul(){Ml(Il),Ml(zl)}function Vl(e,t,n){if(zl.current!==Rl)throw Error(u(168));jl(zl,t),jl(Il,n)}function Bl(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext(),r)if(!(a in e))throw Error(u(108,G(t)||"Unknown",a));return l({},n,r)}function Ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rl,Dl=zl.current,jl(zl,e),jl(Il,Il.current),!0}function Hl(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Bl(e,t,Dl),r.__reactInternalMemoizedMergedChildContext=e,Ml(Il),Ml(zl),jl(zl,e)):Ml(Il),jl(Il,n)}var Wl=null,$l=null,ql=a.unstable_runWithPriority,Kl=a.unstable_scheduleCallback,Yl=a.unstable_cancelCallback,Gl=a.unstable_shouldYield,Xl=a.unstable_requestPaint,Jl=a.unstable_now,Zl=a.unstable_getCurrentPriorityLevel,ea=a.unstable_ImmediatePriority,ta=a.unstable_UserBlockingPriority,na=a.unstable_NormalPriority,ra=a.unstable_LowPriority,la=a.unstable_IdlePriority,aa={},ua=void 0!==Xl?Xl:function(){},oa=null,ia=null,ca=!1,sa=Jl(),fa=1e4>sa?Jl:function(){return Jl()-sa};function da(){switch(Zl()){case ea:return 99;case ta:return 98;case na:return 97;case ra:return 96;case la:return 95;default:throw Error(u(332))}}function pa(e){switch(e){case 99:return ea;case 98:return ta;case 97:return na;case 96:return ra;case 95:return la;default:throw Error(u(332))}}function ma(e,t){return e=pa(e),ql(e,t)}function va(e,t,n){return e=pa(e),Kl(e,t,n)}function ha(){if(null!==ia){var e=ia;ia=null,Yl(e)}ga()}function ga(){if(!ca&&null!==oa){ca=!0;var e=0;try{var t=oa;ma(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),oa=null}catch(n){throw null!==oa&&(oa=oa.slice(e+1)),Kl(ea,ha),n}finally{ca=!1}}}var ba=C.ReactCurrentBatchConfig;function ya(e,t){if(e&&e.defaultProps){for(var n in t=l({},t),e=e.defaultProps,e)void 0===t[n]&&(t[n]=e[n]);return t}return t}var ka=Ll(null),wa=null,Ea=null,Sa=null;function Ca(){Sa=Ea=wa=null}function Oa(e){var t=ka.current;Ml(ka),e.type._context._currentValue=t}function xa(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function Na(e,t){wa=e,Sa=Ea=null,e=e.dependencies,null!==e&&null!==e.firstContext&&(0!==(e.lanes&t)&&(lo=!0),e.firstContext=null)}function Pa(e,t){if(Sa!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(Sa=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Ea){if(null===wa)throw Error(u(308));Ea=t,wa.dependencies={lanes:0,firstContext:t,responders:null}}else Ea=Ea.next=t;return e._currentValue}var _a=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ma(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ja(e,t){if(e=e.updateQueue,null!==e){e=e.shared;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,null!==n){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?l=a=u:a=a.next=u,n=n.next}while(null!==n);null===a?l=a=t:a=a.next=t}else l=a=t;return n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}e=n.lastBaseUpdate,null===e?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function za(e,t,n,r){var a=e.updateQueue;_a=!1;var u=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var c=i,s=c.next;c.next=null,null===o?u=s:o.next=s,o=c;var f=e.alternate;if(null!==f){f=f.updateQueue;var d=f.lastBaseUpdate;d!==o&&(null===d?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=c)}}if(null!==u){d=a.baseState,o=0,f=s=c=null;do{i=u.lane;var p=u.eventTime;if((r&i)===i){null!==f&&(f=f.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,v=u;switch(i=t,p=n,v.tag){case 1:if(m=v.payload,"function"===typeof m){d=m.call(p,d,i);break e}d=m;break e;case 3:m.flags=-4097&m.flags|64;case 0:if(m=v.payload,i="function"===typeof m?m.call(p,d,i):m,null===i||void 0===i)break e;d=l({},d,i);break e;case 2:_a=!0}}null!==u.callback&&(e.flags|=32,i=a.effects,null===i?a.effects=[u]:i.push(u))}else p={eventTime:p,lane:i,tag:u.tag,payload:u.payload,callback:u.callback,next:null},null===f?(s=f=p,c=d):f=f.next=p,o|=i;if(u=u.next,null===u){if(i=a.shared.pending,null===i)break;u=i.next,i.next=null,a.lastBaseUpdate=i,a.shared.pending=null}}while(1);null===f&&(c=d),a.baseState=c,a.firstBaseUpdate=s,a.lastBaseUpdate=f,si|=o,e.lanes=o,e.memoizedState=d}}function Ia(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(null!==l){if(r.callback=null,r=n,"function"!==typeof l)throw Error(u(191,l));l.call(r)}}}var Da=(new r.Component).refs;function Aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=null===n||void 0===n?t:l({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zi(),l=Ii(e),a=Ma(r,l);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),ja(e,a),Di(e,l,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zi(),l=Ii(e),a=Ma(r,l);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),ja(e,a),Di(e,l,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zi(),r=Ii(e),l=Ma(n,r);l.tag=2,void 0!==t&&null!==t&&(l.callback=t),ja(e,l),Di(e,r,n)}};function Ua(e,t,n,r,l,a,u){return e=e.stateNode,"function"===typeof e.shouldComponentUpdate?e.shouldComponentUpdate(r,a,u):!t.prototype||!t.prototype.isPureReactComponent||(!jr(n,r)||!jr(l,a))}function Va(e,t,n){var r=!1,l=Rl,a=t.contextType;return"object"===typeof a&&null!==a?a=Pa(a):(l=Fl(t)?Dl:zl.current,r=t.contextTypes,a=(r=null!==r&&void 0!==r)?Al(e,l):Rl),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ba(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function Qa(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Da,Ta(e);var a=t.contextType;"object"===typeof a&&null!==a?l.context=Pa(a):(a=Fl(t)?Dl:zl.current,l.context=Al(e,a)),za(e,n,l,r),l.state=e.memoizedState,a=t.getDerivedStateFromProps,"function"===typeof a&&(Aa(e,t,a,n),l.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof l.getSnapshotBeforeUpdate||"function"!==typeof l.UNSAFE_componentWillMount&&"function"!==typeof l.componentWillMount||(t=l.state,"function"===typeof l.componentWillMount&&l.componentWillMount(),"function"===typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),t!==l.state&&Fa.enqueueReplaceState(l,l.state,null),za(e,n,l,r),l.state=e.memoizedState),"function"===typeof l.componentDidMount&&(e.flags|=4)}var Ha=Array.isArray;function Wa(e,t,n){if(e=n.ref,null!==e&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner,n){if(1!==n.tag)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var l=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===l?t.ref:(t=function(e){var t=r.refs;t===Da&&(t=r.refs={}),null===e?delete t[l]:t[l]=e},t._stringRef=l,t)}if("string"!==typeof e)throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function $a(e,t){if("textarea"!==e.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function qa(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function l(e,t){return e=gc(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,null!==r?(r=r.index,r<n?(t.flags=2,n):r):(t.flags=2,n)):n}function o(t){return e&&null===t.alternate&&(t.flags=2),t}function i(e,t,n,r){return null===t||6!==t.tag?(t=wc(n,e.mode,r),t.return=e,t):(t=l(t,n),t.return=e,t)}function c(e,t,n,r){return null!==t&&t.elementType===n.type?(r=l(t,n.props),r.ref=Wa(e,t,n),r.return=e,r):(r=bc(n.type,n.key,n.props,null,e.mode,r),r.ref=Wa(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ec(n,e.mode,r),t.return=e,t):(t=l(t,n.children||[]),t.return=e,t)}function f(e,t,n,r,a){return null===t||7!==t.tag?(t=yc(n,e.mode,r,a),t.return=e,t):(t=l(t,n),t.return=e,t)}function d(e,t,n){if("string"===typeof t||"number"===typeof t)return t=wc(""+t,e.mode,n),t.return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case O:return n=bc(t.type,t.key,t.props,null,e.mode,n),n.ref=Wa(e,null,t),n.return=e,n;case x:return t=Ec(t,e.mode,n),t.return=e,t}if(Ha(t)||W(t))return t=yc(t,e.mode,n,null),t.return=e,t;$a(e,t)}return null}function p(e,t,n,r){var l=null!==t?t.key:null;if("string"===typeof n||"number"===typeof n)return null!==l?null:i(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case O:return n.key===l?n.type===N?f(e,t,n.props.children,r,l):c(e,t,n,r):null;case x:return n.key===l?s(e,t,n,r):null}if(Ha(n)||W(n))return null!==l?null:f(e,t,n,r,null);$a(e,n)}return null}function m(e,t,n,r,l){if("string"===typeof r||"number"===typeof r)return e=e.get(n)||null,i(t,e,""+r,l);if("object"===typeof r&&null!==r){switch(r.$$typeof){case O:return e=e.get(null===r.key?n:r.key)||null,r.type===N?f(t,e,r.props.children,l,r.key):c(t,e,r,l);case x:return e=e.get(null===r.key?n:r.key)||null,s(t,e,r,l)}if(Ha(r)||W(r))return e=e.get(n)||null,f(t,e,r,l,null);$a(t,r)}return null}function v(l,u,o,i){for(var c=null,s=null,f=u,v=u=0,h=null;null!==f&&v<o.length;v++){f.index>v?(h=f,f=null):h=f.sibling;var g=p(l,f,o[v],i);if(null===g){null===f&&(f=h);break}e&&f&&null===g.alternate&&t(l,f),u=a(g,u,v),null===s?c=g:s.sibling=g,s=g,f=h}if(v===o.length)return n(l,f),c;if(null===f){for(;v<o.length;v++)f=d(l,o[v],i),null!==f&&(u=a(f,u,v),null===s?c=f:s.sibling=f,s=f);return c}for(f=r(l,f);v<o.length;v++)h=m(f,l,v,o[v],i),null!==h&&(e&&null!==h.alternate&&f.delete(null===h.key?v:h.key),u=a(h,u,v),null===s?c=h:s.sibling=h,s=h);return e&&f.forEach((function(e){return t(l,e)})),c}function h(l,o,i,c){var s=W(i);if("function"!==typeof s)throw Error(u(150));if(i=s.call(i),null==i)throw Error(u(151));for(var f=s=null,v=o,h=o=0,g=null,b=i.next();null!==v&&!b.done;h++,b=i.next()){v.index>h?(g=v,v=null):g=v.sibling;var y=p(l,v,b.value,c);if(null===y){null===v&&(v=g);break}e&&v&&null===y.alternate&&t(l,v),o=a(y,o,h),null===f?s=y:f.sibling=y,f=y,v=g}if(b.done)return n(l,v),s;if(null===v){for(;!b.done;h++,b=i.next())b=d(l,b.value,c),null!==b&&(o=a(b,o,h),null===f?s=b:f.sibling=b,f=b);return s}for(v=r(l,v);!b.done;h++,b=i.next())b=m(v,l,h,b.value,c),null!==b&&(e&&null!==b.alternate&&v.delete(null===b.key?h:b.key),o=a(b,o,h),null===f?s=b:f.sibling=b,f=b);return e&&v.forEach((function(e){return t(l,e)})),s}return function(e,r,a,i){var c="object"===typeof a&&null!==a&&a.type===N&&null===a.key;c&&(a=a.props.children);var s="object"===typeof a&&null!==a;if(s)switch(a.$$typeof){case O:e:{for(s=a.key,c=r;null!==c;){if(c.key===s){switch(c.tag){case 7:if(a.type===N){n(e,c.sibling),r=l(c,a.props.children),r.return=e,e=r;break e}break;default:if(c.elementType===a.type){n(e,c.sibling),r=l(c,a.props),r.ref=Wa(e,c,a),r.return=e,e=r;break e}}n(e,c);break}t(e,c),c=c.sibling}a.type===N?(r=yc(a.props.children,e.mode,i,a.key),r.return=e,e=r):(i=bc(a.type,a.key,a.props,null,e.mode,i),i.ref=Wa(e,r,a),i.return=e,e=i)}return o(e);case x:e:{for(c=a.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),r=l(r,a.children||[]),r.return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}r=Ec(a,e.mode,i),r.return=e,e=r}return o(e)}if("string"===typeof a||"number"===typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),r=l(r,a),r.return=e,e=r):(n(e,r),r=wc(a,e.mode,i),r.return=e,e=r),o(e);if(Ha(a))return v(e,r,a,i);if(W(a))return h(e,r,a,i);if(s&&$a(e,a),"undefined"===typeof a&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(u(152,G(e.type)||"Component"))}return n(e,r)}}var Ka=qa(!0),Ya=qa(!1),Ga={},Xa=Ll(Ga),Ja=Ll(Ga),Za=Ll(Ga);function eu(e){if(e===Ga)throw Error(u(174));return e}function tu(e,t){switch(jl(Za,t),jl(Ja,e),jl(Xa,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:be(null,"");break;default:e=8===e?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=be(t,e)}Ml(Xa),jl(Xa,t)}function nu(){Ml(Xa),Ml(Ja),Ml(Za)}function ru(e){eu(Za.current);var t=eu(Xa.current),n=be(t,e.type);t!==n&&(jl(Ja,e),jl(Xa,n))}function lu(e){Ja.current===e&&(Ml(Xa),Ml(Ja))}var au=Ll(0);function uu(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(n=n.dehydrated,null===n||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ou=null,iu=null,cu=!1;function su(e,t){var n=mc(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,null!==t&&(e.stateNode=t,!0);case 6:return t=""===e.pendingProps||3!==t.nodeType?null:t,null!==t&&(e.stateNode=t,!0);case 13:return!1;default:return!1}}function du(e){if(cu){var t=iu;if(t){var n=t;if(!fu(e,t)){if(t=vl(n.nextSibling),!t||!fu(e,t))return e.flags=-1025&e.flags|2,cu=!1,void(ou=e);su(ou,n)}ou=e,iu=vl(t.firstChild)}else e.flags=-1025&e.flags|2,cu=!1,ou=e}}function pu(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ou=e}function mu(e){if(e!==ou)return!1;if(!cu)return pu(e),cu=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!fl(t,e.memoizedProps))for(t=iu;t;)su(e,t),t=vl(t.nextSibling);if(pu(e),13===e.tag){if(e=e.memoizedState,e=null!==e?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){iu=vl(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}iu=null}}else iu=ou?vl(e.stateNode.nextSibling):null;return!0}function vu(){iu=ou=null,cu=!1}var hu=[];function gu(){for(var e=0;e<hu.length;e++)hu[e]._workInProgressVersionPrimary=null;hu.length=0}var bu=C.ReactCurrentDispatcher,yu=C.ReactCurrentBatchConfig,ku=0,wu=null,Eu=null,Su=null,Cu=!1,Ou=!1;function xu(){throw Error(u(321))}function Nu(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,l,a){if(ku=a,wu=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bu.current=null===e||null===e.memoizedState?eo:to,e=n(r,l),Ou){a=0;do{if(Ou=!1,!(25>a))throw Error(u(301));a+=1,Su=Eu=null,t.updateQueue=null,bu.current=no,e=n(r,l)}while(Ou)}if(bu.current=Zu,t=null!==Eu&&null!==Eu.next,ku=0,Su=Eu=wu=null,Cu=!1,t)throw Error(u(300));return e}function _u(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Su?wu.memoizedState=Su=e:Su=Su.next=e,Su}function Tu(){if(null===Eu){var e=wu.alternate;e=null!==e?e.memoizedState:null}else e=Eu.next;var t=null===Su?wu.memoizedState:Su.next;if(null!==t)Su=t,Eu=e;else{if(null===e)throw Error(u(310));Eu=e,e={memoizedState:Eu.memoizedState,baseState:Eu.baseState,baseQueue:Eu.baseQueue,queue:Eu.queue,next:null},null===Su?wu.memoizedState=Su=e:Su=Su.next=e}return Su}function Lu(e,t){return"function"===typeof t?t(e):t}function Mu(e){var t=Tu(),n=t.queue;if(null===n)throw Error(u(311));n.lastRenderedReducer=e;var r=Eu,l=r.baseQueue,a=n.pending;if(null!==a){if(null!==l){var o=l.next;l.next=a.next,a.next=o}r.baseQueue=l=a,n.pending=null}if(null!==l){l=l.next,r=r.baseState;var i=o=a=null,c=l;do{var s=c.lane;if((ku&s)===s)null!==i&&(i=i.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),r=c.eagerReducer===e?c.eagerState:e(r,c.action);else{var f={lane:s,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===i?(o=i=f,a=r):i=i.next=f,wu.lanes|=s,si|=s}c=c.next}while(null!==c&&c!==l);null===i?a=r:i.next=o,Lr(r,t.memoizedState)||(lo=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=i,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ju(e){var t=Tu(),n=t.queue;if(null===n)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(null!==l){n.pending=null;var o=l=l.next;do{a=e(a,o.action),o=o.next}while(o!==l);Lr(a,t.memoizedState)||(lo=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ru(e,t,n){var r=t._getVersion;r=r(t._source);var l=t._workInProgressVersionPrimary;if(null!==l?e=l===r:(e=e.mutableReadLanes,(e=(ku&e)===e)&&(t._workInProgressVersionPrimary=r,hu.push(t))),e)return n(t._source);throw hu.push(t),Error(u(350))}function zu(e,t,n,r){var l=ni;if(null===l)throw Error(u(349));var a=t._getVersion,o=a(t._source),i=bu.current,c=i.useState((function(){return Ru(l,t,n)})),s=c[1],f=c[0];c=Su;var d=e.memoizedState,p=d.refs,m=p.getSnapshot,v=d.source;d=d.subscribe;var h=wu;return e.memoizedState={refs:p,source:t,subscribe:r},i.useEffect((function(){p.getSnapshot=n,p.setSnapshot=s;var e=a(t._source);if(!Lr(o,e)){e=n(t._source),Lr(f,e)||(s(e),e=Ii(h),l.mutableReadLanes|=e&l.pendingLanes),e=l.mutableReadLanes,l.entangledLanes|=e;for(var r=l.entanglements,u=e;0<u;){var i=31-en(u),c=1<<i;r[i]|=e,u&=~c}}}),[n,t,r]),i.useEffect((function(){return r(t._source,(function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=Ii(h);l.mutableReadLanes|=r&l.pendingLanes}catch(a){n((function(){throw a}))}}))}),[t,r]),Lr(m,n)&&Lr(v,t)&&Lr(d,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:f},e.dispatch=s=Ju.bind(null,wu,e),c.queue=e,c.baseQueue=null,f=Ru(l,t,n),c.memoizedState=c.baseState=f),f}function Iu(e,t,n){var r=Tu();return zu(r,e,t,n)}function Du(e){var t=_u();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:e},e=e.dispatch=Ju.bind(null,wu,e),[t.memoizedState,e]}function Au(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=wu.updateQueue,null===t?(t={lastEffect:null},wu.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,null===n?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fu(e){var t=_u();return e={current:e},t.memoizedState=e}function Uu(){return Tu().memoizedState}function Vu(e,t,n,r){var l=_u();wu.flags|=e,l.memoizedState=Au(1|t,n,void 0,void 0===r?null:r)}function Bu(e,t,n,r){var l=Tu();r=void 0===r?null:r;var a=void 0;if(null!==Eu){var u=Eu.memoizedState;if(a=u.destroy,null!==r&&Nu(r,u.deps))return void Au(t,n,a,r)}wu.flags|=e,l.memoizedState=Au(1|t,n,a,r)}function Qu(e,t){return Vu(516,4,e,t)}function Hu(e,t){return Bu(516,4,e,t)}function Wu(e,t){return Bu(4,2,e,t)}function $u(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function qu(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Bu(4,2,$u.bind(null,t,e),n)}function Ku(){}function Yu(e,t){var n=Tu();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gu(e,t){var n=Tu();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t){var n=da();ma(98>n?98:n,(function(){e(!0)})),ma(97<n?97:n,(function(){var n=yu.transition;yu.transition=1;try{e(!1),t()}finally{yu.transition=n}}))}function Ju(e,t,n){var r=zi(),l=Ii(e),a={lane:l,action:n,eagerReducer:null,eagerState:null,next:null},u=t.pending;if(null===u?a.next=a:(a.next=u.next,u.next=a),t.pending=a,u=e.alternate,e===wu||null!==u&&u===wu)Ou=Cu=!0;else{if(0===e.lanes&&(null===u||0===u.lanes)&&(u=t.lastRenderedReducer,null!==u))try{var o=t.lastRenderedState,i=u(o,n);if(a.eagerReducer=u,a.eagerState=i,Lr(i,o))return}catch(c){}Di(e,l,r)}}var Zu={readContext:Pa,useCallback:xu,useContext:xu,useEffect:xu,useImperativeHandle:xu,useLayoutEffect:xu,useMemo:xu,useReducer:xu,useRef:xu,useState:xu,useDebugValue:xu,useDeferredValue:xu,useTransition:xu,useMutableSource:xu,useOpaqueIdentifier:xu,unstable_isNewReconciler:!1},eo={readContext:Pa,useCallback:function(e,t){return _u().memoizedState=[e,void 0===t?null:t],e},useContext:Pa,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Vu(4,2,$u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vu(4,2,e,t)},useMemo:function(e,t){var n=_u();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_u();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ju.bind(null,wu,e),[r.memoizedState,e]},useRef:Fu,useState:Du,useDebugValue:Ku,useDeferredValue:function(e){var t=Du(e),n=t[0],r=t[1];return Qu((function(){var t=yu.transition;yu.transition=1;try{r(e)}finally{yu.transition=t}}),[e]),n},useTransition:function(){var e=Du(!1),t=e[0];return e=Xu.bind(null,e[1]),Fu(e),[e,t]},useMutableSource:function(e,t,n){var r=_u();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},zu(r,e,t,n)},useOpaqueIdentifier:function(){if(cu){var e=!1,t=bl((function(){throw e||(e=!0,n("r:"+(gl++).toString(36))),Error(u(355))})),n=Du(t)[1];return 0===(2&wu.mode)&&(wu.flags|=516,Au(5,(function(){n("r:"+(gl++).toString(36))}),void 0,null)),t}return t="r:"+(gl++).toString(36),Du(t),t},unstable_isNewReconciler:!1},to={readContext:Pa,useCallback:Yu,useContext:Pa,useEffect:Hu,useImperativeHandle:qu,useLayoutEffect:Wu,useMemo:Gu,useReducer:Mu,useRef:Uu,useState:function(){return Mu(Lu)},useDebugValue:Ku,useDeferredValue:function(e){var t=Mu(Lu),n=t[0],r=t[1];return Hu((function(){var t=yu.transition;yu.transition=1;try{r(e)}finally{yu.transition=t}}),[e]),n},useTransition:function(){var e=Mu(Lu)[0];return[Uu().current,e]},useMutableSource:Iu,useOpaqueIdentifier:function(){return Mu(Lu)[0]},unstable_isNewReconciler:!1},no={readContext:Pa,useCallback:Yu,useContext:Pa,useEffect:Hu,useImperativeHandle:qu,useLayoutEffect:Wu,useMemo:Gu,useReducer:ju,useRef:Uu,useState:function(){return ju(Lu)},useDebugValue:Ku,useDeferredValue:function(e){var t=ju(Lu),n=t[0],r=t[1];return Hu((function(){var t=yu.transition;yu.transition=1;try{r(e)}finally{yu.transition=t}}),[e]),n},useTransition:function(){var e=ju(Lu)[0];return[Uu().current,e]},useMutableSource:Iu,useOpaqueIdentifier:function(){return ju(Lu)[0]},unstable_isNewReconciler:!1},ro=C.ReactCurrentOwner,lo=!1;function ao(e,t,n,r){t.child=null===e?Ya(t,null,n,r):Ka(t,e.child,n,r)}function uo(e,t,n,r,l){n=n.render;var a=t.ref;return Na(t,l),r=Pu(e,t,n,r,a,l),null===e||lo?(t.flags|=1,ao(e,t,r,l),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~l,Po(e,t,l))}function oo(e,t,n,r,l,a){if(null===e){var u=n.type;return"function"!==typeof u||vc(u)||void 0!==u.defaultProps||null!==n.compare||void 0!==n.defaultProps?(e=bc(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=u,io(e,t,u,r,l,a))}return u=e.child,0===(l&a)&&(l=u.memoizedProps,n=n.compare,n=null!==n?n:jr,n(l,r)&&e.ref===t.ref)?Po(e,t,a):(t.flags|=1,e=gc(u,r),e.ref=t.ref,e.return=t,t.child=e)}function io(e,t,n,r,l,a){if(null!==e&&jr(e.memoizedProps,r)&&e.ref===t.ref){if(lo=!1,0===(a&l))return t.lanes=e.lanes,Po(e,t,a);0!==(16384&e.flags)&&(lo=!0)}return fo(e,t,n,r,a)}function co(e,t,n){var r=t.pendingProps,l=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},$i(t,n);else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},$i(t,e),null;t.memoizedState={baseLanes:0},$i(t,null!==a?a.baseLanes:n)}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,$i(t,r);return ao(e,t,l,n),t.child}function so(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function fo(e,t,n,r,l){var a=Fl(n)?Dl:zl.current;return a=Al(t,a),Na(t,l),n=Pu(e,t,n,r,a,l),null===e||lo?(t.flags|=1,ao(e,t,n,l),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~l,Po(e,t,l))}function po(e,t,n,r,l){if(Fl(n)){var a=!0;Ql(t)}else a=!1;if(Na(t,l),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),Va(t,n,r),Qa(t,n,r,l),r=!0;else if(null===e){var u=t.stateNode,o=t.memoizedProps;u.props=o;var i=u.context,c=n.contextType;"object"===typeof c&&null!==c?c=Pa(c):(c=Fl(n)?Dl:zl.current,c=Al(t,c));var s=n.getDerivedStateFromProps,f="function"===typeof s||"function"===typeof u.getSnapshotBeforeUpdate;f||"function"!==typeof u.UNSAFE_componentWillReceiveProps&&"function"!==typeof u.componentWillReceiveProps||(o!==r||i!==c)&&Ba(t,u,r,c),_a=!1;var d=t.memoizedState;u.state=d,za(t,r,u,l),i=t.memoizedState,o!==r||d!==i||Il.current||_a?("function"===typeof s&&(Aa(t,n,s,r),i=t.memoizedState),(o=_a||Ua(t,n,o,r,d,i,c))?(f||"function"!==typeof u.UNSAFE_componentWillMount&&"function"!==typeof u.componentWillMount||("function"===typeof u.componentWillMount&&u.componentWillMount(),"function"===typeof u.UNSAFE_componentWillMount&&u.UNSAFE_componentWillMount()),"function"===typeof u.componentDidMount&&(t.flags|=4)):("function"===typeof u.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=i),u.props=r,u.state=i,u.context=c,r=o):("function"===typeof u.componentDidMount&&(t.flags|=4),r=!1)}else{u=t.stateNode,La(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:ya(t.type,o),u.props=c,f=t.pendingProps,d=u.context,i=n.contextType,"object"===typeof i&&null!==i?i=Pa(i):(i=Fl(n)?Dl:zl.current,i=Al(t,i));var p=n.getDerivedStateFromProps;(s="function"===typeof p||"function"===typeof u.getSnapshotBeforeUpdate)||"function"!==typeof u.UNSAFE_componentWillReceiveProps&&"function"!==typeof u.componentWillReceiveProps||(o!==f||d!==i)&&Ba(t,u,r,i),_a=!1,d=t.memoizedState,u.state=d,za(t,r,u,l);var m=t.memoizedState;o!==f||d!==m||Il.current||_a?("function"===typeof p&&(Aa(t,n,p,r),m=t.memoizedState),(c=_a||Ua(t,n,c,r,d,m,i))?(s||"function"!==typeof u.UNSAFE_componentWillUpdate&&"function"!==typeof u.componentWillUpdate||("function"===typeof u.componentWillUpdate&&u.componentWillUpdate(r,m,i),"function"===typeof u.UNSAFE_componentWillUpdate&&u.UNSAFE_componentWillUpdate(r,m,i)),"function"===typeof u.componentDidUpdate&&(t.flags|=4),"function"===typeof u.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof u.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof u.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=m),u.props=r,u.state=m,u.context=i,r=c):("function"!==typeof u.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof u.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),r=!1)}return mo(e,t,n,r,a,l)}function mo(e,t,n,r,l,a){so(e,t);var u=0!==(64&t.flags);if(!r&&!u)return l&&Hl(t,n,!1),Po(e,t,a);r=t.stateNode,ro.current=t;var o=u&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&u?(t.child=Ka(t,e.child,null,a),t.child=Ka(t,null,o,a)):ao(e,t,o,a),t.memoizedState=r.state,l&&Hl(t,n,!0),t.child}function vo(e){var t=e.stateNode;t.pendingContext?Vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vl(e,t.context,!1),tu(e,t.containerInfo)}var ho,go,bo,yo,ko={dehydrated:null,retryLane:0};function wo(e,t,n){var r,l=t.pendingProps,a=au.current,u=!1;return(r=0!==(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(u=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===l.fallback||!0===l.unstable_avoidThisFallback||(a|=1),jl(au,1&a),null===e?(void 0!==l.fallback&&du(t),e=l.children,a=l.fallback,u?(e=Eo(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ko,e):"number"===typeof l.unstable_expectedLoadTime?(e=Eo(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=ko,t.lanes=33554432,e):(n=kc({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):(e.memoizedState,u?(l=Co(e,t,l.children,l.fallback,n),u=t.child,a=e.child.memoizedState,u.memoizedState=null===a?{baseLanes:n}:{baseLanes:a.baseLanes|n},u.childLanes=e.childLanes&~n,t.memoizedState=ko,l):(n=So(e,t,l.children,n),t.memoizedState=null,n))}function Eo(e,t,n,r){var l=e.mode,a=e.child;return t={mode:"hidden",children:t},0===(2&l)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=kc(t,l,0,null),n=yc(n,l,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function So(e,t,n,r){var l=e.child;return e=l.sibling,n=gc(l,{mode:"visible",children:n}),0===(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Co(e,t,n,r,l){var a=t.mode,u=e.child;e=u.sibling;var o={mode:"hidden",children:n};return 0===(2&a)&&t.child!==u?(n=t.child,n.childLanes=0,n.pendingProps=o,u=n.lastEffect,null!==u?(t.firstEffect=n.firstEffect,t.lastEffect=u,u.nextEffect=null):t.firstEffect=t.lastEffect=null):n=gc(u,o),null!==e?r=gc(e,r):(r=yc(r,a,l,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Oo(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),xa(e.return,t)}function xo(e,t,n,r,l,a){var u=e.memoizedState;null===u?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l,lastEffect:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=l,u.lastEffect=a)}function No(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(ao(e,t,r.children,n),r=au.current,0!==(2&r))r=1&r|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Oo(e,n);else if(19===e.tag)Oo(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(jl(au,r),0===(2&t.mode))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;null!==n;)e=n.alternate,null!==e&&null===uu(e)&&(l=n),n=n.sibling;n=l,null===n?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),xo(t,!1,l,n,a,t.lastEffect);break;case"backwards":for(n=null,l=t.child,t.child=null;null!==l;){if(e=l.alternate,null!==e&&null===uu(e)){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}xo(t,!0,n,null,a,t.lastEffect);break;case"together":xo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Po(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),si|=t.lanes,0!==(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(u(153));if(null!==t.child){for(e=t.child,n=gc(e,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,n=n.sibling=gc(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}function _o(e,t){if(!cu)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function To(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Fl(t.type)&&Ul(),null;case 3:return nu(),Ml(Il),Ml(zl),gu(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(mu(t)?t.flags|=4:r.hydrate||(t.flags|=256)),go(t),null;case 5:lu(t);var a=eu(Za.current);if(n=t.type,null!==e&&null!=t.stateNode)bo(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(u(166));return null}if(e=eu(Xa.current),mu(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kl]=t,r[wl]=o,n){case"dialog":Xr("cancel",r),Xr("close",r);break;case"iframe":case"object":case"embed":Xr("load",r);break;case"video":case"audio":for(e=0;e<qr.length;e++)Xr(qr[e],r);break;case"source":Xr("error",r);break;case"img":case"image":case"link":Xr("error",r),Xr("load",r);break;case"details":Xr("toggle",r);break;case"input":le(r,o),Xr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Xr("invalid",r);break;case"textarea":pe(r,o),Xr("invalid",r)}for(var c in Ne(n,o),e=null,o)o.hasOwnProperty(c)&&(a=o[c],"children"===c?"string"===typeof a?r.textContent!==a&&(e=["children",a]):"number"===typeof a&&r.textContent!==""+a&&(e=["children",""+a]):i.hasOwnProperty(c)&&null!=a&&"onScroll"===c&&Xr("scroll",r));switch(n){case"input":ee(r),oe(r,o,!0);break;case"textarea":ee(r),ve(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=ol)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(c=9===a.nodeType?a:a.ownerDocument,e===he.html&&(e=ge(n)),e===he.html?"script"===n?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[kl]=t,e[wl]=r,ho(e,t,!1,!1),t.stateNode=e,c=Pe(n,r),n){case"dialog":Xr("cancel",e),Xr("close",e),a=r;break;case"iframe":case"object":case"embed":Xr("load",e),a=r;break;case"video":case"audio":for(a=0;a<qr.length;a++)Xr(qr[a],e);a=r;break;case"source":Xr("error",e),a=r;break;case"img":case"image":case"link":Xr("error",e),Xr("load",e),a=r;break;case"details":Xr("toggle",e),a=r;break;case"input":le(e,r),a=re(e,r),Xr("invalid",e);break;case"option":a=se(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=l({},r,{value:void 0}),Xr("invalid",e);break;case"textarea":pe(e,r),a=de(e,r),Xr("invalid",e);break;default:a=r}Ne(n,a);var s=a;for(o in s)if(s.hasOwnProperty(o)){var f=s[o];"style"===o?Oe(e,f):"dangerouslySetInnerHTML"===o?(f=f?f.__html:void 0,null!=f&&ke(e,f)):"children"===o?"string"===typeof f?("textarea"!==n||""!==f)&&we(e,f):"number"===typeof f&&we(e,""+f):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(i.hasOwnProperty(o)?null!=f&&"onScroll"===o&&Xr("scroll",e):null!=f&&S(e,o,f,c))}switch(n){case"input":ee(e),oe(e,r,!1);break;case"textarea":ee(e),ve(e);break;case"option":null!=r.value&&e.setAttribute("value",""+X(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,null!=o?fe(e,!!r.multiple,o,!1):null!=r.defaultValue&&fe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=ol)}sl(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)yo(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(u(166));n=eu(Za.current),eu(Xa.current),mu(t)?(r=t.stateNode,n=t.memoizedProps,r[kl]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r),r[kl]=t,t.stateNode=r)}return null;case 13:return Ml(au),r=t.memoizedState,0!==(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&mu(t):n=null!==e.memoizedState,r&&!n&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&au.current)?0===oi&&(oi=3):(0!==oi&&3!==oi||(oi=4),null===ni||0===(134217727&si)&&0===(134217727&fi)||Vi(ni,li))),(r||n)&&(t.flags|=4),null);case 4:return nu(),go(t),null===e&&Zr(t.stateNode.containerInfo),null;case 10:return Oa(t),null;case 17:return Fl(t.type)&&Ul(),null;case 19:if(Ml(au),r=t.memoizedState,null===r)return null;if(o=0!==(64&t.flags),c=r.rendering,null===c)if(o)_o(r,!1);else{if(0!==oi||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(c=uu(e),null!==c){for(t.flags|=64,_o(r,!1),o=c.updateQueue,null!==o&&(t.updateQueue=o,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,c=o.alternate,null===c?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return jl(au,1&au.current|2),t.child}e=e.sibling}null!==r.tail&&fa()>vi&&(t.flags|=64,o=!0,_o(r,!1),t.lanes=33554432)}else{if(!o)if(e=uu(c),null!==e){if(t.flags|=64,o=!0,n=e.updateQueue,null!==n&&(t.updateQueue=n,t.flags|=4),_o(r,!0),null===r.tail&&"hidden"===r.tailMode&&!c.alternate&&!cu)return t=t.lastEffect=r.lastEffect,null!==t&&(t.nextEffect=null),null}else 2*fa()-r.renderingStartTime>vi&&1073741824!==n&&(t.flags|=64,o=!0,_o(r,!1),t.lanes=33554432);r.isBackwards?(c.sibling=t.child,t.child=c):(n=r.last,null!==n?n.sibling=c:t.child=c,r.last=c)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=fa(),n.sibling=null,t=au.current,jl(au,o?1&t|2:1&t),n):null;case 23:case 24:return qi(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(u(156,t.tag))}function Lo(e){switch(e.tag){case 1:Fl(e.type)&&Ul();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(nu(),Ml(Il),Ml(zl),gu(),t=e.flags,0!==(64&t))throw Error(u(285));return e.flags=-4097&t|64,e;case 5:return lu(e),null;case 13:return Ml(au),t=e.flags,4096&t?(e.flags=-4097&t|64,e):null;case 19:return Ml(au),null;case 4:return nu(),null;case 10:return Oa(e),null;case 23:case 24:return qi(),null;default:return null}}function Mo(e,t){try{var n="",r=t;do{n+=Y(r),r=r.return}while(r);var l=n}catch(a){l="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:l}}function jo(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}ho=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},go=function(){},bo=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,eu(Xa.current);var u,o=null;switch(n){case"input":a=re(e,a),r=re(e,r),o=[];break;case"option":a=se(e,a),r=se(e,r),o=[];break;case"select":a=l({},a,{value:void 0}),r=l({},r,{value:void 0}),o=[];break;case"textarea":a=de(e,a),r=de(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=ol)}for(f in Ne(n,r),n=null,a)if(!r.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var c=a[f];for(u in c)c.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(i.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var s=r[f];if(c=null!=a?a[f]:void 0,r.hasOwnProperty(f)&&s!==c&&(null!=s||null!=c))if("style"===f)if(c){for(u in c)!c.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in s)s.hasOwnProperty(u)&&c[u]!==s[u]&&(n||(n={}),n[u]=s[u])}else n||(o||(o=[]),o.push(f,n)),n=s;else"dangerouslySetInnerHTML"===f?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(o=o||[]).push(f,s)):"children"===f?"string"!==typeof s&&"number"!==typeof s||(o=o||[]).push(f,""+s):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(i.hasOwnProperty(f)?(null!=s&&"onScroll"===f&&Xr("scroll",e),o||c===s||(o=[])):"object"===typeof s&&null!==s&&s.$$typeof===A?s.toString():(o=o||[]).push(f,s))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}},yo=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ro="function"===typeof WeakMap?WeakMap:Map;function zo(e,t,n){n=Ma(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,ki=r),jo(e,t)},n}function Io(e,t,n){n=Ma(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var l=t.value;n.payload=function(){return jo(e,t),r(l)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){"function"!==typeof r&&(null===wi?wi=new Set([this]):wi.add(this),jo(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var Do="function"===typeof WeakSet?WeakSet:Set;function Ao(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(n){sc(e,n)}else t.current=null}function Fo(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ya(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&ml(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(u(163))}function Uo(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=null!==t?t.lastEffect:null,null!==t){e=t=t.next;do{if(3===(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=null!==t?t.lastEffect:null,null!==t){e=t=t.next;do{var l=e;r=l.next,l=l.tag,0!==(4&l)&&0!==(1&l)&&(oc(n,e),uc(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ya(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,void(null!==t&&Ia(n,t,e));case 3:if(t=n.updateQueue,null!==t){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ia(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&sl(n.type,n.memoizedProps)&&e.focus());case 6:return;case 4:return;case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&_t(n)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(u(163))}function Vo(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)r=r.style,"function"===typeof r.setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var l=n.memoizedProps.style;l=void 0!==l&&null!==l&&l.hasOwnProperty("display")?l.display:null,r.style.display=Ce("display",l)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Bo(e,t){if($l&&"function"===typeof $l.onCommitFiberUnmount)try{$l.onCommitFiberUnmount(Wl,t)}catch(a){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,null!==e&&(e=e.lastEffect,null!==e)){var n=e=e.next;do{var r=n,l=r.destroy;if(r=r.tag,void 0!==l)if(0!==(4&r))oc(t,n);else{r=t;try{l()}catch(a){sc(r,a)}}n=n.next}while(n!==e)}break;case 1:if(Ao(t),e=t.stateNode,"function"===typeof e.componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(a){sc(t,a)}break;case 5:Ao(t);break;case 4:Ko(e,t)}}function Qo(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ho(e){return 5===e.tag||3===e.tag||4===e.tag}function Wo(e){e:{for(var t=e.return;null!==t;){if(Ho(t))break e;t=t.return}throw Error(u(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(u(161))}16&n.flags&&(we(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ho(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?$o(e,n,t):qo(e,n,t)}function $o(e,t,n){var r=e.tag,l=5===r||6===r;if(l)e=l?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,null!==n&&void 0!==n||null!==t.onclick||(t.onclick=ol));else if(4!==r&&(e=e.child,null!==e))for($o(e,t,n),e=e.sibling;null!==e;)$o(e,t,n),e=e.sibling}function qo(e,t,n){var r=e.tag,l=5===r||6===r;if(l)e=l?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(e=e.child,null!==e))for(qo(e,t,n),e=e.sibling;null!==e;)qo(e,t,n),e=e.sibling}function Ko(e,t){for(var n,r,l=t,a=!1;;){if(!a){a=l.return;e:for(;;){if(null===a)throw Error(u(160));switch(n=a.stateNode,a.tag){case 5:r=!1;break e;case 3:n=n.containerInfo,r=!0;break e;case 4:n=n.containerInfo,r=!0;break e}a=a.return}a=!0}if(5===l.tag||6===l.tag){e:for(var o=e,i=l,c=i;;)if(Bo(o,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===i)break e;for(;null===c.sibling;){if(null===c.return||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}r?(o=n,i=l.stateNode,8===o.nodeType?o.parentNode.removeChild(i):o.removeChild(i)):n.removeChild(l.stateNode)}else if(4===l.tag){if(null!==l.child){n=l.stateNode.containerInfo,r=!0,l.child.return=l,l=l.child;continue}}else if(Bo(e,l),null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break;for(;null===l.sibling;){if(null===l.return||l.return===t)return;l=l.return,4===l.tag&&(a=!1)}l.sibling.return=l.return,l=l.sibling}}function Yo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=null!==n?n.lastEffect:null,null!==n){var r=n=n.next;do{3===(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,null!=n){r=t.memoizedProps;var l=null!==e?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(n[wl]=r,"input"===e&&"radio"===r.type&&null!=r.name&&ae(n,r),Pe(e,l),t=Pe(e,r),l=0;l<a.length;l+=2){var o=a[l],i=a[l+1];"style"===o?Oe(n,i):"dangerouslySetInnerHTML"===o?ke(n,i):"children"===o?we(n,i):S(n,o,i,t)}switch(e){case"input":ue(n,r);break;case"textarea":me(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,a=r.value,null!=a?fe(n,!!r.multiple,a,!1):e!==!!r.multiple&&(null!=r.defaultValue?fe(n,!!r.multiple,r.defaultValue,!0):fe(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(u(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return n=t.stateNode,void(n.hydrate&&(n.hydrate=!1,_t(n.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(mi=fa(),Vo(t.child,!0)),void Go(t);case 19:return void Go(t);case 17:return;case 23:case 24:return void Vo(t,null!==t.memoizedState)}throw Error(u(163))}function Go(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Do),t.forEach((function(t){var r=dc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Xo(e,t){return null!==e&&(e=e.memoizedState,null===e||null!==e.dehydrated)&&(t=t.memoizedState,null!==t&&null===t.dehydrated)}var Jo=Math.ceil,Zo=C.ReactCurrentDispatcher,ei=C.ReactCurrentOwner,ti=0,ni=null,ri=null,li=0,ai=0,ui=Ll(0),oi=0,ii=null,ci=0,si=0,fi=0,di=0,pi=null,mi=0,vi=1/0;function hi(){vi=fa()+500}var gi,bi=null,yi=!1,ki=null,wi=null,Ei=!1,Si=null,Ci=90,Oi=[],xi=[],Ni=null,Pi=0,_i=null,Ti=-1,Li=0,Mi=0,ji=null,Ri=!1;function zi(){return 0!==(48&ti)?fa():-1!==Ti?Ti:Ti=fa()}function Ii(e){if(e=e.mode,0===(2&e))return 1;if(0===(4&e))return 99===da()?1:2;if(0===Li&&(Li=ci),0!==ba.transition){0!==Mi&&(Mi=null!==pi?pi.pendingLanes:0),e=Li;var t=4186112&~Mi;return t&=-t,0===t&&(e=4186112&~e,t=e&-e,0===t&&(t=8192)),t}return e=da(),0!==(4&ti)&&98===e?e=Gt(12,Li):(e=$t(e),e=Gt(e,Li)),e}function Di(e,t,n){if(50<Pi)throw Pi=0,_i=null,Error(u(185));if(e=Ai(e,t),null===e)return null;Zt(e,t,n),e===ni&&(fi|=t,4===oi&&Vi(e,li));var r=da();1===t?0!==(8&ti)&&0===(48&ti)?Bi(e):(Fi(e,n),0===ti&&(hi(),ha())):(0===(4&ti)||98!==r&&99!==r||(null===Ni?Ni=new Set([e]):Ni.add(e)),Fi(e,n)),pi=e}function Ai(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,n=e.alternate,null!==n&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Fi(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var o=31-en(u),i=1<<o,c=a[o];if(-1===c){if(0===(i&r)||0!==(i&l)){c=t,Wt(i);var s=Ht;a[o]=10<=s?c+250:6<=s?c+5e3:-1}}else c<=t&&(e.expiredLanes|=i);u&=~i}if(r=Kt(e,e===ni?li:0),t=Ht,0===r)null!==n&&(n!==aa&&Yl(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==aa&&Yl(n)}15===t?(n=Bi.bind(null,e),null===oa?(oa=[n],ia=Kl(ea,ga)):oa.push(n),n=aa):14===t?n=va(99,Bi.bind(null,e)):(n=qt(t),n=va(n,Ui.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Ui(e){if(Ti=-1,Mi=Li=0,0!==(48&ti))throw Error(u(327));var t=e.callbackNode;if(ac()&&e.callbackNode!==t)return null;var n=Kt(e,e===ni?li:0);if(0===n)return null;var r=n,l=ti;ti|=16;var a=Gi();ni===e&&li===r||(hi(),Ki(e,r));do{try{Zi();break}catch(i){Yi(e,i)}}while(1);if(Ca(),Zo.current=a,ti=l,null!==ri?r=0:(ni=null,li=0,r=oi),0!==(ci&fi))Ki(e,0);else if(0!==r){if(2===r&&(ti|=64,e.hydrate&&(e.hydrate=!1,ml(e.containerInfo)),n=Yt(e),0!==n&&(r=Xi(e,n))),1===r)throw t=ii,Ki(e,0),Vi(e,n),Fi(e,fa()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(u(345));case 2:nc(e);break;case 3:if(Vi(e,n),(62914560&n)===n&&(r=mi+500-fa(),10<r)){if(0!==Kt(e,0))break;if(l=e.suspendedLanes,(l&n)!==n){zi(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=dl(nc.bind(null,e),r);break}nc(e);break;case 4:if(Vi(e,n),(4186112&n)===n)break;for(r=e.eventTimes,l=-1;0<n;){var o=31-en(n);a=1<<o,o=r[o],o>l&&(l=o),n&=~a}if(n=l,n=fa()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Jo(n/1960))-n,10<n){e.timeoutHandle=dl(nc.bind(null,e),n);break}nc(e);break;case 5:nc(e);break;default:throw Error(u(329))}}return Fi(e,fa()),e.callbackNode===t?Ui.bind(null,e):null}function Vi(e,t){for(t&=~di,t&=~fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function Bi(e){if(0!==(48&ti))throw Error(u(327));if(ac(),e===ni&&0!==(e.expiredLanes&li)){var t=li,n=Xi(e,t);0!==(ci&fi)&&(t=Kt(e,t),n=Xi(e,t))}else t=Kt(e,0),n=Xi(e,t);if(0!==e.tag&&2===n&&(ti|=64,e.hydrate&&(e.hydrate=!1,ml(e.containerInfo)),t=Yt(e),0!==t&&(n=Xi(e,t))),1===n)throw n=ii,Ki(e,0),Vi(e,t),Fi(e,fa()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,nc(e),Fi(e,fa()),null}function Qi(){if(null!==Ni){var e=Ni;Ni=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Fi(e,fa())}))}ha()}function Hi(e,t){var n=ti;ti|=1;try{return e(t)}finally{ti=n,0===ti&&(hi(),ha())}}function Wi(e,t){var n=ti;ti&=-2,ti|=8;try{return e(t)}finally{ti=n,0===ti&&(hi(),ha())}}function $i(e,t){jl(ui,ai),ai|=t,ci|=t}function qi(){ai=ui.current,Ml(ui)}function Ki(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,pl(n)),null!==ri)for(n=ri.return;null!==n;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,null!==r&&void 0!==r&&Ul();break;case 3:nu(),Ml(Il),Ml(zl),gu();break;case 5:lu(r);break;case 4:nu();break;case 13:Ml(au);break;case 19:Ml(au);break;case 10:Oa(r);break;case 23:case 24:qi()}n=n.return}ni=e,ri=gc(e.current,null),li=ai=ci=t,oi=0,ii=null,di=fi=si=0}function Yi(e,t){do{var n=ri;try{if(Ca(),bu.current=Zu,Cu){for(var r=wu.memoizedState;null!==r;){var l=r.queue;null!==l&&(l.pending=null),r=r.next}Cu=!1}if(ku=0,Su=Eu=wu=null,Ou=!1,ei.current=null,null===n||null===n.return){oi=1,ii=t,ri=null;break}e:{var a=e,u=n.return,o=n,i=t;if(t=li,o.flags|=2048,o.firstEffect=o.lastEffect=null,null!==i&&"object"===typeof i&&"function"===typeof i.then){var c=i;if(0===(2&o.mode)){var s=o.alternate;s?(o.updateQueue=s.updateQueue,o.memoizedState=s.memoizedState,o.lanes=s.lanes):(o.updateQueue=null,o.memoizedState=null)}var f=0!==(1&au.current),d=u;do{var p;if(p=13===d.tag){var m=d.memoizedState;if(null!==m)p=null!==m.dehydrated;else{var v=d.memoizedProps;p=void 0!==v.fallback&&(!0!==v.unstable_avoidThisFallback||!f)}}if(p){var h=d.updateQueue;if(null===h){var g=new Set;g.add(c),d.updateQueue=g}else h.add(c);if(0===(2&d.mode)){if(d.flags|=64,o.flags|=16384,o.flags&=-2981,1===o.tag)if(null===o.alternate)o.tag=17;else{var b=Ma(-1,1);b.tag=2,ja(o,b)}o.lanes|=1;break e}i=void 0,o=t;var y=a.pingCache;if(null===y?(y=a.pingCache=new Ro,i=new Set,y.set(c,i)):(i=y.get(c),void 0===i&&(i=new Set,y.set(c,i))),!i.has(o)){i.add(o);var k=fc.bind(null,a,c,o);c.then(k,k)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);i=Error((G(o.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==oi&&(oi=2),i=Mo(i,o),d=u;do{switch(d.tag){case 3:a=i,d.flags|=4096,t&=-t,d.lanes|=t;var w=zo(d,a,t);Ra(d,w);break e;case 1:a=i;var E=d.type,S=d.stateNode;if(0===(64&d.flags)&&("function"===typeof E.getDerivedStateFromError||null!==S&&"function"===typeof S.componentDidCatch&&(null===wi||!wi.has(S)))){d.flags|=4096,t&=-t,d.lanes|=t;var C=Io(d,a,t);Ra(d,C);break e}}d=d.return}while(null!==d)}tc(n)}catch(O){t=O,ri===n&&null!==n&&(ri=n=n.return);continue}break}while(1)}function Gi(){var e=Zo.current;return Zo.current=Zu,null===e?Zu:e}function Xi(e,t){var n=ti;ti|=16;var r=Gi();ni===e&&li===t||Ki(e,t);do{try{Ji();break}catch(l){Yi(e,l)}}while(1);if(Ca(),ti=n,Zo.current=r,null!==ri)throw Error(u(261));return ni=null,li=0,oi}function Ji(){for(;null!==ri;)ec(ri)}function Zi(){for(;null!==ri&&!Gl();)ec(ri)}function ec(e){var t=gi(e.alternate,e,ai);e.memoizedProps=e.pendingProps,null===t?tc(e):ri=t,ei.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(2048&t.flags)){if(n=To(n,t,ai),null!==n)return void(ri=n);if(n=t,24!==n.tag&&23!==n.tag||null===n.memoizedState||0!==(1073741824&ai)||0===(4&n.mode)){for(var r=0,l=n.child;null!==l;)r|=l.lanes|l.childLanes,l=l.sibling;n.childLanes=r}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Lo(t),null!==n)return n.flags&=2047,void(ri=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,null!==t)return void(ri=t);ri=t=e}while(null!==t);0===oi&&(oi=5)}function nc(e){var t=da();return ma(99,rc.bind(null,e,t)),null}function rc(e,t){do{ac()}while(null!==Si);if(0!==(48&ti))throw Error(u(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null;var r=n.lanes|n.childLanes,l=r,a=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;for(var o=e.eventTimes,i=e.expirationTimes;0<a;){var c=31-en(a),s=1<<c;l[c]=0,o[c]=-1,i[c]=-1,a&=~s}if(null!==Ni&&0===(24&r)&&Ni.has(e)&&Ni.delete(e),e===ni&&(ri=ni=null,li=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(l=ti,ti|=32,ei.current=null,il=un,o=Dr(),Ar(o)){if("selectionStart"in o)i={start:o.selectionStart,end:o.selectionEnd};else e:if(i=(i=o.ownerDocument)&&i.defaultView||window,(s=i.getSelection&&i.getSelection())&&0!==s.rangeCount){i=s.anchorNode,a=s.anchorOffset,c=s.focusNode,s=s.focusOffset;try{i.nodeType,c.nodeType}catch(x){i=null;break e}var f=0,d=-1,p=-1,m=0,v=0,h=o,g=null;t:for(;;){for(var b;;){if(h!==i||0!==a&&3!==h.nodeType||(d=f+a),h!==c||0!==s&&3!==h.nodeType||(p=f+s),3===h.nodeType&&(f+=h.nodeValue.length),null===(b=h.firstChild))break;g=h,h=b}for(;;){if(h===o)break t;if(g===i&&++m===a&&(d=f),g===c&&++v===s&&(p=f),null!==(b=h.nextSibling))break;h=g,g=h.parentNode}h=b}i=-1===d||-1===p?null:{start:d,end:p}}else i=null;i=i||{start:0,end:0}}else i=null;cl={focusedElem:o,selectionRange:i},un=!1,ji=null,Ri=!1,bi=r;do{try{lc()}catch(x){if(null===bi)throw Error(u(330));sc(bi,x),bi=bi.nextEffect}}while(null!==bi);ji=null,bi=r;do{try{for(o=e;null!==bi;){var y=bi.flags;if(16&y&&we(bi.stateNode,""),128&y){var k=bi.alternate;if(null!==k){var w=k.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(1038&y){case 2:Wo(bi),bi.flags&=-3;break;case 6:Wo(bi),bi.flags&=-3,Yo(bi.alternate,bi);break;case 1024:bi.flags&=-1025;break;case 1028:bi.flags&=-1025,Yo(bi.alternate,bi);break;case 4:Yo(bi.alternate,bi);break;case 8:i=bi,Ko(o,i);var E=i.alternate;Qo(i),null!==E&&Qo(E)}bi=bi.nextEffect}}catch(x){if(null===bi)throw Error(u(330));sc(bi,x),bi=bi.nextEffect}}while(null!==bi);if(w=cl,k=Dr(),y=w.focusedElem,o=w.selectionRange,k!==y&&y&&y.ownerDocument&&Ir(y.ownerDocument.documentElement,y)){null!==o&&Ar(y)&&(k=o.start,w=o.end,void 0===w&&(w=k),"selectionStart"in y?(y.selectionStart=k,y.selectionEnd=Math.min(w,y.value.length)):(w=(k=y.ownerDocument||document)&&k.defaultView||window,w.getSelection&&(w=w.getSelection(),i=y.textContent.length,E=Math.min(o.start,i),o=void 0===o.end?E:Math.min(o.end,i),!w.extend&&E>o&&(i=o,o=E,E=i),i=zr(y,E),a=zr(y,o),i&&a&&(1!==w.rangeCount||w.anchorNode!==i.node||w.anchorOffset!==i.offset||w.focusNode!==a.node||w.focusOffset!==a.offset)&&(k=k.createRange(),k.setStart(i.node,i.offset),w.removeAllRanges(),E>o?(w.addRange(k),w.extend(a.node,a.offset)):(k.setEnd(a.node,a.offset),w.addRange(k)))))),k=[];for(w=y;w=w.parentNode;)1===w.nodeType&&k.push({element:w,left:w.scrollLeft,top:w.scrollTop});for("function"===typeof y.focus&&y.focus(),y=0;y<k.length;y++)w=k[y],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}un=!!il,cl=il=null,e.current=n,bi=r;do{try{for(y=e;null!==bi;){var S=bi.flags;if(36&S&&Uo(y,bi.alternate,bi),128&S){k=void 0;var C=bi.ref;if(null!==C){var O=bi.stateNode;switch(bi.tag){case 5:k=O;break;default:k=O}"function"===typeof C?C(k):C.current=k}}bi=bi.nextEffect}}catch(x){if(null===bi)throw Error(u(330));sc(bi,x),bi=bi.nextEffect}}while(null!==bi);bi=null,ua(),ti=l}else e.current=n;if(Ei)Ei=!1,Si=e,Ci=t;else for(bi=r;null!==bi;)t=bi.nextEffect,bi.nextEffect=null,8&bi.flags&&(S=bi,S.sibling=null,S.stateNode=null),bi=t;if(r=e.pendingLanes,0===r&&(wi=null),1===r?e===_i?Pi++:(Pi=0,_i=e):Pi=0,n=n.stateNode,$l&&"function"===typeof $l.onCommitFiberRoot)try{$l.onCommitFiberRoot(Wl,n,void 0,64===(64&n.current.flags))}catch(x){}if(Fi(e,fa()),yi)throw yi=!1,e=ki,ki=null,e;return 0!==(8&ti)||ha(),null}function lc(){for(;null!==bi;){var e=bi.alternate;Ri||null===ji||(0!==(8&bi.flags)?ut(bi,ji)&&(Ri=!0):13===bi.tag&&Xo(e,bi)&&ut(bi,ji)&&(Ri=!0));var t=bi.flags;0!==(256&t)&&Fo(e,bi),0===(512&t)||Ei||(Ei=!0,va(97,(function(){return ac(),null}))),bi=bi.nextEffect}}function ac(){if(90!==Ci){var e=97<Ci?97:Ci;return Ci=90,ma(e,ic)}return!1}function uc(e,t){Oi.push(t,e),Ei||(Ei=!0,va(97,(function(){return ac(),null})))}function oc(e,t){xi.push(t,e),Ei||(Ei=!0,va(97,(function(){return ac(),null})))}function ic(){if(null===Si)return!1;var e=Si;if(Si=null,0!==(48&ti))throw Error(u(331));var t=ti;ti|=32;var n=xi;xi=[];for(var r=0;r<n.length;r+=2){var l=n[r],a=n[r+1],o=l.destroy;if(l.destroy=void 0,"function"===typeof o)try{o()}catch(c){if(null===a)throw Error(u(330));sc(a,c)}}for(n=Oi,Oi=[],r=0;r<n.length;r+=2){l=n[r],a=n[r+1];try{var i=l.create;l.destroy=i()}catch(c){if(null===a)throw Error(u(330));sc(a,c)}}for(i=e.current.firstEffect;null!==i;)e=i.nextEffect,i.nextEffect=null,8&i.flags&&(i.sibling=null,i.stateNode=null),i=e;return ti=t,ha(),!0}function cc(e,t,n){t=Mo(n,t),t=zo(e,t,1),ja(e,t),t=zi(),e=Ai(e,1),null!==e&&(Zt(e,1,t),Fi(e,t))}function sc(e,t){if(3===e.tag)cc(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){cc(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"===typeof n.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===wi||!wi.has(r))){e=Mo(t,e);var l=Io(n,e,1);if(ja(n,l),l=zi(),n=Ai(n,1),null!==n)Zt(n,1,l),Fi(n,l);else if("function"===typeof r.componentDidCatch&&(null===wi||!wi.has(r)))try{r.componentDidCatch(t,e)}catch(a){}break}}n=n.return}}function fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=zi(),e.pingedLanes|=e.suspendedLanes&n,ni===e&&(li&n)===n&&(4===oi||3===oi&&(62914560&li)===li&&500>fa()-mi?Ki(e,0):di|=n),Fi(e,t)}function dc(e,t){var n=e.stateNode;null!==n&&n.delete(t),t=0,0===t&&(t=e.mode,0===(2&t)?t=1:0===(4&t)?t=99===da()?1:2:(0===Li&&(Li=ci),t=Xt(62914560&~Li),0===t&&(t=4194304))),n=zi(),e=Ai(e,t),null!==e&&(Zt(e,t,n),Fi(e,n))}function pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function mc(e,t,n,r){return new pc(e,t,n,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hc(e){if("function"===typeof e)return vc(e)?1:0;if(void 0!==e&&null!==e){if(e=e.$$typeof,e===M)return 11;if(e===z)return 14}return 2}function gc(e,t){var n=e.alternate;return null===n?(n=mc(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bc(e,t,n,r,l,a){var o=2;if(r=e,"function"===typeof e)vc(e)&&(o=1);else if("string"===typeof e)o=5;else e:switch(e){case N:return yc(n.children,l,a,t);case F:o=8,l|=16;break;case P:o=8,l|=1;break;case _:return e=mc(12,n,t,8|l),e.elementType=_,e.type=_,e.lanes=a,e;case j:return e=mc(13,n,t,l),e.type=j,e.elementType=j,e.lanes=a,e;case R:return e=mc(19,n,t,l),e.elementType=R,e.lanes=a,e;case U:return kc(n,l,a,t);case V:return e=mc(24,n,t,l),e.elementType=V,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case T:o=10;break e;case L:o=9;break e;case M:o=11;break e;case z:o=14;break e;case I:o=16,r=null;break e;case D:o=22;break e}throw Error(u(130,null==e?e:typeof e,""))}return t=mc(o,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function yc(e,t,n,r){return e=mc(7,e,r,t),e.lanes=n,e}function kc(e,t,n,r){return e=mc(23,e,r,t),e.elementType=U,e.lanes=n,e}function wc(e,t,n){return e=mc(6,e,null,t),e.lanes=n,e}function Ec(e,t,n){return t=mc(4,null!==e.children?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sc(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Jt(0),this.expirationTimes=Jt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jt(0),this.mutableSourceEagerHydrationData=null}function Cc(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Oc(e,t,n,r){var l=t.current,a=zi(),o=Ii(l);e:if(n){n=n._reactInternals;t:{if(tt(n)!==n||1!==n.tag)throw Error(u(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break t;case 1:if(Fl(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break t}}i=i.return}while(null!==i);throw Error(u(171))}if(1===n.tag){var c=n.type;if(Fl(c)){n=Bl(n,c,i);break e}}n=i}else n=Rl;return null===t.context?t.context=n:t.pendingContext=n,t=Ma(a,o),t.payload={element:e},r=void 0===r?null:r,null!==r&&(t.callback=r),ja(l,t),Di(l,o,a),o}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nc(e,t){if(e=e.memoizedState,null!==e&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Pc(e,t){Nc(e,t),(e=e.alternate)&&Nc(e,t)}function _c(){return null}function Tc(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Sc(e,t,null!=n&&!0===n.hydrate),t=mc(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,Ta(t),e[El]=n.current,Zr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var l=t._getVersion;l=l(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l)}this._internalRoot=n}function Lc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Mc(e,t){if(t||(t=e?9===e.nodeType?e.documentElement:e.firstChild:null,t=!(!t||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Tc(e,0,t?{hydrate:!0}:void 0)}function jc(e,t,n,r,l){var a=n._reactRootContainer;if(a){var u=a._internalRoot;if("function"===typeof l){var o=l;l=function(){var e=xc(u);o.call(e)}}Oc(t,u,e,l)}else{if(a=n._reactRootContainer=Mc(n,r),u=a._internalRoot,"function"===typeof l){var i=l;l=function(){var e=xc(u);i.call(e)}}Wi((function(){Oc(t,u,e,l)}))}return xc(u)}function Rc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Lc(t))throw Error(u(200));return Cc(e,t,null,n)}gi=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Il.current)lo=!0;else{if(0===(n&r)){switch(lo=!1,t.tag){case 3:vo(t),vu();break;case 5:ru(t);break;case 1:Fl(t.type)&&Ql(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var l=t.type._context;jl(ka,l._currentValue),l._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(n&t.child.childLanes)?wo(e,t,n):(jl(au,1&au.current),t=Po(e,t,n),null!==t?t.sibling:null);jl(au,1&au.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(64&e.flags)){if(r)return No(e,t,n);t.flags|=64}if(l=t.memoizedState,null!==l&&(l.rendering=null,l.tail=null,l.lastEffect=null),jl(au,au.current),r)break;return null;case 23:case 24:return t.lanes=0,co(e,t,n)}return Po(e,t,n)}lo=0!==(16384&e.flags)}else lo=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,l=Al(t,zl.current),Na(t,n),l=Pu(null,t,r,e,l,n),t.flags|=1,"object"===typeof l&&null!==l&&"function"===typeof l.render&&void 0===l.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fl(r)){var a=!0;Ql(t)}else a=!1;t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,Ta(t);var o=r.getDerivedStateFromProps;"function"===typeof o&&Aa(t,r,o,e),l.updater=Fa,t.stateNode=l,l._reactInternals=t,Qa(t,r,e,n),t=mo(null,t,r,!0,a,n)}else t.tag=0,ao(null,t,l,n),t=t.child;return t;case 16:l=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=hc(l),e=ya(l,e),a){case 0:t=fo(null,t,l,e,n);break e;case 1:t=po(null,t,l,e,n);break e;case 11:t=uo(null,t,l,e,n);break e;case 14:t=oo(null,t,l,ya(l.type,e),r,n);break e}throw Error(u(306,l,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ya(r,l),fo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ya(r,l),po(e,t,r,l,n);case 3:if(vo(t),r=t.updateQueue,null===e||null===r)throw Error(u(282));if(r=t.pendingProps,l=t.memoizedState,l=null!==l?l.element:null,La(e,t),za(t,r,null,n),r=t.memoizedState.element,r===l)vu(),t=Po(e,t,n);else{if(l=t.stateNode,(a=l.hydrate)&&(iu=vl(t.stateNode.containerInfo.firstChild),ou=t,a=cu=!0),a){if(e=l.mutableSourceEagerHydrationData,null!=e)for(l=0;l<e.length;l+=2)a=e[l],a._workInProgressVersionPrimary=e[l+1],hu.push(a);for(n=Ya(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else ao(e,t,r,n),vu();t=t.child}return t;case 5:return ru(t),null===e&&du(t),r=t.type,l=t.pendingProps,a=null!==e?e.memoizedProps:null,o=l.children,fl(r,l)?o=null:null!==a&&fl(r,a)&&(t.flags|=16),so(e,t),ao(e,t,o,n),t.child;case 6:return null===e&&du(t),null;case 13:return wo(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Ka(t,null,r,n):ao(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ya(r,l),uo(e,t,r,l,n);case 7:return ao(e,t,t.pendingProps,n),t.child;case 8:return ao(e,t,t.pendingProps.children,n),t.child;case 12:return ao(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value;var i=t.type._context;if(jl(ka,i._currentValue),i._currentValue=a,null!==o)if(i=o.value,a=Lr(i,a)?0:0|("function"===typeof r._calculateChangedBits?r._calculateChangedBits(i,a):1073741823),0===a){if(o.children===l.children&&!Il.current){t=Po(e,t,n);break e}}else for(i=t.child,null!==i&&(i.return=t);null!==i;){var c=i.dependencies;if(null!==c){o=i.child;for(var s=c.firstContext;null!==s;){if(s.context===r&&0!==(s.observedBits&a)){1===i.tag&&(s=Ma(-1,n&-n),s.tag=2,ja(i,s)),i.lanes|=n,s=i.alternate,null!==s&&(s.lanes|=n),xa(i.return,n),c.lanes|=n;break}s=s.next}}else o=10===i.tag&&i.type===t.type?null:i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===t){o=null;break}if(i=o.sibling,null!==i){i.return=o.return,o=i;break}o=o.return}i=o}ao(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps,r=a.children,Na(t,n),l=Pa(l,a.unstable_observedBits),r=r(l),t.flags|=1,ao(e,t,r,n),t.child;case 14:return l=t.type,a=ya(l,t.pendingProps),a=ya(l.type,a),oo(e,t,l,a,r,n);case 15:return io(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ya(r,l),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Fl(r)?(e=!0,Ql(t)):e=!1,Na(t,n),Va(t,r,l),Qa(t,r,l,n),mo(null,t,r,!0,e,n);case 19:return No(e,t,n);case 23:return co(e,t,n);case 24:return co(e,t,n)}throw Error(u(156,t.tag))},Tc.prototype.render=function(e){Oc(e,this._internalRoot,null,null)},Tc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Oc(null,e,null,(function(){t[El]=null}))},ot=function(e){if(13===e.tag){var t=zi();Di(e,4,t),Pc(e,4)}},it=function(e){if(13===e.tag){var t=zi();Di(e,67108864,t),Pc(e,67108864)}},ct=function(e){if(13===e.tag){var t=zi(),n=Ii(e);Di(e,n,t),Pc(e,n)}},st=function(e,t){return t()},Te=function(e,t,n){switch(t){case"input":if(ue(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(u(90));te(r),ue(r,l)}}}break;case"textarea":me(e,n);break;case"select":t=n.value,null!=t&&fe(e,!!n.multiple,t,!1)}},Ie=Hi,De=function(e,t,n,r,l){var a=ti;ti|=4;try{return ma(98,e.bind(null,t,n,r,l))}finally{ti=a,0===ti&&(hi(),ha())}},Ae=function(){0===(49&ti)&&(Qi(),ac())},Fe=function(e,t){var n=ti;ti|=2;try{return e(t)}finally{ti=n,0===ti&&(hi(),ha())}};var zc={Events:[Ol,xl,Nl,Re,ze,ac,{current:!1}]},Ic={findFiberByHostInstance:Cl,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Dc={bundleType:Ic.bundleType,version:Ic.version,rendererPackageName:Ic.rendererPackageName,rendererConfig:Ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=at(e),null===e?null:e.stateNode},findFiberByHostInstance:Ic.findFiberByHostInstance||_c,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Wl=Ac.inject(Dc),$l=Ac}catch(Fc){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc,t.createPortal=Rc,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(u(188));throw Error(u(268,Object.keys(e)))}return e=at(t),e=null===e?null:e.stateNode,e},t.flushSync=function(e,t){var n=ti;if(0!==(48&n))return e(t);ti|=1;try{if(e)return ma(99,e.bind(null,t))}finally{ti=n,ha()}},t.hydrate=function(e,t,n){if(!Lc(t))throw Error(u(200));return jc(null,e,t,!0,n)},t.render=function(e,t,n){if(!Lc(t))throw Error(u(200));return jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Lc(e))throw Error(u(40));return!!e._reactRootContainer&&(Wi((function(){jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[El]=null}))})),!0)},t.unstable_batchedUpdates=Hi,t.unstable_createPortal=function(e,t){return Rc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lc(n))throw Error(u(200));if(null==e||void 0===e._reactInternals)throw Error(u(38));return jc(e,t,n,!1,r)},t.version="17.0.2"},d2b4:function(e,t,n){"use strict";n.r(t);var r=n("544c"),l=(n("ba56"),n("bc5d")),a=(n("6338"),n("93bf"),n("8a1d"),n("44fa"),n("ab5b")),u=n.n(a),o=n("8bc8"),i=Object.assign;
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
function c(e){const t=Object(a["useRef"])();return t.current||(t.current={current:e()}),Object(a["useDebugValue"])(t.current),t.current}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */function s(e,t){return!Object.is(e,t)}function f(e,t,n=s){const r=c(e),l=Object(a["useRef"])(t);return n(l.current,t)&&(r.current=e(),l.current=t),r}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */function d(e,t,n=s){const r=Object(a["useRef"])(e),l=Object(a["useRef"])(t);return n(l.current,t)&&(r.current=e,l.current=t),r.current}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */function p(e){const{current:t}=c(e);return Object(a["useDebugValue"])(t),t}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
function m({read:e,subscribe:t,shouldUpdate:n=s}){const[r,l]=Object(a["useState"])(()=>({read:e,subscribe:t,shouldUpdate:n,value:e()}));let u=r.value;return r.read===e&&r.subscribe===t&&r.shouldUpdate===n||(u=e(),l({read:e,subscribe:t,shouldUpdate:n,value:u})),Object(a["useDebugValue"])(u),Object(a["useEffect"])(()=>{let r=!0;const a=()=>{if(r){const r=e();l(l=>l.read!==e||l.subscribe!==t||l.shouldUpdate!==n?l:n(l.value,r)?i(i({},l),{value:r}):l)}},u=t(a);return a(),()=>{r=!1,u&&u()}},[e,t,n]),u}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */var v="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,h=v;
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
h?a["useLayoutEffect"]:a["useEffect"];
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
function g(e,t,n=s){const r=f(e,t,n).current;return Object(a["useDebugValue"])(r),r}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */new Map;
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Lyon Software Technologies, Inc.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Lyon Software Technologies, Inc.
 * @copyright Lyon Software Technologies, Inc. 2020
 */
var b=Object.prototype.hasOwnProperty,y=Object.getOwnPropertySymbols,k=Object.prototype.propertyIsEnumerable,w=Object.assign,E=(e,t)=>{var n={};for(var r in e)b.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&y)for(var r of y(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n},S=class{constructor(){this.suspenseCache=new Map,this.initialized=!1,this.listeners=new Set}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}consume(e){this.ref={current:e},this.listeners.forEach(t=>{t(e)})}hydrate(e){this.initialized||(this.ref={current:e})}get value(){if(null==this.ref)throw new Error("Unexpected missing model reference.");return this.ref.current}get cache(){return this.suspenseCache}},C=S,O=class extends Error{constructor(e){super(`\n  The scoped model '${e}' is missing from the ancestor component tree.\n  Make sure that the model's Provider is mounted first before trying to access\n  the model's state.\n  `),this.modelName=e}},x=O,N=0;function P(){const e=N;return N+=1,e}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function _(e,t={}){const n=Object(a["createContext"])(null),r=P(),l=t.displayName||"ScopedModel-"+r;function o(t){const r=Object(a["useContext"])(n);if(!r)throw new x(l);const u=e(t);r.hydrate(u),Object(a["useEffect"])(()=>{r.initialized=!0,r.consume(u)},[r,u]),Object(a["useDebugValue"])(u)}const i=e=>(o(e),null),c=Object(a["memo"])(i,t.shouldUpdate),s=e=>{var{children:t}=e,r=E(e,["children"]);const l=p(()=>new C);return u.a.createElement(n.Provider,{value:l},u.a.createElement(c,w({},r)),t)};return s.propTypes=t.propTypes,s.defaultProps=t.defaultProps,{context:n,Provider:s,displayName:l}}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
function T(e){return _(e=>e,e)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function L(e,t){return!Object.is(e,t)}function M(e,t,n=L){if(e===t)return!1;if(e.length!==t.length)return!0;for(let r=0;r<e.length;r+=1)if(n(e[r],t[r]))return!0;return!1}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function j(e){const t=Object(a["useContext"])(e.context);if(!t)throw new x(e.displayName);return t}function R(e,t){return!(Object.is(e[0],t[0])&&Object.is(e[1],t[1]))}function z(e,t){if(e===t)return!1;if(e.length!==t.length)return!0;for(let n=0;n<e.length;n+=1)if(!Object.is(e[n],t[n]))return!0;return!1}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function I(e,t,n=L){const r=j(e),l=g(()=>({read:()=>t(r.value),subscribe:e=>r.subscribe(e),shouldUpdate:n}),[r,n],z),u=m(l);return Object(a["useDebugValue"])(u),u}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function D(e,t,n=L){return()=>I(e,t,n)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function A(e,t,n=L){const r=d((e,t)=>M(e,t,n),n),l=I(e,t,r);return Object(a["useDebugValue"])(l),l}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function F(e,t,n=L){return()=>A(e,t,n)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
function U(e,t=L){const n=j(e),r=g(()=>({read:()=>n.value,subscribe:e=>n.subscribe(e),shouldUpdate:t}),[n,t],R),l=m(r);return Object(a["useDebugValue"])(l),l}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function V(e,t=L){return()=>U(e,t)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
var B=_,Q=T(),H="undefined"===typeof window?a["useEffect"]:a["useLayoutEffect"];
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
function W(e){H((function(){return function(){e()}}),[])}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */function $(e){var t=Object(a["useRef"])();return t.current||(t.current={value:e()}),t.current.value}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */function q(e){return $((function(){return e}))}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var K,Y,G=B((function(){var e=u.a.useState(!1),t=e[0],n=e[1],r=u.a.useState(!1),l=r[0],a=r[1],o=u.a.useState(!1),i=o[0],c=o[1],s=u.a.useState(0),f=s[0],d=s[1],p=u.a.useState(!1),m=p[0],v=p[1],h=u.a.useState(!1),g=h[0],b=h[1],y=u.a.useState(null),k=y[0],w=y[1],E=u.a.useState(),S=E[0],C=E[1],O=u.a.useState(),x=O[0],N=O[1],P=u.a.useState(),_=P[0],T=P[1];return{visibleControls:t,isSeekbarHover:l,isSeekbarSeeking:i,seekbarPercentage:f,isVolumeControlsOpen:m,isVolumebarSeeking:g,settingsTab:k,lastActiveSubtitle:S,activeThumbnail:x,nodPurpose:_,setVisibleControls:n,setIsSeekbarHover:a,setIsSeekbarSeeking:c,setSeekbarPercentage:d,setIsVolumeControlsOpen:v,setIsVolumebarSeeking:b,setSettingsTab:w,setLastActiveSubtitle:C,setActiveThumbnail:N,setNodPurpose:T}})),X=D(Q,(function(e){return e.emitter})),J=D(G,(function(e){return e.setVisibleControls})),Z=B((function(){var e=u.a.useRef(null),t=X(),n=J(),r=q((function(){e.current&&(clearTimeout(e.current),e.current=null),n(!0),e.current=window.setTimeout((function(){n(!1),e.current=null}),2e3)})),l=q((function(){e.current&&(clearTimeout(e.current),e.current=null),n(!1)}));return H((function(){return t.on("show",r),function(){return t.off("show",r)}}),[t,r]),W((function(){e.current&&(clearTimeout(e.current),e.current=null)})),{showControls:r,hideControls:l}}));
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */(function(e){e["ERROR"]="error",e["LOADING"]="loading",e["START"]="start",e["CONTROLS"]="controls"})(K||(K={})),function(e){e[e["NONE"]=0]="NONE",e[e["OPTIONS"]=1]="OPTIONS",e[e["TRACKS"]=2]="TRACKS",e[e["SUBTITLES"]=3]="SUBTITLES",e[e["PLAYBACKRATES"]=4]="PLAYBACKRATES"}(Y||(Y={}));
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
var ee=D(Q,(function(e){return e.instance})),te=D(G,(function(e){return e.setSettingsTab})),ne=B((function(){var e=ee(),t=te(),n=q((function(){t((function(e){return e||e!==Y.NONE?Y.NONE:Y.OPTIONS}))})),l=u.a.useCallback((function(n){var l=n.target,a=function(t){var n=e.container.querySelector("."+t);return!!n&&(n===l||n.contains(l))};a(r["g"])||a(r["jb"])||t(Y.NONE)}),[e.container,t]);return{toggleSettings:n,closeSettings:l}})),re=D(G,(function(e){return e.setNodPurpose})),le=B((function(){var e=Object(a["useRef"])(null),t=re(),n=q((function(n){e.current&&(window.clearTimeout(e.current),e.current=null),t(n),e.current=window.setTimeout((function(){t(null),e.current=null}),500)}));return W((function(){e.current&&(window.clearTimeout(e.current),e.current=null)})),{triggerNod:n}})),ae=D(Q,(function(e){return e.instance})),ue=D(G,(function(e){return e.setLastActiveSubtitle})),oe=B((function(){var e=ae(),t=ue(),n=Object(a["useMemo"])((function(){return e.getModule("SubtitlesExtension")}),[e]),r=Object(a["useCallback"])((function(e){e&&t(e),n&&n.setSubtitle(e?e.srclang:null)["catch"]((function(){}))}),[n,t]);return{selectSubtitle:r}}));function ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var ce=F(Q,(function(e){return ie(e.instance,e.player)})),se=D(G,(function(e){return e.lastActiveSubtitle})),fe=D(oe,(function(e){return e.selectSubtitle})),de=B((function(){var e=ce(),t=e[0],n=e[1],r=se(),l=fe(),a=u.a.useCallback((function(){var e=r;if(!e){var a=t.config.subtitles;e=a[0]}n.subtitle||l(e)}),[t.config.subtitles,r,n.subtitle,l]);return{toggleActiveSubtitle:a}})),pe=D(Q,(function(e){return e.instance})),me=B((function(){var e=pe(),t=Object(a["useMemo"])((function(){return e.getModule("PipExtension")}),[e]),n=Object(a["useCallback"])((function(){t&&t.togglePip()}),[t]);return{togglePip:n}}));
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
function ve(e,t){var n=Object(a["useRef"])(!0);H((function(){if(!n.current)return e();n.current=!1}),t)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function he(e,t,n){if(n){var l=[],a=function(e,t){l.push({eventName:e,data:t})};t.visibleControls&&!n.visibleControls?a(r["f"].UI_VISIBLECONTROLS_CHANGE,{visibleControls:!0}):!t.visibleControls&&n.visibleControls&&a(r["f"].UI_VISIBLECONTROLS_CHANGE,{visibleControls:!1}),t.view!==n.view&&a(r["f"].UI_VIEW_CHANGE,{view:t.view}),l.length&&(l.forEach((function(t){var n=t.eventName,r=t.data;e.emit(n,r)})),e.emit(r["f"].UI_STATE_CHANGE,{state:t,prevState:n}));var u=e.getModule("SubtitlesExtension");u&&(t.visibleControls&&!n.visibleControls?u.setOffset(42):!t.visibleControls&&n.visibleControls&&u.setOffset(0))}}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */function ge(e){var t=function(e){return(Math.pow(10,2)+Math.floor(e)).toString().substring(1)},n=Math.ceil(e),r="",l=Math.trunc(n/3600)%24;l&&(r+=t(l)+":");var a=Math.trunc(n/60)%60;r+=t(a)+":";var u=Math.trunc(n%60);return r+=""+t(u),r}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var be=u.a.createRef(),ye=u.a.createRef(),ke=u.a.createRef();
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
function we(e,t){var n=[];if(e.length>0){var r=[];e.forEach((function(e){var l=t(e);r.includes(l)||(n.push(e),r.push(l))}))}return n}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var Ee={"en-US":{Play:"Play",Pause:"Pause",Mute:"Mute",Unmute:"Unmute",Miniplayer:"Miniplayer",Settings:"Settings","Full screen":"Full screen","Exit full screen":"Exit full screen",Speed:"Speed","Normal speed":"Normal",Subtitles:"Subtitles","No subtitles":"None",Quality:"Quality","Automatic quality":"Auto","Enable subtitles":"Enable subtitles","Disable subtitles":"Disable subtitles"},"nl-BE":{Play:"Afspelen",Pause:"Pauzeren",Mute:"Dempen",Unmute:"Unmute",Miniplayer:"Mini speler",Settings:"Instellingen","Full screen":"Volledig scherm","Exit full screen":"Volledig scherm afsluiten",Speed:"Snelheid","Normal speed":"Normale snelheid",Subtitles:"Ondertitels","No subtitles":"Geen",Quality:"Kwaliteit","Automatic quality":"Automatisch","Enable subtitles":"Ondertitels aan","Disable subtitles":"Ondertitels uit"},"de-DE":{Play:"Wiedergabe",Pause:"Pause",Mute:"Stummschalten",Unmute:"Stummschaltung aufheben",Miniplayer:"Miniplayer",Settings:"Einstellungen","Full screen":"Vollbild","Exit full screen":"Vollbildmodus verlassen",Speed:"Geschwindigkeit","Normal speed":"Normal",Subtitles:"Untertitel","No subtitles":"Aus",Quality:"Qualität","Automatic quality":"Automatisch","Enable subtitles":"Untertitel an","Disable subtitles":"Untertitel aus"},"hi-IN":{Play:"चलाएँ",Pause:"रोकें",Mute:"ध्वनि बंद करें",Unmute:"ध्वनि शुरू करें",Miniplayer:"लघु संस्करण",Settings:"नियंत्रण","Full screen":"पूर्ण संस्करण","Exit full screen":"पूर्ण संस्करण से बाहर निकलें",Speed:"गति","Normal speed":"सामान्य",Subtitles:"उपशीर्षक","No subtitles":"उपशीर्षक उपलब्ध नहीं है",Quality:"गुणवत्ता","Automatic quality":"स्वचालित","Enable subtitles":"उपशीर्षक जारी रखें","Disable subtitles":"उपशीर्षक बंद करें"},"mr-IN":{Play:"चालू करा",Pause:"थांबवा",Mute:"आवाज बंद करा ",Unmute:"आवाज सुरू करा",Miniplayer:"लघु आवृत्ती",Settings:"नियंत्रणे","Full screen":"पूर्ण आवृत्ती","Exit full screen":"पूर्ण आवृत्तीतून बाहेर पडा",Speed:"गति","Normal speed":"सामान्य",Subtitles:"उपशीर्षके","No subtitles":"उपशीर्षके उपलब्ध नाहीत",Quality:"गुणवत्ता","Automatic quality":"स्वयंचलित","Enable subtitles":"उपशीर्षके सूरू करा","Disable subtitles":"उपशीर्षके बंद करा"}},Se=function(e){return function(t){return Ee[e]&&Ee[e][t]?Ee[e][t]:t}},Ce=D(Q,(function(e){return e.instance})),Oe=B((function(){var e=Ce(),t=Object(a["useCallback"])((function(t){return Se(e.config.ui.locale)(t)}),[e]);return{getTranslation:t}})),xe=F(Q,(function(e){return ie(e.instance,e.player)})),Ne=F(G,(function(e){return ie(e.visibleControls,e.isVolumeControlsOpen)})),Pe=F(G,(function(e){return ie(e.isSeekbarSeeking,e.isVolumebarSeeking,e.settingsTab,e.seekbarPercentage,e.nodPurpose,e.activeThumbnail,e.isSeekbarHover)})),_e=D(Oe,(function(e){return e.getTranslation})),Te=B((function(){var e,t,n,l=xe(),a=l[0],u=l[1],o=K.LOADING;u.ready&&u.waitingForUser&&(o=K.START),u.videoSessionStarted&&(o=K.CONTROLS),u.playRequested&&!u.started&&(o=K.LOADING),u.error&&(o=K.ERROR);var i,c,s=Ne(),f=s[0],d=s[1],p=Pe(),m=p[0],v=p[1],h=p[2],g=p[3],b=p[4],y=p[5],k=p[6];((m||v||h||a.config.ui.lockControlsVisibility)&&(f=!0),v&&(d=!0),u.adBreak)&&(i={progressPercentage:(null!=(c=u.adBreakCurrentTime)?c:0)/u.adBreak.duration});var w,E=0;u.duration&&(E=(null!=(w=u.currentTime)?w:0)/u.duration);m&&(E=g),i&&(E=i.progressPercentage);var S=[];u.duration&&u.adBreaks.length&&(S=u.adBreaks.filter((function(e){return e.type===r["b"].MIDROLL&&!e.hasBeenWatched})).map((function(e){return null==u.duration?0:e.startsAt/u.duration})));var C="";u.duration&&(C=ge(u.duration));var O,x=ge(null!=(e=u.currentTime)?e:0);u.error&&(O=u.error);var N=!0;(i||(null==(t=a.env)?void 0:t.isMobile))&&(N=!1);var P="";u.duration&&(P=ge(g*u.duration));var _=g;if(be.current&&ye.current){var T=be.current.getBoundingClientRect().width,L=ye.current.getBoundingClientRect().width,M=L/2/T;_<M?_=M:_>1-M&&(_=1-M)}var j=g;if(be.current&&ke.current){var R=be.current.getBoundingClientRect().width,z=ke.current.getBoundingClientRect().width,I=z/2/R;j<I?j=I:j>1-I&&(j=1-I)}var D,A=[].concat(u.tracks).sort((function(e,t){return Number(t.height)-Number(e.height)})),F=we(A,(function(e){return e.height}));u.track&&(D=F.find((function(e){var t;return e.id===(null==(t=u.track)?void 0:t.id)})));var U=D;u.trackAutoSwitch&&(U="auto");var V=a.config.subtitles||[],B=u.subtitle,Q=[Y.PLAYBACKRATES];V.length&&Q.push(Y.SUBTITLES),F.length&&Q.push(Y.TRACKS);var H=_e();return{view:o,visibleControls:f,isCenterClickAllowed:N,settingsTab:h,visibleSettingsTabs:Q,isMobile:!!(null==(n=a.env)?void 0:n.isMobile),image:a.config.ui.image,nodIcon:null!=b?b:"",playRequested:u.playRequested,paused:u.paused,rebuffering:u.buffering,tracks:F,activeTrack:D,selectedTrack:U,error:O,cuePoints:S,timeStatPosition:x,timeStatDuration:C,playbackRate:u.playbackRate,pip:u.pip,pipSupported:a.config.ui.pip,progressPercentage:E,bufferedPercentage:u.bufferedPercentage,isSeekbarHover:k,isSeekbarSeeking:m,seekbarPercentage:g,seekbarTooltipText:P,seekbarTooltipPercentage:_,seekbarThumbnailPercentage:j,fullscreenSupported:u.fullscreenSupported,isFullscreen:u.fullscreen,adBreakData:i,isVolumeControlsOpen:d,volumeBarPercentage:u.volume,subtitles:V,activeSubtitle:B,activeThumbnail:y,getTranslation:H,liveOnly:a.config.ui.liveOnly}})),Le=D(Q,(function(e){return e.instance})),Me=F(Z,(function(e){return ie(e.showControls,e.hideControls)})),je=D(ne,(function(e){return e.closeSettings})),Re=D(le,(function(e){return e.triggerNod})),ze=D(de,(function(e){return e.toggleActiveSubtitle})),Ie=D(me,(function(e){return e.togglePip})),De=V(Te);function Ae(e){var t=e.children,n=Le(),l=Me(),a=l[0],o=l[1],i=je(),c=Re(),s=ze(),f=Ie();H((function(){n.container.addEventListener("mouseenter",a),n.container.addEventListener("mousemove",a),n.container.addEventListener("mousedown",a),n.container.addEventListener("mouseleave",o),window.addEventListener("mousedown",i);var e=function(e){a(),c(e.purpose),e.purpose===r["i"].REQUEST_TOGGLE_SUBTITLES&&s(),e.purpose===r["i"].REQUEST_TOGGLE_MINIPLAYER&&f()};return n.on(r["f"].KEYBOARDNAVIGATION_KEYDOWN,e),function(){n.container.removeEventListener("mouseenter",a),n.container.removeEventListener("mousemove",a),n.container.removeEventListener("mousedown",a),n.container.removeEventListener("mouseleave",o),window.removeEventListener("mousedown",i),n.off(r["f"].KEYBOARDNAVIGATION_KEYDOWN,e)}}),[n]);var d=De(),p=u.a.useRef();return ve((function(){he(n,d,p.current),p.current=d}),[d]),u.a.createElement(u.a.Fragment,null,t)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var Fe=D(Q,(function(e){return e.instance})),Ue=B((function(){var e=Fe(),t=Object(a["useCallback"])((function(t){e.setPlaybackRate(t)}),[e]);return{setPlaybackRate:t}})),Ve=F(Q,(function(e){return ie(e.instance,e.player)})),Be=D(le,(function(e){return e.triggerNod})),Qe=B((function(){var e=Ve(),t=e[0],n=e[1],l=Be(),a=u.a.useCallback((function(e){n.playRequested?(t.pause(),"center"===e&&l(r["i"].PAUSE)):(t.play(),"center"===e&&l(r["i"].PLAY))}),[n.playRequested,t,l]);return{playOrPause:a}})),He=D(Q,(function(e){return e.instance})),We=B((function(){var e=He(),t=u.a.useCallback((function(t){e.selectTrack(t)}),[e]);return{selectTrack:t}})),$e=F(Q,(function(e){return ie(e.instance,e.player,e.emitter)})),qe=F(G,(function(e){return ie(e.setIsSeekbarHover,e.setIsSeekbarSeeking,e.setSeekbarPercentage,e.setActiveThumbnail)})),Ke=B((function(){var e=$e(),t=e[0],n=e[1],r=e[2],l=qe(),a=l[0],o=l[1],i=l[2],c=l[3],s=u.a.useMemo((function(){return t.getModule("ThumbnailsExtension")}),[t]),f=u.a.useCallback((function(e,l){var u,f,d=null;(e.hover||e.seeking)&&s&&(d=s.getThumbnail(e.percentage*(null!=(u=n.duration)?u:0)));(a(e.hover),o(e.seeking),i(e.percentage),c(d),!e.seeking&&l.seeking)&&(r.emit("show",null),t.seekTo((null!=(f=n.duration)?f:0)*e.percentage))}),[t,a,o,i,c,n.duration,r,s]);return{setSeekbarState:f}})),Ye=D(Q,(function(e){return e.instance})),Ge=B((function(){var e=Ye(),t=Object(a["useMemo"])((function(){return e.getModule("FullscreenExtension")}),[e]),n=Object(a["useCallback"])((function(){t&&t.toggleFullscreen()}),[t]);return{toggleFullscreen:n}})),Xe=F(Q,(function(e){return ie(e.instance,e.player)})),Je=B((function(){var e=Xe(),t=e[0],n=e[1],r=u.a.useCallback((function(){n.volume?t.setVolume(0):t.setVolume(1)}),[n,t]);return{toggleMute:r}})),Ze=F(Q,(function(e){return ie(e.instance,e.emitter)})),et=D(G,(function(e){return e.setIsVolumebarSeeking})),tt=B((function(){var e=Ze(),t=e[0],n=e[1],r=et(),l=u.a.useCallback((function(e,l){if(r(e.seeking),!e.seeking&&l.seeking&&n.emit("show",null),e.seeking){var a=e.percentage;t.setVolume(a)}}),[n,t,r]);return{setVolumeBarState:l}})),nt=D(Q,(function(e){return e.instance})),rt=D(G,(function(e){return e.setIsVolumeControlsOpen})),lt=B((function(){var e=nt(),t=rt(),n=u.a.useCallback((function(n){var r;(null==(r=e.env)?void 0:r.isMobile)||t(n)}),[e,t]);return{setVolumeControlsOpen:n}}));
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
function at(e){var t=e.elements,n=e.children;return u.a.createElement(u.a.Fragment,null,t.reduceRight((function(e,t){return u.a.cloneElement(t,{},e)}),n))}function ut(e){var t=e.instance,n=e.player,r=e.emitter,l=e.children,a=u.a.useMemo((function(){return[u.a.createElement(Q.Provider,{instance:t,player:n,emitter:r}),u.a.createElement(G.Provider,null),u.a.createElement(le.Provider,null),u.a.createElement(Oe.Provider,null),u.a.createElement(Ue.Provider,null),u.a.createElement(Ke.Provider,null),u.a.createElement(oe.Provider,null),u.a.createElement(We.Provider,null),u.a.createElement(ne.Provider,null),u.a.createElement(Ge.Provider,null),u.a.createElement(Je.Provider,null),u.a.createElement(me.Provider,null),u.a.createElement(Z.Provider,null),u.a.createElement(tt.Provider,null),u.a.createElement(lt.Provider,null),u.a.createElement(Qe.Provider,null),u.a.createElement(de.Provider,null),u.a.createElement(Te.Provider,null),u.a.createElement(Ae,null)]}),[t,n,r]);return u.a.createElement(at,{elements:a},l)}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var ot=Object(a["memo"])((function(e){var t=e.source,n=Object(a["useMemo"])((function(){return{backgroundImage:t?"url("+t+")":void 0}}),[t]);return t?Object(a["createElement"])("div",{className:r["kb"],style:n}):null}));Object(l["c"])({name:"qp85dy",styles:"@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');}"});var it=Object(l["a"])({name:"1o7n14w",styles:"font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-moz-font-feature-settings:'liga';-webkit-font-feature-settings:'liga';font-feature-settings:'liga';-moz-osx-font-smoothing:grayscale"}),ct=Object(a["memo"])((function(e){var t=e.value;return Object(a["createElement"])("i",{className:Object(l["b"])(r["lb"],it,r["mb"][t])},t)})),st=D(Te,(function(e){return e.image})),ft=D(Qe,(function(e){return e.playOrPause})),dt=Object(a["memo"])((function(){var e=st(),t=ft(),n=Object(a["useCallback"])((function(){t()}),[t]);return Object(a["createElement"])("button",{type:"button",onClick:n,className:r["nb"]},Object(a["createElement"])(ot,{source:e}),Object(a["createElement"])(ct,{value:r["ob"].PLAY}))})),pt=D(Te,(function(e){return e.error})),mt=Object(a["memo"])((function(){var e=pt();if(!e)return null;var t="Uh oh!",n="Something went wrong "+(e.code?"("+e.code+")":"");return Object(a["createElement"])("div",{className:r["pb"]},Object(a["createElement"])("div",null,Object(a["createElement"])("div",{"data-text":t,className:r["qb"]},t),Object(a["createElement"])("div",null,n)))})),vt=Object(a["memo"])((function(){return Object(a["createElement"])("div",{className:r["rb"]})})),ht=D(Te,(function(e){return e.image})),gt=Object(a["memo"])((function(){var e=ht();return Object(a["createElement"])("div",{className:r["sb"]},Object(a["createElement"])(ot,{source:e}),Object(a["createElement"])(vt,null))})),bt=D(Te,(function(e){return e.nodIcon})),yt=u.a.memo((function(){var e,t=bt();return u.a.createElement("div",{className:Object(l["b"])(r["tb"],(e={},e[r["ub"]]=!!t,e))},u.a.createElement(ct,{value:t}))}));
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */
function kt(e){var t,n=e.children,o=e.onClick,i=e.icon,c=e.tooltip,s=e.disabled,f=e.active,d=e.className,p=Object(a["useState"])(!1),m=p[0],v=p[1],h=Object(a["useState"])(!1),g=h[0],b=h[1],y=u.a.useCallback((function(){g||v(!0)}),[g]),k=q((function(){return v(!1)})),w=q((function(){b(!0),v(!0)})),E=Object(a["useCallback"])((function(e){b(!1),o(e)}),[o]);return u.a.createElement("button",{type:"button",tabIndex:0,onMouseEnter:y,onMouseLeave:k,onTouchStart:w,onTouchEnd:k,onTouchCancel:k,onClick:E,className:Object(l["b"])(r["vb"],(t={},t[null!=d?d:""]=!!d,t[r["wb"]]=s,t[r["xb"]]=f,t))},n,i&&u.a.createElement(ct,{value:i}),m&&c&&u.a.createElement("span",{className:r["yb"]},c))}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var wt=Object(a["memo"])((function(e){var t=e.item,n=e.onClick,l=e.selected,u=e.label,o=e.info,i=Object(a["useCallback"])((function(e){n(t),e.stopPropagation()}),[n,t]);return Object(a["createElement"])(kt,{key:u,className:r["c"],onClick:i,active:t===l},u,o&&Object(a["createElement"])("span",{className:r["d"]},o))})),Et=Object(a["memo"])((function(e){var t=e.children;return Object(a["createElement"])("div",{className:r["e"]},t)})),St=F(Te,(function(e){return ie(e.visibleSettingsTabs,e.getTranslation,e.activeTrack,e.activeSubtitle,e.playbackRate)})),Ct=D(G,(function(e){return e.setSettingsTab})),Ot=Object(a["memo"])((function(){var e=St(),t=e[0],n=e[1],l=e[2],u=e[3],o=e[4],i=Ct();return t.length>0?Object(a["createElement"])(Et,null,t.includes(Y.TRACKS)&&Object(a["createElement"])(wt,{item:Y.TRACKS,label:n("Quality"),info:""+(l?l.width:""),onClick:i}),t.includes(Y.SUBTITLES)&&Object(a["createElement"])(wt,{item:Y.SUBTITLES,label:n("Subtitles"),info:u?u.label:"",onClick:i}),t.includes(Y.PLAYBACKRATES)&&Object(a["createElement"])(wt,{item:Y.PLAYBACKRATES,label:n("Speed"),info:""+o,onClick:i})):Object(a["createElement"])("div",{className:r["h"]},"No settings available")})),xt=Object(a["memo"])((function(e){var t=e.title,n=e.onBackClick,l=e.onOptionsClick;return Object(a["createElement"])("div",{className:r["j"]},!!n&&Object(a["createElement"])(kt,{onClick:n,className:r["l"],icon:r["ob"].BACK}),t,!!l&&Object(a["createElement"])(kt,{onClick:l,className:r["m"]},"Options"))})),Nt=F(Te,(function(e){return ie(e.getTranslation,e.playbackRate)})),Pt=D(G,(function(e){return e.setSettingsTab})),_t=D(Ue,(function(e){return e.setPlaybackRate})),Tt=D(ne,(function(e){return e.toggleSettings})),Lt=u.a.memo((function(){var e=Nt(),t=e[0],n=e[1],r=Pt(),l=_t(),a=Tt(),o=u.a.useCallback((function(e){l(e),a()}),[l,a]),i=u.a.useCallback((function(){r(Y.OPTIONS)}),[r]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(xt,{title:t("Speed"),onBackClick:i}),u.a.createElement(Et,null,u.a.createElement(wt,{item:.25,selected:n,label:"x0.25",onClick:o}),u.a.createElement(wt,{item:.5,selected:n,label:"x0.5",onClick:o}),u.a.createElement(wt,{item:1,selected:n,label:t("Normal speed"),onClick:o}),u.a.createElement(wt,{item:1.5,selected:n,label:"x1.5",onClick:o}),u.a.createElement(wt,{item:2,selected:n,label:"x2",onClick:o})))})),Mt=F(Te,(function(e){return ie(e.getTranslation,e.subtitles,e.activeSubtitle)})),jt=D(G,(function(e){return e.setSettingsTab})),Rt=D(oe,(function(e){return e.selectSubtitle})),zt=D(ne,(function(e){return e.toggleSettings})),It=u.a.memo((function(){var e=Mt(),t=e[0],n=e[1],r=e[2],l=jt(),a=Rt(),o=zt(),i=u.a.useCallback((function(e){a(e),o()}),[a,o]),c=u.a.useCallback((function(){l(Y.OPTIONS)}),[l]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(xt,{title:t("Subtitles"),onBackClick:c}),u.a.createElement(Et,null,u.a.createElement(wt,{selected:r,label:t("No Subtitles"),onClick:i,item:null}),n.map((function(e){return u.a.createElement(wt,{item:e,selected:r,label:e.label,onClick:i,key:e.label})}))))})),Dt=F(Te,(function(e){return ie(e.getTranslation,e.tracks,e.selectedTrack)})),At=D(G,(function(e){return e.setSettingsTab})),Ft=D(We,(function(e){return e.selectTrack})),Ut=D(ne,(function(e){return e.toggleSettings})),Vt=u.a.memo((function(){var e=Dt(),t=e[0],n=e[1],r=e[2],l=At(),a=Ft(),o=Ut(),i=u.a.useCallback((function(e){a(e),o()}),[a,o]),c=u.a.useCallback((function(){l(Y.OPTIONS)}),[l]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(xt,{title:t("Quality"),onBackClick:c}),u.a.createElement(Et,null,u.a.createElement(wt,{item:"auto",selected:r,label:t("Automatic quality"),onClick:i}),n.map((function(e){return u.a.createElement(wt,{item:e,selected:r,label:""+e.width,onClick:i,key:e.width})}))))})),Bt=D(Te,(function(e){return e.settingsTab})),Qt=u.a.memo((function(){var e=Bt();switch(e){case Y.OPTIONS:return u.a.createElement(Ot,null);case Y.PLAYBACKRATES:return u.a.createElement(Lt,null);case Y.SUBTITLES:return u.a.createElement(It,null);case Y.TRACKS:return u.a.createElement(Vt,null);case Y.NONE:return null;default:return null}})),Ht=F(Te,(function(e){return ie(e.settingsTab,e.isMobile)})),Wt=D(ne,(function(e){return e.toggleSettings})),$t=u.a.memo((function(){var e=Ht(),t=e[0],n=e[1],l=Wt();return t?u.a.createElement("div",{className:r["g"]},u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(kt,{className:r["n"],onClick:l},"×")),u.a.createElement(Qt,null)):null}));var qt=Object(l["a"])({name:"w1atjl",styles:"width:100%;height:100%"}),Kt=Object(a["memo"])((function(e){var t=e.className,n=e.width,r=e.height,l=e.src,u=e.x,o=e.y;return Object(a["createElement"])("div",{className:t},Object(a["createElement"])("svg",{className:qt,viewBox:"0 0 "+n+" "+r},Object(a["createElement"])("defs",null,Object(a["createElement"])("clipPath",{id:"square"},Object(a["createElement"])("rect",{width:n,height:r}))),Object(a["createElement"])("g",{clipPath:"url(#square)"},Object(a["createElement"])("image",{href:l,transform:"translate(-"+u+" -"+o+")"}))))})),Yt=D(Te,(function(e){return e.isSeekbarSeeking?e.activeThumbnail:null})),Gt=D(Ge,(function(e){return e.toggleFullscreen})),Xt=D(Qe,(function(e){return e.playOrPause})),Jt=Object(a["memo"])((function(){var e=Yt(),t=Gt(),n=Xt(),l=Object(a["useCallback"])((function(){n("center")}),[n]);return Object(a["createElement"])("div",{className:r["o"],onClick:l,onDoubleClick:t},e&&Object(a["createElement"])(Kt,Object.assign({className:r["p"]},e)))})),Zt=Object(a["memo"])((function(){return Object(a["createElement"])("div",{className:r["q"]},Object(a["createElement"])(vt,null))}));function en(e,t){H((function(){if(e.current){var n=e.current,l={hover:!1,seeking:!1,percentage:0},a=function(e){var t=l;return l=Object(r["hb"])({},l,e),t},u=function(e){var t=window.scrollX||window.pageXOffset,r=n.getBoundingClientRect(),l=(e-(r.left+t))/r.width;return l=Math.min(Math.max(l,0),1),l},o=function(){var e=a({hover:!0});t(l,e)},i=function(){var e=a({hover:!1});t(l,e)},c=function(e){e.preventDefault();var n=a({seeking:!0,percentage:u(e.pageX)});t(l,n)},s=function(e){if(l.hover||l.seeking){var n=a({percentage:u(e.pageX)});t(l,n)}},f=function(){if(l.seeking){var e=a({seeking:!1});t(l,e)}},d=function(e){if(e.preventDefault(),e.touches.length){var n=a({hover:!0,seeking:!0,percentage:u(e.touches[0].pageX)});t(l,n)}},p=function(e){if(e.touches.length){var n=a({percentage:u(e.touches[0].pageX)});t(l,n)}},m=function(){if(l.seeking){var e=a({hover:!1,seeking:!1});t(l,e)}};return n.addEventListener("mouseenter",o),n.addEventListener("mouseleave",i),n.addEventListener("mousedown",c),n.addEventListener("touchstart",d,{passive:!1}),window.addEventListener("mousemove",s),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("mouseup",f),window.addEventListener("touchend",m,{passive:!1}),function(){n.removeEventListener("mouseenter",o),n.removeEventListener("mouseleave",i),n.removeEventListener("mousedown",c),n.removeEventListener("touchstart",d),window.removeEventListener("mousemove",s),window.removeEventListener("touchmove",p),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",m)}}}),[e.current,t])}
/**
 * @license
 * MIT License
 *
 * Copyright (c) 2020 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2020
 */var tn=D(tt,(function(e){return e.setVolumeBarState})),nn=D(Te,(function(e){return e.volumeBarPercentage})),rn=u.a.memo((function(){var e=u.a.useRef(null),t=tn();en(e,t);var n=nn(),l=u.a.useMemo((function(){return{transform:"scaleX("+n+")"}}),[n]),a=u.a.useMemo((function(){return{left:100*n+"%"}}),[n]);return u.a.createElement("div",{className:r["r"],ref:e},u.a.createElement("div",{className:r["s"]},u.a.createElement("div",{className:r["t"],style:l}),u.a.createElement("div",{className:r["u"],style:a})))})),ln=F(Te,(function(e){var t=r["ob"].VOLUME_OFF;e.volumeBarPercentage>.5?t=r["ob"].VOLUME:e.volumeBarPercentage>0&&(t=r["ob"].VOLUME_1);var n=e.getTranslation(0===e.volumeBarPercentage?"Unmute":"Mute")+" (m)";return ie(e.isVolumeControlsOpen,t,n)})),an=D(lt,(function(e){return e.setVolumeControlsOpen})),un=D(Je,(function(e){return e.toggleMute})),on=u.a.memo((function(){var e,t=ln(),n=t[0],a=t[1],o=t[2],i=an(),c=u.a.useCallback((function(){return i(!0)}),[i]),s=u.a.useCallback((function(){return i(!1)}),[i]),f=un();return u.a.createElement("div",{className:Object(l["b"])(r["v"],(e={},e[r["w"]]=n,e)),onMouseEnter:c,onMouseLeave:s},u.a.createElement(kt,{icon:a,onClick:f,tooltip:o}),u.a.createElement("div",{className:r["a"]},u.a.createElement("div",{className:r["z"]},u.a.createElement(rn,null))))})),cn=F(Te,(function(e){return ie(e.timeStatPosition,e.timeStatDuration,e.liveOnly)})),sn=Object(a["memo"])((function(){var e=cn(),t=e[0],n=e[1],l=e[2];return l?Object(a["createElement"])("div",{className:r["A"]},"Live"):Object(a["createElement"])("div",{className:r["A"]},Object(a["createElement"])("div",{className:r["B"]},t),Object(a["createElement"])("div",{className:r["C"]},n))})),fn=F(Te,(function(e){var t=function(t,n){return(e.getTranslation(t)+" "+(n?"("+n+")":"")).trim()};return ie(e.playRequested?r["ob"].PAUSE:r["ob"].PLAY,t(e.playRequested?"Pause":"Play","k"))})),dn=D(Qe,(function(e){return e.playOrPause})),pn=u.a.memo((function(){var e=fn(),t=e[0],n=e[1],l=dn(),a=u.a.useCallback((function(){l()}),[l]);return u.a.createElement(kt,{className:r["D"],icon:t,onClick:a,tooltip:n})})),mn=F(Te,(function(e){var t=function(t,n){return(e.getTranslation(t)+" "+(n?"("+n+")":"")).trim()};return ie(!!e.subtitles.length,!!e.activeSubtitle,t(e.activeSubtitle?"Disable subtitles":"Enable subtitles","c"))})),vn=D(de,(function(e){return e.toggleActiveSubtitle})),hn=u.a.memo((function(){var e=mn(),t=e[0],n=e[1],l=e[2],a=vn();return t?u.a.createElement(kt,{className:r["E"],icon:r["ob"].CC,onClick:a,active:n,tooltip:l}):null})),gn=F(Te,(function(e){var t=function(t,n){return(e.getTranslation(t)+" "+(n?"("+n+")":"")).trim()};return ie(e.isFullscreen?r["ob"].FULLSCREEN_EXIT:r["ob"].FULLSCREEN,t(e.isFullscreen?"Exit Fullscreen Mode":"Fullscreen Mode","f"),e.fullscreenSupported)})),bn=D(Ge,(function(e){return e.toggleFullscreen})),yn=u.a.memo((function(){var e=gn(),t=e[0],n=e[1],l=e[2],a=bn();return u.a.createElement(kt,{className:r["F"],icon:t,onClick:a,tooltip:n,disabled:!l})})),kn=F(Te,(function(e){var t=function(t,n){return(e.getTranslation(t)+" "+(n?"("+n+")":"")).trim()};return ie(e.pipSupported&&!e.pip,t("Miniplayer","i"))})),wn=D(me,(function(e){return e.togglePip})),En=u.a.memo((function(){var e=kn(),t=e[0],n=e[1],l=wn();return t?u.a.createElement(kt,{className:r["G"],icon:r["ob"].PIP,onClick:l,tooltip:n}):null})),Sn=F(Te,(function(e){var t=function(t,n){return(e.getTranslation(t)+" "+(n?"("+n+")":"")).trim()};return ie(t("Settings"),e.settingsTab!==Y.NONE)})),Cn=D(ne,(function(e){return e.toggleSettings})),On=u.a.memo((function(){var e=Sn(),t=e[0],n=e[1],l=Cn();return u.a.createElement(kt,{className:r["jb"],icon:r["ob"].SETTINGS,onClick:l,tooltip:t,active:n})})),xn=F(Te,(function(e){return ie(e.seekbarThumbnailPercentage,e.activeThumbnail)})),Nn=u.a.memo((function(){var e=xn(),t=e[0],n=e[1],l=u.a.useMemo((function(){return{left:100*t+"%"}}),[t]);return u.a.createElement("div",{ref:ke,className:r["H"],style:l},!!n&&u.a.createElement(Kt,Object.assign({className:r["I"]},n)))})),Pn=F(Te,(function(e){return ie(e.seekbarTooltipPercentage,e.seekbarTooltipText)})),_n=u.a.memo((function(){var e=Pn(),t=e[0],n=e[1],l=u.a.useMemo((function(){return{left:100*t+"%"}}),[t]);return u.a.createElement("div",{ref:ye,className:r["J"],style:l},n)})),Tn=D(Te,(function(e){return e.bufferedPercentage})),Ln=u.a.memo((function(){var e=Tn(),t=u.a.useMemo((function(){return{transform:"scaleX("+e+")"}}),[e]);return u.a.createElement("div",{className:r["K"],style:t})})),Mn=D(Te,(function(e){return e.progressPercentage})),jn=u.a.memo((function(){var e=Mn(),t=u.a.useMemo((function(){return{transform:"scaleX("+e+")"}}),[e]);return u.a.createElement("div",{className:r["L"],style:t})})),Rn=F(Te,(function(e){return ie(e.isSeekbarHover&&!e.isSeekbarSeeking,e.seekbarPercentage)})),zn=u.a.memo((function(){var e=Rn(),t=e[0],n=e[1],l=u.a.useMemo((function(){return{transform:"scaleX("+n+")"}}),[n]);return t?u.a.createElement("div",{className:r["M"],style:l}):null})),In=u.a.memo((function(e){var t=e.value,n=u.a.useMemo((function(){return{left:100*t+"%"}}),[t]);return u.a.createElement("div",{className:r["O"],style:n})})),Dn=F(Te,(function(e){return ie(e.adBreakData&&!!e.cuePoints.length,e.cuePoints)})),An=u.a.memo((function(){var e=Dn(),t=e[0],n=e[1];return t?u.a.createElement("div",{className:r["N"]},n.map((function(e){return u.a.createElement(In,{value:e})}))):null})),Fn=D(Te,(function(e){return e.progressPercentage})),Un=u.a.memo((function(){var e=Fn(),t=u.a.useMemo((function(){return{left:100*e+"%"}}),[e]);return u.a.createElement("div",{className:r["P"],style:t})})),Vn=D(Ke,(function(e){return e.setSeekbarState})),Bn=D(Te,(function(e){return ie(e.isSeekbarHover||e.isSeekbarSeeking,e.adBreakData,e.liveOnly)})),Qn=u.a.memo((function(){var e,t=Vn();en(be,t);var n=Bn(),a=n[0],o=n[1],i=n[2];return i?null:u.a.createElement("div",{className:Object(l["b"])(r["Q"],(e={},e[r["R"]]=a,e[r["S"]]=!!o,e)),ref:be},u.a.createElement(Nn,null),u.a.createElement(_n,null),u.a.createElement(Un,null),u.a.createElement("div",{className:r["T"]},u.a.createElement(Ln,null),u.a.createElement(jn,null),u.a.createElement(zn,null),u.a.createElement(An,null)))})),Hn=F(Te,(function(e){return ie(e.isCenterClickAllowed,e.rebuffering)})),Wn=Object(a["memo"])((function(){var e=Hn(),t=e[0],n=e[1];return Object(a["createElement"])(a["Fragment"],null,Object(a["createElement"])(yt,null),Object(a["createElement"])($t,null),t&&Object(a["createElement"])(Jt,null),n&&Object(a["createElement"])(Zt,null),Object(a["createElement"])("div",{className:r["U"]},Object(a["createElement"])(pn,null),Object(a["createElement"])(on,null),Object(a["createElement"])(sn,null),Object(a["createElement"])("div",{className:r["V"]},Object(a["createElement"])(Qn,null)),Object(a["createElement"])(hn,null),Object(a["createElement"])(En,null),Object(a["createElement"])(On,null),Object(a["createElement"])(yn,null)))})),$n=F(Te,(function(e){return ie(e.visibleControls,e.isMobile,e.pip,e.isFullscreen,e.view)})),qn=Object(a["memo"])((function(){var e,t=$n(),n=t[0],u=t[1],o=t[2],i=t[3],c=t[4],s=Object(l["b"])(r["W"],(e={},e[r["X"]]=n,e[r["Y"]]=u,e[r["Z"]]=o,e[r["ab"]]=i,e));return Object(a["createElement"])("div",{className:s},c===K.ERROR&&Object(a["createElement"])(mt,null),c===K.LOADING&&Object(a["createElement"])(gt,null),c===K.START&&Object(a["createElement"])(dt,null),c===K.CONTROLS&&Object(a["createElement"])(Wn,null))}));function Kn(e,t,n,l){var a=new r["bb"];l.current=function(){return a.emit("show",null)},Object(o["render"])(u.a.createElement(ut,{instance:n,player:t,emitter:a},u.a.createElement(qn,null)),e)}var Yn=function(e){function t(t){var n;n=e.call(this,t)||this,n.name="UiExtension",n.ref={current:null};var l=n.instance.container.querySelector("."+r["cb"]);return n.instance.on(r["f"].STATE_CHANGE,(function(e){var t=e.state;l&&Kn(l,t,n.instance,n.ref)})),n}Object(r["x"])(t,e);var n=t.prototype;return n.triggerMouseMove=function(){this.ref.current&&this.ref.current()},t}(r["k"]);t["default"]=Yn},fb07:function(e,t,n){"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,l,a,u;if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var i=Date,c=i.now();t.unstable_now=function(){return i.now()-c}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,f=null,d=function(){if(null!==s)try{var e=t.unstable_now();s(!0,e),s=null}catch(n){throw setTimeout(d,0),n}};r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(d,0))},l=function(e,t){f=setTimeout(e,t)},a=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},u=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,m=window.clearTimeout;if("undefined"!==typeof console){var v=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof v&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var h=!1,g=null,b=-1,y=5,k=0;t.unstable_shouldYield=function(){return t.unstable_now()>=k},u=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,E=w.port2;w.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();k=e+y;try{g(!0,e)?E.postMessage(null):(h=!1,g=null)}catch(n){throw E.postMessage(null),n}}else h=!1},r=function(e){g=e,h||(h=!0,E.postMessage(null))},l=function(e,n){b=p((function(){e(t.unstable_now())}),n)},a=function(){m(b),b=-1}}function S(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,l=e[r];if(!(void 0!==l&&0<x(l,t)))break e;e[r]=t,e[n]=l,n=r}}function C(e){return e=e[0],void 0===e?null:e}function O(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length;r<l;){var a=2*(r+1)-1,u=e[a],o=a+1,i=e[o];if(void 0!==u&&0>x(u,n))void 0!==i&&0>x(i,u)?(e[r]=i,e[o]=n,r=o):(e[r]=u,e[a]=n,r=a);else{if(!(void 0!==i&&0>x(i,n)))break e;e[r]=i,e[o]=n,r=o}}}return t}return null}function x(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var N=[],P=[],_=1,T=null,L=3,M=!1,j=!1,R=!1;function z(e){for(var t=C(P);null!==t;){if(null===t.callback)O(P);else{if(!(t.startTime<=e))break;O(P),t.sortIndex=t.expirationTime,S(N,t)}t=C(P)}}function I(e){if(R=!1,z(e),!j)if(null!==C(N))j=!0,r(D);else{var t=C(P);null!==t&&l(I,t.startTime-e)}}function D(e,n){j=!1,R&&(R=!1,a()),M=!0;var r=L;try{for(z(n),T=C(N);null!==T&&(!(T.expirationTime>n)||e&&!t.unstable_shouldYield());){var u=T.callback;if("function"===typeof u){T.callback=null,L=T.priorityLevel;var o=u(T.expirationTime<=n);n=t.unstable_now(),"function"===typeof o?T.callback=o:T===C(N)&&O(N),z(n)}else O(N);T=C(N)}if(null!==T)var i=!0;else{var c=C(P);null!==c&&l(I,c.startTime-n),i=!1}return i}finally{T=null,L=r,M=!1}}var A=u;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){j||M||(j=!0,r(D))},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_getFirstCallbackNode=function(){return C(N)},t.unstable_next=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=A,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},t.unstable_scheduleCallback=function(e,n,u){var o=t.unstable_now();switch("object"===typeof u&&null!==u?(u=u.delay,u="number"===typeof u&&0<u?o+u:o):u=o,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=u+i,e={id:_++,callback:n,priorityLevel:e,startTime:u,expirationTime:i,sortIndex:-1},u>o?(e.sortIndex=u,S(P,e),null===C(N)&&e===C(P)&&(R?a():R=!0,l(I,u-o))):(e.sortIndex=i,S(N,e),j||M||(j=!0,r(D))),e},t.unstable_wrapCallback=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}}]);
//# sourceMappingURL=chunk-17e99fd8.344880d9.js.map