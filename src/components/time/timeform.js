"use client";
import React, { useRef } from "react";
import s from "./timeform.module.css";
import moment from "moment";

export default function Timeform({ value, record, dataFetch }) {
  const hoursRef = useRef();
  const minutesRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hoursValue = hoursRef.current.value;
    const minutesValue = minutesRef.current.value;
    const formattedHours = hoursValue.toString().padStart(2, "0");
    const formattedMinutes = minutesValue.toString().padStart(2, "0");
    const formattedReadingTime = `${formattedHours}:${formattedMinutes}`;

    if (formattedHours === "00" && formattedMinutes === "00") {
      alert("시간을 입력해주세요!");
      return;
    }

    if (!record || record.length === 0) {
      try {
        const response = await fetch("/api/timerecord", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: moment(value).format("YYYY-MM-DD"),
            time: formattedReadingTime,
          }),
        });

        if (response.ok) {
          alert("기록 완료!");
          dataFetch();
        }
      } catch (error) {
        console.error("데이터 저장 오류:", error);
        alert("저장 중 오류가 발생했습니다.");
      }
    } else {
      try {
        const response = await fetch("/api/timerecord/edit", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: record[0]._id,
            time: formattedReadingTime,
          }),
        });

        if (response.ok) {
          alert("수정 완료!");
          dataFetch();
        }
      } catch (e) {
        console.error("데이터 저장 오류:", e);
        alert("저장 중 오류가 발생했습니다.");
      }
    }
    hoursRef.current.value = "";
    minutesRef.current.value = "";
  };

  const handleTimeDelete = async () => {
    try {
      const response = await fetch("/api/timerecord/remove", {
        method: "DELETE",
        body: JSON.stringify({
          _id: record[0]._id,
        }),
      });

      if (response.ok) {
        alert("삭제 완료!");
        dataFetch();
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className={s.timeSection}>
      <h2>오늘의 독서 시간 기록</h2>
      <form onSubmit={handleSubmit} className={s.timeForm}>
        <p>{moment(value).format("YYYY-MM-DD")} 기록</p>
        <p className={s.info}>캘린더를 눌러 수정과 삭제를 할 수 있어요.</p>
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
        <div className={s.timeBtnDiv}>
          {record.length >= 1 && (
            <button
              type="button"
              onClick={handleTimeDelete}
              className={s.timeRemove}
            >
              삭제하기
            </button>
          )}
          <button type="submit">저장하기</button>
        </div>
      </form>
    </section>
  );
}
