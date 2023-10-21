"use client";
import React, { useState } from "react";

export default function SignForm() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h2>{isLogin ? "로그인" : "회원가입"}</h2>
      <form>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </>
  );
}
