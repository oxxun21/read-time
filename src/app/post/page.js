"use client";
import React, { useState } from "react";
import s from "./post.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Post() {
  const params = useSearchParams();
  const router = useRouter();
  const [sentence, setSentence] = useState("");
  const title = params.get("title");
  const thumbnail = params.get("thumbnail");
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sentence) {
      alert("문장을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/api/savepost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: session.user.name,
          thumbnail: thumbnail,
          title: title,
          sentence: sentence,
        }),
      });

      if (response.ok) {
        alert("게시글 등록 완료!");
        router.push("/");
      } else {
        alert("게시글 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("데이터 저장 오류:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <form className={s.postForm} onSubmit={handleSubmit}>
      <Image src={thumbnail} alt={title} width={110} height={160} />
      <div className={s.posting}>
        <strong>{title}</strong>
        <textarea
          placeholder="기억에 남기고 싶은 문장을 적어주세요 (290자 까지 가능합니다.)"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          maxLength={290}
        />
        {/* 글자수 */}
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
}

export default Post;
