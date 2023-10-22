"use client";
import React, { useEffect } from "react";
import s from "./modal.module.css";
import { createPortal } from "react-dom";

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    const root = document.body;
    root.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = root.style.top;
      root.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return createPortal(
    <div onClick={closeModal} className={s.modalBackground}>
      <div onClick={(e) => e.stopPropagation()} className={s.modal}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
