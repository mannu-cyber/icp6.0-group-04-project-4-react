import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-5 sticky top-0 left-0">
      <ThemeToggle />
      <img className="w-[40px]" src="/instagram.png" alt="" />
    </nav>
  );
};

export default Navbar;
