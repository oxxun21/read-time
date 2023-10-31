import React from "react";
import s from "./searchSection.module.css";
import Search from "./search";
import UserInfo from "../user/userInfo";

export default function SearchSection() {
  return (
    <section className={s.searchSection}>
      <UserInfo />
      <h2>Search</h2>
      <Search />
    </section>
  );
}
