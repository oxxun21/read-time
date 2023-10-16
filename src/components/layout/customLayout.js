import React from "react";
import s from "./customLayout.module.css";
import Link from "next/link";
import LayoutNav from "./layoutNav";
import Logo from "./logo";

export default function CustomLayout({ children }) {
  return (
    <section className={s.layout}>
      <header className={s.header}>
        <h1>
          <Link href="/">
            <Logo />
          </Link>
        </h1>
        <LayoutNav />
      </header>
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>
        <a href="https://developers.kakao.com/" target="_blank">
          kakao developers API 사용
        </a>
        <p>포트폴리오 목적으로 만든 사이트입니다.</p>
      </footer>
    </section>
  );
}
