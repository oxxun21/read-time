(()=>{var e={};e.id=297,e.ids=[297],e.modules={38013:e=>{"use strict";e.exports=require("mongodb")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},67139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>c,routeModule:()=>_,tree:()=>u});var s=r(73137),a=r(54647),i=r(4183),o=r.n(i),n=r(71775),p={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>n[e]);r.d(t,p);let l=s.AppPageRouteModule,u=["",{children:["post",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,82056)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\post\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,51922))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,98955)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,73588)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,51922))).default(e)],twitter:[],manifest:void 0}}],c=["C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\post\\page.js"],d="/post/page",m={require:r,loadChunk:()=>Promise.resolve()},_=new l({definition:{kind:a.x.APP_PAGE,page:"/post/page",pathname:"/post",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},25695:(e,t,r)=>{Promise.resolve().then(r.bind(r,40388))},40388:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(60080),a=r(9885),i=r(52055),o=r.n(i),n=r(57114);let __WEBPACK_DEFAULT_EXPORT__=function(e){let t=e.searchParams,r=(0,n.useRouter)(),[i,p]=(0,a.useState)(""),[l,u]=(0,a.useState)(!1),c=t.title,d=t.thumbnail,handleSubmit=async e=>{if(e.preventDefault(),!l){if(u(!0),!i){alert("문장을 입력해주세요.");return}try{let e=await fetch("/api/savepost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({thumbnail:d,title:c,sentence:i})});if(!e.ok){alert("게시글 등록 중 문제가 발생하였습니다.");let t=await e.json();throw Error(t.message)}alert("게시글 등록 완료!"),r.push("/"),r.refresh()}catch(e){console.error(e)}finally{u(!1)}}};return(0,s.jsxs)("form",{className:o().postForm,onSubmit:handleSubmit,children:[s.jsx("img",{src:d,alt:c}),(0,s.jsxs)("div",{className:o().posting,children:[s.jsx("strong",{children:c}),s.jsx("textarea",{placeholder:"기억에 남기고 싶은 문장을 적어주세요 (290자 까지 가능합니다.)",value:i,onChange:e=>p(e.target.value),maxLength:"290",className:o().scrollbar}),(0,s.jsxs)("div",{className:o().align,children:[(0,s.jsxs)("p",{children:[i.length," / 290 글자"]}),s.jsx("button",{type:"submit",children:"등록하기"})]})]})]})}},52055:e=>{e.exports={scrollbar:"post_scrollbar__T36y8",postForm:"post_postForm__FrCWh",posting:"post_posting__sQ_5C",align:"post_align__roRcE"}},82056:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>p});var s=r(17536);let a=(0,s.createProxy)(String.raw`C:\Users\ogaeu\OneDrive\바탕 화면\read-time\src\app\post\page.js`),{__esModule:i,$$typeof:o}=a,n=a.default,p=n},57114:(e,t,r)=>{e.exports=r(82778)}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[395,506,522,127,319,11,884],()=>__webpack_exec__(67139));module.exports=r})();