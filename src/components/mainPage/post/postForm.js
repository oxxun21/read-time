"use client";
import React from "react";
import { selectedBookState } from "@/lib/recoil/selectedBookAtom";
import { useRecoilValue } from "recoil";
import s from "./postForm.module.css";
import Image from "next/image";

function PostForm() {
  const selectedBookData = useRecoilValue(selectedBookState);

  console.log(selectedBookData);

  return (
    <>
      {selectedBookData ? (
        <form className={s.postForm}>
          <Image
            src={selectedBookData.thumbnail}
            alt={selectedBookData.title}
            width={80}
            height={110}
          />
          <div className={s.posting}>
            <strong>{selectedBookData.title}</strong>
            <textarea placeholder="기억에 남기고 싶은 문장을 적어주세요" />
            <button type="submit">등록하기</button>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default PostForm;
