import React, { useState, useEffect } from "react";
import "./componentCSS.css";


export default function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date("2024-02-09T00:00:00Z");
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="flex flex-row h-fit justify-between pt-14 timer-width select-none">
      <span className="flex flex-col w-14 h-14 justify-center border-2 border-[#ffffff40] bg-dayColor rounded-md sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 timer-days">
        <p className="text-white flex justify-center timer-count">{days}</p>
        <p className="text-white flex justify-center  timer-day">Days</p>
      </span>
      <span className="flex flex-col  w-14 h-14 justify-center border-2 border-[#ffffff40] bg-hourColor rounded-md sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 timer-hours">
        <p className="text-white flex justify-center timer-count">{hours}</p>
        <p className="text-white flex justify-center timer-day">Hours</p>
      </span>
      <span className="flex flex-col  w-14 h-14 justify-center border-2 border-[#ffffff40] bg-minuteColor rounded-md sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 timer-minutes">
        <p className="text-white flex justify-center timer-count">{minutes}</p>
        <p className="text-white flex justify-center timer-day">Minutes</p>
      </span>
      <span className="flex flex-col  w-14 h-14 justify-center border-2 border-[#ffffff40] bg-secondColor rounded-md sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-24 xl:h-24 timer-seconds">
        <p className="text-white flex justify-center timer-count">{seconds}</p>
        <p className="text-white flex justify-center timer-day">Seconds</p>
      </span>
    </div>
  );
}
