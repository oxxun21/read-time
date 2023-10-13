import React from "react";
import s from "./layoutNav.module.css";
import Link from "next/link";

export default function LayoutNav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link href="/">Go Home</Link>
        </li>
        <li>
          <Link href="/timeCheck">Time check</Link>
        </li>
        <li>
          <Link href="/signUp">SignUp</Link>
        </li>
        <li>
          <Link href="/signIn">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
