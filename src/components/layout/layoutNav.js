import React from "react";
import s from "./layoutNav.module.css";
import Link from "next/link";
import SignInBtn from "./signinbtn";
import SignOutBtn from "./signoutbtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LayoutNav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className={s.nav}>
      <ul>
        {session && (
          <li>
            <Link href="/timecheck">Time check</Link>
          </li>
        )}
        {session ? (
          <li>
            <SignOutBtn />
          </li>
        ) : (
          <li>
            <SignInBtn />
          </li>
        )}
      </ul>
    </nav>
  );
}
