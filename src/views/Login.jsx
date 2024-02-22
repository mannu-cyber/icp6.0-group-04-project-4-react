import React, { useState } from "react";
import { useHistory } from "react-router-use-history";

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
        <h1 className="text-center text-[2vw]">Login</h1>

        <form className="flex flex-col px-[3vw] gap-[15px]">
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter email/ number"
          />
          <input
            className="px-[20px] py-[5px] border rounded-[5px] w-[300px]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          <button
            onClick={handleLogin}
            type="button"
            className="px-20px py-1 w-full mx-auto rounded-[20px] bg-blue-500 hover:border-none"
          >
            Login
          </button>

          <button
            onClick={handleSignUpRedirect}
            type="button"
            className="px-20px py-1 w-full mx-auto rounded-[20px] bg-blue-500 hover:border-none"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
