"use client";
import React, { useState } from "react";
import s from "./search.module.css";
import Image from "next/image";
import search_icon from "@/assets/search_icon.svg";
import SearchView from "./searchView";

export default function Serach() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const rest_key = process.env.RESTAPI_KEY;

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://dapi.kakao.com/v3/search/book?query=${search}`,
        {
          method: "GET",
          headers: {
            Authorization: ` KakaoAK ${rest_key}`,
          },
          cache: "no-store",
        }
      );

      if (response.ok) {
        const resJson = await response.json();
        const filterData = resJson.documents.filter((item) => item.thumbnail);
        console.log(filterData);
        setSearchResult(filterData);
      } else {
        console.error("API 호출 실패:", response.status);
      }
    } catch (error) {
      console.error("API 호출 실패:", error);
    } finally {
      setLoading(false);
      setSearch("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <>
      <form className={s.searchForm} onSubmit={handleSubmit}>
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
          <Image src={search_icon} alt="검색 버튼" width={35} height={35} />
        </button>
      </form>
      <SearchView searchResult={searchResult} />
    </>
  );
}
