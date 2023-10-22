"use client";
import React from "react";
import s from "./layoutNav.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LayoutNav() {
  const { data: session } = useSession();
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
            <button
              type="button"
              onClick={() => signIn("kakao")}
              className={s.button}
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
