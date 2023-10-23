import React from "react";
import s from "./searchSeaction.module.css";
import Serach from "./serach";
import UserInfo from "../user/userInfo";

export default function SearchSeaction() {
  return (
    <section className={s.searchSection}>
      <UserInfo />
      <h2>Search</h2>
      <Serach />
    </section>
  );
}
