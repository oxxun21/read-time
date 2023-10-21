"use client";
import React, { useEffect, useState } from "react";
import s from "./post.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function Post() {
  const params = useSearchParams();
  const router = useRouter();
  const [sentence, setSentence] = useState("");

  const title = params.get("title");
  const thumbnail = params.get("thumbnail");

  useEffect(() => {
    console.log(title);
    console.log(thumbnail);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sentence) {
      alert("문장을 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("/api/savePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thumbnail: thumbnail,
          title: title,
          sentence: sentence,
        }),
      });

      if (response.ok) {
        alert("데이터가 성공적으로 저장되었습니다.");
        router.push("/");
      } else {
        alert("데이터 저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("데이터 저장 오류:", error);
      alert("데이터 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <form className={s.postForm} onSubmit={handleSubmit}>
      <Image src={thumbnail} alt={title} width={120} height={160} />
      <div className={s.posting}>
        <strong>{title}</strong>
        <textarea
          placeholder="기억에 남기고 싶은 문장을 적어주세요"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
        <button type="submit">등록하기</button>
      </div>
    </form>
  );
}

export default Post;
