import React from "react";
import s from "./searchSection.module.css";
import Serach from "./serach";
import UserInfo from "../user/userInfo";

export default function SearchSection() {
  return (
    <section className={s.searchSection}>
      <UserInfo />
      <h2>Search</h2>
      <Serach />
    </section>
  );
}
