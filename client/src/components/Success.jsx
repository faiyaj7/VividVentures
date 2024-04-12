import React, { useEffect } from "react";
import sign from "../assets/writeSign.png";
import { Link } from "react-router-dom";


const Success = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <section className="flexContainer flex-col w-1/2 mx-auto gap-3 my-20">
      <img src={sign} alt="Right Sign" className="w-[45%]" />
      <h1 className="text-2xl font-medium ">Thank you for ordering!</h1>
      <p className="font-extralight text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        omnis?
      </p>
      <div className="flexContainer gap-10">
        <Link
          className="border border-slate-500 rounded-lg px-8 py-2 uppercase font-medium"
          to="/view"
        >
          View Order
        </Link>
        <Link
          className="border bg-green-700 rounded-lg px-8 py-2 uppercase text-white font-medium "
          to="/shop"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Success;
