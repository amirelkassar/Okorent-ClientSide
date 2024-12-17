"use client";
import React, { useEffect } from "react";
interface TimerProps {
  time: number;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}
function Timer({ time, seconds, setSeconds ,setStart}: TimerProps) {
  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }else{
      setStart(false)
    }
  }, [seconds]);
  const circleRadius = 13;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset =
    circleCircumference - (seconds / time) * circleCircumference;
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex justify-center items-center w-8 h-8">
        <p className="absolute text-green text-base font-SemiBold">{seconds}</p>
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r={circleRadius}
            fill="none"
            strokeWidth="1"
          ></circle>
          <circle
            cx="50%"
            cy="50%"
            r={circleRadius}
            fill="none"
            stroke="#88BA52"
            strokeWidth="2"
            strokeDasharray={circleCircumference}
            strokeDashoffset={progressOffset}
            style={{
              transition: "strokeDashoffset 1s linear",
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Timer;
