import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed h-[60px]	items-center bottom-0 left-[50%] flex gap-9 w-[483px] -translate-x-[50%] justify-evenly ">
      <Link to="/home">
        <img className="w-[25px]" src="home.png" alt="" />
      </Link>
      <Link to="/massage">
        <img className="w-[25px]" src="chat.png" alt="" />
      </Link>
      <Link to="/add">
        <img className="w-[25px]" src="add.png" alt="" />
      </Link>
      <Link to="/match">
        <img className="w-[25px]" src="match.png" alt="" />
      </Link>
      <Link to="/user">
        <img className="w-[25px]" src="user.png" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
