"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import s from "./layoutNav.module.css";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };
  return (
    <>
      <button type="button" onClick={() => setLogoutModalOpen(true)} className={s.button}>
        Sign out
      </button>
      {logoutModalOpen && (
        <Modal closeModal={() => setLogoutModalOpen(false)}>
          <p>로그아웃 하시겠습니까?</p>
          <div className={s.logoutBtnDiv}>
            <button type="button" onClick={() => setLogoutModalOpen(false)} className={s.logoutBtn}>
              아니요
            </button>
            <button type="button" onClick={handleLogout} className={s.logoutBtn}>
              네
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
