import React from "react";
import s from "./searchSeaction.module.css";
import SerachForm from "./serachForm";

export default function SearchSeaction() {
  return (
    <section className={s.searchSection}>
      <h2>Search</h2>
      <SerachForm />
    </section>
  );
}
