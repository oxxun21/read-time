"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import s from "./layoutNav.module.css";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleSignIn = async () => {
    await signIn("kakao", { callbackUrl: process.env.NEXTAUTH_URL });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setLoginModalOpen(true);
        }}
        className={s.button}
      >
        Sign In
      </button>
      {loginModalOpen && (
        <Modal closeModal={() => setLoginModalOpen(false)}>
          <strong className={s.loginStrong}>Login</strong>
          <button type="button" onClick={() => handleSignIn()} className={s.loginBtn}>
            Kakao 로그인
          </button>
        </Modal>
      )}
    </>
  );
}
