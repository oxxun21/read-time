"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import s from "./timeeditmodal.module.css";

export default function TimeEditModal({ setClickDay, value, record }) {
  const [changeHour, setChangeHour] = useState("");
  const [changeMinutes, setChangeMinutes] = useState("");

  useEffect(() => {
    if (record) {
      const dateStr = moment(value).format("YYYY-MM-DD");
      const itemsForDate = record.filter((item) => item.date === dateStr);

      if (itemsForDate.length > 0) {
        const totalMinutes = itemsForDate.reduce((total, item) => {
          const [hours, minutes] = item.time.split(":");
          return total + parseInt(hours) * 60 + parseInt(minutes);
        }, 0);

        const totalHours = Math.floor(totalMinutes / 60);
        const remainingMinutes = totalMinutes % 60;

        const formattedHours = totalHours.toString().padStart(2, "0");
        const formattedMinutes = remainingMinutes.toString().padStart(2, "0");

        setChangeHour(formattedHours);
        setChangeMinutes(formattedMinutes);
      }
    }
  }, []);

  console.log(changeHour);
  console.log(changeMinutes);

  return (
    <Modal closeModal={() => setClickDay(false)}>
      <p>{moment(value).format("YYYY년 MM월 DD일")}</p>
      <div className={s.tiemInputDiv}>
        <div className={s.timeInput}>
          <input
            type="number"
            id="changeHour"
            value={changeHour}
            onChange={(e) => setChangeHour(e.target.value)}
          />
          <label htmlFor="changeHour">시간</label>
        </div>
        <div className={s.timeInput}>
          <input
            type="number"
            id="changeMinutes"
            value={changeMinutes}
            onChange={(e) => setChangeMinutes(e.target.value)}
          />
          <label htmlFor="changeMinutes">분</label>
        </div>
      </div>
      <div className={s.btnDiv}>
        <button type="">삭제하기</button>
        <button type="">수정하기</button>
      </div>
    </Modal>
  );
}
