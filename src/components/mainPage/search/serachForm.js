"use client";
import React, { useEffect, useState } from "react";
import s from "./searchForm.module.css";
import Image from "next/image";
import search_icon from "@/assets/search_icon.svg";

export default function SerachForm() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log(search);
    setLoading(true);
    try {
      const response = await fetch(`/api/search?search=${search}`, {
        method: "GET", // GET 요청으로 수정
      });
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      } else {
        console.error("API 호출 실패:", response.status);
      }
    } catch (error) {
      console.error("API 호출 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      handleSearch();
    }
  }, [search]);

  return (
    <form className={s.searchForm} onSubmit={handleSearch}>
      <label htmlFor="search" className="a11y-hidden">
        도서 검색
      </label>
      <input
        type="text"
        id="search"
        placeholder="기억에 남길 책을 검색해보세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <Image src={search_icon} alt="검색 버튼" width={40} height={40} />
      </button>
    </form>
  );
}
