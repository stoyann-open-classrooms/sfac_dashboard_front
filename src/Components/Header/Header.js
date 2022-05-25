import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const timer = new Date();
      setTime(timer.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <header>
      <hgroup className="date-Time-container">
        <h2>{time}</h2>
      </hgroup>
    </header>
  );
}
