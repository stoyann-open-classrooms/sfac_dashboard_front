import React, { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setTime(time.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <header>
      <hgroup className="date-Time-container">
        <h2>{new Date().toLocaleDateString()}</h2>
        <h2>{time}</h2>
      </hgroup>
    </header>
  );
}
