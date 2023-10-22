"use client";
import React, { useState } from "react";
import s from "./layoutNav.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Modal from "../modal/modal";

export default function LayoutNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link href="/">Go Home</Link>
        </li>
        <li>
          <Link href="/timecheck">Time check</Link>
        </li>
        {session ? (
          <li>
            <button
              type="button"
              onClick={() => signOut()}
              className={s.button}
            >
              Sign out
            </button>
          </li>
        ) : (
          <li>
            <button type="button" onClick={openModal} className={s.button}>
              Sign In
            </button>
          </li>
        )}
      </ul>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
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
    </nav>
  );
}
