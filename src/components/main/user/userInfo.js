import React from "react";
import Image from "next/image";
import s from "./userInfo.module.css";
import { getServerSession } from "next-auth";

export default async function UserInfo() {
  const session = await getServerSession();
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
