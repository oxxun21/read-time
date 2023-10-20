"use client";
import React, { useState } from "react";
import s from "./searchView.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchView({ searchResult }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const router = useRouter();

  // 책 소개 자세히 보기
  const handleContentClick = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  // 선택한 책 데이터 저장
  const handleSaveData = async (book) => {
    console.log(book);
    try {
      const response = await fetch("/api/saveBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ book }),
      });
      if (!response.ok) {
        return new Error("책 저장 실패");
      }

      const data = await response.json();
      console.log(data);
      router.push("/post");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className={s.searchViewContain}>
      {searchResult && <p>책 표지를 눌러 글을 남겨봐요.</p>}
      {searchResult && (
        <ul>
          {searchResult.map((book, idx) => (
            <li key={book.isbn} className={s.bookInfo}>
              <strong>{book.title}</strong>
              <button
                type="button"
                onClick={() => {
                  handleSaveData(book);
                }}
              >
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  width={80}
                  height={110}
                />
              </button>
              <p
                className={expandedIndex === idx ? null : s.expanded}
                onClick={() => handleContentClick(idx)}
              >
                {book.contents ? `${book.contents}...` : "책 소개 없음"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
