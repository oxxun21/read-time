"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import s from "./timeeditmodal.module.css";
import { useSession } from "next-auth/react";

export default function TimeEditModal({ setClickDay, value, record }) {
  const [changeHour, setChangeHour] = useState("");
  const [changeMinutes, setChangeMinutes] = useState("");
  const { data: session } = useSession();

  console.log(record);

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

  const handleTimeEdit = async () => {
    const formattedHours = changeHour.toString().padStart(2, "0");
    const formattedMinutes = changeMinutes.toString().padStart(2, "0");

    const formattedReadingTime = `${formattedHours}:${formattedMinutes}`;

    if (!record || record.length === 0) {
      try {
        const response = await fetch("/api/timerecord", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: session.user.name,
            date: moment(value).format("YYYY-MM-DD"),
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
        } else {
          alert("수정에 실패했습니다.");
        }
      } catch (e) {
        console.error("데이터 저장 오류:", error);
        alert("저장 중 오류가 발생했습니다.");
      } finally {
        setClickDay(false);
      }
    }
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
        ref;
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (e) {
      console.error("데이터 삭제 오류:", error);
      alert("삭제 중 오류가 발생했습니다.");
    } finally {
      setClickDay(false);
    }
  };

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
        <button type="button" onClick={handleTimeDelete}>
          삭제하기
        </button>
        <button type="button" onClick={handleTimeEdit}>
          수정하기
        </button>
      </div>
    </Modal>
  );
}
