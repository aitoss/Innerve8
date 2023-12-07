import React, { useState, useEffect } from "react";

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
    <div className="flex flex-row w-5/12 h-full justify-between gap-4 pt-14 max-w-5xl">
      <div className="">
        <span className="flex flex-col w-[100px] h-[100px] justify-center bg-gradient-to-t from-[#DF6E47] via-[#E7885A] to-[#F0A36D] rounded-xl ">
          <p className="text-[hsla(0,0%,100%,90%)] flex justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl">{days}</p>
          <p className="text-[hsla(0,0%,100%,90%)] flex justify-center">Days</p>
        </span>
      </div>
      <div>
        <span className="flex flex-col  w-[100px] h-[100px] justify-center bg-gradient-to-t from-[#8FB781] via-[#90C280] to-[#C1D29D] rounded-xl">
          <p className=" flex justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl">{hours}</p>
          <p className=" flex justify-center">Hours</p>
        </span>
      </div>
      <div>
        <span className="flex flex-col  w-[100px] h-[100px] justify-center bg-gradient-to-t from-[#ca80b1] via-[#F27CCA] to-[#f5aedd] rounded-xl">
          <p className=" flex justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl">{minutes}</p>
          <p className=" flex justify-center">Minutes</p>
        </span>
      </div>
      <div>
        <span className="flex flex-col  w-[100px] h-[100px] justify-center bg-gradient-to-t from-[#FDDE56] via-[#FFEA8C] to-[#FDF0B7] rounded-xl">
          <p className="text-[hsla(0,0%,100%,90%)] flex justify-center text-lg md:text-3xl lg:text-4xl xl:text-5xl">{seconds}</p>
          <p className="text-[hsla(0,0%,100%,90%)] flex justify-center">Seconds</p>
        </span>
      </div>
    </div>
  );
}
