import React from "react";
import s from "./searchView.module.css";
import Image from "next/image";

export default function SearchView({ searchResult }) {
  // const [expandedIndex, setExpandedIndex] = useState(null);

  // // 책 소개 자세히 보기
  // const handleContentClick = (idx) => {
  //   if (expandedIndex === idx) {
  //     setExpandedIndex(null);
  //   } else {
  //     setExpandedIndex(idx);
  //   }
  // };

  // // 선택한 책 데이터 저장
  // const handleSaveData = (idx) => {
  //   setSelectedData(bookData[idx]);
  // };

  return (
    <article className={s.searchViewContain}>
      {/* {searchResult && <p>책 표지를 눌러 글을 남겨봐요.</p>}
      {searchResult && (
        <ul>
          {searchResult.map((i, idx) => (
            <li key={i.isbn} className={s.bookInfo}>
              <h4>{i.title}</h4>
              <button
                type="button"
                onClick={() => {
                  handleSaveData(idx);
                }}
              >
                <Image
                  src={i.thumbnail}
                  alt={i.title}
                  width={80}
                  height={110}
                />
              </button>
              <p
                className={expandedIndex === idx ? null : s.expanded}
                onClick={() => handleContentClick(idx)}
              >
                {i.contents ? `${i.contents}...` : "책 소개 없음"}
              </p>
            </li>
          ))}
        </ul>
      )} */}
    </article>
  );
}
