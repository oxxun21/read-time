"use client";
import React, { useEffect, useState } from "react";
import s from "./searchContain.module.css";
import Image from "next/image";
import { searchAPI } from "@/lib/api/searchAPI";
import search_icon from "@/assets/search_icon.svg";

export default function SearchContain(props) {
  const [test, setTest] = useState(null);
  useEffect(() => {
    const testFun = async () => {
      try {
        const response = await searchAPI("미움받을 용기");
        setTest(response);
      } catch (e) {
        console.log(e);
      }
    };
    testFun();
  }, []);
  return (
    <section className={s.searchSection}>
      <h2>Search</h2>
      <form className={s.searchForm}>
        <label htmlFor="search" className="a11y-hidden">
          도서 검색
        </label>
        <input
          type="text"
          id="search"
          placeholder="기억에 남길 책을 검색해보세요"
        />
        <button type="submit">
          <Image src={search_icon} alt="검색 버튼" width={40} height={40} />
        </button>
      </form>
      <article>
        <p>{test?.documents[0].title}</p>
      </article>
    </section>
  );
}
