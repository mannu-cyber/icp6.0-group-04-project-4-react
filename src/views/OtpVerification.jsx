import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-use-history";

const CountdownTimer = ({ minutes, seconds, onTimeout }) => {
  const [countdown, setCountdown] = useState(minutes * 60 + seconds);



  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      onTimeout();
    }

    return () => clearInterval(timer);
  }, [countdown, onTimeout]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const displayMinutes = Math.floor(countdown / 60);
  const displaySeconds = countdown % 60;

  return (
    <div>
      <p className="text-center">
        Time remaining: {formatTime(displayMinutes)}:
        {formatTime(displaySeconds)}
      </p>
    </div>
  );
};

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const history = useHistory();

  const handleVerifyOtp = () => {
    const otpNumber = parseInt(otp, 10);

    if (isNaN(otpNumber) || otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }

    history.push("/login");
  };

  const handleResendOtp = () => {
    setIsTimerExpired(false);
    setOtp("");
  };

  const handleTimeout = () => {
    setIsTimerExpired(true);
  };

  const timerMinutes = 2;
  const timerSeconds = 0;

  return (
    <div className="h-screen">
      <div className="container flex flex-col justify-center items-center h-full gap-[50px]">

<img src="/logo.png" alt="" />

        <h1 className="text-center text-[2vw] font-bold">OTP Verification</h1>

<p className="text-center w-[90%] -my-5">A One Time Password has been sent to the user's registered mobile number or email address.</p>


        <form className="flex flex-col px-[3vw] gap-[15px]">
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 4 digit OTP"
          />

          {!isTimerExpired ? (
            <CountdownTimer
              minutes={timerMinutes}
              seconds={timerSeconds}
              onTimeout={handleTimeout}
            />
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className="px-10 px py-1 mx-auto rounded-[20px] border"
            >
              Resend OTP
            </button>
          )}

          <button
            onClick={handleVerifyOtp}
            type="button"
            className="px-20px py-1 w-full mx-auto rounded-[20px] bg-blue-500 hover:border-none"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
