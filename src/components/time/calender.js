"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import { useSession } from "next-auth/react";

export default function Calender() {
  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  const [record, setRecord] = useState();
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
      <Calendar
        locale="ko"
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        tileContent={addContent}
        showNeighboringMonth={false}
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
    </section>
  );
}
