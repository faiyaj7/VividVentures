import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // import required modules
import { Pagination } from "swiper/modules";
import sofa from "../assets/hero-sofa.webp";
import samsung from "../assets/samsung.webp";
const HeroBanner = () => {
  return (
    <section className="lg:mt-0 mt-10 px-0 lg:px-4">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[60vh] bg-slate-500 relative">
            <img
              loading="lazy"
              width={200}
              height={200}
              src={sofa}
              alt="herobanner"
              className="object-cover w-full h-full"
            />
            <div className="backdrop-blur-lg absolute w-full text-center bottom-[50%] left-[50%] -translate-x-[50%]  translate-y-[50%]">
              <h1 className=" font-semibold tracking-wide">
                {new Date().getFullYear()} &apos;s New Collection
              </h1>
              <h4 className="text-lg font-bold">Two Seater Furnished Sofa</h4>
              <div className="flexContainer !justify-center gap-5">
                <h3 className="text-3xl">50,000 BDT</h3>
                <h3 className="text-3xl line-through">1,00,000 BDT</h3>
              </div>

              <p>modern statement piece</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[60vh] bg-slate-500 relative">
            <img
              loading="lazy"
              width={200}
              height={200}
              src={samsung}
              alt="herobanner"
              className="object-cover w-full h-full"
            />
            <div className=" absolute w-full  bottom-[50%] left-[50%] -translate-x-[50%]  translate-y-[50%] ml-5 ">
              <h1 className=" font-semibold tracking-wide text-white text-xl">
                {new Date().getFullYear()} &apos;s New Collection
              </h1>
              <h4 className=" font-bold text-white text-3xl">
                Samsung S23 Ultra
              </h4>
              <div className="flexContainer !justify-start gap-8">
                <h3 className="text-white text-3xl">1,50,000 BDT</h3>
                <h3 className="text-white text-3xl line-through">
                  2,50,000 BDT
                </h3>
              </div>

              <p className="text-white text-lg">modern statement piece</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[60vh] bg-slate-500 relative">
            <img
              src={samsung}
              alt="herobanner"
              className="object-cover w-full h-full"
            />
            <div className=" absolute w-full  bottom-[50%] left-[50%] -translate-x-[50%]  translate-y-[50%] ml-5 ">
              <h1 className=" font-semibold tracking-wide text-white text-xl">
                {new Date().getFullYear()} &apos;s New Collection
              </h1>
              <h4 className=" font-bold text-white text-3xl">
                Samsung S23 Ultra
              </h4>
              <div className="flexContainer !justify-start gap-8">
                <h3 className="text-white text-3xl">1,50,000 BDT</h3>
                <h3 className="text-white text-3xl line-through">
                  2,50,000 BDT
                </h3>
              </div>

              <p className="text-white text-lg">modern statement piece</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroBanner;
