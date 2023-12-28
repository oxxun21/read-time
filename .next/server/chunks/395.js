"use strict";exports.id=395,exports.ids=[395],exports.modules={55865:e=>{var t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o={};function stringifyCookie(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`].filter(Boolean);return`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}; ${r.join("; ")}`}function parseCookie(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[i,s]=[r.slice(0,e),r.slice(e+1)];try{t.set(i,decodeURIComponent(null!=s?s:"true"))}catch{}}return t}function parseSetCookie(e){var t;if(!e)return;let[[r,i],...s]=parseCookie(e),{domain:o,expires:a,httponly:p,maxage:l,path:u,samesite:f,secure:h}=Object.fromEntries(s.map(([e,t])=>[e.toLowerCase(),t])),c={name:r,value:decodeURIComponent(i),domain:o,...a&&{expires:new Date(a)},...p&&{httpOnly:!0},..."string"==typeof l&&{maxAge:Number(l)},path:u,...f&&{sameSite:n.includes(t=(t=f).toLowerCase())?t:void 0},...h&&{secure:!0}};return function(e){let t={};for(let r in e)e[r]&&(t[r]=e[r]);return t}(c)}((e,r)=>{for(var i in r)t(e,i,{get:r[i],enumerable:!0})})(o,{RequestCookies:()=>a,ResponseCookies:()=>p,parseCookie:()=>parseCookie,parseSetCookie:()=>parseSetCookie,splitCookiesString:()=>splitCookiesString,stringifyCookie:()=>stringifyCookie}),e.exports=((e,o,n,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let n of i(o))s.call(e,n)||void 0===n||t(e,n,{get:()=>o[n],enumerable:!(a=r(o,n))||a.enumerable});return e})(t({},"__esModule",{value:!0}),o);var n=["strict","lax","none"];function splitCookiesString(e){if(!e)return[];var t,r,i,s,o,n=[],a=0;function skipWhitespace(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(t=a,o=!1;skipWhitespace();)if(","===(r=e.charAt(a))){for(i=a,a+=1,skipWhitespace(),s=a;a<e.length&&"="!==(r=e.charAt(a))&&";"!==r&&","!==r;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=s,n.push(e.substring(t,i)),t=a):a=i+1}else a+=1;(!o||a>=e.length)&&n.push(e.substring(t,e.length))}return n}var a=class{constructor(e){this._parsed=new Map,this._headers=e;let t=e.get("cookie");if(t){let e=parseCookie(t);for(let[t,r]of e)this._parsed.set(t,{name:t,value:r})}}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let i="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===i).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,i=this._parsed;return i.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(i).map(([e,t])=>stringifyCookie(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>stringifyCookie(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},p=class{constructor(e){var t;this._parsed=new Map,this._headers=e;let r=null==(t=e.getSetCookie)?void 0:t.call(e);e.get("set-cookie");let i=Array.isArray(r)?r:splitCookiesString(r);for(let e of i){let t=parseSetCookie(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let i="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===i)}has(e){return this._parsed.has(e)}set(...e){let[t,r,i]=1===e.length?[e[0].name,e[0].value,e[0]]:e,s=this._parsed;return s.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...i})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=stringifyCookie(r);t.append("set-cookie",e)}}(s,this._headers),this}delete(...e){let[t,r,i]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0].path,e[0].domain];return this.set({name:t,path:r,domain:i,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(stringifyCookie).join("; ")}}},54647:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},93497:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RequestCookies:function(){return i.RequestCookies},ResponseCookies:function(){return i.ResponseCookies}});let i=r(55865)}};