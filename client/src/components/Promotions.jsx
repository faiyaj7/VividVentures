import React from "react";
import toy from "../assets/toy.webp";
import wallclock from "../assets/wallclock.webp";
const Promotions = () => {
  return (
    <section className="hidden lg:block px-4 mt-7 mb-10">
      <div className="h-[25vh] grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 justify-center">
        <div className="w-full h-full bg-slate-300 relative rounded-xl">
          <h1 className="w-full text-orange-700 font-bold tracking-widest text-4xl text-center absolute top-5">
            Special Offer
          </h1>
          <h6 className="absolute top-14 left-[29%] w-full text-lg ">
            On <span className="font-semibold">Furniture</span>
          </h6>
          <h6 className="absolute bottom-3 text-base  text-center left-[35%] text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            placeat.
          </h6>
        </div>
        <div className="w-full h-[25vh] bg-red-500 rounded-xl">
          <img
            loading="lazy"
            width={200}
            height={200}
            src={toy}
            alt="toy"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="w-full h-[25vh] bg-lime-400/55 rounded-xl relative">
          <img
            loading="lazy"
            width={200}
            height={200}
            src={wallclock}
            alt="wallclock"
            className="w-full object-cover h-full rounded-xl"
          />
          <p className="backdrop-blur-sm absolute top-0 w-full h-full text-lg text-wrap text-red-700 font-semibold text-center">
            Seiko Melodies in Motion Wall Clock, Golden Chandelier
          </p>
          <div className="absolute bottom-3 flexContainer left-[50%] -translate-x-[50%] gap-5">
            <span className="text-xl rounded-full  bg-green-700 text-center">
              15,000 BDT
            </span>
            <span className="line-through text-xl rounded-full bg-red-700 text-center">
              34,000 BDT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
