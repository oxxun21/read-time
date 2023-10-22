"use client";
import React, { useEffect, useState } from "react";
import s from "./searchView.module.css";
import Image from "next/image";
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
    setIsModalOpen(true);
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
      {searchResult && <p>책 표지를 눌러 글을 남겨봐요.</p>}
      {searchResult && (
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
                  <Image
                    src={book.thumbnail}
                    alt={book.title}
                    width={80}
                    height={110}
                  />
                </Link>
              ) : (
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  width={80}
                  height={110}
                  onClick={handleModal}
                />
              )}
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
