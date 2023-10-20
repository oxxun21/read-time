"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import s from "./customLayout.module.css";

export default function Logo() {
  const [showTime, setShowTime] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  const handleLogoHover = () => {
    setShowTime(true);
  };

  const handleLogoMouseLeave = () => {
    setShowTime(false);
  };

  useEffect(() => {
    if (showTime) {
      const interval = setInterval(() => {
        setCurrentTime(getCurrentTime());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [showTime]);
  return (
    <div
      onMouseEnter={handleLogoHover}
      onMouseLeave={handleLogoMouseLeave}
      className={s.logoContainer}
    >
      {showTime ? (
        <p>{currentTime}</p>
      ) : (
        <Image
          src={logo}
          alt="Read Time 로고"
          width={130}
          height={80}
          priority="high"
        />
      )}
    </div>
  );
}
