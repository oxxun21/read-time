"use client";
import React, { useState } from "react";
import s from "./layoutNav.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "../modal/modal";

export default function LayoutNav() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link href="/">Go Home</Link>
        </li>
        {session && (
          <li>
            <Link href="/timecheck">Time check</Link>
          </li>
        )}
        {session ? (
          <li>
            <button
              type="button"
              onClick={() => setLogoutModalOpen(true)}
              className={s.button}
            >
              Sign out
            </button>
          </li>
        ) : (
          <li>
            <button
              type="button"
              onClick={() => {
                setLoginModalOpen(true);
              }}
              className={s.button}
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
      {loginModalOpen && (
        <Modal closeModal={() => setLoginModalOpen(false)}>
          <strong className={s.loginStrong}>Login</strong>
          <button
            type="button"
            onClick={() => signIn("kakao")}
            className={s.loginBtn}
          >
            Kakao 로그인
          </button>
          <p className={s.loginP}>
            이메일도 동의해주셔야 정상적인 사용이 가능합니다ㅠ.ㅠ
          </p>
        </Modal>
      )}
      {logoutModalOpen && (
        <Modal closeModal={() => setLogoutModalOpen(false)}>
          <p>로그아웃 하시겠습니까?</p>
          <div className={s.logoutBtnDiv}>
            <button
              type="button"
              onClick={() => setLogoutModalOpen(false)}
              className={s.logoutBtn}
            >
              아니요
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className={s.logoutBtn}
            >
              네
            </button>
          </div>
        </Modal>
      )}
    </nav>
  );
}
