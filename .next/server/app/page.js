(()=>{var e={};e.id=931,e.ids=[931],e.modules={38013:e=>{"use strict";e.exports=require("mongodb")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},14333:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>h,routeModule:()=>m,tree:()=>d});var r=s(73137),a=s(54647),n=s(4183),i=s.n(n),o=s(71775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=r.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8026)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,51922))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,98955)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,73588)),"C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,51922))).default(e)],twitter:[],manifest:void 0}}],h=["C:\\Users\\ogaeu\\OneDrive\\바탕 화면\\read-time\\src\\app\\page.js"],u="/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},24440:(e,t,s)=>{Promise.resolve().then(s.bind(s,1558)),Promise.resolve().then(s.bind(s,18044))},1558:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>PostDeleteBtn});var r=s(60080),a=s(9885),n=s(59106),i=s.n(n);let o={src:"/_next/static/media/trash_icon.d5a0127f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR42mOot7dmYchKZmQAgu+Kik4/FRQSGXzcmRmAIN/RloWBAQi+KSlZ/5aXXwXEV//Iy78G0puACrMYYOCdmqoMUHALEK8H4qVAfPiHoqIPuoLzvxXk5wLxbCD7zE9FhVi4gg+qKgpAwX2/FBQqgLgcyF4PVJCArmAvULIUiEuA7LVABfFwBe9VVeSAgjeAeCUQLwPi62DfgEFKHOM1PR1uoM763woKfUC6E0hP+qKspM3AwMAAAOtHUFZl5vwiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var l=s(83414),c=s(52451),d=s.n(c),h=s(57114);function PostDeleteBtn({post:e}){let[t,s]=(0,a.useState)(!1),[n,c]=(0,a.useState)(),[u,p]=(0,a.useState)(!1),m=(0,h.useRouter)(),openModal=e=>{c(e),s(e=>!e)},closeModal=()=>{s(!1)},handleDelete=async e=>{if(!u){p(!0);try{let t=await fetch(`/api/postdelete/${e}`,{method:"DELETE"});200===t.status?m.refresh():alert("Post 삭제 중 문제가 발생하였습니다.")}catch(e){console.error(e)}finally{p(!1)}s(!1)}};return(0,r.jsxs)(r.Fragment,{children:[r.jsx("button",{type:"button",onClick:()=>openModal(e._id),children:r.jsx(d(),{src:o,alt:"게시글 삭제",width:20,height:20})}),t&&(0,r.jsxs)(l.Z,{closeModal:closeModal,children:[r.jsx("p",{children:"게시글을 삭제하시겠습니까?"}),(0,r.jsxs)("div",{className:i().modalBtnDiv,children:[r.jsx("button",{type:"button",onClick:closeModal,children:"남겨둘래요"}),r.jsx("button",{type:"button",onClick:()=>handleDelete(n),children:"삭제할래요"})]})]})]})}},18044:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Search});var r=s(60080),a=s(9885),n=s(82210),i=s.n(n),o=s(52451),l=s.n(o);let c={src:"/_next/static/media/search_icon.546ba5ac.svg",height:24,width:24,blurWidth:0,blurHeight:0};var d=s(39124),h=s.n(d),u=s(11440),p=s.n(u),m=s(74284),x=s(83414);function SearchView({searchResult:e}){let[t,s]=(0,a.useState)(null),[n,i]=(0,a.useState)(!1),{data:o}=(0,m.useSession)(),closeModal=()=>{i(!1)},handleModal=()=>{i(e=>!e)},handleContentClick=e=>{t===e?s(null):s(e)};return(0,r.jsxs)("article",{className:h().searchViewContain,children:[e&&0!==e.length?(0,r.jsxs)(r.Fragment,{children:[r.jsx("p",{children:"책 표지를 눌러 글을 남겨봐요."}),r.jsx("ul",{children:e.map((e,s)=>(0,r.jsxs)("li",{className:h().bookInfo,children:[r.jsx("strong",{children:e.title}),o?r.jsx(p(),{href:{pathname:"/post",query:{title:e.title,thumbnail:e.thumbnail}},children:r.jsx("img",{src:e.thumbnail,alt:e.title})}):r.jsx("img",{src:e.thumbnail,alt:e.title,onClick:handleModal}),r.jsx("p",{className:t===s?null:h().expanded,onClick:()=>handleContentClick(s),children:e.contents?`${e.contents}...`:"책 소개 없음"})]},e.isbn))})]}):r.jsx("p",{className:h().noBooks,children:"오늘 기억하고 싶은 문장은 무엇인가요?"}),n&&(0,r.jsxs)(x.Z,{closeModal:closeModal,children:[r.jsx("p",{children:"게시글 등록은 로그인 후에 이용하실 수 있습니다."}),r.jsx("button",{type:"button",onClick:closeModal,className:h().modalBtn,children:"닫기"})]})]})}function Search(){let[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(null),handleSearch=async()=>{try{let t=await fetch(`https://dapi.kakao.com/v3/search/book?query=${e}`,{method:"GET",headers:{Authorization:" KakaoAK 3fc2626031204a6f20f2e802405d2e8c"},cache:"no-store"});t.ok||console.error("API 호출 실패:",t.status);let s=await t.json(),r=s.documents.filter(e=>e.thumbnail);n(r)}catch(e){console.error("API 호출 실패:",e)}finally{t("")}};return(0,r.jsxs)(m.SessionProvider,{children:[(0,r.jsxs)("form",{className:i().searchForm,onSubmit:e=>{e.preventDefault(),handleSearch()},children:[r.jsx("label",{htmlFor:"search",className:"a11y-hidden",children:"도서 검색"}),r.jsx("input",{type:"text",id:"search",placeholder:"기억에 남길 책을 검색해보세요",value:e,onChange:e=>t(e.target.value)}),r.jsx("button",{type:"submit",children:r.jsx(l(),{src:c,alt:"검색 버튼",width:35,height:35})})]}),r.jsx(SearchView,{searchResult:s})]})}},24778:e=>{e.exports={postsSection:"postssection_postsSection__iPFze",loading:"postssection_loading__zgjYl"}},87183:e=>{e.exports={postViewList:"postview_postViewList__dUaYO",bookThumbnail:"postview_bookThumbnail__v98pI",modalBtnDiv:"postview_modalBtnDiv__K4_Mn",randomPostUser:"postview_randomPostUser__WLMDE",noPosts:"postview_noPosts__hT0To",loading:"postview_loading__mXt__"}},59106:e=>{e.exports={postViewList:"postview_postViewList__dUaYO",bookThumbnail:"postview_bookThumbnail__v98pI",modalBtnDiv:"postview_modalBtnDiv__K4_Mn",randomPostUser:"postview_randomPostUser__WLMDE",noPosts:"postview_noPosts__hT0To",loading:"postview_loading__mXt__"}},82210:e=>{e.exports={searchForm:"search_searchForm__15y1L"}},38917:e=>{e.exports={searchSection:"searchSection_searchSection__5FwcI"}},39124:e=>{e.exports={searchViewContain:"searchView_searchViewContain__QEHm1",bookInfo:"searchView_bookInfo__GSk_R",expanded:"searchView_expanded__4uOf9",modalBtn:"searchView_modalBtn__AVl4z",noBooks:"searchView_noBooks__PQZ_x"}},20925:e=>{e.exports={userArticle:"userInfo_userArticle__V7k7j"}},8026:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Home,metadata:()=>y});var r=s(48144),a=s(22325),n=s.n(a),i=s(53830),o=s(38917),l=s.n(o),c=s(17536);let d=(0,c.createProxy)(String.raw`C:\Users\ogaeu\OneDrive\바탕 화면\read-time\src\components\main\search\search.js`),{__esModule:h,$$typeof:u}=d,p=d.default;var m=s(20925),x=s.n(m),_=s(3471);async function UserInfo(){let e=await (0,_.getServerSession)();return r.jsx(r.Fragment,{children:e?(0,r.jsxs)("article",{className:x().userArticle,children:[r.jsx("img",{src:e.user.image,alt:`${e.user.name}님의 프로필 이미지`}),(0,r.jsxs)("span",{children:[e.user.name,"님 안녕하세요!"]})]}):null})}function SearchSection(){return(0,r.jsxs)("section",{className:l().searchSection,children:[r.jsx(UserInfo,{}),r.jsx("h2",{children:"Search"}),r.jsx(p,{})]})}var j=s(24778),g=s.n(j),w=s(87183),v=s.n(w);let b=(0,c.createProxy)(String.raw`C:\Users\ogaeu\OneDrive\바탕 화면\read-time\src\components\main\post\postdeletebtn.js`),{__esModule:f,$$typeof:A}=b,P=b.default;var S=s(49011);let BASE_URL=()=>"https://read-time.vercel.app";async function dataFetch(){try{let e=await (0,_.getServerSession)(S.authOptions),t=e.id,s=BASE_URL(),r=await fetch(`${s}/api/postsview`,{cache:"no-store"});if(!r.ok){alert("게시글 불러오는 중 문제가 발생하였습니다.");let e=await r.json();throw Error(e.message)}let a=await r.json(),n=a.filter(e=>e.id===t);return n}catch(e){console.error(e)}}async function Myposts(){let e=await dataFetch();return r.jsx(r.Fragment,{children:e&&0!==e.length?r.jsx(r.Fragment,{children:e.map(e=>(0,r.jsxs)("li",{children:[r.jsx("img",{src:e.thumbnail,alt:e.title,className:v().bookThumbnail}),(0,r.jsxs)("div",{children:[r.jsx("strong",{children:e.title}),r.jsx("p",{children:e.sentence})]}),r.jsx(P,{post:e})]},e._id))}):r.jsx("div",{className:v().noPosts,children:r.jsx("p",{children:"아직 게시글이 없어요"})})})}async function dataRandomFetch(){let e=BASE_URL();try{let t=await fetch(`${e}/api/randompostview`);if(!t.ok){alert("게시글 불러오는 중 문제가 발생하였습니다.");let e=await t.json();throw Error(e.message)}let s=await t.json();return s}catch(e){console.error(e)}}async function Randomposts(){let e=await dataRandomFetch();return r.jsx(r.Fragment,{children:e&&0!==e.length?r.jsx(r.Fragment,{children:e.map(e=>(0,r.jsxs)("li",{children:[r.jsx("img",{src:e.thumbnail,alt:e.title,className:v().bookThumbnail}),(0,r.jsxs)("div",{children:[r.jsx("strong",{children:e.title}),r.jsx("p",{children:e.sentence}),(0,r.jsxs)("p",{className:v().randomPostUser,children:[e.username,"님"]})]})]},e._id))}):r.jsx("div",{className:v().noPosts,children:r.jsx("p",{children:"아직 게시글이 없어요"})})})}async function PostView(){let e=await (0,_.getServerSession)(S.authOptions);return r.jsx("ul",{className:v().postViewList,children:e?r.jsx(Myposts,{}):r.jsx(Randomposts,{})})}async function PostsSection(){return(0,r.jsxs)("section",{className:g().postsSection,children:[r.jsx("h3",{children:"Post"}),r.jsx(i.Suspense,{fallback:r.jsx("p",{className:g().loading,children:"게시글을 불러오는 중입니다..."}),children:r.jsx(PostView,{})})]})}let y={title:"Read Time | Home",description:"기억하고 싶은 책 속 문장을 적어봐요."};function Home(){return(0,r.jsxs)("div",{className:n().contain,children:[r.jsx(SearchSection,{}),r.jsx(PostsSection,{})]})}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[395,506,522,127,588,319,11,884],()=>__webpack_exec__(14333));module.exports=s})();