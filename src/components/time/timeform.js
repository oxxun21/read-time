"use client";
import React, { useRef, useState } from "react";
import s from "./timeform.module.css";
import { useSession } from "next-auth/react";

export default function Timeform() {
  const [date, setDate] = useState(getCurrentDate());
  const hoursRef = useRef();
  const minutesRef = useRef();
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hoursValue = hoursRef.current.value;
    const minutesValue = minutesRef.current.value;
    const formattedHours = hoursValue.toString().padStart(2, "0");
    const formattedMinutes = minutesValue.toString().padStart(2, "0");

    // api
    const formattedReadingTime = `${formattedHours}:${formattedMinutes}`;
    console.log("날짜:", date);
    console.log("독서 시간:", formattedReadingTime);

    try {
      const response = await fetch("/api/timerecord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: session.user.name,
          date: date,
          time: formattedReadingTime,
        }),
      });

      if (response.ok) {
        alert("기록 완료!");
      } else {
        alert("기록에 실패했습니다.");
      }
    } catch (error) {
      console.error("데이터 저장 오류:", error);
      alert("저장 중 오류가 발생했습니다.");
    } finally {
      hoursRef.current.value = "";
      minutesRef.current.value = "";
    }
  };

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <section className={s.timeSection}>
      <h2>오늘의 독서 시간 기록</h2>
      <form onSubmit={handleSubmit} className={s.timeForm}>
        <p>{date} 기록</p>
        <div className={s.tiemInputDiv}>
          <div className={s.timeInput}>
            <input
              type="number"
              id="hours"
              ref={hoursRef}
              min="0"
              max="23"
              placeholder="0 ~ 23 입력"
            />
            <label htmlFor="hours">시간</label>
          </div>
          <div className={s.timeInput}>
            <input
              type="number"
              id="minutes"
              ref={minutesRef}
              min="0"
              max="59"
              placeholder="0 ~ 59 입력"
            />
            <label htmlFor="minutes">분</label>
          </div>
        </div>
        <button type="submit" className={s.timeBtn}>
          저장하기
        </button>
      </form>
    </section>
  );
}
