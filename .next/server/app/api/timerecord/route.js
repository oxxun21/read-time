"use strict";(()=>{var e={};e.id=512,e.ids=[512],e.modules={38013:e=>{e.exports=require("mongodb")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},60883:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>g,originalPathname:()=>v,requestAsyncStorage:()=>m,routeModule:()=>l,serverHooks:()=>q,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>y});var s={};t.r(s),t.d(s,{POST:()=>POST,dynamic:()=>c}),t(95655);var i=t(83323),o=t(54647),a=t(92319),n=t(3471),u=t(66886),p=t(49011);let c="force-dynamic";async function POST(e){let r;let t=await e.json(),s=await (0,n.getServerSession)(p.authOptions);if(!t)return u.Z.json({message:"request 문제 발생"},{status:500});try{r=await (0,a.TR)();let e={...t,username:s.user.name,id:s.id};await (0,a.qi)(r,"time",e);let i=await (0,a.HR)(r,"time",{id:s.id});return u.Z.json(i,{status:200})}catch(e){return u.Z.json({message:"time record post 서버 오류: "+e.message},{status:500})}finally{r.close()}}let d=i.AppRouteRouteModule,l=new d({definition:{kind:o.x.APP_ROUTE,page:"/api/timerecord/route",pathname:"/api/timerecord",filename:"route",bundlePath:"app/api/timerecord/route"},resolvedPagePath:"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\api\\timerecord\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:m,staticGenerationAsyncStorage:x,serverHooks:q,headerHooks:g,staticGenerationBailout:y}=l,v="/api/timerecord/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[395,506,727,522,886,319,11],()=>__webpack_exec__(60883));module.exports=t})();