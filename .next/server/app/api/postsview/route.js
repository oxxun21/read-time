"use strict";(()=>{var e={};e.id=643,e.ids=[643],e.modules={38013:e=>{e.exports=require("mongodb")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},94496:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>m,originalPathname:()=>_,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>v,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>w});var r={};a.r(r),a.d(r,{GET:()=>GET,dynamic:()=>u}),a(95655);var s=a(83323),o=a(54647),i=a(92319),n=a(66886);let u="force-dynamic";async function GET(){let e;try{e=await (0,i.TR)();let t=await (0,i.HR)(e,"bookPost");return n.Z.json(t,{status:200})}catch(e){return n.Z.json({message:"post view 서버 오류"+e.message},{status:500})}finally{e.close()}}let p=s.AppRouteRouteModule,d=new p({definition:{kind:o.x.APP_ROUTE,page:"/api/postsview/route",pathname:"/api/postsview",filename:"route",bundlePath:"app/api/postsview/route"},resolvedPagePath:"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\api\\postsview\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:v,headerHooks:m,staticGenerationBailout:w}=d,_="/api/postsview/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[395,506,727,886,319],()=>__webpack_exec__(94496));module.exports=a})();