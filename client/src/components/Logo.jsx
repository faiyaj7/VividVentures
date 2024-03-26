import React from "react";
import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      width={20}
      height={20}
      className="rounded-full w-full h-full"
    />
  );
};

export default Logo;
