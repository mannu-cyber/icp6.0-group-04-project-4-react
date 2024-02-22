import React, { useState } from "react";
import { useHistory } from "react-router-use-history";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleVerifyOtp = () => {
    const otpNumber = parseInt(otp, 10);

    if (isNaN(otpNumber) || otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }
    history.push("/login");
  };

  return (
    <div className="h-screen">
      <div className="container flex flex-col justify-center items-center h-full gap-[50px]">
        <h1 className="text-center text-[2vw]">OTP Verification</h1>

        <form className="flex flex-col px-[3vw] gap-[15px]">
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />

          <button
            type="button"
            className="px-10 px py-1  mx-auto rounded-[20px] border "
          >
            Resend OTP
          </button>

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
