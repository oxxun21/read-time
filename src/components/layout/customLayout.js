import React from "react";
import s from "./customLayout.module.css";
import Link from "next/link";
import Image from "next/image";
import LayoutNav from "./layoutNav";
import logo from "@/assets/logo.svg";

export default function CustomLayout({ children }) {
  return (
    <section className={s.layout}>
      <header className={s.header}>
        <h1>
          <Link href="/">
            <Image src={logo} alt="Read Time 로고" width={130} height={80} />
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
