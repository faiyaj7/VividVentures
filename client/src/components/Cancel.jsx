import React from "react";
import wrongSign from "../assets/wrongSign.png";
import { Link } from "react-router-dom";
const Cancel = () => {
  return  <section className="flexContainer flex-col w-1/2 mx-auto gap-3 my-20">
  <img src={wrongSign} alt="Right Sign" className="w-[45%]" />
  <h1 className="text-2xl font-medium ">Your Purchase did not go in!</h1>
  <p className="font-extralight text-lg">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
    omnis?
  </p>
  <div className="flexContainer gap-10">
    <Link
      className="border border-slate-500 rounded-lg px-8 py-2 uppercase font-medium"
      to="/"
    >
      Back Home
    </Link>
    <Link
      className="border bg-red-700 rounded-lg px-8 py-2 uppercase text-white font-medium "
      to="/shop"
    >
      Go to Shop
    </Link>
  </div>
</section>
};

export default Cancel;
