"use client";
import React from "react";
import s from "./searchView.module.css";
import { useRecoilValue } from "recoil";
import { bookDataState } from "@/lib/recoil/bookDataAtom";
import Image from "next/image";

export default function SearchView() {
  const bookData = useRecoilValue(bookDataState);
  console.log(bookData);
  return (
    <article className={s.searchViewContain}>
      {bookData && (
        <ul>
          {bookData.map((i) => (
            <li>
              <Image src={i.thumbnail} alt={i.title} width={80} height={110} />
              <h4>{i.title}</h4>
              <p>{i.contents}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
