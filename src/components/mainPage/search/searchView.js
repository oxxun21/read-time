"use client";
import React, { useState } from "react";
import s from "./searchView.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bookDataState } from "@/lib/recoil/bookDataAtom";
import Image from "next/image";
import { selectedBookState } from "@/lib/recoil/selectedBookAtom";

export default function SearchView() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const setSelectedData = useSetRecoilState(selectedBookState);
  const bookData = useRecoilValue(bookDataState);

  // 책 소개 자세히 보기
  const handleContentClick = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  // 선택한 책 데이터 저장
  const handleSaveData = (idx) => {
    setSelectedData(bookData[idx]);
  };

  return (
    <article className={s.searchViewContain}>
      {bookData && <p>책 표지를 눌러 글을 남겨봐요.</p>}
      {bookData && (
        <ul>
          {bookData.map((i, idx) => (
            <li key={i.isbn} className={s.bookInfo}>
              <h4>{i.title}</h4>
              <button
                type="button"
                onClick={() => {
                  handleSaveData(idx);
                }}
              >
                <Image
                  src={i.thumbnail}
                  alt={i.title}
                  width={80}
                  height={110}
                />
              </button>
              <p
                className={expandedIndex === idx ? null : s.expanded}
                onClick={() => handleContentClick(idx)}
              >
                {i.contents ? `${i.contents}...` : "책 소개 없음"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
