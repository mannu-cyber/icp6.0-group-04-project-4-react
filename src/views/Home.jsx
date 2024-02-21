import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-[500px]  h-screen border">
      <Navbar/>
      <h1 className="text-center">This is the home page</h1>
    </div>
  );
};

export default Home;
