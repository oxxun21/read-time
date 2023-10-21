"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import s from "./postForm.module.css";
import { useRouter } from "next/navigation";

export default function PostForm() {
  const [loading, setLoading] = useState(true);
  const [fetchingBook, setFetchingBook] = useState();
  const [sentence, setSentence] = useState("");
  const router = useRouter();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch("/api/postBook", { cache: "no-store" });
        const data = await response.json();
        setFetchingBook(data[0].book);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
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
          thumbnail: fetchingBook.thumbnail,
          title: fetchingBook.title,
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
    <>
      {!loading ? (
        <form className={s.postForm} onSubmit={handleSubmit}>
          <Image
            src={fetchingBook.thumbnail}
            alt={fetchingBook.title}
            width={120}
            height={160}
          />
          <div className={s.posting}>
            <strong>{fetchingBook.title}</strong>
            <textarea
              placeholder="기억에 남기고 싶은 문장을 적어주세요"
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
            />
            <button type="submit">등록하기</button>
          </div>
        </form>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
