"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import { useSession } from "next-auth/react";

export default function Calender() {
  const curDate = new Date();
  const [value, onChange] = useState(curDate);
  const [isClient, setIsClient] = useState(false);
  const [record, setRecord] = useState();
  const { data: session } = useSession();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (session) {
      const dataFetch = async () => {
        try {
          const response = await fetch("/api/getrecord", {
            cache: "no-store",
            credentials: "include",
          });
          const data = await response.json();
          console.log(data);
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
      record.forEach((item) => {
        if (item.date === moment(date).format("YYYY-MM-DD")) {
          contents.push(<p>{item.time}</p>);
        }
      });
    }
    return <div>{contents}</div>;
  };

  return (
    <section>
      {isClient ? (
        <>
          {record && (
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
                  highlightList.find(
                    (x) => x === moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return "highlight";
                }
              }}
            />
          )}
        </>
      ) : null}
    </section>
  );
}
