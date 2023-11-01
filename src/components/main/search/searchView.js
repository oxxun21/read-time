"use client";
import React, { useState } from "react";
import s from "./searchView.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal/modal";

export default function SearchView({ searchResult }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleContentClick = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <article className={s.searchViewContain}>
      {!searchResult || searchResult.length === 0 ? (
        <p className={s.noBooks}>오늘 기억하고 싶은 문장은 무엇인가요?</p>
      ) : (
        <>
          <p>책 표지를 눌러 글을 남겨봐요.</p>
          <ul>
            {searchResult.map((book, idx) => (
              <li key={book.isbn} className={s.bookInfo}>
                <strong>{book.title}</strong>
                {session ? (
                  <Link
                    href={{
                      pathname: "/post",
                      query: { title: book.title, thumbnail: book.thumbnail },
                    }}
                  >
                    <img src={book.thumbnail} alt={book.title}  />
                  </Link>
                ) : (
                  <img src={book.thumbnail} alt={book.title} onClick={handleModal} />
                )}
                <p className={expandedIndex === idx ? null : s.expanded} onClick={() => handleContentClick(idx)}>
                  {book.contents ? `${book.contents}...` : "책 소개 없음"}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <p>게시글 등록은 로그인 후에 이용하실 수 있습니다.</p>
          <button type="button" onClick={closeModal} className={s.modalBtn}>
            닫기
          </button>
        </Modal>
      )}
    </article>
  );
}
