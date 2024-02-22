import React, { useState } from "react";
import { useHistory } from "react-router-use-history";
import google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Tweeter from "../assets/twitter.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const handleLogin = useHistory();

  const handleSignUp = () => {
    if (!email || !name || !password || !confirmPassword) {
      alert("Please fill in all the Fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    localStorage.setItem("userEmail", email);
    history.push("/otpVerification");
  };

  const login = () => {
    handleLogin.push("/login");

    console.log("hellow");
  };

  return (
    <div className="h-screen">
      <div className="container flex flex-col justify-center items-center h-full gap-[50px]">
        <h1 className="text-center text-[2vw]">Sign Up</h1>

        <form className="flex flex-col px-[3vw] gap-[15px]">
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            name="name"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email/ number"
          />
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="text "
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="password"
            placeholder="Create Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            onClick={handleSignUp}
            type="button"
            className="20px py-1 w-full mx-auto  rounded-[20px] bg-blue-500 hover:border-none"
          >
            {" "}
            Sign up
          </button>
        </form>

        <div className="other flex gap-9">
          <img src={google} alt="" />
          <img src={Facebook} alt="" />
          <img src={Tweeter} alt="" />
        </div>

        <p>
          Have account{" "}
          <span  className="cursor-pointer underline text-blue-500" onClick={login}>
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Signup;
