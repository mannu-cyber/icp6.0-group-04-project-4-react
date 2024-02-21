import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-[500px]  h-screen border py-3 px-2">
      <Navbar/>

      
      <h1 className="text-center">This is the home page</h1>
      <Footer/>
    </div>
  );
};

export default Home;
