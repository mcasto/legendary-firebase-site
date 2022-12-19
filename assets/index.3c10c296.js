(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Tl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Rl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?e_(s):Rl(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(je(t))return t;if(Pe(t))return t}}const Xg=/;(?![^(]*\))/g,Jg=/:([^]+)/,Zg=/\/\*.*?\*\//gs;function e_(t){const e={};return t.replace(Zg,"").split(Xg).forEach(n=>{if(n){const s=n.split(Jg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kl(t){let e="";if(je(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const s=kl(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const t_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n_=Tl(t_);function Lf(t){return!!t||t===""}const Se={},ds=[],yt=()=>{},s_=()=>!1,i_=/^on[^a-z]/,po=t=>i_.test(t),Al=t=>t.startsWith("onUpdate:"),He=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r_=Object.prototype.hasOwnProperty,fe=(t,e)=>r_.call(t,e),ee=Array.isArray,di=t=>mo(t)==="[object Map]",o_=t=>mo(t)==="[object Set]",ne=t=>typeof t=="function",je=t=>typeof t=="string",Pl=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Mf=t=>Pe(t)&&ne(t.then)&&ne(t.catch),a_=Object.prototype.toString,mo=t=>a_.call(t),l_=t=>mo(t).slice(8,-1),c_=t=>mo(t)==="[object Object]",Nl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ir=Tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},u_=/-(\w)/g,It=go(t=>t.replace(u_,(e,n)=>n?n.toUpperCase():"")),d_=/\B([A-Z])/g,Ls=go(t=>t.replace(d_,"-$1").toLowerCase()),Gi=go(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zo=go(t=>t?`on${Gi(t)}`:""),Si=(t,e)=>!Object.is(t,e),ea=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ol=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cu;const f_=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ot;class Ff{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function _o(t){return new Ff(t)}function h_(t,e=ot){e&&e.active&&e.effects.push(t)}function p_(){return ot}function m_(t){ot&&ot.cleanups.push(t)}const Dl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$f=t=>(t.w&Cn)>0,Uf=t=>(t.n&Cn)>0,g_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},__=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];$f(i)&&!Uf(i)?i.delete(t):e[n++]=i,i.w&=~Cn,i.n&=~Cn}e.length=n}},Pa=new WeakMap;let li=0,Cn=1;const Na=30;let mt;const Fn=Symbol(""),Oa=Symbol("");class Ll{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,h_(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,pn=!0,Cn=1<<++li,li<=Na?g_(this):uu(this),this.fn()}finally{li<=Na&&__(this),Cn=1<<--li,mt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(uu(this),this.onStop&&this.onStop(),this.active=!1)}}function uu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const Bf=[];function Ms(){Bf.push(pn),pn=!1}function Fs(){const t=Bf.pop();pn=t===void 0?!0:t}function ct(t,e,n){if(pn&&mt){let s=Pa.get(t);s||Pa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Dl()),Vf(i)}}function Vf(t,e){let n=!1;li<=Na?Uf(t)||(t.n|=Cn,n=!$f(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function jt(t,e,n,s,i,r){const o=Pa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const l=Ol(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Nl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),di(t)&&a.push(o.get(Oa)));break;case"delete":ee(t)||(a.push(o.get(Fn)),di(t)&&a.push(o.get(Oa)));break;case"set":di(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Da(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Da(Dl(l))}}function Da(t,e){const n=ee(t)?t:[...t];for(const s of n)s.computed&&du(s);for(const s of n)s.computed||du(s)}function du(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const v_=Tl("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pl)),y_=Ml(),b_=Ml(!1,!0),C_=Ml(!0),fu=w_();function w_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=de(this);for(let r=0,o=this.length;r<o;r++)ct(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ms();const s=de(this)[e].apply(this,n);return Fs(),s}}),t}function Ml(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?$_:Kf:e?qf:zf).get(s))return s;const o=ee(s);if(!t&&o&&fe(fu,i))return Reflect.get(fu,i,r);const a=Reflect.get(s,i,r);return(Pl(i)?Wf.has(i):v_(i))||(t||ct(s,"get",i),e)?a:be(a)?o&&Nl(i)?a:a.value:Pe(a)?t?yo(a):Ge(a):a}}const E_=Hf(),I_=Hf(!0);function Hf(t=!1){return function(n,s,i,r){let o=n[s];if(bs(o)&&be(o)&&!be(i))return!1;if(!t&&(!Dr(i)&&!bs(i)&&(o=de(o),i=de(i)),!ee(n)&&be(o)&&!be(i)))return o.value=i,!0;const a=ee(n)&&Nl(s)?Number(s)<n.length:fe(n,s),l=Reflect.set(n,s,i,r);return n===de(r)&&(a?Si(i,o)&&jt(n,"set",s,i):jt(n,"add",s,i)),l}}function S_(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&jt(t,"delete",e,void 0),s}function T_(t,e){const n=Reflect.has(t,e);return(!Pl(e)||!Wf.has(e))&&ct(t,"has",e),n}function R_(t){return ct(t,"iterate",ee(t)?"length":Fn),Reflect.ownKeys(t)}const jf={get:y_,set:E_,deleteProperty:S_,has:T_,ownKeys:R_},k_={get:C_,set(t,e){return!0},deleteProperty(t,e){return!0}},A_=He({},jf,{get:b_,set:I_}),Fl=t=>t,vo=t=>Reflect.getPrototypeOf(t);function fr(t,e,n=!1,s=!1){t=t.__v_raw;const i=de(t),r=de(e);n||(e!==r&&ct(i,"get",e),ct(i,"get",r));const{has:o}=vo(i),a=s?Fl:n?Bl:Ti;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function hr(t,e=!1){const n=this.__v_raw,s=de(n),i=de(t);return e||(t!==i&&ct(s,"has",t),ct(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function pr(t,e=!1){return t=t.__v_raw,!e&&ct(de(t),"iterate",Fn),Reflect.get(t,"size",t)}function hu(t){t=de(t);const e=de(this);return vo(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function pu(t,e){e=de(e);const n=de(this),{has:s,get:i}=vo(n);let r=s.call(n,t);r||(t=de(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Si(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function mu(t){const e=de(this),{has:n,get:s}=vo(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&jt(e,"delete",t,void 0),r}function gu(){const t=de(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function mr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=de(o),l=e?Fl:t?Bl:Ti;return!t&&ct(a,"iterate",Fn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function gr(t,e,n){return function(...s){const i=this.__v_raw,r=de(i),o=di(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Fl:e?Bl:Ti;return!e&&ct(r,"iterate",l?Oa:Fn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function x_(){const t={get(r){return fr(this,r)},get size(){return pr(this)},has:hr,add:hu,set:pu,delete:mu,clear:gu,forEach:mr(!1,!1)},e={get(r){return fr(this,r,!1,!0)},get size(){return pr(this)},has:hr,add:hu,set:pu,delete:mu,clear:gu,forEach:mr(!1,!0)},n={get(r){return fr(this,r,!0)},get size(){return pr(this,!0)},has(r){return hr.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:mr(!0,!1)},s={get(r){return fr(this,r,!0,!0)},get size(){return pr(this,!0)},has(r){return hr.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gr(r,!1,!1),n[r]=gr(r,!0,!1),e[r]=gr(r,!1,!0),s[r]=gr(r,!0,!0)}),[t,n,e,s]}const[P_,N_,O_,D_]=x_();function $l(t,e){const n=e?t?D_:O_:t?N_:P_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const L_={get:$l(!1,!1)},M_={get:$l(!1,!0)},F_={get:$l(!0,!1)},zf=new WeakMap,qf=new WeakMap,Kf=new WeakMap,$_=new WeakMap;function U_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:U_(l_(t))}function Ge(t){return bs(t)?t:Ul(t,!1,jf,L_,zf)}function Gf(t){return Ul(t,!1,A_,M_,qf)}function yo(t){return Ul(t,!0,k_,F_,Kf)}function Ul(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=B_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function mn(t){return bs(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function bs(t){return!!(t&&t.__v_isReadonly)}function Dr(t){return!!(t&&t.__v_isShallow)}function Yf(t){return mn(t)||bs(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Cs(t){return Or(t,"__v_skip",!0),t}const Ti=t=>Pe(t)?Ge(t):t,Bl=t=>Pe(t)?yo(t):t;function Qf(t){pn&&mt&&(t=de(t),Vf(t.dep||(t.dep=Dl())))}function Xf(t,e){t=de(t),t.dep&&Da(t.dep)}function be(t){return!!(t&&t.__v_isRef===!0)}function me(t){return Zf(t,!1)}function Jf(t){return Zf(t,!0)}function Zf(t,e){return be(t)?t:new V_(t,e)}class V_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Ti(e)}get value(){return Qf(this),this._value}set value(e){const n=this.__v_isShallow||Dr(e)||bs(e);e=n?e:de(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ti(e),Xf(this))}}function bt(t){return be(t)?t.value:t}const W_={get:(t,e,n)=>bt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return be(i)&&!be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function eh(t){return mn(t)?t:new Proxy(t,W_)}function bo(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Ct(t,n);return e}class H_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ct(t,e,n){const s=t[e];return be(s)?s:new H_(t,e,n)}var th;class j_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[th]=!1,this._dirty=!0,this.effect=new Ll(e,()=>{this._dirty||(this._dirty=!0,Xf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=de(this);return Qf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}th="__v_isReadonly";function z_(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=yt):(s=t.get,i=t.set),new j_(s,i,r||!i,n)}function gn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Co(r,e,n)}return i}function ht(t,e,n,s){if(ne(t)){const r=gn(t,e,n,s);return r&&Mf(r)&&r.catch(o=>{Co(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ht(t[r],e,n,s));return i}function Co(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){gn(l,null,10,[t,o,a]);return}}q_(t,n,i,s)}function q_(t,e,n,s=!0){console.error(t)}let Ri=!1,La=!1;const Ye=[];let Nt=0;const fs=[];let Ft=null,Nn=0;const nh=Promise.resolve();let Vl=null;function $s(t){const e=Vl||nh;return t?e.then(this?t.bind(this):t):e}function K_(t){let e=Nt+1,n=Ye.length;for(;e<n;){const s=e+n>>>1;ki(Ye[s])<t?e=s+1:n=s}return e}function Wl(t){(!Ye.length||!Ye.includes(t,Ri&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?Ye.push(t):Ye.splice(K_(t.id),0,t),sh())}function sh(){!Ri&&!La&&(La=!0,Vl=nh.then(rh))}function G_(t){const e=Ye.indexOf(t);e>Nt&&Ye.splice(e,1)}function Y_(t){ee(t)?fs.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?Nn+1:Nn))&&fs.push(t),sh()}function _u(t,e=Ri?Nt+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function ih(t){if(fs.length){const e=[...new Set(fs)];if(fs.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,s)=>ki(n)-ki(s)),Nn=0;Nn<Ft.length;Nn++)Ft[Nn]();Ft=null,Nn=0}}const ki=t=>t.id==null?1/0:t.id,Q_=(t,e)=>{const n=ki(t)-ki(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rh(t){La=!1,Ri=!0,Ye.sort(Q_);const e=yt;try{for(Nt=0;Nt<Ye.length;Nt++){const n=Ye[Nt];n&&n.active!==!1&&gn(n,null,14)}}finally{Nt=0,Ye.length=0,ih(),Ri=!1,Vl=null,(Ye.length||fs.length)&&rh()}}function X_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||Se;f&&(i=n.map(h=>je(h)?h.trim():h)),d&&(i=n.map(Ol))}let a,l=s[a=Zo(e)]||s[a=Zo(It(e))];!l&&r&&(l=s[a=Zo(Ls(e))]),l&&ht(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(c,t,6,i)}}function oh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=oh(c,e,!0);u&&(a=!0,He(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(ee(r)?r.forEach(l=>o[l]=null):He(o,r),Pe(t)&&s.set(t,o),o)}function wo(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Ls(e))||fe(t,e))}let lt=null,ah=null;function Lr(t){const e=lt;return lt=t,ah=t&&t.type.__scopeId||null,e}function Mr(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ru(-1);const r=Lr(e);let o;try{o=t(...i)}finally{Lr(r),s._d&&Ru(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ta(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=t;let y,b;const w=Lr(t);try{if(n.shapeFlag&4){const M=i||s;y=Pt(u.call(M,M,d,r,h,f,m)),b=l}else{const M=e;y=Pt(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),b=e.props?l:J_(l)}}catch(M){hi.length=0,Co(M,t,1),y=S(wt)}let E=y;if(b&&_!==!1){const M=Object.keys(b),{shapeFlag:D}=E;M.length&&D&7&&(o&&M.some(Al)&&(b=Z_(b,o)),E=zt(E,b))}return n.dirs&&(E=zt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),y=E,Lr(w),y}const J_=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},Z_=(t,e)=>{const n={};for(const s in t)(!Al(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ev(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?vu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!wo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?vu(s,o,c):!0:!!o;return!1}function vu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!wo(n,r))return!0}return!1}function tv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nv=t=>t.__isSuspense;function sv(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Y_(t)}function Vt(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Le(t,e,n=!1){const s=Ve||lt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}function Yi(t,e){return Hl(t,null,e)}const _r={};function De(t,e,n){return Hl(t,e,n)}function Hl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){const a=Ve;let l,c=!1,u=!1;if(be(t)?(l=()=>t.value,c=Dr(t)):mn(t)?(l=()=>t,s=!0):ee(t)?(u=!0,c=t.some(E=>mn(E)||Dr(E)),l=()=>t.map(E=>{if(be(E))return E.value;if(mn(E))return Ln(E);if(ne(E))return gn(E,a,2)})):ne(t)?e?l=()=>gn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ht(t,a,3,[f])}:l=yt,e&&s){const E=l;l=()=>Ln(E())}let d,f=E=>{d=b.onStop=()=>{gn(E,a,4)}},h;if(Ni)if(f=yt,e?n&&ht(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const E=Gv();h=E.__watcherHandles||(E.__watcherHandles=[])}else return yt;let m=u?new Array(t.length).fill(_r):_r;const _=()=>{if(!!b.active)if(e){const E=b.run();(s||c||(u?E.some((M,D)=>Si(M,m[D])):Si(E,m)))&&(d&&d(),ht(e,a,3,[E,m===_r?void 0:u&&m[0]===_r?[]:m,f]),m=E)}else b.run()};_.allowRecurse=!!e;let y;i==="sync"?y=_:i==="post"?y=()=>tt(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),y=()=>Wl(_));const b=new Ll(l,y);e?n?_():m=b.run():i==="post"?tt(b.run.bind(b),a&&a.suspense):b.run();const w=()=>{b.stop(),a&&a.scope&&xl(a.scope.effects,b)};return h&&h.push(w),w}function iv(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?lh(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Ve;ws(this);const a=Hl(i,r.bind(s),n);return o?ws(o):Un(),a}function lh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ln(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))Ln(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(o_(t)||di(t))t.forEach(n=>{Ln(n,e)});else if(c_(t))for(const n in t)Ln(t[n],e);return t}function ch(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Us(()=>{t.isMounted=!0}),Xn(()=>{t.isUnmounting=!0}),t}const dt=[Function,Array],rv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(t,{slots:e}){const n=Qi(),s=ch();let i;return()=>{const r=e.default&&jl(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==wt){o=_;break}}const a=de(t),{mode:l}=a;if(s.isLeaving)return na(o);const c=yu(o);if(!c)return na(o);const u=Ai(c,a,s,n);xi(c,u);const d=n.subTree,f=d&&yu(d);let h=!1;const{getTransitionKey:m}=c.type;if(m){const _=m();i===void 0?i=_:_!==i&&(i=_,h=!0)}if(f&&f.type!==wt&&(!On(c,f)||h)){const _=Ai(f,a,s,n);if(xi(f,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},na(o);l==="in-out"&&c.type!==wt&&(_.delayLeave=(y,b,w)=>{const E=dh(s,f);E[String(f.key)]=f,y._leaveCb=()=>{b(),y._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},uh=rv;function dh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ai(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:m,onBeforeAppear:_,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=e,E=String(t.key),M=dh(n,t),D=(T,W)=>{T&&ht(T,s,9,W)},H=(T,W)=>{const U=W[1];D(T,W),ee(T)?T.every(z=>z.length<=1)&&U():T.length<=1&&U()},N={mode:r,persisted:o,beforeEnter(T){let W=a;if(!n.isMounted)if(i)W=_||a;else return;T._leaveCb&&T._leaveCb(!0);const U=M[E];U&&On(t,U)&&U.el._leaveCb&&U.el._leaveCb(),D(W,[T])},enter(T){let W=l,U=c,z=u;if(!n.isMounted)if(i)W=y||l,U=b||c,z=w||u;else return;let x=!1;const Y=T._enterCb=se=>{x||(x=!0,se?D(z,[T]):D(U,[T]),N.delayedLeave&&N.delayedLeave(),T._enterCb=void 0)};W?H(W,[T,Y]):Y()},leave(T,W){const U=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return W();D(d,[T]);let z=!1;const x=T._leaveCb=Y=>{z||(z=!0,W(),Y?D(m,[T]):D(h,[T]),T._leaveCb=void 0,M[U]===t&&delete M[U])};M[U]=t,f?H(f,[T,x]):x()},clone(T){return Ai(T,e,n,s)}};return N}function na(t){if(Io(t))return t=zt(t),t.children=null,t}function yu(t){return Io(t)?t.children?t.children[0]:void 0:t}function xi(t,e){t.shapeFlag&6&&t.component?xi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ze?(o.patchFlag&128&&i++,s=s.concat(jl(o.children,e,a))):(e||o.type!==wt)&&s.push(a!=null?zt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Eo(t){return ne(t)?{setup:t,name:t.name}:t}const Sr=t=>!!t.type.__asyncLoader,Io=t=>t.type.__isKeepAlive;function ov(t,e){fh(t,"a",e)}function av(t,e){fh(t,"da",e)}function fh(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(So(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Io(i.parent.vnode)&&lv(s,e,n,i),i=i.parent}}function lv(t,e,n,s){const i=So(e,t,s,!0);mh(()=>{xl(s[e],i)},n)}function So(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),ws(n);const a=ht(e,n,t,o);return Un(),Fs(),a});return s?i.unshift(r):i.push(r),r}}const Yt=t=>(e,n=Ve)=>(!Ni||t==="sp")&&So(t,(...s)=>e(...s),n),hh=Yt("bm"),Us=Yt("m"),cv=Yt("bu"),ph=Yt("u"),Xn=Yt("bum"),mh=Yt("um"),uv=Yt("sp"),dv=Yt("rtg"),fv=Yt("rtc");function hv(t,e=Ve){So("ec",t,e)}function To(t,e){const n=lt;if(n===null)return t;const s=xo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Se]=e[r];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Ln(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Tn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ms(),ht(l,n,8,[t.el,a,t,e]),Fs())}}const zl="components",pv="directives";function mv(t,e){return ql(zl,t,!0,e)||t}const gh=Symbol();function gv(t){return je(t)?ql(zl,t,!1)||t:t||gh}function _h(t){return ql(pv,t)}function ql(t,e,n=!0,s=!1){const i=lt||Ve;if(i){const r=i.type;if(t===zl){const a=zv(r,!1);if(a&&(a===e||a===It(e)||a===Gi(It(e))))return r}const o=bu(i[t]||r[t],e)||bu(i.appContext[t],e);return!o&&s?r:o}}function bu(t,e){return t&&(t[e]||t[It(e)]||t[Gi(It(e))])}const Ma=t=>t?xh(t)?xo(t)||t.proxy:Ma(t.parent):null,fi=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ma(t.parent),$root:t=>Ma(t.root),$emit:t=>t.emit,$options:t=>Kl(t),$forceUpdate:t=>t.f||(t.f=()=>Wl(t.update)),$nextTick:t=>t.n||(t.n=$s.bind(t.proxy)),$watch:t=>iv.bind(t)}),sa=(t,e)=>t!==Se&&!t.__isScriptSetup&&fe(t,e),_v={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sa(s,e))return o[e]=1,s[e];if(i!==Se&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==Se&&fe(n,e))return o[e]=4,n[e];Fa&&(o[e]=0)}}const u=fi[e];let d,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Se&&fe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sa(i,e)?(i[e]=n,!0):s!==Se&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&fe(t,o)||sa(e,o)||(a=r[0])&&fe(a,o)||fe(s,o)||fe(fi,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fa=!0;function vv(t){const e=Kl(t),n=t.proxy,s=t.ctx;Fa=!1,e.beforeCreate&&Cu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:E,unmounted:M,render:D,renderTracked:H,renderTriggered:N,errorCaptured:T,serverPrefetch:W,expose:U,inheritAttrs:z,components:x,directives:Y,filters:se}=e;if(c&&yv(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const J in o){const ie=o[J];ne(ie)&&(s[J]=ie.bind(n))}if(i){const J=i.call(n,n);Pe(J)&&(t.data=Ge(J))}if(Fa=!0,r)for(const J in r){const ie=r[J],Ne=ne(ie)?ie.bind(n,n):ne(ie.get)?ie.get.bind(n,n):yt,it=!ne(ie)&&ne(ie.set)?ie.set.bind(n):yt,Fe=R({get:Ne,set:it});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Re=>Fe.value=Re})}if(a)for(const J in a)vh(a[J],s,n,J);if(l){const J=ne(l)?l.call(n):l;Reflect.ownKeys(J).forEach(ie=>{Vt(ie,J[ie])})}u&&Cu(u,t,"c");function te(J,ie){ee(ie)?ie.forEach(Ne=>J(Ne.bind(n))):ie&&J(ie.bind(n))}if(te(hh,d),te(Us,f),te(cv,h),te(ph,m),te(ov,_),te(av,y),te(hv,T),te(fv,H),te(dv,N),te(Xn,w),te(mh,M),te(uv,W),ee(U))if(U.length){const J=t.exposed||(t.exposed={});U.forEach(ie=>{Object.defineProperty(J,ie,{get:()=>n[ie],set:Ne=>n[ie]=Ne})})}else t.exposed||(t.exposed={});D&&t.render===yt&&(t.render=D),z!=null&&(t.inheritAttrs=z),x&&(t.components=x),Y&&(t.directives=Y)}function yv(t,e,n=yt,s=!1){ee(t)&&(t=$a(t));for(const i in t){const r=t[i];let o;Pe(r)?"default"in r?o=Le(r.from||i,r.default,!0):o=Le(r.from||i):o=Le(r),be(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Cu(t,e,n){ht(ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vh(t,e,n,s){const i=s.includes(".")?lh(n,s):()=>n[s];if(je(t)){const r=e[t];ne(r)&&De(i,r)}else if(ne(t))De(i,t.bind(n));else if(Pe(t))if(ee(t))t.forEach(r=>vh(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&De(i,r,t)}}function Kl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Fr(l,c,o,!0)),Fr(l,e,o)),Pe(e)&&r.set(e,l),l}function Fr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Fr(t,r,n,!0),i&&i.forEach(o=>Fr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bv={data:wu,props:An,emits:An,methods:An,computed:An,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:An,directives:An,watch:wv,provide:wu,inject:Cv};function wu(t,e){return e?t?function(){return He(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Cv(t,e){return An($a(t),$a(e))}function $a(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?He(He(Object.create(null),t),e):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function Ev(t,e,n,s=!1){const i={},r={};Or(r,Ao,1),t.propsDefaults=Object.create(null),yh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Iv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(wo(t.emitsOptions,f))continue;const h=e[f];if(l)if(fe(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const m=It(f);i[m]=Ua(l,a,m,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{yh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!fe(e,d)&&((u=Ls(d))===d||!fe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ua(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!fe(e,d)&&!0)&&(delete r[d],c=!0)}c&&jt(t,"set","$attrs")}function yh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ir(l))continue;const c=e[l];let u;i&&fe(i,u=It(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:wo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=de(n),c=a||Se;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ua(i,l,d,c[d],t,!fe(c,d))}}return o}function Ua(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(ws(i),s=c[n]=l.call(null,e),Un())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function bh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=d=>{l=!0;const[f,h]=bh(d,e,!0);He(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,ds),ds;if(ee(r))for(let u=0;u<r.length;u++){const d=It(r[u]);Eu(d)&&(o[d]=Se)}else if(r)for(const u in r){const d=It(u);if(Eu(d)){const f=r[u],h=o[d]=ee(f)||ne(f)?{type:f}:Object.assign({},f);if(h){const m=Tu(Boolean,h.type),_=Tu(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||fe(h,"default"))&&a.push(d)}}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function Eu(t){return t[0]!=="$"}function Iu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Su(t,e){return Iu(t)===Iu(e)}function Tu(t,e){return ee(e)?e.findIndex(n=>Su(n,t)):ne(e)&&Su(e,t)?0:-1}const Ch=t=>t[0]==="_"||t==="$stable",Gl=t=>ee(t)?t.map(Pt):[Pt(t)],Sv=(t,e,n)=>{if(e._n)return e;const s=Mr((...i)=>Gl(e(...i)),n);return s._c=!1,s},wh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ch(i))continue;const r=t[i];if(ne(r))e[i]=Sv(i,r,s);else if(r!=null){const o=Gl(r);e[i]=()=>o}}},Eh=(t,e)=>{const n=Gl(e);t.slots.default=()=>n},Tv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Or(e,"_",n)):wh(e,t.slots={})}else t.slots={},e&&Eh(t,e);Or(t.slots,Ao,1)},Rv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(He(i,e),!n&&a===1&&delete i._):(r=!e.$stable,wh(e,i)),o=e}else e&&(Eh(t,e),o={default:1});if(r)for(const a in i)!Ch(a)&&!(a in o)&&delete i[a]};function Ih(){return{app:null,config:{isNativeTag:s_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Av(t,e){return function(s,i=null){ne(s)||(s=Object.assign({},s)),i!=null&&!Pe(i)&&(i=null);const r=Ih(),o=new Set;let a=!1;const l=r.app={_uid:kv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Yv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const f=S(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,xo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ba(t,e,n,s,i=!1){if(ee(t)){t.forEach((f,h)=>Ba(f,e&&(ee(e)?e[h]:e),n,s,i));return}if(Sr(s)&&!i)return;const r=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,fe(d,c)&&(d[c]=null)):be(c)&&(c.value=null)),ne(l))gn(l,a,12,[o,u]);else{const f=je(l),h=be(l);if(f||h){const m=()=>{if(t.f){const _=f?fe(d,l)?d[l]:u[l]:l.value;i?ee(_)&&xl(_,r):ee(_)?_.includes(r)||_.push(r):f?(u[l]=[r],fe(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,fe(d,l)&&(d[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,tt(m,n)):m()}}}const tt=sv;function xv(t){return Pv(t)}function Pv(t,e){const n=f_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=yt,insertStaticContent:m}=t,_=(p,g,v,C=null,k=null,L=null,V=!1,O=null,$=!!g.dynamicChildren)=>{if(p===g)return;p&&!On(p,g)&&(C=B(p),Re(p,k,L,!0),p=null),g.patchFlag===-2&&($=!1,g.dynamicChildren=null);const{type:A,ref:K,shapeFlag:j}=g;switch(A){case Ro:y(p,g,v,C);break;case wt:b(p,g,v,C);break;case ia:p==null&&w(g,v,C,V);break;case ze:x(p,g,v,C,k,L,V,O,$);break;default:j&1?D(p,g,v,C,k,L,V,O,$):j&6?Y(p,g,v,C,k,L,V,O,$):(j&64||j&128)&&A.process(p,g,v,C,k,L,V,O,$,he)}K!=null&&k&&Ba(K,p&&p.ref,L,g||p,!g)},y=(p,g,v,C)=>{if(p==null)s(g.el=a(g.children),v,C);else{const k=g.el=p.el;g.children!==p.children&&c(k,g.children)}},b=(p,g,v,C)=>{p==null?s(g.el=l(g.children||""),v,C):g.el=p.el},w=(p,g,v,C)=>{[p.el,p.anchor]=m(p.children,g,v,C,p.el,p.anchor)},E=({el:p,anchor:g},v,C)=>{let k;for(;p&&p!==g;)k=f(p),s(p,v,C),p=k;s(g,v,C)},M=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=f(p),i(p),p=v;i(g)},D=(p,g,v,C,k,L,V,O,$)=>{V=V||g.type==="svg",p==null?H(g,v,C,k,L,V,O,$):W(p,g,k,L,V,O,$)},H=(p,g,v,C,k,L,V,O)=>{let $,A;const{type:K,props:j,shapeFlag:G,transition:Z,dirs:ue}=p;if($=p.el=o(p.type,L,j&&j.is,j),G&8?u($,p.children):G&16&&T(p.children,$,null,C,k,L&&K!=="foreignObject",V,O),ue&&Tn(p,null,C,"created"),j){for(const ge in j)ge!=="value"&&!Ir(ge)&&r($,ge,null,j[ge],L,p.children,C,k,F);"value"in j&&r($,"value",null,j.value),(A=j.onVnodeBeforeMount)&&xt(A,C,p)}N($,p,p.scopeId,V,C),ue&&Tn(p,null,C,"beforeMount");const Ce=(!k||k&&!k.pendingBranch)&&Z&&!Z.persisted;Ce&&Z.beforeEnter($),s($,g,v),((A=j&&j.onVnodeMounted)||Ce||ue)&&tt(()=>{A&&xt(A,C,p),Ce&&Z.enter($),ue&&Tn(p,null,C,"mounted")},k)},N=(p,g,v,C,k)=>{if(v&&h(p,v),C)for(let L=0;L<C.length;L++)h(p,C[L]);if(k){let L=k.subTree;if(g===L){const V=k.vnode;N(p,V,V.scopeId,V.slotScopeIds,k.parent)}}},T=(p,g,v,C,k,L,V,O,$=0)=>{for(let A=$;A<p.length;A++){const K=p[A]=O?on(p[A]):Pt(p[A]);_(null,K,g,v,C,k,L,V,O)}},W=(p,g,v,C,k,L,V)=>{const O=g.el=p.el;let{patchFlag:$,dynamicChildren:A,dirs:K}=g;$|=p.patchFlag&16;const j=p.props||Se,G=g.props||Se;let Z;v&&Rn(v,!1),(Z=G.onVnodeBeforeUpdate)&&xt(Z,v,g,p),K&&Tn(g,p,v,"beforeUpdate"),v&&Rn(v,!0);const ue=k&&g.type!=="foreignObject";if(A?U(p.dynamicChildren,A,O,v,C,ue,L):V||ie(p,g,O,null,v,C,ue,L,!1),$>0){if($&16)z(O,g,j,G,v,C,k);else if($&2&&j.class!==G.class&&r(O,"class",null,G.class,k),$&4&&r(O,"style",j.style,G.style,k),$&8){const Ce=g.dynamicProps;for(let ge=0;ge<Ce.length;ge++){const Oe=Ce[ge],pt=j[Oe],ns=G[Oe];(ns!==pt||Oe==="value")&&r(O,Oe,pt,ns,k,p.children,v,C,F)}}$&1&&p.children!==g.children&&u(O,g.children)}else!V&&A==null&&z(O,g,j,G,v,C,k);((Z=G.onVnodeUpdated)||K)&&tt(()=>{Z&&xt(Z,v,g,p),K&&Tn(g,p,v,"updated")},C)},U=(p,g,v,C,k,L,V)=>{for(let O=0;O<g.length;O++){const $=p[O],A=g[O],K=$.el&&($.type===ze||!On($,A)||$.shapeFlag&70)?d($.el):v;_($,A,K,null,C,k,L,V,!0)}},z=(p,g,v,C,k,L,V)=>{if(v!==C){if(v!==Se)for(const O in v)!Ir(O)&&!(O in C)&&r(p,O,v[O],null,V,g.children,k,L,F);for(const O in C){if(Ir(O))continue;const $=C[O],A=v[O];$!==A&&O!=="value"&&r(p,O,A,$,V,g.children,k,L,F)}"value"in C&&r(p,"value",v.value,C.value)}},x=(p,g,v,C,k,L,V,O,$)=>{const A=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:G,slotScopeIds:Z}=g;Z&&(O=O?O.concat(Z):Z),p==null?(s(A,v,C),s(K,v,C),T(g.children,v,K,k,L,V,O,$)):j>0&&j&64&&G&&p.dynamicChildren?(U(p.dynamicChildren,G,v,k,L,V,O),(g.key!=null||k&&g===k.subTree)&&Sh(p,g,!0)):ie(p,g,v,K,k,L,V,O,$)},Y=(p,g,v,C,k,L,V,O,$)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?k.ctx.activate(g,v,C,V,$):se(g,v,C,k,L,V,$):ae(p,g,$)},se=(p,g,v,C,k,L,V)=>{const O=p.component=Bv(p,C,k);if(Io(p)&&(O.ctx.renderer=he),Vv(O),O.asyncDep){if(k&&k.registerDep(O,te),!p.el){const $=O.subTree=S(wt);b(null,$,g,v)}return}te(O,p,g,v,k,L,V)},ae=(p,g,v)=>{const C=g.component=p.component;if(ev(p,g,v))if(C.asyncDep&&!C.asyncResolved){J(C,g,v);return}else C.next=g,G_(C.update),C.update();else g.el=p.el,C.vnode=g},te=(p,g,v,C,k,L,V)=>{const O=()=>{if(p.isMounted){let{next:K,bu:j,u:G,parent:Z,vnode:ue}=p,Ce=K,ge;Rn(p,!1),K?(K.el=ue.el,J(p,K,V)):K=ue,j&&ea(j),(ge=K.props&&K.props.onVnodeBeforeUpdate)&&xt(ge,Z,K,ue),Rn(p,!0);const Oe=ta(p),pt=p.subTree;p.subTree=Oe,_(pt,Oe,d(pt.el),B(pt),p,k,L),K.el=Oe.el,Ce===null&&tv(p,Oe.el),G&&tt(G,k),(ge=K.props&&K.props.onVnodeUpdated)&&tt(()=>xt(ge,Z,K,ue),k)}else{let K;const{el:j,props:G}=g,{bm:Z,m:ue,parent:Ce}=p,ge=Sr(g);if(Rn(p,!1),Z&&ea(Z),!ge&&(K=G&&G.onVnodeBeforeMount)&&xt(K,Ce,g),Rn(p,!0),j&&le){const Oe=()=>{p.subTree=ta(p),le(j,p.subTree,p,k,null)};ge?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=ta(p);_(null,Oe,v,C,p,k,L),g.el=Oe.el}if(ue&&tt(ue,k),!ge&&(K=G&&G.onVnodeMounted)){const Oe=g;tt(()=>xt(K,Ce,Oe),k)}(g.shapeFlag&256||Ce&&Sr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&p.a&&tt(p.a,k),p.isMounted=!0,g=v=C=null}},$=p.effect=new Ll(O,()=>Wl(A),p.scope),A=p.update=()=>$.run();A.id=p.uid,Rn(p,!0),A()},J=(p,g,v)=>{g.component=p;const C=p.vnode.props;p.vnode=g,p.next=null,Iv(p,g.props,C,v),Rv(p,g.children,v),Ms(),_u(),Fs()},ie=(p,g,v,C,k,L,V,O,$=!1)=>{const A=p&&p.children,K=p?p.shapeFlag:0,j=g.children,{patchFlag:G,shapeFlag:Z}=g;if(G>0){if(G&128){it(A,j,v,C,k,L,V,O,$);return}else if(G&256){Ne(A,j,v,C,k,L,V,O,$);return}}Z&8?(K&16&&F(A,k,L),j!==A&&u(v,j)):K&16?Z&16?it(A,j,v,C,k,L,V,O,$):F(A,k,L,!0):(K&8&&u(v,""),Z&16&&T(j,v,C,k,L,V,O,$))},Ne=(p,g,v,C,k,L,V,O,$)=>{p=p||ds,g=g||ds;const A=p.length,K=g.length,j=Math.min(A,K);let G;for(G=0;G<j;G++){const Z=g[G]=$?on(g[G]):Pt(g[G]);_(p[G],Z,v,null,k,L,V,O,$)}A>K?F(p,k,L,!0,!1,j):T(g,v,C,k,L,V,O,$,j)},it=(p,g,v,C,k,L,V,O,$)=>{let A=0;const K=g.length;let j=p.length-1,G=K-1;for(;A<=j&&A<=G;){const Z=p[A],ue=g[A]=$?on(g[A]):Pt(g[A]);if(On(Z,ue))_(Z,ue,v,null,k,L,V,O,$);else break;A++}for(;A<=j&&A<=G;){const Z=p[j],ue=g[G]=$?on(g[G]):Pt(g[G]);if(On(Z,ue))_(Z,ue,v,null,k,L,V,O,$);else break;j--,G--}if(A>j){if(A<=G){const Z=G+1,ue=Z<K?g[Z].el:C;for(;A<=G;)_(null,g[A]=$?on(g[A]):Pt(g[A]),v,ue,k,L,V,O,$),A++}}else if(A>G)for(;A<=j;)Re(p[A],k,L,!0),A++;else{const Z=A,ue=A,Ce=new Map;for(A=ue;A<=G;A++){const rt=g[A]=$?on(g[A]):Pt(g[A]);rt.key!=null&&Ce.set(rt.key,A)}let ge,Oe=0;const pt=G-ue+1;let ns=!1,ou=0;const Js=new Array(pt);for(A=0;A<pt;A++)Js[A]=0;for(A=Z;A<=j;A++){const rt=p[A];if(Oe>=pt){Re(rt,k,L,!0);continue}let At;if(rt.key!=null)At=Ce.get(rt.key);else for(ge=ue;ge<=G;ge++)if(Js[ge-ue]===0&&On(rt,g[ge])){At=ge;break}At===void 0?Re(rt,k,L,!0):(Js[At-ue]=A+1,At>=ou?ou=At:ns=!0,_(rt,g[At],v,null,k,L,V,O,$),Oe++)}const au=ns?Nv(Js):ds;for(ge=au.length-1,A=pt-1;A>=0;A--){const rt=ue+A,At=g[rt],lu=rt+1<K?g[rt+1].el:C;Js[A]===0?_(null,At,v,lu,k,L,V,O,$):ns&&(ge<0||A!==au[ge]?Fe(At,v,lu,2):ge--)}}},Fe=(p,g,v,C,k=null)=>{const{el:L,type:V,transition:O,children:$,shapeFlag:A}=p;if(A&6){Fe(p.component.subTree,g,v,C);return}if(A&128){p.suspense.move(g,v,C);return}if(A&64){V.move(p,g,v,he);return}if(V===ze){s(L,g,v);for(let j=0;j<$.length;j++)Fe($[j],g,v,C);s(p.anchor,g,v);return}if(V===ia){E(p,g,v);return}if(C!==2&&A&1&&O)if(C===0)O.beforeEnter(L),s(L,g,v),tt(()=>O.enter(L),k);else{const{leave:j,delayLeave:G,afterLeave:Z}=O,ue=()=>s(L,g,v),Ce=()=>{j(L,()=>{ue(),Z&&Z()})};G?G(L,ue,Ce):Ce()}else s(L,g,v)},Re=(p,g,v,C=!1,k=!1)=>{const{type:L,props:V,ref:O,children:$,dynamicChildren:A,shapeFlag:K,patchFlag:j,dirs:G}=p;if(O!=null&&Ba(O,null,v,p,!0),K&256){g.ctx.deactivate(p);return}const Z=K&1&&G,ue=!Sr(p);let Ce;if(ue&&(Ce=V&&V.onVnodeBeforeUnmount)&&xt(Ce,g,p),K&6)I(p.component,v,C);else{if(K&128){p.suspense.unmount(v,C);return}Z&&Tn(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,v,k,he,C):A&&(L!==ze||j>0&&j&64)?F(A,g,v,!1,!0):(L===ze&&j&384||!k&&K&16)&&F($,g,v),C&&kt(p)}(ue&&(Ce=V&&V.onVnodeUnmounted)||Z)&&tt(()=>{Ce&&xt(Ce,g,p),Z&&Tn(p,null,g,"unmounted")},v)},kt=p=>{const{type:g,el:v,anchor:C,transition:k}=p;if(g===ze){dr(v,C);return}if(g===ia){M(p);return}const L=()=>{i(v),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:V,delayLeave:O}=k,$=()=>V(v,L);O?O(p.el,L,$):$()}else L()},dr=(p,g)=>{let v;for(;p!==g;)v=f(p),i(p),p=v;i(g)},I=(p,g,v)=>{const{bum:C,scope:k,update:L,subTree:V,um:O}=p;C&&ea(C),k.stop(),L&&(L.active=!1,Re(V,p,g,v)),O&&tt(O,g),tt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,v,C=!1,k=!1,L=0)=>{for(let V=L;V<p.length;V++)Re(p[V],g,v,C,k)},B=p=>p.shapeFlag&6?B(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),q=(p,g,v)=>{p==null?g._vnode&&Re(g._vnode,null,null,!0):_(g._vnode||null,p,g,null,null,null,v),_u(),ih(),g._vnode=p},he={p:_,um:Re,m:Fe,r:kt,mt:se,mc:T,pc:ie,pbc:U,n:B,o:t};let ke,le;return e&&([ke,le]=e(he)),{render:q,hydrate:ke,createApp:Av(q,ke)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sh(t,e,n=!1){const s=t.children,i=e.children;if(ee(s)&&ee(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=on(i[r]),a.el=o.el),n||Sh(o,a)),a.type===Ro&&(a.el=o.el)}}function Nv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ov=t=>t.__isTeleport,ze=Symbol(void 0),Ro=Symbol(void 0),wt=Symbol(void 0),ia=Symbol(void 0),hi=[];let _t=null;function Wn(t=!1){hi.push(_t=t?null:[])}function Dv(){hi.pop(),_t=hi[hi.length-1]||null}let Pi=1;function Ru(t){Pi+=t}function Th(t){return t.dynamicChildren=Pi>0?_t||ds:null,Dv(),Pi>0&&_t&&_t.push(t),t}function ko(t,e,n,s,i,r){return Th(kh(t,e,n,s,i,r,!0))}function Va(t,e,n,s,i){return Th(S(t,e,n,s,i,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function On(t,e){return t.type===e.type&&t.key===e.key}const Ao="__vInternal",Rh=({key:t})=>t!=null?t:null,Tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||be(t)||ne(t)?{i:lt,r:t,k:e,f:!!n}:t:null;function kh(t,e=null,n=null,s=0,i=null,r=t===ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rh(e),ref:e&&Tr(e),scopeId:ah,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return a?(Yl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),Pi>0&&!o&&_t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_t.push(l),l}const S=Lv;function Lv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===gh)&&(t=wt),Wa(t)){const a=zt(t,e,!0);return n&&Yl(a,n),Pi>0&&!r&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag|=-2,a}if(qv(t)&&(t=t.__vccOpts),e){e=Mv(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=kl(a)),Pe(l)&&(Yf(l)&&!ee(l)&&(l=He({},l)),e.style=Rl(l))}const o=je(t)?1:nv(t)?128:Ov(t)?64:Pe(t)?4:ne(t)?2:0;return kh(t,e,n,s,i,o,r,!0)}function Mv(t){return t?Yf(t)||Ao in t?He({},t):t:null}function zt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?$n(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rh(a),ref:e&&e.ref?n&&i?ee(i)?i.concat(Tr(e)):[i,Tr(e)]:Tr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ze?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ah(t=" ",e=0){return S(Ro,null,t,e)}function Fv(t="",e=!1){return e?(Wn(),Va(wt,null,t)):S(wt,null,t)}function Pt(t){return t==null||typeof t=="boolean"?S(wt):ee(t)?S(ze,null,t.slice()):typeof t=="object"?on(t):S(Ro,null,String(t))}function on(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Yl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Yl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ao in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[Ah(e)]):n=8);t.children=e,t.shapeFlag|=n}function $n(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=kl([e.class,s.class]));else if(i==="style")e.style=Rl([e.style,s.style]);else if(po(i)){const r=e[i],o=s[i];o&&r!==o&&!(ee(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function xt(t,e,n,s=null){ht(t,e,7,[n,s])}const $v=Ih();let Uv=0;function Bv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||$v,r={uid:Uv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ff(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bh(s,i),emitsOptions:oh(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=X_.bind(null,r),t.ce&&t.ce(r),r}let Ve=null;const Qi=()=>Ve||lt,ws=t=>{Ve=t,t.scope.on()},Un=()=>{Ve&&Ve.scope.off(),Ve=null};function xh(t){return t.vnode.shapeFlag&4}let Ni=!1;function Vv(t,e=!1){Ni=e;const{props:n,children:s}=t.vnode,i=xh(t);Ev(t,n,i,e),Tv(t,s);const r=i?Wv(t,e):void 0;return Ni=!1,r}function Wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cs(new Proxy(t.ctx,_v));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?jv(t):null;ws(t),Ms();const r=gn(s,t,0,[t.props,i]);if(Fs(),Un(),Mf(r)){if(r.then(Un,Un),e)return r.then(o=>{ku(t,o,e)}).catch(o=>{Co(o,t,0)});t.asyncDep=r}else ku(t,r,e)}else Ph(t,e)}function ku(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=eh(e)),Ph(t,n)}let Au;function Ph(t,e,n){const s=t.type;if(!t.render){if(!e&&Au&&!s.render){const i=s.template||Kl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=He(He({isCustomElement:r,delimiters:a},o),l);s.render=Au(i,c)}}t.render=s.render||yt}ws(t),Ms(),vv(t),Fs(),Un()}function Hv(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function jv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Hv(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(eh(Cs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fi)return fi[n](t)},has(e,n){return n in e||n in fi}}))}function zv(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function qv(t){return ne(t)&&"__vccOpts"in t}const R=(t,e)=>z_(t,e,Ni);function Jn(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!ee(e)?Wa(e)?S(t,null,[e]):S(t,e):S(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wa(n)&&(n=[n]),S(t,e,n))}const Kv=Symbol(""),Gv=()=>Le(Kv),Yv="3.2.45",Qv="http://www.w3.org/2000/svg",Dn=typeof document<"u"?document:null,xu=Dn&&Dn.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Dn.createElementNS(Qv,t):Dn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{xu.innerHTML=s?`<svg>${t}</svg>`:t;const a=xu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zv(t,e,n){const s=t.style,i=je(n);if(n&&!i){for(const r in n)Ha(s,r,n[r]);if(e&&!je(e))for(const r in e)n[r]==null&&Ha(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Pu=/\s*!important$/;function Ha(t,e,n){if(ee(n))n.forEach(s=>Ha(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ey(t,e);Pu.test(n)?t.setProperty(Ls(s),n.replace(Pu,""),"important"):t[s]=n}}const Nu=["Webkit","Moz","ms"],ra={};function ey(t,e){const n=ra[e];if(n)return n;let s=It(e);if(s!=="filter"&&s in t)return ra[e]=s;s=Gi(s);for(let i=0;i<Nu.length;i++){const r=Nu[i]+s;if(r in t)return ra[e]=r}return e}const Ou="http://www.w3.org/1999/xlink";function ty(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ou,e.slice(6,e.length)):t.setAttributeNS(Ou,e,n);else{const r=n_(e);n==null||r&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ny(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function sy(t,e,n,s){t.addEventListener(e,n,s)}function iy(t,e,n,s){t.removeEventListener(e,n,s)}function ry(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=oy(e);if(s){const c=r[e]=cy(s,i);sy(t,a,c,l)}else o&&(iy(t,a,o,l),r[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function oy(t){let e;if(Du.test(t)){e={};let s;for(;s=t.match(Du);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let oa=0;const ay=Promise.resolve(),ly=()=>oa||(ay.then(()=>oa=0),oa=Date.now());function cy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(uy(s,n.value),e,5,[s])};return n.value=t,n.attached=ly(),n}function uy(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Lu=/^on[a-z]/,dy=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Jv(t,s,i):e==="style"?Zv(t,n,s):po(e)?Al(e)||ry(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fy(t,e,s,i))?ny(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ty(t,e,s,i))};function fy(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Lu.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lu.test(e)&&je(n)?!1:e in t}const en="transition",Zs="animation",Bs=(t,{slots:e})=>Jn(uh,Oh(t),e);Bs.displayName="Transition";const Nh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hy=Bs.props=He({},uh.props,Nh),kn=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},Mu=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function Oh(t){const e={};for(const x in t)x in Nh||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=py(i),_=m&&m[0],y=m&&m[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:E,onLeave:M,onLeaveCancelled:D,onBeforeAppear:H=b,onAppear:N=w,onAppearCancelled:T=E}=e,W=(x,Y,se)=>{rn(x,Y?u:a),rn(x,Y?c:o),se&&se()},U=(x,Y)=>{x._isLeaving=!1,rn(x,d),rn(x,h),rn(x,f),Y&&Y()},z=x=>(Y,se)=>{const ae=x?N:w,te=()=>W(Y,x,se);kn(ae,[Y,te]),Fu(()=>{rn(Y,x?l:r),Mt(Y,x?u:a),Mu(ae)||$u(Y,s,_,te)})};return He(e,{onBeforeEnter(x){kn(b,[x]),Mt(x,r),Mt(x,o)},onBeforeAppear(x){kn(H,[x]),Mt(x,l),Mt(x,c)},onEnter:z(!1),onAppear:z(!0),onLeave(x,Y){x._isLeaving=!0;const se=()=>U(x,Y);Mt(x,d),Lh(),Mt(x,f),Fu(()=>{!x._isLeaving||(rn(x,d),Mt(x,h),Mu(M)||$u(x,s,y,se))}),kn(M,[x,se])},onEnterCancelled(x){W(x,!1),kn(E,[x])},onAppearCancelled(x){W(x,!0),kn(T,[x])},onLeaveCancelled(x){U(x),kn(D,[x])}})}function py(t){if(t==null)return null;if(Pe(t))return[aa(t.enter),aa(t.leave)];{const e=aa(t);return[e,e]}}function aa(t){return Ol(t)}function Mt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function rn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Fu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let my=0;function $u(t,e,n,s){const i=t._endId=++my,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Dh(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),r()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Dh(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${en}Delay`),r=s(`${en}Duration`),o=Uu(i,r),a=s(`${Zs}Delay`),l=s(`${Zs}Duration`),c=Uu(a,l);let u=null,d=0,f=0;e===en?o>0&&(u=en,d=o,f=r.length):e===Zs?c>0&&(u=Zs,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?en:Zs:null,f=u?u===en?r.length:l.length:0);const h=u===en&&/\b(transform|all)(,|$)/.test(s(`${en}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Uu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Bu(n)+Bu(t[s])))}function Bu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Lh(){return document.body.offsetHeight}const Mh=new WeakMap,Fh=new WeakMap,gy={name:"TransitionGroup",props:He({},hy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Qi(),s=ch();let i,r;return ph(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Cy(i[0].el,n.vnode.el,o))return;i.forEach(vy),i.forEach(yy);const a=i.filter(by);Lh(),a.forEach(l=>{const c=l.el,u=c.style;Mt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,rn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=de(t),a=Oh(o);let l=o.tag||ze;i=r,r=e.default?jl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&xi(u,Ai(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];xi(u,Ai(u,a,s,n)),Mh.set(u,u.el.getBoundingClientRect())}return S(l,null,r)}}},_y=gy;function vy(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function yy(t){Fh.set(t,t.el.getBoundingClientRect())}function by(t){const e=Mh.get(t),n=Fh.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Cy(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Dh(s);return i.removeChild(s),r}const $h={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ei(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ei(t,!0),s.enter(t)):s.leave(t,()=>{ei(t,!1)}):ei(t,e))},beforeUnmount(t,{value:e}){ei(t,e)}};function ei(t,e){t.style.display=e?t._vod:"none"}const wy=He({patchProp:dy},Xv);let Vu;function Ey(){return Vu||(Vu=xv(wy))}const Iy=(...t)=>{const e=Ey().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Sy(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Sy(t){return je(t)?document.querySelector(t):t}var Ty=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Uh;const Po=t=>Uh=t,Bh=Symbol();function ja(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pi||(pi={}));function Ry(){const t=_o(!0),e=t.run(()=>me({}));let n=[],s=[];const i=Cs({install(r){Po(i),i._a=r,r.provide(Bh,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Ty?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Vh=()=>{};function Wu(t,e,n,s=Vh){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&p_()&&m_(i),i}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}function za(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ja(i)&&ja(s)&&t.hasOwnProperty(n)&&!be(s)&&!mn(s)?t[n]=za(i,s):t[n]=s}return t}const ky=Symbol();function Ay(t){return!ja(t)||!t.hasOwnProperty(ky)}const{assign:an}=Object;function xy(t){return!!(be(t)&&t.effect)}function Py(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=bo(n.state.value[t]);return an(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=Cs(R(()=>{Po(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return l=Wh(t,c,e,n,s,!0),l.$reset=function(){const d=i?i():{};this.$patch(f=>{an(f,d)})},l}function Wh(t,e,n={},s,i,r){let o;const a=an({actions:{}},n),l={deep:!0};let c,u,d=Cs([]),f=Cs([]),h;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),me({});let _;function y(N){let T;c=u=!1,typeof N=="function"?(N(s.state.value[t]),T={type:pi.patchFunction,storeId:t,events:h}):(za(s.state.value[t],N),T={type:pi.patchObject,payload:N,storeId:t,events:h});const W=_=Symbol();$s().then(()=>{_===W&&(c=!0)}),u=!0,ss(d,T,s.state.value[t])}const b=Vh;function w(){o.stop(),d=[],f=[],s._s.delete(t)}function E(N,T){return function(){Po(s);const W=Array.from(arguments),U=[],z=[];function x(ae){U.push(ae)}function Y(ae){z.push(ae)}ss(f,{args:W,name:N,store:D,after:x,onError:Y});let se;try{se=T.apply(this&&this.$id===t?this:D,W)}catch(ae){throw ss(z,ae),ae}return se instanceof Promise?se.then(ae=>(ss(U,ae),ae)).catch(ae=>(ss(z,ae),Promise.reject(ae))):(ss(U,se),se)}}const M={_p:s,$id:t,$onAction:Wu.bind(null,f),$patch:y,$reset:b,$subscribe(N,T={}){const W=Wu(d,N,T.detached,()=>U()),U=o.run(()=>De(()=>s.state.value[t],z=>{(T.flush==="sync"?u:c)&&N({storeId:t,type:pi.direct,events:h},z)},an({},l,T)));return W},$dispose:w},D=Ge(M);s._s.set(t,D);const H=s._e.run(()=>(o=_o(),o.run(()=>e())));for(const N in H){const T=H[N];if(be(T)&&!xy(T)||mn(T))r||(m&&Ay(T)&&(be(T)?T.value=m[N]:za(T,m[N])),s.state.value[t][N]=T);else if(typeof T=="function"){const W=E(N,T);H[N]=W,a.actions[N]=T}}return an(D,H),an(de(D),H),Object.defineProperty(D,"$state",{get:()=>s.state.value[t],set:N=>{y(T=>{an(T,N)})}}),s._p.forEach(N=>{an(D,o.run(()=>N({store:D,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(D.$state,m),c=!0,u=!0,D}function Ny(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Qi();return a=a||c&&Le(Bh,null),a&&Po(a),a=Uh,a._s.has(s)||(r?Wh(s,e,i,a):Py(s,i,a)),a._s.get(s)}return o.$id=s,o}function Oy(t,e){return Array.isArray(e)?e.reduce((n,s)=>(n[s]=function(){return t(this.$pinia)[s]},n),{}):Object.keys(e).reduce((n,s)=>(n[s]=function(){const i=t(this.$pinia),r=e[s];return typeof r=="function"?r.call(this,i):i[r]},n),{})}function Hh(t,e){return Array.isArray(e)?e.reduce((n,s)=>(n[s]=function(...i){return t(this.$pinia)[s](...i)},n),{}):Object.keys(e).reduce((n,s)=>(n[s]=function(...i){return t(this.$pinia)[e[s]](...i)},n),{})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Vs(e)},Vs=function(t){return new Error("Firebase Database ("+jh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dy=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ql={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(f=64)),s.push(n[u],n[d],n[f],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const h=a<<4&240|c>>2;if(s.push(h),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qh=function(t){const e=zh(t);return Ql.encodeByteArray(e,!0)},$r=function(t){return qh(t).replace(/\./g,"")},Ur=function(t){try{return Ql.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){return Kh(void 0,t)}function Kh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!My(n)||(t[n]=Kh(t[n],e[n]));return t}function My(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Fy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $y(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yh(){return jh.NODE_ADMIN===!0}function Uy(){try{return typeof indexedDB=="object"}catch{return!1}}function By(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Vy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=()=>Vy().__FIREBASE_DEFAULTS__,Hy=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ur(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return Wy()||Hy()||jy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qh=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zy=t=>{const e=Qh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qy=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},Xh=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$r(JSON.stringify(n)),$r(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gy,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ji.prototype.create)}}class Ji{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Yy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new In(i,a,s)}}function Yy(t,e){return t.replace(Qy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Qy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Oi(Ur(r[0])||""),n=Oi(Ur(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Xy=function(t){const e=Jh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Jy=function(t){const e=Jh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Es(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hu(r)&&Hu(o)){if(!Vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function eb(t,e){const n=new tb(t,e);return n.subscribe.bind(n)}class tb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");nb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}function No(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ob(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===xn?void 0:t}function ob(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ib(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const lb={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},cb=ye.INFO,ub={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},db=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ub[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=cb,this._logHandler=db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const fb=(t,e)=>e.some(n=>t instanceof n);let ju,zu;function hb(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return zu||(zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zh=new WeakMap,Ka=new WeakMap,ep=new WeakMap,ca=new WeakMap,ec=new WeakMap;function mb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_n(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zh.set(n,t)}).catch(()=>{}),ec.set(e,t),e}function gb(t){if(Ka.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ka.set(t,e)}let Ga={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ka.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ep.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _b(t){Ga=t(Ga)}function vb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ua(this),e,...n);return ep.set(s,e.sort?e.sort():[e]),_n(s)}:pb().includes(t)?function(...e){return t.apply(ua(this),e),_n(Zh.get(this))}:function(...e){return _n(t.apply(ua(this),e))}}function yb(t){return typeof t=="function"?vb(t):(t instanceof IDBTransaction&&gb(t),fb(t,hb())?new Proxy(t,Ga):t)}function _n(t){if(t instanceof IDBRequest)return mb(t);if(ca.has(t))return ca.get(t);const e=yb(t);return e!==t&&(ca.set(t,e),ec.set(e,t)),e}const ua=t=>ec.get(t);function bb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_n(o.result),l.oldVersion,l.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Cb=["get","getKey","getAll","getAllKeys","count"],wb=["put","add","delete","clear"],da=new Map;function qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=wb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Cb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return da.set(e,r),r}_b(t=>({...t,get:(e,n,s)=>qu(e,n)||t.get(e,n,s),has:(e,n)=>!!qu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ib(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ib(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ya="@firebase/app",Ku="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Zl("@firebase/app"),Sb="@firebase/app-compat",Tb="@firebase/analytics-compat",Rb="@firebase/analytics",kb="@firebase/app-check-compat",Ab="@firebase/app-check",xb="@firebase/auth",Pb="@firebase/auth-compat",Nb="@firebase/database",Ob="@firebase/database-compat",Db="@firebase/functions",Lb="@firebase/functions-compat",Mb="@firebase/installations",Fb="@firebase/installations-compat",$b="@firebase/messaging",Ub="@firebase/messaging-compat",Bb="@firebase/performance",Vb="@firebase/performance-compat",Wb="@firebase/remote-config",Hb="@firebase/remote-config-compat",jb="@firebase/storage",zb="@firebase/storage-compat",qb="@firebase/firestore",Kb="@firebase/firestore-compat",Gb="firebase",Yb="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",Qb={[Ya]:"fire-core",[Sb]:"fire-core-compat",[Rb]:"fire-analytics",[Tb]:"fire-analytics-compat",[Ab]:"fire-app-check",[kb]:"fire-app-check-compat",[xb]:"fire-auth",[Pb]:"fire-auth-compat",[Nb]:"fire-rtdb",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Lb]:"fire-fn-compat",[Mb]:"fire-iid",[Fb]:"fire-iid-compat",[$b]:"fire-fcm",[Ub]:"fire-fcm-compat",[Bb]:"fire-perf",[Vb]:"fire-perf-compat",[Wb]:"fire-rc",[Hb]:"fire-rc-compat",[jb]:"fire-gcs",[zb]:"fire-gcs-compat",[qb]:"fire-fst",[Kb]:"fire-fst-compat","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,Xa=new Map;function Xb(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(Xa.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of Wr.values())Xb(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new Ji("app","Firebase",Jb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=Yb;function tp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=qy()),!n)throw vn.create("no-options");const r=Wr.get(i);if(r){if(Vr(n,r.options)&&Vr(s,r.config))return r;throw vn.create("duplicate-app",{appName:i})}const o=new ab(i);for(const l of Xa.values())o.addComponent(l);const a=new Zb(n,s,o);return Wr.set(i,a),a}function np(t=Qa){const e=Wr.get(t);if(!e&&t===Qa)return tp();if(!e)throw vn.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=Qb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}Is(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="firebase-heartbeat-database",tC=1,Di="firebase-heartbeat-store";let fa=null;function sp(){return fa||(fa=bb(eC,tC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Di)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),fa}async function nC(t){try{return(await sp()).transaction(Di).objectStore(Di).get(ip(t))}catch(e){if(e instanceof In)jn.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function Gu(t,e){try{const s=(await sp()).transaction(Di,"readwrite");return await s.objectStore(Di).put(e,ip(t)),s.done}catch(n){if(n instanceof In)jn.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(s.message)}}}function ip(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,iC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=iC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yu(),{heartbeatsToSend:n,unsentEntries:s}=oC(this._heartbeatsCache.heartbeats),i=$r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yu(){return new Date().toISOString().substring(0,10)}function oC(t,e=sC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uy()?By().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qu(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){Is(new Hn("platform-logger",e=>new Eb(e),"PRIVATE")),Is(new Hn("heartbeat",e=>new rC(e),"PRIVATE")),yn(Ya,Ku,t),yn(Ya,Ku,"esm2017"),yn("fire-js","")}lC("");var cC="firebase",uC="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(cC,uC,"app");const Xu="@firebase/database",Ju="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp="";function dC(t){rp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Oi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fC(e)}}catch{}return new hC},Mn=op("localStorage"),Ja=op("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Zl("@firebase/database"),pC=function(){let t=1;return function(){return t++}}(),ap=function(t){const e=sb(t),n=new Zy;n.update(e);const s=n.digest();return Ql.encodeByteArray(s)},er=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=er.apply(null,s):typeof s=="object"?e+=We(s):e+=s,e+=" "}return e};let Bn=null,Zu=!0;const mC=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hs.logLevel=ye.VERBOSE,Bn=hs.log.bind(hs),e&&Ja.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,Ja.remove("logging_enabled"))},qe=function(...t){if(Zu===!0&&(Zu=!1,Bn===null&&Ja.get("logging_enabled")===!0&&mC(!0)),Bn){const e=er.apply(null,t);Bn(e)}},tr=function(t){return function(...e){qe(t,...e)}},Za=function(...t){const e="FIREBASE INTERNAL ERROR: "+er(...t);hs.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${er(...t)}`;throw hs.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+er(...t);hs.warn(e)},gC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_C=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ss="[MIN_NAME]",zn="[MAX_NAME]",Zn=function(t,e){if(t===e)return 0;if(t===Ss||e===zn)return-1;if(e===Ss||t===zn)return 1;{const n=ed(t),s=ed(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vC=function(t,e){return t===e?0:t<e?-1:1},ti=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},sc=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=We(e[s]),n+=":",n+=sc(t[e[s]]);return n+="}",n},lp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cp=function(t){P(!nc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},yC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const wC=new RegExp("^-?(0*)\\d{1,10}$"),EC=-2147483648,IC=2147483647,ed=function(t){if(wC.test(t)){const e=Number(t);if(e>=EC&&e<=IC)return e}return null},Hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},SC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="5",up="v",dp="s",fp="r",hp="f",pp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mp="ls",gp="p",el="ac",_p="websocket",vp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bp(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===_p)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===vp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kC(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ly(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={},pa={};function rc(t){const e=t.toString();return ha[e]||(ha[e]=new AC),ha[e]}function xC(t,e){const n=t.toString();return pa[n]||(pa[n]=e()),pa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Hs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="start",NC="close",OC="pLPCommand",DC="pRTLPCB",Cp="id",wp="pw",Ep="ser",LC="cb",MC="seg",FC="ts",$C="d",UC="dframe",Ip=1870,Sp=30,BC=Ip-Sp,VC=25e3,WC=3e4;class cs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tr(e),this.stats_=rc(n),this.urlFn=l=>(this.appCheckToken&&(l[el]=this.appCheckToken),bp(n,vp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new PC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WC)),_C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new oc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===td)this.id=a,this.password=l;else if(o===NC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[td]="t",s[Ep]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[LC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[up]=ic,this.transportSessionId&&(s[dp]=this.transportSessionId),this.lastSessionId&&(s[mp]=this.lastSessionId),this.applicationId&&(s[gp]=this.applicationId),this.appCheckToken&&(s[el]=this.appCheckToken),typeof location<"u"&&location.hostname&&pp.test(location.hostname)&&(s[fp]=hp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return cs.forceAllow_?!0:!cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yC()&&!bC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qh(n),i=lp(s,BC);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[UC]="t",s[Cp]=e,s[wp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class oc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pC(),window[OC+this.uniqueCallbackIdentifier]=e,window[DC+this.uniqueCallbackIdentifier]=n,this.myIFrame=oc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Cp]=this.myID,e[wp]=this.myPW,e[Ep]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sp+s.length<=Ip;){const o=this.pendingSegs.shift();s=s+"&"+MC+i+"="+o.seg+"&"+FC+i+"="+o.ts+"&"+$C+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(VC)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=16384,jC=45e3;let Hr=null;typeof MozWebSocket<"u"?Hr=MozWebSocket:typeof WebSocket<"u"&&(Hr=WebSocket);class gt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tr(this.connId),this.stats_=rc(n),this.connURL=gt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[up]=ic,typeof location<"u"&&location.hostname&&pp.test(location.hostname)&&(o[fp]=hp),n&&(o[dp]=n),s&&(o[mp]=s),i&&(o[el]=i),r&&(o[gp]=r),bp(e,_p,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let s;Yh(),this.mySock=new Hr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hr!==null&&!gt.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Oi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lp(n,HC);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gt&&gt.isAvailable();let s=n&&!gt.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[gt];else{const i=this.transports_=[];for(const r of Li.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Li.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Li.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=6e4,qC=5e3,KC=10*1024,GC=100*1024,ma="t",nd="d",YC="s",sd="r",QC="e",id="o",rd="a",od="n",ad="p",XC="h";class JC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tr("c:"+this.id+":"),this.transportManager_=new Li(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ma in e){const n=e[ma];n===rd?this.upgradeIfSecondaryHealthy_():n===sd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===id&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ti("t",e),s=ti("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:od,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ti("t",e),s=ti("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ti(ma,e);if(nd in e){const s=e[nd];if(n===XC)this.onHandshake_(s);else if(n===od){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YC?this.onConnectionShutdown_(s):n===sd?this.onReset_(s):n===QC?Za("Server Error: "+s):n===id?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Za("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ic!==s&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Rp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jr}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=32,cd=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new _e("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function ac(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Ae(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new _e(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function nt(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return nt(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ew(t,e){const n=Mi(t,0),s=Mi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Zn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function lc(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class tw{constructor(e,n){this.errorPrefix_=n,this.parts_=Mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oo(this.parts_[s]);Ap(this)}}function nw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oo(e),Ap(t)}function sw(t){const e=t.parts_.pop();t.byteLength_-=Oo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ap(t){if(t.byteLength_>cd)throw new Error(t.errorPrefix_+"has a key path longer than "+cd+" bytes ("+t.byteLength_+").");if(t.parts_.length>ld)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ld+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Rp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new cc}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=1e3,iw=60*5*1e3,ud=30*1e3,rw=1.3,ow=3e4,aw="server_kill",dd=3;class Wt extends Tp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=tr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ni,this.maxReconnectDelay_=iw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Yh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(We(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=Es(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ud)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Za("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ow&&(this.reconnectDelay_=ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new JC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{Je(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(aw)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Je(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qa(this.interruptReasons_)&&(this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>sc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dd&&(this.reconnectDelay_=ud,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+rp.replace(/\./g,"-")]=1,Xl()?e["framework.cordova"]=1:Gh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jr.getInstance().currentlyOnline();return qa(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Ss,e),i=new oe(Ss,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;class xp extends Do{static get __EMPTY_NODE(){return vr}static set __EMPTY_NODE(e){vr=e}compare(e,n){return Zn(e.name,n.name)}isDefinedOn(e){throw Vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(zn,vr)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,vr)}toString(){return".key"}}const ms=new xp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ue.RED,this.left=i!=null?i:st.EMPTY_NODE,this.right=r!=null?r:st.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class lw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yr(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new lw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e){return Zn(t.name,e.name)}function uc(t,e){return Zn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;function uw(t){tl=t}const Pp=function(t){return typeof t=="number"?"number:"+cp(t):"string:"+t},Np=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else P(t===tl||t.isEmpty(),"priority of unexpected type.");P(t===tl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Np(this.priorityNode_)}static set __childrenNodeConstructor(e){fd=e}static get __childrenNodeConstructor(){return fd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:re(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cp(this.value_):e+=this.value_,this.lazyHash_=ap(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op,Dp;function dw(t){Op=t}function fw(t){Dp=t}class hw extends Do{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Zn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(zn,new $e("[PRIORITY-POST]",Dp))}makePost(e,n){const s=Op(e);return new oe(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new hw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=Math.log(2);class mw{constructor(e){const n=r=>parseInt(Math.log(r)/pw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ue(f,d.node,Ue.BLACK,null,null);{const h=parseInt(u/2,10)+l,m=i(l,h),_=i(h+1,c);return d=t[h],f=n?n(d):d,new Ue(f,d.node,Ue.BLACK,m,_)}},r=function(l){let c=null,u=null,d=t.length;const f=function(m,_){const y=d-m,b=d;d-=m;const w=i(y+1,b),E=t[y],M=n?n(E):E;h(new Ue(M,E.node,_,null,w))},h=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));_?f(y,Ue.BLACK):(f(y,Ue.BLACK),f(y,Ue.RED))}return u},o=new mw(t.length),a=r(o);return new st(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;const is={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(is&&xe,"ChildrenNode.ts has not been loaded"),ga=ga||new $t({".priority":is},{".priority":xe}),ga}get(e){const n=Es(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=zr(s,e.getCompare()):a=is;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=Br(this.indexes_,(i,r)=>{const o=Es(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zr(a,o.getCompare())}else return is;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=Br(this.indexes_,i=>{if(i===is)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class Q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Np(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return si||(si=new Q(new st(uc),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?si:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?si:this.priorityNode_;return new Q(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{P(re(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),s++,r&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pp(this.getPriority().val())+":"),this.forEachChild(xe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ap(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nr?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(xe),i=n.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gw extends Q{constructor(){super(new st(uc),Q.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const nr=new gw;Object.defineProperties(oe,{MIN:{value:new oe(Ss,Q.EMPTY_NODE)},MAX:{value:new oe(zn,nr)}});xp.__EMPTY_NODE=Q.EMPTY_NODE;$e.__childrenNodeConstructor=Q;uw(nr);fw(nr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=!0;function Be(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,Be(e))}if(!(t instanceof Array)&&_w){const n=[];let s=!1;if(Ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return Q.EMPTY_NODE;const r=zr(n,cw,o=>o.name,uc);if(s){const o=zr(n,xe.getCompare());return new Q(r,Be(e),new $t({".priority":o},{".priority":xe}))}else return new Q(r,Be(e),$t.Default)}else{let n=Q.EMPTY_NODE;return Ke(t,(s,i)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const r=Be(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Be(e))}}dw(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Do{constructor(e){super(),this.indexPath_=e,P(!ce(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Zn(e.name,n.name):r}makePost(e,n){const s=Be(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,nr);return new oe(zn,e)}toString(){return Mi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends Do{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Zn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=Be(e);return new oe(n,s)}toString(){return".value"}}const bw=new yw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){return{type:"value",snapshotNode:t}}function Ts(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $i(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cw(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Fi(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ts(n,s)):o.trackChildChange($i(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Fi(i,r))}),n.isLeafNode()||n.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange($i(i,r,o))}else s.trackChildChange(Ts(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.indexedFilter_=new dc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ui.getStartPost_(e),this.endPost_=Ui.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new oe(n,s))||(s=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const r=this;return n.forEachChild(xe,(o,a)=>{r.matches(new oe(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ui(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new oe(n,s))||(s=Q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,h)=>d(h,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new oe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(u&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange($i(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Fi(n,d));const _=a.updateImmediateChild(n,Q.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ts(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Fi(c.name,c.node)),r.trackChildChange(Ts(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,Q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ss}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new fc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ew(t){return t.loadsAllData()?new dc(t.getIndex()):t.hasLimit()?new ww(t):new Ui(t)}function hd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===bw?n="$value":t.index_===ms?n="$key":(P(t.index_ instanceof vw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=We(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+We(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=We(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Tp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=tr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qr.getListenId_(e,s),a={};this.listens_[o]=a;const l=hd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Es(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=qr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=hd(e._queryParams),s=e._path.toString(),i=new Xi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ws(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oi(a.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){return{value:null,children:new Map}}function Mp(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,Kr());const i=t.children.get(s);e=Ie(e),Mp(i,e,n)}}function nl(t,e,n){t.value!==null?n(e,t.value):Sw(t,(s,i)=>{const r=new _e(e.toString()+"/"+s);nl(i,r,n)})}function Sw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=10*1e3,Rw=30*1e3,kw=5*60*1e3;class Aw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Tw(e);const s=md+(Rw-md)*Math.random();mi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ke(e,(i,r)=>{r>0&&Lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*kw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function hc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=vt.ACK_USER_WRITE,this.source=hc()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Gr(pe(),n,this.revert)}}else return P(re(this.path)===e,"operationForChild called for unrelated child."),new Gr(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Bi(this.source,pe()):new Bi(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=vt.OVERWRITE}operationForChild(e){return ce(this.path)?new qn(this.source,pe(),this.snap.getImmediateChild(e)):new qn(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=vt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new qn(this.source,pe(),n.value):new Rs(this.source,pe(),n)}else return P(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rs(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Pw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cw(o.childName,o.snapshotNode))}),ii(t,i,"child_removed",e,s,n),ii(t,i,"child_added",e,s,n),ii(t,i,"child_moved",r,s,n),ii(t,i,"child_changed",e,s,n),ii(t,i,"value",e,s,n),i}function ii(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ow(t,a,l)),o.forEach(a=>{const l=Nw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Nw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ow(t,e,n){if(e.childName==null||n.childName==null)throw Vs("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){return{eventCache:t,serverCache:e}}function gi(t,e,n,s){return Lo(new Kn(e,n,s),t.serverCache)}function Fp(t,e,n,s){return Lo(t.eventCache,new Kn(e,n,s))}function sl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;const Dw=()=>(_a||(_a=new st(vC)),_a);class we{constructor(e,n=Dw()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Ke(e,(s,i)=>{n=n.set(new _e(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ce(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ie(e),n);return r!=null?{path:Ae(new _e(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new we(null)}}set(e,n){if(ce(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(Ie(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(ce(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(Ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ae(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ce(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Ie(e),Ae(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,s){if(ce(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Ie(e),Ae(n,i),s):new we(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new we(null))}}function _i(t,e,n){if(ce(e))return new Et(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=nt(i,e);return r=r.updateChild(o,n),new Et(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Et(r)}}}function il(t,e,n){let s=t;return Ke(n,(i,r)=>{s=_i(s,Ae(e,i),r)}),s}function gd(t,e){if(ce(e))return Et.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Et(n)}}function rl(t,e){return es(t,e)!=null}function es(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nt(n.path,e)):null}function _d(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function bn(t,e){if(ce(e))return t;{const n=es(t,e);return n!=null?new Et(new we(n)):new Et(t.writeTree_.subtree(e))}}function ol(t){return t.writeTree_.isEmpty()}function ks(t,e){return $p(pe(),t.writeTree_,e)}function $p(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=$p(Ae(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ae(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e){return Wp(e,t)}function Lw(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_i(t.visibleWrites,e,n)),t.lastWriteId=s}function Mw(t,e,n,s){P(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=il(t.visibleWrites,e,n),t.lastWriteId=s}function Fw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function $w(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Uw(a,s.path)?i=!1:ft(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Bw(t),!0;if(s.snap)t.visibleWrites=gd(t.visibleWrites,s.path);else{const a=s.children;Ke(a,l=>{t.visibleWrites=gd(t.visibleWrites,Ae(s.path,l))})}return!0}else return!1}function Uw(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(Ae(t.path,n),e))return!0;return!1}function Bw(t){t.visibleWrites=Up(t.allWrites,Vw,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vw(t){return t.visible}function Up(t,e,n){let s=Et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ft(n,o)?(a=nt(n,o),s=_i(s,a,r.snap)):ft(o,n)&&(a=nt(o,n),s=_i(s,pe(),r.snap.getChild(a)));else if(r.children){if(ft(n,o))a=nt(n,o),s=il(s,a,r.children);else if(ft(o,n))if(a=nt(o,n),ce(a))s=il(s,pe(),r.children);else{const l=Es(r.children,re(a));if(l){const c=l.getChild(Ie(a));s=_i(s,pe(),c)}}}else throw Vs("WriteRecord should have .snap or .children")}}return s}function Bp(t,e,n,s,i){if(!s&&!i){const r=es(t.visibleWrites,e);if(r!=null)return r;{const o=bn(t.visibleWrites,e);if(ol(o))return n;if(n==null&&!rl(o,pe()))return null;{const a=n||Q.EMPTY_NODE;return ks(o,a)}}}else{const r=bn(t.visibleWrites,e);if(!i&&ol(r))return n;if(!i&&n==null&&!rl(r,pe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},a=Up(t.allWrites,o,e),l=n||Q.EMPTY_NODE;return ks(a,l)}}}function Ww(t,e,n){let s=Q.EMPTY_NODE;const i=es(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=bn(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=ks(bn(r,new _e(o)),a);s=s.updateImmediateChild(o,l)}),_d(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=bn(t.visibleWrites,e);return _d(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Hw(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ae(e,n);if(rl(t.visibleWrites,r))return null;{const o=bn(t.visibleWrites,r);return ol(o)?i.getChild(n):ks(o,i.getChild(n))}}function jw(t,e,n,s){const i=Ae(e,n),r=es(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=bn(t.visibleWrites,i);return ks(o,s.getNode().getImmediateChild(n))}else return null}function zw(t,e){return es(t.visibleWrites,e)}function qw(t,e,n,s,i,r,o){let a;const l=bn(t.visibleWrites,e),c=es(l,pe());if(c!=null)a=c;else if(n!=null)a=ks(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let h=f.getNext();for(;h&&u.length<i;)d(h,s)!==0&&u.push(h),h=f.getNext();return u}else return[]}function Kw(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function Yr(t,e,n,s){return Bp(t.writeTree,t.treePath,e,n,s)}function _c(t,e){return Ww(t.writeTree,t.treePath,e)}function vd(t,e,n,s){return Hw(t.writeTree,t.treePath,e,n,s)}function Qr(t,e){return zw(t.writeTree,Ae(t.treePath,e))}function Gw(t,e,n,s,i,r){return qw(t.writeTree,t.treePath,e,n,s,i,r)}function vc(t,e,n){return jw(t.writeTree,t.treePath,e,n)}function Vp(t,e){return Wp(Ae(t.treePath,e),t.writeTree)}function Wp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,$i(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Fi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ts(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,$i(s,e.snapshotNode,i.oldSnap));else throw Vs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Hp=new Qw;class yc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),r=Gw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){return{filter:t}}function Jw(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zw(t,e,n,s,i){const r=new Yw;let o,a;if(n.type===vt.OVERWRITE){const c=n;c.source.fromUser?o=al(t,e,c.path,c.snap,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=Xr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===vt.MERGE){const c=n;c.source.fromUser?o=tE(t,e,c.path,c.children,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ll(t,e,c.path,c.children,s,i,a,r))}else if(n.type===vt.ACK_USER_WRITE){const c=n;c.revert?o=iE(t,e,c.path,s,i,r):o=nE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===vt.LISTEN_COMPLETE)o=sE(t,e,n.path,s,r);else throw Vs("Unknown operation type: "+n.type);const l=r.getChanges();return eE(e,o,l),{viewCache:o,changes:l}}function eE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=sl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Lp(sl(e)))}}function jp(t,e,n,s,i,r){const o=e.eventCache;if(Qr(s,n)!=null)return e;{let a,l;if(ce(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),u=c instanceof Q?c:Q.EMPTY_NODE,d=_c(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Yr(s,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){P(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=vd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ie(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=vd(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=vc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return gi(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Xr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),h,null)}else{const h=re(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const m=Ie(n),y=l.getNode().getImmediateChild(h).updateChild(m,s);h===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),h,y,m,Hp,null)}const d=Fp(e,c,l.isFullyInitialized()||ce(n),u.filtersNodes()),f=new yc(i,d,r);return jp(t,d,n,i,f,a)}function al(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new yc(i,e,r);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gi(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gi(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ie(n),h=a.getNode().getImmediateChild(d);let m;if(ce(f))m=s;else{const _=u.getCompleteChild(d);_!=null?ac(f)===".priority"&&_.getChild(kp(f)).isEmpty()?m=_:m=_.updateChild(f,s):m=Q.EMPTY_NODE}if(h.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=gi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function yd(t,e){return t.eventCache.isCompleteForChild(e)}function tE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ae(n,l);yd(e,re(u))&&(a=al(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ae(n,l);yd(e,re(u))||(a=al(t,a,u,c,i,r,o))}),a}function bd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ll(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),m=bd(t,h,f);l=Xr(t,l,new _e(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!h){const m=e.serverCache.getNode().getImmediateChild(d),_=bd(t,m,f);l=Xr(t,l,new _e(d),_,i,r,o,a)}}),l}function nE(t,e,n,s,i,r,o){if(Qr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ce(n)){let c=new we(null);return l.getNode().forEachChild(ms,(u,d)=>{c=c.set(new _e(u),d)}),ll(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,d)=>{const f=Ae(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ll(t,e,n,c,i,r,a,o)}}function sE(t,e,n,s,i){const r=e.serverCache,o=Fp(e,r.getNode(),r.isFullyInitialized()||ce(n),r.isFiltered());return jp(t,o,n,s,Hp,i)}function iE(t,e,n,s,i,r){let o;if(Qr(s,n)!=null)return e;{const a=new yc(s,e,i),l=e.eventCache.getNode();let c;if(ce(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Yr(s,Gn(e));else{const d=e.serverCache.getNode();P(d instanceof Q,"serverChildren would be complete if leaf node"),u=_c(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let d=vc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ie(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Q.EMPTY_NODE,Ie(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yr(s,Gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Qr(s,pe())!=null,gi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new dc(s.getIndex()),r=Ew(s);this.processor_=Xw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new Kn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Kn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Lo(d,u),this.eventGenerator_=new xw(this.query_)}get query(){return this.query_}}function oE(t){return t.viewCache_.serverCache.getNode()}function aE(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function Cd(t){return t.eventRegistrations_.length===0}function lE(t,e){t.eventRegistrations_.push(e)}function wd(t,e,n){const s=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ed(t,e,n,s){e.type===vt.MERGE&&e.source.queryId!==null&&(P(Gn(t.viewCache_),"We should always have a full cache before handling merges"),P(sl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Zw(t.processor_,i,e,n,s);return Jw(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(r,o)=>{s.push(Ts(r,o))}),n.isFullyInitialized()&&s.push(Lp(n.getNode())),zp(t,s,n.getNode(),e)}function zp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Pw(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class uE{constructor(){this.views=new Map}}function dE(t){P(!Jr,"__referenceConstructor has already been defined"),Jr=t}function fE(){return P(Jr,"Reference.ts has not been loaded"),Jr}function hE(t){return t.views.size===0}function bc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Ed(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ed(o,e,n,s));return r}}function pE(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Yr(n,i?s:null),l=!1;a?l=!0:s instanceof Q?(a=_c(n,s),l=!1):(a=Q.EMPTY_NODE,l=!1);const c=Lo(new Kn(a,l,!1),new Kn(s,i,!1));return new rE(e,c)}return o}function mE(t,e,n,s,i,r){const o=pE(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lE(o,n),cE(o,n)}function gE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=En(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(wd(c,n,s)),Cd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(wd(l,n,s)),Cd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!En(t)&&r.push(new(fE())(e._repo,e._path)),{removed:r,events:o}}function qp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gs(t,e){let n=null;for(const s of t.views.values())n=n||aE(s,e);return n}function Kp(t,e){if(e._queryParams.loadsAllData())return Mo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Gp(t,e){return Kp(t,e)!=null}function En(t){return Mo(t)!=null}function Mo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;function _E(t){P(!Zr,"__referenceConstructor has already been defined"),Zr=t}function vE(){return P(Zr,"Reference.ts has not been loaded"),Zr}let yE=1;class Id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=Kw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yp(t,e,n,s,i){return Lw(t.pendingWriteTree_,e,n,s,i),i?js(t,new qn(hc(),e,n)):[]}function bE(t,e,n,s){Mw(t.pendingWriteTree_,e,n,s);const i=we.fromObject(n);return js(t,new Rs(hc(),e,i))}function hn(t,e,n=!1){const s=Fw(t.pendingWriteTree_,e);if($w(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(pe(),!0):Ke(s.children,o=>{r=r.set(new _e(o),!0)}),js(t,new Gr(s.path,r,n))}else return[]}function Fo(t,e,n){return js(t,new qn(pc(),e,n))}function CE(t,e,n){const s=we.fromObject(n);return js(t,new Rs(pc(),e,s))}function wE(t,e){return js(t,new Bi(pc(),e))}function EE(t,e,n){const s=wc(t,n);if(s){const i=Ec(s),r=i.path,o=i.queryId,a=nt(r,e),l=new Bi(mc(o),a);return Ic(t,r,l)}else return[]}function cl(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Gp(o,e))){const l=gE(o,e,n,s);hE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,h)=>En(h));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const h=TE(f);for(let m=0;m<h.length;++m){const _=h[m],y=_.query,b=Jp(t,_);t.listenProvider_.startListening(vi(y),eo(t,y),b.hashFn,b.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(vi(e),null):c.forEach(f=>{const h=t.queryToTagMap.get($o(f));t.listenProvider_.stopListening(vi(f),h)}))}RE(t,c)}return a}function IE(t,e,n,s){const i=wc(t,s);if(i!=null){const r=Ec(i),o=r.path,a=r.queryId,l=nt(o,e),c=new qn(mc(a),l,n);return Ic(t,o,c)}else return[]}function SE(t,e,n,s){const i=wc(t,s);if(i){const r=Ec(i),o=r.path,a=r.queryId,l=nt(o,e),c=we.fromObject(n),u=new Rs(mc(a),l,c);return Ic(t,o,u)}else return[]}function Sd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const m=nt(f,i);r=r||gs(h,m),o=o||En(h)});let a=t.syncPointTree_.get(i);a?(o=o||En(a),r=r||gs(a,pe())):(a=new uE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,m)=>{const _=gs(m,pe());_&&(r=r.updateImmediateChild(h,_))}));const c=Gp(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=$o(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=kE();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const u=gc(t.pendingWriteTree_,i);let d=mE(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Kp(a,e);d=d.concat(AE(t,e,f))}return d}function Cc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=nt(o,e),c=gs(a,l);if(c)return c});return Bp(i,e,r,n,!0)}function js(t,e){return Qp(e,t.syncPointTree_,null,gc(t.pendingWriteTree_,pe()))}function Qp(t,e,n,s){if(ce(t.path))return Xp(t,e,n,s);{const i=e.get(pe());n==null&&i!=null&&(n=gs(i,pe()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Vp(s,o);r=r.concat(Qp(a,l,c,u))}return i&&(r=r.concat(bc(i,t,s,n))),r}}function Xp(t,e,n,s){const i=e.get(pe());n==null&&i!=null&&(n=gs(i,pe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Vp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Xp(u,a,l,c)))}),i&&(r=r.concat(bc(i,t,s,n))),r}function Jp(t,e){const n=e.query,s=eo(t,n);return{hashFn:()=>(oE(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?EE(t,n._path,s):wE(t,n._path);{const r=CC(i,n);return cl(t,n,null,r)}}}}function eo(t,e){const n=$o(e);return t.queryToTagMap.get(n)}function $o(t){return t._path.toString()+"$"+t._queryIdentifier}function wc(t,e){return t.tagToQueryMap.get(e)}function Ec(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Ic(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=gc(t.pendingWriteTree_,e);return bc(s,n,i,null)}function TE(t){return t.fold((e,n,s)=>{if(n&&En(n))return[Mo(n)];{let i=[];return n&&(i=qp(n)),Ke(s,(r,o)=>{i=i.concat(o)}),i}})}function vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vE())(t._repo,t._path):t}function RE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$o(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function kE(){return yE++}function AE(t,e,n){const s=e._path,i=eo(t,e),r=Jp(t,n),o=t.listenProvider_.startListening(vi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)P(!En(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ce(c)&&u&&En(u))return[Mo(u).query];{let f=[];return u&&(f=f.concat(qp(u).map(h=>h.query))),Ke(d,(h,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(vi(u),eo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sc(n)}node(){return this.node_}}class Tc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new Tc(this.syncTree_,n)}node(){return Cc(this.syncTree_,this.path_)}}const xE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Td=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return PE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NE(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},PE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},NE=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zp=function(t,e,n,s){return Rc(e,new Tc(n,t),s)},em=function(t,e,n){return Rc(t,new Sc(e),n)};function Rc(t,e,n){const s=t.getPriority().val(),i=Td(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Td(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,Be(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(xe,(a,l)=>{const c=Rc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ac(t,e){let n=e instanceof _e?e:new _e(e),s=t,i=re(n);for(;i!==null;){const r=Es(s.node.children,i)||{children:{},childCount:0};s=new kc(i,s,r),n=Ie(n),i=re(n)}return s}function zs(t){return t.node.value}function tm(t,e){t.node.value=e,ul(t)}function nm(t){return t.node.childCount>0}function OE(t){return zs(t)===void 0&&!nm(t)}function Uo(t,e){Ke(t.node.children,(n,s)=>{e(new kc(n,t,s))})}function sm(t,e,n,s){n&&!s&&e(t),Uo(t,i=>{sm(i,e,!0,s)}),n&&s&&e(t)}function DE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sr(t){return new _e(t.parent===null?t.name:sr(t.parent)+"/"+t.name)}function ul(t){t.parent!==null&&LE(t.parent,t.name,t)}function LE(t,e,n){const s=OE(n),i=Lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ul(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ul(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/[\[\].#$\/\u0000-\u001F\u007F]/,FE=/[\[\].#$\u0000-\u001F\u007F]/,va=10*1024*1024,xc=function(t){return typeof t=="string"&&t.length!==0&&!ME.test(t)},im=function(t){return typeof t=="string"&&t.length!==0&&!FE.test(t)},$E=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),im(t)},UE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!nc(t)||t&&typeof t=="object"&&Lt(t,".sv")},BE=function(t,e,n,s){s&&e===void 0||Bo(No(t,"value"),e,n)},Bo=function(t,e,n){const s=n instanceof _e?new tw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(s)+" with contents = "+e.toString());if(nc(e))throw new Error(t+"contains "+e.toString()+" "+Pn(s));if(typeof e=="string"&&e.length>va/3&&Oo(e)>va)throw new Error(t+"contains a string greater than "+va+" utf8 bytes "+Pn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!xc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nw(s,o),Bo(t,a,s),sw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Pn(s)+" in addition to actual children.")}},VE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Mi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!xc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ew);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ft(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},WE=function(t,e,n,s){if(s&&e===void 0)return;const i=No(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ke(e,(o,a)=>{const l=new _e(o);if(Bo(i,a,Ae(n,l)),ac(l)===".priority"&&!UE(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),VE(i,r)},rm=function(t,e,n,s){if(!(s&&n===void 0)&&!im(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},HE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rm(t,e,n,s)},jE=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$E(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function om(t,e,n){Vo(t,n),am(t,s=>lc(s,e))}function St(t,e,n){Vo(t,n),am(t,s=>ft(s,e)||ft(e,s))}function am(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(KE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Bn&&qe("event: "+n.toString()),Hs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="repo_interrupt",YE=25;class QE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kr(),this.transactionQueueTree_=new kc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XE(t,e,n){if(t.stats_=rc(t.repoInfo_),t.forceRestClient_||SC())t.server_=new qr(t.repoInfo_,(s,i,r,o)=>{Rd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(s,i,r,o)=>{Rd(t,s,i,r,o)},s=>{kd(t,s)},s=>{ZE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=xC(t.repoInfo_,()=>new Aw(t.stats_,t.server_)),t.infoData_=new Iw,t.infoSyncTree_=new Id({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Fo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pc(t,"connected",!1),t.serverSyncTree_=new Id({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);St(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function JE(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wo(t){return xE({timestamp:JE(t)})}function Rd(t,e,n,s,i){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Br(n,c=>Be(c));o=SE(t.serverSyncTree_,r,l,i)}else{const l=Be(n);o=IE(t.serverSyncTree_,r,l,i)}else if(s){const l=Br(n,c=>Be(c));o=CE(t.serverSyncTree_,r,l)}else{const l=Be(n);o=Fo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=As(t,r)),St(t.eventQueue_,a,o)}function kd(t,e){Pc(t,"connected",e),e===!1&&nI(t)}function ZE(t,e){Ke(e,(n,s)=>{Pc(t,n,s)})}function Pc(t,e,n){const s=new _e("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(s,i);const r=Fo(t.infoSyncTree_,s,i);St(t.eventQueue_,s,r)}function Nc(t){return t.nextWriteId_++}function eI(t,e,n,s,i){Ho(t,"set",{path:e.toString(),value:n,priority:s});const r=Wo(t),o=Be(n,s),a=Cc(t.serverSyncTree_,e),l=em(o,a,r),c=Nc(t),u=Yp(t.serverSyncTree_,e,l,c,!0);Vo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const m=f==="ok";m||Je("set at "+e+" failed: "+f);const _=hn(t.serverSyncTree_,c,!m);St(t.eventQueue_,e,_),dl(t,i,f,h)});const d=Dc(t,e);As(t,d),St(t.eventQueue_,d,[])}function tI(t,e,n,s){Ho(t,"update",{path:e.toString(),value:n});let i=!0;const r=Wo(t),o={};if(Ke(n,(a,l)=>{i=!1,o[a]=Zp(Ae(e,a),Be(l),t.serverSyncTree_,r)}),i)qe("update() called with empty data.  Don't do anything."),dl(t,s,"ok",void 0);else{const a=Nc(t),l=bE(t.serverSyncTree_,e,o,a);Vo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Je("update at "+e+" failed: "+c);const f=hn(t.serverSyncTree_,a,!d),h=f.length>0?As(t,e):e;St(t.eventQueue_,h,f),dl(t,s,c,u)}),Ke(n,c=>{const u=Dc(t,Ae(e,c));As(t,u)}),St(t.eventQueue_,e,[])}}function nI(t){Ho(t,"onDisconnectEvents");const e=Wo(t),n=Kr();nl(t.onDisconnect_,pe(),(i,r)=>{const o=Zp(i,r,t.serverSyncTree_,e);Mp(n,i,o)});let s=[];nl(n,pe(),(i,r)=>{s=s.concat(Fo(t.serverSyncTree_,i,r));const o=Dc(t,i);As(t,o)}),t.onDisconnect_=Kr(),St(t.eventQueue_,pe(),s)}function sI(t,e,n){let s;re(e._path)===".info"?s=Sd(t.infoSyncTree_,e,n):s=Sd(t.serverSyncTree_,e,n),om(t.eventQueue_,e._path,s)}function Ad(t,e,n){let s;re(e._path)===".info"?s=cl(t.infoSyncTree_,e,n):s=cl(t.serverSyncTree_,e,n),om(t.eventQueue_,e._path,s)}function iI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(GE)}function Ho(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function dl(t,e,n,s){e&&Hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lm(t,e,n){return Cc(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function Oc(t,e=t.transactionQueueTree_){if(e||jo(t,e),zs(e)){const n=um(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rI(t,sr(e),n)}else nm(e)&&Uo(e,n=>{Oc(t,n)})}function rI(t,e,n){const s=n.map(c=>c.currentWriteId),i=lm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=nt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ho(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(hn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();jo(t,Ac(t.transactionQueueTree_,e)),Oc(t,t.transactionQueueTree_),St(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Hs(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Je("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}As(t,e)}},o)}function As(t,e){const n=cm(t,e),s=sr(n),i=um(t,n);return oI(t,i,s),s}function oI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=nt(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YE)u=!0,d="maxretry",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=lm(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){Bo("transaction failed: Data returned ",h,l.path);let m=Be(h);typeof h=="object"&&h!=null&&Lt(h,".priority")||(m=m.updatePriority(f.getPriority()));const y=l.currentWriteId,b=Wo(t),w=em(m,f,b);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=w,l.currentWriteId=Nc(t),o.splice(o.indexOf(y),1),i=i.concat(Yp(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(hn(t.serverSyncTree_,y,!0))}else u=!0,d="nodata",i=i.concat(hn(t.serverSyncTree_,l.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}jo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Hs(s[a]);Oc(t,t.transactionQueueTree_)}function cm(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&zs(s)===void 0;)s=Ac(s,n),e=Ie(e),n=re(e);return s}function um(t,e){const n=[];return dm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function dm(t,e,n){const s=zs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Uo(e,i=>{dm(t,i,n)})}function jo(t,e){const n=zs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,tm(e,n.length>0?n:void 0)}Uo(e,s=>{jo(t,s)})}function Dc(t,e){const n=sr(cm(t,e)),s=Ac(t.transactionQueueTree_,e);return DE(s,i=>{ya(t,i)}),ya(t,s),sm(s,i=>{ya(t,i)}),n}function ya(t,e){const n=zs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?tm(e,void 0):n.length=r+1,St(t.eventQueue_,sr(e),i);for(let o=0;o<s.length;o++)Hs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const xd=function(t,e){const n=cI(t),s=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new yp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new _e(n.pathString)}},cI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=aI(t.substring(u,d)));const f=lI(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class hm{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:ac(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=pd(this._queryParams),n=sc(e);return n==="{}"?"default":n}get _queryObject(){return pd(this._queryParams)}isEqual(e){if(e=Ze(e),!(e instanceof Lc))return!1;const n=this._repo===e._repo,s=lc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZC(this._path)}}class Qt extends Lc{constructor(e,n){super(e,n,new fc,!1)}get parent(){const e=kp(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=to(this.ref,e);return new Vi(this._node.getChild(n),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Vi(i,to(this.ref,s),xe)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dI(t,e){return t=Ze(t),t._checkNotDeleted("ref"),e!==void 0?to(t._root,e):t._root}function to(t,e){return t=Ze(t),re(t._path)===null?HE("child","path",e,!1):rm("child","path",e,!1),new Qt(t._repo,Ae(t._path,e))}function fI(t,e){t=Ze(t),jE("set",t._path),BE("set",e,t._path,!1);const n=new Xi;return eI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hI(t,e){WE("update",e,t._path,!1);const n=new Xi;return tI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Mc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fm("value",this,new Vi(e.snapshotNode,new Qt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hm(this,e,n):null}matches(e){return e instanceof Mc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new hm(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const s=to(new Qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fm(e.type,this,new Vi(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{Ad(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new uI(n,r||void 0),a=e==="value"?new Mc(o):new Fc(e,o);return sI(t._repo,t,a),()=>Ad(t._repo,t,a)}function mI(t,e,n,s){return pI(t,"value",e,n,s)}dE(Qt);_E(Qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FIREBASE_DATABASE_EMULATOR_HOST",fl={};let _I=!1;function vI(t,e,n,s){t.repoInfo_=new yp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function yI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xd(r,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[gI]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=xd(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ps(ps.OWNER):new RC(t.name,t.options,e);zE("Invalid Firebase Database URL",o),ce(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=CI(a,t,u,new TC(t.name,n));return new wI(d,t)}function bI(t,e){const n=fl[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iI(t),delete n[t.key]}function CI(t,e,n,s){let i=fl[e.name];i||(i={},fl[e.name]=i);let r=i[t.toURLString()];return r&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new QE(t,_I,n,s),i[t.toURLString()]=r,r}class wI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function EI(t=np(),e){const n=tc(t,"database").getImmediate({identifier:e}),s=zy("database");return s&&II(n,...s),n}function II(t,e,n,s={}){t=Ze(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ps(ps.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ky(s.mockUserToken,t.app.options.projectId);r=new ps(o)}vI(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){dC(Zi),Is(new Hn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Xu,Ju,t),yn(Xu,Ju,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SI();function $c(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function pm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TI=pm,mm=new Ji("auth","Firebase",pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Zl("@firebase/auth");function Rr(t,...e){Pd.logLevel<=ye.ERROR&&Pd.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Uc(t,...e)}function Ot(t,...e){return Uc(t,...e)}function RI(t,e,n){const s=Object.assign(Object.assign({},TI()),{[e]:n});return new Ji("auth","Firebase",s).create(e,{appName:t.name})}function Uc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return mm.create(t,...e)}function X(t,e,...n){if(!t)throw Uc(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rr(e),new Error(e)}function Kt(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;function Bt(t){Kt(t instanceof Function,"Expected a class definition");let e=Nd.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){const n=tc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Vr(r,e!=null?e:{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function AI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xI(){return Od()==="http:"||Od()==="https:"}function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xI()||Fy()||"connection"in navigator)?navigator.onLine:!0}function NI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xl()||Gh()}get(){return PI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new ir(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qs(t,e,n,s,i={}){return _m(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gm.fetch()(vm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function _m(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},OI),e);try{const i=new LI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw br(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw br(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw br(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw RI(t,u,c);Tt(t,u)}}catch(i){if(i instanceof In)throw i;Tt(t,"network-request-failed")}}async function or(t,e,n,s,i={}){const r=await qs(t,e,n,s,i);return"mfaPendingCredential"in r&&Tt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function vm(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Bc(t.config,i):`${t.config.apiScheme}://${i}`}class LI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),DI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function br(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){return qs(t,"POST","/v1/accounts:delete",e)}async function FI(t,e){return qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $I(t,e=!1){const n=Ze(t),s=await n.getIdToken(e),i=Vc(s);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:yi(ba(i.auth_time)),issuedAtTime:yi(ba(i.iat)),expirationTime:yi(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function Vc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ur(n);return i?JSON.parse(i):(Rr("Failed to decode base64 JWT payload"),null)}catch(i){return Rr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UI(t){const e=Vc(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof In&&BI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function BI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){var e;const n=t.auth,s=await t.getIdToken(),i=await xs(t,FI(n,{idToken:s}));X(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?jI(r.providerUserInfo):[],a=HI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ym(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function WI(t){const e=Ze(t);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function jI(t){return t.map(e=>{var{providerId:n}=e,s=$c(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(t,e){const n=await _m(t,{},async()=>{const s=Ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=vm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Wi;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ym(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $I(this,e)}reload(){return WI(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await no(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xs(this,MI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:M,isAnonymous:D,providerData:H,stsTokenManager:N}=n;X(E&&N,e,"internal-error");const T=Wi.fromJSON(this.name,N);X(typeof E=="string",e,"internal-error"),tn(d,e.name),tn(f,e.name),X(typeof M=="boolean",e,"internal-error"),X(typeof D=="boolean",e,"internal-error"),tn(h,e.name),tn(m,e.name),tn(_,e.name),tn(y,e.name),tn(b,e.name),tn(w,e.name);const W=new Vn({uid:E,auth:e,email:f,emailVerified:M,displayName:d,isAnonymous:D,photoURL:m,phoneNumber:h,tenantId:_,stsTokenManager:T,createdAt:b,lastLoginAt:w});return H&&Array.isArray(H)&&(W.providerData=H.map(U=>Object.assign({},U))),y&&(W._redirectEventId=y),W}static async _fromIdTokenResponse(e,n,s=!1){const i=new Wi;i.updateFromServerResponse(n);const r=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await no(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bm.type="NONE";const Dd=bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=kr(this.userKey,i.apiKey,r),this.fullPersistenceKey=kr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _s(Bt(Dd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Bt(Dd);const o=kr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Vn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new _s(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new _s(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Tm(e))return"Webos";if(Wc(e))return"Safari";if((e.includes("chrome/")||wm(e))&&!e.includes("edge/"))return"Chrome";if(Im(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cm(t=Qe()){return/firefox\//i.test(t)}function Wc(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wm(t=Qe()){return/crios\//i.test(t)}function Em(t=Qe()){return/iemobile/i.test(t)}function Im(t=Qe()){return/android/i.test(t)}function Sm(t=Qe()){return/blackberry/i.test(t)}function Tm(t=Qe()){return/webos/i.test(t)}function zo(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qI(t=Qe()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KI(){return $y()&&document.documentMode===10}function Rm(t=Qe()){return zo(t)||Im(t)||Tm(t)||Sm(t)||/windows phone/i.test(t)||Em(t)}function GI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t,e=[]){let n;switch(t){case"Browser":n=Ld(Qe());break;case"Worker":n=`${Ld(Qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Md(this),this.idTokenSubscription=new Md(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ji("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ar(t){return Ze(t)}class Md{constructor(e){this.auth=e,this.observer=null,this.addObserver=eb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XI(t,e,n){const s=ar(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Am(e),{host:o,port:a}=JI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZI()}function Am(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JI(t){const e=Am(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fd(o)}}}function Fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function e0(t,e){return qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return or(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function s0(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Hc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Hi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Hi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return t0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return n0(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return e0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return s0(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return or(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="http://localhost";class Yn extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=$c(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Yn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o0(t){const e=ci(ui(t)).link,n=e?ci(ui(e)).deep_link_id:null,s=ci(ui(t)).deep_link_id;return(s?ci(ui(s)).link:null)||s||n||e||t}class jc{constructor(e){var n,s,i,r,o,a;const l=ci(ui(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=r0((i=l.mode)!==null&&i!==void 0?i:null);X(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=o0(e);try{return new jc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,n){return Hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=jc.parseLink(n);return X(s,"argument-error"),Hi._fromEmailAndCode(e,s.code,s.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends xm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends lr{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return un.credential(n,s)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends lr{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends lr{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){return or(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Vn._fromIdTokenResponse(e,s,i),o=$d(s);return new Qn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$d(s);return new Qn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends In{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new so(e,n,s,i)}}function Pm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(t,r,e,s):r})}async function l0(t,e,n=!1){const s=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await xs(t,Pm(s,i,e,t),n);X(r.idToken,s,"internal-error");const o=Vc(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),Qn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Tt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e,n=!1){const s="signIn",i=await Pm(t,s,e),r=await Qn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function u0(t,e){return Nm(ar(t),e)}async function d0(t,e,n){const s=ar(t),i=await a0(s,{returnSecureToken:!0,email:e,password:n}),r=await Qn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function f0(t,e,n){return u0(Ze(t),Ks.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e){return qs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ze(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xs(s,h0(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function m0(t,e,n,s){return Ze(t).onIdTokenChanged(e,n,s)}function g0(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function _0(t,e,n,s){return Ze(t).onAuthStateChanged(e,n,s)}function v0(t){return Ze(t).signOut()}const io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){const t=Qe();return Wc(t)||zo(t)}const b0=1e3,C0=10;class Dm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=y0()&&GI(),this.fallbackToPolling=Rm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);KI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,C0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dm.type="LOCAL";const w0=Dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lm.type="SESSION";const Mm=Lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await E0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function S0(t){Dt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function k0(){return Fm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="firebaseLocalStorageDb",A0=1,ro="firebaseLocalStorage",Um="fbase_key";class cr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function x0(){const t=indexedDB.deleteDatabase($m);return new cr(t).toPromise()}function pl(){const t=indexedDB.open($m,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ro,{keyPath:Um})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ro)?e(s):(s.close(),await x0(),e(await pl()))})})}async function Ud(t,e,n){const s=Ko(t,!0).put({[Um]:e,value:n});return new cr(s).toPromise()}async function P0(t,e){const n=Ko(t,!1).get(e),s=await new cr(n).toPromise();return s===void 0?null:s.value}function Bd(t,e){const n=Ko(t,!0).delete(e);return new cr(n).toPromise()}const N0=800,O0=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>O0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(k0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new I0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await Ud(e,io,"1"),await Bd(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ud(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>P0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ko(i,!1).getAll();return new cr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const D0=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function M0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",L0().appendChild(s)})}function F0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){return e?Bt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U0(t){return Nm(t.auth,new qc(t),t.bypassAuthState)}function B0(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),c0(n,new qc(t),t.bypassAuthState)}async function V0(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),l0(n,new qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U0;case"linkViaPopup":case"linkViaRedirect":return V0;case"reauthViaPopup":case"reauthViaRedirect":return B0;default:Tt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new ir(2e3,1e4);class us extends Vm{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,W0.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="pendingRedirect",Ar=new Map;class j0 extends Vm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const s=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(t,e){const n=G0(e),s=K0(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function q0(t,e){Ar.set(t._key(),e)}function K0(t){return Bt(t._redirectPersistence)}function G0(t){return kr(H0,t.config.apiKey,t.name)}async function Y0(t,e,n=!1){const s=ar(t),i=$0(s,e),o=await new j0(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=10*60*1e3;class X0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e={}){return qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function nS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z0(t);for(const n of e)try{if(sS(n))return}catch{}Tt(t,"unauthorized-domain")}function sS(t){const e=hl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tS.test(n))return!1;if(eS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new ir(3e4,6e4);function Wd(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rS(t){return new Promise((e,n)=>{var s,i,r;function o(){Wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wd(),n(Ot(t,"network-request-failed"))},timeout:iS.get()})}if(!((i=(s=Dt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Dt().gapi)===null||r===void 0)&&r.load)o();else{const a=F0("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},M0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xr=null,e})}let xr=null;function oS(t){return xr=xr||rS(t),xr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new ir(5e3,15e3),lS="__/auth/iframe",cS="emulator/auth/iframe",uS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fS(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bc(e,cS):`https://${t.config.authDomain}/${lS}`,s={apiKey:e.apiKey,appName:t.name,v:Zi},i=dS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ws(s).slice(1)}`}async function hS(t){const e=await oS(t),n=Dt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:fS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Dt().setTimeout(()=>{r(o)},aS.get());function l(){Dt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mS=500,gS=600,_S="_blank",vS="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yS(t,e,n,s=mS,i=gS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Qe().toLowerCase();n&&(a=wm(c)?_S:n),Cm(c)&&(e=e||vS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(qI(c)&&a!=="_self")return bS(e||"",a),new Hd(null);const d=window.open(e||"",a,u);X(d,t,"popup-blocked");try{d.focus()}catch{}return new Hd(d)}function bS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="__/auth/handler",wS="emulator/auth/handler";function jd(t,e,n,s,i,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zi,eventId:i};if(e instanceof xm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof lr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ES(t)}?${Ws(a).slice(1)}`}function ES({config:t}){return t.emulator?Bc(t,wS):`https://${t.authDomain}/${CS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class IS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mm,this._completeRedirectFn=Y0,this._overrideRedirectResult=q0}async _openPopup(e,n,s,i){var r;Kt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=jd(e,n,s,hl(),i);return yS(e,o,zc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),S0(jd(e,n,s,hl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Kt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hS(e),s=new X0(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ca];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rm()||Wc()||zo()}}const SS=IS;var zd="@firebase/auth",qd="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kS(t){Is(new Hn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{X(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:km(t)},u=new QI(a,l,c);return AI(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Is(new Hn("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(s=>new TS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(zd,qd,RS(t)),yn(zd,qd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=5*60,xS=Xh("authIdTokenMaxAge")||AS;let Kd=null;const PS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xS)return;const i=n==null?void 0:n.token;Kd!==i&&(Kd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NS(t=np()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kI(t,{popupRedirectResolver:SS,persistence:[D0,w0,Mm]}),s=Xh("authTokenSyncURL");if(s){const r=PS(s);g0(n,r,()=>r(n.currentUser)),m0(n,o=>r(o))}const i=Qh("auth");return i&&XI(n,`http://${i}`),n}kS("Browser");const OS={apiKey:"AIzaSyCIDQsbksT60mQxVsr2IDZwFsK54MyQwGA",authDomain:"legendary-randomizer-data.firebaseapp.com",databaseURL:"https://legendary-randomizer-data-default-rtdb.firebaseio.com",projectId:"legendary-randomizer-data",storageBucket:"legendary-randomizer-data.appspot.com",messagingSenderId:"330850882367",appId:"1:330850882367:web:8d2aae2fd681a3b2d0b98a"};tp(OS);const Ps={auth:NS(),signOut:v0,updateProfile:p0,onAuthStateChanged:_0,getDatabase:EI,ref:dI,onValue:mI,set:fI,update:hI,createUserWithEmailAndPassword:d0,signInWithEmailAndPassword:f0},DS=(t,e)=>{Ps.onAuthStateChanged(Ps.auth,n=>{t.userLoaded=!0,n&&(t.user=n,e.push("/dashboard"))})},LS=async(t,{email:e,password:n})=>{const s=await Ps.signInWithEmailAndPassword(Ps.auth,e,n).catch(()=>{t.snack={visible:!0,color:"error",text:"Invalid credentials"}});s&&(t.user=s.user)},MS=async t=>{await Ps.signOut(Ps.auth),t.user=null},oo=Ny("store",{state:()=>({user:null,userLoaded:!1,snack:{visible:!1,color:"",text:""},expansionList:[],handlers:[],henchmen:[],heroes:[],keywords:[],masterminds:[],schemes:[],villains:[],games:[],playedCounts:[]}),actions:{remembered(t){DS(this,t)},async logIn({email:t,password:e}){LS(this,{email:t,password:e})},logOut(){MS(this)}}}),ur=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Rt=typeof window<"u",Hm=Rt&&"IntersectionObserver"in window,FS=Rt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);Rt&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)");function jm(t){const e=me(),n=me();if(Rt){const s=new ResizeObserver(i=>{t==null||t(i,s),i.length&&(n.value=i[0].contentRect)});Xn(()=>{s.disconnect()}),De(e,(i,r)=>{r&&(s.unobserve(r),n.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:e,contentRect:yo(n)}}function $S(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let i=0;i<s;i++){if(t==null)return n;t=t[e[i]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function zm(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>zm(t[s],e[s]))}function Gd(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),$S(t,e.split("."),n))}function US(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function Ee(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function ml(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const Yd=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Kc(t,e){const n=Object.create(null),s=Object.create(null);for(const i in t)e.some(r=>r instanceof RegExp?r.test(i):r===i)?n[i]=t[i]:s[i]=t[i];return[n,s]}function BS(t){return Kc(t,["class","style","id",/^data-/])}function bi(t){return t==null?[]:Array.isArray(t)?t:[t]}function VS(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Gt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const i in t)s[i]=t[i];for(const i in e){const r=t[i],o=e[i];if(ml(r)&&ml(o)){s[i]=Gt(r,o,n);continue}if(Array.isArray(r)&&Array.isArray(o)&&n){s[i]=n(r,o);continue}s[i]=o}return s}function qm(t){return t.map(e=>e.type===ze?qm(e.children):e).flat()}function Go(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function Ci(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Ci(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Ci(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Ci(t,e.component.subTree).flat(1)}return[]}function Km(t){const e=Ge({}),n=R(t);return Yi(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),bo(e)}function gl(t,e){return t.includes(e)}const WS=/^on[^a-z]/,Gm=t=>WS.test(t),wi=[Function,Array];function Qd(t,e){return e="on"+Gi(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function HS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const i of t)i(...n);else typeof t=="function"&&t(...n)}const jS=["top","bottom"],zS=["start","end","left","right"];function qS(t,e){let[n,s]=t.split(" ");return s||(s=gl(jS,n)?"start":gl(zS,n)?"top":"center"),{side:Xd(n,e),align:Xd(s,e)}}function Xd(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class wa{constructor(e){let{x:n,y:s,width:i,height:r}=e;this.x=n,this.y=s,this.width=i,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function KS(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),s=n.transform;if(s){let i,r,o,a,l;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),r=+i[0],o=+i[5],a=+i[12],l=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),r=+i[0],o=+i[3],a=+i[4],l=+i[5];else return new wa(e);const c=n.transformOrigin,u=e.x-a-(1-r)*parseFloat(c),d=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),f=r?e.width/r:t.offsetWidth+1,h=o?e.height/o:t.offsetHeight+1;return new wa({x:u,y:d,width:f,height:h})}else return new wa(e)}function GS(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};const s=t.animate(e,n);return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}function Ym(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?XS(e):"")}function ys(t,e,n){const s=Ym(t,e,n);s!=null&&console.warn(s)}function Jd(t,e,n){const s=Ym(t,e,n);s!=null&&console.error(s)}const YS=/(?:^|[-_])(\w)/g,QS=t=>t.replace(YS,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ea(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const i=n.__file;if(!s&&i){const r=i.match(/([^/\\]+)\.vue$/);s=r==null?void 0:r[1]}return(s?`<${QS(s)}>`:"<Anonymous>")+(i&&e!==!1?` at ${i}`:"")}function XS(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,i)=>`${i===0?"---> ":" ".repeat(5+i*2)}${Array.isArray(s)?`${Ea(s[0])}... (${s[1]} recursive calls)`:Ea(s)}`).join(`
`)}else return`

