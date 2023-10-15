"use client";
import React, { useRef } from "react";
import s from "./searchForm.module.css";
import Image from "next/image";
import { searchAPI } from "@/lib/api/searchAPI";
import search_icon from "@/assets/search_icon.svg";
import { useSetRecoilState } from "recoil";
import { bookDataState } from "@/lib/recoil/bookDataAtom";

export default function SearchForm() {
  const searchTitleRef = useRef();
  const setBookDataState = useSetRecoilState(bookDataState);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTitle = searchTitleRef.current.value;
    try {
      const res = await searchAPI(searchTitle);
      setBookDataState(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={s.searchForm} onSubmit={handleSearch}>
      <label htmlFor="search" className="a11y-hidden">
        도서 검색
      </label>
      <input
        type="text"
        id="search"
        placeholder="기억에 남길 책을 검색해보세요"
        ref={searchTitleRef}
      />
      <button type="submit">
        <Image src={search_icon} alt="검색 버튼" width={40} height={40} />
      </button>
    </form>
  );
}
