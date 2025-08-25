(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Fv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bc={exports:{}},Bo={},Pc={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Ov(){if($p)return xt;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(k,re,we){this.props=k,this.context=re,this.refs=T,this.updater=we||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=y.prototype;function L(k,re,we){this.props=k,this.context=re,this.refs=T,this.updater=we||S}var P=L.prototype=new v;P.constructor=L,E(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,z=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function H(k,re,we){var Oe,Q={},q=null,ee=null;if(re!=null)for(Oe in re.ref!==void 0&&(ee=re.ref),re.key!==void 0&&(q=""+re.key),re)z.call(re,Oe)&&!F.hasOwnProperty(Oe)&&(Q[Oe]=re[Oe]);var $=arguments.length-2;if($===1)Q.children=we;else if(1<$){for(var ve=Array($),Ce=0;Ce<$;Ce++)ve[Ce]=arguments[Ce+2];Q.children=ve}if(k&&k.defaultProps)for(Oe in $=k.defaultProps,$)Q[Oe]===void 0&&(Q[Oe]=$[Oe]);return{$$typeof:r,type:k,key:q,ref:ee,props:Q,_owner:N.current}}function b(k,re){return{$$typeof:r,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function O(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(we){return re[we]})}var oe=/\/+/g;function te(k,re){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):re.toString(36)}function ce(k,re,we,Oe,Q){var q=typeof k;(q==="undefined"||q==="boolean")&&(k=null);var ee=!1;if(k===null)ee=!0;else switch(q){case"string":case"number":ee=!0;break;case"object":switch(k.$$typeof){case r:case e:ee=!0}}if(ee)return ee=k,Q=Q(ee),k=Oe===""?"."+te(ee,0):Oe,R(Q)?(we="",k!=null&&(we=k.replace(oe,"$&/")+"/"),ce(Q,re,we,"",function(Ce){return Ce})):Q!=null&&(C(Q)&&(Q=b(Q,we+(!Q.key||ee&&ee.key===Q.key?"":(""+Q.key).replace(oe,"$&/")+"/")+k)),re.push(Q)),1;if(ee=0,Oe=Oe===""?".":Oe+":",R(k))for(var $=0;$<k.length;$++){q=k[$];var ve=Oe+te(q,$);ee+=ce(q,re,we,ve,Q)}else if(ve=x(k),typeof ve=="function")for(k=ve.call(k),$=0;!(q=k.next()).done;)q=q.value,ve=Oe+te(q,$++),ee+=ce(q,re,we,ve,Q);else if(q==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ee}function ge(k,re,we){if(k==null)return k;var Oe=[],Q=0;return ce(k,Oe,"","",function(q){return re.call(we,q,Q++)}),Oe}function de(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(we){(k._status===0||k._status===-1)&&(k._status=1,k._result=we)},function(we){(k._status===0||k._status===-1)&&(k._status=2,k._result=we)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var me={current:null},G={transition:null},fe={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:G,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ge,forEach:function(k,re,we){ge(k,function(){re.apply(this,arguments)},we)},count:function(k){var re=0;return ge(k,function(){re++}),re},toArray:function(k){return ge(k,function(re){return re})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xt.Component=y,xt.Fragment=t,xt.Profiler=a,xt.PureComponent=L,xt.StrictMode=s,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,xt.act=le,xt.cloneElement=function(k,re,we){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Oe=E({},k.props),Q=k.key,q=k.ref,ee=k._owner;if(re!=null){if(re.ref!==void 0&&(q=re.ref,ee=N.current),re.key!==void 0&&(Q=""+re.key),k.type&&k.type.defaultProps)var $=k.type.defaultProps;for(ve in re)z.call(re,ve)&&!F.hasOwnProperty(ve)&&(Oe[ve]=re[ve]===void 0&&$!==void 0?$[ve]:re[ve])}var ve=arguments.length-2;if(ve===1)Oe.children=we;else if(1<ve){$=Array(ve);for(var Ce=0;Ce<ve;Ce++)$[Ce]=arguments[Ce+2];Oe.children=$}return{$$typeof:r,type:k.type,key:Q,ref:q,props:Oe,_owner:ee}},xt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},xt.createElement=H,xt.createFactory=function(k){var re=H.bind(null,k);return re.type=k,re},xt.createRef=function(){return{current:null}},xt.forwardRef=function(k){return{$$typeof:d,render:k}},xt.isValidElement=C,xt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:de}},xt.memo=function(k,re){return{$$typeof:p,type:k,compare:re===void 0?null:re}},xt.startTransition=function(k){var re=G.transition;G.transition={};try{k()}finally{G.transition=re}},xt.unstable_act=le,xt.useCallback=function(k,re){return me.current.useCallback(k,re)},xt.useContext=function(k){return me.current.useContext(k)},xt.useDebugValue=function(){},xt.useDeferredValue=function(k){return me.current.useDeferredValue(k)},xt.useEffect=function(k,re){return me.current.useEffect(k,re)},xt.useId=function(){return me.current.useId()},xt.useImperativeHandle=function(k,re,we){return me.current.useImperativeHandle(k,re,we)},xt.useInsertionEffect=function(k,re){return me.current.useInsertionEffect(k,re)},xt.useLayoutEffect=function(k,re){return me.current.useLayoutEffect(k,re)},xt.useMemo=function(k,re){return me.current.useMemo(k,re)},xt.useReducer=function(k,re,we){return me.current.useReducer(k,re,we)},xt.useRef=function(k){return me.current.useRef(k)},xt.useState=function(k){return me.current.useState(k)},xt.useSyncExternalStore=function(k,re,we){return me.current.useSyncExternalStore(k,re,we)},xt.useTransition=function(){return me.current.useTransition()},xt.version="18.3.1",xt}var Yp;function rf(){return Yp||(Yp=1,Pc.exports=Ov()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function kv(){if(qp)return Bo;qp=1;var r=rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,p){var g,_={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:x,ref:S,props:_,_owner:a.current}}return Bo.Fragment=t,Bo.jsx=c,Bo.jsxs=c,Bo}var Kp;function Bv(){return Kp||(Kp=1,bc.exports=kv()),bc.exports}var U=Bv(),ue=rf();const zv=Fv(ue);var hl={},Lc={exports:{}},Un={},Nc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Hv(){return Zp||(Zp=1,(function(r){function e(G,fe){var le=G.length;G.push(fe);e:for(;0<le;){var k=le-1>>>1,re=G[k];if(0<a(re,fe))G[k]=fe,G[le]=re,le=k;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var fe=G[0],le=G.pop();if(le!==fe){G[0]=le;e:for(var k=0,re=G.length,we=re>>>1;k<we;){var Oe=2*(k+1)-1,Q=G[Oe],q=Oe+1,ee=G[q];if(0>a(Q,le))q<re&&0>a(ee,Q)?(G[k]=ee,G[q]=le,k=q):(G[k]=Q,G[Oe]=le,k=Oe);else if(q<re&&0>a(ee,le))G[k]=ee,G[q]=le,k=q;else break e}}return fe}function a(G,fe){var le=G.sortIndex-fe.sortIndex;return le!==0?le:G.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var h=[],p=[],g=1,_=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(G){for(var fe=t(p);fe!==null;){if(fe.callback===null)s(p);else if(fe.startTime<=G)s(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function R(G){if(T=!1,P(G),!E)if(t(h)!==null)E=!0,de(z);else{var fe=t(p);fe!==null&&me(R,fe.startTime-G)}}function z(G,fe){E=!1,T&&(T=!1,v(H),H=-1),S=!0;var le=x;try{for(P(fe),_=t(h);_!==null&&(!(_.expirationTime>fe)||G&&!O());){var k=_.callback;if(typeof k=="function"){_.callback=null,x=_.priorityLevel;var re=k(_.expirationTime<=fe);fe=r.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&s(h),P(fe)}else s(h);_=t(h)}if(_!==null)var we=!0;else{var Oe=t(p);Oe!==null&&me(R,Oe.startTime-fe),we=!1}return we}finally{_=null,x=le,S=!1}}var N=!1,F=null,H=-1,b=5,C=-1;function O(){return!(r.unstable_now()-C<b)}function oe(){if(F!==null){var G=r.unstable_now();C=G;var fe=!0;try{fe=F(!0,G)}finally{fe?te():(N=!1,F=null)}}else N=!1}var te;if(typeof L=="function")te=function(){L(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ge=ce.port2;ce.port1.onmessage=oe,te=function(){ge.postMessage(null)}}else te=function(){y(oe,0)};function de(G){F=G,N||(N=!0,te())}function me(G,fe){H=y(function(){G(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,de(z))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(G){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var le=x;x=fe;try{return G()}finally{x=le}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,fe){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var le=x;x=G;try{return fe()}finally{x=le}},r.unstable_scheduleCallback=function(G,fe,le){var k=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?k+le:k):le=k,G){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,G={id:g++,callback:fe,priorityLevel:G,startTime:le,expirationTime:re,sortIndex:-1},le>k?(G.sortIndex=le,e(p,G),t(h)===null&&G===t(p)&&(T?(v(H),H=-1):T=!0,me(R,le-k))):(G.sortIndex=re,e(h,G),E||S||(E=!0,de(z))),G},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(G){var fe=x;return function(){var le=x;x=fe;try{return G.apply(this,arguments)}finally{x=le}}}})(Dc)),Dc}var Qp;function Vv(){return Qp||(Qp=1,Nc.exports=Hv()),Nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Gv(){if(Jp)return Un;Jp=1;var r=rf(),e=Vv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,f,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),G=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,k;function re(n){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var we=!1;function Oe(n,i){if(!n||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var u=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){u=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){u=ne}n()}}catch(ne){if(ne&&u&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),m=u.stack.split(`
`),M=f.length-1,I=m.length-1;1<=M&&0<=I&&f[M]!==m[I];)I--;for(;1<=M&&0<=I;M--,I--)if(f[M]!==m[I]){if(M!==1||I!==1)do if(M--,I--,0>I||f[M]!==m[I]){var V=`
`+f[M].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=M&&0<=I);break}}}finally{we=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?re(n):""}function Q(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Oe(n.type,!1),n;case 11:return n=Oe(n.type.render,!1),n;case 1:return n=Oe(n.type,!0),n;default:return""}}function q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case b:return"Profiler";case H:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return i=n.displayName||null,i!==null?i:q(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return q(n(i))}catch{}}return null}function ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function $(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(n){var i=ve(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _t(n){n._valueTracker||(n._valueTracker=Ce(n))}function et(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=ve(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ne(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=$(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function qe(n,i){tt(n,i);var o=$(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ke(n,i.type,o):i.hasOwnProperty("defaultValue")&&ke(n,i.type,$(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Mt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ke(n,i,o){(i!=="number"||B(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var lt=Array.isArray;function At(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+$(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ut(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(lt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:$(o)}}function w(n,i){var o=$(i.value),u=$(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var he,Xe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=he.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function Me(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function Fe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Me(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var ot=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,i){if(i){if(ot[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,Le=null,Be=null;function Ae(n){if(n=wo(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),Re(n.stateNode,n.type,i))}}function _e(n){Le?Be?Be.push(n):Be=[n]:Le=n}function Ye(){if(Le){var n=Le,i=Be;if(Be=Le=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function ft(n,i){return n(i)}function It(){}var wt=!1;function $n(n,i,o){if(wt)return n(i,o);wt=!0;try{return ft(n,i,o)}finally{wt=!1,(Le!==null||Be!==null)&&(It(),Ye())}}function pn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ra(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ls=!1;if(d)try{var On={};Object.defineProperty(On,"passive",{get:function(){ls=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{ls=!1}function oo(n,i,o,u,f,m,M,I,V){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(Se){this.onError(Se)}}var Qi=!1,Nr=null,Pi=!1,us=null,cs={onError:function(n){Qi=!0,Nr=n}};function aa(n,i,o,u,f,m,M,I,V){Qi=!1,Nr=null,oo.apply(cs,arguments)}function la(n,i,o,u,f,m,M,I,V){if(aa.apply(this,arguments),Qi){if(Qi){var ne=Nr;Qi=!1,Nr=null}else throw Error(t(198));Pi||(Pi=!0,us=ne)}}function Li(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(Li(n)!==n)throw Error(t(188))}function Ql(n){var i=n.alternate;if(!i){if(i=Li(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return ca(f),n;if(m===u)return ca(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=m;else{for(var M=!1,I=f.child;I;){if(I===o){M=!0,o=f,u=m;break}if(I===u){M=!0,u=f,o=m;break}I=I.sibling}if(!M){for(I=m.child;I;){if(I===o){M=!0,o=m,u=f;break}if(I===u){M=!0,u=m,o=f;break}I=I.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function da(n){return n=Ql(n),n!==null?fa(n):null}function fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fa(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,j=e.unstable_now,be=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Je=null,ut=null;function Dt(n){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:nt,Bt=Math.log,Ft=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Bt(n)/Ft|0)|0}var Ot=64,yt=4194304;function tn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ii(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var I=M&~f;I!==0?u=tn(I):(m&=M,m!==0&&(u=tn(m)))}else M=o&~f,M!==0?u=tn(M):m!==0&&(u=tn(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Tt(i),f=1<<o,u|=n[o],i&=~f;return u}function wn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Tt(m),I=1<<M,V=f[M];V===-1?((I&o)===0||(I&u)!==0)&&(f[M]=wn(I,i)):V<=i&&(n.expiredLanes|=I),m&=~I}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Kt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=o}function gn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Tt(o),m=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~m}}function Ur(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Tt(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var St=0;function Tf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Af,Jl,Cf,Rf,bf,eu=!1,ha=[],Ji=null,er=null,tr=null,ao=new Map,lo=new Map,nr=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(n,i,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&Jl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function s0(n,i,o,u,f){switch(i){case"focusin":return Ji=uo(Ji,n,i,o,u,f),!0;case"dragenter":return er=uo(er,n,i,o,u,f),!0;case"mouseover":return tr=uo(tr,n,i,o,u,f),!0;case"pointerover":var m=f.pointerId;return ao.set(m,uo(ao.get(m)||null,n,i,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,lo.set(m,uo(lo.get(m)||null,n,i,o,u,f)),!0}return!1}function Lf(n){var i=Ir(n.target);if(i!==null){var o=Li(i);if(o!==null){if(i=o.tag,i===13){if(i=ua(o),i!==null){n.blockedOn=i,bf(n.priority,function(){Cf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=nu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ht=u,o.target.dispatchEvent(u),ht=null}else return i=wo(o),i!==null&&Jl(i),n.blockedOn=o,!1;i.shift()}return!0}function Nf(n,i,o){pa(n)&&o.delete(i)}function o0(){eu=!1,Ji!==null&&pa(Ji)&&(Ji=null),er!==null&&pa(er)&&(er=null),tr!==null&&pa(tr)&&(tr=null),ao.forEach(Nf),lo.forEach(Nf)}function co(n,i){n.blockedOn===i&&(n.blockedOn=null,eu||(eu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o0)))}function fo(n){function i(f){return co(f,n)}if(0<ha.length){co(ha[0],n);for(var o=1;o<ha.length;o++){var u=ha[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ji!==null&&co(Ji,n),er!==null&&co(er,n),tr!==null&&co(tr,n),ao.forEach(i),lo.forEach(i),o=0;o<nr.length;o++)u=nr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)Lf(o),o.blockedOn===null&&nr.shift()}var ds=R.ReactCurrentBatchConfig,ma=!0;function a0(n,i,o,u){var f=St,m=ds.transition;ds.transition=null;try{St=1,tu(n,i,o,u)}finally{St=f,ds.transition=m}}function l0(n,i,o,u){var f=St,m=ds.transition;ds.transition=null;try{St=4,tu(n,i,o,u)}finally{St=f,ds.transition=m}}function tu(n,i,o,u){if(ma){var f=nu(n,i,o,u);if(f===null)xu(n,i,u,ga,o),Pf(n,u);else if(s0(f,n,i,o,u))u.stopPropagation();else if(Pf(n,u),i&4&&-1<r0.indexOf(n)){for(;f!==null;){var m=wo(f);if(m!==null&&Af(m),m=nu(n,i,o,u),m===null&&xu(n,i,u,ga,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else xu(n,i,u,null,o)}}var ga=null;function nu(n,i,o,u){if(ga=null,n=W(u),n=Ir(n),n!==null)if(i=Li(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ua(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ga=n,null}function Df(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(be()){case Ue:return 1;case We:return 4;case ze:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var ir=null,iu=null,va=null;function Uf(){if(va)return va;var n,i=iu,o=i.length,u,f="value"in ir?ir.value:ir.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===f[m-u];u++);return va=f.slice(n,1<u?1-u:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function If(){return!1}function kn(n){function i(o,u,f,m,M){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xa:If,this.isPropagationStopped=If,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=kn(fs),ho=le({},fs,{view:0,detail:0}),u0=kn(ho),su,ou,po,ya=le({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(su=n.screenX-po.screenX,ou=n.screenY-po.screenY):ou=su=0,po=n),su)},movementY:function(n){return"movementY"in n?n.movementY:ou}}),Ff=kn(ya),c0=le({},ya,{dataTransfer:0}),d0=kn(c0),f0=le({},ho,{relatedTarget:0}),au=kn(f0),h0=le({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=kn(h0),m0=le({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),g0=kn(m0),v0=le({},fs,{data:0}),Of=kn(v0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=y0[n])?!!i[n]:!1}function lu(){return S0}var M0=le({},ho,{key:function(n){if(n.key){var i=_0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),E0=kn(M0),w0=le({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=kn(w0),T0=le({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),A0=kn(T0),C0=le({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=kn(C0),b0=le({},ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=kn(b0),L0=[9,13,27,32],uu=d&&"CompositionEvent"in window,mo=null;d&&"documentMode"in document&&(mo=document.documentMode);var N0=d&&"TextEvent"in window&&!mo,Bf=d&&(!uu||mo&&8<mo&&11>=mo),zf=" ",Hf=!1;function Vf(n,i){switch(n){case"keyup":return L0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function D0(n,i){switch(n){case"compositionend":return Gf(i);case"keypress":return i.which!==32?null:(Hf=!0,zf);case"textInput":return n=i.data,n===zf&&Hf?null:n;default:return null}}function U0(n,i){if(hs)return n==="compositionend"||!uu&&Vf(n,i)?(n=Uf(),va=iu=ir=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bf&&i.locale!=="ko"?null:i.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!I0[n.type]:i==="textarea"}function jf(n,i,o,u){_e(u),i=Ta(i,"onChange"),0<i.length&&(o=new ru("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var go=null,vo=null;function F0(n){uh(n,0)}function Sa(n){var i=_s(n);if(et(i))return n}function O0(n,i){if(n==="change")return i}var Xf=!1;if(d){var cu;if(d){var du="oninput"in document;if(!du){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),du=typeof $f.oninput=="function"}cu=du}else cu=!1;Xf=cu&&(!document.documentMode||9<document.documentMode)}function Yf(){go&&(go.detachEvent("onpropertychange",qf),vo=go=null)}function qf(n){if(n.propertyName==="value"&&Sa(vo)){var i=[];jf(i,vo,n,W(n)),$n(F0,i)}}function k0(n,i,o){n==="focusin"?(Yf(),go=i,vo=o,go.attachEvent("onpropertychange",qf)):n==="focusout"&&Yf()}function B0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sa(vo)}function z0(n,i){if(n==="click")return Sa(i)}function H0(n,i){if(n==="input"||n==="change")return Sa(i)}function V0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:V0;function _o(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!h.call(i,f)||!ri(n[f],i[f]))return!1}return!0}function Kf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zf(n,i){var o=Kf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kf(o)}}function Qf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Jf(){for(var n=window,i=B();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=B(n.document)}return i}function fu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function G0(n){var i=Jf(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Qf(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!n.extend&&m>u&&(f=u,u=m,m=f),f=Zf(o,m);var M=Zf(o,u);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var W0=d&&"documentMode"in document&&11>=document.documentMode,ps=null,hu=null,xo=null,pu=!1;function eh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pu||ps==null||ps!==B(u)||(u=ps,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&_o(xo,u)||(xo=u,u=Ta(hu,"onSelect"),0<u.length&&(i=new ru("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ps)))}function Ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ms={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},mu={},th={};d&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Ea(n){if(mu[n])return mu[n];if(!ms[n])return n;var i=ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in th)return mu[n]=i[o];return n}var nh=Ea("animationend"),ih=Ea("animationiteration"),rh=Ea("animationstart"),sh=Ea("transitionend"),oh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(n,i){oh.set(n,i),l(i,[n])}for(var gu=0;gu<ah.length;gu++){var vu=ah[gu],j0=vu.toLowerCase(),X0=vu[0].toUpperCase()+vu.slice(1);rr(j0,"on"+X0)}rr(nh,"onAnimationEnd"),rr(ih,"onAnimationIteration"),rr(rh,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function lh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,la(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],V=I.instance,ne=I.currentTarget;if(I=I.listener,V!==m&&f.isPropagationStopped())break e;lh(f,I,ne),m=V}else for(M=0;M<u.length;M++){if(I=u[M],V=I.instance,ne=I.currentTarget,I=I.listener,V!==m&&f.isPropagationStopped())break e;lh(f,I,ne),m=V}}}if(Pi)throw n=us,Pi=!1,us=null,n}function Vt(n,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=n+"__bubble";o.has(u)||(ch(i,n,2,!1),o.add(u))}function _u(n,i,o){var u=0;i&&(u|=4),ch(o,n,u,i)}var wa="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[wa]){n[wa]=!0,s.forEach(function(o){o!=="selectionchange"&&($0.has(o)||_u(o,!1,n),_u(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wa]||(i[wa]=!0,_u("selectionchange",!1,i))}}function ch(n,i,o,u){switch(Df(i)){case 1:var f=a0;break;case 4:f=l0;break;default:f=tu}o=f.bind(null,i,o,n),f=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function xu(n,i,o,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var V=M.tag;if((V===3||V===4)&&(V=M.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;M=M.return}for(;I!==null;){if(M=Ir(I),M===null)return;if(V=M.tag,V===5||V===6){u=m=M;continue e}I=I.parentNode}}u=u.return}$n(function(){var ne=m,Se=W(o),Te=[];e:{var ye=oh.get(n);if(ye!==void 0){var He=ru,je=n;switch(n){case"keypress":if(_a(o)===0)break e;case"keydown":case"keyup":He=E0;break;case"focusin":je="focus",He=au;break;case"focusout":je="blur",He=au;break;case"beforeblur":case"afterblur":He=au;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=A0;break;case nh:case ih:case rh:He=p0;break;case sh:He=R0;break;case"scroll":He=u0;break;case"wheel":He=P0;break;case"copy":case"cut":case"paste":He=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=kf}var Ke=(i&4)!==0,Zt=!Ke&&n==="scroll",K=Ke?ye!==null?ye+"Capture":null:ye;Ke=[];for(var X=ne,J;X!==null;){J=X;var Pe=J.stateNode;if(J.tag===5&&Pe!==null&&(J=Pe,K!==null&&(Pe=pn(X,K),Pe!=null&&Ke.push(Mo(X,Pe,J)))),Zt)break;X=X.return}0<Ke.length&&(ye=new He(ye,je,null,o,Se),Te.push({event:ye,listeners:Ke}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&o!==ht&&(je=o.relatedTarget||o.fromElement)&&(Ir(je)||je[Ni]))break e;if((He||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(je=o.relatedTarget||o.toElement,He=ne,je=je?Ir(je):null,je!==null&&(Zt=Li(je),je!==Zt||je.tag!==5&&je.tag!==6)&&(je=null)):(He=null,je=ne),He!==je)){if(Ke=Ff,Pe="onMouseLeave",K="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=kf,Pe="onPointerLeave",K="onPointerEnter",X="pointer"),Zt=He==null?ye:_s(He),J=je==null?ye:_s(je),ye=new Ke(Pe,X+"leave",He,o,Se),ye.target=Zt,ye.relatedTarget=J,Pe=null,Ir(Se)===ne&&(Ke=new Ke(K,X+"enter",je,o,Se),Ke.target=J,Ke.relatedTarget=Zt,Pe=Ke),Zt=Pe,He&&je)t:{for(Ke=He,K=je,X=0,J=Ke;J;J=gs(J))X++;for(J=0,Pe=K;Pe;Pe=gs(Pe))J++;for(;0<X-J;)Ke=gs(Ke),X--;for(;0<J-X;)K=gs(K),J--;for(;X--;){if(Ke===K||K!==null&&Ke===K.alternate)break t;Ke=gs(Ke),K=gs(K)}Ke=null}else Ke=null;He!==null&&dh(Te,ye,He,Ke,!1),je!==null&&Zt!==null&&dh(Te,Zt,je,Ke,!0)}}e:{if(ye=ne?_s(ne):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Qe=O0;else if(Wf(ye))if(Xf)Qe=H0;else{Qe=B0;var it=k0}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Qe=z0);if(Qe&&(Qe=Qe(n,ne))){jf(Te,Qe,o,Se);break e}it&&it(n,ye,ne),n==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&ke(ye,"number",ye.value)}switch(it=ne?_s(ne):window,n){case"focusin":(Wf(it)||it.contentEditable==="true")&&(ps=it,hu=ne,xo=null);break;case"focusout":xo=hu=ps=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,eh(Te,o,Se);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":eh(Te,o,Se)}var rt;if(uu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else hs?Vf(n,o)&&(ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Bf&&o.locale!=="ko"&&(hs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&hs&&(rt=Uf()):(ir=Se,iu="value"in ir?ir.value:ir.textContent,hs=!0)),it=Ta(ne,ct),0<it.length&&(ct=new Of(ct,n,null,o,Se),Te.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=Gf(o),rt!==null&&(ct.data=rt)))),(rt=N0?D0(n,o):U0(n,o))&&(ne=Ta(ne,"onBeforeInput"),0<ne.length&&(Se=new Of("onBeforeInput","beforeinput",null,o,Se),Te.push({event:Se,listeners:ne}),Se.data=rt))}uh(Te,i)})}function Mo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ta(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=pn(n,o),m!=null&&u.unshift(Mo(n,m,f)),m=pn(n,i),m!=null&&u.push(Mo(n,m,f))),n=n.return}return u}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dh(n,i,o,u,f){for(var m=i._reactName,M=[];o!==null&&o!==u;){var I=o,V=I.alternate,ne=I.stateNode;if(V!==null&&V===u)break;I.tag===5&&ne!==null&&(I=ne,f?(V=pn(o,m),V!=null&&M.unshift(Mo(o,V,I))):f||(V=pn(o,m),V!=null&&M.push(Mo(o,V,I)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Y0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function fh(n){return(typeof n=="string"?n:""+n).replace(Y0,`
`).replace(q0,"")}function Aa(n,i,o){if(i=fh(i),fh(n)!==i&&o)throw Error(t(425))}function Ca(){}var yu=null,Su=null;function Mu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(n){return hh.resolve(null).then(n).catch(Q0)}:Eu;function Q0(n){setTimeout(function(){throw n})}function wu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),fo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);fo(i)}function sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),_i="__reactFiber$"+vs,Eo="__reactProps$"+vs,Ni="__reactContainer$"+vs,Tu="__reactEvents$"+vs,J0="__reactListeners$"+vs,ev="__reactHandles$"+vs;function Ir(n){var i=n[_i];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=ph(n);n!==null;){if(o=n[_i])return o;n=ph(n)}return i}n=o,o=n.parentNode}return null}function wo(n){return n=n[_i]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[Eo]||null}var Au=[],xs=-1;function or(n){return{current:n}}function Gt(n){0>xs||(n.current=Au[xs],Au[xs]=null,xs--)}function Ht(n,i){xs++,Au[xs]=n.current,n.current=i}var ar={},vn=or(ar),bn=or(!1),Fr=ar;function ys(n,i){var o=n.type.contextTypes;if(!o)return ar;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(n){return n=n.childContextTypes,n!=null}function ba(){Gt(bn),Gt(vn)}function mh(n,i,o){if(vn.current!==ar)throw Error(t(168));Ht(vn,i),Ht(bn,o)}function gh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ee(n)||"Unknown",f));return le({},o,u)}function Pa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,Fr=vn.current,Ht(vn,n),Ht(bn,bn.current),!0}function vh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=gh(n,i,Fr),u.__reactInternalMemoizedMergedChildContext=n,Gt(bn),Gt(vn),Ht(vn,n)):Gt(bn),Ht(bn,o)}var Di=null,La=!1,Cu=!1;function _h(n){Di===null?Di=[n]:Di.push(n)}function tv(n){La=!0,_h(n)}function lr(){if(!Cu&&Di!==null){Cu=!0;var n=0,i=St;try{var o=Di;for(St=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Di=null,La=!1}catch(f){throw Di!==null&&(Di=Di.slice(n+1)),A(Ue,lr),f}finally{St=i,Cu=!1}}return null}var Ss=[],Ms=0,Na=null,Da=0,Yn=[],qn=0,Or=null,Ui=1,Ii="";function kr(n,i){Ss[Ms++]=Da,Ss[Ms++]=Na,Na=n,Da=i}function xh(n,i,o){Yn[qn++]=Ui,Yn[qn++]=Ii,Yn[qn++]=Or,Or=n;var u=Ui;n=Ii;var f=32-Tt(u)-1;u&=~(1<<f),o+=1;var m=32-Tt(i)+f;if(30<m){var M=f-f%5;m=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Ui=1<<32-Tt(i)+f|o<<f|u,Ii=m+n}else Ui=1<<m|o<<f|u,Ii=n}function Ru(n){n.return!==null&&(kr(n,1),xh(n,1,0))}function bu(n){for(;n===Na;)Na=Ss[--Ms],Ss[Ms]=null,Da=Ss[--Ms],Ss[Ms]=null;for(;n===Or;)Or=Yn[--qn],Yn[qn]=null,Ii=Yn[--qn],Yn[qn]=null,Ui=Yn[--qn],Yn[qn]=null}var Bn=null,zn=null,Wt=!1,si=null;function yh(n,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Sh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Or!==null?{id:Ui,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Bn=n,zn=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lu(n){if(Wt){var i=zn;if(i){var o=i;if(!Sh(n,i)){if(Pu(n))throw Error(t(418));i=sr(o.nextSibling);var u=Bn;i&&Sh(n,i)?yh(u,o):(n.flags=n.flags&-4097|2,Wt=!1,Bn=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Bn=n}}}function Mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ua(n){if(n!==Bn)return!1;if(!Wt)return Mh(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Mu(n.type,n.memoizedProps)),i&&(i=zn)){if(Pu(n))throw Eh(),Error(t(418));for(;i;)yh(n,i),i=sr(i.nextSibling)}if(Mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){zn=sr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?sr(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=zn;n;)n=sr(n.nextSibling)}function Es(){zn=Bn=null,Wt=!1}function Nu(n){si===null?si=[n]:si.push(n)}var nv=R.ReactCurrentBatchConfig;function To(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var I=f.refs;M===null?delete I[m]:I[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ia(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function wh(n){var i=n._init;return i(n._payload)}function Th(n){function i(K,X){if(n){var J=K.deletions;J===null?(K.deletions=[X],K.flags|=16):J.push(X)}}function o(K,X){if(!n)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function u(K,X){for(K=new Map;X!==null;)X.key!==null?K.set(X.key,X):K.set(X.index,X),X=X.sibling;return K}function f(K,X){return K=gr(K,X),K.index=0,K.sibling=null,K}function m(K,X,J){return K.index=J,n?(J=K.alternate,J!==null?(J=J.index,J<X?(K.flags|=2,X):J):(K.flags|=2,X)):(K.flags|=1048576,X)}function M(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,X,J,Pe){return X===null||X.tag!==6?(X=Ec(J,K.mode,Pe),X.return=K,X):(X=f(X,J),X.return=K,X)}function V(K,X,J,Pe){var Qe=J.type;return Qe===F?Se(K,X,J.props.children,Pe,J.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===de&&wh(Qe)===X.type)?(Pe=f(X,J.props),Pe.ref=To(K,X,J),Pe.return=K,Pe):(Pe=sl(J.type,J.key,J.props,null,K.mode,Pe),Pe.ref=To(K,X,J),Pe.return=K,Pe)}function ne(K,X,J,Pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=wc(J,K.mode,Pe),X.return=K,X):(X=f(X,J.children||[]),X.return=K,X)}function Se(K,X,J,Pe,Qe){return X===null||X.tag!==7?(X=Xr(J,K.mode,Pe,Qe),X.return=K,X):(X=f(X,J),X.return=K,X)}function Te(K,X,J){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ec(""+X,K.mode,J),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return J=sl(X.type,X.key,X.props,null,K.mode,J),J.ref=To(K,null,X),J.return=K,J;case N:return X=wc(X,K.mode,J),X.return=K,X;case de:var Pe=X._init;return Te(K,Pe(X._payload),J)}if(lt(X)||fe(X))return X=Xr(X,K.mode,J,null),X.return=K,X;Ia(K,X)}return null}function ye(K,X,J,Pe){var Qe=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Qe!==null?null:I(K,X,""+J,Pe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case z:return J.key===Qe?V(K,X,J,Pe):null;case N:return J.key===Qe?ne(K,X,J,Pe):null;case de:return Qe=J._init,ye(K,X,Qe(J._payload),Pe)}if(lt(J)||fe(J))return Qe!==null?null:Se(K,X,J,Pe,null);Ia(K,J)}return null}function He(K,X,J,Pe,Qe){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return K=K.get(J)||null,I(X,K,""+Pe,Qe);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case z:return K=K.get(Pe.key===null?J:Pe.key)||null,V(X,K,Pe,Qe);case N:return K=K.get(Pe.key===null?J:Pe.key)||null,ne(X,K,Pe,Qe);case de:var it=Pe._init;return He(K,X,J,it(Pe._payload),Qe)}if(lt(Pe)||fe(Pe))return K=K.get(J)||null,Se(X,K,Pe,Qe,null);Ia(X,Pe)}return null}function je(K,X,J,Pe){for(var Qe=null,it=null,rt=X,ct=X=0,un=null;rt!==null&&ct<J.length;ct++){rt.index>ct?(un=rt,rt=null):un=rt.sibling;var bt=ye(K,rt,J[ct],Pe);if(bt===null){rt===null&&(rt=un);break}n&&rt&&bt.alternate===null&&i(K,rt),X=m(bt,X,ct),it===null?Qe=bt:it.sibling=bt,it=bt,rt=un}if(ct===J.length)return o(K,rt),Wt&&kr(K,ct),Qe;if(rt===null){for(;ct<J.length;ct++)rt=Te(K,J[ct],Pe),rt!==null&&(X=m(rt,X,ct),it===null?Qe=rt:it.sibling=rt,it=rt);return Wt&&kr(K,ct),Qe}for(rt=u(K,rt);ct<J.length;ct++)un=He(rt,K,ct,J[ct],Pe),un!==null&&(n&&un.alternate!==null&&rt.delete(un.key===null?ct:un.key),X=m(un,X,ct),it===null?Qe=un:it.sibling=un,it=un);return n&&rt.forEach(function(vr){return i(K,vr)}),Wt&&kr(K,ct),Qe}function Ke(K,X,J,Pe){var Qe=fe(J);if(typeof Qe!="function")throw Error(t(150));if(J=Qe.call(J),J==null)throw Error(t(151));for(var it=Qe=null,rt=X,ct=X=0,un=null,bt=J.next();rt!==null&&!bt.done;ct++,bt=J.next()){rt.index>ct?(un=rt,rt=null):un=rt.sibling;var vr=ye(K,rt,bt.value,Pe);if(vr===null){rt===null&&(rt=un);break}n&&rt&&vr.alternate===null&&i(K,rt),X=m(vr,X,ct),it===null?Qe=vr:it.sibling=vr,it=vr,rt=un}if(bt.done)return o(K,rt),Wt&&kr(K,ct),Qe;if(rt===null){for(;!bt.done;ct++,bt=J.next())bt=Te(K,bt.value,Pe),bt!==null&&(X=m(bt,X,ct),it===null?Qe=bt:it.sibling=bt,it=bt);return Wt&&kr(K,ct),Qe}for(rt=u(K,rt);!bt.done;ct++,bt=J.next())bt=He(rt,K,ct,bt.value,Pe),bt!==null&&(n&&bt.alternate!==null&&rt.delete(bt.key===null?ct:bt.key),X=m(bt,X,ct),it===null?Qe=bt:it.sibling=bt,it=bt);return n&&rt.forEach(function(Iv){return i(K,Iv)}),Wt&&kr(K,ct),Qe}function Zt(K,X,J,Pe){if(typeof J=="object"&&J!==null&&J.type===F&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case z:e:{for(var Qe=J.key,it=X;it!==null;){if(it.key===Qe){if(Qe=J.type,Qe===F){if(it.tag===7){o(K,it.sibling),X=f(it,J.props.children),X.return=K,K=X;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===de&&wh(Qe)===it.type){o(K,it.sibling),X=f(it,J.props),X.ref=To(K,it,J),X.return=K,K=X;break e}o(K,it);break}else i(K,it);it=it.sibling}J.type===F?(X=Xr(J.props.children,K.mode,Pe,J.key),X.return=K,K=X):(Pe=sl(J.type,J.key,J.props,null,K.mode,Pe),Pe.ref=To(K,X,J),Pe.return=K,K=Pe)}return M(K);case N:e:{for(it=J.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){o(K,X.sibling),X=f(X,J.children||[]),X.return=K,K=X;break e}else{o(K,X);break}else i(K,X);X=X.sibling}X=wc(J,K.mode,Pe),X.return=K,K=X}return M(K);case de:return it=J._init,Zt(K,X,it(J._payload),Pe)}if(lt(J))return je(K,X,J,Pe);if(fe(J))return Ke(K,X,J,Pe);Ia(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,X!==null&&X.tag===6?(o(K,X.sibling),X=f(X,J),X.return=K,K=X):(o(K,X),X=Ec(J,K.mode,Pe),X.return=K,K=X),M(K)):o(K,X)}return Zt}var ws=Th(!0),Ah=Th(!1),Fa=or(null),Oa=null,Ts=null,Du=null;function Uu(){Du=Ts=Oa=null}function Iu(n){var i=Fa.current;Gt(Fa),n._currentValue=i}function Fu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function As(n,i){Oa=n,Du=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Du!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Oa===null)throw Error(t(308));Ts=n,Oa.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var Br=null;function Ou(n){Br===null?Br=[n]:Br.push(n)}function Ch(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Ou(i)):(o.next=f.next,f.next=o),i.interleaved=o,Fi(n,u)}function Fi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ur=!1;function ku(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ct&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Fi(n,o)}return f=u.interleaved,f===null?(i.next=i,Ou(u)):(i.next=f.next,f.next=i),u.interleaved=i,Fi(n,o)}function ka(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ur(n,o)}}function bh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ba(n,i,o,u){var f=n.updateQueue;ur=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var V=I,ne=V.next;V.next=null,M===null?m=ne:M.next=ne,M=V;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==M&&(I===null?Se.firstBaseUpdate=ne:I.next=ne,Se.lastBaseUpdate=V))}if(m!==null){var Te=f.baseState;M=0,Se=ne=V=null,I=m;do{var ye=I.lane,He=I.eventTime;if((u&ye)===ye){Se!==null&&(Se=Se.next={eventTime:He,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,Ke=I;switch(ye=i,He=o,Ke.tag){case 1:if(je=Ke.payload,typeof je=="function"){Te=je.call(He,Te,ye);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ke.payload,ye=typeof je=="function"?je.call(He,Te,ye):je,ye==null)break e;Te=le({},Te,ye);break e;case 2:ur=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[I]:ye.push(I))}else He={eventTime:He,lane:ye,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(ne=Se=He,V=Te):Se=Se.next=He,M|=ye;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ye=I,I=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Se===null&&(V=Te),f.baseState=V,f.firstBaseUpdate=ne,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Vr|=M,n.lanes=M,n.memoizedState=Te}}function Ph(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Ao={},xi=or(Ao),Co=or(Ao),Ro=or(Ao);function zr(n){if(n===Ao)throw Error(t(174));return n}function Bu(n,i){switch(Ht(Ro,i),Ht(Co,n),Ht(xi,Ao),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}Gt(xi),Ht(xi,i)}function Cs(){Gt(xi),Gt(Co),Gt(Ro)}function Lh(n){zr(Ro.current);var i=zr(xi.current),o=xe(i,n.type);i!==o&&(Ht(Co,n),Ht(xi,o))}function zu(n){Co.current===n&&(Gt(xi),Gt(Co))}var jt=or(0);function za(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hu=[];function Vu(){for(var n=0;n<Hu.length;n++)Hu[n]._workInProgressVersionPrimary=null;Hu.length=0}var Ha=R.ReactCurrentDispatcher,Gu=R.ReactCurrentBatchConfig,Hr=0,Xt=null,nn=null,an=null,Va=!1,bo=!1,Po=0,iv=0;function _n(){throw Error(t(321))}function Wu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ri(n[o],i[o]))return!1;return!0}function ju(n,i,o,u,f,m){if(Hr=m,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=n===null||n.memoizedState===null?av:lv,n=o(u,f),bo){m=0;do{if(bo=!1,Po=0,25<=m)throw Error(t(301));m+=1,an=nn=null,i.updateQueue=null,Ha.current=uv,n=o(u,f)}while(bo)}if(Ha.current=ja,i=nn!==null&&nn.next!==null,Hr=0,an=nn=Xt=null,Va=!1,i)throw Error(t(300));return n}function Xu(){var n=Po!==0;return Po=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Xt.memoizedState=an=n:an=an.next=n,an}function Zn(){if(nn===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var i=an===null?Xt.memoizedState:an.next;if(i!==null)an=i,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},an===null?Xt.memoizedState=an=n:an=an.next=n}return an}function Lo(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=nn,f=u.baseQueue,m=o.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}u.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,u=u.baseState;var I=M=null,V=null,ne=m;do{var Se=ne.lane;if((Hr&Se)===Se)V!==null&&(V=V.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),u=ne.hasEagerState?ne.eagerState:n(u,ne.action);else{var Te={lane:Se,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};V===null?(I=V=Te,M=u):V=V.next=Te,Xt.lanes|=Se,Vr|=Se}ne=ne.next}while(ne!==null&&ne!==m);V===null?M=u:V.next=I,ri(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=V,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Xt.lanes|=m,Vr|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yu(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do m=n(m,M.action),M=M.next;while(M!==f);ri(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Nh(){}function Dh(n,i){var o=Xt,u=Zn(),f=i(),m=!ri(u.memoizedState,f);if(m&&(u.memoizedState=f,Ln=!0),u=u.queue,qu(Fh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,No(9,Ih.bind(null,o,u,f,i),void 0,null),ln===null)throw Error(t(349));(Hr&30)!==0||Uh(o,i,f)}return f}function Uh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ih(n,i,o,u){i.value=o,i.getSnapshot=u,Oh(i)&&kh(n)}function Fh(n,i,o){return o(function(){Oh(i)&&kh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ri(n,o)}catch{return!0}}function kh(n){var i=Fi(n,1);i!==null&&ui(i,n,1,-1)}function Bh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},i.queue=n,n=n.dispatch=ov.bind(null,Xt,n),[i.memoizedState,n]}function No(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function zh(){return Zn().memoizedState}function Ga(n,i,o,u){var f=yi();Xt.flags|=n,f.memoizedState=No(1|i,o,void 0,u===void 0?null:u)}function Wa(n,i,o,u){var f=Zn();u=u===void 0?null:u;var m=void 0;if(nn!==null){var M=nn.memoizedState;if(m=M.destroy,u!==null&&Wu(u,M.deps)){f.memoizedState=No(i,o,m,u);return}}Xt.flags|=n,f.memoizedState=No(1|i,o,m,u)}function Hh(n,i){return Ga(8390656,8,n,i)}function qu(n,i){return Wa(2048,8,n,i)}function Vh(n,i){return Wa(4,2,n,i)}function Gh(n,i){return Wa(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function jh(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4,4,Wh.bind(null,i,n),o)}function Ku(){}function Xh(n,i){var o=Zn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function $h(n,i){var o=Zn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Wu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Yh(n,i,o){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o):(ri(o,i)||(o=Tn(),Xt.lanes|=o,Vr|=o,n.baseState=!0),i)}function rv(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var u=Gu.transition;Gu.transition={};try{n(!1),i()}finally{St=o,Gu.transition=u}}function qh(){return Zn().memoizedState}function sv(n,i,o){var u=pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(n))Zh(i,o);else if(o=Ch(n,i,o,u),o!==null){var f=Cn();ui(o,n,u,f),Qh(o,i,u)}}function ov(n,i,o){var u=pr(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(n))Zh(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,I=m(M,o);if(f.hasEagerState=!0,f.eagerState=I,ri(I,M)){var V=i.interleaved;V===null?(f.next=f,Ou(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=Ch(n,i,f,u),o!==null&&(f=Cn(),ui(o,n,u,f),Qh(o,i,u))}}function Kh(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Zh(n,i){bo=Va=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Qh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ur(n,o)}}var ja={readContext:Kn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},av={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Hh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4194308,4,Wh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ga(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ga(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=yi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=sv.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Bh,useDebugValue:Ku,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Bh(!1),i=n[0];return n=rv.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Xt,f=yi();if(Wt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),ln===null)throw Error(t(349));(Hr&30)!==0||Uh(u,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Hh(Fh.bind(null,u,m,n),[n]),u.flags|=2048,No(9,Ih.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=yi(),i=ln.identifierPrefix;if(Wt){var o=Ii,u=Ui;o=(u&~(1<<32-Tt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Po++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=iv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lv={readContext:Kn,useCallback:Xh,useContext:Kn,useEffect:qu,useImperativeHandle:jh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:$h,useReducer:$u,useRef:zh,useState:function(){return $u(Lo)},useDebugValue:Ku,useDeferredValue:function(n){var i=Zn();return Yh(i,nn.memoizedState,n)},useTransition:function(){var n=$u(Lo)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1},uv={readContext:Kn,useCallback:Xh,useContext:Kn,useEffect:qu,useImperativeHandle:jh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:$h,useReducer:Yu,useRef:zh,useState:function(){return Yu(Lo)},useDebugValue:Ku,useDeferredValue:function(n){var i=Zn();return nn===null?i.memoizedState=n:Yh(i,nn.memoizedState,n)},useTransition:function(){var n=Yu(Lo)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Zu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xa={isMounted:function(n){return(n=n._reactInternals)?Li(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Cn(),f=pr(n),m=Oi(u,f);m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(ui(i,n,f,u),ka(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Cn(),f=pr(n),m=Oi(u,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=cr(n,m,f),i!==null&&(ui(i,n,f,u),ka(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Cn(),u=pr(n),f=Oi(o,u);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,u),i!==null&&(ui(i,n,u,o),ka(i,n,u))}};function Jh(n,i,o,u,f,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!_o(o,u)||!_o(f,m):!0}function ep(n,i,o){var u=!1,f=ar,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(f=Pn(i)?Fr:vn.current,u=i.contextTypes,m=(u=u!=null)?ys(n,f):ar),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function tp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Xa.enqueueReplaceState(i,i.state,null)}function Qu(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},ku(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Kn(m):(m=Pn(i)?Fr:vn.current,f.context=ys(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Zu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xa.enqueueReplaceState(f,f.state,null),Ba(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var o="",u=i;do o+=Q(u),u=u.return;while(u);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Ju(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ec(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function np(n,i,o){o=Oi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ja||(Ja=!0,mc=u),ec(n,i)},o}function ip(n,i,o){o=Oi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){ec(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ec(n,i),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function rp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new cv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=wv.bind(null,n,i,o),i.then(n,n))}function sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Oi(-1,1),i.tag=2,cr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var dv=R.ReactCurrentOwner,Ln=!1;function An(n,i,o,u){i.child=n===null?Ah(i,null,o,u):ws(i,n.child,o,u)}function ap(n,i,o,u,f){o=o.render;var m=i.ref;return As(i,f),u=ju(n,i,o,u,m,f),o=Xu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Wt&&o&&Ru(i),i.flags|=1,An(n,i,u,f),i.child)}function lp(n,i,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!Mc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,up(n,i,m,u,f)):(n=sl(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:_o,o(M,u)&&n.ref===i.ref)return ki(n,i,f)}return i.flags|=1,n=gr(m,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,o,u,f){if(n!==null){var m=n.memoizedProps;if(_o(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,ki(n,i,f)}return tc(n,i,o,u,f)}function cp(n,i,o){var u=i.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Ps,Hn),Hn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Ps,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ht(Ps,Hn),Hn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ht(Ps,Hn),Hn|=u;return An(n,i,f,o),i.child}function dp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tc(n,i,o,u,f){var m=Pn(o)?Fr:vn.current;return m=ys(i,m),As(i,f),o=ju(n,i,o,u,m,f),u=Xu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ki(n,i,f)):(Wt&&u&&Ru(i),i.flags|=1,An(n,i,o,f),i.child)}function fp(n,i,o,u,f){if(Pn(o)){var m=!0;Pa(i)}else m=!1;if(As(i,f),i.stateNode===null)Ya(n,i),ep(i,o,u),Qu(i,o,u,f),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var V=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=Pn(o)?Fr:vn.current,ne=ys(i,ne));var Se=o.getDerivedStateFromProps,Te=typeof Se=="function"||typeof M.getSnapshotBeforeUpdate=="function";Te||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||V!==ne)&&tp(i,M,u,ne),ur=!1;var ye=i.memoizedState;M.state=ye,Ba(i,u,M,f),V=i.memoizedState,I!==u||ye!==V||bn.current||ur?(typeof Se=="function"&&(Zu(i,o,Se,u),V=i.memoizedState),(I=ur||Jh(i,o,I,u,ye,V,ne))?(Te||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),M.props=u,M.state=V,M.context=ne,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Rh(n,i),I=i.memoizedProps,ne=i.type===i.elementType?I:oi(i.type,I),M.props=ne,Te=i.pendingProps,ye=M.context,V=o.contextType,typeof V=="object"&&V!==null?V=Kn(V):(V=Pn(o)?Fr:vn.current,V=ys(i,V));var He=o.getDerivedStateFromProps;(Se=typeof He=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Te||ye!==V)&&tp(i,M,u,V),ur=!1,ye=i.memoizedState,M.state=ye,Ba(i,u,M,f);var je=i.memoizedState;I!==Te||ye!==je||bn.current||ur?(typeof He=="function"&&(Zu(i,o,He,u),je=i.memoizedState),(ne=ur||Jh(i,o,ne,u,ye,je,V)||!1)?(Se||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,je,V),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,je,V)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=je),M.props=u,M.state=je,M.context=V,u=ne):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),u=!1)}return nc(n,i,o,u,m,f)}function nc(n,i,o,u,f,m){dp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&vh(i,o,!1),ki(n,i,m);u=i.stateNode,dv.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=ws(i,n.child,null,m),i.child=ws(i,null,I,m)):An(n,i,I,m),i.memoizedState=u.state,f&&vh(i,o,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mh(n,i.context,!1),Bu(n,i.containerInfo)}function pp(n,i,o,u,f){return Es(),Nu(f),i.flags|=256,An(n,i,o,u),i.child}var ic={dehydrated:null,treeContext:null,retryLane:0};function rc(n){return{baseLanes:n,cachePool:null,transitions:null}}function mp(n,i,o){var u=i.pendingProps,f=jt.current,m=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ht(jt,f&1),n===null)return Lu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=ol(M,u,0,null),n=Xr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=rc(o),i.memoizedState=ic,n):sc(i,M));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return fv(n,i,M,u,I,f,o);if(m){m=u.fallback,M=i.mode,f=n.child,I=f.sibling;var V={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=gr(f,V),u.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=gr(I,m):(m=Xr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?rc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=ic,u}return m=n.child,n=m.sibling,u=gr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function sc(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,o,u){return u!==null&&Nu(u),ws(i,n.child,null,o),n=sc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fv(n,i,o,u,f,m,M){if(o)return i.flags&256?(i.flags&=-257,u=Ju(Error(t(422))),$a(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=ol({mode:"visible",children:u.children},f,0,null),m=Xr(m,f,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ws(i,n.child,null,M),i.child.memoizedState=rc(M),i.memoizedState=ic,m);if((i.mode&1)===0)return $a(n,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=Ju(m,u,void 0),$a(n,i,M,u)}if(I=(M&n.childLanes)!==0,Ln||I){if(u=ln,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Fi(n,f),ui(u,n,f,-1))}return Sc(),u=Ju(Error(t(421))),$a(n,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Tv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,zn=sr(f.nextSibling),Bn=i,Wt=!0,si=null,n!==null&&(Yn[qn++]=Ui,Yn[qn++]=Ii,Yn[qn++]=Or,Ui=n.id,Ii=n.overflow,Or=i),i=sc(i,u.children),i.flags|=4096,i)}function gp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Fu(n.return,i,o)}function oc(n,i,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function vp(n,i,o){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(An(n,i,u.children,o),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gp(n,o,i);else if(n.tag===19)gp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ht(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&za(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),oc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&za(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}oc(i,!0,o,null,m);break;case"together":oc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ya(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=gr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=gr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function hv(n,i,o){switch(i.tag){case 3:hp(i),Es();break;case 5:Lh(i);break;case 1:Pn(i.type)&&Pa(i);break;case 4:Bu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Ht(Fa,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ht(jt,jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?mp(n,i,o):(Ht(jt,jt.current&1),n=ki(n,i,o),n!==null?n.sibling:null);Ht(jt,jt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return vp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ht(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,o)}return ki(n,i,o)}var _p,ac,xp,yp;_p=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ac=function(){},xp=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,zr(xi.current);var m=null;switch(o){case"input":f=dt(n,f),u=dt(n,u),m=[];break;case"select":f=le({},f,{value:void 0}),u=le({},u,{value:void 0}),m=[];break;case"textarea":f=Ut(n,f),u=Ut(n,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ca)}Ze(o,u);var M;o=null;for(ne in f)if(!u.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in u){var V=u[ne];if(I=f?.[ne],u.hasOwnProperty(ne)&&V!==I&&(V!=null||I!=null))if(ne==="style")if(I){for(M in I)!I.hasOwnProperty(M)||V&&V.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in V)V.hasOwnProperty(M)&&I[M]!==V[M]&&(o||(o={}),o[M]=V[M])}else o||(m||(m=[]),m.push(ne,o)),o=V;else ne==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(m=m||[]).push(ne,V)):ne==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ne,""+V):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(V!=null&&ne==="onScroll"&&Vt("scroll",n),m||I===V||(m=[])):(m=m||[]).push(ne,V))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},yp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Do(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function pv(n,i,o){var u=i.pendingProps;switch(bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Pn(i.type)&&ba(),xn(i),null;case 3:return u=i.stateNode,Cs(),Gt(bn),Gt(vn),Vu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(_c(si),si=null))),ac(n,i),xn(i),null;case 5:zu(i);var f=zr(Ro.current);if(o=i.type,n!==null&&i.stateNode!=null)xp(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=zr(xi.current),Ua(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[Eo]=m,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(f=0;f<yo.length;f++)Vt(yo[f],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":Ne(u,m),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",u);break;case"textarea":D(u,m),Vt("invalid",u)}Ze(o,m),f=null;for(var M in m)if(m.hasOwnProperty(M)){var I=m[M];M==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,I,n),f=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Vt("scroll",u)}switch(o){case"input":_t(u),Mt(u,m,!0);break;case"textarea":_t(u),Z(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ca)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[_i]=i,n[Eo]=u,_p(n,i,!1,!1),i.stateNode=n;e:{switch(M=De(o,u),o){case"dialog":Vt("cancel",n),Vt("close",n),f=u;break;case"iframe":case"object":case"embed":Vt("load",n),f=u;break;case"video":case"audio":for(f=0;f<yo.length;f++)Vt(yo[f],n);f=u;break;case"source":Vt("error",n),f=u;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),f=u;break;case"details":Vt("toggle",n),f=u;break;case"input":Ne(n,u),f=dt(n,u),Vt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=le({},u,{value:void 0}),Vt("invalid",n);break;case"textarea":D(n,u),f=Ut(n,u),Vt("invalid",n);break;default:f=u}Ze(o,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var V=I[m];m==="style"?Fe(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Xe(n,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&Ee(n,V):typeof V=="number"&&Ee(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Vt("scroll",n):V!=null&&P(n,m,V,M))}switch(o){case"input":_t(n),Mt(n,u,!1);break;case"textarea":_t(n),Z(n);break;case"option":u.value!=null&&n.setAttribute("value",""+$(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?At(n,!!u.multiple,m,!1):u.defaultValue!=null&&At(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ca)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)yp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=zr(Ro.current),zr(xi.current),Ua(i)){if(u=i.stateNode,o=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==o)&&(n=Bn,n!==null))switch(n.tag){case 3:Aa(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return xn(i),null;case 13:if(Gt(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),Es(),i.flags|=98560,m=!1;else if(m=Ua(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else si!==null&&(_c(si),si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?rn===0&&(rn=3):Sc())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Cs(),ac(n,i),n===null&&So(i.stateNode.containerInfo),xn(i),null;case 10:return Iu(i.type._context),xn(i),null;case 17:return Pn(i.type)&&ba(),xn(i),null;case 19:if(Gt(jt),m=i.memoizedState,m===null)return xn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Do(m,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=za(n),M!==null){for(i.flags|=128,Do(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&j()>Ls&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304)}else{if(!u)if(n=za(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Wt)return xn(i),null}else 2*j()-m.renderingStartTime>Ls&&o!==1073741824&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=j(),i.sibling=null,o=jt.current,Ht(jt,u?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return yc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mv(n,i){switch(bu(i),i.tag){case 1:return Pn(i.type)&&ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),Gt(bn),Gt(vn),Vu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return zu(i),null;case 13:if(Gt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(jt),null;case 4:return Cs(),null;case 10:return Iu(i.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var qa=!1,yn=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Yt(n,i,u)}else o.current=null}function lc(n,i,o){try{o()}catch(u){Yt(n,i,u)}}var Sp=!1;function vv(n,i){if(yu=ma,n=Jf(),fu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,I=-1,V=-1,ne=0,Se=0,Te=n,ye=null;t:for(;;){for(var He;Te!==o||f!==0&&Te.nodeType!==3||(I=M+f),Te!==m||u!==0&&Te.nodeType!==3||(V=M+u),Te.nodeType===3&&(M+=Te.nodeValue.length),(He=Te.firstChild)!==null;)ye=Te,Te=He;for(;;){if(Te===n)break t;if(ye===o&&++ne===f&&(I=M),ye===m&&++Se===u&&(V=M),(He=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=He}o=I===-1||V===-1?null:{start:I,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Su={focusedElem:n,selectionRange:o},ma=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ke=je.memoizedProps,Zt=je.memoizedState,K=i.stateNode,X=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:oi(i.type,Ke),Zt);K.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Yt(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return je=Sp,Sp=!1,je}function Uo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&lc(i,o,m)}f=f.next}while(f!==u)}}function Ka(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function uc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Mp(n){var i=n.alternate;i!==null&&(n.alternate=null,Mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Eo],delete i[Tu],delete i[J0],delete i[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function wp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ca));else if(u!==4&&(n=n.child,n!==null))for(cc(n,i,o),n=n.sibling;n!==null;)cc(n,i,o),n=n.sibling}function dc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(dc(n,i,o),n=n.sibling;n!==null;)dc(n,i,o),n=n.sibling}var dn=null,ai=!1;function dr(n,i,o){for(o=o.child;o!==null;)Tp(n,i,o),o=o.sibling}function Tp(n,i,o){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:yn||bs(o,i);case 6:var u=dn,f=ai;dn=null,dr(n,i,o),dn=u,ai=f,dn!==null&&(ai?(n=dn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(ai?(n=dn,o=o.stateNode,n.nodeType===8?wu(n.parentNode,o):n.nodeType===1&&wu(n,o),fo(n)):wu(dn,o.stateNode));break;case 4:u=dn,f=ai,dn=o.stateNode.containerInfo,ai=!0,dr(n,i,o),dn=u,ai=f;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&lc(o,i,M),f=f.next}while(f!==u)}dr(n,i,o);break;case 1:if(!yn&&(bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Yt(o,i,I)}dr(n,i,o);break;case 21:dr(n,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,dr(n,i,o),yn=u):dr(n,i,o);break;default:dr(n,i,o)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new gv),i.forEach(function(u){var f=Av.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function li(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var m=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:dn=I.stateNode,ai=!1;break e;case 3:dn=I.stateNode.containerInfo,ai=!0;break e;case 4:dn=I.stateNode.containerInfo,ai=!0;break e}I=I.return}if(dn===null)throw Error(t(160));Tp(m,M,f),dn=null,ai=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ne){Yt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),Si(n),u&4){try{Uo(3,n,n.return),Ka(3,n)}catch(Ke){Yt(n,n.return,Ke)}try{Uo(5,n,n.return)}catch(Ke){Yt(n,n.return,Ke)}}break;case 1:li(i,n),Si(n),u&512&&o!==null&&bs(o,o.return);break;case 5:if(li(i,n),Si(n),u&512&&o!==null&&bs(o,o.return),n.flags&32){var f=n.stateNode;try{Ee(f,"")}catch(Ke){Yt(n,n.return,Ke)}}if(u&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,I=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&tt(f,m),De(I,M);var ne=De(I,m);for(M=0;M<V.length;M+=2){var Se=V[M],Te=V[M+1];Se==="style"?Fe(f,Te):Se==="dangerouslySetInnerHTML"?Xe(f,Te):Se==="children"?Ee(f,Te):P(f,Se,Te,ne)}switch(I){case"input":qe(f,m);break;case"textarea":w(f,m);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?At(f,!!m.multiple,He,!1):ye!==!!m.multiple&&(m.defaultValue!=null?At(f,!!m.multiple,m.defaultValue,!0):At(f,!!m.multiple,m.multiple?[]:"",!1))}f[Eo]=m}catch(Ke){Yt(n,n.return,Ke)}}break;case 6:if(li(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ke){Yt(n,n.return,Ke)}}break;case 3:if(li(i,n),Si(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Ke){Yt(n,n.return,Ke)}break;case 4:li(i,n),Si(n);break;case 13:li(i,n),Si(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(pc=j())),u&4&&Ap(n);break;case 22:if(Se=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(ne=yn)||Se,li(i,n),yn=ne):li(i,n),Si(n),u&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!Se&&(n.mode&1)!==0)for(Ge=n,Se=n.child;Se!==null;){for(Te=Ge=Se;Ge!==null;){switch(ye=Ge,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Uo(4,ye,ye.return);break;case 1:bs(ye,ye.return);var je=ye.stateNode;if(typeof je.componentWillUnmount=="function"){u=ye,o=ye.return;try{i=u,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch(Ke){Yt(u,o,Ke)}}break;case 5:bs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Pp(Te);continue}}He!==null?(He.return=ye,Ge=He):Pp(Te)}Se=Se.sibling}e:for(Se=null,Te=n;;){if(Te.tag===5){if(Se===null){Se=Te;try{f=Te.stateNode,ne?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Te.stateNode,V=Te.memoizedProps.style,M=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=Me("display",M))}catch(Ke){Yt(n,n.return,Ke)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=ne?"":Te.memoizedProps}catch(Ke){Yt(n,n.return,Ke)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:li(i,n),Si(n),u&4&&Ap(n);break;case 21:break;default:li(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Ep(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Ee(f,""),u.flags&=-33);var m=wp(n);dc(n,m,f);break;case 3:case 4:var M=u.stateNode.containerInfo,I=wp(n);cc(n,I,M);break;default:throw Error(t(161))}}catch(V){Yt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function _v(n,i,o){Ge=n,Rp(n)}function Rp(n,i,o){for(var u=(n.mode&1)!==0;Ge!==null;){var f=Ge,m=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||qa;if(!M){var I=f.alternate,V=I!==null&&I.memoizedState!==null||yn;I=qa;var ne=yn;if(qa=M,(yn=V)&&!ne)for(Ge=f;Ge!==null;)M=Ge,V=M.child,M.tag===22&&M.memoizedState!==null?Lp(f):V!==null?(V.return=M,Ge=V):Lp(f);for(;m!==null;)Ge=m,Rp(m),m=m.sibling;Ge=f,qa=I,yn=ne}bp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ge=m):bp(n)}}function bp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ka(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:oi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ph(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ph(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var Se=ne.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&fo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&uc(i)}catch(ye){Yt(i,i.return,ye)}}if(i===n){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function Pp(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function Lp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ka(4,i)}catch(V){Yt(i,o,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(V){Yt(i,f,V)}}var m=i.return;try{uc(i)}catch(V){Yt(i,m,V)}break;case 5:var M=i.return;try{uc(i)}catch(V){Yt(i,M,V)}}}catch(V){Yt(i,i.return,V)}if(i===n){Ge=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ge=I;break}Ge=i.return}}var xv=Math.ceil,Za=R.ReactCurrentDispatcher,fc=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,Ct=0,ln=null,Jt=null,fn=0,Hn=0,Ps=or(0),rn=0,Io=null,Vr=0,Qa=0,hc=0,Fo=null,Nn=null,pc=0,Ls=1/0,Bi=null,Ja=!1,mc=null,fr=null,el=!1,hr=null,tl=0,Oo=0,gc=null,nl=-1,il=0;function Cn(){return(Ct&6)!==0?j():nl!==-1?nl:nl=j()}function pr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&fn!==0?fn&-fn:nv.transition!==null?(il===0&&(il=Tn()),il):(n=St,n!==0||(n=window.event,n=n===void 0?16:Df(n.type)),n)}function ui(n,i,o,u){if(50<Oo)throw Oo=0,gc=null,Error(t(185));Kt(n,o,u),((Ct&2)===0||n!==ln)&&(n===ln&&((Ct&2)===0&&(Qa|=o),rn===4&&mr(n,fn)),Dn(n,u),o===1&&Ct===0&&(i.mode&1)===0&&(Ls=j()+500,La&&lr()))}function Dn(n,i){var o=n.callbackNode;Dr(n,i);var u=ii(n,n===ln?fn:0);if(u===0)o!==null&&Y(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Y(o),i===1)n.tag===0?tv(Dp.bind(null,n)):_h(Dp.bind(null,n)),Z0(function(){(Ct&6)===0&&lr()}),o=null;else{switch(Tf(u)){case 1:o=Ue;break;case 4:o=We;break;case 16:o=ze;break;case 536870912:o=at;break;default:o=ze}o=Hp(o,Np.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Np(n,i){if(nl=-1,il=0,(Ct&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ns()&&n.callbackNode!==o)return null;var u=ii(n,n===ln?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=rl(n,u);else{i=u;var f=Ct;Ct|=2;var m=Ip();(ln!==n||fn!==i)&&(Bi=null,Ls=j()+500,Wr(n,i));do try{Mv();break}catch(I){Up(n,I)}while(!0);Uu(),Za.current=m,Ct=f,Jt!==null?i=0:(ln=null,fn=0,i=rn)}if(i!==0){if(i===2&&(f=zt(n),f!==0&&(u=f,i=vc(n,f))),i===1)throw o=Io,Wr(n,0),mr(n,u),Dn(n,j()),o;if(i===6)mr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!yv(f)&&(i=rl(n,u),i===2&&(m=zt(n),m!==0&&(u=m,i=vc(n,m))),i===1))throw o=Io,Wr(n,0),mr(n,u),Dn(n,j()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:jr(n,Nn,Bi);break;case 3:if(mr(n,u),(u&130023424)===u&&(i=pc+500-j(),10<i)){if(ii(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Eu(jr.bind(null,n,Nn,Bi),i);break}jr(n,Nn,Bi);break;case 4:if(mr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var M=31-Tt(u);m=1<<M,M=i[M],M>f&&(f=M),u&=~m}if(u=f,u=j()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*xv(u/1960))-u,10<u){n.timeoutHandle=Eu(jr.bind(null,n,Nn,Bi),u);break}jr(n,Nn,Bi);break;case 5:jr(n,Nn,Bi);break;default:throw Error(t(329))}}}return Dn(n,j()),n.callbackNode===o?Np.bind(null,n):null}function vc(n,i){var o=Fo;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&_c(i)),n}function _c(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function yv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!ri(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mr(n,i){for(i&=~hc,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Tt(i),u=1<<o;n[o]=-1,i&=~u}}function Dp(n){if((Ct&6)!==0)throw Error(t(327));Ns();var i=ii(n,0);if((i&1)===0)return Dn(n,j()),null;var o=rl(n,i);if(n.tag!==0&&o===2){var u=zt(n);u!==0&&(i=u,o=vc(n,u))}if(o===1)throw o=Io,Wr(n,0),mr(n,i),Dn(n,j()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,Nn,Bi),Dn(n,j()),null}function xc(n,i){var o=Ct;Ct|=1;try{return n(i)}finally{Ct=o,Ct===0&&(Ls=j()+500,La&&lr())}}function Gr(n){hr!==null&&hr.tag===0&&(Ct&6)===0&&Ns();var i=Ct;Ct|=1;var o=Qn.transition,u=St;try{if(Qn.transition=null,St=1,n)return n()}finally{St=u,Qn.transition=o,Ct=i,(Ct&6)===0&&lr()}}function yc(){Hn=Ps.current,Gt(Ps)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,K0(o)),Jt!==null)for(o=Jt.return;o!==null;){var u=o;switch(bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ba();break;case 3:Cs(),Gt(bn),Gt(vn),Vu();break;case 5:zu(u);break;case 4:Cs();break;case 13:Gt(jt);break;case 19:Gt(jt);break;case 10:Iu(u.type._context);break;case 22:case 23:yc()}o=o.return}if(ln=n,Jt=n=gr(n.current,null),fn=Hn=i,rn=0,Io=null,hc=Qa=Vr=0,Nn=Fo=null,Br!==null){for(i=0;i<Br.length;i++)if(o=Br[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=f,u.next=M}o.pending=u}Br=null}return n}function Up(n,i){do{var o=Jt;try{if(Uu(),Ha.current=ja,Va){for(var u=Xt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Va=!1}if(Hr=0,an=nn=Xt=null,bo=!1,Po=0,fc.current=null,o===null||o.return===null){rn=1,Io=i,Jt=null;break}e:{var m=n,M=o.return,I=o,V=i;if(i=fn,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ne=V,Se=I,Te=Se.tag;if((Se.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var He=sp(M);if(He!==null){He.flags&=-257,op(He,M,I,m,i),He.mode&1&&rp(m,ne,i),i=He,V=ne;var je=i.updateQueue;if(je===null){var Ke=new Set;Ke.add(V),i.updateQueue=Ke}else je.add(V);break e}else{if((i&1)===0){rp(m,ne,i),Sc();break e}V=Error(t(426))}}else if(Wt&&I.mode&1){var Zt=sp(M);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),op(Zt,M,I,m,i),Nu(Rs(V,I));break e}}m=V=Rs(V,I),rn!==4&&(rn=2),Fo===null?Fo=[m]:Fo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=np(m,V,i);bh(m,K);break e;case 1:I=V;var X=m.type,J=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(fr===null||!fr.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Pe=ip(m,I,i);bh(m,Pe);break e}}m=m.return}while(m!==null)}Op(o)}catch(Qe){i=Qe,Jt===o&&o!==null&&(Jt=o=o.return);continue}break}while(!0)}function Ip(){var n=Za.current;return Za.current=ja,n===null?ja:n}function Sc(){(rn===0||rn===3||rn===2)&&(rn=4),ln===null||(Vr&268435455)===0&&(Qa&268435455)===0||mr(ln,fn)}function rl(n,i){var o=Ct;Ct|=2;var u=Ip();(ln!==n||fn!==i)&&(Bi=null,Wr(n,i));do try{Sv();break}catch(f){Up(n,f)}while(!0);if(Uu(),Ct=o,Za.current=u,Jt!==null)throw Error(t(261));return ln=null,fn=0,rn}function Sv(){for(;Jt!==null;)Fp(Jt)}function Mv(){for(;Jt!==null&&!se();)Fp(Jt)}function Fp(n){var i=zp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Op(n):Jt=i,fc.current=null}function Op(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=pv(o,i,Hn),o!==null){Jt=o;return}}else{if(o=mv(o,i),o!==null){o.flags&=32767,Jt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);rn===0&&(rn=5)}function jr(n,i,o){var u=St,f=Qn.transition;try{Qn.transition=null,St=1,Ev(n,i,o,u)}finally{Qn.transition=f,St=u}return null}function Ev(n,i,o,u){do Ns();while(hr!==null);if((Ct&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(gn(n,m),n===ln&&(Jt=ln=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,Hp(ze,function(){return Ns(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var M=St;St=1;var I=Ct;Ct|=4,fc.current=null,vv(n,o),Cp(o,n),G0(Su),ma=!!yu,Su=yu=null,n.current=o,_v(o),ae(),Ct=I,St=M,Qn.transition=m}else n.current=o;if(el&&(el=!1,hr=n,tl=f),m=n.pendingLanes,m===0&&(fr=null),Dt(o.stateNode),Dn(n,j()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Ja)throw Ja=!1,n=mc,mc=null,n;return(tl&1)!==0&&n.tag!==0&&Ns(),m=n.pendingLanes,(m&1)!==0?n===gc?Oo++:(Oo=0,gc=n):Oo=0,lr(),null}function Ns(){if(hr!==null){var n=Tf(tl),i=Qn.transition,o=St;try{if(Qn.transition=null,St=16>n?16:n,hr===null)var u=!1;else{if(n=hr,hr=null,tl=0,(Ct&6)!==0)throw Error(t(331));var f=Ct;for(Ct|=4,Ge=n.current;Ge!==null;){var m=Ge,M=m.child;if((Ge.flags&16)!==0){var I=m.deletions;if(I!==null){for(var V=0;V<I.length;V++){var ne=I[V];for(Ge=ne;Ge!==null;){var Se=Ge;switch(Se.tag){case 0:case 11:case 15:Uo(8,Se,m)}var Te=Se.child;if(Te!==null)Te.return=Se,Ge=Te;else for(;Ge!==null;){Se=Ge;var ye=Se.sibling,He=Se.return;if(Mp(Se),Se===ne){Ge=null;break}if(ye!==null){ye.return=He,Ge=ye;break}Ge=He}}}var je=m.alternate;if(je!==null){var Ke=je.child;if(Ke!==null){je.child=null;do{var Zt=Ke.sibling;Ke.sibling=null,Ke=Zt}while(Ke!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Ge=M;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Uo(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Ge=K;break e}Ge=m.return}}var X=n.current;for(Ge=X;Ge!==null;){M=Ge;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,Ge=J;else e:for(M=X;Ge!==null;){if(I=Ge,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ka(9,I)}}catch(Qe){Yt(I,I.return,Qe)}if(I===M){Ge=null;break e}var Pe=I.sibling;if(Pe!==null){Pe.return=I.return,Ge=Pe;break e}Ge=I.return}}if(Ct=f,lr(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Je,n)}catch{}u=!0}return u}finally{St=o,Qn.transition=i}}return!1}function kp(n,i,o){i=Rs(o,i),i=np(n,i,1),n=cr(n,i,1),i=Cn(),n!==null&&(Kt(n,1,i),Dn(n,i))}function Yt(n,i,o){if(n.tag===3)kp(n,n,o);else for(;i!==null;){if(i.tag===3){kp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=Rs(o,n),n=ip(i,n,1),i=cr(i,n,1),n=Cn(),i!==null&&(Kt(i,1,n),Dn(i,n));break}}i=i.return}}function wv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&o,ln===n&&(fn&o)===o&&(rn===4||rn===3&&(fn&130023424)===fn&&500>j()-pc?Wr(n,0):hc|=o),Dn(n,i)}function Bp(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var o=Cn();n=Fi(n,i),n!==null&&(Kt(n,i,o),Dn(n,o))}function Tv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(n,o)}function Av(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Bp(n,o)}var zp;zp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Ln=!1,hv(n,i,o);Ln=(n.flags&131072)!==0}else Ln=!1,Wt&&(i.flags&1048576)!==0&&xh(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ya(n,i),n=i.pendingProps;var f=ys(i,vn.current);As(i,o),f=ju(null,i,u,n,f,o);var m=Xu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Pa(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ku(i),f.updater=Xa,i.stateNode=f,f._reactInternals=i,Qu(i,u,n,o),i=nc(null,i,u,!0,m,o)):(i.tag=0,Wt&&m&&Ru(i),An(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ya(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Rv(u),n=oi(u,n),f){case 0:i=tc(null,i,u,n,o);break e;case 1:i=fp(null,i,u,n,o);break e;case 11:i=ap(null,i,u,n,o);break e;case 14:i=lp(null,i,u,oi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),tc(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),fp(n,i,u,f,o);case 3:e:{if(hp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,f=m.element,Rh(n,i),Ba(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Rs(Error(t(423)),i),i=pp(n,i,u,o,f);break e}else if(u!==f){f=Rs(Error(t(424)),i),i=pp(n,i,u,o,f);break e}else for(zn=sr(i.stateNode.containerInfo.firstChild),Bn=i,Wt=!0,si=null,o=Ah(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),u===f){i=ki(n,i,o);break e}An(n,i,u,o)}i=i.child}return i;case 5:return Lh(i),n===null&&Lu(i),u=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,M=f.children,Mu(u,f)?M=null:m!==null&&Mu(u,m)&&(i.flags|=32),dp(n,i),An(n,i,M,o),i.child;case 6:return n===null&&Lu(i),null;case 13:return mp(n,i,o);case 4:return Bu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ws(i,null,u,o):An(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),ap(n,i,u,f,o);case 7:return An(n,i,i.pendingProps,o),i.child;case 8:return An(n,i,i.pendingProps.children,o),i.child;case 12:return An(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,M=f.value,Ht(Fa,u._currentValue),u._currentValue=M,m!==null)if(ri(m.value,M)){if(m.children===f.children&&!bn.current){i=ki(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){M=m.child;for(var V=I.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=Oi(-1,o&-o),V.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var Se=ne.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),ne.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Fu(m.return,o,i),I.lanes|=o;break}V=V.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),Fu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}An(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,As(i,o),f=Kn(f),u=u(f),i.flags|=1,An(n,i,u,o),i.child;case 14:return u=i.type,f=oi(u,i.pendingProps),f=oi(u.type,f),lp(n,i,u,f,o);case 15:return up(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Ya(n,i),i.tag=1,Pn(u)?(n=!0,Pa(i)):n=!1,As(i,o),ep(i,u,f),Qu(i,u,f,o),nc(null,i,u,!0,n,o);case 19:return vp(n,i,o);case 22:return cp(n,i,o)}throw Error(t(156,i.tag))};function Hp(n,i){return A(n,i)}function Cv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,o,u){return new Cv(n,i,o,u)}function Mc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Rv(n){if(typeof n=="function")return Mc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===ge)return 14}return 2}function gr(n,i){var o=n.alternate;return o===null?(o=Jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function sl(n,i,o,u,f,m){var M=2;if(u=n,typeof n=="function")Mc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case F:return Xr(o.children,f,m,i);case H:M=8,f|=8;break;case b:return n=Jn(12,o,i,f|2),n.elementType=b,n.lanes=m,n;case te:return n=Jn(13,o,i,f),n.elementType=te,n.lanes=m,n;case ce:return n=Jn(19,o,i,f),n.elementType=ce,n.lanes=m,n;case me:return ol(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case O:M=9;break e;case oe:M=11;break e;case ge:M=14;break e;case de:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(M,o,i,f),i.elementType=n,i.type=u,i.lanes=m,i}function Xr(n,i,o,u){return n=Jn(7,n,u,i),n.lanes=o,n}function ol(n,i,o,u){return n=Jn(22,n,u,i),n.elementType=me,n.lanes=o,n.stateNode={isHidden:!1},n}function Ec(n,i,o){return n=Jn(6,n,null,i),n.lanes=o,n}function wc(n,i,o){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function bv(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tc(n,i,o,u,f,m,M,I,V){return n=new bv(n,i,o,I,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(m),n}function Pv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Vp(n){if(!n)return ar;n=n._reactInternals;e:{if(Li(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Pn(o))return gh(n,o,i)}return i}function Gp(n,i,o,u,f,m,M,I,V){return n=Tc(o,u,!0,n,f,m,M,I,V),n.context=Vp(null),o=n.current,u=Cn(),f=pr(o),m=Oi(u,f),m.callback=i??null,cr(o,m,f),n.current.lanes=f,Kt(n,f,u),Dn(n,u),n}function al(n,i,o,u){var f=i.current,m=Cn(),M=pr(f);return o=Vp(o),i.context===null?i.context=o:i.pendingContext=o,i=Oi(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=cr(f,i,M),n!==null&&(ui(n,f,M,m),ka(n,f,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ac(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function Lv(){return null}var jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cc(n){this._internalRoot=n}ul.prototype.render=Cc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));al(n,i,null,null)},ul.prototype.unmount=Cc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){al(null,n,null,null)}),i[Ni]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<nr.length&&i!==0&&i<nr[o].priority;o++);nr.splice(o,0,n),o===0&&Lf(n)}};function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function Nv(n,i,o,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var ne=ll(M);m.call(ne)}}var M=Gp(i,u,n,0,null,!1,!1,"",Xp);return n._reactRootContainer=M,n[Ni]=M.current,So(n.nodeType===8?n.parentNode:n),Gr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var I=u;u=function(){var ne=ll(V);I.call(ne)}}var V=Tc(n,0,!1,null,null,!1,!1,"",Xp);return n._reactRootContainer=V,n[Ni]=V.current,So(n.nodeType===8?n.parentNode:n),Gr(function(){al(i,V,o,u)}),V}function dl(n,i,o,u,f){var m=o._reactRootContainer;if(m){var M=m;if(typeof f=="function"){var I=f;f=function(){var V=ll(M);I.call(V)}}al(i,M,n,f)}else M=Nv(o,i,n,f,u);return ll(M)}Af=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=tn(i.pendingLanes);o!==0&&(Ur(i,o|1),Dn(i,j()),(Ct&6)===0&&(Ls=j()+500,lr()))}break;case 13:Gr(function(){var u=Fi(n,1);if(u!==null){var f=Cn();ui(u,n,1,f)}}),Ac(n,1)}},Jl=function(n){if(n.tag===13){var i=Fi(n,134217728);if(i!==null){var o=Cn();ui(i,n,134217728,o)}Ac(n,134217728)}},Cf=function(n){if(n.tag===13){var i=pr(n),o=Fi(n,i);if(o!==null){var u=Cn();ui(o,n,i,u)}Ac(n,i)}},Rf=function(){return St},bf=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},Re=function(n,i,o){switch(i){case"input":if(qe(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=Ra(u);if(!f)throw Error(t(90));et(u),qe(u,f)}}}break;case"textarea":w(n,o);break;case"select":i=o.value,i!=null&&At(n,!!o.multiple,i,!1)}},ft=xc,It=Gr;var Dv={usingClientEntryPoint:!1,Events:[wo,_s,Ra,_e,Ye,xc]},ko={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=da(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Je=fl.inject(Uv),ut=fl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(i))throw Error(t(200));return Pv(n,i,null,o)},Un.createRoot=function(n,i){if(!Rc(n))throw Error(t(299));var o=!1,u="",f=jp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Tc(n,1,!1,null,null,o,!1,u,f),n[Ni]=i.current,So(n.nodeType===8?n.parentNode:n),new Cc(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=da(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Gr(n)},Un.hydrate=function(n,i,o){if(!cl(i))throw Error(t(200));return dl(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!Rc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,m="",M=jp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Gp(i,null,n,1,o??null,f,!1,m,M),n[Ni]=i.current,So(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ul(i)},Un.render=function(n,i,o){if(!cl(i))throw Error(t(200));return dl(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},Un.unstable_batchedUpdates=xc,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var em;function Wv(){if(em)return Lc.exports;em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lc.exports=Gv(),Lc.exports}var tm;function jv(){if(tm)return hl;tm=1;var r=Wv();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var Xv=jv();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nm="popstate";function $v(r={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return pd("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Yo(a)}return qv(e,t,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ai(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yv(){return Math.random().toString(36).substring(2,10)}function im(r,e){return{usr:r.state,key:r.key,idx:e}}function pd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?no(e):e,state:t,key:e&&e.key||s||Yv()}}function Yo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function no(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function qv(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function _(){d="POP";let y=g(),v=y==null?null:y-p;p=y,h&&h({action:d,location:T.location,delta:v})}function x(y,v){d="PUSH";let L=pd(T.location,y,v);p=g()+1;let P=im(L,p),R=T.createHref(L);try{c.pushState(P,"",R)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(R)}l&&h&&h({action:d,location:T.location,delta:1})}function S(y,v){d="REPLACE";let L=pd(T.location,y,v);p=g();let P=im(L,p),R=T.createHref(L);c.replaceState(P,"",R),l&&h&&h({action:d,location:T.location,delta:0})}function E(y){return Kv(y)}let T={get action(){return d},get location(){return r(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(nm,_),h=y,()=>{a.removeEventListener(nm,_),h=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let v=E(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return c.go(y)}};return T}function Kv(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),$t(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Yo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function og(r,e,t="/"){return Zv(r,e,t,!1)}function Zv(r,e,t,s){let a=typeof e=="string"?no(e):e,l=qi(a.pathname||"/",t);if(l==null)return null;let c=ag(r);Qv(c);let d=null;for(let h=0;d==null&&h<c.length;++h){let p=u_(l);d=a_(c[h],p,s)}return d}function ag(r,e=[],t=[],s="",a=!1){let l=(c,d,h=a,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&h)return;$t(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=$i([s,g.relativePath]),x=t.concat(g);c.children&&c.children.length>0&&($t(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),ag(c.children,e,x,_,h)),!(c.path==null&&!c.index)&&e.push({path:_,score:s_(_,c.index),routesMeta:x})};return r.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))l(c,d);else for(let h of lg(c.path))l(c,d,!0,h)}),e}function lg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=lg(s.join("/")),d=[];return d.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&d.push(...c),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function Qv(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:o_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Jv=/^:[\w-]+$/,e_=3,t_=2,n_=1,i_=10,r_=-2,rm=r=>r==="*";function s_(r,e){let t=r.split("/"),s=t.length;return t.some(rm)&&(s+=r_),e&&(s+=t_),t.filter(a=>!rm(a)).reduce((a,l)=>a+(Jv.test(l)?e_:l===""?n_:i_),s)}function o_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function a_(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let d=0;d<s.length;++d){let h=s[d],p=d===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",_=Wl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),x=h.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=Wl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:$i([l,_.pathname]),pathnameBase:h_($i([l,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(l=$i([l,_.pathnameBase]))}return c}function Wl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=l_(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let E=d[x]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[x];return _&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function l_(r,e=!1,t=!0){Ai(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,h)=>(s.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function u_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ai(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function qi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function c_(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?no(r):r;return{pathname:t?t.startsWith("/")?t:d_(t,e):e,search:p_(s),hash:m_(a)}}function d_(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Uc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ug(r){let e=f_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function cg(r,e,t,s=!1){let a;typeof r=="string"?a=no(r):(a={...r},$t(!a.pathname||!a.pathname.includes("?"),Uc("?","pathname","search",a)),$t(!a.pathname||!a.pathname.includes("#"),Uc("#","pathname","hash",a)),$t(!a.search||!a.search.includes("#"),Uc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),_-=1;a.pathname=x.join("/")}d=_>=0?e[_]:"/"}let h=c_(a,d),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var $i=r=>r.join("/").replace(/\/\/+/g,"/"),h_=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),p_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,m_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function g_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var dg=["POST","PUT","PATCH","DELETE"];new Set(dg);var v_=["GET",...dg];new Set(v_);var io=ue.createContext(null);io.displayName="DataRouter";var Yl=ue.createContext(null);Yl.displayName="DataRouterState";ue.createContext(!1);var fg=ue.createContext({isTransitioning:!1});fg.displayName="ViewTransition";var __=ue.createContext(new Map);__.displayName="Fetchers";var x_=ue.createContext(null);x_.displayName="Await";var bi=ue.createContext(null);bi.displayName="Navigation";var Jo=ue.createContext(null);Jo.displayName="Location";var Ki=ue.createContext({outlet:null,matches:[],isDataRoute:!1});Ki.displayName="Route";var sf=ue.createContext(null);sf.displayName="RouteError";function y_(r,{relative:e}={}){$t(ea(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ue.useContext(bi),{hash:a,pathname:l,search:c}=ta(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$i([t,l])),s.createHref({pathname:d,search:c,hash:a})}function ea(){return ue.useContext(Jo)!=null}function as(){return $t(ea(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(Jo).location}var hg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pg(r){ue.useContext(bi).static||ue.useLayoutEffect(r)}function of(){let{isDataRoute:r}=ue.useContext(Ki);return r?D_():S_()}function S_(){$t(ea(),"useNavigate() may be used only in the context of a <Router> component.");let r=ue.useContext(io),{basename:e,navigator:t}=ue.useContext(bi),{matches:s}=ue.useContext(Ki),{pathname:a}=as(),l=JSON.stringify(ug(s)),c=ue.useRef(!1);return pg(()=>{c.current=!0}),ue.useCallback((h,p={})=>{if(Ai(c.current,hg),!c.current)return;if(typeof h=="number"){t.go(h);return}let g=cg(h,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:$i([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,a,r])}ue.createContext(null);function ta(r,{relative:e}={}){let{matches:t}=ue.useContext(Ki),{pathname:s}=as(),a=JSON.stringify(ug(t));return ue.useMemo(()=>cg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function M_(r,e){return mg(r,e)}function mg(r,e,t,s,a){$t(ea(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ue.useContext(bi),{matches:c}=ue.useContext(Ki),d=c[c.length-1],h=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let L=_&&_.path||"";gg(p,!_||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=as(),S;if(e){let L=typeof e=="string"?no(e):e;$t(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),S=L}else S=x;let E=S.pathname||"/",T=E;if(g!=="/"){let L=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let y=og(r,{pathname:T});Ai(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ai(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=C_(y&&y.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:$i([g,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:$i([g,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),c,t,s,a);return e&&v?ue.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},v):v}function E_(){let r=N_(),e=g_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:l},"ErrorBoundary")," or"," ",ue.createElement("code",{style:l},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),t?ue.createElement("pre",{style:a},t):null,c)}var w_=ue.createElement(E_,null),T_=class extends ue.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?ue.createElement(Ki.Provider,{value:this.props.routeContext},ue.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function A_({routeContext:r,match:e,children:t}){let s=ue.useContext(io);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(Ki.Provider,{value:r},t)}function C_(r,e=[],t=null,s=null,a=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,c=t?.errors;if(c!=null){let p=l.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);$t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,h=-1;if(t)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:_,errors:x}=t,S=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,_)=>{let x,S=!1,E=null,T=null;t&&(x=c&&g.route.id?c[g.route.id]:void 0,E=g.route.errorElement||w_,d&&(h<0&&_===0?(gg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):h===_&&(S=!0,T=g.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,_+1)),v=()=>{let L;return x?L=E:S?L=T:g.route.Component?L=ue.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,ue.createElement(A_,{match:g,routeContext:{outlet:p,matches:y,isDataRoute:t!=null},children:L})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?ue.createElement(T_,{location:t.location,revalidation:t.revalidation,component:E,error:x,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:s}):v()},null)}function af(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function R_(r){let e=ue.useContext(io);return $t(e,af(r)),e}function b_(r){let e=ue.useContext(Yl);return $t(e,af(r)),e}function P_(r){let e=ue.useContext(Ki);return $t(e,af(r)),e}function lf(r){let e=P_(r),t=e.matches[e.matches.length-1];return $t(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function L_(){return lf("useRouteId")}function N_(){let r=ue.useContext(sf),e=b_("useRouteError"),t=lf("useRouteError");return r!==void 0?r:e.errors?.[t]}function D_(){let{router:r}=R_("useNavigate"),e=lf("useNavigate"),t=ue.useRef(!1);return pg(()=>{t.current=!0}),ue.useCallback(async(a,l={})=>{Ai(t.current,hg),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var sm={};function gg(r,e,t){!e&&!sm[r]&&(sm[r]=!0,Ai(!1,t))}ue.memo(U_);function U_({routes:r,future:e,state:t,unstable_onError:s}){return mg(r,void 0,t,s,e)}function Xo(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function I_({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){$t(!ea(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),d=ue.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=no(t));let{pathname:h="/",search:p="",hash:g="",state:_=null,key:x="default"}=t,S=ue.useMemo(()=>{let E=qi(h,c);return E==null?null:{location:{pathname:E,search:p,hash:g,state:_,key:x},navigationType:s}},[c,h,p,g,_,x,s]);return Ai(S!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ue.createElement(bi.Provider,{value:d},ue.createElement(Jo.Provider,{children:e,value:S}))}function F_({children:r,location:e}){return M_(md(r),e)}function md(r,e=[]){let t=[];return ue.Children.forEach(r,(s,a)=>{if(!ue.isValidElement(s))return;let l=[...e,a];if(s.type===ue.Fragment){t.push.apply(t,md(s.props.children,l));return}$t(s.type===Xo,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=md(s.props.children,l)),t.push(c)}),t}var Fl="get",Ol="application/x-www-form-urlencoded";function ql(r){return r!=null&&typeof r.tagName=="string"}function O_(r){return ql(r)&&r.tagName.toLowerCase()==="button"}function k_(r){return ql(r)&&r.tagName.toLowerCase()==="form"}function B_(r){return ql(r)&&r.tagName.toLowerCase()==="input"}function z_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function H_(r,e){return r.button===0&&(!e||e==="_self")&&!z_(r)}var pl=null;function V_(){if(pl===null)try{new FormData(document.createElement("form"),0),pl=!1}catch{pl=!0}return pl}var G_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(r){return r!=null&&!G_.has(r)?(Ai(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ol}"`),null):r}function W_(r,e){let t,s,a,l,c;if(k_(r)){let d=r.getAttribute("action");s=d?qi(d,e):null,t=r.getAttribute("method")||Fl,a=Ic(r.getAttribute("enctype"))||Ol,l=new FormData(r)}else if(O_(r)||B_(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||d.getAttribute("action");if(s=h?qi(h,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||Fl,a=Ic(r.getAttribute("formenctype"))||Ic(d.getAttribute("enctype"))||Ol,l=new FormData(d,r),!V_()){let{name:p,type:g,value:_}=r;if(g==="image"){let x=p?`${p}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else p&&l.append(p,_)}}else{if(ql(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Fl,s=null,a=Ol,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function j_(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&qi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function X_(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $_(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Y_(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await X_(l,t);return c.links?c.links():[]}return[]}));return Q_(s.flat(1).filter($_).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function om(r,e,t,s,a,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,d=(h,p)=>t[p].pathname!==h.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==h.params["*"];return l==="assets"?e.filter((h,p)=>c(h,p)||d(h,p)):l==="data"?e.filter((h,p)=>{let g=s.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||d(h,p))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function q_(r,e,{includeHydrateFallback:t}={}){return K_(r.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function K_(r){return[...new Set(r)]}function Z_(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Q_(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(Z_(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function vg(){let r=ue.useContext(io);return uf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function J_(){let r=ue.useContext(Yl);return uf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var cf=ue.createContext(void 0);cf.displayName="FrameworkContext";function _g(){let r=ue.useContext(cf);return uf(r,"You must render this element inside a <HydratedRouter> element"),r}function ex(r,e){let t=ue.useContext(cf),[s,a]=ue.useState(!1),[l,c]=ue.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,x=ue.useRef(null);ue.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=v=>{v.forEach(L=>{c(L.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),ue.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,x,{}]:[l,x,{onFocus:zo(d,S),onBlur:zo(h,E),onMouseEnter:zo(p,S),onMouseLeave:zo(g,E),onTouchStart:zo(_,S)}]:[!1,x,{}]}function zo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function tx({page:r,...e}){let{router:t}=vg(),s=ue.useMemo(()=>og(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?ue.createElement(ix,{page:r,matches:s,...e}):null}function nx(r){let{manifest:e,routeModules:t}=_g(),[s,a]=ue.useState([]);return ue.useEffect(()=>{let l=!1;return Y_(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function ix({page:r,matches:e,...t}){let s=as(),{manifest:a,routeModules:l}=_g(),{basename:c}=vg(),{loaderData:d,matches:h}=J_(),p=ue.useMemo(()=>om(r,e,h,a,s,"data"),[r,e,h,a,s]),g=ue.useMemo(()=>om(r,e,h,a,s,"assets"),[r,e,h,a,s]),_=ue.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,T=!1;if(e.forEach(v=>{let L=a.routes[v.route.id];!L||!L.hasLoader||(!p.some(P=>P.route.id===v.route.id)&&v.route.id in d&&l[v.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:E.add(v.route.id))}),E.size===0)return[];let y=j_(r,c,"data");return T&&E.size>0&&y.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[c,d,s,a,p,e,r,l]),x=ue.useMemo(()=>q_(g,a),[g,a]),S=nx(g);return ue.createElement(ue.Fragment,null,_.map(E=>ue.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),x.map(E=>ue.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),S.map(({key:E,link:T})=>ue.createElement("link",{key:E,nonce:t.nonce,...T})))}function rx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var xg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xg&&(window.__reactRouterVersion="7.8.2")}catch{}function sx({basename:r,children:e,window:t}){let s=ue.useRef();s.current==null&&(s.current=$v({window:t,v5Compat:!0}));let a=s.current,[l,c]=ue.useState({action:a.action,location:a.location}),d=ue.useCallback(h=>{ue.startTransition(()=>c(h))},[c]);return ue.useLayoutEffect(()=>a.listen(d),[a,d]),ue.createElement(I_,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var yg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sg=ue.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:h,to:p,preventScrollReset:g,viewTransition:_,...x},S){let{basename:E}=ue.useContext(bi),T=typeof p=="string"&&yg.test(p),y,v=!1;if(typeof p=="string"&&T&&(y=p,xg))try{let b=new URL(window.location.href),C=p.startsWith("//")?new URL(b.protocol+p):new URL(p),O=qi(C.pathname,E);C.origin===b.origin&&O!=null?p=O+C.search+C.hash:v=!0}catch{Ai(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=y_(p,{relative:a}),[P,R,z]=ex(s,x),N=ux(p,{replace:c,state:d,target:h,preventScrollReset:g,relative:a,viewTransition:_});function F(b){e&&e(b),b.defaultPrevented||N(b)}let H=ue.createElement("a",{...x,...z,href:y||L,onClick:v||l?e:F,ref:rx(S,R),target:h,"data-discover":!T&&t==="render"?"true":void 0});return P&&!T?ue.createElement(ue.Fragment,null,H,ue.createElement(tx,{page:L})):H});Sg.displayName="Link";var ox=ue.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:h,...p},g){let _=ta(c,{relative:p.relative}),x=as(),S=ue.useContext(Yl),{navigator:E,basename:T}=ue.useContext(bi),y=S!=null&&px(_)&&d===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,L=x.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(L=L.toLowerCase(),P=P?P.toLowerCase():null,v=v.toLowerCase()),P&&T&&(P=qi(P,T)||P);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let z=L===v||!a&&L.startsWith(v)&&L.charAt(R)==="/",N=P!=null&&(P===v||!a&&P.startsWith(v)&&P.charAt(v.length)==="/"),F={isActive:z,isPending:N,isTransitioning:y},H=z?e:void 0,b;typeof s=="function"?b=s(F):b=[s,z?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(F):l;return ue.createElement(Sg,{...p,"aria-current":H,className:b,ref:g,style:C,to:c,viewTransition:d},typeof h=="function"?h(F):h)});ox.displayName="NavLink";var ax=ue.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Fl,action:d,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:_,...x},S)=>{let E=fx(),T=hx(d,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&yg.test(d),L=P=>{if(h&&h(P),P.defaultPrevented)return;P.preventDefault();let R=P.nativeEvent.submitter,z=R?.getAttribute("formmethod")||c;E(R||P.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:_})};return ue.createElement("form",{ref:S,method:y,action:T,onSubmit:s?h:L,...x,"data-discover":!v&&r==="render"?"true":void 0})});ax.displayName="Form";function lx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mg(r){let e=ue.useContext(io);return $t(e,lx(r)),e}function ux(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=of(),h=as(),p=ta(r,{relative:l});return ue.useCallback(g=>{if(H_(g,e)){g.preventDefault();let _=t!==void 0?t:Yo(h)===Yo(p);d(r,{replace:_,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[h,d,p,t,s,e,r,a,l,c])}var cx=0,dx=()=>`__${String(++cx)}__`;function fx(){let{router:r}=Mg("useSubmit"),{basename:e}=ue.useContext(bi),t=L_();return ue.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:h,body:p}=W_(s,e);if(a.navigate===!1){let g=a.fetcherKey||dx();await r.fetch(g,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function hx(r,{relative:e}={}){let{basename:t}=ue.useContext(bi),s=ue.useContext(Ki);$t(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...ta(r||".",{relative:e})},c=as();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),h=d.getAll("index");if(h.some(g=>g==="")){d.delete("index"),h.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$i([t,l.pathname])),Yo(l)}function px(r,{relative:e}={}){let t=ue.useContext(fg);$t(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Mg("useViewTransitionState"),a=ta(r,{relative:e});if(!t.isTransitioning)return!1;let l=qi(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=qi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Wl(a.pathname,c)!=null||Wl(a.pathname,l)!=null}const am="http://localhost:5000",mx=!1;function gx({children:r}){return U.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r})}function vt({label:r,children:e}){return U.jsxs("div",{className:"flex flex-col",children:[U.jsx(gx,{children:r}),e]})}function vx(){const[r,e]=ue.useState({shipperName:"",chartererName:"",charterType:"Voyage",vesselName:"",dwt:"",builtYear:"",flag:"",vesselClass:"",imoNumber:"",cargoNature:"BulkDry",cargoType:"",cargoQtyMt:"",cargoPctTolerance:"",stowageFactor:"",loadPorts:"",dischargePorts:"",laycanStart:"",laycanEnd:"",cancelingDate:"",freightType:"per_mt",freightAmount:"",freightTerms:"FIOT",paymentTerms:"",loadingRate:"",dischargeRate:"",loadingTerms:"",dischargeTerms:"",demurragePerDay:"",despatchPerDay:"",commissionPct:"2.5",arbitrationPlace:"London",governingLaw:"English",bunkerType:"",costResponsibility:"",tradingLimits:"",specialClauses:"",otherClauses:`1 Safe Port / 1 Safe Berth each, Always Accessible
NOR to be tendered whether in berth or not (WIBON)
Weather Working Days (WWD)`,cpBaseForm:""}),[t,s]=ue.useState(!1),{cpSuggested:a,cpReason:l}=ue.useMemo(()=>{const _=r.charterType,x=r.cargoNature;let S="GENCON",E="Fallback to GENCON (general dry bulk voyage).";return x==="HeavyLift"?(S="HEAVYCON",E="Heavy lift/project cargo."):_==="Bareboat"?(S="BARECON",E="Bareboat charter (demise)."):_==="Voyage"&&x==="BulkDry"?(S="GENCON",E="Voyage + dry bulk cargo."):_==="Voyage"&&x==="LiquidTanker"?(S="ASBATANKVOY",E="Voyage + liquid/tanker cargo."):_==="Time"&&x==="BulkDry"?(S="NYPE",E="Time charter + dry bulk."):_==="Time"&&x==="LiquidTanker"&&(S="SHELLTIME",E="Time charter + tanker."),{cpSuggested:S,cpReason:E}},[r.charterType,r.cargoNature]);ue.useEffect(()=>{t||e(_=>({..._,cpBaseForm:a}))},[a,t]);const c=_=>{const{name:x,value:S}=_.target;e(E=>({...E,[x]:S}))},d=ue.useMemo(()=>{const _=(v,L=0)=>v!==""&&!Number.isNaN(+v)?Number(v).toLocaleString(void 0,{maximumFractionDigits:L,minimumFractionDigits:L}):"",x=v=>v?new Date(v+"T00:00:00").toLocaleDateString(void 0,{year:"numeric",month:"long",day:"2-digit"}):"",S=r.cargoQtyMt?`${_(r.cargoQtyMt)} MT${r.cargoPctTolerance?` (+/- ${_(r.cargoPctTolerance)}%)`:""}`:"",E=r.freightType==="lumpsum"?`USD ${_(r.freightAmount)} lumpsum${r.freightTerms?`, ${r.freightTerms}`:""}`:`USD ${_(r.freightAmount)} per MT${r.freightTerms?`, ${r.freightTerms}`:""}`,T=["Fixture Recap","",`Charter Type: ${r.charterType||""} | Cargo Category: ${r.cargoNature||""}`,r.shipperName||r.chartererName?`Parties: Shipper ${r.shipperName}; Charterer ${r.chartererName}`:null,`Vessel: ${r.vesselName} – ${_(r.dwt)} DWT – Built ${r.builtYear} – ${r.flag} Flag – Class ${r.vesselClass}`,r.imoNumber?`IMO: ${r.imoNumber}`:null,`Cargo: ${S} ${r.cargoType}`.trim(),`Load Port: ${r.loadPorts}`,`Discharge Port: ${r.dischargePorts}`,`Laycan: ${x(r.laycanStart)} – ${x(r.laycanEnd)}`,r.cancelingDate?`Canceling Date: ${x(r.cancelingDate)}`:null,`Freight: ${E}`,r.paymentTerms?`Payment: ${r.paymentTerms}`:null,r.stowageFactor?`Stowage Factor: ${r.stowageFactor}`:null,r.loadingRate?`Loading Rate/Terms: ${r.loadingRate}${r.loadingTerms?`, ${r.loadingTerms}`:""}`:null,r.dischargeRate?`Discharge Rate/Terms: ${r.dischargeRate}${r.dischargeTerms?`, ${r.dischargeTerms}`:""}`:null,`Demurrage: USD ${_(r.demurragePerDay)} per day`,`Despatch: USD ${_(r.despatchPerDay)} per day${r.despatchPerDay&&r.demurragePerDay&&+r.despatchPerDay===+r.demurragePerDay/2?" (half demurrage)":""}`,`Commission: ${r.commissionPct}% to Brokers`,`Arbitration: ${r.arbitrationPlace}, ${r.governingLaw} Law`,r.bunkerType?`Bunkers: ${r.bunkerType}`:null,r.costResponsibility?`Costs: ${r.costResponsibility}`:null,r.tradingLimits?`Trading Limits: ${r.tradingLimits}`:null,"","Other terms:"],y=[...r.specialClauses?.split(/\n+/).filter(Boolean)||[],...r.otherClauses?.split(/\n+/).filter(Boolean)||[]].map(v=>`- ${v}`);return T.filter(Boolean).concat(y).join(`
`)},[r,a,l]),h=async()=>{try{const _={...r,cpSuggested:a,cpReason:l,dwt:r.dwt?Number(r.dwt):void 0,builtYear:r.builtYear?Number(r.builtYear):void 0,cargoQtyMt:r.cargoQtyMt?Number(r.cargoQtyMt):void 0,cargoPctTolerance:r.cargoPctTolerance?Number(r.cargoPctTolerance):void 0,loadPorts:r.loadPorts?r.loadPorts.split(/,\s*/).filter(Boolean):[],dischargePorts:r.dischargePorts?r.dischargePorts.split(/,\s*/).filter(Boolean):[],laycanStart:r.laycanStart||void 0,laycanEnd:r.laycanEnd||void 0,cancelingDate:r.cancelingDate||void 0,freightAmount:r.freightAmount?Number(r.freightAmount):void 0,demurragePerDay:r.demurragePerDay?Number(r.demurragePerDay):void 0,despatchPerDay:r.despatchPerDay?Number(r.despatchPerDay):void 0,commissionPct:r.commissionPct?Number(r.commissionPct):void 0,specialClauses:r.specialClauses?r.specialClauses.split(/\n+/).filter(Boolean):[],otherClauses:r.otherClauses?r.otherClauses.split(/\n+/).filter(Boolean):[],recap:d},x=await fetch(`${am}/api/fixtures`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}),S=await x.json();x.ok?alert("Saved! ID: "+S._id):(console.error("Server response:",S),alert("Error: "+(S.error||"Unknown server error")))}catch(_){console.error("Fetch error:",_.message),alert("Error: Failed to connect to server")}},p=async()=>{try{await navigator.clipboard.writeText(d),alert("Recap copied to clipboard")}catch(_){console.error("Clipboard error:",_.message),alert("Error: Failed to copy recap")}},g=async()=>{try{const _={...r,cpSuggested:a,cpReason:l,recap:d},x=await fetch(`${am}/api/generate-cp`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}),S=x.headers.get("content-type")||"application/octet-stream",E=x.headers.get("content-disposition")||"",T=await x.blob();if(!x.ok){const R=await T.text();throw new Error(R||"Failed to generate CP")}let y="CharterParty.pdf";const v=/filename="?([^";]+)"?/i.exec(E);v&&v[1]&&(y=v[1]);const L=URL.createObjectURL(T),P=document.createElement("a");P.href=L,P.download=y,document.body.appendChild(P),P.click(),P.remove(),URL.revokeObjectURL(L)}catch(_){console.error("Generate CP error:",_.message),alert("Error: "+_.message)}};return U.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6",children:U.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6",children:[U.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[U.jsx("h1",{className:"text-2xl font-bold text-blue-800 mb-6",children:"Fixture Input"}),U.jsxs("div",{className:"space-y-4",children:[U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Charter Type",children:U.jsxs("select",{name:"charterType",value:r.charterType,onChange:c,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[U.jsx("option",{value:"Voyage",children:"Voyage"}),U.jsx("option",{value:"Time",children:"Time"}),U.jsx("option",{value:"Bareboat",children:"Bareboat"})]})}),U.jsx(vt,{label:"Cargo Category",children:U.jsxs("select",{name:"cargoNature",value:r.cargoNature,onChange:c,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[U.jsx("option",{value:"BulkDry",children:"Bulk Dry"}),U.jsx("option",{value:"LiquidTanker",children:"Liquid/Tanker"}),U.jsx("option",{value:"HeavyLift",children:"Heavy Lift"})]})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Shipper Name",children:U.jsx("input",{name:"shipperName",value:r.shipperName,onChange:c,placeholder:"ABC Shipping",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Charterer Name",children:U.jsx("input",{name:"chartererName",value:r.chartererName,onChange:c,placeholder:"XYZ Trading",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Base CP Template (suggested)",children:U.jsxs("select",{name:"cpBaseForm",value:r.cpBaseForm||a,onChange:_=>{s(!0),c(_)},className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[U.jsx("option",{value:"GENCON",children:"GENCON"}),U.jsx("option",{value:"ASBATANKVOY",children:"ASBATANKVOY"}),U.jsx("option",{value:"NYPE",children:"NYPE"}),U.jsx("option",{value:"SHELLTIME",children:"SHELLTIME"}),U.jsx("option",{value:"BARECON",children:"BARECON"}),U.jsx("option",{value:"HEAVYCON",children:"HEAVYCON"})]})}),U.jsx(vt,{label:"Why suggested",children:U.jsx("div",{className:"w-full p-2 bg-gray-100 border border-gray-300 rounded-md",children:l})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Vessel Name",children:U.jsx("input",{name:"vesselName",value:r.vesselName,onChange:c,placeholder:"MV Ocean Star",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"DWT",children:U.jsx("input",{name:"dwt",value:r.dwt,onChange:c,type:"number",placeholder:"55000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Built Year",children:U.jsx("input",{name:"builtYear",value:r.builtYear,onChange:c,type:"number",placeholder:"2010",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Flag",children:U.jsx("input",{name:"flag",value:r.flag,onChange:c,placeholder:"Panama",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Class",children:U.jsx("input",{name:"vesselClass",value:r.vesselClass,onChange:c,placeholder:"NK/DNV/LR",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"IMO Number",children:U.jsx("input",{name:"imoNumber",value:r.imoNumber,onChange:c,placeholder:"IMO 1234567",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Cargo Type",children:U.jsx("input",{name:"cargoType",value:r.cargoType,onChange:c,placeholder:"Wheat",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Quantity MT",children:U.jsx("input",{name:"cargoQtyMt",value:r.cargoQtyMt,onChange:c,type:"number",placeholder:"50000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Tolerance %",children:U.jsx("input",{name:"cargoPctTolerance",value:r.cargoPctTolerance,onChange:c,type:"number",placeholder:"10",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Stowage Factor",children:U.jsx("input",{name:"stowageFactor",value:r.stowageFactor,onChange:c,placeholder:"e.g., 1.15 m³/mt",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Load Port(s) (comma separated)",children:U.jsx("input",{name:"loadPorts",value:r.loadPorts,onChange:c,placeholder:"Kandla, India",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Discharge Port(s) (comma separated)",children:U.jsx("input",{name:"dischargePorts",value:r.dischargePorts,onChange:c,placeholder:"Houston, USA",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Laycan Start",children:U.jsx("input",{name:"laycanStart",value:r.laycanStart,onChange:c,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Laycan End",children:U.jsx("input",{name:"laycanEnd",value:r.laycanEnd,onChange:c,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Canceling Date",children:U.jsx("input",{name:"cancelingDate",value:r.cancelingDate,onChange:c,type:"date",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx("div",{})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Freight Type",children:U.jsxs("select",{name:"freightType",value:r.freightType,onChange:c,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[U.jsx("option",{value:"per_mt",children:"USD per MT"}),U.jsx("option",{value:"lumpsum",children:"USD lumpsum"})]})}),U.jsx(vt,{label:"Freight Amount",children:U.jsx("input",{name:"freightAmount",value:r.freightAmount,onChange:c,type:"number",placeholder:"42",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Freight Terms",children:U.jsx("input",{name:"freightTerms",value:r.freightTerms,onChange:c,placeholder:"FIOT",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Payment Terms",children:U.jsx("input",{name:"paymentTerms",value:r.paymentTerms,onChange:c,placeholder:"e.g., 95% payable within 3 banking days",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Loading Rate",children:U.jsx("input",{name:"loadingRate",value:r.loadingRate,onChange:c,placeholder:"e.g., 10,000 MT/day",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Discharge Rate",children:U.jsx("input",{name:"dischargeRate",value:r.dischargeRate,onChange:c,placeholder:"e.g., 12,000 MT/day",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Loading Terms",children:U.jsx("input",{name:"loadingTerms",value:r.loadingTerms,onChange:c,placeholder:"e.g., SSHEXUU",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Discharge Terms",children:U.jsx("input",{name:"dischargeTerms",value:r.dischargeTerms,onChange:c,placeholder:"e.g., WWD",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Demurrage (USD/day)",children:U.jsx("input",{name:"demurragePerDay",value:r.demurragePerDay,onChange:c,type:"number",placeholder:"15000",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Despatch (USD/day)",children:U.jsx("input",{name:"despatchPerDay",value:r.despatchPerDay,onChange:c,type:"number",placeholder:"7500",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Commission %",children:U.jsx("input",{name:"commissionPct",value:r.commissionPct,onChange:c,type:"number",step:"0.1",placeholder:"2.5",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx("div",{})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Arbitration Place",children:U.jsx("input",{name:"arbitrationPlace",value:r.arbitrationPlace,onChange:c,placeholder:"London",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Governing Law",children:U.jsx("input",{name:"governingLaw",value:r.governingLaw,onChange:c,placeholder:"English",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Bunkers",children:U.jsx("input",{name:"bunkerType",value:r.bunkerType,onChange:c,placeholder:"e.g., VLSFO/MGO, ROB on delivery/redelivery",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:"Costs Responsibility",children:U.jsx("input",{name:"costResponsibility",value:r.costResponsibility,onChange:c,placeholder:"e.g., port charges/dues for charterers",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})})]}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsx(vt,{label:"Trading Limits",children:U.jsx("input",{name:"tradingLimits",value:r.tradingLimits,onChange:c,placeholder:"e.g., Worldwide excl. war risk areas",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx("div",{})]}),U.jsx(vt,{label:U.jsxs("span",{children:["Other Key Clauses ",U.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:"one per line"})]}),children:U.jsx("textarea",{name:"otherClauses",value:r.otherClauses,onChange:c,rows:6,className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsx(vt,{label:U.jsxs("span",{children:["Special Clauses ",U.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:"one per line"})]}),children:U.jsx("textarea",{name:"specialClauses",value:r.specialClauses,onChange:c,rows:4,placeholder:"e.g., NOR: WIBON; WCCON; WIFPON",className:"w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"})}),U.jsxs("div",{className:"flex gap-4 mt-6",children:[U.jsx("button",{onClick:p,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Copy Recap"}),U.jsx("button",{onClick:h,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Save"}),U.jsx("button",{onClick:g,className:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Generate CP"})]})]})]}),U.jsxs("div",{className:"bg-white shadow-lg rounded-lg p-6",children:[U.jsx("h1",{className:"text-2xl font-bold text-blue-800 mb-6",children:"Recap Preview"}),U.jsx("pre",{className:"bg-gray-50 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap border border-gray-200",children:d})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="179",_x=0,lm=1,xx=2,Eg=1,ff=2,ji=3,br=0,En=1,hi=2,Tr=0,Ys=1,um=2,cm=3,dm=4,yx=5,ts=100,Sx=101,Mx=102,Ex=103,wx=104,Tx=200,Ax=201,Cx=202,Rx=203,gd=204,vd=205,bx=206,Px=207,Lx=208,Nx=209,Dx=210,Ux=211,Ix=212,Fx=213,Ox=214,_d=0,xd=1,yd=2,Zs=3,Sd=4,Md=5,Ed=6,wd=7,hf=0,kx=1,Bx=2,Ar=0,zx=1,Hx=2,Vx=3,Gx=4,Wx=5,jx=6,Xx=7,wg=300,Qs=301,Js=302,Td=303,Ad=304,Kl=306,Cd=1e3,is=1001,Rd=1002,vi=1003,$x=1004,ml=1005,Ei=1006,Fc=1007,rs=1008,Ci=1009,Tg=1010,Ag=1011,qo=1012,pf=1013,ss=1014,Xi=1015,na=1016,mf=1017,gf=1018,Ko=1020,Cg=35902,Rg=1021,bg=1022,mi=1023,Zo=1026,Qo=1027,Pg=1028,vf=1029,Lg=1030,_f=1031,xf=1033,kl=33776,Bl=33777,zl=33778,Hl=33779,bd=35840,Pd=35841,Ld=35842,Nd=35843,Dd=36196,Ud=37492,Id=37496,Fd=37808,Od=37809,kd=37810,Bd=37811,zd=37812,Hd=37813,Vd=37814,Gd=37815,Wd=37816,jd=37817,Xd=37818,$d=37819,Yd=37820,qd=37821,Vl=36492,Kd=36494,Zd=36495,Ng=36283,Qd=36284,Jd=36285,ef=36286,Yx=3200,qx=3201,Dg=0,Kx=1,wr="",ti="srgb",eo="srgb-linear",jl="linear",kt="srgb",Ds=7680,fm=519,Zx=512,Qx=513,Jx=514,Ug=515,ey=516,ty=517,ny=518,iy=519,hm=35044,pm="300 es",wi=2e3,Xl=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=Math.PI/180,tf=180/Math.PI;function ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function ry(r,e){return(r%e+e)%e}function kc(r,e,t){return(1-t)*r+t*e}function Ho(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,t=0){Nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ra{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,d){let h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];const x=l[c+0],S=l[c+1],E=l[c+2],T=l[c+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(_!==T||h!==x||p!==S||g!==E){let y=1-d;const v=h*x+p*S+g*E+_*T,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const z=Math.sqrt(P),N=Math.atan2(z,v*L);y=Math.sin(y*N)/z,d=Math.sin(d*N)/z}const R=d*L;if(h=h*y+x*R,p=p*y+S*R,g=g*y+E*R,_=_*y+T*R,y===1-d){const z=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=z,p*=z,g*=z,_*=z}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,a,l,c){const d=s[a],h=s[a+1],p=s[a+2],g=s[a+3],_=l[c],x=l[c+1],S=l[c+2],E=l[c+3];return e[t]=d*E+g*_+h*S-p*x,e[t+1]=h*E+g*x+p*_-d*S,e[t+2]=p*E+g*S+d*x-h*_,e[t+3]=g*E-d*_-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,p=d(s/2),g=d(a/2),_=d(l/2),x=h(s/2),S=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"YZX":this._x=x*g*_+p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_-x*S*E;break;case"XZY":this._x=x*g*_-p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],d=t[5],h=t[9],p=t[2],g=t[6],_=t[10],x=s+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,d=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+c*d+a*p-l*h,this._y=a*g+c*h+l*d-s*p,this._z=l*g+c*p+s*h-a*d,this._w=c*g-s*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,d),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*_+this._w*x,this._x=s*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,p=2*(c*a-d*s),g=2*(d*t-l*a),_=2*(l*s-c*t);return this.x=t+h*p+c*_-d*g,this.y=s+h*g+d*p-l*_,this.z=a+h*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*c-s*h,this.z=s*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new ie,mm=new ra;class pt{constructor(e,t,s,a,l,c,d,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,h,p)}set(e,t,s,a,l,c,d,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[3],h=s[6],p=s[1],g=s[4],_=s[7],x=s[2],S=s[5],E=s[8],T=a[0],y=a[3],v=a[6],L=a[1],P=a[4],R=a[7],z=a[2],N=a[5],F=a[8];return l[0]=c*T+d*L+h*z,l[3]=c*y+d*P+h*N,l[6]=c*v+d*R+h*F,l[1]=p*T+g*L+_*z,l[4]=p*y+g*P+_*N,l[7]=p*v+g*R+_*F,l[2]=x*T+S*L+E*z,l[5]=x*y+S*P+E*N,l[8]=x*v+S*R+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*d*p-s*l*g+s*d*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],g=e[8],_=g*c-d*p,x=d*h-g*l,S=p*l-c*h,E=t*_+s*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(a*p-g*s)*T,e[2]=(d*s-a*c)*T,e[3]=x*T,e[4]=(g*t-a*h)*T,e[5]=(a*l-d*t)*T,e[6]=S*T,e[7]=(s*h-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*d)+c+e,-a*p,a*h,-a*(-p*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new pt;function Ig(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $l(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sy(){const r=$l("canvas");return r.style.display="block",r}const gm={};function qs(r){r in gm||(gm[r]=!0,console.warn(r))}function oy(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const vm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ay(){const r={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===kt&&(a.r=Yi(a.r),a.g=Yi(a.g),a.b=Yi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?jl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eo]:{primaries:e,whitePoint:s,transfer:jl,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Lt=ay();function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class ly{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Us===void 0&&(Us=$l("canvas")),Us.width=e.width,Us.height=e.height;const a=Us.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Us}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$l("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Yi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Yi(t[s]/255)*255):t[s]=Yi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uy=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Hc(a[c].image)):l.push(Hc(a[c]))}else l=Hc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ly.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;const Vc=new ie;class Fn extends ro{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=is,a=is,l=Ei,c=rs,d=mi,h=Ci,p=Fn.DEFAULT_ANISOTROPY,g=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ia(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=wg;Fn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,s=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],g=h[4],_=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],v=h[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,R=(S+1)/2,z=(v+1)/2,N=(g+x)/4,F=(_+T)/4,H=(E+y)/4;return P>R&&P>z?P<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(P),a=N/s,l=F/s):R>z?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=N/a,l=H/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=F/l,a=H/l),this.set(s,a,l,t),this}let L=Math.sqrt((y-E)*(y-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dy extends ro{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new Fn(a);this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new yf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends dy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Fg extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vi,this.minFilter=vi,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fy extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vi,this.minFilter=vi,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ci):ci.fromBufferAttribute(l,c),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gl.copy(s.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),vl.subVectors(this.max,Vo),Is.subVectors(e.a,Vo),Fs.subVectors(e.b,Vo),Os.subVectors(e.c,Vo),_r.subVectors(Fs,Is),xr.subVectors(Os,Fs),$r.subVectors(Is,Os);let t=[0,-_r.z,_r.y,0,-xr.z,xr.y,0,-$r.z,$r.y,_r.z,0,-_r.x,xr.z,0,-xr.x,$r.z,0,-$r.x,-_r.y,_r.x,0,-xr.y,xr.x,0,-$r.y,$r.x,0];return!Gc(t,Is,Fs,Os,vl)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Is,Fs,Os,vl))?!1:(_l.crossVectors(_r,xr),t=[_l.x,_l.y,_l.z],Gc(t,Is,Fs,Os,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ci=new ie,gl=new sa,Is=new ie,Fs=new ie,Os=new ie,_r=new ie,xr=new ie,$r=new ie,Vo=new ie,vl=new ie,_l=new ie,Yr=new ie;function Gc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Yr.fromArray(r,l);const d=a.x*Math.abs(Yr.x)+a.y*Math.abs(Yr.y)+a.z*Math.abs(Yr.z),h=e.dot(Yr),p=t.dot(Yr),g=s.dot(Yr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>d)return!1}return!0}const hy=new sa,Go=new ie,Wc=new ie;class Sf{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):hy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Go,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Wc)),this.expandByPoint(Go.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new ie,jc=new ie,xl=new ie,yr=new ie,Xc=new ie,yl=new ie,$c=new ie;class py{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){jc.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(jc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(xl),d=yr.dot(this.direction),h=-yr.dot(xl),p=yr.lengthSq(),g=Math.abs(1-c*c);let _,x,S,E;if(g>0)if(_=c*h-d,x=c*d-h,E=l*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,S=_*(_+c*x+2*d)+x*(c*_+x+2*h)+p}else x=l,_=Math.max(0,-(c*x+d)),S=-_*_+x*(x+2*h)+p;else x=-l,_=Math.max(0,-(c*x+d)),S=-_*_+x*(x+2*h)+p;else x<=-E?(_=Math.max(0,-(-c*l+d)),x=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p):x<=E?(_=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(_=Math.max(0,-(c*l+d)),x=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+x*(x+2*h)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+d)),S=-_*_+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(jc).addScaledVector(xl,x),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=s-c,h=s+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,d,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){Xc.subVectors(t,e),yl.subVectors(s,e),$c.crossVectors(Xc,yl);let c=this.direction.dot($c),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;yr.subVectors(this.origin,e);const h=d*this.direction.dot(yl.crossVectors(yr,yl));if(h<0)return null;const p=d*this.direction.dot(Xc.cross(yr));if(p<0||h+p>c)return null;const g=-d*yr.dot($c);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,s,a,l,c,d,h,p,g,_,x,S,E,T,y){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,h,p,g,_,x,S,E,T,y)}set(e,t,s,a,l,c,d,h,p,g,_,x,S,E,T,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=c,v[9]=d,v[13]=h,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*_,E=d*g,T=d*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=S+E*p,t[5]=x-T*p,t[9]=-d*h,t[2]=T-x*p,t[6]=E+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*_,E=p*g,T=p*_;t[0]=x+T*d,t[4]=E*d-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=S*d-E,t[6]=T+x*d,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*_,E=p*g,T=p*_;t[0]=x-T*d,t[4]=-c*_,t[8]=E+S*d,t[1]=S+E*d,t[5]=c*g,t[9]=T-x*d,t[2]=-c*p,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*_,E=d*g,T=d*_;t[0]=h*g,t[4]=E*p-S,t[8]=x*p+T,t[1]=h*_,t[5]=T*p+x,t[9]=S*p-E,t[2]=-p,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,E=d*h,T=d*p;t[0]=h*g,t[4]=T-x*_,t[8]=E*_+S,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-p*g,t[6]=S*_+E,t[10]=x-T*_}else if(e.order==="XZY"){const x=c*h,S=c*p,E=d*h,T=d*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=x*_+T,t[5]=c*g,t[9]=S*_-E,t[2]=E*_-S,t[6]=d*g,t[10]=T*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(my,e,gy)}lookAt(e,t,s){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Sr.crossVectors(s,Vn),Sr.lengthSq()===0&&(Math.abs(s.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Sr.crossVectors(s,Vn)),Sr.normalize(),Sl.crossVectors(Vn,Sr),a[0]=Sr.x,a[4]=Sl.x,a[8]=Vn.x,a[1]=Sr.y,a[5]=Sl.y,a[9]=Vn.y,a[2]=Sr.z,a[6]=Sl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[4],h=s[8],p=s[12],g=s[1],_=s[5],x=s[9],S=s[13],E=s[2],T=s[6],y=s[10],v=s[14],L=s[3],P=s[7],R=s[11],z=s[15],N=a[0],F=a[4],H=a[8],b=a[12],C=a[1],O=a[5],oe=a[9],te=a[13],ce=a[2],ge=a[6],de=a[10],me=a[14],G=a[3],fe=a[7],le=a[11],k=a[15];return l[0]=c*N+d*C+h*ce+p*G,l[4]=c*F+d*O+h*ge+p*fe,l[8]=c*H+d*oe+h*de+p*le,l[12]=c*b+d*te+h*me+p*k,l[1]=g*N+_*C+x*ce+S*G,l[5]=g*F+_*O+x*ge+S*fe,l[9]=g*H+_*oe+x*de+S*le,l[13]=g*b+_*te+x*me+S*k,l[2]=E*N+T*C+y*ce+v*G,l[6]=E*F+T*O+y*ge+v*fe,l[10]=E*H+T*oe+y*de+v*le,l[14]=E*b+T*te+y*me+v*k,l[3]=L*N+P*C+R*ce+z*G,l[7]=L*F+P*O+R*ge+z*fe,l[11]=L*H+P*oe+R*de+z*le,l[15]=L*b+P*te+R*me+z*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],v=e[15];return E*(+l*h*_-a*p*_-l*d*x+s*p*x+a*d*S-s*h*S)+T*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*g-l*h*g)+y*(+t*p*_-t*d*S-l*c*_+s*c*S+l*d*g-s*p*g)+v*(-a*d*g-t*h*_+t*d*x+a*c*_-s*c*x+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],v=e[15],L=_*y*p-T*x*p+T*h*S-d*y*S-_*h*v+d*x*v,P=E*x*p-g*y*p-E*h*S+c*y*S+g*h*v-c*x*v,R=g*T*p-E*_*p+E*d*S-c*T*S-g*d*v+c*_*v,z=E*_*h-g*T*h-E*d*x+c*T*x+g*d*y-c*_*y,N=t*L+s*P+a*R+l*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(T*x*l-_*y*l-T*a*S+s*y*S+_*a*v-s*x*v)*F,e[2]=(d*y*l-T*h*l+T*a*p-s*y*p-d*a*v+s*h*v)*F,e[3]=(_*h*l-d*x*l-_*a*p+s*x*p+d*a*S-s*h*S)*F,e[4]=P*F,e[5]=(g*y*l-E*x*l+E*a*S-t*y*S-g*a*v+t*x*v)*F,e[6]=(E*h*l-c*y*l-E*a*p+t*y*p+c*a*v-t*h*v)*F,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*S+t*h*S)*F,e[8]=R*F,e[9]=(E*_*l-g*T*l-E*s*S+t*T*S+g*s*v-t*_*v)*F,e[10]=(c*T*l-E*d*l+E*s*p-t*T*p-c*s*v+t*d*v)*F,e[11]=(g*d*l-c*_*l-g*s*p+t*_*p+c*s*S-t*d*S)*F,e[12]=z*F,e[13]=(g*T*a-E*_*a+E*s*x-t*T*x-g*s*y+t*_*y)*F,e[14]=(E*d*a-c*T*a-E*s*h+t*T*h+c*s*y-t*d*y)*F,e[15]=(c*_*a-g*d*a+g*s*h-t*_*h-c*s*x+t*d*x)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,d=e.y,h=e.z,p=l*c,g=l*d;return this.set(p*c+s,p*d-a*h,p*h+a*d,0,p*d+a*h,g*d+s,g*h-a*c,0,p*h-a*d,g*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,p=l+l,g=c+c,_=d+d,x=l*p,S=l*g,E=l*_,T=c*g,y=c*_,v=d*_,L=h*p,P=h*g,R=h*_,z=s.x,N=s.y,F=s.z;return a[0]=(1-(T+v))*z,a[1]=(S+R)*z,a[2]=(E-P)*z,a[3]=0,a[4]=(S-R)*N,a[5]=(1-(x+v))*N,a[6]=(y+L)*N,a[7]=0,a[8]=(E+P)*F,a[9]=(y-L)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=ks.set(a[0],a[1],a[2]).length();const c=ks.set(a[4],a[5],a[6]).length(),d=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],di.copy(this);const p=1/l,g=1/c,_=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,t.setFromRotationMatrix(di),s.x=l,s.y=c,s.z=d,this}makePerspective(e,t,s,a,l,c,d=wi,h=!1){const p=this.elements,g=2*l/(t-e),_=2*l/(s-a),x=(t+e)/(t-e),S=(s+a)/(s-a);let E,T;if(h)E=l/(c-l),T=c*l/(c-l);else if(d===wi)E=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(d===Xl)E=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,c,d=wi,h=!1){const p=this.elements,g=2/(t-e),_=2/(s-a),x=-(t+e)/(t-e),S=-(s+a)/(s-a);let E,T;if(h)E=1/(c-l),T=c/(c-l);else if(d===wi)E=-2/(c-l),T=-(c+l)/(c-l);else if(d===Xl)E=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new ie,di=new Qt,my=new ie(0,0,0),gy=new ie(1,1,1),Sr=new ie,Sl=new ie,Vn=new ie,xm=new Qt,ym=new ra;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],p=a[5],g=a[9],_=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vy=0;const Sm=new ie,Bs=new ra,Vi=new Qt,Ml=new ie,Wo=new ie,_y=new ie,xy=new ra,Mm=new ie(1,0,0),Em=new ie(0,1,0),wm=new ie(0,0,1),Tm={type:"added"},yy={type:"removed"},zs={type:"childadded",child:null},Yc={type:"childremoved",child:null};class hn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new ie,t=new Ri,s=new ra,a=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qt},normalMatrix:{value:new pt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Wo,Ml,this.up):Vi.lookAt(Ml,Wo,this.up),this.quaternion.setFromRotationMatrix(Vi),a&&(Vi.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yy),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,_y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,xy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}hn.DEFAULT_UP=new ie(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ie,Gi=new ie,qc=new ie,Wi=new ie,Hs=new ie,Vs=new ie,Am=new ie,Kc=new ie,Zc=new ie,Qc=new ie,Jc=new qt,ed=new qt,td=new qt;class pi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),fi.subVectors(e,t),a.cross(fi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){fi.subVectors(a,t),Gi.subVectors(s,t),qc.subVectors(e,t);const c=fi.dot(fi),d=fi.dot(Gi),h=fi.dot(qc),p=Gi.dot(Gi),g=Gi.dot(qc),_=c*p-d*d;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*h-d*g)*x,E=(c*g-d*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,s,a,l,c,d,h){return this.getBarycoord(e,t,s,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(c,Wi.y),h.addScaledVector(d,Wi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return Jc.setScalar(0),ed.setScalar(0),td.setScalar(0),Jc.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,s),td.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Jc,l.x),c.addScaledVector(ed,l.y),c.addScaledVector(td,l.z),c}static isFrontFacing(e,t,s,a){return fi.subVectors(s,t),Gi.subVectors(e,t),fi.cross(Gi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,d;Hs.subVectors(a,s),Vs.subVectors(l,s),Kc.subVectors(e,s);const h=Hs.dot(Kc),p=Vs.dot(Kc);if(h<=0&&p<=0)return t.copy(s);Zc.subVectors(e,a);const g=Hs.dot(Zc),_=Vs.dot(Zc);if(g>=0&&_<=g)return t.copy(a);const x=h*_-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Hs,c);Qc.subVectors(e,l);const S=Hs.dot(Qc),E=Vs.dot(Qc);if(E>=0&&S<=E)return t.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(s).addScaledVector(Vs,d);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Am.subVectors(l,a),d=(_-g)/(_-g+(S-E)),t.copy(a).addScaledVector(Am,d);const v=1/(y+T+x);return c=T*v,d=x*v,t.copy(s).addScaledVector(Hs,c).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},El={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Lt.workingColorSpace){if(e=ry(e,1),t=Et(t,0,1),s=Et(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=nd(c,l,e+1/3),this.g=nd(c,l,e),this.b=nd(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=kg[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Lt.workingToColorSpace(Mn.copy(this),e),Math.round(Et(Mn.r*255,0,255))*65536+Math.round(Et(Mn.g*255,0,255))*256+Math.round(Et(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Mn.copy(this),t);const s=Mn.r,a=Mn.g,l=Mn.b,c=Math.max(s,a,l),d=Math.min(s,a,l);let h,p;const g=(d+c)/2;if(d===c)h=0,p=0;else{const _=c-d;switch(p=g<=.5?_/(c+d):_/(2-c-d),c){case s:h=(a-l)/_+(a<l?6:0);break;case a:h=(l-s)/_+2;break;case l:h=(s-a)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){Lt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,s=Mn.g,a=Mn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(El);const s=kc(Mr.h,El.h,t),a=kc(Mr.s,El.s,t),l=kc(Mr.l,El.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Rt;Rt.NAMES=kg;let Sy=0;class oa extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Ys,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=vd,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(s.blending=this.blending),this.side!==br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gd&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bg extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new ie,wl=new Nt;let My=0;class Ti{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=hm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hm&&(e.usage=this.usage),e}}class zg extends Ti{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Hg extends Ti{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Xn extends Ti{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Ey=0;const ei=new Qt,id=new hn,Gs=new ie,Gn=new sa,jo=new sa,cn=new ie;class Zi extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?Hg:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new pt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Xn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(Gn.min,jo.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,jo.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(jo.min),Gn.expandByPoint(jo.max))}Gn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)cn.fromBufferAttribute(d,p),h&&(Gs.fromBufferAttribute(e,p),cn.add(Gs)),a=Math.max(a,s.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let H=0;H<s.count;H++)d[H]=new ie,h[H]=new ie;const p=new ie,g=new ie,_=new ie,x=new Nt,S=new Nt,E=new Nt,T=new ie,y=new ie;function v(H,b,C){p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),x.fromBufferAttribute(l,H),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),g.sub(p),_.sub(p),S.sub(x),E.sub(x);const O=1/(S.x*E.y-E.x*S.y);isFinite(O)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(O),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(O),d[H].add(T),d[b].add(T),d[C].add(T),h[H].add(y),h[b].add(y),h[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,b=L.length;H<b;++H){const C=L[H],O=C.start,oe=C.count;for(let te=O,ce=O+oe;te<ce;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const P=new ie,R=new ie,z=new ie,N=new ie;function F(H){z.fromBufferAttribute(a,H),N.copy(z);const b=d[H];P.copy(b),P.sub(z.multiplyScalar(z.dot(b))).normalize(),R.crossVectors(N,b);const O=R.dot(h[H])<0?-1:1;c.setXYZW(H,P.x,P.y,P.z,O)}for(let H=0,b=L.length;H<b;++H){const C=L[H],O=C.start,oe=C.count;for(let te=O,ce=O+oe;te<ce;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const a=new ie,l=new ie,c=new ie,d=new ie,h=new ie,p=new ie,g=new ie,_=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),d.fromBufferAttribute(s,E),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),d.add(g),h.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,h){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(h.length*g);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*g;for(let v=0;v<g;v++)x[E++]=p[S++]}return new Ti(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,s);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new Qt,qr=new py,Tl=new Sf,Rm=new ie,Al=new ie,Cl=new ie,Rl=new ie,rd=new ie,bl=new ie,bm=new ie,Pl=new ie;class mt extends hn{constructor(e=new Zi,t=new Bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){bl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=d[h],_=l[h];g!==0&&(rd.fromBufferAttribute(_,e),c?bl.addScaledVector(rd,g):bl.addScaledVector(rd.sub(t),g))}t.add(bl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tl.copy(s.boundingSphere),Tl.applyMatrix4(l),qr.copy(e.ray).recast(e.near),!(Tl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Tl,Rm)===null||qr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),qr.copy(e.ray).applyMatrix4(Cm),!(s.boundingBox!==null&&qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,z=P;R<z;R+=3){const N=d.getX(R),F=d.getX(R+1),H=d.getX(R+2);a=Ll(this,v,e,s,p,g,_,N,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const L=d.getX(y),P=d.getX(y+1),R=d.getX(y+2);a=Ll(this,c,e,s,p,g,_,L,P,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=x.length;E<T;E++){const y=x[E],v=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=L,z=P;R<z;R+=3){const N=R,F=R+1,H=R+2;a=Ll(this,v,e,s,p,g,_,N,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,v=T;y<v;y+=3){const L=y,P=y+1,R=y+2;a=Ll(this,c,e,s,p,g,_,L,P,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function wy(r,e,t,s,a,l,c,d){let h;if(e.side===En?h=s.intersectTriangle(c,l,a,!0,d):h=s.intersectTriangle(a,l,c,e.side===br,d),h===null)return null;Pl.copy(d),Pl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:r}}function Ll(r,e,t,s,a,l,c,d,h,p){r.getVertexPosition(d,Al),r.getVertexPosition(h,Cl),r.getVertexPosition(p,Rl);const g=wy(r,e,t,s,Al,Cl,Rl,bm);if(g){const _=new ie;pi.getBarycoord(bm,Al,Cl,Rl,_),a&&(g.uv=pi.getInterpolatedAttribute(a,d,h,p,_,new Nt)),l&&(g.uv1=pi.getInterpolatedAttribute(l,d,h,p,_,new Nt)),c&&(g.normal=pi.getInterpolatedAttribute(c,d,h,p,_,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:h,c:p,normal:new ie,materialIndex:0};pi.getNormal(Al,Cl,Rl,x.normal),g.face=x,g.barycoord=_}return g}class jn extends Zi{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Xn(p,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(_,2));function E(T,y,v,L,P,R,z,N,F,H,b){const C=R/F,O=z/H,oe=R/2,te=z/2,ce=N/2,ge=F+1,de=H+1;let me=0,G=0;const fe=new ie;for(let le=0;le<de;le++){const k=le*O-te;for(let re=0;re<ge;re++){const we=re*C-oe;fe[T]=we*L,fe[y]=k*P,fe[v]=ce,p.push(fe.x,fe.y,fe.z),fe[T]=0,fe[y]=0,fe[v]=N>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(re/F),_.push(1-le/H),me+=1}}for(let le=0;le<H;le++)for(let k=0;k<F;k++){const re=x+k+ge*le,we=x+k+ge*(le+1),Oe=x+(k+1)+ge*(le+1),Q=x+(k+1)+ge*le;h.push(re,we,Q),h.push(we,Oe,Q),G+=6}d.addGroup(S,G,b),S+=G,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Rn(r){const e={};for(let t=0;t<r.length;t++){const s=to(r[t]);for(const a in s)e[a]=s[a]}return e}function Ty(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Ay={clone:to,merge:Rn};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Gg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new ie,Pm=new Nt,Lm=new Nt;class Wn extends Gg{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tf*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,Lm),t.subVectors(Lm,Pm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/p,a*=c.width/h,s*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,js=1;class by extends hn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Ws,js,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Ws,js,e,t);l.layers=this.layers,this.add(l);const c=new Wn(Ws,js,e,t);c.layers=this.layers,this.add(c);const d=new Wn(Ws,js,e,t);d.layers=this.layers,this.add(d);const h=new Wn(Ws,js,e,t);h.layers=this.layers,this.add(h);const p=new Wn(Ws,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,d,h]=t;for(const p of t)this.remove(p);if(e===wi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wg extends Fn{constructor(e=[],t=Qs,s,a,l,c,d,h,p,g){super(e,t,s,a,l,c,d,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Py extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Wg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new jn(5,5,5),l=new Pr({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:En,blending:Tr});l.uniforms.tEquirect.value=t;const c=new mt(a,l),d=t.minFilter;return t.minFilter===rs&&(t.minFilter=Ei),new by(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class ni extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ni;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class jg extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const od=new ie,Ny=new ie,Dy=new pt;class Jr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=od.subVectors(s,t).cross(Ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(od),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Dy.getNormalMatrix(e),a=this.coplanarPoint(od).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Sf,Uy=new Nt(.5,.5),Nl=new ie;class Mf{constructor(e=new Jr,t=new Jr,s=new Jr,a=new Jr,l=new Jr,c=new Jr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=wi,s=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],p=l[3],g=l[4],_=l[5],x=l[6],S=l[7],E=l[8],T=l[9],y=l[10],v=l[11],L=l[12],P=l[13],R=l[14],z=l[15];if(a[0].setComponents(p-c,S-g,v-E,z-L).normalize(),a[1].setComponents(p+c,S+g,v+E,z+L).normalize(),a[2].setComponents(p+d,S+_,v+T,z+P).normalize(),a[3].setComponents(p-d,S-_,v-T,z-P).normalize(),s)a[4].setComponents(h,x,y,R).normalize(),a[5].setComponents(p-h,S-x,v-y,z-R).normalize();else if(a[4].setComponents(p-h,S-x,v-y,z-R).normalize(),t===wi)a[5].setComponents(p+h,S+x,v+y,z+R).normalize();else if(t===Xl)a[5].setComponents(h,x,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=Uy.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Nl.x=a.normal.x>0?e.max.x:e.min.x,Nl.y=a.normal.y>0?e.max.y:e.min.y,Nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xg extends Fn{constructor(e,t,s=ss,a,l,c,d=vi,h=vi,p,g=Zo,_=1){if(g!==Zo&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,l,c,d,h,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gi extends Zi{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],_=[],x=[],S=[];let E=0;const T=[],y=s/2;let v=0;L(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(x,3)),this.setAttribute("uv",new Xn(S,2));function L(){const R=new ie,z=new ie;let N=0;const F=(t-e)/s;for(let H=0;H<=l;H++){const b=[],C=H/l,O=C*(t-e)+e;for(let oe=0;oe<=a;oe++){const te=oe/a,ce=te*h+d,ge=Math.sin(ce),de=Math.cos(ce);z.x=O*ge,z.y=-C*s+y,z.z=O*de,_.push(z.x,z.y,z.z),R.set(ge,F,de).normalize(),x.push(R.x,R.y,R.z),S.push(te,1-C),b.push(E++)}T.push(b)}for(let H=0;H<a;H++)for(let b=0;b<l;b++){const C=T[b][H],O=T[b+1][H],oe=T[b+1][H+1],te=T[b][H+1];(e>0||b!==0)&&(g.push(C,O,te),N+=3),(t>0||b!==l-1)&&(g.push(O,oe,te),N+=3)}p.addGroup(v,N,0),v+=N}function P(R){const z=E,N=new Nt,F=new ie;let H=0;const b=R===!0?e:t,C=R===!0?1:-1;for(let oe=1;oe<=a;oe++)_.push(0,y*C,0),x.push(0,C,0),S.push(.5,.5),E++;const O=E;for(let oe=0;oe<=a;oe++){const ce=oe/a*h+d,ge=Math.cos(ce),de=Math.sin(ce);F.x=b*de,F.y=y*C,F.z=b*ge,_.push(F.x,F.y,F.z),x.push(0,C,0),N.x=ge*.5+.5,N.y=de*.5*C+.5,S.push(N.x,N.y),E++}for(let oe=0;oe<a;oe++){const te=z+oe,ce=O+oe;R===!0?g.push(ce,ce+1,te):g.push(ce+1,ce,te),H+=3}p.addGroup(v,H,R===!0?1:2),v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends gi{constructor(e=1,t=1,s=32,a=1,l=!1,c=0,d=Math.PI*2){super(0,e,t,s,a,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new Cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends Zi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(s),h=Math.floor(a),p=d+1,g=h+1,_=e/d,x=t/h,S=[],E=[],T=[],y=[];for(let v=0;v<g;v++){const L=v*x-c;for(let P=0;P<p;P++){const R=P*_-l;E.push(R,-L,0),T.push(0,0,1),y.push(P/d),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<d;L++){const P=L+p*v,R=L+p*(v+1),z=L+1+p*(v+1),N=L+1+p*v;S.push(P,R,N),S.push(R,z,N)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(T,3)),this.setAttribute("uv",new Xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rr extends Zi{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(c+d,Math.PI);let p=0;const g=[],_=new ie,x=new ie,S=[],E=[],T=[],y=[];for(let v=0;v<=s;v++){const L=[],P=v/s;let R=0;v===0&&c===0?R=.5/t:v===s&&h===Math.PI&&(R=-.5/t);for(let z=0;z<=t;z++){const N=z/t;_.x=-e*Math.cos(a+N*l)*Math.sin(c+P*d),_.y=e*Math.cos(c+P*d),_.z=e*Math.sin(a+N*l)*Math.sin(c+P*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),T.push(x.x,x.y,x.z),y.push(N+R,1-P),L.push(p++)}g.push(L)}for(let v=0;v<s;v++)for(let L=0;L<t;L++){const P=g[v][L+1],R=g[v][L],z=g[v+1][L],N=g[v+1][L+1];(v!==0||c>0)&&S.push(P,R,N),(v!==s-1||h<Math.PI)&&S.push(R,z,N)}this.setIndex(S),this.setAttribute("position",new Xn(E,3)),this.setAttribute("normal",new Xn(T,3)),this.setAttribute("uv",new Xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pt extends oa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fy extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ef extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $g extends Ef{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ad=new Qt,Nm=new ie,Dm=new ie;class Oy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nm),Dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dm),t.updateMatrixWorld(),ad.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,t.coordinateSystem,t.reversedDepth),t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yg extends Gg{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ky extends Oy{constructor(){super(new Yg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qg extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kg extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class By extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Um(r,e,t,s){const a=zy(s);switch(t){case Rg:return r*e;case Pg:return r*e/a.components*a.byteLength;case vf:return r*e/a.components*a.byteLength;case Lg:return r*e*2/a.components*a.byteLength;case _f:return r*e*2/a.components*a.byteLength;case bg:return r*e*3/a.components*a.byteLength;case mi:return r*e*4/a.components*a.byteLength;case xf:return r*e*4/a.components*a.byteLength;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Nd:return Math.max(r,16)*Math.max(e,8)/4;case bd:case Ld:return Math.max(r,8)*Math.max(e,8)/2;case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $d:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Kd:case Zd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ng:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Jd:case ef:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(r){switch(r){case Ci:case Tg:return{byteLength:1,components:1};case qo:case Ag:case na:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case ss:case pf:case Xi:return{byteLength:4,components:1};case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Hy(r){const e=new WeakMap;function t(d,h){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,p){const g=h.array,_=h.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:c}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gy=`#ifdef USE_ALPHAHASH
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
#endif`,Wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
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
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
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
#endif`,Zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tS=`#ifdef USE_IRIDESCENCE
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
#endif`,nS=`#ifdef USE_BUMPMAP
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dS=`#define PI 3.141592653589793
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
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hS=`vec3 transformedNormal = objectNormal;
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
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",xS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
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
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,TS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
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
}`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DS=`uniform bool receiveShadow;
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
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BS=`PhysicalMaterial material;
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
#endif`,zS=`struct PhysicalMaterial {
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
}`,HS=`
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZS=`#if defined( USE_POINTS_UV )
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
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`#ifdef USE_MORPHTARGETS
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
#endif`,rM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cM=`#ifdef USE_NORMALMAP
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
#endif`,dM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AM=`float getShadowMask() {
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
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,bM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,LM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,YM=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,KM=`#define DISTANCE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#define LAMBERT
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
}`,rE=`#define LAMBERT
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
}`,sE=`#define MATCAP
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
}`,oE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,lE=`#define NORMAL
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
}`,uE=`#define PHONG
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
}`,cE=`#define PHONG
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
}`,dE=`#define STANDARD
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
}`,fE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,pE=`#define TOON
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
}`,mE=`uniform float size;
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
}`,gE=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,_E=`uniform vec3 color;
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
}`,xE=`uniform float rotation;
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
}`,yE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Vy,alphahash_pars_fragment:Gy,alphamap_fragment:Wy,alphamap_pars_fragment:jy,alphatest_fragment:Xy,alphatest_pars_fragment:$y,aomap_fragment:Yy,aomap_pars_fragment:qy,batching_pars_vertex:Ky,batching_vertex:Zy,begin_vertex:Qy,beginnormal_vertex:Jy,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:oS,color_fragment:aS,color_pars_fragment:lS,color_pars_vertex:uS,color_vertex:cS,common:dS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:hS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:vS,colorspace_fragment:_S,colorspace_pars_fragment:xS,envmap_fragment:yS,envmap_common_pars_fragment:SS,envmap_pars_fragment:MS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:US,envmap_vertex:wS,fog_vertex:TS,fog_pars_vertex:AS,fog_fragment:CS,fog_pars_fragment:RS,gradientmap_pars_fragment:bS,lightmap_pars_fragment:PS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:NS,lights_pars_begin:DS,lights_toon_fragment:IS,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:kS,lights_physical_fragment:BS,lights_physical_pars_fragment:zS,lights_fragment_begin:HS,lights_fragment_maps:VS,lights_fragment_end:GS,logdepthbuf_fragment:WS,logdepthbuf_pars_fragment:jS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:$S,map_fragment:YS,map_pars_fragment:qS,map_particle_fragment:KS,map_particle_pars_fragment:ZS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:JS,morphinstance_vertex:eM,morphcolor_vertex:tM,morphnormal_vertex:nM,morphtarget_pars_vertex:iM,morphtarget_vertex:rM,normal_fragment_begin:sM,normal_fragment_maps:oM,normal_pars_fragment:aM,normal_pars_vertex:lM,normal_vertex:uM,normalmap_pars_fragment:cM,clearcoat_normal_fragment_begin:dM,clearcoat_normal_fragment_maps:fM,clearcoat_pars_fragment:hM,iridescence_pars_fragment:pM,opaque_fragment:mM,packing:gM,premultiplied_alpha_fragment:vM,project_vertex:_M,dithering_fragment:xM,dithering_pars_fragment:yM,roughnessmap_fragment:SM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:EM,shadowmap_pars_vertex:wM,shadowmap_vertex:TM,shadowmask_pars_fragment:AM,skinbase_vertex:CM,skinning_pars_vertex:RM,skinning_vertex:bM,skinnormal_vertex:PM,specularmap_fragment:LM,specularmap_pars_fragment:NM,tonemapping_fragment:DM,tonemapping_pars_fragment:UM,transmission_fragment:IM,transmission_pars_fragment:FM,uv_pars_fragment:OM,uv_pars_vertex:kM,uv_vertex:BM,worldpos_vertex:zM,background_vert:HM,background_frag:VM,backgroundCube_vert:GM,backgroundCube_frag:WM,cube_vert:jM,cube_frag:XM,depth_vert:$M,depth_frag:YM,distanceRGBA_vert:qM,distanceRGBA_frag:KM,equirect_vert:ZM,equirect_frag:QM,linedashed_vert:JM,linedashed_frag:eE,meshbasic_vert:tE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:rE,meshmatcap_vert:sE,meshmatcap_frag:oE,meshnormal_vert:aE,meshnormal_frag:lE,meshphong_vert:uE,meshphong_frag:cE,meshphysical_vert:dE,meshphysical_frag:fE,meshtoon_vert:hE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:vE,shadow_frag:_E,sprite_vert:xE,sprite_frag:yE},Ie={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Mi={basic:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Rn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Rn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Rn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Rt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Rn([Ie.points,Ie.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Rn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Rn([Ie.common,Ie.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Rn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Rn([Ie.sprite,Ie.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Rn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Rn([Ie.lights,Ie.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Mi.physical={uniforms:Rn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Dl={r:0,b:0,g:0},Zr=new Ri,SE=new Qt;function ME(r,e,t,s,a,l,c){const d=new Rt(0);let h=l===!0?0:1,p,g,_=null,x=0,S=null;function E(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function T(P){let R=!1;const z=E(P);z===null?v(d,h):z&&z.isColor&&(v(z,1),R=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,R){const z=E(R);z&&(z.isCubeTexture||z.mapping===Kl)?(g===void 0&&(g=new mt(new jn(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:to(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Zr.copy(R.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(SE.makeRotationFromEuler(Zr)),g.material.toneMapped=Lt.getTransfer(z.colorSpace)!==kt,(_!==z||x!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,S=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new mt(new Lr(2,2),new Pr({name:"BackgroundMaterial",uniforms:to(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(z.colorSpace)!==kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,R){P.getRGB(Dl,Vg(r)),s.buffers.color.setClear(Dl.r,Dl.g,Dl.b,R,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,R=1){d.set(P),h=R,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,v(d,h)},render:T,addToRenderList:y,dispose:L}}function EE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,c=!1;function d(C,O,oe,te,ce){let ge=!1;const de=_(te,oe,O);l!==de&&(l=de,p(l.object)),ge=S(C,te,oe,ce),ge&&E(C,te,oe,ce),ce!==null&&e.update(ce,r.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,R(C,O,oe,te),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,O,oe){const te=oe.wireframe===!0;let ce=s[C.id];ce===void 0&&(ce={},s[C.id]=ce);let ge=ce[O.id];ge===void 0&&(ge={},ce[O.id]=ge);let de=ge[te];return de===void 0&&(de=x(h()),ge[te]=de),de}function x(C){const O=[],oe=[],te=[];for(let ce=0;ce<t;ce++)O[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:oe,attributeDivisors:te,object:C,attributes:{},index:null}}function S(C,O,oe,te){const ce=l.attributes,ge=O.attributes;let de=0;const me=oe.getAttributes();for(const G in me)if(me[G].location>=0){const le=ce[G];let k=ge[G];if(k===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),le===void 0||le.attribute!==k||k&&le.data!==k.data)return!0;de++}return l.attributesNum!==de||l.index!==te}function E(C,O,oe,te){const ce={},ge=O.attributes;let de=0;const me=oe.getAttributes();for(const G in me)if(me[G].location>=0){let le=ge[G];le===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const k={};k.attribute=le,le&&le.data&&(k.data=le.data),ce[G]=k,de++}l.attributes=ce,l.attributesNum=de,l.index=te}function T(){const C=l.newAttributes;for(let O=0,oe=C.length;O<oe;O++)C[O]=0}function y(C){v(C,0)}function v(C,O){const oe=l.newAttributes,te=l.enabledAttributes,ce=l.attributeDivisors;oe[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),ce[C]!==O&&(r.vertexAttribDivisor(C,O),ce[C]=O)}function L(){const C=l.newAttributes,O=l.enabledAttributes;for(let oe=0,te=O.length;oe<te;oe++)O[oe]!==C[oe]&&(r.disableVertexAttribArray(oe),O[oe]=0)}function P(C,O,oe,te,ce,ge,de){de===!0?r.vertexAttribIPointer(C,O,oe,ce,ge):r.vertexAttribPointer(C,O,oe,te,ce,ge)}function R(C,O,oe,te){T();const ce=te.attributes,ge=oe.getAttributes(),de=O.defaultAttributeValues;for(const me in ge){const G=ge[me];if(G.location>=0){let fe=ce[me];if(fe===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const le=fe.normalized,k=fe.itemSize,re=e.get(fe);if(re===void 0)continue;const we=re.buffer,Oe=re.type,Q=re.bytesPerElement,q=Oe===r.INT||Oe===r.UNSIGNED_INT||fe.gpuType===pf;if(fe.isInterleavedBufferAttribute){const ee=fe.data,$=ee.stride,ve=fe.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)v(G.location+Ce,ee.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)y(G.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ce=0;Ce<G.locationSize;Ce++)P(G.location+Ce,k/G.locationSize,Oe,le,$*Q,(ve+k/G.locationSize*Ce)*Q,q)}else{if(fe.isInstancedBufferAttribute){for(let ee=0;ee<G.locationSize;ee++)v(G.location+ee,fe.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ee=0;ee<G.locationSize;ee++)y(G.location+ee);r.bindBuffer(r.ARRAY_BUFFER,we);for(let ee=0;ee<G.locationSize;ee++)P(G.location+ee,k/G.locationSize,Oe,le,k*Q,k/G.locationSize*ee*Q,q)}}else if(de!==void 0){const le=de[me];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(G.location,le);break;case 3:r.vertexAttrib3fv(G.location,le);break;case 4:r.vertexAttrib4fv(G.location,le);break;default:r.vertexAttrib1fv(G.location,le)}}}}L()}function z(){H();for(const C in s){const O=s[C];for(const oe in O){const te=O[oe];for(const ce in te)g(te[ce].object),delete te[ce];delete O[oe]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const O=s[C.id];for(const oe in O){const te=O[oe];for(const ce in te)g(te[ce].object),delete te[ce];delete O[oe]}delete s[C.id]}function F(C){for(const O in s){const oe=s[O];if(oe[C.id]===void 0)continue;const te=oe[C.id];for(const ce in te)g(te[ce].object),delete te[ce];delete oe[C.id]}}function H(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:H,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function wE(r,e,t){let s;function a(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function c(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),t.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];t.update(S,s,1)}function h(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function TE(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==mi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const H=F===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!H)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:z,maxSamples:N}}function AE(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Jr,d=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||s!==0||a;return a=x,s=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!a||E===null||E.length===0||l&&!y)l?g(null):p();else{const L=l?0:s,P=L*4;let R=v.clippingState||null;h.value=R,R=g(E,x,P,S);for(let z=0;z!==P;++z)R[z]=t[z];v.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,S,E){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const v=S+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,R=S;P!==T;++P,R+=4)c.copy(_[P]).applyMatrix4(L,d),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function CE(r){let e=new WeakMap;function t(c,d){return d===Td?c.mapping=Qs:d===Ad&&(c.mapping=Js),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===Td||d===Ad)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Py(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const $s=4,Im=[.125,.215,.35,.446,.526,.582],ns=20,ld=new Yg,Fm=new Rt;let ud=null,cd=0,dd=0,fd=!1;const es=(1+Math.sqrt(5))/2,Xs=1/es,Om=[new ie(-es,Xs,0),new ie(es,Xs,0),new ie(-Xs,0,es),new ie(Xs,0,es),new ie(0,es,-Xs),new ie(0,es,Xs),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],RE=new ie;class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:d=RE}=l;ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,dd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:na,format:mi,colorSpace:eo,depthBuffer:!1},a=Bm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bE(l)),this._blurMaterial=PE(l,e,t)}return a}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,s,a,l){const h=new Wn(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(Fm),_.toneMapping=Ar,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const T=new Bg({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),y=new mt(new jn,T);let v=!1;const L=e.background;L?L.isColor&&(T.color.copy(L),e.background=null,v=!0):(T.color.copy(Fm),v=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[P],l.y,l.z)):R===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[P]));const z=this._cubeSize;Ul(a,R*z,P>2?z:0,z,z),_.setRenderTarget(a),v&&_.render(y,h),_.render(e,h)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=L}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Qs||e.mapping===Js;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new mt(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ul(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,ld)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Om[(a-l-1)%Om.length];this._blur(e,l-1,l,c,d)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,d){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new mt(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ns-1),T=l/E,y=isFinite(l)?1+Math.floor(g*T):ns;y>ns&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ns}`);const v=[];let L=0;for(let F=0;F<ns;++F){const H=F/T,b=Math.exp(-H*H/2);v.push(b),F===0?L+=b:F<y&&(L+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-s;const R=this._sizeLods[a],z=3*R*(a>P-$s?a-P+$s:0),N=4*(this._cubeSize-R);Ul(t,z,N,3*R,2*R),h.setRenderTarget(t),h.render(_,ld)}}function bE(r){const e=[],t=[],s=[];let a=r;const l=r-$s+1+Im.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);t.push(d);let h=1/d;c>r-$s?h=Im[c-r+$s-1]:c===0&&(h=0),s.push(h);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,y=2,v=1,L=new Float32Array(T*E*S),P=new Float32Array(y*E*S),R=new Float32Array(v*E*S);for(let N=0;N<S;N++){const F=N%3*2/3-1,H=N>2?0:-1,b=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];L.set(b,T*E*N),P.set(x,y*E*N);const C=[N,N,N,N,N,N];R.set(C,v*E*N)}const z=new Zi;z.setAttribute("position",new Ti(L,T)),z.setAttribute("uv",new Ti(P,y)),z.setAttribute("faceIndex",new Ti(R,v)),e.push(z),a>$s&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Bm(r,e,t){const s=new os(r,e,t);return s.texture.mapping=Kl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ul(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function PE(r,e,t){const s=new Float32Array(ns),a=new ie(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function zm(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Hm(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function wf(){return`

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
	`}function LE(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,p=h===Td||h===Ad,g=h===Qs||h===Js;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new km(r)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new km(r)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function a(d){let h=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function NE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&qs("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function DE(r,e,t,s){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const L=S.array;T=S.version;for(let P=0,R=L.length;P<R;P+=3){const z=L[P+0],N=L[P+1],F=L[P+2];x.push(z,N,N,F,F,z)}}else if(E!==void 0){const L=E.array;T=E.version;for(let P=0,R=L.length/3-1;P<R;P+=3){const z=P+0,N=P+1,F=P+2;x.push(z,N,N,F,F,z)}}else return;const y=new(Ig(x)?Hg:zg)(x,1);y.version=T;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function UE(r,e,t){let s;function a(x){s=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function p(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,x*c,E),t.update(S,s,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,s,1)}function _(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,T,0,E);let v=0;for(let L=0;L<E;L++)v+=S[L]*T[L];t.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function IE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function FE(r,e,t){const s=new WeakMap,a=new qt;function l(c,d,h){const p=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let C=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let z=d.attributes.position.count*R,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*N*4*_),H=new Fg(F,z,N,_);H.type=Xi,H.needsUpdate=!0;const b=R*4;for(let O=0;O<_;O++){const oe=v[O],te=L[O],ce=P[O],ge=z*N*4*O;for(let de=0;de<oe.count;de++){const me=de*b;E===!0&&(a.fromBufferAttribute(oe,de),F[ge+me+0]=a.x,F[ge+me+1]=a.y,F[ge+me+2]=a.z,F[ge+me+3]=0),T===!0&&(a.fromBufferAttribute(te,de),F[ge+me+4]=a.x,F[ge+me+5]=a.y,F[ge+me+6]=a.z,F[ge+me+7]=0),y===!0&&(a.fromBufferAttribute(ce,de),F[ge+me+8]=a.x,F[ge+me+9]=a.y,F[ge+me+10]=a.z,F[ge+me+11]=ce.itemSize===4?a.w:1)}}x={count:_,texture:H,size:new Nt(z,N)},s.set(d,x),d.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function OE(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,_=e.get(h,g);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return _}function c(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Qg=new Fn,Vm=new Xg(1,1),Jg=new Fg,e0=new fy,t0=new Wg,Gm=[],Wm=[],jm=new Float32Array(16),Xm=new Float32Array(9),$m=new Float32Array(4);function so(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Gm[a];if(l===void 0&&(l=new Float32Array(a),Gm[a]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Zl(r,e){let t=Wm[e];t===void 0&&(t=new Int32Array(e),Wm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function kE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function HE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function VE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),on(t,s)}}function GE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,s))return;Xm.set(s),r.uniformMatrix3fv(this.addr,!1,Xm),on(t,s)}}function WE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,s))return;jm.set(s),r.uniformMatrix4fv(this.addr,!1,jm),on(t,s)}}function jE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function $E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function qE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function JE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Vm.compareFunction=Ug,l=Vm):l=Qg,t.setTexture2D(e||l,a)}function ew(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||e0,a)}function tw(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||t0,a)}function nw(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||Jg,a)}function iw(r){switch(r){case 5126:return kE;case 35664:return BE;case 35665:return zE;case 35666:return HE;case 35674:return VE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return jE;case 35667:case 35671:return XE;case 35668:case 35672:return $E;case 35669:case 35673:return YE;case 5125:return qE;case 36294:return KE;case 36295:return ZE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return JE;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}function rw(r,e){r.uniform1fv(this.addr,e)}function sw(r,e){const t=so(e,this.size,2);r.uniform2fv(this.addr,t)}function ow(r,e){const t=so(e,this.size,3);r.uniform3fv(this.addr,t)}function aw(r,e){const t=so(e,this.size,4);r.uniform4fv(this.addr,t)}function lw(r,e){const t=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function uw(r,e){const t=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cw(r,e){const t=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function dw(r,e){r.uniform1iv(this.addr,e)}function fw(r,e){r.uniform2iv(this.addr,e)}function hw(r,e){r.uniform3iv(this.addr,e)}function pw(r,e){r.uniform4iv(this.addr,e)}function mw(r,e){r.uniform1uiv(this.addr,e)}function gw(r,e){r.uniform2uiv(this.addr,e)}function vw(r,e){r.uniform3uiv(this.addr,e)}function _w(r,e){r.uniform4uiv(this.addr,e)}function xw(r,e,t){const s=this.cache,a=e.length,l=Zl(t,a);sn(s,l)||(r.uniform1iv(this.addr,l),on(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Qg,l[c])}function yw(r,e,t){const s=this.cache,a=e.length,l=Zl(t,a);sn(s,l)||(r.uniform1iv(this.addr,l),on(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||e0,l[c])}function Sw(r,e,t){const s=this.cache,a=e.length,l=Zl(t,a);sn(s,l)||(r.uniform1iv(this.addr,l),on(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||t0,l[c])}function Mw(r,e,t){const s=this.cache,a=e.length,l=Zl(t,a);sn(s,l)||(r.uniform1iv(this.addr,l),on(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Jg,l[c])}function Ew(r){switch(r){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return uw;case 35676:return cw;case 5124:case 35670:return dw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return vw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}class ww{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=iw(t.type)}}class Tw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ew(t.type)}}class Aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function Ym(r,e){r.seq.push(e),r.map[e.id]=e}function Cw(r,e,t){const s=r.name,a=s.length;for(hd.lastIndex=0;;){const l=hd.exec(s),c=hd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&c+2===a){Ym(t,p===void 0?new ww(d,r,e):new Tw(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new Aw(d),Ym(t,_)),t=_}}}class Gl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Cw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function qm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Rw=37297;let bw=0;function Pw(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const Km=new pt;function Lw(r){Lt._getMatrix(Km,Lt.workingColorSpace,r);const e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case jl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Zm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+Pw(r.getShaderSource(e),d)}else return l}function Nw(r,e){const t=Lw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dw(r,e){let t;switch(e){case zx:t="Linear";break;case Hx:t="Reinhard";break;case Vx:t="Cineon";break;case Gx:t="ACESFilmic";break;case jx:t="AgX";break;case Xx:t="Neutral";break;case Wx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Il=new ie;function Uw(){Lt.getLuminanceCoefficients(Il);const r=Il.x.toFixed(4),e=Il.y.toFixed(4),t=Il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function Fw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Ow(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function $o(r){return r!==""}function Qm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(r){return r.replace(kw,zw)}const Bw=new Map;function zw(r,e){let t=gt[e];if(t===void 0){const s=Bw.get(e);if(s!==void 0)t=gt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return nf(t)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(r){return r.replace(Hw,Vw)}function Vw(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function tg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Eg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Xw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hf:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function $w(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Yw(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=Gw(t),p=Ww(t),g=jw(t),_=Xw(t),x=$w(t),S=Iw(t),E=Fw(l),T=a.createProgram();let y,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),v.length>0&&(v+=`
`)):(y=[tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?gt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?Dw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,Nw("linearToOutputTexel",t.outputColorSpace),Uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),c=nf(c),c=Qm(c,t),c=Jm(c,t),d=nf(d),d=Qm(d,t),d=Jm(d,t),c=eg(c),d=eg(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+y+c,R=L+v+d,z=qm(a,a.VERTEX_SHADER,P),N=qm(a,a.FRAGMENT_SHADER,R);a.attachShader(T,z),a.attachShader(T,N),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(O){if(r.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T)||"",te=a.getShaderInfoLog(z)||"",ce=a.getShaderInfoLog(N)||"",ge=oe.trim(),de=te.trim(),me=ce.trim();let G=!0,fe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,z,N);else{const le=Zm(a,z,"vertex"),k=Zm(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ge+`
`+le+`
`+k)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(de===""||me==="")&&(fe=!1);fe&&(O.diagnostics={runnable:G,programLog:ge,vertexShader:{log:de,prefix:y},fragmentShader:{log:me,prefix:v}})}a.deleteShader(z),a.deleteShader(N),H=new Gl(a,T),b=Ow(a,T)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,Rw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=N,this}let qw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Zw(e),t.set(e,s)),s}}class Zw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Qw(r,e,t,s,a,l,c){const d=new Og,h=new Kw,p=new Set,g=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,C,O,oe,te){const ce=oe.fog,ge=te.geometry,de=b.isMeshStandardMaterial?oe.environment:null,me=(b.isMeshStandardMaterial?t:e).get(b.envMap||de),G=me&&me.mapping===Kl?me.image.height:null,fe=E[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,k=le!==void 0?le.length:0;let re=0;ge.morphAttributes.position!==void 0&&(re=1),ge.morphAttributes.normal!==void 0&&(re=2),ge.morphAttributes.color!==void 0&&(re=3);let we,Oe,Q,q;if(fe){const wt=Mi[fe];we=wt.vertexShader,Oe=wt.fragmentShader}else we=b.vertexShader,Oe=b.fragmentShader,h.update(b),Q=h.getVertexShaderID(b),q=h.getFragmentShaderID(b);const ee=r.getRenderTarget(),$=r.state.buffers.depth.getReversed(),ve=te.isInstancedMesh===!0,Ce=te.isBatchedMesh===!0,_t=!!b.map,et=!!b.matcap,B=!!me,dt=!!b.aoMap,Ne=!!b.lightMap,tt=!!b.bumpMap,qe=!!b.normalMap,Mt=!!b.displacementMap,ke=!!b.emissiveMap,lt=!!b.metalnessMap,At=!!b.roughnessMap,Ut=b.anisotropy>0,D=b.clearcoat>0,w=b.dispersion>0,Z=b.iridescence>0,pe=b.sheen>0,xe=b.transmission>0,he=Ut&&!!b.anisotropyMap,Xe=D&&!!b.clearcoatMap,Ee=D&&!!b.clearcoatNormalMap,Ve=D&&!!b.clearcoatRoughnessMap,$e=Z&&!!b.iridescenceMap,Me=Z&&!!b.iridescenceThicknessMap,Fe=pe&&!!b.sheenColorMap,ot=pe&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,De=!!b.specularColorMap,ht=!!b.specularIntensityMap,W=xe&&!!b.transmissionMap,Re=xe&&!!b.thicknessMap,Le=!!b.gradientMap,Be=!!b.alphaMap,Ae=b.alphaTest>0,_e=!!b.alphaHash,Ye=!!b.extensions;let ft=Ar;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ft=r.toneMapping);const It={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Oe,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ce,batchingColor:Ce&&te._colorsTexture!==null,instancing:ve,instancingColor:ve&&te.instanceColor!==null,instancingMorph:ve&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:eo,alphaToCoverage:!!b.alphaToCoverage,map:_t,matcap:et,envMap:B,envMapMode:B&&me.mapping,envMapCubeUVHeight:G,aoMap:dt,lightMap:Ne,bumpMap:tt,normalMap:qe,displacementMap:x&&Mt,emissiveMap:ke,normalMapObjectSpace:qe&&b.normalMapType===Kx,normalMapTangentSpace:qe&&b.normalMapType===Dg,metalnessMap:lt,roughnessMap:At,anisotropy:Ut,anisotropyMap:he,clearcoat:D,clearcoatMap:Xe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:Z,iridescenceMap:$e,iridescenceThicknessMap:Me,sheen:pe,sheenColorMap:Fe,sheenRoughnessMap:ot,specularMap:Ze,specularColorMap:De,specularIntensityMap:ht,transmission:xe,transmissionMap:W,thicknessMap:Re,gradientMap:Le,opaque:b.transparent===!1&&b.blending===Ys&&b.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ae,alphaHash:_e,combine:b.combine,mapUv:_t&&T(b.map.channel),aoMapUv:dt&&T(b.aoMap.channel),lightMapUv:Ne&&T(b.lightMap.channel),bumpMapUv:tt&&T(b.bumpMap.channel),normalMapUv:qe&&T(b.normalMap.channel),displacementMapUv:Mt&&T(b.displacementMap.channel),emissiveMapUv:ke&&T(b.emissiveMap.channel),metalnessMapUv:lt&&T(b.metalnessMap.channel),roughnessMapUv:At&&T(b.roughnessMap.channel),anisotropyMapUv:he&&T(b.anisotropyMap.channel),clearcoatMapUv:Xe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&T(b.sheenRoughnessMap.channel),specularMapUv:Ze&&T(b.specularMap.channel),specularColorMapUv:De&&T(b.specularColorMap.channel),specularIntensityMapUv:ht&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Re&&T(b.thicknessMap.channel),alphaMapUv:Be&&T(b.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(qe||Ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ge.attributes.uv&&(_t||Be),fog:!!ce,useFog:b.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:$,skinning:te.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:_t&&b.map.isVideoTexture===!0&&Lt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:ke&&b.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hi,flipSided:b.side===En,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&b.extensions.multiDraw===!0||Ce)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)C.push(O),C.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(L(C,b),P(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),b.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const C=E[b.type];let O;if(C){const oe=Mi[C];O=Ay.clone(oe.uniforms)}else O=b.uniforms;return O}function z(b,C){let O;for(let oe=0,te=g.length;oe<te;oe++){const ce=g[oe];if(ce.cacheKey===C){O=ce,++O.usedTimes;break}}return O===void 0&&(O=new Yw(r,C,b,l),g.push(O)),O}function N(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function F(b){h.remove(b)}function H(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:R,acquireProgram:z,releaseProgram:N,releaseShaderCache:F,programs:g,dispose:H}}function Jw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function a(c,d,h){r.get(c)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function eT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ng(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ig(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(_,x,S,E,T,y){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:y},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=y),e++,v}function d(_,x,S,E,T,y){const v=c(_,x,S,E,T,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(_,x,S,E,T,y){const v=c(_,x,S,E,T,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||eT),s.length>1&&s.sort(x||ng),a.length>1&&a.sort(x||ng)}function g(){for(let _=e,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:g,sort:p}}function tT(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new ig,r.set(s,[c])):a>=l.length?(c=new ig,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function nT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Rt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function iT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let rT=0;function sT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oT(r){const e=new nT,t=iT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const a=new ie,l=new Qt,c=new Qt;function d(p){let g=0,_=0,x=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let S=0,E=0,T=0,y=0,v=0,L=0,P=0,R=0,z=0,N=0,F=0;p.sort(sT);for(let b=0,C=p.length;b<C;b++){const O=p[b],oe=O.color,te=O.intensity,ce=O.distance,ge=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=oe.r*te,_+=oe.g*te,x+=oe.b*te;else if(O.isLightProbe){for(let de=0;de<9;de++)s.probe[de].addScaledVector(O.sh.coefficients[de],te);F++}else if(O.isDirectionalLight){const de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,s.directionalShadow[S]=G,s.directionalShadowMap[S]=ge,s.directionalShadowMatrix[S]=O.shadow.matrix,L++}s.directional[S]=de,S++}else if(O.isSpotLight){const de=e.get(O);de.position.setFromMatrixPosition(O.matrixWorld),de.color.copy(oe).multiplyScalar(te),de.distance=ce,de.coneCos=Math.cos(O.angle),de.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),de.decay=O.decay,s.spot[T]=de;const me=O.shadow;if(O.map&&(s.spotLightMap[z]=O.map,z++,me.updateMatrices(O),O.castShadow&&N++),s.spotLightMatrix[T]=me.matrix,O.castShadow){const G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,s.spotShadow[T]=G,s.spotShadowMap[T]=ge,R++}T++}else if(O.isRectAreaLight){const de=e.get(O);de.color.copy(oe).multiplyScalar(te),de.halfWidth.set(O.width*.5,0,0),de.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=de,y++}else if(O.isPointLight){const de=e.get(O);if(de.color.copy(O.color).multiplyScalar(O.intensity),de.distance=O.distance,de.decay=O.decay,O.castShadow){const me=O.shadow,G=t.get(O);G.shadowIntensity=me.intensity,G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,G.shadowCameraNear=me.camera.near,G.shadowCameraFar=me.camera.far,s.pointShadow[E]=G,s.pointShadowMap[E]=ge,s.pointShadowMatrix[E]=O.shadow.matrix,P++}s.point[E]=de,E++}else if(O.isHemisphereLight){const de=e.get(O);de.skyColor.copy(O.color).multiplyScalar(te),de.groundColor.copy(O.groundColor).multiplyScalar(te),s.hemi[v]=de,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const H=s.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==L||H.numPointShadows!==P||H.numSpotShadows!==R||H.numSpotMaps!==z||H.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+z-N,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,H.directionalLength=S,H.pointLength=E,H.spotLength=T,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=L,H.numPointShadows=P,H.numSpotShadows=R,H.numSpotMaps=z,H.numLightProbes=F,s.version=rT++)}function h(p,g){let _=0,x=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const P=p[v];if(P.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),_++}else if(P.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const R=s.point[x];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:d,setupView:h,state:s}}function rg(r){const e=new oT(r),t=[],s=[];function a(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function aT(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new rg(r),e.set(a,[d])):l>=c.length?(d=new rg(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const lT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
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
}`;function cT(r,e,t){let s=new Mf;const a=new Nt,l=new Nt,c=new qt,d=new Iy({depthPacking:qx}),h=new Fy,p={},g=t.maxTextureSize,_={[br]:En,[En]:br,[hi]:hi},x=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:lT,fragmentShader:uT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Zi;E.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new mt(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eg;let v=this.type;this.render=function(N,F,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Tr),oe.buffers.depth.getReversed()?oe.buffers.color.setClear(0,0,0,0):oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=v!==ji&&this.type===ji,ce=v===ji&&this.type!==ji;for(let ge=0,de=N.length;ge<de;ge++){const me=N[ge],G=me.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const fe=G.getFrameExtents();if(a.multiply(fe),l.copy(G.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/fe.x),a.x=l.x*fe.x,G.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/fe.y),a.y=l.y*fe.y,G.mapSize.y=l.y)),G.map===null||te===!0||ce===!0){const k=this.type!==ji?{minFilter:vi,magFilter:vi}:{};G.map!==null&&G.map.dispose(),G.map=new os(a.x,a.y,k),G.map.texture.name=me.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const le=G.getViewportCount();for(let k=0;k<le;k++){const re=G.getViewport(k);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),oe.viewport(c),G.updateMatrices(me,k),s=G.getFrustum(),R(F,H,G.camera,me,this.type)}G.isPointLightShadow!==!0&&this.type===ji&&L(G,H),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(b,C,O)};function L(N,F){const H=e.update(T);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new os(a.x,a.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,H,x,T,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,H,S,T,null)}function P(N,F,H,b){let C=null;const O=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)C=O;else if(C=H.isPointLight===!0?h:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const oe=C.uuid,te=F.uuid;let ce=p[oe];ce===void 0&&(ce={},p[oe]=ce);let ge=ce[te];ge===void 0&&(ge=C.clone(),ce[te]=ge,F.addEventListener("dispose",z)),C=ge}if(C.visible=F.visible,C.wireframe=F.wireframe,b===ji?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=r.properties.get(C);oe.light=H}return C}function R(N,F,H,b,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===ji)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const te=e.update(N),ce=N.material;if(Array.isArray(ce)){const ge=te.groups;for(let de=0,me=ge.length;de<me;de++){const G=ge[de],fe=ce[G.materialIndex];if(fe&&fe.visible){const le=P(N,fe,b,C);N.onBeforeShadow(r,N,F,H,te,le,G),r.renderBufferDirect(H,null,te,le,N,G),N.onAfterShadow(r,N,F,H,te,le,G)}}}else if(ce.visible){const ge=P(N,ce,b,C);N.onBeforeShadow(r,N,F,H,te,ge,null),r.renderBufferDirect(H,null,te,ge,N,null),N.onAfterShadow(r,N,F,H,te,ge,null)}}const oe=N.children;for(let te=0,ce=oe.length;te<ce;te++)R(oe[te],F,H,b,C)}function z(N){N.target.removeEventListener("dispose",z);for(const H in p){const b=p[H],C=N.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const dT={[_d]:xd,[yd]:Ed,[Sd]:wd,[Zs]:Md,[xd]:_d,[Ed]:yd,[wd]:Sd,[Md]:Zs};function fT(r,e){function t(){let W=!1;const Re=new qt;let Le=null;const Be=new qt(0,0,0,0);return{setMask:function(Ae){Le!==Ae&&!W&&(r.colorMask(Ae,Ae,Ae,Ae),Le=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,_e,Ye,ft,It){It===!0&&(Ae*=ft,_e*=ft,Ye*=ft),Re.set(Ae,_e,Ye,ft),Be.equals(Re)===!1&&(r.clearColor(Ae,_e,Ye,ft),Be.copy(Re))},reset:function(){W=!1,Le=null,Be.set(-1,0,0,0)}}}function s(){let W=!1,Re=!1,Le=null,Be=null,Ae=null;return{setReversed:function(_e){if(Re!==_e){const Ye=e.get("EXT_clip_control");_e?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return Re},setTest:function(_e){_e?ee(r.DEPTH_TEST):$(r.DEPTH_TEST)},setMask:function(_e){Le!==_e&&!W&&(r.depthMask(_e),Le=_e)},setFunc:function(_e){if(Re&&(_e=dT[_e]),Be!==_e){switch(_e){case _d:r.depthFunc(r.NEVER);break;case xd:r.depthFunc(r.ALWAYS);break;case yd:r.depthFunc(r.LESS);break;case Zs:r.depthFunc(r.LEQUAL);break;case Sd:r.depthFunc(r.EQUAL);break;case Md:r.depthFunc(r.GEQUAL);break;case Ed:r.depthFunc(r.GREATER);break;case wd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Be=_e}},setLocked:function(_e){W=_e},setClear:function(_e){Ae!==_e&&(Re&&(_e=1-_e),r.clearDepth(_e),Ae=_e)},reset:function(){W=!1,Le=null,Be=null,Ae=null,Re=!1}}}function a(){let W=!1,Re=null,Le=null,Be=null,Ae=null,_e=null,Ye=null,ft=null,It=null;return{setTest:function(wt){W||(wt?ee(r.STENCIL_TEST):$(r.STENCIL_TEST))},setMask:function(wt){Re!==wt&&!W&&(r.stencilMask(wt),Re=wt)},setFunc:function(wt,$n,pn){(Le!==wt||Be!==$n||Ae!==pn)&&(r.stencilFunc(wt,$n,pn),Le=wt,Be=$n,Ae=pn)},setOp:function(wt,$n,pn){(_e!==wt||Ye!==$n||ft!==pn)&&(r.stencilOp(wt,$n,pn),_e=wt,Ye=$n,ft=pn)},setLocked:function(wt){W=wt},setClear:function(wt){It!==wt&&(r.clearStencil(wt),It=wt)},reset:function(){W=!1,Re=null,Le=null,Be=null,Ae=null,_e=null,Ye=null,ft=null,It=null}}}const l=new t,c=new s,d=new a,h=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,L=null,P=null,R=null,z=null,N=null,F=new Rt(0,0,0),H=0,b=!1,C=null,O=null,oe=null,te=null,ce=null;const ge=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,me=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(G)[1]),de=me>=1):G.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),de=me>=2);let fe=null,le={};const k=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),we=new qt().fromArray(k),Oe=new qt().fromArray(re);function Q(W,Re,Le,Be){const Ae=new Uint8Array(4),_e=r.createTexture();r.bindTexture(W,_e),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<Le;Ye++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Re+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return _e}const q={};q[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ee(r.DEPTH_TEST),c.setFunc(Zs),tt(!1),qe(lm),ee(r.CULL_FACE),dt(Tr);function ee(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function $(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function ve(W,Re){return _[W]!==Re?(r.bindFramebuffer(W,Re),_[W]=Re,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Re),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ce(W,Re){let Le=S,Be=!1;if(W){Le=x.get(Re),Le===void 0&&(Le=[],x.set(Re,Le));const Ae=W.textures;if(Le.length!==Ae.length||Le[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Ye=Ae.length;_e<Ye;_e++)Le[_e]=r.COLOR_ATTACHMENT0+_e;Le.length=Ae.length,Be=!0}}else Le[0]!==r.BACK&&(Le[0]=r.BACK,Be=!0);Be&&r.drawBuffers(Le)}function _t(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const et={[ts]:r.FUNC_ADD,[Sx]:r.FUNC_SUBTRACT,[Mx]:r.FUNC_REVERSE_SUBTRACT};et[Ex]=r.MIN,et[wx]=r.MAX;const B={[Tx]:r.ZERO,[Ax]:r.ONE,[Cx]:r.SRC_COLOR,[gd]:r.SRC_ALPHA,[Dx]:r.SRC_ALPHA_SATURATE,[Lx]:r.DST_COLOR,[bx]:r.DST_ALPHA,[Rx]:r.ONE_MINUS_SRC_COLOR,[vd]:r.ONE_MINUS_SRC_ALPHA,[Nx]:r.ONE_MINUS_DST_COLOR,[Px]:r.ONE_MINUS_DST_ALPHA,[Ux]:r.CONSTANT_COLOR,[Ix]:r.ONE_MINUS_CONSTANT_COLOR,[Fx]:r.CONSTANT_ALPHA,[Ox]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Re,Le,Be,Ae,_e,Ye,ft,It,wt){if(W===Tr){T===!0&&($(r.BLEND),T=!1);return}if(T===!1&&(ee(r.BLEND),T=!0),W!==yx){if(W!==y||wt!==b){if((v!==ts||R!==ts)&&(r.blendEquation(r.FUNC_ADD),v=ts,R=ts),wt)switch(W){case Ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFunc(r.ONE,r.ONE);break;case cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case um:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,P=null,z=null,N=null,F.set(0,0,0),H=0,y=W,b=wt}return}Ae=Ae||Re,_e=_e||Le,Ye=Ye||Be,(Re!==v||Ae!==R)&&(r.blendEquationSeparate(et[Re],et[Ae]),v=Re,R=Ae),(Le!==L||Be!==P||_e!==z||Ye!==N)&&(r.blendFuncSeparate(B[Le],B[Be],B[_e],B[Ye]),L=Le,P=Be,z=_e,N=Ye),(ft.equals(F)===!1||It!==H)&&(r.blendColor(ft.r,ft.g,ft.b,It),F.copy(ft),H=It),y=W,b=!1}function Ne(W,Re){W.side===hi?$(r.CULL_FACE):ee(r.CULL_FACE);let Le=W.side===En;Re&&(Le=!Le),tt(Le),W.blending===Ys&&W.transparent===!1?dt(Tr):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Be=W.stencilWrite;d.setTest(Be),Be&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):$(r.SAMPLE_ALPHA_TO_COVERAGE)}function tt(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function qe(W){W!==_x?(ee(r.CULL_FACE),W!==O&&(W===lm?r.cullFace(r.BACK):W===xx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$(r.CULL_FACE),O=W}function Mt(W){W!==oe&&(de&&r.lineWidth(W),oe=W)}function ke(W,Re,Le){W?(ee(r.POLYGON_OFFSET_FILL),(te!==Re||ce!==Le)&&(r.polygonOffset(Re,Le),te=Re,ce=Le)):$(r.POLYGON_OFFSET_FILL)}function lt(W){W?ee(r.SCISSOR_TEST):$(r.SCISSOR_TEST)}function At(W){W===void 0&&(W=r.TEXTURE0+ge-1),fe!==W&&(r.activeTexture(W),fe=W)}function Ut(W,Re,Le){Le===void 0&&(fe===null?Le=r.TEXTURE0+ge-1:Le=fe);let Be=le[Le];Be===void 0&&(Be={type:void 0,texture:void 0},le[Le]=Be),(Be.type!==W||Be.texture!==Re)&&(fe!==Le&&(r.activeTexture(Le),fe=Le),r.bindTexture(W,Re||q[W]),Be.type=W,Be.texture=Re)}function D(){const W=le[fe];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(W){we.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function ot(W){Oe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Oe.copy(W))}function Ze(W,Re){let Le=p.get(Re);Le===void 0&&(Le=new WeakMap,p.set(Re,Le));let Be=Le.get(W);Be===void 0&&(Be=r.getUniformBlockIndex(Re,W.name),Le.set(W,Be))}function De(W,Re){const Be=p.get(Re).get(W);h.get(Re)!==Be&&(r.uniformBlockBinding(Re,Be,W.__bindingPointIndex),h.set(Re,Be))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},fe=null,le={},_={},x=new WeakMap,S=[],E=null,T=!1,y=null,v=null,L=null,P=null,R=null,z=null,N=null,F=new Rt(0,0,0),H=0,b=!1,C=null,O=null,oe=null,te=null,ce=null,we.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ee,disable:$,bindFramebuffer:ve,drawBuffers:Ce,useProgram:_t,setBlending:dt,setMaterial:Ne,setFlipSided:tt,setCullFace:qe,setLineWidth:Mt,setPolygonOffset:ke,setScissorTest:lt,activeTexture:At,bindTexture:Ut,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:$e,texImage3D:Me,updateUBOMapping:Ze,uniformBlockBinding:De,texStorage2D:Ee,texStorage3D:Ve,texSubImage2D:pe,texSubImage3D:xe,compressedTexSubImage2D:he,compressedTexSubImage3D:Xe,scissor:Fe,viewport:ot,reset:ht}}function hT(r,e,t,s,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return S?new OffscreenCanvas(D,w):$l("canvas")}function T(D,w,Z){let pe=1;const xe=Ut(D);if((xe.width>Z||xe.height>Z)&&(pe=Z/Math.max(xe.width,xe.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(pe*xe.width),Xe=Math.floor(pe*xe.height);_===void 0&&(_=E(he,Xe));const Ee=w?E(he,Xe):_;return Ee.width=he,Ee.height=Xe,Ee.getContext("2d").drawImage(D,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+Xe+")."),Ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,w,Z,pe,xe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=w;if(w===r.RED&&(Z===r.FLOAT&&(he=r.R32F),Z===r.HALF_FLOAT&&(he=r.R16F),Z===r.UNSIGNED_BYTE&&(he=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.R8UI),Z===r.UNSIGNED_SHORT&&(he=r.R16UI),Z===r.UNSIGNED_INT&&(he=r.R32UI),Z===r.BYTE&&(he=r.R8I),Z===r.SHORT&&(he=r.R16I),Z===r.INT&&(he=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(he=r.RG32F),Z===r.HALF_FLOAT&&(he=r.RG16F),Z===r.UNSIGNED_BYTE&&(he=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RG8UI),Z===r.UNSIGNED_SHORT&&(he=r.RG16UI),Z===r.UNSIGNED_INT&&(he=r.RG32UI),Z===r.BYTE&&(he=r.RG8I),Z===r.SHORT&&(he=r.RG16I),Z===r.INT&&(he=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(he=r.RGB16UI),Z===r.UNSIGNED_INT&&(he=r.RGB32UI),Z===r.BYTE&&(he=r.RGB8I),Z===r.SHORT&&(he=r.RGB16I),Z===r.INT&&(he=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),Z===r.UNSIGNED_INT&&(he=r.RGBA32UI),Z===r.BYTE&&(he=r.RGBA8I),Z===r.SHORT&&(he=r.RGBA16I),Z===r.INT&&(he=r.RGBA32I)),w===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),w===r.RGBA){const Xe=xe?jl:Lt.getTransfer(pe);Z===r.FLOAT&&(he=r.RGBA32F),Z===r.HALF_FLOAT&&(he=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(he=Xe===kt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(D,w){let Z;return D?w===null||w===ss||w===Ko?Z=r.DEPTH24_STENCIL8:w===Xi?Z=r.DEPTH32F_STENCIL8:w===qo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ss||w===Ko?Z=r.DEPTH_COMPONENT24:w===Xi?Z=r.DEPTH_COMPONENT32F:w===qo&&(Z=r.DEPTH_COMPONENT16),Z}function z(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==vi&&D.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function N(D){const w=D.target;w.removeEventListener("dispose",N),H(w),w.isVideoTexture&&g.delete(w)}function F(D){const w=D.target;w.removeEventListener("dispose",F),C(w)}function H(D){const w=s.get(D);if(w.__webglInit===void 0)return;const Z=D.source,pe=x.get(Z);if(pe){const xe=pe[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(D),Object.keys(pe).length===0&&x.delete(Z)}s.remove(D)}function b(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const Z=D.source,pe=x.get(Z);delete pe[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let xe=0;xe<w.__webglFramebuffer[pe].length;xe++)r.deleteFramebuffer(w.__webglFramebuffer[pe][xe]);else r.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)r.deleteFramebuffer(w.__webglFramebuffer[pe]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let pe=0,xe=Z.length;pe<xe;pe++){const he=s.get(Z[pe]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(Z[pe])}s.remove(D)}let O=0;function oe(){O=0}function te(){const D=O;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),O+=1,D}function ce(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ge(D,w){const Z=s.get(D);if(D.isVideoTexture&&lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,D,w);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function de(D,w){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){q(Z,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function me(D,w){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){q(Z,D,w);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function G(D,w){const Z=s.get(D);if(D.version>0&&Z.__version!==D.version){ee(Z,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}const fe={[Cd]:r.REPEAT,[is]:r.CLAMP_TO_EDGE,[Rd]:r.MIRRORED_REPEAT},le={[vi]:r.NEAREST,[$x]:r.NEAREST_MIPMAP_NEAREST,[ml]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[Fc]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},k={[Zx]:r.NEVER,[iy]:r.ALWAYS,[Qx]:r.LESS,[Ug]:r.LEQUAL,[Jx]:r.EQUAL,[ny]:r.GEQUAL,[ey]:r.GREATER,[ty]:r.NOTEQUAL};function re(D,w){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Fc||w.magFilter===ml||w.magFilter===rs||w.minFilter===Ei||w.minFilter===Fc||w.minFilter===ml||w.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,fe[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,fe[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,fe[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,le[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vi||w.minFilter!==ml&&w.minFilter!==rs||w.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function we(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",N));const pe=w.source;let xe=x.get(pe);xe===void 0&&(xe={},x.set(pe,xe));const he=ce(w);if(he!==D.__cacheKey){xe[he]===void 0&&(xe[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),xe[he].usedTimes++;const Xe=xe[D.__cacheKey];Xe!==void 0&&(xe[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(w)),D.__cacheKey=he,D.__webglTexture=xe[he].texture}return Z}function Oe(D,w,Z){return Math.floor(Math.floor(D/Z)/w)}function Q(D,w,Z,pe){const he=D.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,Z,pe,w.data);else{he.sort((Me,Fe)=>Me.start-Fe.start);let Xe=0;for(let Me=1;Me<he.length;Me++){const Fe=he[Xe],ot=he[Me],Ze=Fe.start+Fe.count,De=Oe(ot.start,w.width,4),ht=Oe(Fe.start,w.width,4);ot.start<=Ze+1&&De===ht&&Oe(ot.start+ot.count-1,w.width,4)===De?Fe.count=Math.max(Fe.count,ot.start+ot.count-Fe.start):(++Xe,he[Xe]=ot)}he.length=Xe+1;const Ee=r.getParameter(r.UNPACK_ROW_LENGTH),Ve=r.getParameter(r.UNPACK_SKIP_PIXELS),$e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Fe=he.length;Me<Fe;Me++){const ot=he[Me],Ze=Math.floor(ot.start/4),De=Math.ceil(ot.count/4),ht=Ze%w.width,W=Math.floor(Ze/w.width),Re=De,Le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,ht,W,Re,Le,Z,pe,w.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ee),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,$e)}}function q(D,w,Z){let pe=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=r.TEXTURE_3D);const xe=we(D,w),he=w.source;t.bindTexture(pe,D.__webglTexture,r.TEXTURE0+Z);const Xe=s.get(he);if(he.version!==Xe.__version||xe===!0){t.activeTexture(r.TEXTURE0+Z);const Ee=Lt.getPrimaries(Lt.workingColorSpace),Ve=w.colorSpace===wr?null:Lt.getPrimaries(w.colorSpace),$e=w.colorSpace===wr||Ee===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=T(w.image,!1,a.maxTextureSize);Me=At(w,Me);const Fe=l.convert(w.format,w.colorSpace),ot=l.convert(w.type);let Ze=P(w.internalFormat,Fe,ot,w.colorSpace,w.isVideoTexture);re(pe,w);let De;const ht=w.mipmaps,W=w.isVideoTexture!==!0,Re=Xe.__version===void 0||xe===!0,Le=he.dataReady,Be=z(w,Me);if(w.isDepthTexture)Ze=R(w.format===Qo,w.type),Re&&(W?t.texStorage2D(r.TEXTURE_2D,1,Ze,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ze,Me.width,Me.height,0,Fe,ot,null));else if(w.isDataTexture)if(ht.length>0){W&&Re&&t.texStorage2D(r.TEXTURE_2D,Be,Ze,ht[0].width,ht[0].height);for(let Ae=0,_e=ht.length;Ae<_e;Ae++)De=ht[Ae],W?Le&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,Fe,ot,De.data):t.texImage2D(r.TEXTURE_2D,Ae,Ze,De.width,De.height,0,Fe,ot,De.data);w.generateMipmaps=!1}else W?(Re&&t.texStorage2D(r.TEXTURE_2D,Be,Ze,Me.width,Me.height),Le&&Q(w,Me,Fe,ot)):t.texImage2D(r.TEXTURE_2D,0,Ze,Me.width,Me.height,0,Fe,ot,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ze,ht[0].width,ht[0].height,Me.depth);for(let Ae=0,_e=ht.length;Ae<_e;Ae++)if(De=ht[Ae],w.format!==mi)if(Fe!==null)if(W){if(Le)if(w.layerUpdates.size>0){const Ye=Um(De.width,De.height,w.format,w.type);for(const ft of w.layerUpdates){const It=De.data.subarray(ft*Ye/De.data.BYTES_PER_ELEMENT,(ft+1)*Ye/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,ft,De.width,De.height,1,Fe,It)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,De.width,De.height,Me.depth,Fe,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ae,Ze,De.width,De.height,Me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ae,0,0,0,De.width,De.height,Me.depth,Fe,ot,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ae,Ze,De.width,De.height,Me.depth,0,Fe,ot,De.data)}else{W&&Re&&t.texStorage2D(r.TEXTURE_2D,Be,Ze,ht[0].width,ht[0].height);for(let Ae=0,_e=ht.length;Ae<_e;Ae++)De=ht[Ae],w.format!==mi?Fe!==null?W?Le&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,Fe,De.data):t.compressedTexImage2D(r.TEXTURE_2D,Ae,Ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Le&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,De.width,De.height,Fe,ot,De.data):t.texImage2D(r.TEXTURE_2D,Ae,Ze,De.width,De.height,0,Fe,ot,De.data)}else if(w.isDataArrayTexture)if(W){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,Ze,Me.width,Me.height,Me.depth),Le)if(w.layerUpdates.size>0){const Ae=Um(Me.width,Me.height,w.format,w.type);for(const _e of w.layerUpdates){const Ye=Me.data.subarray(_e*Ae/Me.data.BYTES_PER_ELEMENT,(_e+1)*Ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Fe,ot,Ye)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,ot,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,Me.width,Me.height,Me.depth,0,Fe,ot,Me.data);else if(w.isData3DTexture)W?(Re&&t.texStorage3D(r.TEXTURE_3D,Be,Ze,Me.width,Me.height,Me.depth),Le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,ot,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,Me.width,Me.height,Me.depth,0,Fe,ot,Me.data);else if(w.isFramebufferTexture){if(Re)if(W)t.texStorage2D(r.TEXTURE_2D,Be,Ze,Me.width,Me.height);else{let Ae=Me.width,_e=Me.height;for(let Ye=0;Ye<Be;Ye++)t.texImage2D(r.TEXTURE_2D,Ye,Ze,Ae,_e,0,Fe,ot,null),Ae>>=1,_e>>=1}}else if(ht.length>0){if(W&&Re){const Ae=Ut(ht[0]);t.texStorage2D(r.TEXTURE_2D,Be,Ze,Ae.width,Ae.height)}for(let Ae=0,_e=ht.length;Ae<_e;Ae++)De=ht[Ae],W?Le&&t.texSubImage2D(r.TEXTURE_2D,Ae,0,0,Fe,ot,De):t.texImage2D(r.TEXTURE_2D,Ae,Ze,Fe,ot,De);w.generateMipmaps=!1}else if(W){if(Re){const Ae=Ut(Me);t.texStorage2D(r.TEXTURE_2D,Be,Ze,Ae.width,Ae.height)}Le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,ot,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ze,Fe,ot,Me);y(w)&&v(pe),Xe.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ee(D,w,Z){if(w.image.length!==6)return;const pe=we(D,w),xe=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);const he=s.get(xe);if(xe.version!==he.__version||pe===!0){t.activeTexture(r.TEXTURE0+Z);const Xe=Lt.getPrimaries(Lt.workingColorSpace),Ee=w.colorSpace===wr?null:Lt.getPrimaries(w.colorSpace),Ve=w.colorSpace===wr||Xe===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let _e=0;_e<6;_e++)!$e&&!Me?Fe[_e]=T(w.image[_e],!0,a.maxCubemapSize):Fe[_e]=Me?w.image[_e].image:w.image[_e],Fe[_e]=At(w,Fe[_e]);const ot=Fe[0],Ze=l.convert(w.format,w.colorSpace),De=l.convert(w.type),ht=P(w.internalFormat,Ze,De,w.colorSpace),W=w.isVideoTexture!==!0,Re=he.__version===void 0||pe===!0,Le=xe.dataReady;let Be=z(w,ot);re(r.TEXTURE_CUBE_MAP,w);let Ae;if($e){W&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,ot.width,ot.height);for(let _e=0;_e<6;_e++){Ae=Fe[_e].mipmaps;for(let Ye=0;Ye<Ae.length;Ye++){const ft=Ae[Ye];w.format!==mi?Ze!==null?W?Le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,ft.width,ft.height,Ze,ft.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,0,0,ft.width,ft.height,Ze,De,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye,ht,ft.width,ft.height,0,Ze,De,ft.data)}}}else{if(Ae=w.mipmaps,W&&Re){Ae.length>0&&Be++;const _e=Ut(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Be,ht,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){W?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe[_e].width,Fe[_e].height,Ze,De,Fe[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,Fe[_e].width,Fe[_e].height,0,Ze,De,Fe[_e].data);for(let Ye=0;Ye<Ae.length;Ye++){const It=Ae[Ye].image[_e].image;W?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,It.width,It.height,Ze,De,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,ht,It.width,It.height,0,Ze,De,It.data)}}else{W?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ze,De,Fe[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ht,Ze,De,Fe[_e]);for(let Ye=0;Ye<Ae.length;Ye++){const ft=Ae[Ye];W?Le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,0,0,Ze,De,ft.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ye+1,ht,Ze,De,ft.image[_e])}}}y(w)&&v(r.TEXTURE_CUBE_MAP),he.__version=xe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function $(D,w,Z,pe,xe,he){const Xe=l.convert(Z.format,Z.colorSpace),Ee=l.convert(Z.type),Ve=P(Z.internalFormat,Xe,Ee,Z.colorSpace),$e=s.get(w),Me=s.get(Z);if(Me.__renderTarget=w,!$e.__hasExternalTextures){const Fe=Math.max(1,w.width>>he),ot=Math.max(1,w.height>>he);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?t.texImage3D(xe,he,Ve,Fe,ot,w.depth,0,Xe,Ee,null):t.texImage2D(xe,he,Ve,Fe,ot,0,Xe,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ke(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,xe,Me.__webglTexture,0,Mt(w)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,xe,Me.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(D,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const pe=w.depthTexture,xe=pe&&pe.isDepthTexture?pe.type:null,he=R(w.stencilBuffer,xe),Xe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=Mt(w);ke(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,he,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,he,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,he,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,D)}else{const pe=w.textures;for(let xe=0;xe<pe.length;xe++){const he=pe[xe],Xe=l.convert(he.format,he.colorSpace),Ee=l.convert(he.type),Ve=P(he.internalFormat,Xe,Ee,he.colorSpace),$e=Mt(w);Z&&ke(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ve,w.width,w.height):ke(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Ve,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge(w.depthTexture,0);const xe=pe.__webglTexture,he=Mt(w);if(w.depthTexture.format===Zo)ke(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Qo)ke(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function _t(D){const w=s.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",xe)};pe.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=pe}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?Ce(w.__webglFramebuffer[0],D):Ce(w.__webglFramebuffer,D)}else if(Z){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=r.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,he)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ve(w.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function et(D,w,Z){const pe=s.get(D);w!==void 0&&$(pe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&_t(D)}function B(D){const w=D.texture,Z=s.get(D),pe=s.get(w);D.addEventListener("dispose",F);const xe=D.textures,he=D.isWebGLCubeRenderTarget===!0,Xe=xe.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=w.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ee]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)Z.__webglFramebuffer[Ee][Ve]=r.createFramebuffer()}else Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ee=0,Ve=xe.length;Ee<Ve;Ee++){const $e=s.get(xe[Ee]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ke(D)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<xe.length;Ee++){const Ve=xe[Ee];Z.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const $e=l.convert(Ve.format,Ve.colorSpace),Me=l.convert(Ve.type),Fe=P(Ve.internalFormat,$e,Me,Ve.colorSpace,D.isXRRenderTarget===!0),ot=Mt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Fe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),re(r.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)$(Z.__webglFramebuffer[Ee][Ve],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve);else $(Z.__webglFramebuffer[Ee],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);y(w)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ee=0,Ve=xe.length;Ee<Ve;Ee++){const $e=xe[Ee],Me=s.get($e);let Fe=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Fe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Me.__webglTexture),re(Fe,$e),$(Z.__webglFramebuffer,D,$e,r.COLOR_ATTACHMENT0+Ee,Fe,0),y($e)&&v(Fe)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),re(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)$(Z.__webglFramebuffer[Ve],D,w,r.COLOR_ATTACHMENT0,Ee,Ve);else $(Z.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,Ee,0);y(w)&&v(Ee),t.unbindTexture()}D.depthBuffer&&_t(D)}function dt(D){const w=D.textures;for(let Z=0,pe=w.length;Z<pe;Z++){const xe=w[Z];if(y(xe)){const he=L(D),Xe=s.get(xe).__webglTexture;t.bindTexture(he,Xe),v(he),t.unbindTexture()}}}const Ne=[],tt=[];function qe(D){if(D.samples>0){if(ke(D)===!1){const w=D.textures,Z=D.width,pe=D.height;let xe=r.COLOR_BUFFER_BIT;const he=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(D),Ee=w.length>1;if(Ee)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ve=D.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[$e]);const Me=s.get(w[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,xe,r.NEAREST),h===!0&&(Ne.length=0,tt.length=0,Ne.push(r.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ne.push(he),tt.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[$e]);const Me=s.get(w[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Mt(D){return Math.min(a.maxSamples,D.samples)}function ke(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(D){const w=c.render.frame;g.get(D)!==w&&(g.set(D,w),D.update())}function At(D,w){const Z=D.colorSpace,pe=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==eo&&Z!==wr&&(Lt.getTransfer(Z)===kt?(pe!==mi||xe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=ge,this.setTexture2DArray=de,this.setTexture3D=me,this.setTextureCube=G,this.rebindTextures=et,this.setupRenderTarget=B,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ke}function pT(r,e){function t(s,a=wr){let l;const c=Lt.getTransfer(a);if(s===Ci)return r.UNSIGNED_BYTE;if(s===mf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===gf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Cg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Tg)return r.BYTE;if(s===Ag)return r.SHORT;if(s===qo)return r.UNSIGNED_SHORT;if(s===pf)return r.INT;if(s===ss)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===na)return r.HALF_FLOAT;if(s===Rg)return r.ALPHA;if(s===bg)return r.RGB;if(s===mi)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Qo)return r.DEPTH_STENCIL;if(s===Pg)return r.RED;if(s===vf)return r.RED_INTEGER;if(s===Lg)return r.RG;if(s===_f)return r.RG_INTEGER;if(s===xf)return r.RGBA_INTEGER;if(s===kl||s===Bl||s===zl||s===Hl)if(c===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bd||s===Pd||s===Ld||s===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ud||s===Id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Dd||s===Ud)return c===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Id)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===Wd||s===jd||s===Xd||s===$d||s===Yd||s===qd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Fd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$d)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vl||s===Kd||s===Zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Vl)return c===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ng||s===Qd||s===Jd||s===ef)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Vl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Qd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ef)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class n0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
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

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new n0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Pr({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Lr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends ro{constructor(e,t){super();const s=this;let a=null,l=1,c=null,d="local-floor",h=1,p=null,g=null,_=null,x=null,S=null,E=null;const T=new vT,y={},v=t.getContextAttributes();let L=null,P=null;const R=[],z=[],N=new Nt;let F=null;const H=new Wn;H.viewport=new qt;const b=new Wn;b.viewport=new qt;const C=[H,b],O=new By;let oe=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let q=R[Q];return q===void 0&&(q=new sd,R[Q]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Q){let q=R[Q];return q===void 0&&(q=new sd,R[Q]=q),q.getGripSpace()},this.getHand=function(Q){let q=R[Q];return q===void 0&&(q=new sd,R[Q]=q),q.getHandSpace()};function ce(Q){const q=z.indexOf(Q.inputSource);if(q===-1)return;const ee=R[q];ee!==void 0&&(ee.update(Q.inputSource,Q.frame,p||c),ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ge(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",ge),a.removeEventListener("inputsourceschange",de);for(let Q=0;Q<R.length;Q++){const q=z[Q];q!==null&&(z[Q]=null,R[Q].disconnect(q))}oe=null,te=null,T.reset();for(const Q in y)delete y[Q];e.setRenderTarget(L),S=null,x=null,_=null,a=null,P=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",ge),a.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(a,t)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,$=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Qo:Zo,$=v.stencil?Ko:ss);const Ce={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};x=_.createProjectionLayer(Ce),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new os(x.textureWidth,x.textureHeight,{format:mi,type:Ci,depthTexture:new Xg(x.textureWidth,x.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new os(S.framebufferWidth,S.framebufferHeight,{format:mi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(d),Oe.setContext(a),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(Q){for(let q=0;q<Q.removed.length;q++){const ee=Q.removed[q],$=z.indexOf(ee);$>=0&&(z[$]=null,R[$].disconnect(ee))}for(let q=0;q<Q.added.length;q++){const ee=Q.added[q];let $=z.indexOf(ee);if($===-1){for(let Ce=0;Ce<R.length;Ce++)if(Ce>=z.length){z.push(ee),$=Ce;break}else if(z[Ce]===null){z[Ce]=ee,$=Ce;break}if($===-1)break}const ve=R[$];ve&&ve.connect(ee)}}const me=new ie,G=new ie;function fe(Q,q,ee){me.setFromMatrixPosition(q.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const $=me.distanceTo(G),ve=q.projectionMatrix.elements,Ce=ee.projectionMatrix.elements,_t=ve[14]/(ve[10]-1),et=ve[14]/(ve[10]+1),B=(ve[9]+1)/ve[5],dt=(ve[9]-1)/ve[5],Ne=(ve[8]-1)/ve[0],tt=(Ce[8]+1)/Ce[0],qe=_t*Ne,Mt=_t*tt,ke=$/(-Ne+tt),lt=ke*-Ne;if(q.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(q.projectionMatrix),Q.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const At=_t+ke,Ut=et+ke,D=qe-lt,w=Mt+($-lt),Z=B*et/Ut*At,pe=dt*et/Ut*At;Q.projectionMatrix.makePerspective(D,w,Z,pe,At,Ut),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,q){q===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(q.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let q=Q.near,ee=Q.far;T.texture!==null&&(T.depthNear>0&&(q=T.depthNear),T.depthFar>0&&(ee=T.depthFar)),O.near=b.near=H.near=q,O.far=b.far=H.far=ee,(oe!==O.near||te!==O.far)&&(a.updateRenderState({depthNear:O.near,depthFar:O.far}),oe=O.near,te=O.far),O.layers.mask=Q.layers.mask|6,H.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;const $=Q.parent,ve=O.cameras;le(O,$);for(let Ce=0;Ce<ve.length;Ce++)le(ve[Ce],$);ve.length===2?fe(O,H,b):O.projectionMatrix.copy(H.projectionMatrix),k(Q,O,$)};function k(Q,q,ee){ee===null?Q.matrix.copy(q.matrixWorld):(Q.matrix.copy(ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(q.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(q.projectionMatrix),Q.projectionMatrixInverse.copy(q.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(O)},this.getCameraTexture=function(Q){return y[Q]};let re=null;function we(Q,q){if(g=q.getViewerPose(p||c),E=q,g!==null){const ee=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let $=!1;ee.length!==O.cameras.length&&(O.cameras.length=0,$=!0);for(let et=0;et<ee.length;et++){const B=ee[et];let dt=null;if(S!==null)dt=S.getViewport(B);else{const tt=_.getViewSubImage(x,B);dt=tt.viewport,et===0&&(e.setRenderTargetTextures(P,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(P))}let Ne=C[et];Ne===void 0&&(Ne=new Wn,Ne.layers.enable(et),Ne.viewport=new qt,C[et]=Ne),Ne.matrix.fromArray(B.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(B.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(dt.x,dt.y,dt.width,dt.height),et===0&&(O.matrix.copy(Ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),$===!0&&O.cameras.push(Ne)}const ve=a.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const et=_.getDepthInformation(ee[0]);et&&et.isValid&&et.texture&&T.init(et,a.renderState)}if(ve&&ve.includes("camera-access")&&(e.state.unbindTexture(),_))for(let et=0;et<ee.length;et++){const B=ee[et].camera;if(B){let dt=y[B];dt||(dt=new n0,y[B]=dt);const Ne=_.getCameraImage(B);dt.sourceTexture=Ne}}}for(let ee=0;ee<R.length;ee++){const $=z[ee],ve=R[ee];$!==null&&ve!==void 0&&ve.update($,q,p||c)}re&&re(Q,q),q.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:q}),E=null}const Oe=new Zg;Oe.setAnimationLoop(we),this.setAnimationLoop=function(Q){re=Q},this.dispose=function(){}}}const Qr=new Ri,xT=new Qt;function yT(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Vg(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,L,P,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,R)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),T(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?h(y,v,L,P):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===En&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===En&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,R=L.envMapRotation;P&&(y.envMap.value=P,Qr.copy(R),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Qr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,L,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=P*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===En&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function ST(r,e,t,s){let a={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const R=P.program;s.uniformBlockBinding(L,R)}function p(L,P){let R=a[L.id];R===void 0&&(E(L),R=g(L),a[L.id]=R,L.addEventListener("dispose",y));const z=P.program;s.updateUBOMapping(L,z);const N=e.render.frame;l[L.id]!==N&&(x(L),l[L.id]=N)}function g(L){const P=_();L.__bindingPointIndex=P;const R=r.createBuffer(),z=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,z,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,R),R}function _(){for(let L=0;L<d;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const P=a[L.id],R=L.uniforms,z=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let N=0,F=R.length;N<F;N++){const H=Array.isArray(R[N])?R[N]:[R[N]];for(let b=0,C=H.length;b<C;b++){const O=H[b];if(S(O,N,b,z)===!0){const oe=O.__offset,te=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let ge=0;ge<te.length;ge++){const de=te[ge],me=T(de);typeof de=="number"||typeof de=="boolean"?(O.__data[0]=de,r.bufferSubData(r.UNIFORM_BUFFER,oe+ce,O.__data)):de.isMatrix3?(O.__data[0]=de.elements[0],O.__data[1]=de.elements[1],O.__data[2]=de.elements[2],O.__data[3]=0,O.__data[4]=de.elements[3],O.__data[5]=de.elements[4],O.__data[6]=de.elements[5],O.__data[7]=0,O.__data[8]=de.elements[6],O.__data[9]=de.elements[7],O.__data[10]=de.elements[8],O.__data[11]=0):(de.toArray(O.__data,ce),ce+=me.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,R,z){const N=L.value,F=P+"_"+R;if(z[F]===void 0)return typeof N=="number"||typeof N=="boolean"?z[F]=N:z[F]=N.clone(),!0;{const H=z[F];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return z[F]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function E(L){const P=L.uniforms;let R=0;const z=16;for(let F=0,H=P.length;F<H;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,O=b.length;C<O;C++){const oe=b[C],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,ge=te.length;ce<ge;ce++){const de=te[ce],me=T(de),G=R%z,fe=G%me.boundary,le=G+fe;R+=fe,le!==0&&z-le<me.storage&&(R+=z-le),oe.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=me.storage}}}const N=R%z;return N>0&&(R+=z-N),L.__size=R,L.__cache={},this}function T(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function v(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:v}}class i0{constructor(e={}){const{canvas:t=sy(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,v=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let z=!1;this._outputColorSpace=ti;let N=0,F=0,H=null,b=-1,C=null;const O=new qt,oe=new qt;let te=null;const ce=new Rt(0);let ge=0,de=t.width,me=t.height,G=1,fe=null,le=null;const k=new qt(0,0,de,me),re=new qt(0,0,de,me);let we=!1;const Oe=new Mf;let Q=!1,q=!1;const ee=new Qt,$=new ie,ve=new qt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function et(){return H===null?G:1}let B=s;function dt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),B===null){const Y="webgl2";if(B=dt(Y,A),B===null)throw dt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ne,tt,qe,Mt,ke,lt,At,Ut,D,w,Z,pe,xe,he,Xe,Ee,Ve,$e,Me,Fe,ot,Ze,De,ht;function W(){Ne=new NE(B),Ne.init(),Ze=new pT(B,Ne),tt=new TE(B,Ne,e,Ze),qe=new fT(B,Ne),tt.reversedDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Mt=new IE(B),ke=new Jw,lt=new hT(B,Ne,qe,ke,tt,Ze,Mt),At=new CE(R),Ut=new LE(R),D=new Hy(B),De=new EE(B,D),w=new DE(B,D,Mt,De),Z=new OE(B,w,D,Mt),Me=new FE(B,tt,lt),Ee=new AE(ke),pe=new Qw(R,At,Ut,Ne,tt,De,Ee),xe=new yT(R,ke),he=new tT,Xe=new aT(Ne),$e=new ME(R,At,Ut,qe,Z,S,h),Ve=new cT(R,Z,tt),ht=new ST(B,Mt,tt,qe),Fe=new wE(B,Ne,Mt),ot=new UE(B,Ne,Mt),Mt.programs=pe.programs,R.capabilities=tt,R.extensions=Ne,R.properties=ke,R.renderLists=he,R.shadowMap=Ve,R.state=qe,R.info=Mt}W();const Re=new _T(R,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(de,me,!1))},this.getSize=function(A){return A.set(de,me)},this.setSize=function(A,Y,se=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=A,me=Y,t.width=Math.floor(A*G),t.height=Math.floor(Y*G),se===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(de*G,me*G).floor()},this.setDrawingBufferSize=function(A,Y,se){de=A,me=Y,G=se,t.width=Math.floor(A*se),t.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,Y,se,ae){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,Y,se,ae),qe.viewport(O.copy(k).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,Y,se,ae){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Y,se,ae),qe.scissor(oe.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){qe.setScissorTest(we=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let ae=0;if(A){let j=!1;if(H!==null){const be=H.texture.format;j=be===xf||be===_f||be===vf}if(j){const be=H.texture.type,Ue=be===Ci||be===ss||be===qo||be===Ko||be===mf||be===gf,We=$e.getClearColor(),ze=$e.getClearAlpha(),st=We.r,at=We.g,Je=We.b;Ue?(E[0]=st,E[1]=at,E[2]=Je,E[3]=ze,B.clearBufferuiv(B.COLOR,0,E)):(T[0]=st,T[1]=at,T[2]=Je,T[3]=ze,B.clearBufferiv(B.COLOR,0,T))}else ae|=B.COLOR_BUFFER_BIT}Y&&(ae|=B.DEPTH_BUFFER_BIT),se&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),$e.dispose(),he.dispose(),Xe.dispose(),ke.dispose(),At.dispose(),Ut.dispose(),Z.dispose(),De.dispose(),ht.dispose(),pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",pn),Re.removeEventListener("sessionend",ls),On.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Mt.autoReset,Y=Ve.enabled,se=Ve.autoUpdate,ae=Ve.needsUpdate,j=Ve.type;W(),Mt.autoReset=A,Ve.enabled=Y,Ve.autoUpdate=se,Ve.needsUpdate=ae,Ve.type=j}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){const Y=A.target;Y.removeEventListener("dispose",_e),Ye(Y)}function Ye(A){ft(A),ke.remove(A)}function ft(A){const Y=ke.get(A).programs;Y!==void 0&&(Y.forEach(function(se){pe.releaseProgram(se)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,ae,j,be){Y===null&&(Y=Ce);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,We=Li(A,Y,se,ae,j);qe.setMaterial(ae,Ue);let ze=se.index,st=1;if(ae.wireframe===!0){if(ze=w.getWireframeAttribute(se),ze===void 0)return;st=2}const at=se.drawRange,Je=se.attributes.position;let ut=at.start*st,Dt=(at.start+at.count)*st;be!==null&&(ut=Math.max(ut,be.start*st),Dt=Math.min(Dt,(be.start+be.count)*st)),ze!==null?(ut=Math.max(ut,0),Dt=Math.min(Dt,ze.count)):Je!=null&&(ut=Math.max(ut,0),Dt=Math.min(Dt,Je.count));const Tt=Dt-ut;if(Tt<0||Tt===1/0)return;De.setup(j,ae,We,se,ze);let Bt,Ft=Fe;if(ze!==null&&(Bt=D.get(ze),Ft=ot,Ft.setIndex(Bt)),j.isMesh)ae.wireframe===!0?(qe.setLineWidth(ae.wireframeLinewidth*et()),Ft.setMode(B.LINES)):Ft.setMode(B.TRIANGLES);else if(j.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),qe.setLineWidth(nt*et()),j.isLineSegments?Ft.setMode(B.LINES):j.isLineLoop?Ft.setMode(B.LINE_LOOP):Ft.setMode(B.LINE_STRIP)}else j.isPoints?Ft.setMode(B.POINTS):j.isSprite&&Ft.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nt=j._multiDrawStarts,Ot=j._multiDrawCounts,yt=j._multiDrawCount,tn=ze?D.get(ze).bytesPerElement:1,ii=ke.get(ae).currentProgram.getUniforms();for(let wn=0;wn<yt;wn++)ii.setValue(B,"_gl_DrawID",wn),Ft.render(nt[wn]/tn,Ot[wn])}else if(j.isInstancedMesh)Ft.renderInstances(ut,Tt,j.count);else if(se.isInstancedBufferGeometry){const nt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ot=Math.min(se.instanceCount,nt);Ft.renderInstances(ut,Tt,Ot)}else Ft.render(ut,Tt)};function It(A,Y,se){A.transparent===!0&&A.side===hi&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,cs(A,Y,se),A.side=br,A.needsUpdate=!0,cs(A,Y,se),A.side=hi):cs(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),v=Xe.get(se),v.init(Y),P.push(v),se.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==se&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ae=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){const We=be[Ue];It(We,se,j),ae.add(We)}else It(be,se,j),ae.add(be)}),v=P.pop(),ae},this.compileAsync=function(A,Y,se=null){const ae=this.compile(A,Y,se);return new Promise(j=>{function be(){if(ae.forEach(function(Ue){ke.get(Ue).currentProgram.isReady()&&ae.delete(Ue)}),ae.size===0){j(A);return}setTimeout(be,10)}Ne.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let wt=null;function $n(A){wt&&wt(A)}function pn(){On.stop()}function ls(){On.start()}const On=new Zg;On.setAnimationLoop($n),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){wt=A,Re.setAnimationLoop(A),A===null?On.stop():On.start()},Re.addEventListener("sessionstart",pn),Re.addEventListener("sessionend",ls),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,Y,H),v=Xe.get(A,P.length),v.init(Y),P.push(v),ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Oe.setFromProjectionMatrix(ee,wi,Y.reversedDepth),q=this.localClippingEnabled,Q=Ee.init(this.clippingPlanes,q),y=he.get(A,L.length),y.init(),L.push(y),Re.enabled===!0&&Re.isPresenting===!0){const be=R.xr.getDepthSensingMesh();be!==null&&oo(be,Y,-1/0,R.sortObjects)}oo(A,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(fe,le),_t=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,_t&&$e.addToRenderList(y,A),this.info.render.frame++,Q===!0&&Ee.beginShadows();const se=v.state.shadowsArray;Ve.render(se,A,Y),Q===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,j=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(j.length>0)for(let Ue=0,We=be.length;Ue<We;Ue++){const ze=be[Ue];Nr(ae,j,A,ze)}_t&&$e.render(A);for(let Ue=0,We=be.length;Ue<We;Ue++){const ze=be[Ue];Qi(y,A,ze,ze.viewport)}}else j.length>0&&Nr(ae,j,A,Y),_t&&$e.render(A),Qi(y,A,Y);H!==null&&F===0&&(lt.updateMultisampleRenderTarget(H),lt.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(R,A,Y),De.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(v=P[P.length-1],Q===!0&&Ee.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function oo(A,Y,se,ae){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){ae&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Ue=Z.update(A),We=A.material;We.visible&&y.push(A,Ue,We,se,ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const Ue=Z.update(A),We=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ve.copy(Ue.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(We)){const ze=Ue.groups;for(let st=0,at=ze.length;st<at;st++){const Je=ze[st],ut=We[Je.materialIndex];ut&&ut.visible&&y.push(A,Ue,ut,se,ve.z,Je)}}else We.visible&&y.push(A,Ue,We,se,ve.z,null)}}const be=A.children;for(let Ue=0,We=be.length;Ue<We;Ue++)oo(be[Ue],Y,se,ae)}function Qi(A,Y,se,ae){const j=A.opaque,be=A.transmissive,Ue=A.transparent;v.setupLightsView(se),Q===!0&&Ee.setGlobalState(R.clippingPlanes,se),ae&&qe.viewport(O.copy(ae)),j.length>0&&Pi(j,Y,se),be.length>0&&Pi(be,Y,se),Ue.length>0&&Pi(Ue,Y,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Nr(A,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new os(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?na:Ci,minFilter:rs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const be=v.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||O;be.setSize(Ue.z*R.transmissionResolutionScale,Ue.w*R.transmissionResolutionScale);const We=R.getRenderTarget(),ze=R.getActiveCubeFace(),st=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(ce),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),_t&&$e.render(se);const at=R.toneMapping;R.toneMapping=Ar;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),Q===!0&&Ee.setGlobalState(R.clippingPlanes,ae),Pi(A,se,ae),lt.updateMultisampleRenderTarget(be),lt.updateRenderTargetMipmap(be),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Dt=0,Tt=Y.length;Dt<Tt;Dt++){const Bt=Y[Dt],Ft=Bt.object,nt=Bt.geometry,Ot=Bt.material,yt=Bt.group;if(Ot.side===hi&&Ft.layers.test(ae.layers)){const tn=Ot.side;Ot.side=En,Ot.needsUpdate=!0,us(Ft,se,ae,nt,Ot,yt),Ot.side=tn,Ot.needsUpdate=!0,ut=!0}}ut===!0&&(lt.updateMultisampleRenderTarget(be),lt.updateRenderTargetMipmap(be))}R.setRenderTarget(We,ze,st),R.setClearColor(ce,ge),Je!==void 0&&(ae.viewport=Je),R.toneMapping=at}function Pi(A,Y,se){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,be=A.length;j<be;j++){const Ue=A[j],We=Ue.object,ze=Ue.geometry,st=Ue.group;let at=Ue.material;at.allowOverride===!0&&ae!==null&&(at=ae),We.layers.test(se.layers)&&us(We,Y,se,ze,at,st)}}function us(A,Y,se,ae,j,be){A.onBeforeRender(R,Y,se,ae,j,be),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,Y,se,ae,A,be),j.transparent===!0&&j.side===hi&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,R.renderBufferDirect(se,Y,ae,j,A,be),j.side=br,j.needsUpdate=!0,R.renderBufferDirect(se,Y,ae,j,A,be),j.side=hi):R.renderBufferDirect(se,Y,ae,j,A,be),A.onAfterRender(R,Y,se,ae,j,be)}function cs(A,Y,se){Y.isScene!==!0&&(Y=Ce);const ae=ke.get(A),j=v.state.lights,be=v.state.shadowsArray,Ue=j.state.version,We=pe.getParameters(A,j.state,be,Y,se),ze=pe.getProgramCacheKey(We);let st=ae.programs;ae.environment=A.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(A.isMeshStandardMaterial?Ut:At).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",_e),st=new Map,ae.programs=st);let at=st.get(ze);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Ue)return la(A,We),at}else We.uniforms=pe.getUniforms(A),A.onBeforeCompile(We,R),at=pe.acquireProgram(We,ze),st.set(ze,at),ae.uniforms=We.uniforms;const Je=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ee.uniform),la(A,We),ae.needsLights=ca(A),ae.lightsStateVersion=Ue,ae.needsLights&&(Je.ambientLightColor.value=j.state.ambient,Je.lightProbe.value=j.state.probe,Je.directionalLights.value=j.state.directional,Je.directionalLightShadows.value=j.state.directionalShadow,Je.spotLights.value=j.state.spot,Je.spotLightShadows.value=j.state.spotShadow,Je.rectAreaLights.value=j.state.rectArea,Je.ltc_1.value=j.state.rectAreaLTC1,Je.ltc_2.value=j.state.rectAreaLTC2,Je.pointLights.value=j.state.point,Je.pointLightShadows.value=j.state.pointShadow,Je.hemisphereLights.value=j.state.hemi,Je.directionalShadowMap.value=j.state.directionalShadowMap,Je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Je.spotShadowMap.value=j.state.spotShadowMap,Je.spotLightMatrix.value=j.state.spotLightMatrix,Je.spotLightMap.value=j.state.spotLightMap,Je.pointShadowMap.value=j.state.pointShadowMap,Je.pointShadowMatrix.value=j.state.pointShadowMatrix),ae.currentProgram=at,ae.uniformsList=null,at}function aa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Gl.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function la(A,Y){const se=ke.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Li(A,Y,se,ae,j){Y.isScene!==!0&&(Y=Ce),lt.resetTextureUnits();const be=Y.fog,Ue=ae.isMeshStandardMaterial?Y.environment:null,We=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:eo,ze=(ae.isMeshStandardMaterial?Ut:At).get(ae.envMap||Ue),st=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color;let Tt=Ar;ae.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const Bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ft=Bt!==void 0?Bt.length:0,nt=ke.get(ae),Ot=v.state.lights;if(Q===!0&&(q===!0||A!==C)){const Kt=A===C&&ae.id===b;Ee.setState(ae,A,Kt)}let yt=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ot.state.version||nt.outputColorSpace!==We||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==ze||ae.fog===!0&&nt.fog!==be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ee.numPlanes||nt.numIntersection!==Ee.numIntersection)||nt.vertexAlphas!==st||nt.vertexTangents!==at||nt.morphTargets!==Je||nt.morphNormals!==ut||nt.morphColors!==Dt||nt.toneMapping!==Tt||nt.morphTargetsCount!==Ft)&&(yt=!0):(yt=!0,nt.__version=ae.version);let tn=nt.currentProgram;yt===!0&&(tn=cs(ae,Y,j));let ii=!1,wn=!1,Dr=!1;const zt=tn.getUniforms(),Tn=nt.uniforms;if(qe.useProgram(tn.program)&&(ii=!0,wn=!0,Dr=!0),ae.id!==b&&(b=ae.id,wn=!0),ii||C!==A){qe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",A.projectionMatrix),zt.setValue(B,"viewMatrix",A.matrixWorldInverse);const gn=zt.map.cameraPosition;gn!==void 0&&gn.setValue(B,$.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,wn=!0,Dr=!0)}if(j.isSkinnedMesh){zt.setOptional(B,j,"bindMatrix"),zt.setOptional(B,j,"bindMatrixInverse");const Kt=j.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),zt.setValue(B,"boneTexture",Kt.boneTexture,lt))}j.isBatchedMesh&&(zt.setOptional(B,j,"batchingTexture"),zt.setValue(B,"batchingTexture",j._matricesTexture,lt),zt.setOptional(B,j,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",j._indirectTexture,lt),zt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",j._colorsTexture,lt));const mn=se.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Me.update(j,se,tn),(wn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,zt.setValue(B,"receiveShadow",j.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Tn.envMap.value=ze,Tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),wn&&(zt.setValue(B,"toneMappingExposure",R.toneMappingExposure),nt.needsLights&&ua(Tn,Dr),be&&ae.fog===!0&&xe.refreshFogUniforms(Tn,be),xe.refreshMaterialUniforms(Tn,ae,G,me,v.state.transmissionRenderTarget[A.id]),Gl.upload(B,aa(nt),Tn,lt)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Gl.upload(B,aa(nt),Tn,lt),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(B,"center",j.center),zt.setValue(B,"modelViewMatrix",j.modelViewMatrix),zt.setValue(B,"normalMatrix",j.normalMatrix),zt.setValue(B,"modelMatrix",j.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Kt=ae.uniformsGroups;for(let gn=0,Ur=Kt.length;gn<Ur;gn++){const St=Kt[gn];ht.update(St,tn),ht.bind(St,tn)}}return tn}function ua(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function ca(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,Y,se){const ae=ke.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ke.get(A.texture).__webglTexture=Y,ke.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=ke.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Ql=B.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){H=A,N=Y,F=se;let ae=!0,j=null,be=!1,Ue=!1;if(A){const ze=ke.get(A);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),ae=!1;else if(ze.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(ze.__hasExternalTextures)lt.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(ze.__boundDepthTexture!==Je){if(Je!==null&&ke.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ue=!0);const at=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?j=at[Y][se]:j=at[Y],be=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?j=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?j=at[se]:j=at,O.copy(A.viewport),oe.copy(A.scissor),te=A.scissorTest}else O.copy(k).multiplyScalar(G).floor(),oe.copy(re).multiplyScalar(G).floor(),te=we;if(se!==0&&(j=Ql),qe.bindFramebuffer(B.FRAMEBUFFER,j)&&ae&&qe.drawBuffers(A,j),qe.viewport(O),qe.scissor(oe),qe.setScissorTest(te),be){const ze=ke.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,se)}else if(Ue){const ze=Y;for(let st=0;st<A.textures.length;st++){const at=ke.get(A.textures[st]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+st,at.__webglTexture,se,ze)}}else if(A!==null&&se!==0){const ze=ke.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,se)}b=-1},this.readRenderTargetPixels=function(A,Y,se,ae,j,be,Ue,We=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){qe.bindFramebuffer(B.FRAMEBUFFER,ze);try{const st=A.textures[We],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ae&&se>=0&&se<=A.height-j&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(Y,se,ae,j,Ze.convert(at),Ze.convert(Je),be))}finally{const st=H!==null?ke.get(H).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,ae,j,be,Ue,We=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(Y>=0&&Y<=A.width-ae&&se>=0&&se<=A.height-j){qe.bindFramebuffer(B.FRAMEBUFFER,ze);const st=A.textures[We],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+We),B.readPixels(Y,se,ae,j,Ze.convert(at),Ze.convert(Je),0);const Dt=H!==null?ke.get(H).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,Dt);const Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await oy(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.deleteBuffer(ut),B.deleteSync(Tt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const ae=Math.pow(2,-se),j=Math.floor(A.image.width*ae),be=Math.floor(A.image.height*ae),Ue=Y!==null?Y.x:0,We=Y!==null?Y.y:0;lt.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,Ue,We,j,be),qe.unbindTexture()};const da=B.createFramebuffer(),fa=B.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,ae=null,j=0,be=null){be===null&&(j!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=j,j=0):be=0);let Ue,We,ze,st,at,Je,ut,Dt,Tt;const Bt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(se!==null)Ue=se.max.x-se.min.x,We=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,st=se.min.x,at=se.min.y,Je=se.isBox3?se.min.z:0;else{const mn=Math.pow(2,-j);Ue=Math.floor(Bt.width*mn),We=Math.floor(Bt.height*mn),A.isDataArrayTexture?ze=Bt.depth:A.isData3DTexture?ze=Math.floor(Bt.depth*mn):ze=1,st=0,at=0,Je=0}ae!==null?(ut=ae.x,Dt=ae.y,Tt=ae.z):(ut=0,Dt=0,Tt=0);const Ft=Ze.convert(Y.format),nt=Ze.convert(Y.type);let Ot;Y.isData3DTexture?(lt.setTexture3D(Y,0),Ot=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Ot=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Ot=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),tn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ii=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),Dr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,st),B.pixelStorei(B.UNPACK_SKIP_ROWS,at),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);const zt=A.isDataArrayTexture||A.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const mn=ke.get(A),Kt=ke.get(Y),gn=ke.get(mn.__renderTarget),Ur=ke.get(Kt.__renderTarget);qe.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let St=0;St<ze;St++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(A).__webglTexture,j,Je+St),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(Y).__webglTexture,be,Tt+St)),B.blitFramebuffer(st,at,Ue,We,ut,Dt,Ue,We,B.DEPTH_BUFFER_BIT,B.NEAREST);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||ke.has(A)){const mn=ke.get(A),Kt=ke.get(Y);qe.bindFramebuffer(B.READ_FRAMEBUFFER,da),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,fa);for(let gn=0;gn<ze;gn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,j,Je+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,j),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Kt.__webglTexture,be,Tt+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Kt.__webglTexture,be),j!==0?B.blitFramebuffer(st,at,Ue,We,ut,Dt,Ue,We,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(Ot,be,ut,Dt,Tt+gn,st,at,Ue,We):B.copyTexSubImage2D(Ot,be,ut,Dt,st,at,Ue,We);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ot,be,ut,Dt,Tt,Ue,We,ze,Ft,nt,Bt.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,be,ut,Dt,Tt,Ue,We,ze,Ft,Bt.data):B.texSubImage3D(Ot,be,ut,Dt,Tt,Ue,We,ze,Ft,nt,Bt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,ut,Dt,Ue,We,Ft,nt,Bt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,ut,Dt,Bt.width,Bt.height,Ft,Bt.data):B.texSubImage2D(B.TEXTURE_2D,be,ut,Dt,Ue,We,Ft,nt,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ii),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dr),be===0&&Y.generateMipmaps&&B.generateMipmap(Ot),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,se=null,ae=null,j=0){return qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,se,ae,j)},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){N=0,F=0,H=null,qe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const sg=()=>{const[r,e]=ue.useState(""),[t,s]=ue.useState(""),[a,l]=ue.useState(!1),[c,d]=ue.useState(!0),[h,p]=ue.useState({}),g=ue.useRef(null),_=ue.useRef(null),x=ue.useRef(null),S=ue.useRef(null),E=ue.useRef(null),T=ue.useRef([]),y=of(),v="broker";ue.useEffect(()=>{if(!g.current)return;const N=new jg,F=new Wn(75,1,.1,1e3),H=new i0({alpha:!0,antialias:!0,powerPreference:"high-performance"});H.setSize(g.current.clientWidth,g.current.clientHeight),H.setClearColor(0,0),H.shadowMap.enabled=!0,H.shadowMap.type=ff,g.current.appendChild(H.domElement),_.current=N,S.current=H;const b=new Kg(4210752,.8);N.add(b);const C=new qg(16777215,1);C.position.set(10,15,10),C.castShadow=!0,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.near=.5,C.shadow.camera.far=50,C.shadow.camera.left=-20,C.shadow.camera.right=20,C.shadow.camera.top=20,C.shadow.camera.bottom=-20,N.add(C);const O=new $g(8900331,27028,.5);N.add(O);const oe=()=>{const q=new ni,ee=new gi(.8,1.2,6,16),$=new Pt({color:2899536,shininess:100,specular:1118481}),ve=new mt(ee,$);ve.rotation.z=Math.PI/2,ve.castShadow=!0,ve.receiveShadow=!0,q.add(ve);const Ce=new jn(5.5,.2,1.8),_t=new Pt({color:9127187,shininess:50}),et=new mt(Ce,_t);et.position.y=.9,et.castShadow=!0,q.add(et);const B=new jn(2.5,1.8,1.5),dt=new Pt({color:16777215,shininess:80}),Ne=new mt(B,dt);Ne.position.set(-.5,1.9,0),Ne.castShadow=!0,q.add(Ne);const tt=new jn(1.8,1,1.2),qe=new Pt({color:15263976,shininess:90}),Mt=new mt(tt,qe);Mt.position.set(-.3,2.9,0),Mt.castShadow=!0,q.add(Mt);const ke=new gi(.15,.18,2,8),lt=new Pt({color:3426654,shininess:100}),At=new mt(ke,lt);At.position.set(-1.5,3.5,0),At.castShadow=!0,q.add(At);const Ut=new gi(.05,.08,4,8),D=new Pt({color:6636321,shininess:20}),w=new mt(Ut,D);w.position.set(.5,4,0),w.castShadow=!0,q.add(w);const Z=new Lr(1.5,2.5),pe=new Pt({color:16316671,side:hi,transparent:!0,opacity:.9,shininess:30}),xe=new mt(Z,pe);xe.position.set(1.2,3.5,0),xe.rotation.y=Math.PI/2,q.add(xe);const he=new Cr(.2,.8,8),Xe=new Pt({color:16766720,shininess:100}),Ee=new mt(he,Xe);Ee.position.set(2.8,1.2,0),Ee.rotation.z=-Math.PI/2,Ee.castShadow=!0,q.add(Ee);const Ve=new jn(.3,.8,.1),$e=new Pt({color:2899536,shininess:80}),Me=new mt(Ve,$e);return Me.position.set(2.2,.5,.8),Me.castShadow=!0,q.add(Me),q},te=()=>{const q=new Lr(100,100,50,50),ee=new Pt({color:27028,transparent:!0,opacity:.9,shininess:100,specular:8900331}),$=new mt(q,ee);$.rotation.x=-Math.PI/2,$.position.y=-2,$.receiveShadow=!0;const ve=q.attributes.position.array;for(let Ce=0;Ce<ve.length;Ce+=3)ve[Ce+2]=Math.sin(ve[Ce]*.1)*.2+Math.cos(ve[Ce+1]*.1)*.2;return q.attributes.position.needsUpdate=!0,$},ce=()=>{const q=[];for(let ee=0;ee<3;ee++){const $=new ni,ve=new gi(.3,.4,2,8);ve.translate(0,0,1);const Ce=new Pt({color:11119017,shininess:50}),_t=new mt(ve,Ce);$.add(_t);const et=new Cr(.2,.5,8);et.rotateX(Math.PI/2);const B=new Pt({color:7372944,shininess:30}),dt=new mt(et,B);dt.position.set(0,.2,.8),$.add(dt);const Ne=ee/3*Math.PI*2,tt=15+Math.random()*10;$.position.set(Math.cos(Ne)*tt,-1+Math.random()*.5,Math.sin(Ne)*tt),N.add($),q.push({mesh:$,speed:.5+Math.random()*.5,angle:Ne,radius:tt,offset:Math.random()*Math.PI*2})}for(let ee=0;ee<10;ee++){const $=new ni,ve=new Rr(.2,8,8),Ce=new Pt({color:Math.random()>.5?16737095:4620980,shininess:30}),_t=new mt(ve,Ce);$.add(_t);const et=new Cr(.1,.4,8);et.rotateZ(Math.PI/2);const B=new Pt({color:Math.random()>.5?16737095:4620980,shininess:30}),dt=new mt(et,B);dt.position.set(-.3,0,0),$.add(dt);const Ne=ee/10*Math.PI*2,tt=5+Math.random()*15;$.position.set(Math.cos(Ne)*tt,-1.5+Math.random()*1,Math.sin(Ne)*tt),$.scale.set(.7,.7,.7),N.add($),q.push({mesh:$,speed:1+Math.random()*1,angle:Ne,radius:tt,offset:Math.random()*Math.PI*2})}return q},ge=new Rr(200,32,32),de=new Pt({color:8900331,side:En,transparent:!0,opacity:.9}),me=new mt(ge,de);N.add(me);const G=()=>{const q=new ni;for(let ee=0;ee<12;ee++){const $=new Rr(3+Math.random()*2,8,8),ve=new Pt({color:16777215,transparent:!0,opacity:.7}),Ce=new mt($,ve);Ce.position.set((Math.random()-.5)*100,15+Math.random()*15,(Math.random()-.5)*100),Ce.scale.set(1+Math.random()*.8,.5+Math.random()*.5,1+Math.random()*.8),q.add(Ce)}return q},fe=oe(),le=te(),k=G(),re=ce();fe.position.set(0,0,0),N.add(fe),N.add(le),N.add(k),x.current=fe,T.current=re,F.position.set(8,6,8),F.lookAt(0,0,0);let we=0;const Oe=()=>{E.current=requestAnimationFrame(Oe),we+=.01,x.current&&(x.current.position.y=Math.sin(we*1.2)*.3,x.current.rotation.z=Math.sin(we*.8)*.05,x.current.rotation.x=Math.cos(we*.6)*.03,x.current.position.x=Math.sin(we*.3)*2);const q=le.geometry.attributes.position.array;for(let $=0;$<q.length;$+=3){const ve=q[$],Ce=q[$+1];q[$+2]=Math.sin(ve*.1+we*2)*.3+Math.cos(Ce*.1+we*1.5)*.2+Math.sin(ve*.05+we)*.1}le.geometry.attributes.position.needsUpdate=!0,T.current.forEach($=>{$.angle+=.01*$.speed,$.mesh.position.x=Math.cos($.angle+$.offset)*$.radius,$.mesh.position.z=Math.sin($.angle+$.offset)*$.radius,$.mesh.position.y=-1.5+Math.sin(we*2+$.offset)*.5,$.mesh.lookAt(Math.cos($.angle+$.offset+.1)*$.radius,-1.5+Math.sin(we*2+$.offset+.1)*.5,Math.sin($.angle+$.offset+.1)*$.radius)}),k.children.forEach(($,ve)=>{$.position.x+=Math.sin(we+ve)*.005,$.position.z+=Math.cos(we+ve)*.005});const ee=15;F.position.x=Math.cos(we*.15)*ee,F.position.z=Math.sin(we*.15)*ee,F.position.y=6+Math.sin(we*.2)*2,F.lookAt(0,0,0),H.render(N,F)},Q=()=>{if(!g.current)return;const q=g.current.clientWidth,ee=g.current.clientHeight;F.aspect=q/ee,F.updateProjectionMatrix(),H.setSize(q,ee)};return window.addEventListener("resize",Q),Oe(),d(!1),()=>{window.removeEventListener("resize",Q),E.current&&cancelAnimationFrame(E.current),g.current&&H.domElement&&g.current.removeChild(H.domElement),H.dispose()}},[]);const L=()=>{const N={};return r.trim()?/\S+@\S+\.\S+/.test(r)||(N.email="Email is invalid"):N.email="Email is required",t||(N.password="Password is required"),p(N),Object.keys(N).length===0},P=()=>{L()&&(console.log("Login:",{userType:v,email:r,password:t}),y("/fixture"))},R=()=>{y("/register")},z=()=>{if(!r.trim()){p({email:"Email is required"});return}if(!/\S+@\S+\.\S+/.test(r)){p({email:"Email is invalid"});return}console.log("Forgot password for:",r)};return U.jsxs("div",{className:"min-h-screen bg-gradient-maritime relative overflow-hidden",children:[U.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(50)].map((N,F)=>U.jsx("div",{className:"absolute w-2 h-2 bg-sail-white rounded-full opacity-20 animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*3}s`}},F))}),U.jsxs("div",{className:"flex min-h-screen relative z-10",children:[U.jsx("div",{className:"w-full md:w-1/2 flex items-center justify-center p-8 backdrop-blur-sm bg-black/20",children:U.jsxs("div",{className:"w-full max-w-md",children:[c&&U.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/70 z-20 rounded-lg",children:U.jsxs("div",{className:"text-center text-sail-white",children:[U.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-sail-white mx-auto mb-4"}),U.jsx("p",{className:"text-lg font-semibold",children:"Loading Maritime Scene..."})]})}),U.jsxs("div",{className:"text-center mb-8",children:[U.jsx("h1",{className:"text-4xl font-bold text-sail-white mb-2 tracking-wide",children:"⚓ Charter Party"}),U.jsx("p",{className:"text-ocean-foam text-lg",children:"Broker Login"})]}),a?U.jsxs("div",{className:"space-y-6",children:[U.jsx("h2",{className:"text-2xl font-bold text-sail-white text-center mb-6",children:"🧭 Reset Password"}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),U.jsx("input",{type:"email",value:r,onChange:N=>e(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${h.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Enter your email",required:!0}),h.email&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:h.email})]}),U.jsx("button",{onClick:z,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Send Reset Link 📧"}),U.jsx("button",{onClick:()=>l(!1),className:"w-full text-ocean-foam hover:text-sail-white font-medium transition-colors duration-300",children:"← Back to Login"})]}):U.jsxs("div",{className:"space-y-6",children:[U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),U.jsx("input",{type:"email",value:r,onChange:N=>e(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${h.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"broker@example.com",required:!0}),h.email&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:h.email})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Password"}),U.jsx("input",{type:"password",value:t,onChange:N=>s(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${h.password?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Enter your password",required:!0}),h.password&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:h.password})]}),U.jsx("button",{onClick:P,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Set Sail - Login ⛵"}),U.jsx("button",{type:"button",onClick:()=>l(!0),className:"w-full text-ocean-foam hover:text-sail-white font-medium transition-colors duration-300",children:"Forgot Password? 🧭"}),U.jsxs("div",{className:"text-center pt-4 border-t border-border",children:[U.jsx("p",{className:"text-ocean-foam mb-3",children:"New to Charter Party?"}),U.jsx("button",{type:"button",onClick:R,className:"bg-white/10 text-ocean-foam py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-border",children:"Join Our Fleet - Sign Up 🚢"})]})]})]})}),U.jsxs("div",{className:"hidden md:block md:w-1/2 relative",children:[U.jsx("div",{ref:g,className:"w-full h-full"}),U.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"}),U.jsx("div",{className:"absolute top-8 right-8 text-sail-white/80",children:U.jsxs("div",{className:"text-right",children:[U.jsx("div",{className:"text-sm font-medium",children:"Current Weather"}),U.jsx("div",{className:"text-xl",children:"⛅ Fair Winds"})]})}),U.jsx("div",{className:"absolute bottom-8 right-8 text-sail-white/80",children:U.jsxs("div",{className:"text-right",children:[U.jsx("div",{className:"text-sm font-medium",children:"Sea Condition"}),U.jsx("div",{className:"text-xl",children:"🌊 Calm Seas"})]})})]})]}),U.jsx("div",{className:"absolute bottom-0 left-0 w-full",children:U.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"w-full h-16 fill-current text-ocean-surface/30",children:U.jsx("path",{d:"M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z",children:U.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z;\r
                      M0,0V40C240,100,480,20,720,40C960,100,1200,20,1200,40V0Z;\r
                      M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z`})})})})]})},MT=()=>{const[r,e]=ue.useState(""),[t,s]=ue.useState(""),[a,l]=ue.useState(""),[c,d]=ue.useState(""),[h,p]=ue.useState(!0),[g,_]=ue.useState({}),x=ue.useRef(null),S=ue.useRef(null),E=ue.useRef(null),T=ue.useRef(null),y=ue.useRef(null),v=ue.useRef([]),L=of(),P="broker";ue.useEffect(()=>{if(!x.current)return;const N=new jg,F=new Wn(75,1,.1,1e3),H=new i0({alpha:!0,antialias:!0,powerPreference:"high-performance"});H.setSize(x.current.clientWidth,x.current.clientHeight),H.setClearColor(0,0),H.shadowMap.enabled=!0,H.shadowMap.type=ff,x.current.appendChild(H.domElement),S.current=N,T.current=H;const b=new Kg(4210752,.8);N.add(b);const C=new qg(16777215,1);C.position.set(10,15,10),C.castShadow=!0,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.near=.5,C.shadow.camera.far=50,C.shadow.camera.left=-20,C.shadow.camera.right=20,C.shadow.camera.top=20,C.shadow.camera.bottom=-20,N.add(C);const O=new $g(8900331,27028,.5);N.add(O);const oe=()=>{const q=new ni,ee=new gi(.8,1.2,6,16),$=new Pt({color:2899536,shininess:100,specular:1118481}),ve=new mt(ee,$);ve.rotation.z=Math.PI/2,ve.castShadow=!0,ve.receiveShadow=!0,q.add(ve);const Ce=new jn(5.5,.2,1.8),_t=new Pt({color:9127187,shininess:50}),et=new mt(Ce,_t);et.position.y=.9,et.castShadow=!0,q.add(et);const B=new jn(2.5,1.8,1.5),dt=new Pt({color:16777215,shininess:80}),Ne=new mt(B,dt);Ne.position.set(-.5,1.9,0),Ne.castShadow=!0,q.add(Ne);const tt=new jn(1.8,1,1.2),qe=new Pt({color:15263976,shininess:90}),Mt=new mt(tt,qe);Mt.position.set(-.3,2.9,0),Mt.castShadow=!0,q.add(Mt);const ke=new gi(.15,.18,2,8),lt=new Pt({color:3426654,shininess:100}),At=new mt(ke,lt);At.position.set(-1.5,3.5,0),At.castShadow=!0,q.add(At);const Ut=new gi(.05,.08,4,8),D=new Pt({color:6636321,shininess:20}),w=new mt(Ut,D);w.position.set(.5,4,0),w.castShadow=!0,q.add(w);const Z=new Lr(1.5,2.5),pe=new Pt({color:16316671,side:hi,transparent:!0,opacity:.9,shininess:30}),xe=new mt(Z,pe);xe.position.set(1.2,3.5,0),xe.rotation.y=Math.PI/2,q.add(xe);const he=new Cr(.2,.8,8),Xe=new Pt({color:16766720,shininess:100}),Ee=new mt(he,Xe);Ee.position.set(2.8,1.2,0),Ee.rotation.z=-Math.PI/2,Ee.castShadow=!0,q.add(Ee);const Ve=new jn(.3,.8,.1),$e=new Pt({color:2899536,shininess:80}),Me=new mt(Ve,$e);return Me.position.set(2.2,.5,.8),Me.castShadow=!0,q.add(Me),q},te=()=>{const q=new Lr(100,100,50,50),ee=new Pt({color:27028,transparent:!0,opacity:.9,shininess:100,specular:8900331}),$=new mt(q,ee);$.rotation.x=-Math.PI/2,$.position.y=-2,$.receiveShadow=!0;const ve=q.attributes.position.array;for(let Ce=0;Ce<ve.length;Ce+=3)ve[Ce+2]=Math.sin(ve[Ce]*.1)*.2+Math.cos(ve[Ce+1]*.1)*.2;return q.attributes.position.needsUpdate=!0,$},ce=()=>{const q=[];for(let ee=0;ee<3;ee++){const $=new ni,ve=new gi(.3,.4,2,8);ve.translate(0,0,1);const Ce=new Pt({color:11119017,shininess:50}),_t=new mt(ve,Ce);$.add(_t);const et=new Cr(.2,.5,8);et.rotateX(Math.PI/2);const B=new Pt({color:7372944,shininess:30}),dt=new mt(et,B);dt.position.set(0,.2,.8),$.add(dt);const Ne=ee/3*Math.PI*2,tt=15+Math.random()*10;$.position.set(Math.cos(Ne)*tt,-1+Math.random()*.5,Math.sin(Ne)*tt),N.add($),q.push({mesh:$,speed:.5+Math.random()*.5,angle:Ne,radius:tt,offset:Math.random()*Math.PI*2})}for(let ee=0;ee<10;ee++){const $=new ni,ve=new Rr(.2,8,8),Ce=new Pt({color:Math.random()>.5?16737095:4620980,shininess:30}),_t=new mt(ve,Ce);$.add(_t);const et=new Cr(.1,.4,8);et.rotateZ(Math.PI/2);const B=new Pt({color:Math.random()>.5?16737095:4620980,shininess:30}),dt=new mt(et,B);dt.position.set(-.3,0,0),$.add(dt);const Ne=ee/10*Math.PI*2,tt=5+Math.random()*15;$.position.set(Math.cos(Ne)*tt,-1.5+Math.random()*1,Math.sin(Ne)*tt),$.scale.set(.7,.7,.7),N.add($),q.push({mesh:$,speed:1+Math.random()*1,angle:Ne,radius:tt,offset:Math.random()*Math.PI*2})}return q},ge=new Rr(200,32,32),de=new Pt({color:8900331,side:En,transparent:!0,opacity:.9}),me=new mt(ge,de);N.add(me);const G=()=>{const q=new ni;for(let ee=0;ee<12;ee++){const $=new Rr(3+Math.random()*2,8,8),ve=new Pt({color:16777215,transparent:!0,opacity:.7}),Ce=new mt($,ve);Ce.position.set((Math.random()-.5)*100,15+Math.random()*15,(Math.random()-.5)*100),Ce.scale.set(1+Math.random()*.8,.5+Math.random()*.5,1+Math.random()*.8),q.add(Ce)}return q},fe=oe(),le=te(),k=G(),re=ce();fe.position.set(0,0,0),N.add(fe),N.add(le),N.add(k),E.current=fe,v.current=re,F.position.set(8,6,8),F.lookAt(0,0,0);let we=0;const Oe=()=>{y.current=requestAnimationFrame(Oe),we+=.01,E.current&&(E.current.position.y=Math.sin(we*1.2)*.3,E.current.rotation.z=Math.sin(we*.8)*.05,E.current.rotation.x=Math.cos(we*.6)*.03,E.current.position.x=Math.sin(we*.3)*2);const q=le.geometry.attributes.position.array;for(let $=0;$<q.length;$+=3){const ve=q[$],Ce=q[$+1];q[$+2]=Math.sin(ve*.1+we*2)*.3+Math.cos(Ce*.1+we*1.5)*.2+Math.sin(ve*.05+we)*.1}le.geometry.attributes.position.needsUpdate=!0,v.current.forEach($=>{$.angle+=.01*$.speed,$.mesh.position.x=Math.cos($.angle+$.offset)*$.radius,$.mesh.position.z=Math.sin($.angle+$.offset)*$.radius,$.mesh.position.y=-1.5+Math.sin(we*2+$.offset)*.5,$.mesh.lookAt(Math.cos($.angle+$.offset+.1)*$.radius,-1.5+Math.sin(we*2+$.offset+.1)*.5,Math.sin($.angle+$.offset+.1)*$.radius)}),k.children.forEach(($,ve)=>{$.position.x+=Math.sin(we+ve)*.005,$.position.z+=Math.cos(we+ve)*.005});const ee=15;F.position.x=Math.cos(we*.15)*ee,F.position.z=Math.sin(we*.15)*ee,F.position.y=6+Math.sin(we*.2)*2,F.lookAt(0,0,0),H.render(N,F)},Q=()=>{if(!x.current)return;const q=x.current.clientWidth,ee=x.current.clientHeight;F.aspect=q/ee,F.updateProjectionMatrix(),H.setSize(q,ee)};return window.addEventListener("resize",Q),Oe(),p(!1),()=>{window.removeEventListener("resize",Q),y.current&&cancelAnimationFrame(y.current),x.current&&H.domElement&&x.current.removeChild(H.domElement),H.dispose()}},[]);const R=()=>{const N={};return r.trim()||(N.name="Name is required"),t.trim()?/\S+@\S+\.\S+/.test(t)||(N.email="Email is invalid"):N.email="Email is required",a?a.length<6&&(N.password="Password must be at least 6 characters"):N.password="Password is required",a!==c&&(N.confirmPassword="Passwords do not match"),_(N),Object.keys(N).length===0},z=N=>{N.preventDefault(),R()&&(console.log("Registration:",{userType:P,name:r,email:t,password:a}),L("/login"))};return U.jsxs("div",{className:"min-h-screen bg-gradient-maritime relative overflow-hidden",children:[U.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(50)].map((N,F)=>U.jsx("div",{className:"absolute w-2 h-2 bg-sail-white rounded-full opacity-20 animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*3}s`}},F))}),U.jsxs("div",{className:"flex min-h-screen relative z-10",children:[U.jsx("div",{className:"w-full md:w-1/2 flex items-center justify-center p-8 backdrop-blur-sm bg-black/20",children:U.jsxs("div",{className:"w-full max-w-md",children:[h&&U.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/70 z-20 rounded-lg",children:U.jsxs("div",{className:"text-center text-sail-white",children:[U.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-sail-white mx-auto mb-4"}),U.jsx("p",{className:"text-lg font-semibold",children:"Loading Maritime Scene..."})]})}),U.jsxs("div",{className:"text-center mb-8",children:[U.jsx("h1",{className:"text-4xl font-bold text-sail-white mb-2 tracking-wide",children:"⚓ Charter Party"}),U.jsx("p",{className:"text-ocean-foam text-lg",children:"Broker Registration"})]}),U.jsxs("div",{className:"space-y-6",children:[U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Full Name"}),U.jsx("input",{type:"text",value:r,onChange:N=>e(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${g.name?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Broker John Smith",required:!0}),g.name&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:g.name})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Email Address"}),U.jsx("input",{type:"email",value:t,onChange:N=>s(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${g.email?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"broker@example.com",required:!0}),g.email&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:g.email})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Password"}),U.jsx("input",{type:"password",value:a,onChange:N=>l(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${g.password?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Create a strong password",required:!0}),g.password&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:g.password})]}),U.jsxs("div",{children:[U.jsx("label",{className:"block text-ocean-foam font-semibold mb-2",children:"Confirm Password"}),U.jsx("input",{type:"password",value:c,onChange:N=>d(N.target.value),className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-sail-white placeholder-ocean-foam focus:outline-none focus:bg-white/20 transition-all duration-300 ${g.confirmPassword?"border-red-400":"border-border focus:border-ocean-surface"}`,placeholder:"Confirm your password",required:!0}),g.confirmPassword&&U.jsx("p",{className:"text-red-300 text-sm mt-1",children:g.confirmPassword})]}),U.jsx("button",{onClick:z,className:"w-full bg-gradient-ocean text-sail-white py-3 px-6 rounded-lg font-semibold hover:bg-ocean-surface transform hover:scale-105 transition-all duration-300 shadow-lg shadow-ocean",children:"Join the Fleet - Register 🚢"}),U.jsx("div",{className:"text-center pt-4 border-t border-border",children:U.jsxs("p",{className:"text-ocean-foam text-sm",children:["By registering, you agree to our"," ",U.jsx("a",{href:"#",className:"text-ocean-foam hover:text-sail-white underline",children:"Terms of Service"})," ","and"," ",U.jsx("a",{href:"#",className:"text-ocean-foam hover:text-sail-white underline",children:"Privacy Policy"})]})}),U.jsxs("div",{className:"text-center",children:[U.jsx("p",{className:"text-ocean-foam mb-3",children:"Already have an account?"}),U.jsx("button",{onClick:()=>L("/login"),className:"bg-white/10 text-ocean-foam py-2 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-border",children:"Navigate to Login ⛵"})]})]})]})}),U.jsxs("div",{className:"hidden md:block md:w-1/2 relative",children:[U.jsx("div",{ref:x,className:"w-full h-full"}),U.jsx("div",{className:"absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10 pointer-events-none"}),U.jsx("div",{className:"absolute top-8 right-8 text-sail-white/80",children:U.jsxs("div",{className:"text-right",children:[U.jsx("div",{className:"text-sm font-medium",children:"Current Weather"}),U.jsx("div",{className:"text-xl",children:"⛅ Fair Winds"})]})}),U.jsx("div",{className:"absolute bottom-8 right-8 text-sail-white/80",children:U.jsxs("div",{className:"text-right",children:[U.jsx("div",{className:"text-sm font-medium",children:"Sea Condition"}),U.jsx("div",{className:"text-xl",children:"🌊 Calm Seas"})]})}),U.jsx("div",{className:"absolute bottom-8 left-8 text-sail-white/80",children:U.jsxs("div",{className:"text-left",children:[U.jsx("div",{className:"text-sm font-medium",children:"Marine Life"}),U.jsx("div",{className:"text-xl",children:"🐬 Dolphins & Fish"})]})})]})]}),U.jsx("div",{className:"absolute bottom-0 left-0 w-full",children:U.jsx("svg",{viewBox:"0 0 1200 120",preserveAspectRatio:"none",className:"w-full h-16 fill-current text-ocean-surface/30",children:U.jsx("path",{d:"M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z",children:U.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z;\r
                      M0,0V40C240,100,480,20,720,40C960,100,1200,20,1200,40V0Z;\r
                      M0,0V60C240,120,480,0,720,60C960,120,1200,0,1200,60V0Z`})})})})]})};function ET(){return U.jsx(sx,{children:U.jsxs(F_,{children:[U.jsx(Xo,{path:"/login",element:U.jsx(sg,{})}),U.jsx(Xo,{path:"/register",element:U.jsx(MT,{})}),U.jsx(Xo,{path:"/fixture",element:U.jsx(vx,{})}),U.jsx(Xo,{path:"/",element:U.jsx(sg,{})})]})})}Xv.createRoot(document.getElementById("root")).render(U.jsx(zv.StrictMode,{children:U.jsx(ET,{})}));
