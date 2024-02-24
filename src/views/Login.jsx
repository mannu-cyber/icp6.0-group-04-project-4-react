import React, { useState } from "react";
import { useHistory } from "react-router-use-history";
import google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Tweeter from "../assets/twitter.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");

    if (email === storedEmail) {
      alert("Login successful!");
      history.push("/home");
      return;
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleSignUpRedirect = () => {
    history.push("/");
  };

  return (
    <div className="h-screen">
      <div className="container flex flex-col justify-center items-center h-full gap-[50px]">
        <img src="/logo.png" alt="" />
        <h1 className="text-center text-[2vw]">Login</h1>

     

        <form className="flex flex-col px-[3vw] gap-[15px]">
          <input
            className="px-[20px] block mx-auto py-[5px] border rounded-[5px] w-[300px]"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter email/ number"
          />
          <input
            className="px-[20px] block mx-auto py-[5px] border rounded-[5px] w-[300px]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          <div className="p">
            {/* <p className="w-[90%] block mx-auto text-center">People who use our service may have uploaded your contact information to PremSangam. Learn More</p> */}
          </div>

          <p
            onClick={handleSignUpRedirect}
            className="text-center cursor-pointer text-blue-400 -mt-5"
          >
            Forgot pasword?
          </p>

          <button
            onClick={handleLogin}
            type="button"
            className="px-20px  py-1 w-[300px] mx-auto rounded-[20px] bg-blue-500 hover:border-none"
          >
            Login
          </button>

          <p onClick={handleSignUpRedirect} className="text-center">
            Don't have an account
            <span className="px-20px py-1 cursor-pointer mx-auto rounded-[20px] text-blue-500 underline hover:border-none">
              {" "}
              Sign Up
            </span>
          </p>

          <p className="text-center">or</p>
          <div className="other flex gap-9 justify-center">
            <img src={google} alt="" />
            <img src={Facebook} alt="" />
            <img src={Tweeter} alt="" />
          </div>
          <p className="text-center text-sm text-[#4d8d49]">Your login information is securely encrypted.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
