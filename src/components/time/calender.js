"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import Timeform from "./timeform";

export default function Calender() {
  const [value, onChange] = useState(new Date());
  const [record, setRecord] = useState();

  const dataFetch = async () => {
    try {
      const response = await fetch("/api/getrecord", {
        cache: "no-store",
      });
      const data = await response.json();
      setRecord(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  let highlightList;
  if (record) {
    highlightList = record.map((i) => i.date);
  }

  const addContent = ({ date }) => {
    const contents = [];
    if (record) {
      const dateStr = moment(date).format("YYYY-MM-DD");

      for (const item of record) {
        if (item.date === dateStr) {
          contents.push(<p key={item._id}>{item.time}</p>);
        }
      }
    }

    return <div>{contents}</div>;
  };

  return (
    <>
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
            if (record && highlightList.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return "highlight";
            }
          }}
        />
      </section>
      <Timeform
        value={value}
        record={record ? record.filter((item) => item.date === moment(value).format("YYYY-MM-DD")) : []}
        dataFetch={dataFetch}
      />
    </>
  );
}
