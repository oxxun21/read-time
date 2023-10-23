"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";

export default function Calender() {
  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  const activeDate = moment(value).format("YYYY-MM-DD");
  const [isClient, setIsClient] = useState(false);

  // 책 읽은 날 하이라이트 넣기
  const mark = [
    '2023-10-22',
    '2023-10-18',
  ]


  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section>
      {isClient ? (
        <Calendar
          locale="ko"
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          // tileContent={addContent}
          showNeighboringMonth={false}
          formatDay={(locale, date) => moment(date).format("DD")}
          tileClassName={({ date, view }) => {
            if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return "highlight";
            }
          }}
        />
      ) : null}
    </section>
  );
}
