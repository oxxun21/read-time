"use client";
import React, { useState } from "react";
import s from "./searchView.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SearchView({ searchResult }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // 책 소개 자세히 보기
  const handleContentClick = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
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
              <Link
                href={{
                  pathname: "/post",
                  query: { title: book.title, thumbnail: book.thumbnail },
                }}
              >
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  width={80}
                  height={110}
                />
              </Link>
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
