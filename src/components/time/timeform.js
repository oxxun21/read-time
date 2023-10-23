"use client";
import React, { useState } from "react";
import s from "./timeform.module.css";

export default function Timeform() {
  const [date, setDate] = useState(getCurrentDate());
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();

  // input 숫자 유효성 로직 필요
  const handleHoursChange = (e) => {
    const newHours = parseInt(e.target.value, 10);
    setHours(newHours);
  };

  const handleMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value, 10);
    setMinutes(newMinutes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // api
    const formattedReadingTime = `${hours}시간 ${minutes}분`;
    console.log("날짜:", date);
    console.log("독서 시간:", formattedReadingTime);
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
              value={hours}
              onChange={handleHoursChange}
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
              value={minutes}
              onChange={handleMinutesChange}
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
