import React from "react";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiInstagramLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="bg-slate-400/20 w-full flexContainer flex-col gap-4 mt-5">
      <Link to="/" className="w-[5%] mt-10">
        <Logo />
      </Link>
      <div className="w-1/2 text-sm text-slate-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        corporis doloribus natus a exercitationem facere earum aliquam minima,
        perspiciatis laborum!
      </div>
      <div className="flexContainer gap-4 text-lg text-slate-500">
        <RiFacebookCircleFill />
        <RiInstagramLine />
        <RiTwitterXLine />
      </div>
      <div className="flexContainer gap-5 flex-col">
        <div className="flexContainer flex-col lg:flex-row gap-7 text-slate-400/75">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">My Account</Link>
          <Link to="/">Store Location</Link>
          <Link to="/">Search Terms</Link>
        </div>
        <div className="flexContainer flex-col lg:flex-row gap-5 text-slate-400/75">
          <Link to="/">Help & FAQs</Link>
          <Link to="/">Gift Cards</Link>
          <Link to="/">Shopping & Delivery</Link>
          <Link to="/">Refund Policy</Link>
        </div>
        <h1 className="w-full text-center text-slate-400/65 mb-7">
          @ All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
