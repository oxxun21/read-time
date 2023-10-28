"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import { useSession } from "next-auth/react";
import TimeEditModal from "./timeeditmodal";
import s from "./calender.module.css";

export default function Calender() {
  const [value, onChange] = useState(new Date());
  const [record, setRecord] = useState();
  const [clickDay, setClickDay] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      const dataFetch = async () => {
        try {
          const response = await fetch("/api/getrecord", {
            cache: "no-store",
            credentials: "include",
          });
          const data = await response.json();
          setRecord(data);
          return data;
        } catch (error) {
          console.error(error);
        }
      };
      dataFetch();
    }
  }, [session]);

  let highlightList;
  if (record) {
    highlightList = record.map((i) => i.date);
  }

  const addContent = ({ date }) => {
    const contents = [];
    if (record) {
      const dateStr = moment(date).format("YYYY-MM-DD");
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

        contents.push(
          <p>
            {formattedHours}:{formattedMinutes}
          </p>
        );
      }
    }

    return <div>{contents}</div>;
  };

  return (
    <section>
      <p className={s.info}>
        시간 수정과 삭제는 해당 날짜를 눌러 진행해주세요.
      </p>
      <Calendar
        locale="ko"
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        tileContent={addContent}
        showNeighboringMonth={false}
        onClickDay={() => setClickDay(true)}
        formatDay={(locale, date) => moment(date).format("DD")}
        tileClassName={({ date, view }) => {
          if (
            record &&
            highlightList.find((x) => x === moment(date).format("YYYY-MM-DD"))
          ) {
            return "highlight";
          }
        }}
      />
      {clickDay && (
        <TimeEditModal
          setClickDay={setClickDay}
          value={value}
          record={record.filter(
            (item) => item.date === moment(value).format("YYYY-MM-DD")
          )}
        />
      )}
    </section>
  );
}