(found in ${Ea(t)})`}const JS=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],ZS=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,eT=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],tT=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Qm(t){const e=Array(3),n=ZS,s=JS;for(let i=0;i<3;++i)e[i]=Math.round(VS(n(s[i][0]*t[0]+s[i][1]*t[1]+s[i][2]*t[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Gc(t){const e=[0,0,0],n=tT,s=eT,i=n((t>>16&255)/255),r=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=s[a][0]*i+s[a][1]*r+s[a][2]*o;return e}const ao=.20689655172413793,nT=t=>t>ao**3?Math.cbrt(t):t/(3*ao**2)+4/29,sT=t=>t>ao?t**3:3*ao**2*(t-4/29);function Xm(t){const e=nT,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Jm(t){const e=sT,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function Zd(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function lo(t){let e;if(typeof t=="number")e=t;else if(typeof t=="string"){let n=t.startsWith("#")?t.substring(1):t;n.length===3&&(n=n.split("").map(s=>s+s).join("")),n.length!==6&&n.length!==8&&ys(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`);return e<0?(ys(`Colors cannot be negative: '${t}'`),e=0):(e>4294967295||isNaN(e))&&(ys(`'${t}' is not a valid rgb color`),e=16777215),e}function iT(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function Zm(t){const e=lo(t);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function rT(t,e){const n=Xm(Gc(t));return n[0]=n[0]+e*10,Qm(Jm(n))}function oT(t,e){const n=Xm(Gc(t));return n[0]=n[0]-e*10,Qm(Jm(n))}function aT(t){const e=lo(t);return Gc(e)[1]}function Xt(t,e){const n=Qi();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function Jt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Xt(t).type;return Go((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let eg=0,Pr=new WeakMap;function Gs(){const t=Xt("getUid");if(Pr.has(t))return Pr.get(t);{const e=eg++;return Pr.set(t,e),e}}Gs.reset=()=>{eg=0,Pr=new WeakMap};function lT(t){const{provides:e}=Xt("injectSelf");if(e&&t in e)return e[t]}const ji=Symbol.for("vuetify:defaults");function cT(t){return me(t!=null?t:{})}function tg(){const t=Le(ji);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Yc(t,e){const n=tg(),s=me(t),i=R(()=>{const r=bt(e==null?void 0:e.scoped),o=bt(e==null?void 0:e.reset),a=bt(e==null?void 0:e.root);let l=Gt(s.value,{prev:n.value});if(r)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return Gt(l.prev,l)});return Vt(ji,i),i}function Te(t,e){return n=>Object.keys(t).reduce((s,i)=>{const o=typeof t[i]=="object"&&t[i]!=null&&!Array.isArray(t[i])?t[i]:{type:t[i]};return n&&i in n?s[i]={...o,default:n[i]}:s[i]=o,e&&!s[i].source&&(s[i].source=e),s},{})}function uT(t,e){var n,s;return((n=t.props)==null?void 0:n.hasOwnProperty(e))||((s=t.props)==null?void 0:s.hasOwnProperty(Go(e)))}const Me=function(e){var n,s;return e._setup=(n=e._setup)!=null?n:e.setup,e.name?(e._setup&&(e.props=(s=e.props)!=null?s:{},e.props=Te(e.props,Go(e.name))(),e.props._as=String,e.setup=function(r,o){const a=Qi(),l=tg(),c=Jf(),u=Gf({...de(r)});Yi(()=>{var _,y,b;const h=l.value.global,m=l.value[(_=r._as)!=null?_:e.name];if(m){const w=Object.entries(m).filter(E=>{let[M]=E;return M.startsWith(M[0].toUpperCase())});w.length&&(c.value=Object.fromEntries(w))}for(const w of Object.keys(r)){let E=r[w];uT(a.vnode,w)||(E=(b=(y=m==null?void 0:m[w])!=null?y:h==null?void 0:h[w])!=null?b:r[w]),u[w]!==E&&(u[w]=E)}});const d=e._setup(u,o);let f;return De(c,(h,m)=>{!h&&f?f.stop():h&&!m&&(f=_o(),f.run(()=>{var y;var _;Yc(Gt((y=(_=lT(ji))==null?void 0:_.value)!=null?y:{},h))}))},{immediate:!0}),d}),e):(ys("The component is missing an explicit name, unable to generate default prop value"),e)};function Yo(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?Me:Eo)(e)}const dT="cubic-bezier(0.4, 0, 0.2, 1)";function et(t){const e=Xt("useRender");e.render=t}const _l=Symbol.for("vuetify:layout"),fT=Symbol.for("vuetify:layout-item"),ef=1e3,hT=Te({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function pT(){const t=Le(_l);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}const mT=(t,e,n,s)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...i,[a.value]:parseInt(i[a.value],10)+(c.value?parseInt(l.value,10):0)};r.push({id:o,layer:u}),i=u}return r};function gT(t){const e=Le(_l,null),n=R(()=>e?e.rootZIndex.value-100:ef),s=me([]),i=Ge(new Map),r=Ge(new Map),o=Ge(new Map),a=Ge(new Map),l=Ge(new Map),{resizeRef:c,contentRect:u}=jm(),d=R(()=>{var T;const H=new Map,N=(T=t.overlaps)!=null?T:[];for(const W of N.filter(U=>U.includes(":"))){const[U,z]=W.split(":");if(!s.value.includes(U)||!s.value.includes(z))continue;const x=i.get(U),Y=i.get(z),se=r.get(U),ae=r.get(z);!x||!Y||!se||!ae||(H.set(z,{position:x.value,amount:parseInt(se.value,10)}),H.set(U,{position:Y.value,amount:-parseInt(ae.value,10)}))}return H}),f=R(()=>{const H=[...new Set([...o.values()].map(T=>T.value))].sort((T,W)=>T-W),N=[];for(const T of H){const W=s.value.filter(U=>{var z;return((z=o.get(U))==null?void 0:z.value)===T});N.push(...W)}return mT(N,i,r,a)}),h=R(()=>!Array.from(l.values()).some(H=>H.value)),m=R(()=>f.value[f.value.length-1].layer),_=R(()=>({"--v-layout-left":Ee(m.value.left),"--v-layout-right":Ee(m.value.right),"--v-layout-top":Ee(m.value.top),"--v-layout-bottom":Ee(m.value.bottom),...h.value?void 0:{transition:"none"}})),y=R(()=>f.value.slice(1).map((H,N)=>{let{id:T}=H;const{layer:W}=f.value[N],U=r.get(T),z=i.get(T);return{id:T,...W,size:Number(U.value),position:z.value}})),b=H=>y.value.find(N=>N.id===H),w=Xt("createLayout"),E=me(!1);Us(()=>{E.value=!0}),Vt(_l,{register:(H,N)=>{let{id:T,order:W,position:U,layoutSize:z,elementSize:x,active:Y,disableTransitions:se,absolute:ae}=N;o.set(T,W),i.set(T,U),r.set(T,z),a.set(T,Y),se&&l.set(T,se);const J=Ci(fT,w==null?void 0:w.vnode).indexOf(H);J>-1?s.value.splice(J,0,T):s.value.push(T);const ie=R(()=>y.value.findIndex(Re=>Re.id===T)),Ne=R(()=>n.value+f.value.length*2-ie.value*2),it=R(()=>{const Re=U.value==="left"||U.value==="right",kt=U.value==="right",dr=U.value==="bottom",I={[U.value]:0,zIndex:Ne.value,transform:`translate${Re?"X":"Y"}(${(Y.value?0:-110)*(kt||dr?-1:1)}%)`,position:ae.value||n.value!==ef?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!E.value)return I;const F=y.value[ie.value];if(!F)throw new Error(`[Vuetify] Could not find layout item "${T}"`);const B=d.value.get(T);return B&&(F[B.position]+=B.amount),{...I,height:Re?`calc(100% - ${F.top}px - ${F.bottom}px)`:x.value?`${x.value}px`:void 0,left:kt?void 0:`${F.left}px`,right:kt?`${F.right}px`:void 0,top:U.value!=="bottom"?`${F.top}px`:void 0,bottom:U.value!=="top"?`${F.bottom}px`:void 0,width:Re?x.value?`${x.value}px`:void 0:`calc(100% - ${F.left}px - ${F.right}px)`}}),Fe=R(()=>({zIndex:Ne.value-1}));return{layoutItemStyles:it,layoutItemScrimStyles:Fe,zIndex:Ne}},unregister:H=>{o.delete(H),i.delete(H),r.delete(H),a.delete(H),l.delete(H),s.value=s.value.filter(N=>N!==H)},mainRect:m,mainStyles:_,getLayoutItem:b,items:y,layoutRect:u,rootZIndex:n});const M=R(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),D=R(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:M,layoutStyles:D,getLayoutItem:b,items:y,layoutRect:u,layoutRef:c}}const rs=2.4,tf=.2126729,nf=.7151522,sf=.072175,_T=.55,vT=.58,yT=.57,bT=.62,Cr=.03,rf=1.45,CT=5e-4,wT=1.25,ET=1.25,of=.078,af=12.82051282051282,wr=.06,lf=.001;function cf(t,e){const n=((t>>16&255)/255)**rs,s=((t>>8&255)/255)**rs,i=((t>>0&255)/255)**rs,r=((e>>16&255)/255)**rs,o=((e>>8&255)/255)**rs,a=((e>>0&255)/255)**rs;let l=n*tf+s*nf+i*sf,c=r*tf+o*nf+a*sf;if(l<=Cr&&(l+=(Cr-l)**rf),c<=Cr&&(c+=(Cr-c)**rf),Math.abs(c-l)<CT)return 0;let u;if(c>l){const d=(c**_T-l**vT)*wT;u=d<lf?0:d<of?d-d*af*wr:d-wr}else{const d=(c**bT-l**yT)*ET;u=d>-lf?0:d>-of?d-d*af*wr:d+wr}return u*100}const co=Symbol.for("vuetify:theme"),Sn=Te({theme:String},"theme"),ri={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function IT(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ri;if(!t)return{...ri,isDisabled:!0};const e={};for(const[r,o]of Object.entries((i=t.themes)!=null?i:{})){var n,s;const a=o.dark||r==="dark"?(n=ri.themes)==null?void 0:n.dark:(s=ri.themes)==null?void 0:s.light;e[r]=Gt(a,o)}return Gt(ri,{...t,themes:e})}function ST(t){const e=Ge(IT(t)),n=me(e.defaultTheme),s=me(e.themes),i=R(()=>{const c={};for(const[u,d]of Object.entries(s.value)){const f=c[u]={...d,colors:{...d.colors}};if(e.variations)for(const h of e.variations.colors){const m=f.colors[h];if(!!m)for(const _ of["lighten","darken"]){const y=_==="lighten"?rT:oT;for(const b of US(e.variations[_],1))f.colors[`${h}-${_}-${b}`]=iT(y(lo(m),b))}}for(const h of Object.keys(f.colors)){if(/^on-[a-z]/.test(h)||f.colors[`on-${h}`])continue;const m=`on-${h}`,_=lo(f.colors[h]),y=Math.abs(cf(0,_)),b=Math.abs(cf(16777215,_));f.colors[m]=b>Math.min(y,50)?"#fff":"#000"}}return c}),r=R(()=>i.value[n.value]),o=R(()=>{const c=[];r.value.dark&&os(c,":root",["color-scheme: dark"]);for(const[h,m]of Object.entries(i.value)){const{variables:_,dark:y}=m;os(c,`.v-theme--${h}`,[`color-scheme: ${y?"dark":"normal"}`,...TT(m),...Object.keys(_).map(b=>{const w=_[b],E=typeof w=="string"&&w.startsWith("#")?Zm(w):void 0,M=E?`${E.r}, ${E.g}, ${E.b}`:void 0;return`--v-${b}: ${M!=null?M:w}`})])}const u=[],d=[],f=new Set(Object.values(i.value).flatMap(h=>Object.keys(h.colors)));for(const h of f)/^on-[a-z]/.test(h)?os(d,`.${h}`,[`color: rgb(var(--v-theme-${h})) !important`]):(os(u,`.bg-${h}`,[`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,`background: rgb(var(--v-theme-${h})) !important`,`color: rgb(var(--v-theme-on-${h})) !important`]),os(d,`.text-${h}`,[`color: rgb(var(--v-theme-${h})) !important`]),os(d,`.border-${h}`,[`--v-border-color: var(--v-theme-${h})`]));return c.push(...u,...d),c.map((h,m)=>m===0?h:`    ${h}`).join("")});function a(c){const u=c._context.provides.usehead;if(u)u.addHeadObjs(R(()=>{const f={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return e.cspNonce&&(f.nonce=e.cspNonce),{style:[f]}})),Rt&&Yi(()=>u.updateDOM());else{let h=function(){if(!e.isDisabled){if(typeof document<"u"&&!f){const m=document.createElement("style");m.type="text/css",m.id="vuetify-theme-stylesheet",e.cspNonce&&m.setAttribute("nonce",e.cspNonce),f=m,document.head.appendChild(f)}f&&(f.innerHTML=o.value)}};var d=h;let f=Rt?document.getElementById("vuetify-theme-stylesheet"):null;De(o,h,{immediate:!0})}}const l=R(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:e.isDisabled,name:n,themes:s,current:r,computedThemes:i,themeClasses:l,styles:o,global:{name:n,current:r}}}function ts(t){Xt("provideTheme");const e=Le(co,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=R(()=>{var r;return(r=t.theme)!=null?r:e==null?void 0:e.name.value}),s=R(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,themeClasses:s};return Vt(co,i),i}function os(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function TT(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[i,r]of Object.entries(t.colors)){const o=Zm(r);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${aT(r)>.18?e:n}`)}return s}function vl(t,e){let n;De(t,s=>{if(s&&!n)n=_o(),n.run(e);else{var i;(i=n)==null||i.stop(),n=void 0}},{immediate:!0})}function Ys(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const r=Xt("useProxiedModel"),o=me(t[e]!==void 0?t[e]:n),a=Go(e),c=R(a!==e?()=>{var d,f,h,m;return t[e],!!(((d=r.vnode.props)!=null&&d.hasOwnProperty(e)||(f=r.vnode.props)!=null&&f.hasOwnProperty(a))&&((h=r.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(m=r.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var d,f;return t[e],!!((d=r.vnode.props)!=null&&d.hasOwnProperty(e)&&(f=r.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`))});vl(()=>!c.value,()=>{De(()=>t[e],d=>{o.value=d})});const u=R({get(){return s(c.value?t[e]:o.value)},set(d){const f=i(d);(c.value?t[e]:o.value)===f||s(c.value?t[e]:o.value)===d||(o.value=f,r==null||r.emit(`update:${e}`,f))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const RT={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},uf="$vuetify.",df=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),ng=(t,e,n)=>function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];if(!s.startsWith(uf))return df(s,r);const a=s.replace(uf,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Gd(l,a,null);return u||(ys(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=Gd(c,a,null)),u||(Jd(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(Jd(`Translation key "${s}" has a non-string value`),u=s),df(u,r)};function sg(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function Ia(t,e,n){var i,r;const s=Ys(t,e,(i=t[e])!=null?i:n.value);return s.value=(r=t[e])!=null?r:n.value,De(n,o=>{t[e]==null&&(s.value=n.value)}),s}function ig(t){return e=>{const n=Ia(e,"locale",t.current),s=Ia(e,"fallback",t.fallback),i=Ia(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:i,t:ng(n,s,i),n:sg(n,s),provide:ig({current:n,fallback:s,messages:i})}}}function kT(t){var i,r;const e=me((i=t==null?void 0:t.locale)!=null?i:"en"),n=me((r=t==null?void 0:t.fallback)!=null?r:"en"),s=me({en:RT,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:ng(e,n,s),n:sg(e,n),provide:ig({current:e,fallback:n,messages:s})}}const AT={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},uo=Symbol.for("vuetify:locale");function xT(t){return t.name!=null}function PT(t){const e=t!=null&&t.adapter&&xT(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:kT(t),n=OT(e,t);return{...e,...n}}function NT(){const t=Le(uo);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function OT(t,e){var i;const n=me((i=e==null?void 0:e.rtl)!=null?i:AT),s=R(()=>{var r;return(r=n.value[t.current.value])!=null?r:!1});return{isRtl:s,rtl:n,rtlClasses:R(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Qc(){const t=Le(uo);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const DT=Me({name:"VApp",props:{...hT({fullHeight:!0}),...Sn()},setup(t,e){let{slots:n}=e;const s=ts(t),{layoutClasses:i,layoutStyles:r,getLayoutItem:o,items:a,layoutRef:l}=gT(t),{rtlClasses:c}=Qc();return et(()=>{var u;return S("div",{ref:l,class:["v-application",s.themeClasses.value,i.value,c.value],style:r.value},[S("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:s}}});const Qs=Te({tag:{type:String,default:"div"}},"tag");function LT(){const t=me(!1);return Us(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:R(()=>t.value?void 0:{transition:"none !important"}),isBooted:yo(t)}}const MT=Me({name:"VMain",props:{scrollable:Boolean,...Qs({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:s}=pT(),{ssrBootStyles:i}=LT();return et(()=>{var r,o;return S(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,i.value]},{default:()=>[t.scrollable?S("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]})}),{}}}),FT={computed:{...Oy(oo,["user","userLoaded"])},methods:{...Hh(oo,["remembered"])},mounted(){!this.user&&!this.userLoaded&&this.remembered(this.$router)}};function $T(t,e,n,s,i,r){const o=mv("router-view");return Wn(),Va(DT,null,{default:Mr(()=>[S(MT,null,{default:Mr(()=>[t.userLoaded?(Wn(),Va(o,{key:0})):Fv("",!0)]),_:1})]),_:1})}const UT=ur(FT,[["render",$T]]),BT="modulepreload",VT=function(t){return"/"+t},ff={},WT=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=VT(r),r in ff)return;ff[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":BT,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function HT(){(await WT(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const hf=Symbol.for("vuetify:display"),pf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},jT=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pf;return Gt(pf,t)};function mf(t){return Rt&&!t?window.innerWidth:0}function gf(t){return Rt&&!t?window.innerHeight:0}function zT(){const t=Rt?window.navigator.userAgent:"ssr";function e(m){return Boolean(t.match(m))}const n=e(/android/i),s=e(/iphone|ipad|ipod/i),i=e(/cordova/i),r=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),d=e(/mac/i),f=e(/linux/i),h=e(/ssr/i);return{android:n,ios:s,cordova:i,electron:r,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:d,linux:f,touch:FS,ssr:h}}function qT(t,e){const{thresholds:n,mobileBreakpoint:s}=jT(t),i=me(gf(e)),r=zT(),o=Ge({}),a=me(mf(e));function l(){i.value=gf(),a.value=mf()}return Yi(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,d=a.value<n.lg&&!(u||c),f=a.value<n.xl&&!(d||u||c),h=a.value<n.xxl&&!(f||d||u||c),m=a.value>=n.xxl,_=c?"xs":u?"sm":d?"md":f?"lg":h?"xl":"xxl",y=typeof s=="number"?s:n[s],b=r.ssr?r.android||r.ios||r.opera:a.value<y;o.xs=c,o.sm=u,o.md=d,o.lg=f,o.xl=h,o.xxl=m,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||d),o.xlAndUp=!(c||u||d||f),o.smAndDown=!(d||f||h||m),o.mdAndDown=!(f||h||m),o.lgAndDown=!(h||m),o.xlAndDown=!m,o.name=_,o.height=i.value,o.width=a.value,o.mobile=b,o.mobileBreakpoint=s,o.platform=r,o.thresholds=n}),Rt&&window.addEventListener("resize",l,{passive:!0}),{...bo(o),update:l}}const KT={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},GT={component:t=>Jn(rg,{...t,class:"mdi"})},Ht=[String,Function,Object],yl=Symbol.for("vuetify:icons"),Qo=Te({icon:{type:Ht,required:!0},tag:{type:String,required:!0}},"icon"),YT=Me({name:"VComponentIcon",props:Qo(),setup(t){return()=>S(t.tag,null,{default:()=>[S(t.icon,null,null)]})}}),QT=Me({name:"VSvgIcon",inheritAttrs:!1,props:Qo(),setup(t,e){let{attrs:n}=e;return()=>S(t.tag,$n(n,{style:null}),{default:()=>[S("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[S("path",{d:t.icon},null)])]})}});Me({name:"VLigatureIcon",props:Qo(),setup(t){return()=>S(t.tag,null,{default:()=>[t.icon]})}});const rg=Me({name:"VClassIcon",props:Qo(),setup(t){return()=>S(t.tag,{class:t.icon},null)}}),XT={svg:{component:QT},class:{component:rg}};function JT(t){return Gt({defaultSet:"mdi",sets:{...XT,mdi:GT},aliases:KT},t)}const ZT=t=>{const e=Le(yl);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:R(()=>{const s=be(t)?t.value:t.icon;if(!s)throw new Error("Icon value is undefined or null");let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$"))){var r;i=(r=e.aliases)==null?void 0:r[i.slice(1)]}if(!i)throw new Error(`Could not find aliased icon "${s}"`);if(typeof i!="string")return{component:YT,icon:i};const o=Object.keys(e.sets).find(c=>typeof i=="string"&&i.startsWith(`${c}:`)),a=o?i.slice(o.length+1):i;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}};function og(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=Gt(e,n),{aliases:i={},components:r={},directives:o={}}=s,a=cT(s.defaults),l=qT(s.display,s.ssr),c=ST(s.theme),u=JT(s.icons),d=PT(s.locale);return{install:h=>{for(const m in o)h.directive(m,o[m]);for(const m in r)h.component(m,r[m]);for(const m in i)h.component(m,Me({...i[m],name:m,aliasName:i[m].name}));if(c.install(h),h.provide(ji,a),h.provide(hf,l),h.provide(co,c),h.provide(yl,u),h.provide(uo,d),Rt&&s.ssr)if(h.$nuxt)h.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=h;h.mount=function(){const _=m(...arguments);return $s(()=>l.update()),h.mount=m,_}}Gs.reset(),h.mixin({computed:{$vuetify(){return Ge({defaults:oi.call(this,ji),display:oi.call(this,hf),theme:oi.call(this,co),icons:oi.call(this,yl),locale:oi.call(this,uo)})}}})},defaults:a,display:l,theme:c,icons:u,locale:d}}const eR="3.0.1";og.version=eR;function oi(t){var r;var e,n;const s=this.$,i=(r=(e=s.parent)==null?void 0:e.provides)!=null?r:(n=s.vnode.appContext)==null?void 0:n.provides;if(i&&t in i)return i[t]}const tR=og({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}});function nR(t){HT(),t.use(tR)}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ag=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Xs=t=>ag?Symbol(t):"_vr_"+t,sR=Xs("rvlm"),_f=Xs("rvd"),Xc=Xs("r"),lg=Xs("rl"),bl=Xs("rvl"),ls=typeof window<"u";function iR(t){return t.__esModule||ag&&t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Sa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const Ei=()=>{},rR=/\/$/,oR=t=>t.replace(rR,"");function Ta(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=uR(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function aR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ns(e.matched[s],n.matched[i])&&cg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cR(t[n],e[n]))return!1;return!0}function cR(t,e){return Array.isArray(t)?yf(t,e):Array.isArray(e)?yf(e,t):t===e}function yf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function uR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var zi;(function(t){t.pop="pop",t.push="push"})(zi||(zi={}));var Ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ii||(Ii={}));function dR(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),oR(t)}const fR=/^[^#]+#/;function hR(t,e){return t.replace(fR,"#")+e}function pR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Xo=()=>({left:window.pageXOffset,top:window.pageYOffset});function mR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=pR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bf(t,e){return(history.state?history.state.position-e:-1)+t}const Cl=new Map;function gR(t,e){Cl.set(t,e)}function _R(t){const e=Cl.get(t);return Cl.delete(t),e}let vR=()=>location.protocol+"//"+location.host;function ug(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),vf(l,"")}return vf(n,t)+s+i}function yR(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const h=ug(t,location),m=n.value,_=e.value;let y=0;if(f){if(n.value=h,e.value=f,o&&o===m){o=null;return}y=_?f.position-_.position:0}else s(h);i.forEach(b=>{b(n.value,m,{delta:y,type:zi.pop,direction:y?y>0?Ii.forward:Ii.back:Ii.unknown})})};function l(){o=n.value}function c(f){i.push(f);const h=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(h),h}function u(){const{history:f}=window;!f.state||f.replaceState(ve({},f.state,{scroll:Xo()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Cf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Xo():null}}function bR(t){const{history:e,location:n}=window,s={value:ug(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:vR()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=ve({},e.state,Cf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ve({},i.value,e.state,{forward:l,scroll:Xo()});r(u.current,u,!0);const d=ve({},Cf(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function CR(t){t=dR(t);const e=bR(t),n=yR(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ve({location:"",base:t,go:s,createHref:hR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function wR(t){return typeof t=="string"||t&&typeof t=="object"}function dg(t){return typeof t=="string"||typeof t=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fg=Xs("nf");var wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wf||(wf={}));function Os(t,e){return ve(new Error,{type:t,[fg]:!0},e)}function sn(t,e){return t instanceof Error&&fg in t&&(e==null||!!(t.type&e))}const Ef="[^/]+?",ER={sensitive:!1,strict:!1,start:!0,end:!0},IR=/[.+*?^${}()[\]/\\]/g;function SR(t,e){const n=ve({},ER,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(IR,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:y,regexp:b}=f;r.push({name:m,repeatable:_,optional:y});const w=b||Ef;if(w!==Ef){h+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+M.message)}}let E=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(E=y&&c.length<2?`(?:/${E})`:"/"+E),y&&(E+="?"),i+=E,h+=20,y&&(h+=-8),_&&(h+=-20),w===".*"&&(h+=-50)}u.push(h)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=r[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:y}=h,b=m in c?c[m]:"";if(Array.isArray(b)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(b)?b.join("/"):b;if(!w)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u}return{re:o,score:s,keys:r,parse:a,stringify:l}}function TR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=TR(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const kR={type:0,value:""},AR=/[a-zA-Z0-9_]/;function xR(t){if(!t)return[[]];if(t==="/")return[[kR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:AR.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function PR(t,e,n){const s=SR(xR(t.path),n),i=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function NR(t,e){const n=[],s=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,f){const h=!f,m=DR(u);m.aliasOf=f&&f.record;const _=Sf(e,u),y=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of E)y.push(ve({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m}))}let b,w;for(const E of y){const{path:M}=E;if(d&&M[0]!=="/"){const D=d.record.path,H=D[D.length-1]==="/"?"":"/";E.path=d.record.path+(M&&H+M)}if(b=PR(E,d,_),f?f.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),h&&u.name&&!If(b)&&o(u.name)),"children"in m){const D=m.children;for(let H=0;H<D.length;H++)r(D[H],b,f&&f.children[H])}f=f||b,l(b)}return w?()=>{o(w)}:Ei}function o(u){if(dg(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&RR(u,n[d])>=0&&(u.record.path!==n[d].record.path||!hg(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!If(u)&&s.set(u.record.name,u)}function c(u,d){let f,h={},m,_;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Os(1,{location:u});_=f.record.name,h=ve(OR(d.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),m=f.stringify(h)}else if("path"in u)m=u.path,f=n.find(w=>w.re.test(m)),f&&(h=f.parse(m),_=f.record.name);else{if(f=d.name?s.get(d.name):n.find(w=>w.re.test(d.path)),!f)throw Os(1,{location:u,currentLocation:d});_=f.record.name,h=ve({},d.params,u.params),m=f.stringify(h)}const y=[];let b=f;for(;b;)y.unshift(b.record),b=b.parent;return{name:_,path:m,params:h,matched:y,meta:MR(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function OR(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function DR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function LR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function If(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MR(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Sf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hg(t,e){return e.children.some(n=>n===t||hg(t,n))}const pg=/#/g,FR=/&/g,$R=/\//g,UR=/=/g,BR=/\?/g,mg=/\+/g,VR=/%5B/g,WR=/%5D/g,gg=/%5E/g,HR=/%60/g,_g=/%7B/g,jR=/%7C/g,vg=/%7D/g,zR=/%20/g;function Jc(t){return encodeURI(""+t).replace(jR,"|").replace(VR,"[").replace(WR,"]")}function qR(t){return Jc(t).replace(_g,"{").replace(vg,"}").replace(gg,"^")}function wl(t){return Jc(t).replace(mg,"%2B").replace(zR,"+").replace(pg,"%23").replace(FR,"%26").replace(HR,"`").replace(_g,"{").replace(vg,"}").replace(gg,"^")}function KR(t){return wl(t).replace(UR,"%3D")}function GR(t){return Jc(t).replace(pg,"%23").replace(BR,"%3F")}function YR(t){return t==null?"":GR(t).replace($R,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(mg," "),o=r.indexOf("="),a=fo(o<0?r:r.slice(0,o)),l=o<0?null:fo(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tf(t){let e="";for(let n in t){const s=t[n];if(n=KR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&wl(r)):[s&&wl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function XR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function ai(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Os(4,{from:n,to:e})):d instanceof Error?a(d):wR(d)?a(Os(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ra(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(JR(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ln(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=iR(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,s,r,o)()}))}}return i}function JR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rf(t){const e=Le(Xc),n=Le(lg),s=R(()=>e.resolve(bt(t.to))),i=R(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ns.bind(null,u));if(f>-1)return f;const h=kf(l[c-2]);return c>1&&kf(u)===h&&d[d.length-1].path!==h?d.findIndex(Ns.bind(null,l[c-2])):f}),r=R(()=>i.value>-1&&nk(n.params,s.value.params)),o=R(()=>i.value>-1&&i.value===n.matched.length-1&&cg(n.params,s.value.params));function a(l={}){return tk(l)?e[bt(t.replace)?"replace":"push"](bt(t.to)).catch(Ei):Promise.resolve()}return{route:s,href:R(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const ZR=Eo({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rf,setup(t,{slots:e}){const n=Ge(Rf(t)),{options:s}=Le(Xc),i=R(()=>({[Af(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Af(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Jn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ek=ZR;function tk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nk(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Af=(t,e,n)=>t!=null?t:e!=null?e:n,sk=Eo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Le(bl),i=R(()=>t.route||s.value),r=Le(_f,0),o=R(()=>i.value.matched[r]);Vt(_f,r+1),Vt(sR,o),Vt(bl,i);const a=me();return De(()=>[a.value,o.value,t.name],([l,c,u],[d,f,h])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Ns(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return xf(n.default,{Component:u,route:l});const f=c.props[t.name],h=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=Jn(u,ve({},h,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return xf(n.default,{Component:_,route:l})||_}}});function xf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ik=sk;function rk(t){const e=NR(t.routes,t),n=t.parseQuery||QR,s=t.stringifyQuery||Tf,i=t.history,r=ai(),o=ai(),a=ai(),l=Jf(nn);let c=nn;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Sa.bind(null,I=>""+I),d=Sa.bind(null,YR),f=Sa.bind(null,fo);function h(I,F){let B,q;return dg(I)?(B=e.getRecordMatcher(I),q=F):q=I,e.addRoute(q,B)}function m(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function b(I,F){if(F=ve({},F||l.value),typeof I=="string"){const p=Ta(n,I,F.path),g=e.resolve({path:p.path},F),v=i.createHref(p.fullPath);return ve(p,g,{params:f(g.params),hash:fo(p.hash),redirectedFrom:void 0,href:v})}let B;if("path"in I)B=ve({},I,{path:Ta(n,I.path,F.path).path});else{const p=ve({},I.params);for(const g in p)p[g]==null&&delete p[g];B=ve({},I,{params:d(I.params)}),F.params=d(F.params)}const q=e.resolve(B,F),he=I.hash||"";q.params=u(f(q.params));const ke=aR(s,ve({},I,{hash:qR(he),path:q.path})),le=i.createHref(ke);return ve({fullPath:ke,hash:he,query:s===Tf?XR(I.query):I.query||{}},q,{redirectedFrom:void 0,href:le})}function w(I){return typeof I=="string"?Ta(n,I,l.value.path):ve({},I)}function E(I,F){if(c!==I)return Os(8,{from:F,to:I})}function M(I){return N(I)}function D(I){return M(ve(w(I),{replace:!0}))}function H(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:B}=F;let q=typeof B=="function"?B(I):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=w(q):{path:q},q.params={}),ve({query:I.query,hash:I.hash,params:I.params},q)}}function N(I,F){const B=c=b(I),q=l.value,he=I.state,ke=I.force,le=I.replace===!0,p=H(B);if(p)return N(ve(w(p),{state:he,force:ke,replace:le}),F||B);const g=B;g.redirectedFrom=F;let v;return!ke&&lR(s,q,B)&&(v=Os(16,{to:g,from:q}),it(q,q,!0,!1)),(v?Promise.resolve(v):W(g,q)).catch(C=>sn(C)?sn(C,2)?C:Ne(C):J(C,g,q)).then(C=>{if(C){if(sn(C,2))return N(ve(w(C.to),{state:he,force:ke,replace:le}),F||g)}else C=z(g,q,!0,le,he);return U(g,q,C),C})}function T(I,F){const B=E(I,F);return B?Promise.reject(B):Promise.resolve()}function W(I,F){let B;const[q,he,ke]=ok(I,F);B=Ra(q.reverse(),"beforeRouteLeave",I,F);for(const p of q)p.leaveGuards.forEach(g=>{B.push(ln(g,I,F))});const le=T.bind(null,I,F);return B.push(le),as(B).then(()=>{B=[];for(const p of r.list())B.push(ln(p,I,F));return B.push(le),as(B)}).then(()=>{B=Ra(he,"beforeRouteUpdate",I,F);for(const p of he)p.updateGuards.forEach(g=>{B.push(ln(g,I,F))});return B.push(le),as(B)}).then(()=>{B=[];for(const p of I.matched)if(p.beforeEnter&&!F.matched.includes(p))if(Array.isArray(p.beforeEnter))for(const g of p.beforeEnter)B.push(ln(g,I,F));else B.push(ln(p.beforeEnter,I,F));return B.push(le),as(B)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),B=Ra(ke,"beforeRouteEnter",I,F),B.push(le),as(B))).then(()=>{B=[];for(const p of o.list())B.push(ln(p,I,F));return B.push(le),as(B)}).catch(p=>sn(p,8)?p:Promise.reject(p))}function U(I,F,B){for(const q of a.list())q(I,F,B)}function z(I,F,B,q,he){const ke=E(I,F);if(ke)return ke;const le=F===nn,p=ls?history.state:{};B&&(q||le?i.replace(I.fullPath,ve({scroll:le&&p&&p.scroll},he)):i.push(I.fullPath,he)),l.value=I,it(I,F,B,le),Ne()}let x;function Y(){x=i.listen((I,F,B)=>{const q=b(I),he=H(q);if(he){N(ve(he,{replace:!0}),q).catch(Ei);return}c=q;const ke=l.value;ls&&gR(bf(ke.fullPath,B.delta),Xo()),W(q,ke).catch(le=>sn(le,12)?le:sn(le,2)?(N(le.to,q).then(p=>{sn(p,20)&&!B.delta&&B.type===zi.pop&&i.go(-1,!1)}).catch(Ei),Promise.reject()):(B.delta&&i.go(-B.delta,!1),J(le,q,ke))).then(le=>{le=le||z(q,ke,!1),le&&(B.delta?i.go(-B.delta,!1):B.type===zi.pop&&sn(le,20)&&i.go(-1,!1)),U(q,ke,le)}).catch(Ei)})}let se=ai(),ae=ai(),te;function J(I,F,B){Ne(I);const q=ae.list();return q.length?q.forEach(he=>he(I,F,B)):console.error(I),Promise.reject(I)}function ie(){return te&&l.value!==nn?Promise.resolve():new Promise((I,F)=>{se.add([I,F])})}function Ne(I){return te||(te=!I,Y(),se.list().forEach(([F,B])=>I?B(I):F()),se.reset()),I}function it(I,F,B,q){const{scrollBehavior:he}=t;if(!ls||!he)return Promise.resolve();const ke=!B&&_R(bf(I.fullPath,0))||(q||!B)&&history.state&&history.state.scroll||null;return $s().then(()=>he(I,F,ke)).then(le=>le&&mR(le)).catch(le=>J(le,I,F))}const Fe=I=>i.go(I);let Re;const kt=new Set;return{currentRoute:l,addRoute:h,removeRoute:m,hasRoute:y,getRoutes:_,resolve:b,options:t,push:M,replace:D,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:ie,install(I){const F=this;I.component("RouterLink",ek),I.component("RouterView",ik),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>bt(l)}),ls&&!Re&&l.value===nn&&(Re=!0,M(i.location).catch(he=>{}));const B={};for(const he in nn)B[he]=R(()=>l.value[he]);I.provide(Xc,F),I.provide(lg,Ge(B)),I.provide(bl,l);const q=I.unmount;kt.add(I),I.unmount=function(){kt.delete(I),kt.size<1&&(c=nn,x&&x(),l.value=nn,Re=!1,te=!1),q()}}}}function as(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ok(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ns(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ns(c,l))||i.push(l))}return[n,s,i]}const yg=Te({border:[Boolean,Number,String]},"border");function bg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return{borderClasses:R(()=>{const s=be(t)?t.value:t.border,i=[];if(s===!0||s==="")i.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`border-${r}`);return i})}}const ak=[null,"default","comfortable","compact"],Zc=Te({density:{type:String,default:"default",validator:t=>ak.includes(t)}},"density");function eu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return{densityClasses:R(()=>`${e}--density-${t.density}`)}}const Cg=Te({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function wg(t){return{elevationClasses:R(()=>{const n=be(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const tu=Te({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function nu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return{roundedClasses:R(()=>{const s=be(t)?t.value:t.rounded,i=[];if(s===!0||s==="")i.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const r of String(s).split(" "))i.push(`rounded-${r}`);return i})}}function su(t){return Km(()=>{const e=[],n={};return t.value.background&&(Zd(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(Zd(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Ds(t,e){const n=R(()=>({text:be(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=su(n);return{textColorClasses:s,textColorStyles:i}}function El(t,e){const n=R(()=>({background:be(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:i}=su(n);return{backgroundColorClasses:s,backgroundColorStyles:i}}const lk=["elevated","flat","tonal","outlined","text","plain"];function ck(t,e){return S(ze,null,[t&&S("span",{key:"overlay",class:`${e}__overlay`},null),S("span",{key:"underlay",class:`${e}__underlay`},null)])}const Eg=Te({color:String,variant:{type:String,default:"elevated",validator:t=>lk.includes(t)}},"variant");function uk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();const n=R(()=>{const{variant:r}=bt(t);return`${e}--variant-${r}`}),{colorClasses:s,colorStyles:i}=su(R(()=>{const{variant:r,color:o}=bt(t);return{[["elevated","flat"].includes(r)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const dk=Me({name:"VBtnGroup",props:{divided:Boolean,...yg(),...Zc(),...Cg(),...tu(),...Qs(),...Sn(),...Eg()},setup(t,e){let{slots:n}=e;const{themeClasses:s}=ts(t),{densityClasses:i}=eu(t),{borderClasses:r}=bg(t),{elevationClasses:o}=wg(t),{roundedClasses:a}=nu(t);Yc({VBtn:{height:"auto",color:Ct(t,"color"),density:Ct(t,"density"),flat:!0,variant:Ct(t,"variant")}}),et(()=>S(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,r.value,i.value,o.value,a.value]},n))}}),fk=Te({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),hk=Te({value:null,disabled:Boolean,selectedClass:String},"group-item");function pk(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Xt("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Gs();Vt(Symbol.for(`${e.description}:id`),i);const r=Le(e,null);if(!r){if(!n)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=Ct(t,"value"),a=R(()=>r.disabled.value||t.disabled);r.register({id:i,value:o,disabled:a},s),Xn(()=>{r.unregister(i)});const l=R(()=>r.isSelected(i)),c=R(()=>l.value&&[r.selectedClass.value,t.selectedClass]);return De(l,u=>{s.emit("group:selected",{value:u})}),{id:i,isSelected:l,toggle:()=>r.select(i,!l.value),select:u=>r.select(i,u),selectedClass:c,value:o,disabled:a,group:r}}function mk(t,e){let n=!1;const s=Ge([]),i=Ys(t,"modelValue",[],f=>f==null?[]:Ig(s,bi(f)),f=>{const h=_k(s,f);return t.multiple?h:h[0]}),r=Xt("useGroup");function o(f,h){const m=f,_=Symbol.for(`${e.description}:id`),b=Ci(_,r==null?void 0:r.vnode).indexOf(h);b>-1?s.splice(b,0,m):s.push(m)}function a(f){if(n)return;l();const h=s.findIndex(m=>m.id===f);s.splice(h,1)}function l(){const f=s.find(h=>!h.disabled);f&&t.mandatory==="force"&&!i.value.length&&(i.value=[f.id])}Us(()=>{l()}),Xn(()=>{n=!0});function c(f,h){const m=s.find(_=>_.id===f);if(!(h&&m!=null&&m.disabled))if(t.multiple){const _=i.value.slice(),y=_.findIndex(w=>w===f),b=~y;if(h=h!=null?h:!b,b&&t.mandatory&&_.length<=1||!b&&t.max!=null&&_.length+1>t.max)return;y<0&&h?_.push(f):y>=0&&!h&&_.splice(y,1),i.value=_}else{const _=i.value.includes(f);if(t.mandatory&&_)return;i.value=(h!=null?h:!_)?[f]:[]}}function u(f){if(t.multiple&&ys('This method is not supported when using "multiple" prop'),i.value.length){const h=i.value[0],m=s.findIndex(b=>b.id===h);let _=(m+f)%s.length,y=s[_];for(;y.disabled&&_!==m;)_=(_+f)%s.length,y=s[_];if(y.disabled)return;i.value=[s[_].id]}else{const h=s.find(m=>!m.disabled);h&&(i.value=[h.id])}}const d={register:o,unregister:a,selected:i,select:c,disabled:Ct(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:f=>i.value.includes(f),selectedClass:R(()=>t.selectedClass),items:R(()=>s),getItemIndex:f=>gk(s,f)};return Vt(e,d),d}function gk(t,e){const n=Ig(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function Ig(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];i.value!=null?e.find(r=>zm(r,i.value))!=null&&n.push(i.id):e.includes(s)&&n.push(i.id)}return n}function _k(t,e){const n=[];for(let s=0;s<t.length;s++){const i=t[s];e.includes(i.id)&&n.push(i.value!=null?i.value:s)}return n}const Sg=Symbol.for("vuetify:v-btn-toggle");Yo()({name:"VBtnToggle",props:fk(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:i,prev:r,select:o,selected:a}=mk(t,Sg);return et(()=>{var l;return S(dk,{class:"v-btn-toggle"},{default:()=>[(l=n.default)==null?void 0:l.call(n,{isSelected:s,next:i,prev:r,select:o,selected:a})]})}),{next:i,prev:r,select:o}}});const ka=Eo({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,reset:i,root:r,scoped:o}=bo(t);return Yc(s,{reset:i,root:r,scoped:o}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});const vk=["x-small","small","default","large","x-large"],iu=Te({size:{type:[String,Number],default:"default"}},"size");function ru(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return Km(()=>{let n,s;return gl(vk,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:Ee(t.size),height:Ee(t.size)}),{sizeClasses:n,sizeStyles:s}})}const yk=Te({color:String,start:Boolean,end:Boolean,icon:Ht,...iu(),...Qs({tag:"i"}),...Sn()},"v-icon"),Nr=Me({name:"VIcon",props:yk(),setup(t,e){let{attrs:n,slots:s}=e,i;s.default&&(i=R(()=>{var u,d;const f=(u=s.default)==null?void 0:u.call(s);if(!!f)return(d=qm(f).filter(h=>h.children&&typeof h.children=="string")[0])==null?void 0:d.children}));const{themeClasses:r}=ts(t),{iconData:o}=ZT(i||t),{sizeClasses:a}=ru(t),{textColorClasses:l,textColorStyles:c}=Ds(Ct(t,"color"));return et(()=>S(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",r.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:Ee(t.size),height:Ee(t.size),width:Ee(t.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},null)),{}}});function Tg(t){const e=me(),n=me(!1);if(Hm){const s=new IntersectionObserver(i=>{t==null||t(i,s),n.value=!!i.find(r=>r.isIntersecting)});Xn(()=>{s.disconnect()}),De(e,(i,r)=>{r&&(s.unobserve(r),n.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}const bk=Me({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...iu(),...Qs({tag:"div"}),...Sn()},setup(t,e){let{slots:n}=e;const s=20,i=2*Math.PI*s,r=me(),{themeClasses:o}=ts(t),{sizeClasses:a,sizeStyles:l}=ru(t),{textColorClasses:c,textColorStyles:u}=Ds(Ct(t,"color")),{textColorClasses:d,textColorStyles:f}=Ds(Ct(t,"bgColor")),{intersectionRef:h,isIntersecting:m}=Tg(),{resizeRef:_,contentRect:y}=jm(),b=R(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),w=R(()=>Number(t.width)),E=R(()=>l.value?Number(t.size):y.value?y.value.width:Math.max(w.value,32)),M=R(()=>s/(1-w.value/E.value)*2),D=R(()=>w.value/E.value*M.value),H=R(()=>Ee((100-b.value)/100*i));return Yi(()=>{h.value=r.value,_.value=r.value}),et(()=>S(t.tag,{ref:r,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:b.value},{default:()=>[S("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${M.value} ${M.value}`},[S("circle",{class:["v-progress-circular__underlay",d.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":D.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),S("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":D.value,"stroke-dasharray":i,"stroke-dashoffset":H.value},null)]),n.default&&S("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}});const Il=Symbol("rippleStop"),Ck=80;function Pf(t,e){t.style.transform=e,t.style.webkitTransform=e}function Aa(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function Sl(t){return t.constructor.name==="TouchEvent"}function Rg(t){return t.constructor.name==="KeyboardEvent"}const wk=function(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,r=0;if(!Rg(t)){const f=e.getBoundingClientRect(),h=Sl(t)?t.touches[t.touches.length-1]:t;i=h.clientX-f.left,r=h.clientY-f.top}let o=0,a=.3;(n=e._ripple)!=null&&n.circle?(a=.15,o=e.clientWidth/2,o=s.center?o:o+Math.sqrt((i-o)**2+(r-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=s.center?l:`${i-o}px`,d=s.center?c:`${r-o}px`;return{radius:o,scale:a,x:u,y:d,centerX:l,centerY:c}},ho={show(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",s.class&&(i.className+=` ${s.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:d}=wk(t,e,s),f=`${o*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const h=window.getComputedStyle(e);h&&h.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),Pf(r,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),Aa(r,0),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),Pf(r,`translate(${u}, ${d}) scale3d(1,1,1)`),Aa(r,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const i=performance.now()-Number(s.dataset.activated),r=Math.max(250-i,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),Aa(s,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),s.parentNode&&t.removeChild(s.parentNode)},300)},r)}};function kg(t){return typeof t>"u"||!!t}function qi(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[Il])){if(t[Il]=!0,Sl(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||Rg(t),n._ripple.class&&(e.class=n._ripple.class),Sl(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{ho.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;n!=null&&(s=n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Ck)}else ho.show(t,n,e)}}function Nf(t){t[Il]=!0}function at(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{at(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),ho.hide(e)}}function Ag(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let Ki=!1;function xg(t){!Ki&&(t.keyCode===Yd.enter||t.keyCode===Yd.space)&&(Ki=!0,qi(t))}function Pg(t){Ki=!1,at(t)}function Ng(t){Ki&&(Ki=!1,at(t))}function Og(t,e,n){var o;const{value:s,modifiers:i}=e,r=kg(s);if(r||ho.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=r,t._ripple.centered=i.center,t._ripple.circle=i.circle,ml(s)&&s.class&&(t._ripple.class=s.class),r&&!n){if(i.stop){t.addEventListener("touchstart",Nf,{passive:!0}),t.addEventListener("mousedown",Nf);return}t.addEventListener("touchstart",qi,{passive:!0}),t.addEventListener("touchend",at,{passive:!0}),t.addEventListener("touchmove",Ag,{passive:!0}),t.addEventListener("touchcancel",at),t.addEventListener("mousedown",qi),t.addEventListener("mouseup",at),t.addEventListener("mouseleave",at),t.addEventListener("keydown",xg),t.addEventListener("keyup",Pg),t.addEventListener("blur",Ng),t.addEventListener("dragstart",at,{passive:!0})}else!r&&n&&Dg(t)}function Dg(t){t.removeEventListener("mousedown",qi),t.removeEventListener("touchstart",qi),t.removeEventListener("touchend",at),t.removeEventListener("touchmove",Ag),t.removeEventListener("touchcancel",at),t.removeEventListener("mouseup",at),t.removeEventListener("mouseleave",at),t.removeEventListener("keydown",xg),t.removeEventListener("keyup",Pg),t.removeEventListener("dragstart",at),t.removeEventListener("blur",Ng)}function Ek(t,e){Og(t,e,!1)}function Ik(t){delete t._ripple,Dg(t)}function Sk(t,e){if(e.value===e.oldValue)return;const n=kg(e.oldValue);Og(t,e,n)}const Tk={mounted:Ek,unmounted:Ik,updated:Sk},Rk=Te({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function kk(t){return{dimensionStyles:R(()=>({height:Ee(t.height),maxHeight:Ee(t.maxHeight),maxWidth:Ee(t.maxWidth),minHeight:Ee(t.minHeight),minWidth:Ee(t.minWidth),width:Ee(t.width)}))}}const Ak=Me({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...tu(),...Qs(),...Sn()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Ys(t,"modelValue"),{isRtl:i}=Qc(),{themeClasses:r}=ts(t),{textColorClasses:o,textColorStyles:a}=Ds(t,"color"),{backgroundColorClasses:l,backgroundColorStyles:c}=El(R(()=>t.bgColor||t.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=El(t,"color"),{roundedClasses:f}=nu(t),{intersectionRef:h,isIntersecting:m}=Tg(),_=R(()=>parseInt(t.max,10)),y=R(()=>parseInt(t.height,10)),b=R(()=>parseFloat(t.bufferValue)/_.value*100),w=R(()=>parseFloat(s.value)/_.value*100),E=R(()=>i.value!==t.reverse),M=R(()=>t.indeterminate?"fade-transition":"slide-x-transition"),D=R(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function H(N){if(!h.value)return;const{left:T,right:W,width:U}=h.value.getBoundingClientRect(),z=E.value?U-N.clientX+(W-U):N.clientX-T;s.value=Math.round(z/U*_.value)}return et(()=>S(t.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--active":t.active&&m.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},f.value,r.value],style:{height:t.active?Ee(y.value):0,"--v-progress-linear-height":Ee(y.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:w.value,onClick:t.clickable&&H},{default:()=>[t.stream&&S("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...a.value,[E.value?"left":"right"]:Ee(-y.value),borderTop:`${Ee(y.value/2)} dotted`,opacity:D.value,top:`calc(50% - ${Ee(y.value/4)})`,width:Ee(100-b.value,"%"),"--v-progress-linear-stream-to":Ee(y.value*(E.value?1:-1))}},null),S("div",{class:["v-progress-linear__background",l.value],style:[c.value,{opacity:D.value,width:Ee(t.stream?b.value:100,"%")}]},null),S(Bs,{name:M.value},{default:()=>[t.indeterminate?S("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(N=>S("div",{key:N,class:["v-progress-linear__indeterminate",N,u.value],style:d.value},null))]):S("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:Ee(w.value,"%")}]},null)]}),n.default&&S("div",{class:"v-progress-linear__content"},[n.default({value:w.value,buffer:b.value})])]})),{}}}),Lg=Te({loading:Boolean},"loader");function Mg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return{loaderClasses:R(()=>({[`${e}--loading`]:t.loading}))}}function xk(t,e){var n;let{slots:s}=e;return S("div",{class:`${t.name}__loader`},[((n=s.default)==null?void 0:n.call(s,{color:t.color,isActive:t.active}))||S(Ak,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const Of={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Pk=Te({location:String},"location");function Nk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Qc();return{locationStyles:R(()=>{if(!t.location)return{};const{side:r,align:o}=qS(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return r!=="center"&&(e?l[Of[r]]=`calc(100% - ${a(r)}px)`:l[r]=0),o!=="center"?e?l[Of[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(r==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l})}}const Ok=["static","relative","fixed","absolute","sticky"],Dk=Te({position:{type:String,validator:t=>Ok.includes(t)}},"position");function Lk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();return{positionClasses:R(()=>t.position?`${e}--${t.position}`:void 0)}}function Mk(t,e){const n=gv("RouterLink"),s=R(()=>!!(t.href||t.to)),i=R(()=>(s==null?void 0:s.value)||Qd(e,"click")||Qd(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:i,href:Ct(t,"href")};const r=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:i,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&R(()=>{var o,a;return t.exact?(o=r.isExactActive)==null?void 0:o.value:(a=r.isActive)==null?void 0:a.value}),href:R(()=>t.to?r==null?void 0:r.route.value.href:t.href)}}const Fk=Te({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function $k(t,e){De(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&$s(()=>{e(!0)})},{immediate:!0})}const Uk=Me({name:"VBtn",directives:{Ripple:Tk},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Sg},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ht,appendIcon:Ht,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...yg(),...tu(),...Zc(),...Rk(),...Cg(),...hk(),...Lg(),...Pk(),...Dk(),...Fk(),...iu(),...Qs({tag:"button"}),...Sn(),...Eg({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:i}=ts(t),{borderClasses:r}=bg(t),{colorClasses:o,colorStyles:a,variantClasses:l}=uk(t),{densityClasses:c}=eu(t),{dimensionStyles:u}=kk(t),{elevationClasses:d}=wg(t),{loaderClasses:f}=Mg(t),{locationStyles:h}=Nk(t),{positionClasses:m}=Lk(t),{roundedClasses:_}=nu(t),{sizeClasses:y,sizeStyles:b}=ru(t),w=pk(t,t.symbol,!1),E=Mk(t,n),M=R(()=>{var N;return t.active!==!1&&(t.active||((N=E.isActive)==null?void 0:N.value)||(w==null?void 0:w.isSelected.value))}),D=R(()=>(w==null?void 0:w.disabled.value)||t.disabled),H=R(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return $k(E,w==null?void 0:w.select),et(()=>{var N,T,W,U;const z=E.isLink.value?"a":t.tag,x=!w||w.isSelected.value,Y=!!(t.prependIcon||s.prepend),se=!!(t.appendIcon||s.append),ae=!!(t.icon&&t.icon!==!0);return To(S(z,{type:z==="a"?void 0:"button",class:["v-btn",w==null?void 0:w.selectedClass.value,{"v-btn--active":M.value,"v-btn--block":t.block,"v-btn--disabled":D.value,"v-btn--elevated":H.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},i.value,r.value,x?o.value:void 0,c.value,d.value,f.value,m.value,_.value,y.value,l.value],style:[x?a.value:void 0,u.value,h.value,b.value],disabled:D.value||void 0,href:E.href.value,onClick:te=>{var J;D.value||((J=E.navigate)==null||J.call(E,te),w==null||w.toggle())}},{default:()=>{var te;return[ck(!0,"v-btn"),!t.icon&&Y&&S(ka,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>{var J;return[S("span",{class:"v-btn__prepend"},[(J=(N=s.prepend)==null?void 0:N.call(s))!=null?J:S(Nr,null,null)])]}}),S("span",{class:"v-btn__content","data-no-activator":""},[S(ka,{key:"content",defaults:{VIcon:{icon:ae?t.icon:void 0}}},{default:()=>{var J;return[(J=(T=s.default)==null?void 0:T.call(s))!=null?J:ae&&S(Nr,{key:"icon"},null)]}})]),!t.icon&&se&&S(ka,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>{var J;return[S("span",{class:"v-btn__append"},[(J=(W=s.append)==null?void 0:W.call(s))!=null?J:S(Nr,null,null)])]}}),!!t.loading&&S("span",{key:"loader",class:"v-btn__loader"},[(te=(U=s.loader)==null?void 0:U.call(s))!=null?te:S(bk,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[_h("ripple"),!D.value&&t.ripple,null]])}),{}}});function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return Me({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(s,i){let{slots:r}=i;return()=>{const o=s.group?_y:Bs;return Jn(o,{name:t,mode:s.mode,onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:d}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${d}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:d,height:f}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=d||"",a.style.height=f||""}}},r.default)}}})}function Fg(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return Me({name:t,props:{mode:{type:String,default:n}},setup(s,i){let{slots:r}=i;return()=>Jn(Bs,{name:t,...e},r.default)}})}function $g(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=It(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:r,onEnterCancelled:r,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){t&&o._parent&&o._parent.classList.remove(t),r(o)}function r(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}ut("fab-transition","center center","out-in");ut("dialog-bottom-transition");ut("dialog-top-transition");ut("fade-transition");ut("scale-transition");ut("scroll-x-transition");ut("scroll-x-reverse-transition");ut("scroll-y-transition");ut("scroll-y-reverse-transition");ut("slide-x-transition");ut("slide-x-reverse-transition");const Ug=ut("slide-y-transition");ut("slide-y-reverse-transition");Fg("expand-transition",$g());const Bk=Fg("expand-x-transition",$g("",!0));function Bg(t){const{t:e}=NT();function n(s){var l;let{name:i}=s;const r={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=t[`onClick:${i}`],a=o&&r?e(`$vuetify.input.${r}`,(l=t.label)!=null?l:""):void 0;return S(Nr,{icon:t[`${i}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const Vk=Me({name:"VLabel",props:{text:String,clickable:Boolean,...Sn()},setup(t,e){let{slots:n}=e;return et(()=>{var s;return S("label",{class:["v-label",{"v-label--clickable":t.clickable}]},[t.text,(s=n.default)==null?void 0:s.call(n)])}),{}}}),Er=Me({name:"VFieldLabel",props:{floating:Boolean},setup(t,e){let{slots:n}=e;return et(()=>S(Vk,{class:["v-field-label",{"v-field-label--floating":t.floating}],"aria-hidden":t.floating||void 0},n)),{}}}),Vg=Te({focused:Boolean},"focus");function Wg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt();const n=Ys(t,"focused"),s=R(()=>({[`${e}--focused`]:n.value}));function i(){n.value=!0}function r(){n.value=!1}return{focusClasses:s,isFocused:n,focus:i,blur:r}}const Wk=["underlined","outlined","filled","solo","plain"],Hg=Te({appendInnerIcon:Ht,bgColor:String,clearable:Boolean,clearIcon:{type:Ht,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ht,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>Wk.includes(t)},"onClick:clear":wi,"onClick:appendInner":wi,"onClick:prependInner":wi,...Sn(),...Lg()},"v-field"),jg=Yo()({name:"VField",inheritAttrs:!1,props:{id:String,...Vg(),...Hg()},emits:{"click:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const{themeClasses:r}=ts(t),{loaderClasses:o}=Mg(t),{focusClasses:a,isFocused:l,focus:c,blur:u}=Wg(t),{InputIcon:d}=Bg(t),f=R(()=>t.dirty||t.active),h=R(()=>!t.singleLine&&!!(t.label||i.label)),m=Gs(),_=R(()=>t.id||`input-${m}`),y=me(),b=me(),w=me(),{backgroundColorClasses:E,backgroundColorStyles:M}=El(Ct(t,"bgColor")),{textColorClasses:D,textColorStyles:H}=Ds(R(()=>f.value&&l.value&&!t.error&&!t.disabled?t.color:void 0));De(f,W=>{if(h.value){const U=y.value.$el,z=b.value.$el,x=KS(U),Y=z.getBoundingClientRect(),se=Y.x-x.x,ae=Y.y-x.y-(x.height/2-Y.height/2),te=Y.width/.75,J=Math.abs(te-x.width)>1?{maxWidth:Ee(te)}:void 0,ie=getComputedStyle(U),Ne=getComputedStyle(z),it=parseFloat(ie.transitionDuration)*1e3||150,Fe=parseFloat(Ne.getPropertyValue("--v-field-label-scale")),Re=Ne.getPropertyValue("color");U.style.visibility="visible",z.style.visibility="hidden",GS(U,{transform:`translate(${se}px, ${ae}px) scale(${Fe})`,color:Re,...J},{duration:it,easing:dT,direction:W?"normal":"reverse"}).finished.then(()=>{U.style.removeProperty("visibility"),z.style.removeProperty("visibility")})}},{flush:"post"});const N=R(()=>({isActive:f,isFocused:l,controlRef:w,blur:u,focus:c}));function T(W){W.target!==document.activeElement&&W.preventDefault(),s("click:control",W)}return et(()=>{var W,U,z;const x=t.variant==="outlined",Y=i["prepend-inner"]||t.prependInnerIcon,se=!!(t.clearable||i.clear),ae=!!(i["append-inner"]||t.appendInnerIcon||se),te=i.label?i.label({label:t.label,props:{for:_.value}}):t.label;return S("div",$n({class:["v-field",{"v-field--active":f.value,"v-field--appended":ae,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":Y,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!te,[`v-field--variant-${t.variant}`]:!0},r.value,E.value,a.value,o.value],style:[M.value,H.value],onClick:T},n),[S("div",{class:"v-field__overlay"},null),S(xk,{name:"v-field",active:t.loading,color:t.error?"error":t.color},{default:i.loader}),Y&&S("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&S(d,{key:"prepend-icon",name:"prependInner"},null),(W=i["prepend-inner"])==null?void 0:W.call(i,N.value)]),S("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(t.variant)&&h.value&&S(Er,{key:"floating-label",ref:b,class:[D.value],floating:!0,for:_.value},{default:()=>[te]}),S(Er,{ref:y,for:_.value},{default:()=>[te]}),(U=i.default)==null?void 0:U.call(i,{...N.value,props:{id:_.value,class:"v-field__input"},focus:c,blur:u})]),se&&S(Bk,{key:"clear"},{default:()=>[To(S("div",{class:"v-field__clearable"},[i.clear?i.clear():S(d,{name:"clear"},null)]),[[$h,t.dirty]])]}),ae&&S("div",{key:"append",class:"v-field__append-inner"},[(z=i["append-inner"])==null?void 0:z.call(i,N.value),t.appendInnerIcon&&S(d,{key:"append-icon",name:"appendInner"},null)]),S("div",{class:["v-field__outline",D.value]},[x&&S(ze,null,[S("div",{class:"v-field__outline__start"},null),h.value&&S("div",{class:"v-field__outline__notch"},[S(Er,{ref:b,floating:!0,for:_.value},{default:()=>[te]})]),S("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(t.variant)&&h.value&&S(Er,{ref:b,floating:!0,for:_.value},{default:()=>[te]})])])}),{controlRef:w}}});function Hk(t){const e=Object.keys(jg.props).filter(n=>!Gm(n));return Kc(t,e)}const zg=Te({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),qg=(t,e)=>{let{slots:n}=e;const{transition:s,...i}=t,{component:r=Bs,...o}=typeof s=="object"?s:{};return Jn(r,$n(typeof s=="string"?{name:s}:o,i),n)},jk=Me({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...zg({transition:{component:Ug,leaveAbsolute:!0,group:!0}})},setup(t,e){let{slots:n}=e;const s=R(()=>bi(t.messages)),{textColorClasses:i,textColorStyles:r}=Ds(R(()=>t.color));return et(()=>S(qg,{transition:t.transition,tag:"div",class:["v-messages",i.value],style:r.value},{default:()=>[t.active&&s.value.map((o,a)=>S("div",{class:"v-messages__message",key:`${a}-${s.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),zk=Symbol.for("vuetify:form");function qk(){return Le(zk,null)}const Kk=Te({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Vg()},"validation");function Gk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jt(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gs();const s=Ys(t,"modelValue"),i=R(()=>t.validationValue===void 0?s.value:t.validationValue),r=qk(),o=me([]),a=me(!0),l=R(()=>!!(bi(s.value===""?null:s.value).length||bi(i.value===""?null:i.value).length)),c=R(()=>!!(t.disabled||r!=null&&r.isDisabled.value)),u=R(()=>!!(t.readonly||r!=null&&r.isReadonly.value)),d=R(()=>t.errorMessages.length?bi(t.errorMessages):o.value),f=R(()=>t.error||d.value.length?!1:t.rules.length&&a.value?null:!0),h=me(!1),m=R(()=>({[`${e}--error`]:f.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:u.value})),_=R(()=>{var M;return(M=t.name)!=null?M:bt(n)});hh(()=>{r==null||r.register({id:_.value,validate:E,reset:b,resetValidation:w})}),Xn(()=>{r==null||r.unregister(_.value)});const y=R(()=>t.validateOn||(r==null?void 0:r.validateOn.value)||"input");Us(()=>r==null?void 0:r.update(_.value,f.value,d.value)),vl(()=>y.value==="input",()=>{De(i,()=>{if(i.value!=null)E();else if(t.focused){const M=De(()=>t.focused,D=>{D||E(),M()})}})}),vl(()=>y.value==="blur",()=>{De(()=>t.focused,M=>{M||E()})}),De(f,()=>{r==null||r.update(_.value,f.value,d.value)});function b(){w(),s.value=null}function w(){a.value=!0,o.value=[]}async function E(){const M=[];h.value=!0;for(const D of t.rules){if(M.length>=(t.maxErrors||1))break;const N=await(typeof D=="function"?D:()=>D)(i.value);if(N!==!0){if(typeof N!="string"){console.warn(`${N} is not a valid value. Rule functions must return boolean true or a string.`);continue}M.push(N)}}return o.value=M,h.value=!1,a.value=!1,o.value}return{errorMessages:d,isDirty:l,isDisabled:c,isReadonly:u,isPristine:a,isValid:f,isValidating:h,reset:b,resetValidation:w,validate:E,validationClasses:m}}const Kg=Te({id:String,appendIcon:Ht,prependIcon:Ht,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":wi,"onClick:append":wi,...Zc(),...Kk()},"v-input"),Gg=Yo()({name:"VInput",props:{...Kg()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s,emit:i}=e;const{densityClasses:r}=eu(t),{InputIcon:o}=Bg(t),a=Gs(),l=R(()=>t.id||`input-${a}`),{errorMessages:c,isDirty:u,isDisabled:d,isReadonly:f,isPristine:h,isValid:m,isValidating:_,reset:y,resetValidation:b,validate:w,validationClasses:E}=Gk(t,"v-input",l),M=R(()=>({id:l,isDirty:u,isDisabled:d,isReadonly:f,isPristine:h,isValid:m,isValidating:_,reset:y,resetValidation:b,validate:w}));return et(()=>{var D,H,N,T,W;const U=!!(s.prepend||t.prependIcon),z=!!(s.append||t.appendIcon),x=!!((D=t.messages)!=null&&D.length||c.value.length),Y=!t.hideDetails||t.hideDetails==="auto"&&(x||!!s.details);return S("div",{class:["v-input",`v-input--${t.direction}`,r.value,E.value]},[U&&S("div",{key:"prepend",class:"v-input__prepend"},[(H=s.prepend)==null?void 0:H.call(s,M.value),t.prependIcon&&S(o,{key:"prepend-icon",name:"prepend"},null)]),s.default&&S("div",{class:"v-input__control"},[(N=s.default)==null?void 0:N.call(s,M.value)]),z&&S("div",{key:"append",class:"v-input__append"},[t.appendIcon&&S(o,{key:"append-icon",name:"append"},null),(T=s.append)==null?void 0:T.call(s,M.value)]),Y&&S("div",{class:"v-input__details"},[S(jk,{active:x,messages:c.value.length>0?c.value:t.messages},{message:s.message}),(W=s.details)==null?void 0:W.call(s,M.value)])])}),{reset:y,resetValidation:b,validate:w}}});function Yk(t){const e=Object.keys(Gg.props).filter(n=>!Gm(n));return Kc(t,e)}const Qk=Me({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...zg({transition:{component:Ug}})},setup(t,e){let{slots:n}=e;const s=R(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return et(()=>S(qg,{transition:t.transition},{default:()=>[To(S("div",{class:"v-counter"},[n.default?n.default({counter:s.value,max:t.max,value:t.value}):s.value]),[[$h,t.active]])]})),{}}});function Xk(t,e){if(!Hm)return;const n=e.modifiers||{},s=e.value,{handler:i,options:r}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=t._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const d=l.some(f=>f.isIntersecting);i&&(!n.quiet||u.init)&&(!n.once||d||u.init)&&i(d,l,c),d&&n.once?Yg(t,e):u.init=!0},r);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function Yg(t,e){var n;const s=(n=t._observe)==null?void 0:n[e.instance.$.uid];!s||(s.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Jk={mounted:Xk,unmounted:Yg},Zk=Jk,xa=Symbol("Forwarded refs");function eA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t[xa]=n,new Proxy(t,{get(i,r){if(Reflect.has(i,r))return Reflect.get(i,r);for(const o of n)if(o.value&&Reflect.has(o.value,r)){const a=Reflect.get(o.value,r);return typeof a=="function"?a.bind(o.value):a}},getOwnPropertyDescriptor(i,r){const o=Reflect.getOwnPropertyDescriptor(i,r);if(o)return o;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const a of n){if(!a.value)continue;const l=Reflect.getOwnPropertyDescriptor(a.value,r);if(l)return l;if("_"in a.value&&"setupState"in a.value._){const c=Reflect.getOwnPropertyDescriptor(a.value._.setupState,r);if(c)return c}}for(const a of n){let l=a.value&&Object.getPrototypeOf(a.value);for(;l;){const c=Reflect.getOwnPropertyDescriptor(l,r);if(c)return c;l=Object.getPrototypeOf(l)}}for(const a of n){const l=a.value&&a.value[xa];if(!l)continue;const c=l.slice();for(;c.length;){const u=c.shift(),d=Reflect.getOwnPropertyDescriptor(u.value,r);if(d)return d;const f=u.value&&u.value[xa];f&&c.push(...f)}}}}})}const tA=["color","file","time","date","datetime-local","week","month"],nA=Te({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Kg(),...Hg()},"v-text-field"),Df=Yo()({name:"VTextField",directives:{Intersect:Zk},inheritAttrs:!1,props:nA(),emits:{"click:control":t=>!0,"click:input":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:i}=e;const r=Ys(t,"modelValue"),{isFocused:o,focus:a,blur:l}=Wg(t),c=R(()=>{var D;return typeof t.counterValue=="function"?t.counterValue(r.value):((D=r.value)!=null?D:"").toString().length}),u=R(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter});function d(D,H){var N,T;!t.autofocus||!D||(N=H[0].target)==null||(T=N.focus)==null||T.call(N)}const f=me(),h=me(),m=me(),_=R(()=>tA.includes(t.type)||t.persistentPlaceholder||o.value),y=R(()=>t.messages.length?t.messages:o.value||t.persistentHint?t.hint:"");function b(){if(m.value!==document.activeElement){var D;(D=m.value)==null||D.focus()}o.value||a()}function w(D){b(),s("click:control",D)}function E(D){D.stopPropagation(),b(),$s(()=>{r.value=null,HS(t["onClick:clear"],D)})}function M(D){r.value=D.target.value}return et(()=>{const D=!!(i.counter||t.counter||t.counterValue),H=!!(D||i.details),[N,T]=BS(n),[{modelValue:W,...U}]=Yk(t),[z]=Hk(t);return S(Gg,$n({ref:f,modelValue:r.value,"onUpdate:modelValue":x=>r.value=x,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-text-field--flush-details":["plain","underlined"].includes(t.variant)}],"onClick:prepend":t["onClick:prepend"],"onClick:append":t["onClick:append"]},N,U,{focused:o.value,messages:y.value}),{...i,default:x=>{let{id:Y,isDisabled:se,isDirty:ae,isReadonly:te,isValid:J}=x;return S(jg,$n({ref:h,onMousedown:ie=>{ie.target!==m.value&&ie.preventDefault()},"onClick:control":w,"onClick:clear":E,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},z,{id:Y.value,active:_.value||ae.value,dirty:ae.value||t.dirty,focused:o.value,error:J.value===!1}),{...i,default:ie=>{let{props:{class:Ne,...it}}=ie;const Fe=To(S("input",$n({ref:m,value:r.value,onInput:M,autofocus:t.autofocus,readonly:te.value,disabled:se.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:b,onBlur:l},it,T),null),[[_h("intersect"),{handler:d},null,{once:!0}]]);return S(ze,null,[t.prefix&&S("span",{class:"v-text-field__prefix"},[t.prefix]),i.default?S("div",{class:Ne,onClick:Re=>s("click:input",Re),"data-no-activator":""},[i.default(),Fe]):zt(Fe,{class:Ne}),t.suffix&&S("span",{class:"v-text-field__suffix"},[t.suffix])])}})},details:H?x=>{var Y;return S(ze,null,[(Y=i.details)==null?void 0:Y.call(i,x),D&&S(ze,null,[S("span",null,null),S(Qk,{active:t.persistentCounter||o.value,value:c.value,max:u.value},i.counter)])])}:void 0})}),eA({},f,h,m)}}),sA={data:()=>({email:"",password:"",showPass:!1}),methods:{...Hh(oo,["logIn"])}};function iA(t,e,n,s,i,r){return Wn(),ko("div",null,[S(Df,{label:"E-Mail",modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,8,["modelValue"]),S(Df,{label:"Password",modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),type:t.showPass?"text":"password","append-inner-icon":t.showPass?"mdi-eye-off":"mdi-eye","onClick:appendInner":e[2]||(e[2]=o=>t.showPass=!t.showPass)},null,8,["modelValue","type","append-inner-icon"]),S(Uk,{onClick:e[3]||(e[3]=o=>t.logIn({email:t.email,password:t.password}))},{default:Mr(()=>[Ah("Sign In")]),_:1})])}const rA=ur(sA,[["render",iA]]),oA={};function aA(t,e,n,s,i,r){return Wn(),ko("div",null,"About")}const lA=ur(oA,[["render",aA]]),cA={};function uA(t,e,n,s,i,r){return Wn(),ko("div",null,"Dashboard")}const dA=ur(cA,[["render",uA]]),fA={};function hA(t,e){return Wn(),ko("h1",null,"Oops, it looks like the page you're looking for doesn't exist.")}const pA=ur(fA,[["render",hA]]),mA=[{path:"/",name:"Home",component:rA},{path:"/dashboard",name:"Dashboard",component:dA,meta:{requireAuth:!0}},{path:"/about",name:"About",component:lA},{path:"/:catchAll(.*)",component:pA}],Qg=rk({history:CR(),routes:mA});Qg.beforeEach((t,e,n)=>{if(!oo().user&&t.meta.requireAuth){n("/");return}n()});const Jo=Iy(UT),gA=Ry();Jo.use(gA);Jo.use(Qg);nR(Jo);Jo.mount("#app");
