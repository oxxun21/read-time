"use strict";exports.id=886,exports.ids=[886],exports.modules={66886:(e,t,r)=>{Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return a.NextResponse}});let a=r(60177)},65973:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextURL",{enumerable:!0,get:function(){return NextURL}});let a=r(79048),n=r(55127),s=r(23249),o=r(44316),i=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function parseURL(e,t){return new URL(String(e).replace(i,"localhost"),t&&String(t).replace(i,"localhost"))}let l=Symbol("NextURLInternal");let NextURL=class NextURL{constructor(e,t,r){let a,n;"object"==typeof t&&"pathname"in t||"string"==typeof t?(a=t,n=r||{}):n=r||t||{},this[l]={url:parseURL(e,a??n.base),options:n,basePath:""},this.analyze()}analyze(){var e,t,r,n,i;let h=(0,o.getNextPathnameInfo)(this[l].url.pathname,{nextConfig:this[l].options.nextConfig,parseData:!0,i18nProvider:this[l].options.i18nProvider}),u=(0,s.getHostname)(this[l].url,this[l].options.headers);this[l].domainLocale=this[l].options.i18nProvider?this[l].options.i18nProvider.detectDomainLocale(u):(0,a.detectDomainLocale)(null==(t=this[l].options.nextConfig)?void 0:null==(e=t.i18n)?void 0:e.domains,u);let d=(null==(r=this[l].domainLocale)?void 0:r.defaultLocale)||(null==(i=this[l].options.nextConfig)?void 0:null==(n=i.i18n)?void 0:n.defaultLocale);this[l].url.pathname=h.pathname,this[l].defaultLocale=d,this[l].basePath=h.basePath??"",this[l].buildId=h.buildId,this[l].locale=h.locale??d,this[l].trailingSlash=h.trailingSlash}formatPathname(){return(0,n.formatNextPathnameInfo)({basePath:this[l].basePath,buildId:this[l].buildId,defaultLocale:this[l].options.forceLocale?void 0:this[l].defaultLocale,locale:this[l].locale,pathname:this[l].url.pathname,trailingSlash:this[l].trailingSlash})}formatSearch(){return this[l].url.search}get buildId(){return this[l].buildId}set buildId(e){this[l].buildId=e}get locale(){return this[l].locale??""}set locale(e){var t,r;if(!this[l].locale||!(null==(r=this[l].options.nextConfig)?void 0:null==(t=r.i18n)?void 0:t.locales.includes(e)))throw TypeError(`The NextURL configuration includes no locale "${e}"`);this[l].locale=e}get defaultLocale(){return this[l].defaultLocale}get domainLocale(){return this[l].domainLocale}get searchParams(){return this[l].url.searchParams}get host(){return this[l].url.host}set host(e){this[l].url.host=e}get hostname(){return this[l].url.hostname}set hostname(e){this[l].url.hostname=e}get port(){return this[l].url.port}set port(e){this[l].url.port=e}get protocol(){return this[l].url.protocol}set protocol(e){this[l].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[l].url=parseURL(e),this.analyze()}get origin(){return this[l].url.origin}get pathname(){return this[l].url.pathname}set pathname(e){this[l].url.pathname=e}get hash(){return this[l].url.hash}set hash(e){this[l].url.hash=e}get search(){return this[l].url.search}set search(e){this[l].url.search=e}get password(){return this[l].url.password}set password(e){this[l].url.password=e}get username(){return this[l].url.username}set username(e){this[l].url.username=e}get basePath(){return this[l].basePath}set basePath(e){this[l].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new NextURL(String(this),this[l].options)}}},60177:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NextResponse",{enumerable:!0,get:function(){return NextResponse}});let a=r(65973),n=r(75746),s=r(93497),o=Symbol("internal response"),i=new Set([301,302,303,307,308]);function handleMiddlewareField(e,t){var r;if(null==e?void 0:null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let r=[];for(let[a,n]of e.request.headers)t.set("x-middleware-request-"+a,n),r.push(a);t.set("x-middleware-override-headers",r.join(","))}}let NextResponse=class NextResponse extends Response{constructor(e,t={}){super(e,t),this[o]={cookies:new s.ResponseCookies(this.headers),url:t.url?new a.NextURL(t.url,{headers:(0,n.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[o].cookies}static json(e,t){let r=Response.json(e,t);return new NextResponse(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!i.has(r))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let a="object"==typeof t?t:{},s=new Headers(null==a?void 0:a.headers);return s.set("Location",(0,n.validateURL)(e)),new NextResponse(null,{...a,headers:s,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",(0,n.validateURL)(e)),handleMiddlewareField(t,r),new NextResponse(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),handleMiddlewareField(e,t),new NextResponse(null,{...e,headers:t})}}},75746:(e,t)=>{function fromNodeOutgoingHttpHeaders(e){let t=new Headers;for(let[r,a]of Object.entries(e)){let e=Array.isArray(a)?a:[a];for(let a of e)void 0!==a&&("number"==typeof a&&(a=a.toString()),t.append(r,a))}return t}function splitCookiesString(e){var t,r,a,n,s,o=[],i=0;function skipWhitespace(){for(;i<e.length&&/\s/.test(e.charAt(i));)i+=1;return i<e.length}for(;i<e.length;){for(t=i,s=!1;skipWhitespace();)if(","===(r=e.charAt(i))){for(a=i,i+=1,skipWhitespace(),n=i;i<e.length&&"="!==(r=e.charAt(i))&&";"!==r&&","!==r;)i+=1;i<e.length&&"="===e.charAt(i)?(s=!0,i=n,o.push(e.substring(t,a)),t=i):i=a+1}else i+=1;(!s||i>=e.length)&&o.push(e.substring(t,e.length))}return o}function toNodeOutgoingHttpHeaders(e){let t={},r=[];if(e)for(let[a,n]of e.entries())"set-cookie"===a.toLowerCase()?(r.push(...splitCookiesString(n)),t[a]=1===r.length?r[0]:r):t[a]=n;return t}function validateURL(e){try{return String(new URL(String(e)))}catch(t){throw Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t})}}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fromNodeOutgoingHttpHeaders:function(){return fromNodeOutgoingHttpHeaders},splitCookiesString:function(){return splitCookiesString},toNodeOutgoingHttpHeaders:function(){return toNodeOutgoingHttpHeaders},validateURL:function(){return validateURL}})},23249:(e,t)=>{function getHostname(e,t){let r;if((null==t?void 0:t.host)&&!Array.isArray(t.host))r=t.host.toString().split(":")[0];else{if(!e.hostname)return;r=e.hostname}return r.toLowerCase()}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getHostname",{enumerable:!0,get:function(){return getHostname}})},79048:(e,t)=>{function detectDomainLocale(e,t,r){if(e)for(let s of(r&&(r=r.toLowerCase()),e)){var a,n;let e=null==(a=s.domain)?void 0:a.split(":")[0].toLowerCase();if(t===e||r===s.defaultLocale.toLowerCase()||(null==(n=s.locales)?void 0:n.some(e=>e.toLowerCase()===r)))return s}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"detectDomainLocale",{enumerable:!0,get:function(){return detectDomainLocale}})},49517:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}});let a=r(95431),n=r(65417);function addLocale(e,t,r,s){if(!t||t===r)return e;let o=e.toLowerCase();return!s&&((0,n.pathHasPrefix)(o,"/api")||(0,n.pathHasPrefix)(o,"/"+t.toLowerCase()))?e:(0,a.addPathPrefix)(e,"/"+t)}},95431:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return addPathPrefix}});let a=r(11165);function addPathPrefix(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:n,hash:s}=(0,a.parsePath)(e);return""+t+r+n+s}},2776:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathSuffix",{enumerable:!0,get:function(){return addPathSuffix}});let a=r(11165);function addPathSuffix(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:n,hash:s}=(0,a.parsePath)(e);return""+r+t+n+s}},55127:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"formatNextPathnameInfo",{enumerable:!0,get:function(){return formatNextPathnameInfo}});let a=r(2664),n=r(95431),s=r(2776),o=r(49517);function formatNextPathnameInfo(e){let t=(0,o.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=(0,a.removeTrailingSlash)(t)),e.buildId&&(t=(0,s.addPathSuffix)((0,n.addPathPrefix)(t,"/_next/data/"+e.buildId),"/"===e.pathname?"index.json":".json")),t=(0,n.addPathPrefix)(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:(0,s.addPathSuffix)(t,"/"):(0,a.removeTrailingSlash)(t)}},44316:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getNextPathnameInfo",{enumerable:!0,get:function(){return getNextPathnameInfo}});let a=r(83688),n=r(57085),s=r(65417);function getNextPathnameInfo(e,t){var r,o;let{basePath:i,i18n:l,trailingSlash:h}=null!=(r=t.nextConfig)?r:{},u={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):h};i&&(0,s.pathHasPrefix)(u.pathname,i)&&(u.pathname=(0,n.removePathPrefix)(u.pathname,i),u.basePath=i);let d=u.pathname;if(u.pathname.startsWith("/_next/data/")&&u.pathname.endsWith(".json")){let e=u.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/"),r=e[0];u.buildId=r,d="index"!==e[1]?"/"+e.slice(1).join("/"):"/",!0===t.parseData&&(u.pathname=d)}if(l){let e=t.i18nProvider?t.i18nProvider.analyze(u.pathname):(0,a.normalizeLocalePath)(u.pathname,l.locales);u.locale=e.detectedLocale,u.pathname=null!=(o=e.pathname)?o:u.pathname,!e.detectedLocale&&u.buildId&&(e=t.i18nProvider?t.i18nProvider.analyze(d):(0,a.normalizeLocalePath)(d,l.locales)).detectedLocale&&(u.locale=e.detectedLocale)}return u}},11165:(e,t)=>{function parsePath(e){let t=e.indexOf("#"),r=e.indexOf("?"),a=r>-1&&(t<0||r<t);return a||t>-1?{pathname:e.substring(0,a?r:t),query:a?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return parsePath}})},65417:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return pathHasPrefix}});let a=r(11165);function pathHasPrefix(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,a.parsePath)(e);return r===t||r.startsWith(t+"/")}},57085:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removePathPrefix",{enumerable:!0,get:function(){return removePathPrefix}});let a=r(65417);function removePathPrefix(e,t){if(!(0,a.pathHasPrefix)(e,t))return e;let r=e.slice(t.length);return r.startsWith("/")?r:"/"+r}}};