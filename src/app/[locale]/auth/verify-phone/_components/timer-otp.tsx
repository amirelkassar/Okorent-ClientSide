"use client";
import Timer from "@/src/components/timer";
import React, { useState } from "react";
interface TimerOtpProps {
  onSubmitReSendOTP: () => void;
}
function TimerOtp({ onSubmitReSendOTP }: TimerOtpProps) {
  const [seconds, setSeconds] = useState(60);
  const [start, setStart] = useState(true);
  return (
    <div className="flex items-center  py-5">
      <h3 className="flex items-center flex-wrap gap-1 font-Light">
        Didn’t receive a code?
        {start ? (
          <div className="flex items-center gap-1">
            <p className="text-green font-SemiBold text-base">
              Request another one after
            </p>
            <Timer
              setSeconds={setSeconds}
              setStart={setStart}
              seconds={seconds}
              time={60}
            />
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              onSubmitReSendOTP();
              setSeconds(60);
              setStart(true);
              console.log("send agin");
            }}
            className="text-blue font-Bold"
          >
            Sent new code
          </button>
        )}
      </h3>
    </div>
  );
}

export default TimerOtp;
