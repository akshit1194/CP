(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},Bl={},bm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Qv=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),e_=Symbol.for("react.memo"),t_=Symbol.for("react.lazy"),mh=Symbol.iterator;function n_(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Nm={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Pm}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=Bs.prototype;function Yd(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Pm}var qd=Yd.prototype=new Dm;qd.constructor=Yd;Lm(qd,Bs.prototype);qd.isPureReactComponent=!0;var gh=Array.isArray,Um=Object.prototype.hasOwnProperty,Kd={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Im.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:t,key:s,ref:o,props:r,_owner:Kd.current}}function i_(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function r_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vh=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r_(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case Xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,gh(r)?(n="",t!=null&&(n=t.replace(vh,"$&/")+"/"),ja(r,e,n,"",function(u){return u})):r!=null&&(Zd(r)&&(r=i_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=ja(s,e,n,l,r)}else if(l=n_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oa(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function s_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Xa={transition:null},o_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:Kd};function Om(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:oa,forEach:function(t,e,n){oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oa(t,function(){e++}),e},toArray:function(t){return oa(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Bs;Ye.Fragment=$v;Ye.Profiler=qv;Ye.PureComponent=Yd;Ye.StrictMode=Yv;Ye.Suspense=Jv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o_;Ye.act=Om;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Um.call(e,l)&&!Im.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Zv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Kv,_context:t},t.Consumer=t};Ye.createElement=Fm;Ye.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Qv,render:t}};Ye.isValidElement=Zd;Ye.lazy=function(t){return{$$typeof:t_,_payload:{_status:-1,_result:t},_init:s_}};Ye.memo=function(t,e){return{$$typeof:e_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};Ye.unstable_act=Om;Ye.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ye.useContext=function(t){return Jt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ye.useId=function(){return Jt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Jt.current.useRef(t)};Ye.useState=function(t){return Jt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Jt.current.useTransition()};Ye.version="18.3.1";bm.exports=Ye;var H=bm.exports;const a_=jv(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=H,u_=Symbol.for("react.element"),c_=Symbol.for("react.fragment"),d_=Object.prototype.hasOwnProperty,f_=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h_={key:!0,ref:!0,__self:!0,__source:!0};function km(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)d_.call(e,i)&&!h_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:u_,type:t,key:s,ref:o,props:r,_owner:f_.current}}Bl.Fragment=c_;Bl.jsx=km;Bl.jsxs=km;Rm.exports=Bl;var P=Rm.exports,Bm={exports:{}},Sn={},zm={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var de=J-1>>>1,Ee=D[de];if(0<r(Ee,K))D[de]=K,D[J]=Ee,J=de;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var de=0,Ee=D.length,Te=Ee>>>1;de<Te;){var Ve=2*(de+1)-1,Y=D[Ve],V=Ve+1,$=D[V];if(0>r(Y,J))V<Ee&&0>r($,Y)?(D[de]=$,D[V]=J,de=V):(D[de]=Y,D[Ve]=J,de=Ve);else if(V<Ee&&0>r($,J))D[de]=$,D[V]=J,de=V;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function y(D){if(x=!1,g(D),!v)if(n(l)!==null)v=!0,Z(C);else{var K=n(u);K!==null&&ne(y,K.startTime-D)}}function C(D,K){v=!1,x&&(x=!1,c(b),b=-1),p=!0;var J=h;try{for(g(K),f=n(l);f!==null&&(!(f.expirationTime>K)||D&&!L());){var de=f.callback;if(typeof de=="function"){f.callback=null,h=f.priorityLevel;var Ee=de(f.expirationTime<=K);K=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&i(l),g(K)}else i(l);f=n(l)}if(f!==null)var Te=!0;else{var Ve=n(u);Ve!==null&&ne(y,Ve.startTime-K),Te=!1}return Te}finally{f=null,h=J,p=!1}}var T=!1,A=null,b=-1,w=5,M=-1;function L(){return!(t.unstable_now()-M<w)}function j(){if(A!==null){var D=t.unstable_now();M=D;var K=!0;try{K=A(!0,D)}finally{K?W():(T=!1,A=null)}}else T=!1}var W;if(typeof _=="function")W=function(){_(j)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ee=X.port2;X.port1.onmessage=j,W=function(){ee.postMessage(null)}}else W=function(){m(j,0)};function Z(D){A=D,T||(T=!0,W())}function ne(D,K){b=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Z(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var J=h;h=K;try{return D()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=h;h=D;try{return K()}finally{h=J}},t.unstable_scheduleCallback=function(D,K,J){var de=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?de+J:de):J=de,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,D={id:d++,callback:K,priorityLevel:D,startTime:J,expirationTime:Ee,sortIndex:-1},J>de?(D.sortIndex=J,e(u,D),n(l)===null&&D===n(u)&&(x?(c(b),b=-1):x=!0,ne(y,J-de))):(D.sortIndex=Ee,e(l,D),v||p||(v=!0,Z(C))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var K=h;return function(){var J=h;h=K;try{return D.apply(this,arguments)}finally{h=J}}}})(Hm);zm.exports=Hm;var p_=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=H,yn=p_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Eo={};function zr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Eo[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=Object.prototype.hasOwnProperty,g_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},xh={};function v_(t){return hc.call(xh,t)?!0:hc.call(_h,t)?!1:g_.test(t)?xh[t]=!0:(_h[t]=!0,!1)}function __(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x_(t,e,n,i){if(e===null||typeof e>"u"||__(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Ht[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);Ht[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x_(e,n,r,i)&&(n=null),i||r===null?v_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,aa=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),gc=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),jm=Symbol.for("react.offscreen"),yh=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,lu;function ao(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function y_(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case pc:return"Profiler";case tf:return"StrictMode";case mc:return"Suspense";case gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M_(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function la(t){t._valueTracker||(t._valueTracker=M_(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _c(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function xc(t,e){Ym(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&yc(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yc(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(lo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function qm(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ua,Zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ua=ua||document.createElement("div"),ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E_=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){E_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function Qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w_=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ec(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tc=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ac=null,xs=null,ys=null;function Th(t){if(t=Yo(t)){if(typeof Ac!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Wl(e),Ac(t.stateNode,t.type,e))}}function eg(t){xs?ys?ys.push(t):ys=[t]:xs=t}function tg(){if(xs){var t=xs,e=ys;if(ys=xs=null,Th(t),e)for(t=0;t<e.length;t++)Th(e[t])}}function ng(t,e){return t(e)}function ig(){}var du=!1;function rg(t,e,n){if(du)return t(e,n);du=!0;try{return ng(t,e,n)}finally{du=!1,(xs!==null||ys!==null)&&(ig(),tg())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Cc=!1;if(wi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Cc=!1}function T_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var mo=!1,fl=null,hl=!1,Rc=null,A_={onError:function(t){mo=!0,fl=t}};function C_(t,e,n,i,r,s,o,a,l){mo=!1,fl=null,T_.apply(A_,arguments)}function R_(t,e,n,i,r,s,o,a,l){if(C_.apply(this,arguments),mo){if(mo){var u=fl;mo=!1,fl=null}else throw Error(oe(198));hl||(hl=!0,Rc=u)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(Hr(t)!==t)throw Error(oe(188))}function b_(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ah(r),t;if(s===i)return Ah(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function og(t){return t=b_(t),t!==null?ag(t):null}function ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ag(t);if(e!==null)return e;t=t.sibling}return null}var lg=yn.unstable_scheduleCallback,Ch=yn.unstable_cancelCallback,P_=yn.unstable_shouldYield,L_=yn.unstable_requestPaint,Ct=yn.unstable_now,N_=yn.unstable_getCurrentPriorityLevel,of=yn.unstable_ImmediatePriority,ug=yn.unstable_UserBlockingPriority,pl=yn.unstable_NormalPriority,D_=yn.unstable_LowPriority,cg=yn.unstable_IdlePriority,zl=null,ni=null;function U_(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:O_,I_=Math.log,F_=Math.LN2;function O_(t){return t>>>=0,t===0?32:31-(I_(t)/F_|0)|0}var ca=64,da=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function k_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=k_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dg(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,lf,pg,mg,gg,Pc=!1,fa=[],Xi=null,$i=null,Yi=null,Ao=new Map,Co=new Map,Hi=[],H_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function V_(t,e,n,i,r){switch(e){case"focusin":return Xi=qs(Xi,t,e,n,i,r),!0;case"dragenter":return $i=qs($i,t,e,n,i,r),!0;case"mouseover":return Yi=qs(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ao.set(s,qs(Ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Co.set(s,qs(Co.get(s)||null,t,e,n,i,r)),!0}return!1}function vg(t){var e=Ar(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,gg(t.priority,function(){pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tc=i,n.target.dispatchEvent(i),Tc=null}else return e=Yo(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){$a(t)&&n.delete(e)}function G_(){Pc=!1,Xi!==null&&$a(Xi)&&(Xi=null),$i!==null&&$a($i)&&($i=null),Yi!==null&&$a(Yi)&&(Yi=null),Ao.forEach(bh),Co.forEach(bh)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Pc||(Pc=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,G_)))}function Ro(t){function e(r){return Ks(r,t)}if(0<fa.length){Ks(fa[0],t);for(var n=1;n<fa.length;n++){var i=fa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&Ks(Xi,t),$i!==null&&Ks($i,t),Yi!==null&&Ks(Yi,t),Ao.forEach(e),Co.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)vg(n),n.blockedOn===null&&Hi.shift()}var Ss=bi.ReactCurrentBatchConfig,gl=!0;function W_(t,e,n,i){var r=ot,s=Ss.transition;Ss.transition=null;try{ot=1,uf(t,e,n,i)}finally{ot=r,Ss.transition=s}}function j_(t,e,n,i){var r=ot,s=Ss.transition;Ss.transition=null;try{ot=4,uf(t,e,n,i)}finally{ot=r,Ss.transition=s}}function uf(t,e,n,i){if(gl){var r=Lc(t,e,n,i);if(r===null)Mu(t,e,i,vl,n),Rh(t,i);else if(V_(r,t,e,n,i))i.stopPropagation();else if(Rh(t,i),e&4&&-1<H_.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&hg(s),s=Lc(t,e,n,i),s===null&&Mu(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var vl=null;function Lc(t,e,n,i){if(vl=null,t=sf(i),t=Ar(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N_()){case of:return 1;case ug:return 4;case pl:case D_:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Wi=null,cf=null,Ya=null;function xg(){if(Ya)return Ya;var t,e=cf,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ya=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Ph(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:Ph,this.isPropagationStopped=Ph,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Mn(zs),$o=Et({},zs,{view:0,detail:0}),X_=Mn($o),hu,pu,Zs,Hl=Et({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(hu=t.screenX-Zs.screenX,pu=t.screenY-Zs.screenY):pu=hu=0,Zs=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Lh=Mn(Hl),$_=Et({},Hl,{dataTransfer:0}),Y_=Mn($_),q_=Et({},$o,{relatedTarget:0}),mu=Mn(q_),K_=Et({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Mn(K_),Q_=Et({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J_=Mn(Q_),ex=Et({},zs,{data:0}),Nh=Mn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ix[t])?!!e[t]:!1}function ff(){return rx}var sx=Et({},$o,{key:function(t){if(t.key){var e=tx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ox=Mn(sx),ax=Et({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=Mn(ax),lx=Et({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),ux=Mn(lx),cx=Et({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=Mn(cx),fx=Et({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Mn(fx),px=[9,13,27,32],hf=wi&&"CompositionEvent"in window,go=null;wi&&"documentMode"in document&&(go=document.documentMode);var mx=wi&&"TextEvent"in window&&!go,yg=wi&&(!hf||go&&8<go&&11>=go),Uh=" ",Ih=!1;function Sg(t,e){switch(t){case"keyup":return px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function gx(t,e){switch(t){case"compositionend":return Mg(e);case"keypress":return e.which!==32?null:(Ih=!0,Uh);case"textInput":return t=e.data,t===Uh&&Ih?null:t;default:return null}}function vx(t,e){if(as)return t==="compositionend"||!hf&&Sg(t,e)?(t=xg(),Ya=cf=Wi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yg&&e.locale!=="ko"?null:e.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_x[t.type]:e==="textarea"}function Eg(t,e,n,i){eg(i),e=_l(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var vo=null,bo=null;function xx(t){Ug(t,0)}function Vl(t){var e=cs(t);if($m(e))return t}function yx(t,e){if(t==="change")return e}var wg=!1;if(wi){var gu;if(wi){var vu="oninput"in document;if(!vu){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),vu=typeof Oh.oninput=="function"}gu=vu}else gu=!1;wg=gu&&(!document.documentMode||9<document.documentMode)}function kh(){vo&&(vo.detachEvent("onpropertychange",Tg),bo=vo=null)}function Tg(t){if(t.propertyName==="value"&&Vl(bo)){var e=[];Eg(e,bo,t,sf(t)),rg(xx,e)}}function Sx(t,e,n){t==="focusin"?(kh(),vo=e,bo=n,vo.attachEvent("onpropertychange",Tg)):t==="focusout"&&kh()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(bo)}function Ex(t,e){if(t==="click")return Vl(e)}function wx(t,e){if(t==="input"||t==="change")return Vl(e)}function Tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Tx;function Po(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=Bh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bh(n)}}function Ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ax(t){var e=Cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ag(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zh(n,s);var o=zh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cx=wi&&"documentMode"in document&&11>=document.documentMode,ls=null,Nc=null,_o=null,Dc=!1;function Hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dc||ls==null||ls!==dl(i)||(i=ls,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Po(_o,i)||(_o=i,i=_l(Nc,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},_u={},Rg={};wi&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Gl(t){if(_u[t])return _u[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return _u[t]=e[n];return t}var bg=Gl("animationend"),Pg=Gl("animationiteration"),Lg=Gl("animationstart"),Ng=Gl("transitionend"),Dg=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Dg.set(t,e),zr(e,[t])}for(var xu=0;xu<Vh.length;xu++){var yu=Vh[xu],Rx=yu.toLowerCase(),bx=yu[0].toUpperCase()+yu.slice(1);ur(Rx,"on"+bx)}ur(bg,"onAnimationEnd");ur(Pg,"onAnimationIteration");ur(Lg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Ng,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Gh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,R_(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,u),s=l}}}if(hl)throw t=Rc,hl=!1,Rc=null,t}function mt(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var i=t+"__bubble";n.has(i)||(Ig(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),Ig(n,t,i,e)}var ma="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[ma]){t[ma]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(Px.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ma]||(e[ma]=!0,Su("selectionchange",!1,e))}}function Ig(t,e,n,i){switch(_g(e)){case 1:var r=W_;break;case 4:r=j_;break;default:r=uf}n=r.bind(null,e,n,t),r=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}rg(function(){var u=s,d=sf(n),f=[];e:{var h=Dg.get(t);if(h!==void 0){var p=df,v=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=ox;break;case"focusin":v="focus",p=mu;break;case"focusout":v="blur",p=mu;break;case"beforeblur":case"afterblur":p=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ux;break;case bg:case Pg:case Lg:p=Z_;break;case Ng:p=dx;break;case"scroll":p=X_;break;case"wheel":p=hx;break;case"copy":case"cut":case"paste":p=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dh}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,c!==null&&(y=To(_,c),y!=null&&x.push(No(_,y,g)))),m)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Tc&&(v=n.relatedTarget||n.fromElement)&&(Ar(v)||v[Ti]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Ar(v):null,v!==null&&(m=Hr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=Lh,y="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dh,y="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?h:cs(p),g=v==null?h:cs(v),h=new x(y,_+"leave",p,n,d),h.target=m,h.relatedTarget=g,y=null,Ar(d)===u&&(x=new x(c,_+"enter",v,n,d),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,c=v,_=0,g=x;g;g=Wr(g))_++;for(g=0,y=c;y;y=Wr(y))g++;for(;0<_-g;)x=Wr(x),_--;for(;0<g-_;)c=Wr(c),g--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break t;x=Wr(x),c=Wr(c)}x=null}else x=null;p!==null&&Wh(f,h,p,x,!1),v!==null&&m!==null&&Wh(f,m,v,x,!0)}}e:{if(h=u?cs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=yx;else if(Fh(h))if(wg)C=wx;else{C=Mx;var T=Sx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ex);if(C&&(C=C(t,u))){Eg(f,C,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&yc(h,"number",h.value)}switch(T=u?cs(u):window,t){case"focusin":(Fh(T)||T.contentEditable==="true")&&(ls=T,Nc=u,_o=null);break;case"focusout":_o=Nc=ls=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,Hh(f,n,d);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Hh(f,n,d)}var A;if(hf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else as?Sg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yg&&n.locale!=="ko"&&(as||b!=="onCompositionStart"?b==="onCompositionEnd"&&as&&(A=xg()):(Wi=d,cf="value"in Wi?Wi.value:Wi.textContent,as=!0)),T=_l(u,b),0<T.length&&(b=new Nh(b,t,null,n,d),f.push({event:b,listeners:T}),A?b.data=A:(A=Mg(n),A!==null&&(b.data=A)))),(A=mx?gx(t,n):vx(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(d=new Nh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=A))}Ug(f,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(No(t,s,r)),s=To(t,e),s!=null&&i.push(No(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=To(n,s),l!=null&&o.unshift(No(n,l,a))):r||(l=To(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Lx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Nx,"")}function ga(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(oe(425))}function xl(){}var Uc=null,Ic=null;function Fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(Ix)}:Oc;function Ix(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ro(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Hs,Do="__reactProps$"+Hs,Ti="__reactContainer$"+Hs,kc="__reactEvents$"+Hs,Fx="__reactListeners$"+Hs,Ox="__reactHandles$"+Hs;function Ar(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[Jn])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Jn]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Wl(t){return t[Do]||null}var Bc=[],ds=-1;function cr(t){return{current:t}}function gt(t){0>ds||(t.current=Bc[ds],Bc[ds]=null,ds--)}function ft(t,e){ds++,Bc[ds]=t.current,t.current=e}var sr={},Yt=cr(sr),on=cr(!1),Dr=sr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function yl(){gt(on),gt(Yt)}function Yh(t,e,n){if(Yt.current!==sr)throw Error(oe(168));ft(Yt,e),ft(on,n)}function Fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,S_(t)||"Unknown",r));return Et({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Dr=Yt.current,ft(Yt,t),ft(on,on.current),!0}function qh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Fg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,gt(on),gt(Yt),ft(Yt,t)):gt(on),ft(on,n)}var vi=null,jl=!1,wu=!1;function Og(t){vi===null?vi=[t]:vi.push(t)}function kx(t){jl=!0,Og(t)}function dr(){if(!wu&&vi!==null){wu=!0;var t=0,e=ot;try{var n=vi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,jl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),lg(of,dr),r}finally{ot=e,wu=!1}}return null}var fs=[],hs=0,Ml=null,El=0,Cn=[],Rn=0,Ur=null,_i=1,xi="";function yr(t,e){fs[hs++]=El,fs[hs++]=Ml,Ml=t,El=e}function kg(t,e,n){Cn[Rn++]=_i,Cn[Rn++]=xi,Cn[Rn++]=Ur,Ur=t;var i=_i;t=xi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-jn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function mf(t){t.return!==null&&(yr(t,1),kg(t,1,0))}function gf(t){for(;t===Ml;)Ml=fs[--hs],fs[hs]=null,El=fs[--hs],fs[hs]=null;for(;t===Ur;)Ur=Cn[--Rn],Cn[Rn]=null,xi=Cn[--Rn],Cn[Rn]=null,_i=Cn[--Rn],Cn[Rn]=null}var _n=null,gn=null,vt=!1,zn=null;function Bg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hc(t){if(vt){var e=gn;if(e){var n=e;if(!Kh(t,e)){if(zc(t))throw Error(oe(418));e=qi(n.nextSibling);var i=_n;e&&Kh(t,e)?Bg(i,n):(t.flags=t.flags&-4097|2,vt=!1,_n=t)}}else{if(zc(t))throw Error(oe(418));t.flags=t.flags&-4097|2,vt=!1,_n=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function va(t){if(t!==_n)return!1;if(!vt)return Zh(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fc(t.type,t.memoizedProps)),e&&(e=gn)){if(zc(t))throw zg(),Error(oe(418));for(;e;)Bg(t,e),e=qi(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?qi(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=gn;t;)t=qi(t.nextSibling)}function bs(){gn=_n=null,vt=!1}function vf(t){zn===null?zn=[t]:zn.push(t)}var Bx=bi.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function Hg(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ji(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,y){return _===null||_.tag!==6?(_=Lu(g,c.mode,y),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,y){var C=g.type;return C===os?d(c,_,g.props.children,y,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&Qh(C)===_.type)?(y=r(_,g.props),y.ref=Qs(c,_,g),y.return=c,y):(y=nl(g.type,g.key,g.props,null,c.mode,y),y.ref=Qs(c,_,g),y.return=c,y)}function u(c,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Nu(g,c.mode,y),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function d(c,_,g,y,C){return _===null||_.tag!==7?(_=Nr(g,c.mode,y,C),_.return=c,_):(_=r(_,g),_.return=c,_)}function f(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Lu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case aa:return g=nl(_.type,_.key,_.props,null,c.mode,g),g.ref=Qs(c,null,_),g.return=c,g;case ss:return _=Nu(_,c.mode,g),_.return=c,_;case Bi:var y=_._init;return f(c,y(_._payload),g)}if(lo(_)||$s(_))return _=Nr(_,c.mode,g,null),_.return=c,_;_a(c,_)}return null}function h(c,_,g,y){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(c,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:return g.key===C?l(c,_,g,y):null;case ss:return g.key===C?u(c,_,g,y):null;case Bi:return C=g._init,h(c,_,C(g._payload),y)}if(lo(g)||$s(g))return C!==null?null:d(c,_,g,y,null);_a(c,g)}return null}function p(c,_,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(g)||null,a(_,c,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case aa:return c=c.get(y.key===null?g:y.key)||null,l(_,c,y,C);case ss:return c=c.get(y.key===null?g:y.key)||null,u(_,c,y,C);case Bi:var T=y._init;return p(c,_,g,T(y._payload),C)}if(lo(y)||$s(y))return c=c.get(g)||null,d(_,c,y,C,null);_a(_,y)}return null}function v(c,_,g,y){for(var C=null,T=null,A=_,b=_=0,w=null;A!==null&&b<g.length;b++){A.index>b?(w=A,A=null):w=A.sibling;var M=h(c,A,g[b],y);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(c,A),_=s(M,_,b),T===null?C=M:T.sibling=M,T=M,A=w}if(b===g.length)return n(c,A),vt&&yr(c,b),C;if(A===null){for(;b<g.length;b++)A=f(c,g[b],y),A!==null&&(_=s(A,_,b),T===null?C=A:T.sibling=A,T=A);return vt&&yr(c,b),C}for(A=i(c,A);b<g.length;b++)w=p(A,c,b,g[b],y),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?b:w.key),_=s(w,_,b),T===null?C=w:T.sibling=w,T=w);return t&&A.forEach(function(L){return e(c,L)}),vt&&yr(c,b),C}function x(c,_,g,y){var C=$s(g);if(typeof C!="function")throw Error(oe(150));if(g=C.call(g),g==null)throw Error(oe(151));for(var T=C=null,A=_,b=_=0,w=null,M=g.next();A!==null&&!M.done;b++,M=g.next()){A.index>b?(w=A,A=null):w=A.sibling;var L=h(c,A,M.value,y);if(L===null){A===null&&(A=w);break}t&&A&&L.alternate===null&&e(c,A),_=s(L,_,b),T===null?C=L:T.sibling=L,T=L,A=w}if(M.done)return n(c,A),vt&&yr(c,b),C;if(A===null){for(;!M.done;b++,M=g.next())M=f(c,M.value,y),M!==null&&(_=s(M,_,b),T===null?C=M:T.sibling=M,T=M);return vt&&yr(c,b),C}for(A=i(c,A);!M.done;b++,M=g.next())M=p(A,c,b,M.value,y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?b:M.key),_=s(M,_,b),T===null?C=M:T.sibling=M,T=M);return t&&A.forEach(function(j){return e(c,j)}),vt&&yr(c,b),C}function m(c,_,g,y){if(typeof g=="object"&&g!==null&&g.type===os&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case aa:e:{for(var C=g.key,T=_;T!==null;){if(T.key===C){if(C=g.type,C===os){if(T.tag===7){n(c,T.sibling),_=r(T,g.props.children),_.return=c,c=_;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&Qh(C)===T.type){n(c,T.sibling),_=r(T,g.props),_.ref=Qs(c,T,g),_.return=c,c=_;break e}n(c,T);break}else e(c,T);T=T.sibling}g.type===os?(_=Nr(g.props.children,c.mode,y,g.key),_.return=c,c=_):(y=nl(g.type,g.key,g.props,null,c.mode,y),y.ref=Qs(c,_,g),y.return=c,c=y)}return o(c);case ss:e:{for(T=g.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Nu(g,c.mode,y),_.return=c,c=_}return o(c);case Bi:return T=g._init,m(c,_,T(g._payload),y)}if(lo(g))return v(c,_,g,y);if($s(g))return x(c,_,g,y);_a(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=Lu(g,c.mode,y),_.return=c,c=_),o(c)):n(c,_)}return m}var Ps=Hg(!0),Vg=Hg(!1),wl=cr(null),Tl=null,ps=null,_f=null;function xf(){_f=ps=Tl=null}function yf(t){var e=wl.current;gt(wl),t._currentValue=e}function Vc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Tl=t,_f=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Tl===null)throw Error(oe(308));ps=t,Tl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Cr=null;function Sf(t){Cr===null?Cr=[t]:Cr.push(t)}function Gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function Jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=Et({},f,h);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var qo={},ii=cr(qo),Uo=cr(qo),Io=cr(qo);function Rr(t){if(t===qo)throw Error(oe(174));return t}function Ef(t,e){switch(ft(Io,e),ft(Uo,t),ft(ii,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mc(e,t)}gt(ii),ft(ii,e)}function Ls(){gt(ii),gt(Uo),gt(Io)}function jg(t){Rr(Io.current);var e=Rr(ii.current),n=Mc(e,t.type);e!==n&&(ft(Uo,t),ft(ii,n))}function wf(t){Uo.current===t&&(gt(ii),gt(Uo))}var yt=cr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function Tf(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Za=bi.ReactCurrentDispatcher,Au=bi.ReactCurrentBatchConfig,Ir=0,St=null,Lt=null,Ft=null,Rl=!1,xo=!1,Fo=0,zx=0;function Vt(){throw Error(oe(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(Ir=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?Wx:jx,t=n(i,r),xo){s=0;do{if(xo=!1,Fo=0,25<=s)throw Error(oe(301));s+=1,Ft=Lt=null,e.updateQueue=null,Za.current=Xx,t=n(i,r)}while(xo)}if(Za.current=bl,e=Lt!==null&&Lt.next!==null,Ir=0,Ft=Lt=St=null,Rl=!1,e)throw Error(oe(300));return t}function Rf(){var t=Fo!==0;return Fo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Dn(){if(Lt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Lt=t;else{if(t===null)throw Error(oe(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Oo(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=d,Fr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Dn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function $g(t,e){var n=St,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,bf(Kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,ko(9,qg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(oe(349));Ir&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qg(t,e,n,i){e.value=n,e.getSnapshot=i,Zg(e)&&Qg(t)}function Kg(t,e,n){return n(function(){Zg(e)&&Qg(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Qg(t){var e=Ai(t,1);e!==null&&Xn(e,t,1,-1)}function tp(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=Gx.bind(null,St,t),[e.memoizedState,t]}function ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jg(){return Dn().memoizedState}function Qa(t,e,n,i){var r=Zn();St.flags|=t,r.memoizedState=ko(1|e,n,void 0,i===void 0?null:i)}function Xl(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=ko(e,n,s,i);return}}St.flags|=t,r.memoizedState=ko(1|e,n,s,i)}function np(t,e){return Qa(8390656,8,t,e)}function bf(t,e){return Xl(2048,8,t,e)}function e0(t,e){return Xl(4,2,t,e)}function t0(t,e){return Xl(4,4,t,e)}function n0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i0(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,n0.bind(null,e,t),n)}function Pf(){}function r0(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function o0(t,e,n){return Ir&21?(Yn(n,e)||(n=dg(),St.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Hx(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Au.transition;Au.transition={};try{t(!1),e()}finally{ot=n,Au.transition=i}}function a0(){return Dn().memoizedState}function Vx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l0(t))u0(e,n);else if(n=Gg(t,e,n,i),n!==null){var r=Qt();Xn(n,t,i,r),c0(n,e,i)}}function Gx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l0(t))u0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gg(t,e,r,i),n!==null&&(r=Qt(),Xn(n,t,i,r),c0(n,e,i))}}function l0(t){var e=t.alternate;return t===St||e!==null&&e===St}function u0(t,e){xo=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var bl={readContext:Nn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Wx={readContext:Nn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,n0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Vx.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:Pf,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=Hx.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=Zn();if(vt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ot===null)throw Error(oe(349));Ir&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,np(Kg.bind(null,i,s,t),[t]),i.flags|=2048,ko(9,qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ot.identifierPrefix;if(vt){var n=xi,i=_i;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jx={readContext:Nn,useCallback:r0,useContext:Nn,useEffect:bf,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Cu,useRef:Jg,useState:function(){return Cu(Oo)},useDebugValue:Pf,useDeferredValue:function(t){var e=Dn();return o0(e,Lt.memoizedState,t)},useTransition:function(){var t=Cu(Oo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:$g,useId:a0,unstable_isNewReconciler:!1},Xx={readContext:Nn,useCallback:r0,useContext:Nn,useEffect:bf,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Ru,useRef:Jg,useState:function(){return Ru(Oo)},useDebugValue:Pf,useDeferredValue:function(t){var e=Dn();return Lt===null?e.memoizedState=t:o0(e,Lt.memoizedState,t)},useTransition:function(){var t=Ru(Oo)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:$g,useId:a0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Qi(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Xn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Qi(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Xn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Qi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Xn(e,t,i,n),Ka(e,t,i))}};function ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,i)||!Po(r,s):!0}function d0(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=an(e)?Dr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Wc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=an(e)?Dr:Yt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=y_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,td=i),jc(t,e)},n}function h0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){jc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new $x;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ay.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Yx=bi.ReactCurrentOwner,sn=!1;function Zt(t,e,n,i){e.child=t===null?Vg(e,null,n,i):Ps(e,t.child,n,i)}function lp(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Cf(t,e,n,i,s,r),n=Rf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(vt&&n&&mf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p0(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function p0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Po(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Xc(t,e,n,i,r)}function m0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(gs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(gs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(gs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(gs,pn),pn|=i;return Zt(t,e,r,n),e.child}function g0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,i,r){var s=an(n)?Dr:Yt.current;return s=Rs(e,s),Ms(e,r),n=Cf(t,e,n,i,s,r),i=Rf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(vt&&i&&mf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function cp(t,e,n,i,r){if(an(n)){var s=!0;Sl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Ja(t,e),d0(e,n,i),Wc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=an(n)?Dr:Yt.current,u=Rs(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&rp(e,o,i,u),zi=!1;var h=e.memoizedState;o.state=h,Al(e,i,o,r),l=e.memoizedState,a!==i||h!==l||on.current||zi?(typeof d=="function"&&(Gc(e,n,d,i),l=e.memoizedState),(a=zi||ip(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=an(n)?Dr:Yt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&rp(e,o,i,l),zi=!1,h=e.memoizedState,o.state=h,Al(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||on.current||zi?(typeof p=="function"&&(Gc(e,n,p,i),v=e.memoizedState),(u=zi||ip(e,n,u,i,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return $c(t,e,n,i,s,r)}function $c(t,e,n,i,r,s){g0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qh(e,n,!1),Ci(t,e,s);i=e.stateNode,Yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&qh(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),Ef(t,e.containerInfo)}function dp(t,e,n,i,r){return bs(),vf(r),e.flags|=256,Zt(t,e,n,i),e.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return Hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qc(n),e.memoizedState=Yc,t):Lf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yc,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,i){return i!==null&&vf(i),Ps(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=bu(Error(oe(422))),xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=qc(o),e.memoizedState=Yc,s);if(!(e.mode&1))return xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=bu(s,i,void 0),xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Xn(i,t,r,-1))}return Of(),i=bu(Error(oe(421))),xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ly.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=qi(r.nextSibling),_n=e,vt=!0,zn=null,t!==null&&(Cn[Rn++]=_i,Cn[Rn++]=xi,Cn[Rn++]=Ur,_i=t.id,xi=t.overflow,Ur=e),e=Lf(e,i.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vc(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kx(t,e,n){switch(e.tag){case 3:v0(e),bs();break;case 5:jg(e);break;case 1:an(e.type)&&Sl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(ft(yt,yt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,m0(t,e,n)}return Ci(t,e,n)}var y0,Kc,S0,M0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kc=function(){};S0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ii.current);var s=null;switch(n){case"input":r=_c(t,r),i=_c(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Sc(t,r),i=Sc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Ec(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};M0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zx(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return an(e.type)&&yl(),Gt(e),null;case 3:return i=e.stateNode,Ls(),gt(on),gt(Yt),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(rd(zn),zn=null))),Kc(t,e),Gt(e),null;case 5:wf(e);var r=Rr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Gt(e),null}if(t=Rr(ii.current),va(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Do]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)mt(co[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Sh(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Eh(i,s),mt("invalid",i)}Ec(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ga(i.textContent,a,t),r=["children",""+a]):Eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":la(i),Mh(i,s,!0);break;case"textarea":la(i),wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Do]=i,y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=wc(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)mt(co[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Sh(t,i),r=_c(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Eh(t,i),r=Sc(t,i),mt("invalid",t);break;default:r=i}Ec(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&ef(t,s,l,o))}switch(n){case"input":la(t),Mh(t,i,!1);break;case"textarea":la(t),wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Rr(Io.current),Rr(ii.current),va(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Gt(e),null;case 13:if(gt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&gn!==null&&e.mode&1&&!(e.flags&128))zg(),bs(),e.flags|=98560,s=!1;else if(s=va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Jn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else zn!==null&&(rd(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):Of())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Ls(),Kc(t,e),t===null&&Lo(e.stateNode.containerInfo),Gt(e),null;case 10:return yf(e.type._context),Gt(e),null;case 17:return an(e.type)&&yl(),Gt(e),null;case 19:if(gt(yt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Js(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Ds&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Gt(e),null}else 2*Ct()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Qx(t,e){switch(gf(e),e.tag){case 1:return an(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),gt(on),gt(Yt),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(gt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(yt),null;case 4:return Ls(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var ya=!1,Xt=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Zc(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var hp=!1;function ey(t,e){if(Uc=gl,t=Cg(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ic={focusedElem:t,selectionRange:n},gl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:kn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=hp,hp=!1,v}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zc(e,n,s)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E0(t){var e=t.alternate;e!==null&&(t.alternate=null,E0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Do],delete e[kc],delete e[Fx],delete e[Ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w0(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var kt=null,Bn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)T0(t,e,n),n=n.sibling}function T0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Xt||ms(n,e);case 6:var i=kt,r=Bn;kt=null,Ni(t,e,n),kt=i,Bn=r,kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Bn?(t=kt,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),Ro(t)):Eu(kt,n.stateNode));break;case 4:i=kt,r=Bn,kt=n.stateNode.containerInfo,Bn=!0,Ni(t,e,n),kt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zc(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Xt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ni(t,e,n),Xt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jx),e.forEach(function(i){var r=uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Bn=!1;break e;case 3:kt=a.stateNode.containerInfo,Bn=!0;break e;case 4:kt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(kt===null)throw Error(oe(160));T0(s,o,r),kt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Kn(t),i&4){try{yo(3,t,t.return),Yl(3,t)}catch(x){Tt(t,t.return,x)}try{yo(5,t,t.return)}catch(x){Tt(t,t.return,x)}}break;case 1:Un(e,t),Kn(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Un(e,t),Kn(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{wo(r,"")}catch(x){Tt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),wc(a,o);var u=wc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Jm(r,f):d==="dangerouslySetInnerHTML"?Zm(r,f):d==="children"?wo(r,f):ef(r,d,f,u)}switch(a){case"input":xc(r,s);break;case"textarea":qm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Do]=s}catch(x){Tt(t,t.return,x)}}break;case 6:if(Un(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Tt(t,t.return,x)}}break;case 3:if(Un(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(x){Tt(t,t.return,x)}break;case 4:Un(e,t),Kn(t);break;case 13:Un(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=Ct())),i&4&&mp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||d,Un(e,t),Xt=u):Un(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ye=t,d=t.child;d!==null;){for(f=ye=d;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:yo(4,h,h.return);break;case 1:ms(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Tt(i,n,x)}}break;case 5:ms(h,h.return);break;case 22:if(h.memoizedState!==null){vp(f);continue}}p!==null?(p.return=h,ye=p):vp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qm("display",o))}catch(x){Tt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Tt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Kn(t),i&4&&mp(t);break;case 21:break;default:Un(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wo(r,""),i.flags&=-33);var s=pp(t);ed(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pp(t);Jc(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ty(t,e,n){ye=t,C0(t)}function C0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=ya;var u=Xt;if(ya=o,(Xt=l)&&!u)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?_p(r):l!==null?(l.return=o,ye=l):_p(r);for(;s!==null;)ye=s,C0(s),s=s.sibling;ye=r,ya=a,Xt=u}gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):gp(t)}}function gp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Xt||e.flags&512&&Qc(e)}catch(h){Tt(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function vp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function _p(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Qc(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Qc(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var ny=Math.ceil,Pl=bi.ReactCurrentDispatcher,Nf=bi.ReactCurrentOwner,Ln=bi.ReactCurrentBatchConfig,Je=0,Ot=null,Pt=null,Bt=0,pn=0,gs=cr(0),Nt=0,Bo=null,Fr=0,ql=0,Df=0,So=null,rn=null,Uf=0,Ds=1/0,gi=null,Ll=!1,td=null,Zi=null,Sa=!1,ji=null,Nl=0,Mo=0,nd=null,el=-1,tl=0;function Qt(){return Je&6?Ct():el!==-1?el:el=Ct()}function Qi(t){return t.mode&1?Je&2&&Bt!==0?Bt&-Bt:Bx.transition!==null?(tl===0&&(tl=dg()),tl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Xn(t,e,n,i){if(50<Mo)throw Mo=0,nd=null,Error(oe(185));Xo(t,n,i),(!(Je&2)||t!==Ot)&&(t===Ot&&(!(Je&2)&&(ql|=n),Nt===4&&Vi(t,Bt)),ln(t,i),n===1&&Je===0&&!(e.mode&1)&&(Ds=Ct()+500,jl&&dr()))}function ln(t,e){var n=t.callbackNode;B_(t,e);var i=ml(t,t===Ot?Bt:0);if(i===0)n!==null&&Ch(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ch(n),e===1)t.tag===0?kx(xp.bind(null,t)):Og(xp.bind(null,t)),Ux(function(){!(Je&6)&&dr()}),n=null;else{switch(fg(i)){case 1:n=of;break;case 4:n=ug;break;case 16:n=pl;break;case 536870912:n=cg;break;default:n=pl}n=I0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(el=-1,tl=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=ml(t,t===Ot?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=Je;Je|=2;var s=P0();(Ot!==t||Bt!==e)&&(gi=null,Ds=Ct()+500,Lr(t,e));do try{sy();break}catch(a){b0(t,a)}while(!0);xf(),Pl.current=s,Je=r,Pt!==null?e=0:(Ot=null,Bt=0,e=Nt)}if(e!==0){if(e===2&&(r=bc(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=Bo,Lr(t,0),Vi(t,i),ln(t,Ct()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!iy(r)&&(e=Dl(t,i),e===2&&(s=bc(t),s!==0&&(i=s,e=id(t,s))),e===1))throw n=Bo,Lr(t,0),Vi(t,i),ln(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Sr(t,rn,gi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Uf+500-Ct(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Oc(Sr.bind(null,t,rn,gi),e);break}Sr(t,rn,gi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ny(i/1960))-i,10<i){t.timeoutHandle=Oc(Sr.bind(null,t,rn,gi),i);break}Sr(t,rn,gi);break;case 5:Sr(t,rn,gi);break;default:throw Error(oe(329))}}}return ln(t,Ct()),t.callbackNode===n?R0.bind(null,t):null}function id(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=rn,rn=n,e!==null&&rd(e)),t}function rd(t){rn===null?rn=t:rn.push.apply(rn,t)}function iy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Df,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function xp(t){if(Je&6)throw Error(oe(327));Es();var e=ml(t,0);if(!(e&1))return ln(t,Ct()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=bc(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=Bo,Lr(t,0),Vi(t,e),ln(t,Ct()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,rn,gi),ln(t,Ct()),null}function If(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Ds=Ct()+500,jl&&dr())}}function Or(t){ji!==null&&ji.tag===0&&!(Je&6)&&Es();var e=Je;Je|=1;var n=Ln.transition,i=ot;try{if(Ln.transition=null,ot=1,t)return t()}finally{ot=i,Ln.transition=n,Je=e,!(Je&6)&&dr()}}function Ff(){pn=gs.current,gt(gs)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dx(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ls(),gt(on),gt(Yt),Tf();break;case 5:wf(i);break;case 4:Ls();break;case 13:gt(yt);break;case 19:gt(yt);break;case 10:yf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(Ot=t,Pt=t=Ji(t.current,null),Bt=pn=e,Nt=0,Bo=null,Df=ql=Fr=0,rn=So=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Cr=null}return t}function b0(t,e){do{var n=Pt;try{if(xf(),Za.current=bl,Rl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(Ir=0,Ft=Lt=St=null,xo=!1,Fo=0,Nf.current=null,n===null||n.return===null){Nt=1,Bo=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=op(o);if(p!==null){p.flags&=-257,ap(p,o,a,s,e),p.mode&1&&sp(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){sp(s,u,e),Of();break e}l=Error(oe(426))}}else if(vt&&a.mode&1){var m=op(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ap(m,o,a,s,e),vf(Ns(l,a));break e}}s=l=Ns(l,a),Nt!==4&&(Nt=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=f0(s,l,e);Jh(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=h0(s,a,e);Jh(s,y);break e}}s=s.return}while(s!==null)}N0(n)}catch(C){e=C,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function P0(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function Of(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ot===null||!(Fr&268435455)&&!(ql&268435455)||Vi(Ot,Bt)}function Dl(t,e){var n=Je;Je|=2;var i=P0();(Ot!==t||Bt!==e)&&(gi=null,Lr(t,e));do try{ry();break}catch(r){b0(t,r)}while(!0);if(xf(),Je=n,Pl.current=i,Pt!==null)throw Error(oe(261));return Ot=null,Bt=0,Nt}function ry(){for(;Pt!==null;)L0(Pt)}function sy(){for(;Pt!==null&&!P_();)L0(Pt)}function L0(t){var e=U0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?N0(t):Pt=e,Nf.current=null}function N0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=Zx(n,e,pn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Sr(t,e,n){var i=ot,r=Ln.transition;try{Ln.transition=null,ot=1,oy(t,e,n,i)}finally{Ln.transition=r,ot=i}return null}function oy(t,e,n,i){do Es();while(ji!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z_(t,s),t===Ot&&(Pt=Ot=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,I0(pl,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=ot;ot=1;var a=Je;Je|=4,Nf.current=null,ey(t,n),A0(n,t),Ax(Ic),gl=!!Uc,Ic=Uc=null,t.current=n,ty(n),L_(),Je=a,ot=o,Ln.transition=s}else t.current=n;if(Sa&&(Sa=!1,ji=t,Nl=r),s=t.pendingLanes,s===0&&(Zi=null),U_(n.stateNode),ln(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=td,td=null,t;return Nl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===nd?Mo++:(Mo=0,nd=t):Mo=0,dr(),null}function Es(){if(ji!==null){var t=fg(Nl),e=Ln.transition,n=ot;try{if(Ln.transition=null,ot=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Nl=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ye=u;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:yo(8,d,s)}var f=d.child;if(f!==null)f.return=d,ye=f;else for(;ye!==null;){d=ye;var h=d.sibling,p=d.return;if(E0(d),d===u){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ye=c;break e}ye=s.return}}var _=t.current;for(ye=_;ye!==null;){o=ye;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ye=g;else e:for(o=_;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(C){Tt(a,a.return,C)}if(a===o){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Je=r,dr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{ot=n,Ln.transition=e}}return!1}function yp(t,e,n){e=Ns(n,e),e=f0(t,e,1),t=Ki(t,e,1),e=Qt(),t!==null&&(Xo(t,1,e),ln(t,e))}function Tt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Ns(n,t),t=h0(e,t,1),e=Ki(e,t,1),t=Qt(),e!==null&&(Xo(e,1,t),ln(e,t));break}}e=e.return}}function ay(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Bt&n)===n&&(Nt===4||Nt===3&&(Bt&130023424)===Bt&&500>Ct()-Uf?Lr(t,0):Df|=n),ln(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=Qt();t=Ai(t,e),t!==null&&(Xo(t,e,n),ln(t,n))}function ly(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),D0(t,n)}var U0;U0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,Kx(t,e,n);sn=!!(t.flags&131072)}else sn=!1,vt&&e.flags&1048576&&kg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=Rs(e,Yt.current);Ms(e,n),r=Cf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,Wc(e,i,t,n),e=$c(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&mf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=dy(i),t=kn(i,t),r){case 0:e=Xc(null,e,i,t,n);break e;case 1:e=cp(null,e,i,t,n);break e;case 11:e=lp(null,e,i,t,n);break e;case 14:e=up(null,e,i,kn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Xc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),cp(t,e,i,r,n);case 3:e:{if(v0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wg(t,e),Al(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(oe(423)),e),e=dp(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(oe(424)),e),e=dp(t,e,i,n,r);break e}else for(gn=qi(e.stateNode.containerInfo.firstChild),_n=e,vt=!0,zn=null,n=Vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Ci(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return jg(e),t===null&&Hc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Fc(i,r)?o=null:s!==null&&Fc(i,s)&&(e.flags|=32),g0(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Hc(e),null;case 13:return _0(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),lp(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(wl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!on.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Nn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),up(t,e,i,r,n);case 15:return p0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Ja(t,e),e.tag=1,an(i)?(t=!0,Sl(e)):t=!1,Ms(e,n),d0(e,i,r),Wc(e,i,r,n),$c(null,e,i,!0,t,n);case 19:return x0(t,e,n);case 22:return m0(t,e,n)}throw Error(oe(156,e.tag))};function I0(t,e){return lg(t,e)}function cy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new cy(t,e,n,i)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dy(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return Nr(n.children,r,s,e);case tf:o=8,r|=8;break;case pc:return t=bn(12,n,e,r|2),t.elementType=pc,t.lanes=s,t;case mc:return t=bn(13,n,e,r),t.elementType=mc,t.lanes=s,t;case gc:return t=bn(19,n,e,r),t.elementType=gc,t.lanes=s,t;case jm:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:o=10;break e;case Wm:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case Bi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fu(0),this.expirationTimes=fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,o,a,l){return t=new fy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function F0(t){if(!t)return sr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(an(n))return Fg(t,n,e)}return e}function O0(t,e,n,i,r,s,o,a,l){return t=Bf(n,i,!0,t,r,s,o,a,l),t.context=F0(null),n=t.current,i=Qt(),r=Qi(n),s=Si(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Xo(t,r,i),ln(t,i),t}function Zl(t,e,n,i){var r=e.current,s=Qt(),o=Qi(r);return n=F0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&(Xn(t,r,o,s),Ka(t,r,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function py(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Ql.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Zl(t,e,null,null)};Ql.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Zl(null,t,null,null)}),e[Ti]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&vg(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function my(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(o);s.call(u)}}var o=O0(e,i,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[Ti]=o.current,Lo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ul(l);a.call(u)}}var l=Bf(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[Ti]=l.current,Lo(t.nodeType===8?t.parentNode:t),Or(function(){Zl(e,l,n,i)}),l}function eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ul(o);a.call(l)}}Zl(e,o,t,r)}else o=my(n,e,t,r,i);return Ul(o)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(af(e,n|1),ln(e,Ct()),!(Je&6)&&(Ds=Ct()+500,dr()))}break;case 13:Or(function(){var i=Ai(t,1);if(i!==null){var r=Qt();Xn(i,t,1,r)}}),zf(t,1)}};lf=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Qt();Xn(e,t,134217728,n)}zf(t,134217728)}};pg=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=Qt();Xn(n,t,e,i)}zf(t,e)}};mg=function(){return ot};gg=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Ac=function(t,e,n){switch(e){case"input":if(xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(oe(90));$m(i),xc(i,r)}}}break;case"textarea":qm(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};ng=If;ig=Or;var gy={usingClientEntryPoint:!1,Events:[Yo,cs,Wl,eg,tg,If]},eo={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=og(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{zl=Ma.inject(vy),ni=Ma}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(oe(200));return hy(t,e,null,n)};Sn.createRoot=function(t,e){if(!Vf(t))throw Error(oe(299));var n=!1,i="",r=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Lo(t.nodeType===8?t.parentNode:t),new Hf(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=og(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Or(t)};Sn.hydrate=function(t,e,n){if(!Jl(e))throw Error(oe(200));return eu(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};Sn.render=function(t,e,n){if(!Jl(e))throw Error(oe(200));return eu(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(oe(40));return t._reactRootContainer?(Or(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};Sn.unstable_batchedUpdates=If;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return eu(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Bm.exports=Sn;var _y=Bm.exports,z0,Ep=_y;z0=Ep.createRoot,Ep.hydrateRoot;/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wp="popstate";function xy(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return sd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:zo(r)}return Sy(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function si(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yy(){return Math.random().toString(36).substring(2,10)}function Tp(t,e){return{usr:t.state,key:t.key,idx:e}}function sd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Vs(e):e,state:n,key:e&&e.key||i||yy()}}function zo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function Sy(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,u=d();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function d(){return(o.state||{idx:null}).idx}function f(){a="POP";let m=d(),c=m==null?null:m-u;u=m,l&&l({action:a,location:x.location,delta:c})}function h(m,c){a="PUSH";let _=sd(x.location,m,c);u=d()+1;let g=Tp(_,u),y=x.createHref(_);try{o.pushState(g,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(y)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,c){a="REPLACE";let _=sd(x.location,m,c);u=d();let g=Tp(_,u),y=x.createHref(_);o.replaceState(g,"",y),s&&l&&l({action:a,location:x.location,delta:0})}function v(m){return My(m)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(wp,f),l=m,()=>{r.removeEventListener(wp,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let c=v(m);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:p,go(m){return o.go(m)}};return x}function My(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Mt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:zo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function H0(t,e,n="/"){return Ey(t,e,n,!1)}function Ey(t,e,n,i){let r=typeof e=="string"?Vs(e):e,s=Ri(r.pathname||"/",n);if(s==null)return null;let o=V0(t);wy(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Iy(s);a=Dy(o[l],u,i)}return a}function V0(t,e=[],n=[],i="",r=!1){let s=(o,a,l=r,u)=>{let d={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;Mt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let f=Mi([i,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(Mt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),V0(o.children,e,h,f,l)),!(o.path==null&&!o.index)&&e.push({path:f,score:Ly(f,o.index),routesMeta:h})};return t.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let u of G0(o.path))s(o,a,!0,u)}),e}function G0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=G0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ny(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var Ty=/^:[\w-]+$/,Ay=3,Cy=2,Ry=1,by=10,Py=-2,Ap=t=>t==="*";function Ly(t,e){let n=t.split("/"),i=n.length;return n.some(Ap)&&(i+=Py),e&&(i+=Cy),n.filter(r=>!Ap(r)).reduce((r,s)=>r+(Ty.test(s)?Ay:s===""?Ry:by),i)}function Ny(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Dy(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Il({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Il({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Mi([s,f.pathname]),pathnameBase:By(Mi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Mi([s,f.pathnameBase]))}return o}function Il(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Uy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,{paramName:d,isOptional:f},h)=>{if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const p=a[h];return f&&!p?u[d]=void 0:u[d]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Uy(t,e=!1,n=!0){si(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Iy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return si(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ri(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Fy(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:Oy(n,e):e,search:zy(i),hash:Hy(r)}}function Oy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Du(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ky(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W0(t){let e=ky(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function j0(t,e,n,i=!1){let r;typeof t=="string"?r=Vs(t):(r={...t},Mt(!r.pathname||!r.pathname.includes("?"),Du("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),Du("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),Du("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=Fy(r,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var Mi=t=>t.join("/").replace(/\/\/+/g,"/"),By=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Hy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Vy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var X0=["POST","PUT","PATCH","DELETE"];new Set(X0);var Gy=["GET",...X0];new Set(Gy);var Gs=H.createContext(null);Gs.displayName="DataRouter";var tu=H.createContext(null);tu.displayName="DataRouterState";H.createContext(!1);var $0=H.createContext({isTransitioning:!1});$0.displayName="ViewTransition";var Wy=H.createContext(new Map);Wy.displayName="Fetchers";var jy=H.createContext(null);jy.displayName="Await";var li=H.createContext(null);li.displayName="Navigation";var Ko=H.createContext(null);Ko.displayName="Location";var Pi=H.createContext({outlet:null,matches:[],isDataRoute:!1});Pi.displayName="Route";var Gf=H.createContext(null);Gf.displayName="RouteError";function Xy(t,{relative:e}={}){Mt(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=H.useContext(li),{hash:r,pathname:s,search:o}=Qo(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:Mi([n,s])),i.createHref({pathname:a,search:o,hash:r})}function Zo(){return H.useContext(Ko)!=null}function Vr(){return Mt(Zo(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Ko).location}var Y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q0(t){H.useContext(li).static||H.useLayoutEffect(t)}function Wf(){let{isDataRoute:t}=H.useContext(Pi);return t?sS():$y()}function $y(){Mt(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let t=H.useContext(Gs),{basename:e,navigator:n}=H.useContext(li),{matches:i}=H.useContext(Pi),{pathname:r}=Vr(),s=JSON.stringify(W0(i)),o=H.useRef(!1);return q0(()=>{o.current=!0}),H.useCallback((l,u={})=>{if(si(o.current,Y0),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=j0(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Mi([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,r,t])}H.createContext(null);function Qo(t,{relative:e}={}){let{matches:n}=H.useContext(Pi),{pathname:i}=Vr(),r=JSON.stringify(W0(n));return H.useMemo(()=>j0(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function Yy(t,e){return K0(t,e)}function K0(t,e,n,i,r){var _;Mt(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=H.useContext(li),{matches:o}=H.useContext(Pi),a=o[o.length-1],l=a?a.params:{},u=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let g=f&&f.path||"";Z0(u,!f||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=Vr(),p;if(e){let g=typeof e=="string"?Vs(e):e;Mt(d==="/"||((_=g.pathname)==null?void 0:_.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${g.pathname}" was given in the \`location\` prop.`),p=g}else p=h;let v=p.pathname||"/",x=v;if(d!=="/"){let g=d.replace(/^\//,"").split("/");x="/"+v.replace(/^\//,"").split("/").slice(g.length).join("/")}let m=H0(t,{pathname:x});si(f||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),si(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let c=Jy(m&&m.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:Mi([d,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?d:Mi([d,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,n,i,r);return e&&c?H.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},c):c}function qy(){let t=rS(),e=Vy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:s},"ErrorBoundary")," or"," ",H.createElement("code",{style:s},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),n?H.createElement("pre",{style:r},n):null,o)}var Ky=H.createElement(qy,null),Zy=class extends H.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?H.createElement(Pi.Provider,{value:this.props.routeContext},H.createElement(Gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qy({routeContext:t,match:e,children:n}){let i=H.useContext(Gs);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Pi.Provider,{value:t},n)}function Jy(t,e=[],n=null,i=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=n==null?void 0:n.errors;if(o!=null){let u=s.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);Mt(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,u+1))}let a=!1,l=-1;if(n)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=u),d.route.id){let{loaderData:f,errors:h}=n,p=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!h||h[d.route.id]===void 0);if(d.route.lazy||p){a=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((u,d,f)=>{let h,p=!1,v=null,x=null;n&&(h=o&&d.route.id?o[d.route.id]:void 0,v=d.route.errorElement||Ky,a&&(l<0&&f===0?(Z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,x=null):l===f&&(p=!0,x=d.route.hydrateFallbackElement||null)));let m=e.concat(s.slice(0,f+1)),c=()=>{let _;return h?_=v:p?_=x:d.route.Component?_=H.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=u,H.createElement(Qy,{match:d,routeContext:{outlet:u,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?H.createElement(Zy,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:i}):c()},null)}function jf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eS(t){let e=H.useContext(Gs);return Mt(e,jf(t)),e}function tS(t){let e=H.useContext(tu);return Mt(e,jf(t)),e}function nS(t){let e=H.useContext(Pi);return Mt(e,jf(t)),e}function Xf(t){let e=nS(t),n=e.matches[e.matches.length-1];return Mt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function iS(){return Xf("useRouteId")}function rS(){var i;let t=H.useContext(Gf),e=tS("useRouteError"),n=Xf("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function sS(){let{router:t}=eS("useNavigate"),e=Xf("useNavigate"),n=H.useRef(!1);return q0(()=>{n.current=!0}),H.useCallback(async(r,s={})=>{si(n.current,Y0),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Cp={};function Z0(t,e,n){!e&&!Cp[t]&&(Cp[t]=!0,si(!1,n))}H.memo(oS);function oS({routes:t,future:e,state:n,unstable_onError:i}){return K0(t,void 0,n,i,e)}function fo(t){Mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aS({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){Mt(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=H.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=Vs(n));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:h="default"}=n,p=H.useMemo(()=>{let v=Ri(l,o);return v==null?null:{location:{pathname:v,search:u,hash:d,state:f,key:h},navigationType:i}},[o,l,u,d,f,h,i]);return si(p!=null,`<Router basename="${o}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:H.createElement(li.Provider,{value:a},H.createElement(Ko.Provider,{children:e,value:p}))}function lS({children:t,location:e}){return Yy(od(t),e)}function od(t,e=[]){let n=[];return H.Children.forEach(t,(i,r)=>{if(!H.isValidElement(i))return;let s=[...e,r];if(i.type===H.Fragment){n.push.apply(n,od(i.props.children,s));return}Mt(i.type===fo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Mt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=od(i.props.children,s)),n.push(o)}),n}var il="get",rl="application/x-www-form-urlencoded";function nu(t){return t!=null&&typeof t.tagName=="string"}function uS(t){return nu(t)&&t.tagName.toLowerCase()==="button"}function cS(t){return nu(t)&&t.tagName.toLowerCase()==="form"}function dS(t){return nu(t)&&t.tagName.toLowerCase()==="input"}function fS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hS(t,e){return t.button===0&&(!e||e==="_self")&&!fS(t)}var Ea=null;function pS(){if(Ea===null)try{new FormData(document.createElement("form"),0),Ea=!1}catch{Ea=!0}return Ea}var mS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(t){return t!=null&&!mS.has(t)?(si(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rl}"`),null):t}function gS(t,e){let n,i,r,s,o;if(cS(t)){let a=t.getAttribute("action");i=a?Ri(a,e):null,n=t.getAttribute("method")||il,r=Uu(t.getAttribute("enctype"))||rl,s=new FormData(t)}else if(uS(t)||dS(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?Ri(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||il,r=Uu(t.getAttribute("formenctype"))||Uu(a.getAttribute("enctype"))||rl,s=new FormData(a,t),!pS()){let{name:u,type:d,value:f}=t;if(d==="image"){let h=u?`${u}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else u&&s.append(u,f)}}else{if(nu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=il,i=null,r=rl,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $f(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vS(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Ri(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function _S(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yS(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await _S(s,n);return o.links?o.links():[]}return[]}));return wS(i.flat(1).filter(xS).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Rp(t,e,n,i,r,s){let o=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,a=(l,u)=>{var d;return n[u].pathname!==l.pathname||((d=n[u].route.path)==null?void 0:d.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>o(l,u)||a(l,u)):s==="data"?e.filter((l,u)=>{var f;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(o(l,u)||a(l,u))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function SS(t,e,{includeHydrateFallback:n}={}){return MS(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function MS(t){return[...new Set(t)]}function ES(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function wS(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(ES(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function Q0(){let t=H.useContext(Gs);return $f(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function TS(){let t=H.useContext(tu);return $f(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Yf=H.createContext(void 0);Yf.displayName="FrameworkContext";function J0(){let t=H.useContext(Yf);return $f(t,"You must render this element inside a <HydratedRouter> element"),t}function AS(t,e){let n=H.useContext(Yf),[i,r]=H.useState(!1),[s,o]=H.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=e,h=H.useRef(null);H.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let x=c=>{c.forEach(_=>{o(_.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),H.useEffect(()=>{if(i){let x=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},v=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:to(a,p),onBlur:to(l,v),onMouseEnter:to(u,p),onMouseLeave:to(d,v),onTouchStart:to(f,p)}]:[!1,h,{}]}function to(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function CS({page:t,...e}){let{router:n}=Q0(),i=H.useMemo(()=>H0(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?H.createElement(bS,{page:t,matches:i,...e}):null}function RS(t){let{manifest:e,routeModules:n}=J0(),[i,r]=H.useState([]);return H.useEffect(()=>{let s=!1;return yS(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function bS({page:t,matches:e,...n}){let i=Vr(),{manifest:r,routeModules:s}=J0(),{basename:o}=Q0(),{loaderData:a,matches:l}=TS(),u=H.useMemo(()=>Rp(t,e,l,r,i,"data"),[t,e,l,r,i]),d=H.useMemo(()=>Rp(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=H.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let v=new Set,x=!1;if(e.forEach(c=>{var g;let _=r.routes[c.route.id];!_||!_.hasLoader||(!u.some(y=>y.route.id===c.route.id)&&c.route.id in a&&((g=s[c.route.id])!=null&&g.shouldRevalidate)||_.hasClientLoader?x=!0:v.add(c.route.id))}),v.size===0)return[];let m=vS(t,o,"data");return x&&v.size>0&&m.searchParams.set("_routes",e.filter(c=>v.has(c.route.id)).map(c=>c.route.id).join(",")),[m.pathname+m.search]},[o,a,i,r,u,e,t,s]),h=H.useMemo(()=>SS(d,r),[d,r]),p=RS(d);return H.createElement(H.Fragment,null,f.map(v=>H.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>H.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:x})=>H.createElement("link",{key:v,nonce:n.nonce,...x})))}function PS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ev&&(window.__reactRouterVersion="7.8.2")}catch{}function LS({basename:t,children:e,window:n}){let i=H.useRef();i.current==null&&(i.current=xy({window:n,v5Compat:!0}));let r=i.current,[s,o]=H.useState({action:r.action,location:r.location}),a=H.useCallback(l=>{H.startTransition(()=>o(l))},[o]);return H.useLayoutEffect(()=>r.listen(a),[r,a]),H.createElement(aS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var tv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nv=H.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f,...h},p){let{basename:v}=H.useContext(li),x=typeof u=="string"&&tv.test(u),m,c=!1;if(typeof u=="string"&&x&&(m=u,ev))try{let w=new URL(window.location.href),M=u.startsWith("//")?new URL(w.protocol+u):new URL(u),L=Ri(M.pathname,v);M.origin===w.origin&&L!=null?u=L+M.search+M.hash:c=!0}catch{si(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=Xy(u,{relative:r}),[g,y,C]=AS(i,h),T=IS(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:f});function A(w){e&&e(w),w.defaultPrevented||T(w)}let b=H.createElement("a",{...h,...C,href:m||_,onClick:c||s?e:A,ref:PS(p,y),target:l,"data-discover":!x&&n==="render"?"true":void 0});return g&&!x?H.createElement(H.Fragment,null,b,H.createElement(CS,{page:_})):b});nv.displayName="Link";var NS=H.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...u},d){let f=Qo(o,{relative:u.relative}),h=Vr(),p=H.useContext(tu),{navigator:v,basename:x}=H.useContext(li),m=p!=null&&zS(f)&&a===!0,c=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,_=h.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(_=_.toLowerCase(),g=g?g.toLowerCase():null,c=c.toLowerCase()),g&&x&&(g=Ri(g,x)||g);const y=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let C=_===c||!r&&_.startsWith(c)&&_.charAt(y)==="/",T=g!=null&&(g===c||!r&&g.startsWith(c)&&g.charAt(c.length)==="/"),A={isActive:C,isPending:T,isTransitioning:m},b=C?e:void 0,w;typeof i=="function"?w=i(A):w=[i,C?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(A):s;return H.createElement(nv,{...u,"aria-current":b,className:w,ref:d,style:M,to:o,viewTransition:a},typeof l=="function"?l(A):l)});NS.displayName="NavLink";var DS=H.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=il,action:a,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,...h},p)=>{let v=kS(),x=BS(a,{relative:u}),m=o.toLowerCase()==="get"?"get":"post",c=typeof a=="string"&&tv.test(a),_=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let y=g.nativeEvent.submitter,C=(y==null?void 0:y.getAttribute("formmethod"))||o;v(y||g.currentTarget,{fetcherKey:e,method:C,navigate:n,replace:r,state:s,relative:u,preventScrollReset:d,viewTransition:f})};return H.createElement("form",{ref:p,method:m,action:x,onSubmit:i?l:_,...h,"data-discover":!c&&t==="render"?"true":void 0})});DS.displayName="Form";function US(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iv(t){let e=H.useContext(Gs);return Mt(e,US(t)),e}function IS(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=Wf(),l=Vr(),u=Qo(t,{relative:s});return H.useCallback(d=>{if(hS(d,e)){d.preventDefault();let f=n!==void 0?n:zo(l)===zo(u);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,u,n,i,e,t,r,s,o])}var FS=0,OS=()=>`__${String(++FS)}__`;function kS(){let{router:t}=iv("useSubmit"),{basename:e}=H.useContext(li),n=iS();return H.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:u}=gS(i,e);if(r.navigate===!1){let d=r.fetcherKey||OS();await t.fetch(d,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:u,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function BS(t,{relative:e}={}){let{basename:n}=H.useContext(li),i=H.useContext(Pi);Mt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Qo(t||".",{relative:e})},o=Vr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(d=>d==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:Mi([n,s.pathname])),zo(s)}function zS(t,{relative:e}={}){let n=H.useContext($0);Mt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=iv("useViewTransitionState"),r=Qo(t,{relative:e});if(!n.isTransitioning)return!1;let s=Ri(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Ri(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Il(r.pathname,o)!=null||Il(r.pathname,s)!=null}const bp="http://localhost:5000",HS=!1;function VS({children:t}){return P.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:t})}function $e({label:t,children:e}){return P.jsxs("div",{className:"flex flex-col",children:[P.jsx(VS,{children:t}),e]})}function GS(){const[t,e]=H.useState({shipperName:"",chartererName:"",charterType:"Voyage",vesselName:"",dwt:"",builtYear:"",flag:"",vesselClass:"",imoNumber:"",cargoNature:"BulkDry",cargoType:"",cargoQtyMt:"",cargoPctTolerance:"",stowageFactor:"",loadPorts:"",dischargePorts:"",laycanStart:"",laycanEnd:"",cancelingDate:"",freightType:"per_mt",freightAmount:"",freightTerms:"FIOT",paymentTerms:"",loadingRate:"",dischargeRate:"",loadingTerms:"",dischargeTerms:"",demurragePerDay:"",despatchPerDay:"",commissionPct:"2.5",arbitrationPlace:"London",governingLaw:"English",bunkerType:"",costResponsibility:"",tradingLimits:"",specialClauses:"",otherClauses:`1 Safe Port / 1 Safe Berth each, Always Accessible
NOR to be tendered whether in berth or not (WIBON)
Weather Working Days (WWD)`,cpBaseForm:""}),[n,i]=H.useState(!1),{cpSuggested:r,cpReason:s}=H.useMemo(()=>{const f=t.charterType,h=t.cargoNature;let p="GENCON",v="Fallback to GENCON (general dry bulk voyage).";return h==="HeavyLift"?(p="HEAVYCON",v="Heavy lift/project cargo."):f==="Bareboat"?(p="BARECON",v="Bareboat charter (demise)."):f==="Voyage"&&h==="BulkDry"?(p="GENCON",v="Voyage + dry bulk cargo."):f==="Voyage"&&h==="LiquidTanker"?(p="ASBATANKVOY",v="Voyage + liquid/tanker cargo."):f==="Time"&&h==="BulkDry"?(p="NYPE",v="Time charter + dry bulk."):f==="Time"&&h==="LiquidTanker"&&(p="SHELLTIME",v="Time charter + tanker."),{cpSuggested:p,cpReason:v}},[t.charterType,t.cargoNature]);H.useEffect(()=>{n||e(f=>({...f,cpBaseForm:r}))},[r,n]);const o=f=>{const{name:h,value:p}=f.target;e(v=>({...v,[h]:p}))},a=H.useMemo(()=>{var c,_;const f=(g,y=0)=>g!==""&&!Number.isNaN(+g)?Number(g).toLocaleString(void 0,{maximumFractionDigits:y,minimumFractionDigits:y}):"",h=g=>g?new Date(g+"T00:00:00").toLocaleDateString(void 0,{year:"numeric",month:"long",day:"2-digit"}):"",p=t.cargoQtyMt?`${f(t.cargoQtyMt)} MT${t.cargoPctTolerance?` (+/- ${f(t.cargoPctTolerance)}%)`:""}`:"",v=t.freightType==="lumpsum"?`USD ${f(t.freightAmount)} lumpsum${t.freightTerms?`, ${t.freightTerms}`:""}`:`USD ${f(t.freightAmount)} per MT${t.freightTerms?`, ${t.freightTerms}`:""}`,x=["Fixture Recap","",`Charter Type: ${t.charterType||""} | Cargo Category: ${t.cargoNature||""}`,t.shipperName||t.chartererName?`Parties: Shipper ${t.shipperName}; Charterer ${t.chartererName}`:null,`Vessel: ${t.vesselName} – ${f(t.dwt)} DWT – Built ${t.builtYear} – ${t.flag} Flag – Class ${t.vesselClass}`,t.imoNumber?`IMO: ${t.imoNumber}`:null,`Cargo: ${p} ${t.cargoType}`.trim(),`Load Port: ${t.loadPorts}`,`Discharge Port: ${t.dischargePorts}`,`Laycan: ${h(t.laycanStart)} – ${h(t.laycanEnd)}`,t.cancelingDate?`Canceling Date: ${h(t.cancelingDate)}`:null,`Freight: ${v}`,t.paymentTerms?`Payment: ${t.paymentTerms}`:null,t.stowageFactor?`Stowage Factor: ${t.stowageFactor}`:null,t.loadingRate?`Loading Rate/Terms: ${t.loadingRate}${t.loadingTerms?`, ${t.loadingTerms}`:""}`:null,t.dischargeRate?`Discharge Rate/Terms: ${t.dischargeRate}${t.dischargeTerms?`, ${t.dischargeTerms}`:""}`:null,`Demurrage: USD ${f(t.demurragePerDay)} per day`,`Despatch: USD ${f(t.despatchPerDay)} per day${t.despatchPerDay&&t.demurragePerDay&&+t.despatchPerDay===+t.demurragePerDay/2?" (half demurrage)":""}`,`Commission: ${t.commissionPct}% to Brokers`,`Arbitration: ${t.arbitrationPlace}, ${t.governingLaw} Law`,t.bunkerType?`Bunkers: ${t.bunkerType}`:null,t.costResponsibility?`Costs: ${t.costResponsibility}`:null,t.tradingLimits?`Trading Limits: ${t.tradingLimits}`:null,"","Other terms:"],m=[...((c=t.specialClauses)==null?void 0:c.split(/\n+/).filter(Boolean))||[],...((_=t.otherClauses)==null?void 0:_.split(/\n+/).filter(Boolean))||[]].map(g=>`- ${g}`);return x.filter(Boolean).concat(m).join(`
`)},[t,r,s]),l=async()=>{try{const f={...t,cpSuggested:r,cpReason:s,dwt:t.dwt?Number(t.dwt):void 0,builtYear:t.builtYear?Number(t.builtYear):void 0,cargoQtyMt:t.cargoQtyMt?Number(t.cargoQtyMt):void 0,cargoPctTolerance:t.cargoPctTolerance?Number(t.cargoPctTolerance):void 0,loadPorts:t.loadPorts?t.loadPorts.split(/,\s*/).filter(Boolean):[],dischargePorts:t.dischargePorts?t.dischargePorts.split(/,\s*/).filter(Boolean):[],laycanStart:t.laycanStart||void 0,laycanEnd:t.laycanEnd||void 0,cancelingDate:t.cancelingDate||void 0,freightAmount:t.freightAmount?Number(t.freightAmount):void 0,demurragePerDay:t.demurragePerDay?Number(t.demurragePerDay):void 0,despatchPerDay:t.despatchPerDay?Number(t.despatchPerDay):void 0,commissionPct:t.commissionPct?Number(t.commissionPct):void 0,specialClauses:t.specialClauses?t.specialClauses.split(/\n+/).filter(Boolean):[],otherClauses:t.otherClauses?t.otherClauses.split(/\n+/).filter(Boolean):[],recap:a},h=await fetch(`${bp}/api/fixtures`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),p=await h.json();h.ok?alert("Saved! ID: "+p._id):(console.error("Server response:",p),alert("Error: "+(p.error||"Unknown server error")))}catch(f){console.error("Fetch error:",f.message),alert("Error: Failed to connect to server")}},u=async()=>{try{await navigator.clipboard.writeText(a),alert("Recap copied to clipboard")}catch(f){console.error("Clipboard error:",f.message),alert("Error: Failed to copy recap")}},d=async()=>{try{const f={...t,cpSuggested:r,cpReason:s,recap:a},h=await fetch(`${bp}/api/generate-cp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),p=h.headers.get("content-type")||"application/octet-stream",v=h.headers.get("content-disposition")||"",x=await h.blob();if(!h.ok){const y=await x.text();throw new Error(y||"Failed to generate CP")}let m="CharterParty.pdf";const c=/filename="?([^";]+)"?/i.exec(v);c&&c[1]&&(m=c[1]);const _=URL.createObjectURL(x),g=document.createElement("a");g.href=_,g.download=m,document.body.appendChild(g),g.click(),g.remove(),URL.revokeObjectURL(_)}catch(f){console.error("Generate CP error:",f.message),alert("Error: "+f.message)}};return P.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6",children:P.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[P.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[P.jsx("h1",{className:"text-2xl font-bold text-blue-800 mb-6",children:"Fixture Input"}),P.jsxs("div",{className:"space-y-4",children:[P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Charter Type",children:P.jsxs("select",{name:"charterType",value:t.charterType,onChange:o,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[P.jsx("option",{value:"Voyage",children:"Voyage"}),P.jsx("option",{value:"Time",children:"Time"}),P.jsx("option",{value:"Bareboat",children:"Bareboat"})]})}),P.jsx($e,{label:"Cargo Category",children:P.jsxs("select",{name:"cargoNature",value:t.cargoNature,onChange:o,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[P.jsx("option",{value:"BulkDry",children:"Bulk Dry"}),P.jsx("option",{value:"LiquidTanker",children:"Liquid/Tanker"}),P.jsx("option",{value:"HeavyLift",children:"Heavy Lift"})]})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Shipper Name",children:P.jsx("input",{name:"shipperName",value:t.shipperName,onChange:o,placeholder:"ABC Shipping",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Charterer Name",children:P.jsx("input",{name:"chartererName",value:t.chartererName,onChange:o,placeholder:"XYZ Trading",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Base CP Template (suggested)",children:P.jsxs("select",{name:"cpBaseForm",value:t.cpBaseForm||r,onChange:f=>{i(!0),o(f)},className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[P.jsx("option",{value:"GENCON",children:"GENCON"}),P.jsx("option",{value:"ASBATANKVOY",children:"ASBATANKVOY"}),P.jsx("option",{value:"NYPE",children:"NYPE"}),P.jsx("option",{value:"SHELLTIME",children:"SHELLTIME"}),P.jsx("option",{value:"BARECON",children:"BARECON"}),P.jsx("option",{value:"HEAVYCON",children:"HEAVYCON"})]})}),P.jsx($e,{label:"Why suggested",children:P.jsx("div",{className:"w-full p-2 bg-gray-100 border border-gray-300 rounded-md",children:s})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Vessel Name",children:P.jsx("input",{name:"vesselName",value:t.vesselName,onChange:o,placeholder:"MV Ocean Star",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"DWT",children:P.jsx("input",{name:"dwt",value:t.dwt,onChange:o,type:"number",placeholder:"55000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Built Year",children:P.jsx("input",{name:"builtYear",value:t.builtYear,onChange:o,type:"number",placeholder:"2010",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Flag",children:P.jsx("input",{name:"flag",value:t.flag,onChange:o,placeholder:"Panama",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Class",children:P.jsx("input",{name:"vesselClass",value:t.vesselClass,onChange:o,placeholder:"NK/DNV/LR",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"IMO Number",children:P.jsx("input",{name:"imoNumber",value:t.imoNumber,onChange:o,placeholder:"IMO 1234567",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Cargo Type",children:P.jsx("input",{name:"cargoType",value:t.cargoType,onChange:o,placeholder:"Wheat",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Quantity MT",children:P.jsx("input",{name:"cargoQtyMt",value:t.cargoQtyMt,onChange:o,type:"number",placeholder:"50000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Tolerance %",children:P.jsx("input",{name:"cargoPctTolerance",value:t.cargoPctTolerance,onChange:o,type:"number",placeholder:"10",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Stowage Factor",children:P.jsx("input",{name:"stowageFactor",value:t.stowageFactor,onChange:o,placeholder:"e.g., 1.15 m³/mt",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Load Port(s) (comma separated)",children:P.jsx("input",{name:"loadPorts",value:t.loadPorts,onChange:o,placeholder:"Kandla, India",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Discharge Port(s) (comma separated)",children:P.jsx("input",{name:"dischargePorts",value:t.dischargePorts,onChange:o,placeholder:"Houston, USA",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Laycan Start",children:P.jsx("input",{name:"laycanStart",value:t.laycanStart,onChange:o,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Laycan End",children:P.jsx("input",{name:"laycanEnd",value:t.laycanEnd,onChange:o,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Canceling Date",children:P.jsx("input",{name:"cancelingDate",value:t.cancelingDate,onChange:o,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx("div",{})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Freight Type",children:P.jsxs("select",{name:"freightType",value:t.freightType,onChange:o,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[P.jsx("option",{value:"per_mt",children:"USD per MT"}),P.jsx("option",{value:"lumpsum",children:"USD lumpsum"})]})}),P.jsx($e,{label:"Freight Amount",children:P.jsx("input",{name:"freightAmount",value:t.freightAmount,onChange:o,type:"number",placeholder:"42",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Freight Terms",children:P.jsx("input",{name:"freightTerms",value:t.freightTerms,onChange:o,placeholder:"FIOT",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Payment Terms",children:P.jsx("input",{name:"paymentTerms",value:t.paymentTerms,onChange:o,placeholder:"e.g., 95% payable within 3 banking days",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Loading Rate",children:P.jsx("input",{name:"loadingRate",value:t.loadingRate,onChange:o,placeholder:"e.g., 10,000 MT/day",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Discharge Rate",children:P.jsx("input",{name:"dischargeRate",value:t.dischargeRate,onChange:o,placeholder:"e.g., 12,000 MT/day",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Loading Terms",children:P.jsx("input",{name:"loadingTerms",value:t.loadingTerms,onChange:o,placeholder:"e.g., SSHEXUU",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Discharge Terms",children:P.jsx("input",{name:"dischargeTerms",value:t.dischargeTerms,onChange:o,placeholder:"e.g., WWD",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Demurrage (USD/day)",children:P.jsx("input",{name:"demurragePerDay",value:t.demurragePerDay,onChange:o,type:"number",placeholder:"15000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Despatch (USD/day)",children:P.jsx("input",{name:"despatchPerDay",value:t.despatchPerDay,onChange:o,type:"number",placeholder:"7500",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Commission %",children:P.jsx("input",{name:"commissionPct",value:t.commissionPct,onChange:o,type:"number",step:"0.1",placeholder:"2.5",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx("div",{})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Arbitration Place",children:P.jsx("input",{name:"arbitrationPlace",value:t.arbitrationPlace,onChange:o,placeholder:"London",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Governing Law",children:P.jsx("input",{name:"governingLaw",value:t.governingLaw,onChange:o,placeholder:"English",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Bunkers",children:P.jsx("input",{name:"bunkerType",value:t.bunkerType,onChange:o,placeholder:"e.g., VLSFO/MGO, ROB on delivery/redelivery",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:"Costs Responsibility",children:P.jsx("input",{name:"costResponsibility",value:t.costResponsibility,onChange:o,placeholder:"e.g., port charges/dues for charterers",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),P.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[P.jsx($e,{label:"Trading Limits",children:P.jsx("input",{name:"tradingLimits",value:t.tradingLimits,onChange:o,placeholder:"e.g., Worldwide excl. war risk areas",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx("div",{})]}),P.jsx($e,{label:P.jsxs("span",{children:["Other Key Clauses ",P.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:"one per line"})]}),children:P.jsx("textarea",{name:"otherClauses",value:t.otherClauses,onChange:o,rows:6,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsx($e,{label:P.jsxs("span",{children:["Special Clauses ",P.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:"one per line"})]}),children:P.jsx("textarea",{name:"specialClauses",value:t.specialClauses,onChange:o,rows:4,placeholder:"e.g., NOR: WIBON; WCCON; WIFPON",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),P.jsxs("div",{className:"flex gap-4 mt-6",children:[P.jsx("button",{onClick:u,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Copy Recap"}),P.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Save"}),P.jsx("button",{onClick:d,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Generate CP"})]})]})]}),P.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[P.jsx("h1",{className:"text-2xl font-bold text-blue-800 mb-6",children:"Recap Preview"}),P.jsx("pre",{className:"bg-gray-50 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap border border-gray-200",children:a})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="179",WS=0,Pp=1,jS=2,rv=1,Kf=2,mi=3,or=0,$t=1,Hn=2,er=0,ws=1,Lp=2,Np=3,Dp=4,XS=5,wr=100,$S=101,YS=102,qS=103,KS=104,ZS=200,QS=201,JS=202,eM=203,ad=204,ld=205,tM=206,nM=207,iM=208,rM=209,sM=210,oM=211,aM=212,lM=213,uM=214,ud=0,cd=1,dd=2,Us=3,fd=4,hd=5,pd=6,md=7,Zf=0,cM=1,dM=2,tr=0,fM=1,hM=2,pM=3,mM=4,gM=5,vM=6,_M=7,sv=300,Is=301,Fs=302,gd=303,vd=304,iu=306,_d=1e3,br=1001,xd=1002,$n=1003,xM=1004,wa=1005,ei=1006,Iu=1007,Pr=1008,oi=1009,ov=1010,av=1011,Ho=1012,Qf=1013,kr=1014,yi=1015,Jo=1016,Jf=1017,eh=1018,Vo=1020,lv=35902,uv=1021,cv=1022,Gn=1023,Go=1026,Wo=1027,dv=1028,th=1029,fv=1030,nh=1031,ih=1033,sl=33776,ol=33777,al=33778,ll=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Cd=37808,Rd=37809,bd=37810,Pd=37811,Ld=37812,Nd=37813,Dd=37814,Ud=37815,Id=37816,Fd=37817,Od=37818,kd=37819,Bd=37820,zd=37821,ul=36492,Hd=36494,Vd=36495,hv=36283,Gd=36284,Wd=36285,jd=36286,yM=3200,SM=3201,pv=0,MM=1,Gi="",An="srgb",Os="srgb-linear",Fl="linear",lt="srgb",jr=7680,Up=519,EM=512,wM=513,TM=514,mv=515,AM=516,CM=517,RM=518,bM=519,Ip=35044,Fp="300 es",ti=2e3,Ol=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Xd=180/Math.PI;function ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function PM(t,e){return(t%e+e)%e}function Ou(t,e,n){return(1-n)*t+n*e}function no(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==h||u!==p||d!==v){let m=1-a;const c=l*h+u*p+d*v+f*x,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),T=Math.atan2(C,c*_);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,d=d*m+v*y,f=f*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*p-u*h,e[n+1]=l*v+d*h+u*f-a*p,e[n+2]=u*v+d*p+a*h-l*f,e[n+3]=d*v-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*f+u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f-h*p*v;break;case"YXZ":this._x=h*d*f+u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f+h*p*v;break;case"ZXY":this._x=h*d*f-u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f-h*p*v;break;case"ZYX":this._x=h*d*f-u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f+h*p*v;break;case"YZX":this._x=h*d*f+u*p*v,this._y=u*p*f+h*d*v,this._z=u*d*v-h*p*f,this._w=u*d*f-h*p*v;break;case"XZY":this._x=h*d*f-u*p*v,this._y=u*p*f-h*d*v,this._z=u*d*v+h*p*f,this._w=u*d*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*d,this.y=i+l*d+a*u-s*f,this.z=r+l*f+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new B,Op=new ta;class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],c=r[6],_=r[1],g=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*g+l*T,s[6]=o*c+a*y+l*A,s[1]=u*x+d*_+f*C,s[4]=u*m+d*g+f*T,s[7]=u*c+d*y+f*A,s[2]=h*x+p*_+v*C,s[5]=h*m+p*g+v*T,s[8]=h*c+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*s,p=u*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new We;function gv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LM(){const t=kl("canvas");return t.style.display="block",t}const kp={};function Ts(t){t in kp||(kp[t]=!0,console.warn(t))}function NM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Bp=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const t={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=As(r.r),r.g=As(r.g),r.b=As(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Fl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Os]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const it=DM();function Ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function As(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class UM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=kl("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ei(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zu(r[o].image)):s.push(zu(r[o]))}else s=zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FM=0;const Hu=new B;class un extends Ws{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=br,r=br,s=ei,o=Pr,a=Gn,l=oi,u=un.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=ea(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=sv;un.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,C=(c+1)/2,T=(d+h)/4,A=(f+x)/4,b=(v+m)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-x)/_,this.z=(h-d)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends Ws{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new rh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends OM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Aa.subVectors(this.max,io),$r.subVectors(e.a,io),Yr.subVectors(e.b,io),qr.subVectors(e.c,io),Di.subVectors(Yr,$r),Ui.subVectors(qr,Yr),pr.subVectors($r,qr);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-pr.z,pr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,pr.z,0,-pr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-pr.y,pr.x,0];return!Vu(n,$r,Yr,qr,Aa)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,$r,Yr,qr,Aa))?!1:(Ca.crossVectors(Di,Ui),n=[Ca.x,Ca.y,Ca.z],Vu(n,$r,Yr,qr,Aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new B,new B,new B,new B,new B,new B,new B,new B],In=new B,Ta=new na,$r=new B,Yr=new B,qr=new B,Di=new B,Ui=new B,pr=new B,io=new B,Aa=new B,Ca=new B,mr=new B;function Vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),u=n.dot(mr),d=i.dot(mr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const BM=new na,ro=new B,Gu=new B;class sh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const n=ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Gu)),this.expandByPoint(ro.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new B,Wu=new B,Ra=new B,Ii=new B,ju=new B,ba=new B,Xu=new B;class zM{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wu.copy(e).add(n).multiplyScalar(.5),Ra.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Wu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ra),a=Ii.dot(this.direction),l=-Ii.dot(Ra),u=Ii.lengthSq(),d=Math.abs(1-o*o);let f,h,p,v;if(d>0)if(f=o*l-a,h=o*a-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const x=1/d;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wu).addScaledVector(Ra,h),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),ba.subVectors(i,e),Xu.crossVectors(ju,ba);let o=this.direction.dot(Xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(Ii,ba));if(l<0)return null;const u=a*this.direction.dot(ju.cross(Ii));if(u<0||l+u>o)return null;const d=-a*Ii.dot(Xu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,u,d,f,h,p,v,x,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,f,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,d,f,h,p,v,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,v=u*d,x=u*f;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,v=u*d,x=u*f;n[0]=h-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=v*u-p,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*d,n[4]=x-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=p*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+x,n[5]=o*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,VM)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Fi.crossVectors(i,fn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Fi.crossVectors(i,fn)),Fi.normalize(),Pa.crossVectors(fn,Fi),r[0]=Fi.x,r[4]=Pa.x,r[8]=fn.x,r[1]=Fi.y,r[5]=Pa.y,r[9]=fn.y,r[2]=Fi.z,r[6]=Pa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],_=i[3],g=i[7],y=i[11],C=i[15],T=r[0],A=r[4],b=r[8],w=r[12],M=r[1],L=r[5],j=r[9],W=r[13],X=r[2],ee=r[6],Z=r[10],ne=r[14],D=r[3],K=r[7],J=r[11],de=r[15];return s[0]=o*T+a*M+l*X+u*D,s[4]=o*A+a*L+l*ee+u*K,s[8]=o*b+a*j+l*Z+u*J,s[12]=o*w+a*W+l*ne+u*de,s[1]=d*T+f*M+h*X+p*D,s[5]=d*A+f*L+h*ee+p*K,s[9]=d*b+f*j+h*Z+p*J,s[13]=d*w+f*W+h*ne+p*de,s[2]=v*T+x*M+m*X+c*D,s[6]=v*A+x*L+m*ee+c*K,s[10]=v*b+x*j+m*Z+c*J,s[14]=v*w+x*W+m*ne+c*de,s[3]=_*T+g*M+y*X+C*D,s[7]=_*A+g*L+y*ee+C*K,s[11]=_*b+g*j+y*Z+C*J,s[15]=_*w+g*W+y*ne+C*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],c=e[15];return v*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*d-s*l*d)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],c=e[15],_=f*m*u-x*h*u+x*l*p-a*m*p-f*l*c+a*h*c,g=v*h*u-d*m*u-v*l*p+o*m*p+d*l*c-o*h*c,y=d*x*u-v*f*u+v*a*p-o*x*p-d*a*c+o*f*c,C=v*f*l-d*x*l-v*a*h+o*x*h+d*a*m-o*f*m,T=n*_+i*g+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*c-i*h*c)*A,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*s-v*h*s+v*r*p-n*m*p-d*r*c+n*h*c)*A,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*f*s-d*x*s-v*i*p+n*x*p+d*i*c-n*f*c)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*A,e[11]=(d*a*s-o*f*s-d*i*u+n*f*u+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(d*x*r-v*f*r+v*i*h-n*x*h-d*i*m+n*f*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,f=a+a,h=s*u,p=s*d,v=s*f,x=o*d,m=o*f,c=a*f,_=l*u,g=l*d,y=l*f,C=i.x,T=i.y,A=i.z;return r[0]=(1-(x+c))*C,r[1]=(p+y)*C,r[2]=(v-g)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+c))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(v+g)*A,r[9]=(m-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/s,d=1/o,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ti,l=!1){const u=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let v,x;if(l)v=s/(o-s),x=o*s/(o-s);else if(a===ti)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ol)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ti,l=!1){const u=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,x;if(l)v=1/(o-s),x=o/(o-s);else if(a===ti)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ol)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=d,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new B,Fn=new Rt,HM=new B(0,0,0),VM=new B(1,1,1),Fi=new B,Pa=new B,fn=new B,Hp=new Rt,Vp=new ta;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GM=0;const Gp=new B,Zr=new ta,fi=new Rt,La=new B,so=new B,WM=new B,jM=new ta,Wp=new B(1,0,0),jp=new B(0,1,0),Xp=new B(0,0,1),$p={type:"added"},XM={type:"removed"},Qr={type:"childadded",child:null},$u={type:"childremoved",child:null};class zt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new B,n=new ai,i=new ta,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new We}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?La.copy(e):La.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(so,La,this.up):fi.lookAt(La,so,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(fi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XM),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,jM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new B(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new B,hi=new B,Yu=new B,pi=new B,Jr=new B,es=new B,Yp=new B,qu=new B,Ku=new B,Zu=new B,Qu=new At,Ju=new At,ec=new At;class Vn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),hi.subVectors(i,n),Yu.subVectors(e,n);const o=On.dot(On),a=On.dot(hi),l=On.dot(Yu),u=hi.dot(hi),d=hi.dot(Yu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Qu.setScalar(0),Ju.setScalar(0),ec.setScalar(0),Qu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qu,s.x),o.addScaledVector(Ju,s.y),o.addScaledVector(ec,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),hi.subVectors(e,n),On.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Jr.subVectors(r,i),es.subVectors(s,i),qu.subVectors(e,i);const l=Jr.dot(qu),u=es.dot(qu);if(l<=0&&u<=0)return n.copy(i);Ku.subVectors(e,r);const d=Jr.dot(Ku),f=es.dot(Ku);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Jr,o);Zu.subVectors(e,s);const p=Jr.dot(Zu),v=es.dot(Zu);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(es,a);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return Yp.subVectors(s,r),a=(f-d)/(f-d+(p-v)),n.copy(r).addScaledVector(Yp,a);const c=1/(m+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Jr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=PM(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tc(o,s,e+1/3),this.g=tc(o,s,e),this.b=tc(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return it.workingToColorSpace(jt.copy(this),e),Math.round(Ke(jt.r*255,0,255))*65536+Math.round(Ke(jt.g*255,0,255))*256+Math.round(Ke(jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=An){it.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Na);const i=Ou(Oi.h,Na.h,n),r=Ou(Oi.s,Na.s,n),s=Ou(Oi.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Qe;Qe.NAMES=xv;let $M=0;class ia extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=ws,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yv extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new B,Da=new rt;let YM=0;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ip,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Da.fromBufferAttribute(this,n),Da.applyMatrix3(e),this.setXY(n,Da.x,Da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=no(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=no(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=no(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=no(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=no(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class Sv extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mv extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qM=0;const Tn=new Rt,nc=new zt,ts=new B,hn=new na,oo=new na,It=new B;class Li extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(hn.min,oo.min),hn.expandByPoint(It),It.addVectors(hn.max,oo.max),hn.expandByPoint(It)):(hn.expandByPoint(oo.min),hn.expandByPoint(oo.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)It.fromBufferAttribute(a,u),l&&(ts.fromBufferAttribute(e,u),It.add(ts)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new B,l[b]=new B;const u=new B,d=new B,f=new B,h=new rt,p=new rt,v=new rt,x=new B,m=new B;function c(b,w,M){u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),d.sub(u),f.sub(u),p.sub(h),v.sub(h);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(L),a[b].add(x),a[w].add(x),a[M].add(x),l[b].add(m),l[w].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,w=_.length;b<w;++b){const M=_[b],L=M.start,j=M.count;for(let W=L,X=L+j;W<X;W+=3)c(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const g=new B,y=new B,C=new B,T=new B;function A(b){C.fromBufferAttribute(r,b),T.copy(C);const w=a[b];g.copy(w),g.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(T,w);const L=y.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,L)}for(let b=0,w=_.length;b<w;++b){const M=_[b],L=M.start,j=M.count;for(let W=L,X=L+j;W<X;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,d=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let c=0;c<d;c++)h[v++]=u[p++]}return new ri(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new Rt,gr=new zM,Ua=new sh,Kp=new B,Ia=new B,Fa=new B,Oa=new B,ic=new B,ka=new B,Zp=new B,Ba=new B;class je extends zt{constructor(e=new Li,n=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],f=s[l];d!==0&&(ic.fromBufferAttribute(f,e),o?ka.addScaledVector(ic,d):ka.addScaledVector(ic.sub(n),d))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Ua.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ua,Kp)===null||gr.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),b=a.getX(y+2);r=za(this,c,e,i,u,d,f,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=za(this,o,e,i,u,d,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const T=y,A=y+1,b=y+2;r=za(this,c,e,i,u,d,f,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=m,g=m+1,y=m+2;r=za(this,o,e,i,u,d,f,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function KM(t,e,n,i,r,s,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;Ba.copy(a),Ba.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ba);return u<n.near||u>n.far?null:{distance:u,point:Ba.clone(),object:t}}function za(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ia),t.getVertexPosition(l,Fa),t.getVertexPosition(u,Oa);const d=KM(t,e,n,i,Ia,Fa,Oa,Zp);if(d){const f=new B;Vn.getBarycoord(Zp,Ia,Fa,Oa,f),r&&(d.uv=Vn.getInterpolatedAttribute(r,a,l,u,f,new rt)),s&&(d.uv1=Vn.getInterpolatedAttribute(s,a,l,u,f,new rt)),o&&(d.normal=Vn.getInterpolatedAttribute(o,a,l,u,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};Vn.getNormal(Ia,Fa,Oa,h.normal),d.face=h,d.barycoord=f}return d}class vn extends Li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(u,3)),this.setAttribute("normal",new xn(d,3)),this.setAttribute("uv",new xn(f,2));function v(x,m,c,_,g,y,C,T,A,b,w){const M=y/A,L=C/b,j=y/2,W=C/2,X=T/2,ee=A+1,Z=b+1;let ne=0,D=0;const K=new B;for(let J=0;J<Z;J++){const de=J*L-W;for(let Ee=0;Ee<ee;Ee++){const Te=Ee*M-j;K[x]=Te*_,K[m]=de*g,K[c]=X,u.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[c]=T>0?1:-1,d.push(K.x,K.y,K.z),f.push(Ee/A),f.push(1-J/b),ne+=1}}for(let J=0;J<b;J++)for(let de=0;de<A;de++){const Ee=h+de+ee*J,Te=h+de+ee*(J+1),Ve=h+(de+1)+ee*(J+1),Y=h+(de+1)+ee*J;l.push(Ee,Te,Y),l.push(Te,Ve,Y),D+=6}a.addGroup(p,D,w),p+=D,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function ZM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ev(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const QM={clone:ks,merge:Kt};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wv extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new B,Qp=new rt,Jp=new rt;class mn extends wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class tE extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new mn(ns,is,e,n);s.layers=this.layers,this.add(s);const o=new mn(ns,is,e,n);o.layers=this.layers,this.add(o);const a=new mn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new mn(ns,is,e,n);l.layers=this.layers,this.add(l);const u=new mn(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Tv extends un{constructor(e=[],n=Is,i,r,s,o,a,l,u,d){super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nE extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:er});s.uniforms.tEquirect.value=n;const o=new je(r,s),a=n.minFilter;return n.minFilter===Pr&&(n.minFilter=ei),new tE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Pn extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Av extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const sc=new B,rE=new B,sE=new We;class Mr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sc.subVectors(i,n).cross(rE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sE.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new sh,oE=new rt(.5,.5),Ha=new B;class oh{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr,o=new Mr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],d=s[4],f=s[5],h=s[6],p=s[7],v=s[8],x=s[9],m=s[10],c=s[11],_=s[12],g=s[13],y=s[14],C=s[15];if(r[0].setComponents(u-o,p-d,c-v,C-_).normalize(),r[1].setComponents(u+o,p+d,c+v,C+_).normalize(),r[2].setComponents(u+a,p+f,c+x,C+g).normalize(),r[3].setComponents(u-a,p-f,c-x,C-g).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(u-l,p-h,c-m,C-y).normalize();else if(r[4].setComponents(u-l,p-h,c-m,C-y).normalize(),n===ti)r[5].setComponents(u+l,p+h,c+m,C+y).normalize();else if(n===Ol)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=oE.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cv extends un{constructor(e,n,i=kr,r,s,o,a=$n,l=$n,u,d=Go,f=1){if(d!==Go&&d!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wn extends Li{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let v=0;const x=[],m=i/2;let c=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new xn(f,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(p,2));function _(){const y=new B,C=new B;let T=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const w=[],M=b/s,L=M*(n-e)+e;for(let j=0;j<=r;j++){const W=j/r,X=W*l+a,ee=Math.sin(X),Z=Math.cos(X);C.x=L*ee,C.y=-M*i+m,C.z=L*Z,f.push(C.x,C.y,C.z),y.set(ee,A,Z).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-M),w.push(v++)}x.push(w)}for(let b=0;b<r;b++)for(let w=0;w<s;w++){const M=x[w][b],L=x[w+1][b],j=x[w+1][b+1],W=x[w][b+1];(e>0||w!==0)&&(d.push(M,L,W),T+=3),(n>0||w!==s-1)&&(d.push(L,j,W),T+=3)}u.addGroup(c,T,0),c+=T}function g(y){const C=v,T=new rt,A=new B;let b=0;const w=y===!0?e:n,M=y===!0?1:-1;for(let j=1;j<=r;j++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),v++;const L=v;for(let j=0;j<=r;j++){const X=j/r*l+a,ee=Math.cos(X),Z=Math.sin(X);A.x=w*Z,A.y=m*M,A.z=w*ee,f.push(A.x,A.y,A.z),h.push(0,M,0),T.x=ee*.5+.5,T.y=Z*.5*M+.5,p.push(T.x,T.y),v++}for(let j=0;j<r;j++){const W=C+j,X=L+j;y===!0?d.push(X,X+1,W):d.push(X+1,X,W),b+=3}u.addGroup(c,b,y===!0?1:2),c+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nr extends Wn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new nr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<d;c++){const _=c*h-o;for(let g=0;g<u;g++){const y=g*f-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,y=_+u*(c+1),C=_+1+u*(c+1),T=_+1+u*c;p.push(g,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ir extends Li{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const d=[],f=new B,h=new B,p=[],v=[],x=[],m=[];for(let c=0;c<=i;c++){const _=[],g=c/i;let y=0;c===0&&o===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+g*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(T+y,1-g),_.push(u++)}d.push(_)}for(let c=0;c<i;c++)for(let _=0;_<n;_++){const g=d[c][_+1],y=d[c][_],C=d[c+1][_],T=d[c+1][_+1];(c!==0||o>0)&&p.push(g,y,T),(c!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nt extends ia{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pv,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aE extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lE extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ah extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Rv extends ah{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const oc=new Rt,em=new B,tm=new B;class uE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;em.setFromMatrixPosition(e.matrixWorld),n.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tm),n.updateMatrixWorld(),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bv extends wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cE extends uE{constructor(){super(new bv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pv extends ah{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lv extends ah{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dE extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function nm(t,e,n,i){const r=fE(i);switch(n){case uv:return t*e;case dv:return t*e/r.components*r.byteLength;case th:return t*e/r.components*r.byteLength;case fv:return t*e*2/r.components*r.byteLength;case nh:return t*e*2/r.components*r.byteLength;case cv:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case ih:return t*e*4/r.components*r.byteLength;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(t,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case wd:case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ul:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hv:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fE(t){switch(t){case oi:case ov:return{byteLength:1,components:1};case Ho:case av:case Jo:return{byteLength:2,components:1};case Jf:case eh:return{byteLength:2,components:4};case kr:case Qf:case yi:return{byteLength:4,components:1};case lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hE(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],x=f[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const x=f[p];t.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ow=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ew=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Aw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:_E,alphatest_pars_fragment:xE,aomap_fragment:yE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:wE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:CE,bumpmap_pars_fragment:RE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:PE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:NE,color_fragment:DE,color_pars_fragment:UE,color_pars_vertex:IE,color_vertex:FE,common:OE,cube_uv_reflection_fragment:kE,defaultnormal_vertex:BE,displacementmap_pars_vertex:zE,displacementmap_vertex:HE,emissivemap_fragment:VE,emissivemap_pars_fragment:GE,colorspace_fragment:WE,colorspace_pars_fragment:jE,envmap_fragment:XE,envmap_common_pars_fragment:$E,envmap_pars_fragment:YE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:ow,envmap_vertex:KE,fog_vertex:ZE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:ew,gradientmap_pars_fragment:tw,lightmap_pars_fragment:nw,lights_lambert_fragment:iw,lights_lambert_pars_fragment:rw,lights_pars_begin:sw,lights_toon_fragment:aw,lights_toon_pars_fragment:lw,lights_phong_fragment:uw,lights_phong_pars_fragment:cw,lights_physical_fragment:dw,lights_physical_pars_fragment:fw,lights_fragment_begin:hw,lights_fragment_maps:pw,lights_fragment_end:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:vw,logdepthbuf_pars_vertex:_w,logdepthbuf_vertex:xw,map_fragment:yw,map_pars_fragment:Sw,map_particle_fragment:Mw,map_particle_pars_fragment:Ew,metalnessmap_fragment:ww,metalnessmap_pars_fragment:Tw,morphinstance_vertex:Aw,morphcolor_vertex:Cw,morphnormal_vertex:Rw,morphtarget_pars_vertex:bw,morphtarget_vertex:Pw,normal_fragment_begin:Lw,normal_fragment_maps:Nw,normal_pars_fragment:Dw,normal_pars_vertex:Uw,normal_vertex:Iw,normalmap_pars_fragment:Fw,clearcoat_normal_fragment_begin:Ow,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:Bw,iridescence_pars_fragment:zw,opaque_fragment:Hw,packing:Vw,premultiplied_alpha_fragment:Gw,project_vertex:Ww,dithering_fragment:jw,dithering_pars_fragment:Xw,roughnessmap_fragment:$w,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:qw,shadowmap_pars_vertex:Kw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Qw,skinbase_vertex:Jw,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:oT,transmission_fragment:aT,transmission_pars_fragment:lT,uv_pars_fragment:uT,uv_pars_vertex:cT,uv_vertex:dT,worldpos_vertex:fT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:vT,cube_frag:_T,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:ST,distanceRGBA_frag:MT,equirect_vert:ET,equirect_frag:wT,linedashed_vert:TT,linedashed_frag:AT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:bT,meshlambert_frag:PT,meshmatcap_vert:LT,meshmatcap_frag:NT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:IT,meshphong_frag:FT,meshphysical_vert:OT,meshphysical_frag:kT,meshtoon_vert:BT,meshtoon_frag:zT,points_vert:HT,points_frag:VT,shadow_vert:GT,shadow_frag:WT,sprite_vert:jT,sprite_frag:XT},me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Qn={basic:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Kt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Kt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Kt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Kt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Kt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Kt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Kt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Kt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Kt([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Kt([me.lights,me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Qn.physical={uniforms:Kt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Va={r:0,b:0,g:0},_r=new ai,$T=new Rt;function YT(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,d,f=null,h=0,p=null;function v(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function x(g){let y=!1;const C=v(g);C===null?c(a,l):C&&C.isColor&&(c(C,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,y){const C=v(y);C&&(C.isCubeTexture||C.mapping===iu)?(d===void 0&&(d=new je(new vn(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:ks(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_r.copy(y.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(_r)),d.material.toneMapped=it.getTransfer(C.colorSpace)!==lt,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new je(new lr(2,2),new ar({name:"BackgroundMaterial",uniforms:ks(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=it.getTransfer(C.colorSpace)!==lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,y){g.getRGB(Va,Ev(t)),i.buffers.color.setClear(Va.r,Va.g,Va.b,y,o)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,y=1){a.set(g),l=y,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:m,dispose:_}}function qT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,j,W,X){let ee=!1;const Z=f(W,j,L);s!==Z&&(s=Z,u(s.object)),ee=p(M,W,j,X),ee&&v(M,W,j,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(M,L,j,W),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,L,j){const W=j.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let ee=X[L.id];ee===void 0&&(ee={},X[L.id]=ee);let Z=ee[W];return Z===void 0&&(Z=h(l()),ee[W]=Z),Z}function h(M){const L=[],j=[],W=[];for(let X=0;X<n;X++)L[X]=0,j[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:j,attributeDivisors:W,object:M,attributes:{},index:null}}function p(M,L,j,W){const X=s.attributes,ee=L.attributes;let Z=0;const ne=j.getAttributes();for(const D in ne)if(ne[D].location>=0){const J=X[D];let de=ee[D];if(de===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;Z++}return s.attributesNum!==Z||s.index!==W}function v(M,L,j,W){const X={},ee=L.attributes;let Z=0;const ne=j.getAttributes();for(const D in ne)if(ne[D].location>=0){let J=ee[D];J===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),X[D]=de,Z++}s.attributes=X,s.attributesNum=Z,s.index=W}function x(){const M=s.newAttributes;for(let L=0,j=M.length;L<j;L++)M[L]=0}function m(M){c(M,0)}function c(M,L){const j=s.newAttributes,W=s.enabledAttributes,X=s.attributeDivisors;j[M]=1,W[M]===0&&(t.enableVertexAttribArray(M),W[M]=1),X[M]!==L&&(t.vertexAttribDivisor(M,L),X[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let j=0,W=L.length;j<W;j++)L[j]!==M[j]&&(t.disableVertexAttribArray(j),L[j]=0)}function g(M,L,j,W,X,ee,Z){Z===!0?t.vertexAttribIPointer(M,L,j,X,ee):t.vertexAttribPointer(M,L,j,W,X,ee)}function y(M,L,j,W){x();const X=W.attributes,ee=j.getAttributes(),Z=L.defaultAttributeValues;for(const ne in ee){const D=ee[ne];if(D.location>=0){let K=X[ne];if(K===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const J=K.normalized,de=K.itemSize,Ee=e.get(K);if(Ee===void 0)continue;const Te=Ee.buffer,Ve=Ee.type,Y=Ee.bytesPerElement,V=Ve===t.INT||Ve===t.UNSIGNED_INT||K.gpuType===Qf;if(K.isInterleavedBufferAttribute){const $=K.data,k=$.stride,se=K.offset;if($.isInstancedInterleavedBuffer){for(let fe=0;fe<D.locationSize;fe++)c(D.location+fe,$.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<D.locationSize;fe++)m(D.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let fe=0;fe<D.locationSize;fe++)g(D.location+fe,de/D.locationSize,Ve,J,k*Y,(se+de/D.locationSize*fe)*Y,V)}else{if(K.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)c(D.location+$,K.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $=0;$<D.locationSize;$++)m(D.location+$);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let $=0;$<D.locationSize;$++)g(D.location+$,de/D.locationSize,Ve,J,de*Y,de/D.locationSize*$*Y,V)}}else if(Z!==void 0){const J=Z[ne];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}_()}function C(){b();for(const M in i){const L=i[M];for(const j in L){const W=L[j];for(const X in W)d(W[X].object),delete W[X];delete L[j]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const j in L){const W=L[j];for(const X in W)d(W[X].object),delete W[X];delete L[j]}delete i[M.id]}function A(M){for(const L in i){const j=i[L];if(j[M.id]===void 0)continue;const W=j[M.id];for(const X in W)d(W[X].object),delete W[X];delete j[M.id]}}function b(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function KT(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];n.update(p,i,1)}function l(u,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],d[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x]*h[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Gn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:C,maxSamples:T}}function QT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Mr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,c=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):u();else{const _=s?0:i,g=_*4;let y=c.clippingState||null;l.value=y,y=d(v,h,g,p);for(let C=0;C!==g;++C)y[C]=n[C];c.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(f[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function JT(t){let e=new WeakMap;function n(o,a){return a===gd?o.mapping=Is:a===vd&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gd||a===vd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new nE(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vs=4,im=[.125,.215,.35,.446,.526,.582],Tr=20,ac=new bv,rm=new Qe;let lc=null,uc=0,cc=0,dc=!1;const Er=(1+Math.sqrt(5))/2,rs=1/Er,sm=[new B(-Er,rs,0),new B(Er,rs,0),new B(-rs,0,Er),new B(rs,0,Er),new B(0,Er,-rs),new B(0,Er,rs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],e1=new B;class om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=e1}=s;lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,uc,cc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Jo,format:Gn,colorSpace:Os,depthBuffer:!1},r=am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(s)),this._blurMaterial=n1(s,e,n)}return r}_compileMaterial(e){const n=new je(this._lodPlanes[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,r,s){const l=new mn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(rm),f.toneMapping=tr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new yv({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new je(new vn,x);let c=!1;const _=e.background;_?_.isColor&&(x.color.copy(_),e.background=null,c=!0):(x.color.copy(rm),c=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[g],s.y,s.z)):y===1?(l.up.set(0,0,u[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[g],s.z)):(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[g]));const C=this._cubeSize;Ga(r,y*C,g>2?C:0,C,C),f.setRenderTarget(r),c&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sm[(r-s-1)%sm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new je(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),x=s/v,m=isFinite(s)?1+Math.floor(d*x):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const c=[];let _=0;for(let A=0;A<Tr;++A){const b=A/x,w=Math.exp(-b*b/2);c.push(w),A===0?_+=w:A<m&&(_+=2*w)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-vs?r-g+vs:0),T=4*(this._cubeSize-y);Ga(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(f,ac)}}function t1(t){const e=[],n=[],i=[];let r=t;const s=t-vs+1+im.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-vs?l=im[o-t+vs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,x=3,m=2,c=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(c*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,b=T>2?0:-1,w=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];_.set(w,x*v*T),g.set(h,m*v*T);const M=[T,T,T,T,T,T];y.set(M,c*v*T)}const C=new Li;C.setAttribute("position",new ri(_,x)),C.setAttribute("uv",new ri(g,m)),C.setAttribute("faceIndex",new ri(y,c)),e.push(C),r>vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function am(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function n1(t,e,n){const i=new Float32Array(Tr),r=new B(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function lm(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function um(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gd||l===vd,d=l===Is||l===Fs;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new om(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new om(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function r1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function s1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const C=_[g+0],T=_[g+1],A=_[g+2];h.push(C,T,T,A,A,C)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const C=g+0,T=g+1,A=g+2;h.push(C,T,T,A,A,C)}}else return;const m=new(gv(h)?Mv:Sv)(h,1);m.version=x;const c=s.get(f);c&&e.remove(c),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function o1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let c=0;c<v;c++)m+=p[c];n.update(m,i,1)}function f(h,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let c=0;for(let _=0;_<v;_++)c+=p[_]*x[_];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function a1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function l1(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*f),b=new vv(A,C,T,f);b.type=yi,b.needsUpdate=!0;const w=y*4;for(let L=0;L<f;L++){const j=c[L],W=_[L],X=g[L],ee=C*T*4*L;for(let Z=0;Z<j.count;Z++){const ne=Z*w;v===!0&&(r.fromBufferAttribute(j,Z),A[ee+ne+0]=r.x,A[ee+ne+1]=r.y,A[ee+ne+2]=r.z,A[ee+ne+3]=0),x===!0&&(r.fromBufferAttribute(W,Z),A[ee+ne+4]=r.x,A[ee+ne+5]=r.y,A[ee+ne+6]=r.z,A[ee+ne+7]=0),m===!0&&(r.fromBufferAttribute(X,Z),A[ee+ne+8]=r.x,A[ee+ne+9]=r.y,A[ee+ne+10]=r.z,A[ee+ne+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new rt(C,T)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function u1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Dv=new un,cm=new Cv(1,1),Uv=new vv,Iv=new kM,Fv=new Tv,dm=[],fm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dm[r];if(s===void 0&&(s=new Float32Array(r),dm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;mm.set(i),t.uniformMatrix2fv(this.addr,!1,mm),Ut(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;pm.set(i),t.uniformMatrix3fv(this.addr,!1,pm),Ut(n,i)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;hm.set(i),t.uniformMatrix4fv(this.addr,!1,hm),Ut(n,i)}}function v1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function S1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cm.compareFunction=mv,s=cm):s=Dv,n.setTexture2D(e||s,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Iv,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Fv,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uv,r)}function b1(t){switch(t){case 5126:return c1;case 35664:return d1;case 35665:return f1;case 35666:return h1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return x1;case 35669:case 35673:return y1;case 5125:return S1;case 36294:return M1;case 36295:return E1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}function P1(t,e){t.uniform1fv(this.addr,e)}function L1(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function N1(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function D1(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function U1(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I1(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function F1(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O1(t,e){t.uniform1iv(this.addr,e)}function k1(t,e){t.uniform2iv(this.addr,e)}function B1(t,e){t.uniform3iv(this.addr,e)}function z1(t,e){t.uniform4iv(this.addr,e)}function H1(t,e){t.uniform1uiv(this.addr,e)}function V1(t,e){t.uniform2uiv(this.addr,e)}function G1(t,e){t.uniform3uiv(this.addr,e)}function W1(t,e){t.uniform4uiv(this.addr,e)}function j1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dv,s[o])}function X1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Iv,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Fv,s[o])}function Y1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Uv,s[o])}function q1(t){switch(t){case 5126:return P1;case 35664:return L1;case 35665:return N1;case 35666:return D1;case 35674:return U1;case 35675:return I1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return k1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return Y1}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=b1(n.type)}}class Z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=q1(n.type)}}class Q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function gm(t,e){t.seq.push(e),t.map[e.id]=e}function J1(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){gm(n,u===void 0?new K1(a,t,e):new Z1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Q1(a),gm(n,f)),n=f}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);J1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eA=37297;let tA=0;function nA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const _m=new We;function iA(t){it._getMatrix(_m,it.workingColorSpace,t);const e=`mat3( ${_m.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Fl:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+nA(t.getShaderSource(e),a)}else return s}function rA(t,e){const n=iA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function sA(t,e){let n;switch(e){case fM:n="Linear";break;case hM:n="Reinhard";break;case pM:n="Cineon";break;case mM:n="ACESFilmic";break;case vM:n="AgX";break;case _M:n="Neutral";break;case gM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wa=new B;function oA(){it.getLuminanceCoefficients(Wa);const t=Wa.x.toFixed(4),e=Wa.y.toFixed(4),n=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function lA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ho(t){return t!==""}function ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(t){return t.replace(cA,fA)}const dA=new Map;function fA(t,e){let n=Xe[e];if(n===void 0){const i=dA.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(n)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(t){return t.replace(hA,pA)}function pA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Em(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Kf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function gA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Fs:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function _A(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case cM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function xA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=mA(n),u=gA(n),d=vA(n),f=_A(n),h=xA(n),p=aA(n),v=lA(s),x=r.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ho).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ho).join(`
`),c.length>0&&(c+=`
`)):(m=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),c=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==tr?sA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rA("linearToOutputTexel",n.outputColorSpace),oA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ho).join(`
`)),o=$d(o),o=ym(o,n),o=Sm(o,n),a=$d(a),a=ym(a,n),a=Sm(a,n),o=Mm(o),a=Mm(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+o,y=_+c+a,C=vm(r,r.VERTEX_SHADER,g),T=vm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(L){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(C)||"",X=r.getShaderInfoLog(T)||"",ee=j.trim(),Z=W.trim(),ne=X.trim();let D=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,T);else{const J=xm(r,C,"vertex"),de=xm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ee+`
`+J+`
`+de)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(Z===""||ne==="")&&(K=!1);K&&(L.diagnostics={runnable:D,programLog:ee,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ne,prefix:c}})}r.deleteShader(C),r.deleteShader(T),b=new cl(r,x),w=uA(r,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,eA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function wA(t,e,n,i,r,s,o){const a=new _v,l=new MA,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,j,W){const X=j.fog,ee=W.geometry,Z=w.isMeshStandardMaterial?j.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),D=ne&&ne.mapping===iu?ne.image.height:null,K=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const J=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,de=J!==void 0?J.length:0;let Ee=0;ee.morphAttributes.position!==void 0&&(Ee=1),ee.morphAttributes.normal!==void 0&&(Ee=2),ee.morphAttributes.color!==void 0&&(Ee=3);let Te,Ve,Y,V;if(K){const st=Qn[K];Te=st.vertexShader,Ve=st.fragmentShader}else Te=w.vertexShader,Ve=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),V=l.getFragmentShaderID(w);const $=t.getRenderTarget(),k=t.state.buffers.depth.getReversed(),se=W.isInstancedMesh===!0,fe=W.isBatchedMesh===!0,Ze=!!w.map,Ne=!!w.matcap,N=!!ne,He=!!w.aoMap,pe=!!w.lightMap,Ue=!!w.bumpMap,Pe=!!w.normalMap,et=!!w.displacementMap,xe=!!w.emissiveMap,Be=!!w.metalnessMap,ct=!!w.roughnessMap,ht=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,O=w.iridescence>0,Q=w.sheen>0,ie=w.transmission>0,q=ht&&!!w.anisotropyMap,Re=R&&!!w.clearcoatMap,ae=R&&!!w.clearcoatNormalMap,we=R&&!!w.clearcoatRoughnessMap,Ae=O&&!!w.iridescenceMap,re=O&&!!w.iridescenceThicknessMap,_e=Q&&!!w.sheenColorMap,Oe=Q&&!!w.sheenRoughnessMap,Le=!!w.specularMap,ge=!!w.specularColorMap,Ge=!!w.specularIntensityMap,U=ie&&!!w.transmissionMap,ce=ie&&!!w.thicknessMap,he=!!w.gradientMap,Me=!!w.alphaMap,le=w.alphaTest>0,te=!!w.alphaHash,be=!!w.extensions;let ze=tr;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ze=t.toneMapping);const dt={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Te,fragmentShader:Ve,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:V,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:fe,batchingColor:fe&&W._colorsTexture!==null,instancing:se,instancingColor:se&&W.instanceColor!==null,instancingMorph:se&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:Ne,envMap:N,envMapMode:N&&ne.mapping,envMapCubeUVHeight:D,aoMap:He,lightMap:pe,bumpMap:Ue,normalMap:Pe,displacementMap:h&&et,emissiveMap:xe,normalMapObjectSpace:Pe&&w.normalMapType===MM,normalMapTangentSpace:Pe&&w.normalMapType===pv,metalnessMap:Be,roughnessMap:ct,anisotropy:ht,anisotropyMap:q,clearcoat:R,clearcoatMap:Re,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:S,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:_e,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:ge,specularIntensityMap:Ge,transmission:ie,transmissionMap:U,thicknessMap:ce,gradientMap:he,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:Me,alphaTest:le,alphaHash:te,combine:w.combine,mapUv:Ze&&x(w.map.channel),aoMapUv:He&&x(w.aoMap.channel),lightMapUv:pe&&x(w.lightMap.channel),bumpMapUv:Ue&&x(w.bumpMap.channel),normalMapUv:Pe&&x(w.normalMap.channel),displacementMapUv:et&&x(w.displacementMap.channel),emissiveMapUv:xe&&x(w.emissiveMap.channel),metalnessMapUv:Be&&x(w.metalnessMap.channel),roughnessMapUv:ct&&x(w.roughnessMap.channel),anisotropyMapUv:q&&x(w.anisotropyMap.channel),clearcoatMapUv:Re&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(w.sheenRoughnessMap.channel),specularMapUv:Le&&x(w.specularMap.channel),specularColorMapUv:ge&&x(w.specularColorMap.channel),specularIntensityMapUv:Ge&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:ce&&x(w.thicknessMap.channel),alphaMapUv:Me&&x(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Pe||ht),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ee.attributes.uv&&(Ze||Me),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:k,skinning:W.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&it.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Hn,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=u.has(1),dt.vertexUv2s=u.has(2),dt.vertexUv3s=u.has(3),u.clear(),dt}function c(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(_(M,w),g(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function g(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const M=v[w.type];let L;if(M){const j=Qn[M];L=QM.clone(j.uniforms)}else L=w.uniforms;return L}function C(w,M){let L;for(let j=0,W=d.length;j<W;j++){const X=d[j];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new yA(t,M,w,s),d.push(L)),L}function T(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function A(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:b}}function TA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function AA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,x,m){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=v,c.renderOrder=f.renderOrder,c.z=x,c.group=m),e++,c}function a(f,h,p,v,x,m){const c=o(f,h,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(f,h,p,v,x,m){const c=o(f,h,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||AA),i.length>1&&i.sort(h||wm),r.length>1&&r.sort(h||wm)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function CA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Tm,t.set(i,[o])):r>=s.length?(o=new Tm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Qe};break;case"SpotLight":n={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function bA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PA=0;function LA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NA(t){const e=new RA,n=bA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new Rt,o=new Rt;function a(u){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,x=0,m=0,c=0,_=0,g=0,y=0,C=0,T=0,A=0;u.sort(LA);for(let w=0,M=u.length;w<M;w++){const L=u[w],j=L.color,W=L.intensity,X=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=j.r*W,f+=j.g*W,h+=j.b*W;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],W);A++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,D=n.get(L);D.shadowIntensity=ne.intensity,D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=Z,p++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(j).multiplyScalar(W),Z.distance=X,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[x]=Z;const ne=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,ne.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[x]=ne.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=ne.intensity,D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=ee,y++}x++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(j).multiplyScalar(W),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ne=L.shadow,D=n.get(L);D.shadowIntensity=ne.intensity,D.shadowBias=ne.bias,D.shadowNormalBias=ne.normalBias,D.shadowRadius=ne.radius,D.shadowMapSize=ne.mapSize,D.shadowCameraNear=ne.camera.near,D.shadowCameraFar=ne.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=L.shadow.matrix,g++}i.point[v]=Z,v++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(W),Z.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[c]=Z,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==c||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,b.directionalLength=p,b.pointLength=v,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=c,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=A,i.version=PA++)}function l(u,d){let f=0,h=0,p=0,v=0,x=0;const m=d.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Am(t){const e=new NA(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Am(t),e.set(r,[a])):s>=o.length?(a=new Am(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function FA(t,e,n){let i=new oh;const r=new rt,s=new rt,o=new At,a=new aE({depthPacking:SM}),l=new lE,u={},d=n.maxTextureSize,f={[or]:$t,[$t]:or,[Hn]:Hn},h=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:UA,fragmentShader:IA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Li;v.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new je(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rv;let c=this.type;this.render=function(T,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),j=t.state;j.setBlending(er),j.buffers.depth.getReversed()?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const W=c!==mi&&this.type===mi,X=c===mi&&this.type!==mi;for(let ee=0,Z=T.length;ee<Z;ee++){const ne=T[ee],D=ne.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||W===!0||X===!0){const de=this.type!==mi?{minFilter:$n,magFilter:$n}:{};D.map!==null&&D.map.dispose(),D.map=new Br(r.x,r.y,de),D.map.texture.name=ne.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let de=0;de<J;de++){const Ee=D.getViewport(de);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),j.viewport(o),D.updateMatrices(ne,de),i=D.getFrustum(),y(A,b,D.camera,ne,this.type)}D.isPointLightShadow!==!0&&this.type===mi&&_(D,b),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,L)};function _(T,A){const b=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Br(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,b,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,b,p,x,null)}function g(T,A,b,w){let M=null;const L=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const j=M.uuid,W=A.uuid;let X=u[j];X===void 0&&(X={},u[j]=X);let ee=X[W];ee===void 0&&(ee=M.clone(),X[W]=ee,A.addEventListener("dispose",C)),M=ee}if(M.visible=A.visible,M.wireframe=A.wireframe,w===mi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=t.properties.get(M);j.light=b}return M}function y(T,A,b,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===mi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const W=e.update(T),X=T.material;if(Array.isArray(X)){const ee=W.groups;for(let Z=0,ne=ee.length;Z<ne;Z++){const D=ee[Z],K=X[D.materialIndex];if(K&&K.visible){const J=g(T,K,w,M);T.onBeforeShadow(t,T,A,b,W,J,D),t.renderBufferDirect(b,null,W,J,T,D),T.onAfterShadow(t,T,A,b,W,J,D)}}}else if(X.visible){const ee=g(T,X,w,M);T.onBeforeShadow(t,T,A,b,W,ee,null),t.renderBufferDirect(b,null,W,ee,T,null),T.onAfterShadow(t,T,A,b,W,ee,null)}}const j=T.children;for(let W=0,X=j.length;W<X;W++)y(j[W],A,b,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(const b in u){const w=u[b],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const OA={[ud]:cd,[dd]:pd,[fd]:md,[Us]:hd,[cd]:ud,[pd]:dd,[md]:fd,[hd]:Us};function kA(t,e){function n(){let U=!1;const ce=new At;let he=null;const Me=new At(0,0,0,0);return{setMask:function(le){he!==le&&!U&&(t.colorMask(le,le,le,le),he=le)},setLocked:function(le){U=le},setClear:function(le,te,be,ze,dt){dt===!0&&(le*=ze,te*=ze,be*=ze),ce.set(le,te,be,ze),Me.equals(ce)===!1&&(t.clearColor(le,te,be,ze),Me.copy(ce))},reset:function(){U=!1,he=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,he=null,Me=null,le=null;return{setReversed:function(te){if(ce!==te){const be=e.get("EXT_clip_control");te?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const ze=le;le=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(te){te?$(t.DEPTH_TEST):k(t.DEPTH_TEST)},setMask:function(te){he!==te&&!U&&(t.depthMask(te),he=te)},setFunc:function(te){if(ce&&(te=OA[te]),Me!==te){switch(te){case ud:t.depthFunc(t.NEVER);break;case cd:t.depthFunc(t.ALWAYS);break;case dd:t.depthFunc(t.LESS);break;case Us:t.depthFunc(t.LEQUAL);break;case fd:t.depthFunc(t.EQUAL);break;case hd:t.depthFunc(t.GEQUAL);break;case pd:t.depthFunc(t.GREATER);break;case md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=te}},setLocked:function(te){U=te},setClear:function(te){le!==te&&(ce&&(te=1-te),t.clearDepth(te),le=te)},reset:function(){U=!1,he=null,Me=null,le=null,ce=!1}}}function r(){let U=!1,ce=null,he=null,Me=null,le=null,te=null,be=null,ze=null,dt=null;return{setTest:function(st){U||(st?$(t.STENCIL_TEST):k(t.STENCIL_TEST))},setMask:function(st){ce!==st&&!U&&(t.stencilMask(st),ce=st)},setFunc:function(st,ui,qn){(he!==st||Me!==ui||le!==qn)&&(t.stencilFunc(st,ui,qn),he=st,Me=ui,le=qn)},setOp:function(st,ui,qn){(te!==st||be!==ui||ze!==qn)&&(t.stencilOp(st,ui,qn),te=st,be=ui,ze=qn)},setLocked:function(st){U=st},setClear:function(st){dt!==st&&(t.clearStencil(st),dt=st)},reset:function(){U=!1,ce=null,he=null,Me=null,le=null,te=null,be=null,ze=null,dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,p=[],v=null,x=!1,m=null,c=null,_=null,g=null,y=null,C=null,T=null,A=new Qe(0,0,0),b=0,w=!1,M=null,L=null,j=null,W=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ne=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(D)[1]),Z=ne>=1):D.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Z=ne>=2);let K=null,J={};const de=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),Te=new At().fromArray(de),Ve=new At().fromArray(Ee);function Y(U,ce,he,Me){const le=new Uint8Array(4),te=t.createTexture();t.bindTexture(U,te),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<he;be++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ce+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return te}const V={};V[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),V[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),V[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(Us),Ue(!1),Pe(Pp),$(t.CULL_FACE),He(er);function $(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function k(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function se(U,ce){return f[U]!==ce?(t.bindFramebuffer(U,ce),f[U]=ce,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function fe(U,ce){let he=p,Me=!1;if(U){he=h.get(ce),he===void 0&&(he=[],h.set(ce,he));const le=U.textures;if(he.length!==le.length||he[0]!==t.COLOR_ATTACHMENT0){for(let te=0,be=le.length;te<be;te++)he[te]=t.COLOR_ATTACHMENT0+te;he.length=le.length,Me=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Me=!0);Me&&t.drawBuffers(he)}function Ze(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const Ne={[wr]:t.FUNC_ADD,[$S]:t.FUNC_SUBTRACT,[YS]:t.FUNC_REVERSE_SUBTRACT};Ne[qS]=t.MIN,Ne[KS]=t.MAX;const N={[ZS]:t.ZERO,[QS]:t.ONE,[JS]:t.SRC_COLOR,[ad]:t.SRC_ALPHA,[sM]:t.SRC_ALPHA_SATURATE,[iM]:t.DST_COLOR,[tM]:t.DST_ALPHA,[eM]:t.ONE_MINUS_SRC_COLOR,[ld]:t.ONE_MINUS_SRC_ALPHA,[rM]:t.ONE_MINUS_DST_COLOR,[nM]:t.ONE_MINUS_DST_ALPHA,[oM]:t.CONSTANT_COLOR,[aM]:t.ONE_MINUS_CONSTANT_COLOR,[lM]:t.CONSTANT_ALPHA,[uM]:t.ONE_MINUS_CONSTANT_ALPHA};function He(U,ce,he,Me,le,te,be,ze,dt,st){if(U===er){x===!0&&(k(t.BLEND),x=!1);return}if(x===!1&&($(t.BLEND),x=!0),U!==XS){if(U!==m||st!==w){if((c!==wr||y!==wr)&&(t.blendEquation(t.FUNC_ADD),c=wr,y=wr),st)switch(U){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Np:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,g=null,C=null,T=null,A.set(0,0,0),b=0,m=U,w=st}return}le=le||ce,te=te||he,be=be||Me,(ce!==c||le!==y)&&(t.blendEquationSeparate(Ne[ce],Ne[le]),c=ce,y=le),(he!==_||Me!==g||te!==C||be!==T)&&(t.blendFuncSeparate(N[he],N[Me],N[te],N[be]),_=he,g=Me,C=te,T=be),(ze.equals(A)===!1||dt!==b)&&(t.blendColor(ze.r,ze.g,ze.b,dt),A.copy(ze),b=dt),m=U,w=!1}function pe(U,ce){U.side===Hn?k(t.CULL_FACE):$(t.CULL_FACE);let he=U.side===$t;ce&&(he=!he),Ue(he),U.blending===ws&&U.transparent===!1?He(er):He(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;a.setTest(Me),Me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):k(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){M!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),M=U)}function Pe(U){U!==WS?($(t.CULL_FACE),U!==L&&(U===Pp?t.cullFace(t.BACK):U===jS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):k(t.CULL_FACE),L=U}function et(U){U!==j&&(Z&&t.lineWidth(U),j=U)}function xe(U,ce,he){U?($(t.POLYGON_OFFSET_FILL),(W!==ce||X!==he)&&(t.polygonOffset(ce,he),W=ce,X=he)):k(t.POLYGON_OFFSET_FILL)}function Be(U){U?$(t.SCISSOR_TEST):k(t.SCISSOR_TEST)}function ct(U){U===void 0&&(U=t.TEXTURE0+ee-1),K!==U&&(t.activeTexture(U),K=U)}function ht(U,ce,he){he===void 0&&(K===null?he=t.TEXTURE0+ee-1:he=K);let Me=J[he];Me===void 0&&(Me={type:void 0,texture:void 0},J[he]=Me),(Me.type!==U||Me.texture!==ce)&&(K!==he&&(t.activeTexture(he),K=he),t.bindTexture(U,ce||V[U]),Me.type=U,Me.texture=ce)}function R(){const U=J[K];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(U){Te.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function Oe(U){Ve.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function Le(U,ce){let he=u.get(ce);he===void 0&&(he=new WeakMap,u.set(ce,he));let Me=he.get(U);Me===void 0&&(Me=t.getUniformBlockIndex(ce,U.name),he.set(U,Me))}function ge(U,ce){const Me=u.get(ce).get(U);l.get(ce)!==Me&&(t.uniformBlockBinding(ce,Me,U.__bindingPointIndex),l.set(ce,Me))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,J={},f={},h=new WeakMap,p=[],v=null,x=!1,m=null,c=null,_=null,g=null,y=null,C=null,T=null,A=new Qe(0,0,0),b=0,w=!1,M=null,L=null,j=null,W=null,X=null,Te.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:k,bindFramebuffer:se,drawBuffers:fe,useProgram:Ze,setBlending:He,setMaterial:pe,setFlipSided:Ue,setCullFace:Pe,setLineWidth:et,setPolygonOffset:xe,setScissorTest:Be,activeTexture:ct,bindTexture:ht,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ae,texImage3D:re,updateUBOMapping:Le,uniformBlockBinding:ge,texStorage2D:ae,texStorage3D:we,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:_e,viewport:Oe,reset:Ge}}function BA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):kl("canvas")}function x(R,S,O){let Q=1;const ie=ht(R);if((ie.width>O||ie.height>O)&&(Q=O/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Q*ie.width),Re=Math.floor(Q*ie.height);f===void 0&&(f=v(q,Re));const ae=S?v(q,Re):f;return ae.width=q,ae.height=Re,ae.getContext("2d").drawImage(R,0,0,q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+Re+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function c(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(R,S,O,Q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),S===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),S===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),S===t.RGBA){const Re=ie?Fl:it.getTransfer(Q);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Re===lt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(R,S){let O;return R?S===null||S===kr||S===Vo?O=t.DEPTH24_STENCIL8:S===yi?O=t.DEPTH32F_STENCIL8:S===Ho&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===kr||S===Vo?O=t.DEPTH_COMPONENT24:S===yi?O=t.DEPTH_COMPONENT32F:S===Ho&&(O=t.DEPTH_COMPONENT16),O}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==$n&&R.minFilter!==ei?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&d.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S)}function b(R){const S=i.get(R);if(S.__webglInit===void 0)return;const O=R.source,Q=h.get(O);if(Q){const ie=Q[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(R),Object.keys(Q).length===0&&h.delete(O)}i.remove(R)}function w(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const O=R.source,Q=h.get(O);delete Q[S.__cacheKey],o.memory.textures--}function M(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ie=0;ie<S.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(S.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let Q=0,ie=O.length;Q<ie;Q++){const q=i.get(O[Q]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[Q])}i.remove(R)}let L=0;function j(){L=0}function W(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function X(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ee(R,S){const O=i.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,R,S);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Z(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){V(O,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function ne(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){V(O,R,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function D(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){$(O,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const K={[_d]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[xd]:t.MIRRORED_REPEAT},J={[$n]:t.NEAREST,[xM]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[Iu]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},de={[EM]:t.NEVER,[bM]:t.ALWAYS,[wM]:t.LESS,[mv]:t.LEQUAL,[TM]:t.EQUAL,[RM]:t.GEQUAL,[AM]:t.GREATER,[CM]:t.NOTEQUAL};function Ee(R,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ei||S.magFilter===Iu||S.magFilter===wa||S.magFilter===Pr||S.minFilter===ei||S.minFilter===Iu||S.minFilter===wa||S.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,K[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$n||S.minFilter!==wa&&S.minFilter!==Pr||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Te(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const Q=S.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const q=X(S);if(q!==R.__cacheKey){ie[q]===void 0&&(ie[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ie[q].usedTimes++;const Re=ie[R.__cacheKey];Re!==void 0&&(ie[R.__cacheKey].usedTimes--,Re.usedTimes===0&&w(S)),R.__cacheKey=q,R.__webglTexture=ie[q].texture}return O}function Ve(R,S,O){return Math.floor(Math.floor(R/O)/S)}function Y(R,S,O,Q){const q=R.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,O,Q,S.data);else{q.sort((re,_e)=>re.start-_e.start);let Re=0;for(let re=1;re<q.length;re++){const _e=q[Re],Oe=q[re],Le=_e.start+_e.count,ge=Ve(Oe.start,S.width,4),Ge=Ve(_e.start,S.width,4);Oe.start<=Le+1&&ge===Ge&&Ve(Oe.start+Oe.count-1,S.width,4)===ge?_e.count=Math.max(_e.count,Oe.start+Oe.count-_e.start):(++Re,q[Re]=Oe)}q.length=Re+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let re=0,_e=q.length;re<_e;re++){const Oe=q[re],Le=Math.floor(Oe.start/4),ge=Math.ceil(Oe.count/4),Ge=Le%S.width,U=Math.floor(Le/S.width),ce=ge,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ge,U,ce,he,O,Q,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function V(R,S,O){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=Te(R,S),q=S.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+O);const Re=i.get(q);if(q.version!==Re.__version||ie===!0){n.activeTexture(t.TEXTURE0+O);const ae=it.getPrimaries(it.workingColorSpace),we=S.colorSpace===Gi?null:it.getPrimaries(S.colorSpace),Ae=S.colorSpace===Gi||ae===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=x(S.image,!1,r.maxTextureSize);re=ct(S,re);const _e=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type);let Le=g(S.internalFormat,_e,Oe,S.colorSpace,S.isVideoTexture);Ee(Q,S);let ge;const Ge=S.mipmaps,U=S.isVideoTexture!==!0,ce=Re.__version===void 0||ie===!0,he=q.dataReady,Me=C(S,re);if(S.isDepthTexture)Le=y(S.format===Wo,S.type),ce&&(U?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,_e,Oe,null));else if(S.isDataTexture)if(Ge.length>0){U&&ce&&n.texStorage2D(t.TEXTURE_2D,Me,Le,Ge[0].width,Ge[0].height);for(let le=0,te=Ge.length;le<te;le++)ge=Ge[le],U?he&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,Oe,ge.data):n.texImage2D(t.TEXTURE_2D,le,Le,ge.width,ge.height,0,_e,Oe,ge.data);S.generateMipmaps=!1}else U?(ce&&n.texStorage2D(t.TEXTURE_2D,Me,Le,re.width,re.height),he&&Y(S,re,_e,Oe)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,_e,Oe,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Le,Ge[0].width,Ge[0].height,re.depth);for(let le=0,te=Ge.length;le<te;le++)if(ge=Ge[le],S.format!==Gn)if(_e!==null)if(U){if(he)if(S.layerUpdates.size>0){const be=nm(ge.width,ge.height,S.format,S.type);for(const ze of S.layerUpdates){const dt=ge.data.subarray(ze*be/ge.data.BYTES_PER_ELEMENT,(ze+1)*be/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,ze,ge.width,ge.height,1,_e,dt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,re.depth,_e,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Le,ge.width,ge.height,re.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,re.depth,_e,Oe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Le,ge.width,ge.height,re.depth,0,_e,Oe,ge.data)}else{U&&ce&&n.texStorage2D(t.TEXTURE_2D,Me,Le,Ge[0].width,Ge[0].height);for(let le=0,te=Ge.length;le<te;le++)ge=Ge[le],S.format!==Gn?_e!==null?U?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?he&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,Oe,ge.data):n.texImage2D(t.TEXTURE_2D,le,Le,ge.width,ge.height,0,_e,Oe,ge.data)}else if(S.isDataArrayTexture)if(U){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,Le,re.width,re.height,re.depth),he)if(S.layerUpdates.size>0){const le=nm(re.width,re.height,S.format,S.type);for(const te of S.layerUpdates){const be=re.data.subarray(te*le/re.data.BYTES_PER_ELEMENT,(te+1)*le/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,_e,Oe,be)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Oe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,_e,Oe,re.data);else if(S.isData3DTexture)U?(ce&&n.texStorage3D(t.TEXTURE_3D,Me,Le,re.width,re.height,re.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Oe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,_e,Oe,re.data);else if(S.isFramebufferTexture){if(ce)if(U)n.texStorage2D(t.TEXTURE_2D,Me,Le,re.width,re.height);else{let le=re.width,te=re.height;for(let be=0;be<Me;be++)n.texImage2D(t.TEXTURE_2D,be,Le,le,te,0,_e,Oe,null),le>>=1,te>>=1}}else if(Ge.length>0){if(U&&ce){const le=ht(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Me,Le,le.width,le.height)}for(let le=0,te=Ge.length;le<te;le++)ge=Ge[le],U?he&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,_e,Oe,ge):n.texImage2D(t.TEXTURE_2D,le,Le,_e,Oe,ge);S.generateMipmaps=!1}else if(U){if(ce){const le=ht(re);n.texStorage2D(t.TEXTURE_2D,Me,Le,le.width,le.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Oe,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,_e,Oe,re);m(S)&&c(Q),Re.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function $(R,S,O){if(S.image.length!==6)return;const Q=Te(R,S),ie=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const q=i.get(ie);if(ie.version!==q.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const Re=it.getPrimaries(it.workingColorSpace),ae=S.colorSpace===Gi?null:it.getPrimaries(S.colorSpace),we=S.colorSpace===Gi||Re===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Ae&&!re?_e[te]=x(S.image[te],!0,r.maxCubemapSize):_e[te]=re?S.image[te].image:S.image[te],_e[te]=ct(S,_e[te]);const Oe=_e[0],Le=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Ge=g(S.internalFormat,Le,ge,S.colorSpace),U=S.isVideoTexture!==!0,ce=q.__version===void 0||Q===!0,he=ie.dataReady;let Me=C(S,Oe);Ee(t.TEXTURE_CUBE_MAP,S);let le;if(Ae){U&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ge,Oe.width,Oe.height);for(let te=0;te<6;te++){le=_e[te].mipmaps;for(let be=0;be<le.length;be++){const ze=le[be];S.format!==Gn?Le!==null?U?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,ze.width,ze.height,Le,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,Ge,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,ze.width,ze.height,Le,ge,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,Ge,ze.width,ze.height,0,Le,ge,ze.data)}}}else{if(le=S.mipmaps,U&&ce){le.length>0&&Me++;const te=ht(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(re){U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Le,ge,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,_e[te].width,_e[te].height,0,Le,ge,_e[te].data);for(let be=0;be<le.length;be++){const dt=le[be].image[te].image;U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,dt.width,dt.height,Le,ge,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,Ge,dt.width,dt.height,0,Le,ge,dt.data)}}else{U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,ge,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Le,ge,_e[te]);for(let be=0;be<le.length;be++){const ze=le[be];U?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Le,ge,ze.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,Ge,Le,ge,ze.image[te])}}}m(S)&&c(t.TEXTURE_CUBE_MAP),q.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function k(R,S,O,Q,ie,q){const Re=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),we=g(O.internalFormat,Re,ae,O.colorSpace),Ae=i.get(S),re=i.get(O);if(re.__renderTarget=S,!Ae.__hasExternalTextures){const _e=Math.max(1,S.width>>q),Oe=Math.max(1,S.height>>q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,q,we,_e,Oe,S.depth,0,Re,ae,null):n.texImage2D(ie,q,we,_e,Oe,0,Re,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,re.__webglTexture,0,et(S)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,re.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(R,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,q=y(S.stencilBuffer,ie),Re=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=et(S);xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,q,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,R)}else{const Q=S.textures;for(let ie=0;ie<Q.length;ie++){const q=Q[ie],Re=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),we=g(q.internalFormat,Re,ae,q.colorSpace),Ae=et(S);O&&xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,we,S.width,S.height):xe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,we,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,we,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const ie=Q.__webglTexture,q=et(S);if(S.depthTexture.format===Go)xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Wo)xe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const S=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=Q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Q=R.texture.mipmaps;Q&&Q.length>0?fe(S.__webglFramebuffer[0],R):fe(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),se(S.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,q)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,S,O){const Q=i.get(R);S!==void 0&&k(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ze(R)}function N(R){const S=R.texture,O=i.get(R),Q=i.get(S);R.addEventListener("dispose",A);const ie=R.textures,q=R.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let we=0;we<S.mipmaps.length;we++)O.__webglFramebuffer[ae][we]=t.createFramebuffer()}else O.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)O.__webglFramebuffer[ae]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Re)for(let ae=0,we=ie.length;ae<we;ae++){const Ae=i.get(ie[ae]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const we=ie[ae];O.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Ae=s.convert(we.format,we.colorSpace),re=s.convert(we.type),_e=g(we.internalFormat,Ae,re,we.colorSpace,R.isXRRenderTarget===!0),Oe=et(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),se(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)k(O.__webglFramebuffer[ae][we],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else k(O.__webglFramebuffer[ae],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let ae=0,we=ie.length;ae<we;ae++){const Ae=ie[ae],re=i.get(Ae);let _e=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,re.__webglTexture),Ee(_e,Ae),k(O.__webglFramebuffer,R,Ae,t.COLOR_ATTACHMENT0+ae,_e,0),m(Ae)&&c(_e)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Q.__webglTexture),Ee(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)k(O.__webglFramebuffer[we],R,S,t.COLOR_ATTACHMENT0,ae,we);else k(O.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ae,0);m(S)&&c(ae),n.unbindTexture()}R.depthBuffer&&Ze(R)}function He(R){const S=R.textures;for(let O=0,Q=S.length;O<Q;O++){const ie=S[O];if(m(ie)){const q=_(R),Re=i.get(ie).__webglTexture;n.bindTexture(q,Re),c(q),n.unbindTexture()}}}const pe=[],Ue=[];function Pe(R){if(R.samples>0){if(xe(R)===!1){const S=R.textures,O=R.width,Q=R.height;let ie=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(R),ae=S.length>1;if(ae)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const we=R.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const re=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,O,Q,0,0,O,Q,ie,t.NEAREST),l===!0&&(pe.length=0,Ue.length=0,pe.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(q),Ue.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const re=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function et(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function ct(R,S){const O=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Os&&O!==Gi&&(it.getTransfer(O)===lt?(Q!==Gn||ie!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=D,this.rebindTextures=Ne,this.setupRenderTarget=N,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=k,this.useMultisampledRTT=xe}function zA(t,e){function n(i,r=Gi){let s;const o=it.getTransfer(r);if(i===oi)return t.UNSIGNED_BYTE;if(i===Jf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ov)return t.BYTE;if(i===av)return t.SHORT;if(i===Ho)return t.UNSIGNED_SHORT;if(i===Qf)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===Jo)return t.HALF_FLOAT;if(i===uv)return t.ALPHA;if(i===cv)return t.RGB;if(i===Gn)return t.RGBA;if(i===Go)return t.DEPTH_COMPONENT;if(i===Wo)return t.DEPTH_STENCIL;if(i===dv)return t.RED;if(i===th)return t.RED_INTEGER;if(i===fv)return t.RG;if(i===nh)return t.RG_INTEGER;if(i===ih)return t.RGBA_INTEGER;if(i===sl||i===ol||i===al||i===ll)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Td)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cd||i===Rd||i===bd||i===Pd||i===Ld||i===Nd||i===Dd||i===Ud||i===Id||i===Fd||i===Od||i===kd||i===Bd||i===zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ud)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hv||i===Gd||i===Wd||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Ov extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ov(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ar({vertexShader:HA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,v=null;const x=new GA,m={},c=n.getContextAttributes();let _=null,g=null;const y=[],C=[],T=new rt;let A=null;const b=new mn;b.viewport=new At;const w=new mn;w.viewport=new At;const M=[b,w],L=new dE;let j=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let V=y[Y];return V===void 0&&(V=new rc,y[Y]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Y){let V=y[Y];return V===void 0&&(V=new rc,y[Y]=V),V.getGripSpace()},this.getHand=function(Y){let V=y[Y];return V===void 0&&(V=new rc,y[Y]=V),V.getHandSpace()};function X(Y){const V=C.indexOf(Y.inputSource);if(V===-1)return;const $=y[V];$!==void 0&&($.update(Y.inputSource,Y.frame,u||o),$.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<y.length;Y++){const V=C[Y];V!==null&&(C[Y]=null,y[Y].disconnect(V))}j=null,W=null,x.reset();for(const Y in m)delete m[Y];e.setRenderTarget(_),p=null,h=null,f=null,r=null,g=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",Z),c.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,k=null,se=null;c.depth&&(se=c.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=c.stencil?Wo:Go,k=c.stencil?Vo:kr);const fe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Br(h.textureWidth,h.textureHeight,{format:Gn,type:oi,depthTexture:new Cv(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:c.stencil,colorSpace:e.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const $={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Br(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:c.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let V=0;V<Y.removed.length;V++){const $=Y.removed[V],k=C.indexOf($);k>=0&&(C[k]=null,y[k].disconnect($))}for(let V=0;V<Y.added.length;V++){const $=Y.added[V];let k=C.indexOf($);if(k===-1){for(let fe=0;fe<y.length;fe++)if(fe>=C.length){C.push($),k=fe;break}else if(C[fe]===null){C[fe]=$,k=fe;break}if(k===-1)break}const se=y[k];se&&se.connect($)}}const ne=new B,D=new B;function K(Y,V,$){ne.setFromMatrixPosition(V.matrixWorld),D.setFromMatrixPosition($.matrixWorld);const k=ne.distanceTo(D),se=V.projectionMatrix.elements,fe=$.projectionMatrix.elements,Ze=se[14]/(se[10]-1),Ne=se[14]/(se[10]+1),N=(se[9]+1)/se[5],He=(se[9]-1)/se[5],pe=(se[8]-1)/se[0],Ue=(fe[8]+1)/fe[0],Pe=Ze*pe,et=Ze*Ue,xe=k/(-pe+Ue),Be=xe*-pe;if(V.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),se[10]===-1)Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const ct=Ze+xe,ht=Ne+xe,R=Pe-Be,S=et+(k-Be),O=N*Ne/ht*ct,Q=He*Ne/ht*ct;Y.projectionMatrix.makePerspective(R,S,O,Q,ct,ht),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,V){V===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(V.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let V=Y.near,$=Y.far;x.texture!==null&&(x.depthNear>0&&(V=x.depthNear),x.depthFar>0&&($=x.depthFar)),L.near=w.near=b.near=V,L.far=w.far=b.far=$,(j!==L.near||W!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),j=L.near,W=L.far),L.layers.mask=Y.layers.mask|6,b.layers.mask=L.layers.mask&3,w.layers.mask=L.layers.mask&5;const k=Y.parent,se=L.cameras;J(L,k);for(let fe=0;fe<se.length;fe++)J(se[fe],k);se.length===2?K(L,b,w):L.projectionMatrix.copy(b.projectionMatrix),de(Y,L,k)};function de(Y,V,$){$===null?Y.matrix.copy(V.matrixWorld):(Y.matrix.copy($.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(V.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(Y){return m[Y]};let Ee=null;function Te(Y,V){if(d=V.getViewerPose(u||o),v=V,d!==null){const $=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let k=!1;$.length!==L.cameras.length&&(L.cameras.length=0,k=!0);for(let Ne=0;Ne<$.length;Ne++){const N=$[Ne];let He=null;if(p!==null)He=p.getViewport(N);else{const Ue=f.getViewSubImage(h,N);He=Ue.viewport,Ne===0&&(e.setRenderTargetTextures(g,Ue.colorTexture,Ue.depthStencilTexture),e.setRenderTarget(g))}let pe=M[Ne];pe===void 0&&(pe=new mn,pe.layers.enable(Ne),pe.viewport=new At,M[Ne]=pe),pe.matrix.fromArray(N.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(N.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(He.x,He.y,He.width,He.height),Ne===0&&(L.matrix.copy(pe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),k===!0&&L.cameras.push(pe)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ne=f.getDepthInformation($[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(Ne,r.renderState)}if(se&&se.includes("camera-access")&&(e.state.unbindTexture(),f))for(let Ne=0;Ne<$.length;Ne++){const N=$[Ne].camera;if(N){let He=m[N];He||(He=new Ov,m[N]=He);const pe=f.getCameraImage(N);He.sourceTexture=pe}}}for(let $=0;$<y.length;$++){const k=C[$],se=y[$];k!==null&&se!==void 0&&se.update(k,V,u||o)}Ee&&Ee(Y,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const Ve=new Nv;Ve.setAnimationLoop(Te),this.setAnimationLoop=function(Y){Ee=Y},this.dispose=function(){}}}const xr=new ai,jA=new Rt;function XA(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Ev(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,g,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),f(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,y)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===$t&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===$t&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,y=_.envMapRotation;g&&(m.envMap.value=g,xr.copy(y),xr.x*=-1,xr.y*=-1,xr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(xr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===$t&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $A(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(v(_),y=d(_),r[_.id]=y,_.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(_,C);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function d(_){const g=f();_.__bindingPointIndex=g;const y=t.createBuffer(),C=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],y=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=y.length;T<A;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,M=b.length;w<M;w++){const L=b[w];if(p(L,T,w,C)===!0){const j=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let ee=0;ee<W.length;ee++){const Z=W[ee],ne=x(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,j+X,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,X),X+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y,C){const T=_.value,A=g+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const b=C[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return C[A]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function v(_){const g=_.uniforms;let y=0;const C=16;for(let A=0,b=g.length;A<b;A++){const w=Array.isArray(g[A])?g[A]:[g[A]];for(let M=0,L=w.length;M<L;M++){const j=w[M],W=Array.isArray(j.value)?j.value:[j.value];for(let X=0,ee=W.length;X<ee;X++){const Z=W[X],ne=x(Z),D=y%C,K=D%ne.boundary,J=D+K;y+=K,J!==0&&C-J<ne.storage&&(y+=C-J),j.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=ne.storage}}}const T=y%C;return T>0&&(y+=C-T),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class kv{constructor(e={}){const{canvas:n=LM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,c=null;const _=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=An;let T=0,A=0,b=null,w=-1,M=null;const L=new At,j=new At;let W=null;const X=new Qe(0);let ee=0,Z=n.width,ne=n.height,D=1,K=null,J=null;const de=new At(0,0,Z,ne),Ee=new At(0,0,Z,ne);let Te=!1;const Ve=new oh;let Y=!1,V=!1;const $=new Rt,k=new B,se=new At,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ne(){return b===null?D:1}let N=i;function He(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",le,!1),N===null){const I="webgl2";if(N=He(I,E),N===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,Ue,Pe,et,xe,Be,ct,ht,R,S,O,Q,ie,q,Re,ae,we,Ae,re,_e,Oe,Le,ge,Ge;function U(){pe=new r1(N),pe.init(),Le=new zA(N,pe),Ue=new ZT(N,pe,e,Le),Pe=new kA(N,pe),Ue.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),et=new a1(N),xe=new TA,Be=new BA(N,pe,Pe,xe,Ue,Le,et),ct=new JT(y),ht=new i1(y),R=new hE(N),ge=new qT(N,R),S=new s1(N,R,et,ge),O=new u1(N,S,R,et),re=new l1(N,Ue,Be),ae=new QT(xe),Q=new wA(y,ct,ht,pe,Ue,ge,ae),ie=new XA(y,xe),q=new CA,Re=new DA(pe),Ae=new YT(y,ct,ht,Pe,O,p,l),we=new FA(y,O,Ue),Ge=new $A(N,et,Ue,Pe),_e=new KT(N,pe,et),Oe=new o1(N,pe,et),et.programs=Q.programs,y.capabilities=Ue,y.extensions=pe,y.properties=xe,y.renderLists=q,y.shadowMap=we,y.state=Pe,y.info=et}U();const ce=new WA(y,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(Z,ne,!1))},this.getSize=function(E){return E.set(Z,ne)},this.setSize=function(E,I,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ne=I,n.width=Math.floor(E*D),n.height=Math.floor(I*D),z===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Z*D,ne*D).floor()},this.setDrawingBufferSize=function(E,I,z){Z=E,ne=I,D=z,n.width=Math.floor(E*z),n.height=Math.floor(I*z),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,I,z,G){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,I,z,G),Pe.viewport(L.copy(de).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,I,z,G){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,I,z,G),Pe.scissor(j.copy(Ee).multiplyScalar(D).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(E){Pe.setScissorTest(Te=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,z=!0){let G=0;if(E){let F=!1;if(b!==null){const ue=b.texture.format;F=ue===ih||ue===nh||ue===th}if(F){const ue=b.texture.type,ve=ue===oi||ue===kr||ue===Ho||ue===Vo||ue===Jf||ue===eh,Ce=Ae.getClearColor(),Se=Ae.getClearAlpha(),Fe=Ce.r,ke=Ce.g,De=Ce.b;ve?(v[0]=Fe,v[1]=ke,v[2]=De,v[3]=Se,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=Fe,x[1]=ke,x[2]=De,x[3]=Se,N.clearBufferiv(N.COLOR,0,x))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",le,!1),Ae.dispose(),q.dispose(),Re.dispose(),xe.dispose(),ct.dispose(),ht.dispose(),O.dispose(),ge.dispose(),Ge.dispose(),Q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",qn),ce.removeEventListener("sessionend",uh),fr.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=et.autoReset,I=we.enabled,z=we.autoUpdate,G=we.needsUpdate,F=we.type;U(),et.autoReset=E,we.enabled=I,we.autoUpdate=z,we.needsUpdate=G,we.type=F}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const I=E.target;I.removeEventListener("dispose",te),be(I)}function be(E){ze(E),xe.remove(E)}function ze(E){const I=xe.get(E).programs;I!==void 0&&(I.forEach(function(z){Q.releaseProgram(z)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,z,G,F,ue){I===null&&(I=fe);const ve=F.isMesh&&F.matrixWorld.determinant()<0,Ce=Bv(E,I,z,G,F);Pe.setMaterial(G,ve);let Se=z.index,Fe=1;if(G.wireframe===!0){if(Se=S.getWireframeAttribute(z),Se===void 0)return;Fe=2}const ke=z.drawRange,De=z.attributes.position;let qe=ke.start*Fe,at=(ke.start+ke.count)*Fe;ue!==null&&(qe=Math.max(qe,ue.start*Fe),at=Math.min(at,(ue.start+ue.count)*Fe)),Se!==null?(qe=Math.max(qe,0),at=Math.min(at,Se.count)):De!=null&&(qe=Math.max(qe,0),at=Math.min(at,De.count));const wt=at-qe;if(wt<0||wt===1/0)return;ge.setup(F,G,Ce,z,Se);let pt,ut=_e;if(Se!==null&&(pt=R.get(Se),ut=Oe,ut.setIndex(pt)),F.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*Ne()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(F.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Pe.setLineWidth(Ie*Ne()),F.isLineSegments?ut.setMode(N.LINES):F.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else F.isPoints?ut.setMode(N.POINTS):F.isSprite&&ut.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,_t=F._multiDrawCounts,tt=F._multiDrawCount,cn=Se?R.get(Se).bytesPerElement:1,Gr=xe.get(G).currentProgram.getUniforms();for(let dn=0;dn<tt;dn++)Gr.setValue(N,"_gl_DrawID",dn),ut.render(Ie[dn]/cn,_t[dn])}else if(F.isInstancedMesh)ut.renderInstances(qe,wt,F.count);else if(z.isInstancedBufferGeometry){const Ie=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_t=Math.min(z.instanceCount,Ie);ut.renderInstances(qe,wt,_t)}else ut.render(qe,wt)};function dt(E,I,z){E.transparent===!0&&E.side===Hn&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,sa(E,I,z),E.side=or,E.needsUpdate=!0,sa(E,I,z),E.side=Hn):sa(E,I,z)}this.compile=function(E,I,z=null){z===null&&(z=E),c=Re.get(z),c.init(I),g.push(c),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),c.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ue=F.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ce=ue[ve];dt(Ce,z,F),G.add(Ce)}else dt(ue,z,F),G.add(ue)}),c=g.pop(),G},this.compileAsync=function(E,I,z=null){const G=this.compile(E,I,z);return new Promise(F=>{function ue(){if(G.forEach(function(ve){xe.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){F(E);return}setTimeout(ue,10)}pe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let st=null;function ui(E){st&&st(E)}function qn(){fr.stop()}function uh(){fr.start()}const fr=new Nv;fr.setAnimationLoop(ui),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(E){st=E,ce.setAnimationLoop(E),E===null?fr.stop():fr.start()},ce.addEventListener("sessionstart",qn),ce.addEventListener("sessionend",uh),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,I,b),c=Re.get(E,g.length),c.init(I),g.push(c),$.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix($,ti,I.reversedDepth),V=this.localClippingEnabled,Y=ae.init(this.clippingPlanes,V),m=q.get(E,_.length),m.init(),_.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&su(ue,I,-1/0,y.sortObjects)}su(E,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,J),Ze=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ze&&Ae.addToRenderList(m,E),this.info.render.frame++,Y===!0&&ae.beginShadows();const z=c.state.shadowsArray;we.render(z,E,I),Y===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(c.setupLights(),I.isArrayCamera){const ue=I.cameras;if(F.length>0)for(let ve=0,Ce=ue.length;ve<Ce;ve++){const Se=ue[ve];dh(G,F,E,Se)}Ze&&Ae.render(E);for(let ve=0,Ce=ue.length;ve<Ce;ve++){const Se=ue[ve];ch(m,E,Se,Se.viewport)}}else F.length>0&&dh(G,F,E,I),Ze&&Ae.render(E),ch(m,E,I);b!==null&&A===0&&(Be.updateMultisampleRenderTarget(b),Be.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(y,E,I),ge.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?(c=g[g.length-1],Y===!0&&ae.setGlobalState(y.clippingPlanes,c.state.camera)):c=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function su(E,I,z,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)c.pushLight(E),E.castShadow&&c.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ve.intersectsSprite(E)){G&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const ve=O.update(E),Ce=E.material;Ce.visible&&m.push(E,ve,Ce,z,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ve.intersectsObject(E))){const ve=O.update(E),Ce=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),se.copy(ve.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Ce)){const Se=ve.groups;for(let Fe=0,ke=Se.length;Fe<ke;Fe++){const De=Se[Fe],qe=Ce[De.materialIndex];qe&&qe.visible&&m.push(E,ve,qe,z,se.z,De)}}else Ce.visible&&m.push(E,ve,Ce,z,se.z,null)}}const ue=E.children;for(let ve=0,Ce=ue.length;ve<Ce;ve++)su(ue[ve],I,z,G)}function ch(E,I,z,G){const F=E.opaque,ue=E.transmissive,ve=E.transparent;c.setupLightsView(z),Y===!0&&ae.setGlobalState(y.clippingPlanes,z),G&&Pe.viewport(L.copy(G)),F.length>0&&ra(F,I,z),ue.length>0&&ra(ue,I,z),ve.length>0&&ra(ve,I,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function dh(E,I,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[G.id]===void 0&&(c.state.transmissionRenderTarget[G.id]=new Br(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Jo:oi,minFilter:Pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ue=c.state.transmissionRenderTarget[G.id],ve=G.viewport||L;ue.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);const Ce=y.getRenderTarget(),Se=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(X),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&Ae.render(z);const ke=y.toneMapping;y.toneMapping=tr;const De=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),c.setupLightsView(G),Y===!0&&ae.setGlobalState(y.clippingPlanes,G),ra(E,z,G),Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue),pe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let at=0,wt=I.length;at<wt;at++){const pt=I[at],ut=pt.object,Ie=pt.geometry,_t=pt.material,tt=pt.group;if(_t.side===Hn&&ut.layers.test(G.layers)){const cn=_t.side;_t.side=$t,_t.needsUpdate=!0,fh(ut,z,G,Ie,_t,tt),_t.side=cn,_t.needsUpdate=!0,qe=!0}}qe===!0&&(Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue))}y.setRenderTarget(Ce,Se,Fe),y.setClearColor(X,ee),De!==void 0&&(G.viewport=De),y.toneMapping=ke}function ra(E,I,z){const G=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ue=E.length;F<ue;F++){const ve=E[F],Ce=ve.object,Se=ve.geometry,Fe=ve.group;let ke=ve.material;ke.allowOverride===!0&&G!==null&&(ke=G),Ce.layers.test(z.layers)&&fh(Ce,I,z,Se,ke,Fe)}}function fh(E,I,z,G,F,ue){E.onBeforeRender(y,I,z,G,F,ue),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(y,I,z,G,E,ue),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=$t,F.needsUpdate=!0,y.renderBufferDirect(z,I,G,F,E,ue),F.side=or,F.needsUpdate=!0,y.renderBufferDirect(z,I,G,F,E,ue),F.side=Hn):y.renderBufferDirect(z,I,G,F,E,ue),E.onAfterRender(y,I,z,G,F,ue)}function sa(E,I,z){I.isScene!==!0&&(I=fe);const G=xe.get(E),F=c.state.lights,ue=c.state.shadowsArray,ve=F.state.version,Ce=Q.getParameters(E,F.state,ue,I,z),Se=Q.getProgramCacheKey(Ce);let Fe=G.programs;G.environment=E.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(E.isMeshStandardMaterial?ht:ct).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",te),Fe=new Map,G.programs=Fe);let ke=Fe.get(Se);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===ve)return ph(E,Ce),ke}else Ce.uniforms=Q.getUniforms(E),E.onBeforeCompile(Ce,y),ke=Q.acquireProgram(Ce,Se),Fe.set(Se,ke),G.uniforms=Ce.uniforms;const De=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ae.uniform),ph(E,Ce),G.needsLights=Hv(E),G.lightsStateVersion=ve,G.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function hh(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=cl.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function ph(E,I){const z=xe.get(E);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Bv(E,I,z,G,F){I.isScene!==!0&&(I=fe),Be.resetTextureUnits();const ue=I.fog,ve=G.isMeshStandardMaterial?I.environment:null,Ce=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Os,Se=(G.isMeshStandardMaterial?ht:ct).get(G.envMap||ve),Fe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let wt=tr;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=y.toneMapping);const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=pt!==void 0?pt.length:0,Ie=xe.get(G),_t=c.state.lights;if(Y===!0&&(V===!0||E!==M)){const qt=E===M&&G.id===w;ae.setState(G,E,qt)}let tt=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==_t.state.version||Ie.outputColorSpace!==Ce||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==Se||G.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==ke||Ie.morphTargets!==De||Ie.morphNormals!==qe||Ie.morphColors!==at||Ie.toneMapping!==wt||Ie.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Ie.__version=G.version);let cn=Ie.currentProgram;tt===!0&&(cn=sa(G,I,F));let Gr=!1,dn=!1,Xs=!1;const xt=cn.getUniforms(),En=Ie.uniforms;if(Pe.useProgram(cn.program)&&(Gr=!0,dn=!0,Xs=!0),G.id!==w&&(w=G.id,dn=!0),Gr||M!==E){Pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(N,"projectionMatrix",E.projectionMatrix),xt.setValue(N,"viewMatrix",E.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(N,k.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,dn=!0,Xs=!0)}if(F.isSkinnedMesh){xt.setOptional(N,F,"bindMatrix"),xt.setOptional(N,F,"bindMatrixInverse");const qt=F.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),xt.setValue(N,"boneTexture",qt.boneTexture,Be))}F.isBatchedMesh&&(xt.setOptional(N,F,"batchingTexture"),xt.setValue(N,"batchingTexture",F._matricesTexture,Be),xt.setOptional(N,F,"batchingIdTexture"),xt.setValue(N,"batchingIdTexture",F._indirectTexture,Be),xt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&xt.setValue(N,"batchingColorTexture",F._colorsTexture,Be));const wn=z.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&re.update(F,z,cn),(dn||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,xt.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(En.envMap.value=Se,En.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(En.envMapIntensity.value=I.environmentIntensity),dn&&(xt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&zv(En,Xs),ue&&G.fog===!0&&ie.refreshFogUniforms(En,ue),ie.refreshMaterialUniforms(En,G,D,ne,c.state.transmissionRenderTarget[E.id]),cl.upload(N,hh(Ie),En,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cl.upload(N,hh(Ie),En,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(N,"center",F.center),xt.setValue(N,"modelViewMatrix",F.modelViewMatrix),xt.setValue(N,"normalMatrix",F.normalMatrix),xt.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qt=G.uniformsGroups;for(let tn=0,ou=qt.length;tn<ou;tn++){const hr=qt[tn];Ge.update(hr,cn),Ge.bind(hr,cn)}}return cn}function zv(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Hv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,I,z){const G=xe.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),xe.get(E.texture).__webglTexture=I,xe.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const z=xe.get(E);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const Vv=N.createFramebuffer();this.setRenderTarget=function(E,I=0,z=0){b=E,T=I,A=z;let G=!0,F=null,ue=!1,ve=!1;if(E){const Se=xe.get(E);if(Se.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Se.__webglFramebuffer===void 0)Be.setupRenderTarget(E);else if(Se.__hasExternalTextures)Be.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const De=E.depthTexture;if(Se.__boundDepthTexture!==De){if(De!==null&&xe.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const ke=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?F=ke[I][z]:F=ke[I],ue=!0):E.samples>0&&Be.useMultisampledRTT(E)===!1?F=xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[z]:F=ke,L.copy(E.viewport),j.copy(E.scissor),W=E.scissorTest}else L.copy(de).multiplyScalar(D).floor(),j.copy(Ee).multiplyScalar(D).floor(),W=Te;if(z!==0&&(F=Vv),Pe.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&Pe.drawBuffers(E,F),Pe.viewport(L),Pe.scissor(j),Pe.setScissorTest(W),ue){const Se=xe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,z)}else if(ve){const Se=I;for(let Fe=0;Fe<E.textures.length;Fe++){const ke=xe.get(E.textures[Fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,z,Se)}}else if(E!==null&&z!==0){const Se=xe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,z)}w=-1},this.readRenderTargetPixels=function(E,I,z,G,F,ue,ve,Ce=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){Pe.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Fe=E.textures[Ce],ke=Fe.format,De=Fe.type;if(!Ue.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&z>=0&&z<=E.height-F&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ce),N.readPixels(I,z,G,F,Le.convert(ke),Le.convert(De),ue))}finally{const Fe=b!==null?xe.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,I,z,G,F,ue,ve,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(I>=0&&I<=E.width-G&&z>=0&&z<=E.height-F){Pe.bindFramebuffer(N.FRAMEBUFFER,Se);const Fe=E.textures[Ce],ke=Fe.format,De=Fe.type;if(!Ue.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ce),N.readPixels(I,z,G,F,Le.convert(ke),Le.convert(De),0);const at=b!==null?xe.get(b).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,at);const wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await NM(N,wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(qe),N.deleteSync(wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,z=0){const G=Math.pow(2,-z),F=Math.floor(E.image.width*G),ue=Math.floor(E.image.height*G),ve=I!==null?I.x:0,Ce=I!==null?I.y:0;Be.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ve,Ce,F,ue),Pe.unbindTexture()};const Gv=N.createFramebuffer(),Wv=N.createFramebuffer();this.copyTextureToTexture=function(E,I,z=null,G=null,F=0,ue=null){ue===null&&(F!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=F,F=0):ue=0);let ve,Ce,Se,Fe,ke,De,qe,at,wt;const pt=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(z!==null)ve=z.max.x-z.min.x,Ce=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,ke=z.min.y,De=z.isBox3?z.min.z:0;else{const wn=Math.pow(2,-F);ve=Math.floor(pt.width*wn),Ce=Math.floor(pt.height*wn),E.isDataArrayTexture?Se=pt.depth:E.isData3DTexture?Se=Math.floor(pt.depth*wn):Se=1,Fe=0,ke=0,De=0}G!==null?(qe=G.x,at=G.y,wt=G.z):(qe=0,at=0,wt=0);const ut=Le.convert(I.format),Ie=Le.convert(I.type);let _t;I.isData3DTexture?(Be.setTexture3D(I,0),_t=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Be.setTexture2DArray(I,0),_t=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(I,0),_t=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),cn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gr=N.getParameter(N.UNPACK_SKIP_PIXELS),dn=N.getParameter(N.UNPACK_SKIP_ROWS),Xs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const xt=E.isDataArrayTexture||E.isData3DTexture,En=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const wn=xe.get(E),qt=xe.get(I),tn=xe.get(wn.__renderTarget),ou=xe.get(qt.__renderTarget);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ou.__webglFramebuffer);for(let hr=0;hr<Se;hr++)xt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(E).__webglTexture,F,De+hr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,ue,wt+hr)),N.blitFramebuffer(Fe,ke,ve,Ce,qe,at,ve,Ce,N.DEPTH_BUFFER_BIT,N.NEAREST);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||xe.has(E)){const wn=xe.get(E),qt=xe.get(I);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,Gv),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wv);for(let tn=0;tn<Se;tn++)xt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wn.__webglTexture,F,De+tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wn.__webglTexture,F),En?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,ue,wt+tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qt.__webglTexture,ue),F!==0?N.blitFramebuffer(Fe,ke,ve,Ce,qe,at,ve,Ce,N.COLOR_BUFFER_BIT,N.NEAREST):En?N.copyTexSubImage3D(_t,ue,qe,at,wt+tn,Fe,ke,ve,Ce):N.copyTexSubImage2D(_t,ue,qe,at,Fe,ke,ve,Ce);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else En?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(_t,ue,qe,at,wt,ve,Ce,Se,ut,Ie,pt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(_t,ue,qe,at,wt,ve,Ce,Se,ut,pt.data):N.texSubImage3D(_t,ue,qe,at,wt,ve,Ce,Se,ut,Ie,pt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,qe,at,ve,Ce,ut,Ie,pt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,qe,at,pt.width,pt.height,ut,pt.data):N.texSubImage2D(N.TEXTURE_2D,ue,qe,at,ve,Ce,ut,Ie,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,cn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gr),N.pixelStorei(N.UNPACK_SKIP_ROWS,dn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xs),ue===0&&I.generateMipmaps&&N.generateMipmap(_t),Pe.unbindTexture()},this.copyTextureToTexture3D=function(E,I,z=null,G=null,F=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,I,z,G,F)},this.initRenderTarget=function(E){xe.get(E).__webglFramebuffer===void 0&&Be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),Pe.unbindTexture()},this.resetState=function(){T=0,A=0,b=null,Pe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Cm=()=>{const[t,e]=H.useState(""),[n,i]=H.useState(""),[r,s]=H.useState(!1),[o,a]=H.useState(!0),[l,u]=H.useState({}),d=H.useRef(null),f=H.useRef(null),h=H.useRef(null),p=H.useRef(null),v=H.useRef(null),x=H.useRef([]),m=Wf(),c="broker";H.useEffect(()=>{if(!d.current)return;const T=new Av,A=new mn(75,1,.1,1e3),b=new kv({alpha:!0,antialias:!0,powerPreference:"high-performance"});b.setSize(d.current.clientWidth,d.current.clientHeight),b.setClearColor(0,0),b.shadowMap.enabled=!0,b.shadowMap.type=Kf,d.current.appendChild(b.domElement),f.current=T,p.current=b;const w=new Lv(4210752,.8);T.add(w);const M=new Pv(16777215,1);M.position.set(10,15,10),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,M.shadow.camera.near=.5,M.shadow.camera.far=50,M.shadow.camera.left=-20,M.shadow.camera.right=20,M.shadow.camera.top=20,M.shadow.camera.bottom=-20,T.add(M);const L=new Rv(8900331,27028,.5);T.add(L);const j=()=>{const V=new Pn,$=new Wn(.8,1.2,6,16),k=new nt({color:2899536,shininess:100,specular:1118481}),se=new je($,k);se.rotation.z=Math.PI/2,se.castShadow=!0,se.receiveShadow=!0,V.add(se);const fe=new vn(5.5,.2,1.8),Ze=new nt({color:9127187,shininess:50}),Ne=new je(fe,Ze);Ne.position.y=.9,Ne.castShadow=!0,V.add(Ne);const N=new vn(2.5,1.8,1.5),He=new nt({color:16777215,shininess:80}),pe=new je(N,He);pe.position.set(-.5,1.9,0),pe.castShadow=!0,V.add(pe);const Ue=new vn(1.8,1,1.2),Pe=new nt({color:15263976,shininess:90}),et=new je(Ue,Pe);et.position.set(-.3,2.9,0),et.castShadow=!0,V.add(et);const xe=new Wn(.15,.18,2,8),Be=new nt({color:3426654,shininess:100}),ct=new je(xe,Be);ct.position.set(-1.5,3.5,0),ct.castShadow=!0,V.add(ct);const ht=new Wn(.05,.08,4,8),R=new nt({color:6636321,shininess:20}),S=new je(ht,R);S.position.set(.5,4,0),S.castShadow=!0,V.add(S);const O=new lr(1.5,2.5),Q=new nt({color:16316671,side:Hn,transparent:!0,opacity:.9,shininess:30}),ie=new je(O,Q);ie.position.set(1.2,3.5,0),ie.rotation.y=Math.PI/2,V.add(ie);const q=new nr(.2,.8,8),Re=new nt({color:16766720,shininess:100}),ae=new je(q,Re);ae.position.set(2.8,1.2,0),ae.rotation.z=-Math.PI/2,ae.castShadow=!0,V.add(ae);const we=new vn(.3,.8,.1),Ae=new nt({color:2899536,shininess:80}),re=new je(we,Ae);return re.position.set(2.2,.5,.8),re.castShadow=!0,V.add(re),V},W=()=>{const V=new lr(100,100,50,50),$=new nt({color:27028,transparent:!0,opacity:.9,shininess:100,specular:8900331}),k=new je(V,$);k.rotation.x=-Math.PI/2,k.position.y=-2,k.receiveShadow=!0;const se=V.attributes.position.array;for(let fe=0;fe<se.length;fe+=3)se[fe+2]=Math.sin(se[fe]*.1)*.2+Math.cos(se[fe+1]*.1)*.2;return V.attributes.position.needsUpdate=!0,k},X=()=>{const V=[];for(let $=0;$<3;$++){const k=new Pn,se=new Wn(.3,.4,2,8);se.translate(0,0,1);const fe=new nt({color:11119017,shininess:50}),Ze=new je(se,fe);k.add(Ze);const Ne=new nr(.2,.5,8);Ne.rotateX(Math.PI/2);const N=new nt({color:7372944,shininess:30}),He=new je(Ne,N);He.position.set(0,.2,.8),k.add(He);const pe=$/3*Math.PI*2,Ue=15+Math.random()*10;k.position.set(Math.cos(pe)*Ue,-1+Math.random()*.5,Math.sin(pe)*Ue),T.add(k),V.push({mesh:k,speed:.5+Math.random()*.5,angle:pe,radius:Ue,offset:Math.random()*Math.PI*2})}for(let $=0;$<10;$++){const k=new Pn,se=new ir(.2,8,8),fe=new nt({color:Math.random()>.5?16737095:4620980,shininess:30}),Ze=new je(se,fe);k.add(Ze);const Ne=new nr(.1,.4,8);Ne.rotateZ(Math.PI/2);const N=new nt({color:Math.random()>.5?16737095:4620980,shininess:30}),He=new je(Ne,N);He.position.set(-.3,0,0),k.add(He);const pe=$/10*Math.PI*2,Ue=5+Math.random()*15;k.position.set(Math.cos(pe)*Ue,-1.5+Math.random()*1,Math.sin(pe)*Ue),k.scale.set(.7,.7,.7),T.add(k),V.push({mesh:k,speed:1+Math.random()*1,angle:pe,radius:Ue,offset:Math.random()*Math.PI*2})}return V},ee=new ir(200,32,32),Z=new nt({color:8900331,side:$t,transparent:!0,opacity:.9}),ne=new je(ee,Z);T.add(ne);const D=()=>{const V=new Pn;for(let $=0;$<12;$++){const k=new ir(3+Math.random()*2,8,8),se=new nt({color:16777215,transparent:!0,opacity:.7}),fe=new je(k,se);fe.position.set((Math.random()-.5)*100,15+Math.random()*15,(Math.random()-.5)*100),fe.scale.set(1+Math.random()*.8,.5+Math.random()*.5,1+Math.random()*.8),V.add(fe)}return V},K=j(),J=W(),de=D(),Ee=X();K.position.set(0,0,0),T.add(K),T.add(J),T.add(de),h.current=K,x.current=Ee,A.position.set(8,6,8),A.lookAt(0,0,0);let Te=0;const Ve=()=>{v.current=requestAnimationFrame(Ve),Te+=.01,h.current&&(h.current.position.y=Math.sin(Te*1.2)*.3,h.current.rotation.z=Math.sin(Te*.8)*.05,h.current.rotation.x=Math.cos(Te*.6)*.03,h.current.position.x=Math.sin(Te*.3)*2);const V=J.geometry.attributes.position.array;for(let k=0;k<V.length;k+=3){const se=V[k],fe=V[k+1];V[k+2]=Math.sin(se*.1+Te*2)*.3+Math.cos(fe*.1+Te*1.5)*.2+Math.sin(se*.05+Te)*.1}J.geometry.attributes.position.needsUpdate=!0,x.current.forEach(k=>{k.angle+=.01*k.speed,k.mesh.position.x=Math.cos(k.angle+k.offset)*k.radius,k.mesh.position.z=Math.sin(k.angle+k.offset)*k.radius,k.mesh.position.y=-1.5+Math.sin(Te*2+k.offset)*.5,k.mesh.lookAt(Math.cos(k.angle+k.offset+.1)*k.radius,-1.5+Math.sin(Te*2+k.offset+.1)*.5,Math.sin(k.angle+k.offset+.1)*k.radius)}),de.children.forEach((k,se)=>{k.position.x+=Math.sin(Te+se)*.005,k.position.z+=Math.cos(Te+se)*.005});const $=15;A.position.x=Math.cos(Te*.15)*$,A.position.z=Math.sin(Te*.15)*$,A.position.y=6+Math.sin(Te*.2)*2,A.lookAt(0,0,0),b.render(T,A)},Y=()=>{if(!d.current)return;const V=d.current.clientWidth,$=d.current.clientHeight;A.aspect=V/$,A.updateProjectionMatrix(),b.setSize(V,$)};return window.addEventListener("resize",Y),Ve(),a(!1),()=>{window.removeEventListener("resize",Y),v.current&&cancelAnimationFrame(v.current),d.current&&b.domElement&&d.current.removeChild(b.domElement),b.dispose()}},[]);const _=()=>{const T={};return t.trim()?/\S+@\S+\.\S+/.test(t)||(T.email="Email is invalid"):T.email="Email is required",n||(T.password="Password is required"),u(T),Object.keys(T).length===0},g=()=>{_()&&(console.log("Login:",{userType:c,email:t,password:n}),m("/fixture"))},y=()=>{m("/register")},C=()=>{if(!t.trim()){u({email:"Email is required"});return}if(!/\S+@\S+\.\S+/.test(t)){u({email:"Email is invalid"});return}console.log("Forgot password for:",t)};return P.jsxs("div",{className:"min-h-screen bg-gradient-maritime relative overflow-hidden",children:[P.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(50)].map((T,A)=>P.jsx("div",{className:"absolute w-2 h-2 bg-sail-white rounded-full opacity-20 animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*3}s`}},A))}),P.jsxs("div",{className:"flex min-h-screen relative z-10",children:[P.jsx("div",{className:"w-full md:w-1/2 flex items-center justify-center p-8 backdrop-blur-sm bg-black/20",children:P.jsxs("div",{className:"w-full max-w-md",children:[o&&P.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/70 z-20 rounded-lg",children:P.jsxs("div",{className:"text-center text-sail-white",children:[P.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-sail-white mx-auto mb-4"}),P.jsx("p",{className:"text-lg font-semibold",children:"Loading Maritime Scene..."})]})}),P.jsxs("div",{className:"text-center mb-8",children:[P.jsx("h1",{className:"text-4xl font-bold text-sail-white mb-2 tracking-wide",children:"⚓ Charter Party"}),P.jsx("p",{className:"text-ocean-foam text-lg",children:"Broker Login"})]}),r?P.jsxs("div",{className:"space-y-6",children:[P.jsx("h2",{className:"text-2xl font-bold text-sail-white text-center mb-6",children:"🧭 Reset Password"}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),P.jsx("input",{type:"email",value:t,onChange:T=>e(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${l.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Enter your email",required:!0}),l.email&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:l.email})]}),P.jsx("button",{onClick:C,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Send Reset Link 📧"}),P.jsx("button",{onClick:()=>s(!1),className:"w-full text-ocean-foam hover:text-sail-white font-medium transition-colors duration-300",children:"← Back to Login"})]}):P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),P.jsx("input",{type:"email",value:t,onChange:T=>e(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${l.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"broker@example.com",required:!0}),l.email&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:l.email})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Password"}),P.jsx("input",{type:"password",value:n,onChange:T=>i(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${l.password?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Enter your password",required:!0}),l.password&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:l.password})]}),P.jsx("button",{onClick:g,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Set Sail - Login ⛵"}),P.jsx("button",{type:"button",onClick:()=>s(!0),className:"w-full text-ocean-foam hover:text-sail-white font-medium transition-colors duration-300",children:"Forgot Password? 🧭"}),P.jsxs("div",{className:"text-center pt-4 border-t border-border",children:[P.jsx("p",{className:"text-ocean-foam mb-3",children:"New to Charter Party?"}),P.jsx("button",{type:"button",onClick:y,className:"bg-white/10 text-ocean-foam py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-border",children:"Join Our Fleet - Sign Up 🚢"})]})]})]})}),P.jsxs("div",{className:"hidden md:block md:w-1/2 relative",children:[P.jsx("div",{ref:d,className:"w-full h-full"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"}),P.jsx("div",{className:"absolute top-8 right-8 text-sail-white/80",children:P.jsxs("div",{className:"text-right",children:[P.jsx("div",{className:"text-sm font-medium",children:"Current Weather"}),P.jsx("div",{className:"text-xl",children:"⛅ Fair Winds"})]})}),P.jsx("div",{className:"absolute bottom-8 right-8 text-sail-white/80",children:P.jsxs("div",{className:"text-right",children:[P.jsx("div",{className:"text-sm font-medium",children:"Sea Condition"}),P.jsx("div",{className:"text-xl",children:"🌊 Calm Seas"})]})})]})]}),P.jsx("div",{className:"absolute bottom-0 left-0 w-full",children:P.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"w-full h-16 fill-current text-ocean-surface/30",children:P.jsx("path",{d:"M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z",children:P.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z;\r
                      M0,0V40C240,100,480,20,720,40C960,100,1200,20,1200,40V0Z;\r
                      M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z`})})})})]})},YA=()=>{const[t,e]=H.useState(""),[n,i]=H.useState(""),[r,s]=H.useState(""),[o,a]=H.useState(""),[l,u]=H.useState(!0),[d,f]=H.useState({}),h=H.useRef(null),p=H.useRef(null),v=H.useRef(null),x=H.useRef(null),m=H.useRef(null),c=H.useRef([]),_=Wf(),g="broker";H.useEffect(()=>{if(!h.current)return;const T=new Av,A=new mn(75,1,.1,1e3),b=new kv({alpha:!0,antialias:!0,powerPreference:"high-performance"});b.setSize(h.current.clientWidth,h.current.clientHeight),b.setClearColor(0,0),b.shadowMap.enabled=!0,b.shadowMap.type=Kf,h.current.appendChild(b.domElement),p.current=T,x.current=b;const w=new Lv(4210752,.8);T.add(w);const M=new Pv(16777215,1);M.position.set(10,15,10),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,M.shadow.camera.near=.5,M.shadow.camera.far=50,M.shadow.camera.left=-20,M.shadow.camera.right=20,M.shadow.camera.top=20,M.shadow.camera.bottom=-20,T.add(M);const L=new Rv(8900331,27028,.5);T.add(L);const j=()=>{const V=new Pn,$=new Wn(.8,1.2,6,16),k=new nt({color:2899536,shininess:100,specular:1118481}),se=new je($,k);se.rotation.z=Math.PI/2,se.castShadow=!0,se.receiveShadow=!0,V.add(se);const fe=new vn(5.5,.2,1.8),Ze=new nt({color:9127187,shininess:50}),Ne=new je(fe,Ze);Ne.position.y=.9,Ne.castShadow=!0,V.add(Ne);const N=new vn(2.5,1.8,1.5),He=new nt({color:16777215,shininess:80}),pe=new je(N,He);pe.position.set(-.5,1.9,0),pe.castShadow=!0,V.add(pe);const Ue=new vn(1.8,1,1.2),Pe=new nt({color:15263976,shininess:90}),et=new je(Ue,Pe);et.position.set(-.3,2.9,0),et.castShadow=!0,V.add(et);const xe=new Wn(.15,.18,2,8),Be=new nt({color:3426654,shininess:100}),ct=new je(xe,Be);ct.position.set(-1.5,3.5,0),ct.castShadow=!0,V.add(ct);const ht=new Wn(.05,.08,4,8),R=new nt({color:6636321,shininess:20}),S=new je(ht,R);S.position.set(.5,4,0),S.castShadow=!0,V.add(S);const O=new lr(1.5,2.5),Q=new nt({color:16316671,side:Hn,transparent:!0,opacity:.9,shininess:30}),ie=new je(O,Q);ie.position.set(1.2,3.5,0),ie.rotation.y=Math.PI/2,V.add(ie);const q=new nr(.2,.8,8),Re=new nt({color:16766720,shininess:100}),ae=new je(q,Re);ae.position.set(2.8,1.2,0),ae.rotation.z=-Math.PI/2,ae.castShadow=!0,V.add(ae);const we=new vn(.3,.8,.1),Ae=new nt({color:2899536,shininess:80}),re=new je(we,Ae);return re.position.set(2.2,.5,.8),re.castShadow=!0,V.add(re),V},W=()=>{const V=new lr(100,100,50,50),$=new nt({color:27028,transparent:!0,opacity:.9,shininess:100,specular:8900331}),k=new je(V,$);k.rotation.x=-Math.PI/2,k.position.y=-2,k.receiveShadow=!0;const se=V.attributes.position.array;for(let fe=0;fe<se.length;fe+=3)se[fe+2]=Math.sin(se[fe]*.1)*.2+Math.cos(se[fe+1]*.1)*.2;return V.attributes.position.needsUpdate=!0,k},X=()=>{const V=[];for(let $=0;$<3;$++){const k=new Pn,se=new Wn(.3,.4,2,8);se.translate(0,0,1);const fe=new nt({color:11119017,shininess:50}),Ze=new je(se,fe);k.add(Ze);const Ne=new nr(.2,.5,8);Ne.rotateX(Math.PI/2);const N=new nt({color:7372944,shininess:30}),He=new je(Ne,N);He.position.set(0,.2,.8),k.add(He);const pe=$/3*Math.PI*2,Ue=15+Math.random()*10;k.position.set(Math.cos(pe)*Ue,-1+Math.random()*.5,Math.sin(pe)*Ue),T.add(k),V.push({mesh:k,speed:.5+Math.random()*.5,angle:pe,radius:Ue,offset:Math.random()*Math.PI*2})}for(let $=0;$<10;$++){const k=new Pn,se=new ir(.2,8,8),fe=new nt({color:Math.random()>.5?16737095:4620980,shininess:30}),Ze=new je(se,fe);k.add(Ze);const Ne=new nr(.1,.4,8);Ne.rotateZ(Math.PI/2);const N=new nt({color:Math.random()>.5?16737095:4620980,shininess:30}),He=new je(Ne,N);He.position.set(-.3,0,0),k.add(He);const pe=$/10*Math.PI*2,Ue=5+Math.random()*15;k.position.set(Math.cos(pe)*Ue,-1.5+Math.random()*1,Math.sin(pe)*Ue),k.scale.set(.7,.7,.7),T.add(k),V.push({mesh:k,speed:1+Math.random()*1,angle:pe,radius:Ue,offset:Math.random()*Math.PI*2})}return V},ee=new ir(200,32,32),Z=new nt({color:8900331,side:$t,transparent:!0,opacity:.9}),ne=new je(ee,Z);T.add(ne);const D=()=>{const V=new Pn;for(let $=0;$<12;$++){const k=new ir(3+Math.random()*2,8,8),se=new nt({color:16777215,transparent:!0,opacity:.7}),fe=new je(k,se);fe.position.set((Math.random()-.5)*100,15+Math.random()*15,(Math.random()-.5)*100),fe.scale.set(1+Math.random()*.8,.5+Math.random()*.5,1+Math.random()*.8),V.add(fe)}return V},K=j(),J=W(),de=D(),Ee=X();K.position.set(0,0,0),T.add(K),T.add(J),T.add(de),v.current=K,c.current=Ee,A.position.set(8,6,8),A.lookAt(0,0,0);let Te=0;const Ve=()=>{m.current=requestAnimationFrame(Ve),Te+=.01,v.current&&(v.current.position.y=Math.sin(Te*1.2)*.3,v.current.rotation.z=Math.sin(Te*.8)*.05,v.current.rotation.x=Math.cos(Te*.6)*.03,v.current.position.x=Math.sin(Te*.3)*2);const V=J.geometry.attributes.position.array;for(let k=0;k<V.length;k+=3){const se=V[k],fe=V[k+1];V[k+2]=Math.sin(se*.1+Te*2)*.3+Math.cos(fe*.1+Te*1.5)*.2+Math.sin(se*.05+Te)*.1}J.geometry.attributes.position.needsUpdate=!0,c.current.forEach(k=>{k.angle+=.01*k.speed,k.mesh.position.x=Math.cos(k.angle+k.offset)*k.radius,k.mesh.position.z=Math.sin(k.angle+k.offset)*k.radius,k.mesh.position.y=-1.5+Math.sin(Te*2+k.offset)*.5,k.mesh.lookAt(Math.cos(k.angle+k.offset+.1)*k.radius,-1.5+Math.sin(Te*2+k.offset+.1)*.5,Math.sin(k.angle+k.offset+.1)*k.radius)}),de.children.forEach((k,se)=>{k.position.x+=Math.sin(Te+se)*.005,k.position.z+=Math.cos(Te+se)*.005});const $=15;A.position.x=Math.cos(Te*.15)*$,A.position.z=Math.sin(Te*.15)*$,A.position.y=6+Math.sin(Te*.2)*2,A.lookAt(0,0,0),b.render(T,A)},Y=()=>{if(!h.current)return;const V=h.current.clientWidth,$=h.current.clientHeight;A.aspect=V/$,A.updateProjectionMatrix(),b.setSize(V,$)};return window.addEventListener("resize",Y),Ve(),u(!1),()=>{window.removeEventListener("resize",Y),m.current&&cancelAnimationFrame(m.current),h.current&&b.domElement&&h.current.removeChild(b.domElement),b.dispose()}},[]);const y=()=>{const T={};return t.trim()||(T.name="Name is required"),n.trim()?/\S+@\S+\.\S+/.test(n)||(T.email="Email is invalid"):T.email="Email is required",r?r.length<6&&(T.password="Password must be at least 6 characters"):T.password="Password is required",r!==o&&(T.confirmPassword="Passwords do not match"),f(T),Object.keys(T).length===0},C=T=>{T.preventDefault(),y()&&(console.log("Registration:",{userType:g,name:t,email:n,password:r}),_("/login"))};return P.jsxs("div",{className:"min-h-screen bg-gradient-maritime relative overflow-hidden",children:[P.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(50)].map((T,A)=>P.jsx("div",{className:"absolute w-2 h-2 bg-sail-white rounded-full opacity-20 animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*3}s`}},A))}),P.jsxs("div",{className:"flex min-h-screen relative z-10",children:[P.jsx("div",{className:"w-full md:w-1/2 flex items-center justify-center p-8 backdrop-blur-sm bg-black/20",children:P.jsxs("div",{className:"w-full max-w-md",children:[l&&P.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/70 z-20 rounded-lg",children:P.jsxs("div",{className:"text-center text-sail-white",children:[P.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-sail-white mx-auto mb-4"}),P.jsx("p",{className:"text-lg font-semibold",children:"Loading Maritime Scene..."})]})}),P.jsxs("div",{className:"text-center mb-8",children:[P.jsx("h1",{className:"text-4xl font-bold text-sail-white mb-2 tracking-wide",children:"⚓ Charter Party"}),P.jsx("p",{className:"text-ocean-foam text-lg",children:"Broker Registration"})]}),P.jsxs("div",{className:"space-y-6",children:[P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Full Name"}),P.jsx("input",{type:"text",value:t,onChange:T=>e(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${d.name?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Broker John Smith",required:!0}),d.name&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:d.name})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),P.jsx("input",{type:"email",value:n,onChange:T=>i(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${d.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"broker@example.com",required:!0}),d.email&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:d.email})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Password"}),P.jsx("input",{type:"password",value:r,onChange:T=>s(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${d.password?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Create a strong password",required:!0}),d.password&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:d.password})]}),P.jsxs("div",{children:[P.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Confirm Password"}),P.jsx("input",{type:"password",value:o,onChange:T=>a(T.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${d.confirmPassword?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Confirm your password",required:!0}),d.confirmPassword&&P.jsx("p",{className:"text-red-300 text-sm mt-1",children:d.confirmPassword})]}),P.jsx("button",{onClick:C,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Join the Fleet - Register 🚢"}),P.jsx("div",{className:"text-center pt-4 border-t border-border",children:P.jsxs("p",{className:"text-ocean-foam text-sm",children:["By registering, you agree to our"," ",P.jsx("a",{href:"#",className:"text-ocean-foam hover:text-sail-white underline",children:"Terms of Service"})," ","and"," ",P.jsx("a",{href:"#",className:"text-ocean-foam hover:text-sail-white underline",children:"Privacy Policy"})]})}),P.jsxs("div",{className:"text-center",children:[P.jsx("p",{className:"text-ocean-foam mb-3",children:"Already have an account?"}),P.jsx("button",{onClick:()=>_("/login"),className:"bg-white/10 text-ocean-foam py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-border",children:"Navigate to Login ⛵"})]})]})]})}),P.jsxs("div",{className:"hidden md:block md:w-1/2 relative",children:[P.jsx("div",{ref:h,className:"w-full h-full"}),P.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"}),P.jsx("div",{className:"absolute top-8 right-8 text-sail-white/80",children:P.jsxs("div",{className:"text-right",children:[P.jsx("div",{className:"text-sm font-medium",children:"Current Weather"}),P.jsx("div",{className:"text-xl",children:"⛅ Fair Winds"})]})}),P.jsx("div",{className:"absolute bottom-8 right-8 text-sail-white/80",children:P.jsxs("div",{className:"text-right",children:[P.jsx("div",{className:"text-sm font-medium",children:"Sea Condition"}),P.jsx("div",{className:"text-xl",children:"🌊 Calm Seas"})]})}),P.jsx("div",{className:"absolute bottom-8 left-8 text-sail-white/80",children:P.jsxs("div",{className:"text-left",children:[P.jsx("div",{className:"text-sm font-medium",children:"Marine Life"}),P.jsx("div",{className:"text-xl",children:"🐬 Dolphins & Fish"})]})})]})]}),P.jsx("div",{className:"absolute bottom-0 left-0 w-full",children:P.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"w-full h-16 fill-current text-ocean-surface/30",children:P.jsx("path",{d:"M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z",children:P.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z;\r
                      M0,0V40C240,100,480,20,720,40C960,100,1200,20,1200,40V0Z;\r
                      M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z`})})})})]})};function qA(){return P.jsx(LS,{children:P.jsxs(lS,{children:[P.jsx(fo,{path:"/login",element:P.jsx(Cm,{})}),P.jsx(fo,{path:"/register",element:P.jsx(YA,{})}),P.jsx(fo,{path:"/fixture",element:P.jsx(GS,{})}),P.jsx(fo,{path:"/",element:P.jsx(Cm,{})})]})})}z0(document.getElementById("root")).render(P.jsx(a_.StrictMode,{children:P.jsx(qA,{})}));
