(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9191:function(t,n,o){Promise.resolve().then(o.t.bind(o,6964,23)),Promise.resolve().then(o.t.bind(o,4724,23)),Promise.resolve().then(o.t.bind(o,36,23)),Promise.resolve().then(o.bind(o,3938)),Promise.resolve().then(o.t.bind(o,5011,23)),Promise.resolve().then(o.t.bind(o,9485,23)),Promise.resolve().then(o.t.bind(o,2599,23)),Promise.resolve().then(o.bind(o,8931)),Promise.resolve().then(o.bind(o,5246)),Promise.resolve().then(o.t.bind(o,5348,23))},8931:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return SignInBtn}});var e=o(7437),l=o(2265),a=o(3875),s=o(5011),i=o.n(s),r=o(2749);function SignInBtn(){let[t,n]=(0,l.useState)(!1),handleSignIn=async()=>{await (0,r.signIn)("kakao",{callbackUrl:"/"})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>{n(!0)},className:i().button,children:"Sign In"}),t&&(0,e.jsxs)(a.Z,{closeModal:()=>n(!1),children:[(0,e.jsx)("strong",{className:i().loginStrong,children:"Login"}),(0,e.jsx)("button",{type:"button",onClick:()=>handleSignIn(),className:i().loginBtn,children:"Kakao 로그인"})]})]})}},5246:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return SignOutBtn}});var e=o(7437),l=o(2265),a=o(3875),s=o(5011),i=o.n(s),r=o(2749);function SignOutBtn(){let[t,n]=(0,l.useState)(!1),handleLogout=async()=>{await (0,r.signOut)(),window.location.href="/"};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",onClick:()=>n(!0),className:i().button,children:"Sign out"}),t&&(0,e.jsxs)(a.Z,{closeModal:()=>n(!1),children:[(0,e.jsx)("p",{children:"로그아웃 하시겠습니까?"}),(0,e.jsxs)("div",{className:i().logoutBtnDiv,children:[(0,e.jsx)("button",{type:"button",onClick:()=>n(!1),className:i().logoutBtn,children:"아니요"}),(0,e.jsx)("button",{type:"button",onClick:handleLogout,className:i().logoutBtn,children:"네"})]})]})]})}},3875:function(t,n,o){"use strict";o.d(n,{Z:function(){return Modal}});var e=o(7437),l=o(2265),a=o(6585),s=o.n(a),i=o(4887);function Modal(t){let{children:n,closeModal:o}=t;return(0,l.useEffect)(()=>{let t=document.body;return t.style.cssText="\n      position: fixed;\n      top: -".concat(window.scrollY,"px;\n      overflow-y: scroll;\n      width: 100%;"),()=>{let n=t.style.top;t.style.cssText="",window.scrollTo(0,-1*parseInt(n||"0",10))}},[]),(0,i.createPortal)((0,e.jsx)("div",{onClick:o,className:s().modalBackground,children:(0,e.jsx)("div",{onClick:t=>t.stopPropagation(),className:s().modal,children:n})}),document.getElementById("portal"))}},5348:function(){},2599:function(t){t.exports={scrollbar:"layout_scrollbar__AXujn",contain:"layout_contain__y35JV",time:"layout_time__Vm1SD"}},9485:function(t){t.exports={layout:"customLayout_layout___pVmL",header:"customLayout_header__xtzv0",logoContainer:"customLayout_logoContainer___m3cP",main:"customLayout_main__a8b2B",footer:"customLayout_footer__04H91"}},5011:function(t){t.exports={nav:"layoutNav_nav__jfsjs",loginStrong:"layoutNav_loginStrong__sav89",loginBtn:"layoutNav_loginBtn__xUYzq",logoutBtnDiv:"layoutNav_logoutBtnDiv__VNHIx",logoutBtn:"layoutNav_logoutBtn__YGNzV"}},6585:function(t){t.exports={modalBackground:"modal_modalBackground___cg1r",modal:"modal_modal__CZ9gP"}},3938:function(t,n,o){"use strict";o.r(n),n.default={src:"/_next/static/media/logo.743ba582.svg",height:17,width:80,blurWidth:0,blurHeight:0}},36:function(t){t.exports={style:{fontFamily:"'__Pretendard_57d3ab', '__Pretendard_Fallback_57d3ab'"},className:"__className_57d3ab"}}},function(t){t.O(0,[759,971,864,744],function(){return t(t.s=9191)}),_N_E=t.O()}]);