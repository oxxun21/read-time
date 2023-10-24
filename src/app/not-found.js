import React from "react";
import s from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={s.notfound}>
      <strong>404</strong>
      <p>여기가 어디지</p>
    </div>
  );
}
