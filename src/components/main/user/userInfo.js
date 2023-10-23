"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import s from "./userInfo.module.css";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <article className={s.userArticle}>
          <Image
            src={session.user.image}
            alt={`${session.user.name}님의 프로필 이미지`}
            width={30}
            height={30}
          />
          <span>{session.user.name}님 안녕하세요!</span>
        </article>
      ) : null}
    </>
  );
}
