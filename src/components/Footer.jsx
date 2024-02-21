import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed	 bottom-7 left-[50%] flex gap-9 w-[470px] -translate-x-[50%] justify-evenly">
      <Link to="/">
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
      <Link to="/profile">
        <img src="user.png" alt="" />
      </Link>
    </footer>
  );
};

export default Footer;
