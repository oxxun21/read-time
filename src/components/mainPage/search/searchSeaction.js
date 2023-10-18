import React from "react";
import s from "./searchSeaction.module.css";
import Image from "next/image";
import search_icon from "@/assets/search_icon.svg";
import { getBookSearch } from "@/lib/helpers/api-util";
import SearchView from "./searchView";

export default function SearchSeaction() {
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState(null);

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch(`/api/search?query=${search}`);
  //     console.log(res);
  //     if (res.ok) {
  //       setSearchResult(res);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <form className={s.searchForm}>
        <label htmlFor="search" className="a11y-hidden">
          도서 검색
        </label>
        <input
          type="text"
          id="search"
          placeholder="기억에 남길 책을 검색해보세요"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <Image src={search_icon} alt="검색 버튼" width={40} height={40} />
        </button>
      </form>
    </>
  );
}
