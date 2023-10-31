"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import s from "./layoutNav.module.css";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
          <button type="button" onClick={() => signIn("kakao")} className={s.loginBtn}>
            Kakao 로그인
          </button>
        </Modal>
      )}
    </>
  );
}
