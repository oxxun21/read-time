"use client";
import React, { useState } from "react";
import s from "./post.module.css";
import { useRouter } from "next/navigation";

function Post(props) {
  const params = props.searchParams;
  const router = useRouter();
  const [sentence, setSentence] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const title = params.title;
  const thumbnail = params.thumbnail;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmit) return;

    setIsSubmit(true);

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
          thumbnail: thumbnail,
          title: title,
          sentence: sentence,
        }),
      });

      if (!response.ok) {
        alert("게시글 등록 중 문제가 발생하였습니다.")
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      alert("게시글 등록 완료!");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <form className={s.postForm} onSubmit={handleSubmit}>
      <img src={thumbnail} alt={title} />
      <div className={s.posting}>
        <strong>{title}</strong>
        <textarea
          placeholder="기억에 남기고 싶은 문장을 적어주세요 (290자 까지 가능합니다.)"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          maxLength="290"
          className={s.scrollbar}
        />
        <div className={s.align}>
          <p>{sentence.length} / 290 글자</p>
          <button type="submit">등록하기</button>
        </div>
      </div>
    </form>
  );
}

export default Post;
