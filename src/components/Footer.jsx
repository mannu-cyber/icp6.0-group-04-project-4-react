import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed h-[60px]	items-center bottom-0 left-[50%] flex gap-9 w-[483px] -translate-x-[50%] justify-evenly bg-slate-100">
      <Link to="/home">
        <img src="home.png" alt="" />
      </Link>
      <Link to="/massage">
        <img src="chat.png" alt="" />
      </Link>
      <Link to="/add">
        <img src="add.png" alt="" />
      </Link>
      <Link to="/match">
        <img src="match.png" alt="" />
      </Link>
      <Link to="/user">
        <img src="user.png" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
