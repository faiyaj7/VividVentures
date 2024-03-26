import React from "react";
import sponsor1 from "../assets/sponsor1.webp";
import sponsor2 from "../assets/sponsor2.webp";
import sponsor3 from "../assets/sponsor3.webp";
import sponsor4 from "../assets/sponsor4.webp";
import sponsor5 from "../assets/sponsor5.webp";
import sponsor6 from "../assets/sponsor6.webp";
import sponsor7 from "../assets/sponsor7.webp";
import sponsor8 from "../assets/sponsor8.webp";
import sponsor9 from "../assets/sponsor9.webp";
import sponsor10 from "../assets/sponsor10.webp";
const Sponsors = () => {
  return (
    <section className="flexContainer gap-4 overflow-hidden flex-col mt-5">
      <h1 className="text-center w-full text-6xl text-black/20 tracking-wider">
        Sponsors
      </h1>
      <div className="w-full slide-from-left-to-right flexContainer">
        <img src={sponsor1} alt="" />
        <img src={sponsor2} alt="" />
        <img src={sponsor3} alt="" />
        <img src={sponsor4} alt="" />
        <img src={sponsor5} alt="" />
        <img src={sponsor6} alt="" />
        <img src={sponsor7} alt="" />
        <img src={sponsor8} alt="" />
        <img src={sponsor9} alt="" />
        <img src={sponsor10} alt="" />
      </div>
    </section>
  );
};

export default Sponsors;
