import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Story from "../components/Story/Story";
import MainPage from "../components/MainPage/MainPage";
// import MainPage from '../components/MainPage/MainPage'

const Home = () => {
  return (
    <div className="w-[500px] overflow-x-hidden  h-screen border py-3 px-2">
      <Navbar />
      <Story />
<MainPage/>
  
      <Footer />
    </div>
  );
};

export default Home;
