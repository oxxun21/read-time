(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{4175:function(e,t,r){Promise.resolve().then(r.bind(r,6650))},6650:function(e,t,r){"use strict";r.r(t);var s=r(7437),n=r(2265),o=r(9916),a=r.n(o),l=r(4033);t.default=function(e){let t=e.searchParams,r=(0,l.useRouter)(),[o,i]=(0,n.useState)(""),[c,u]=(0,n.useState)(!1),f=t.title,p=t.thumbnail,handleSubmit=async e=>{if(e.preventDefault(),!c){if(u(!0),!o){alert("문장을 입력해주세요.");return}try{let e=await fetch("/api/savepost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({thumbnail:p,title:f,sentence:o})});if(!e.ok){alert("게시글 등록 중 문제가 발생하였습니다.");let t=await e.json();throw Error(t.message)}alert("게시글 등록 완료!"),r.push("/"),r.refresh()}catch(e){console.error(e)}finally{u(!1)}}};return(0,s.jsxs)("form",{className:a().postForm,onSubmit:handleSubmit,children:[(0,s.jsx)("img",{src:p,alt:f}),(0,s.jsxs)("div",{className:a().posting,children:[(0,s.jsx)("strong",{children:f}),(0,s.jsx)("textarea",{placeholder:"기억에 남기고 싶은 문장을 적어주세요 (290자 까지 가능합니다.)",value:o,onChange:e=>i(e.target.value),maxLength:"290",className:a().scrollbar}),(0,s.jsxs)("div",{className:a().align,children:[(0,s.jsxs)("p",{children:[o.length," / 290 글자"]}),(0,s.jsx)("button",{type:"submit",children:"등록하기"})]})]})]})}},9916:function(e){e.exports={scrollbar:"post_scrollbar__T36y8",postForm:"post_postForm__FrCWh",posting:"post_posting__sQ_5C",align:"post_align__roRcE"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var s,o={},c=null,u=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(290)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=4175)}),_N_E=e.O()}]);