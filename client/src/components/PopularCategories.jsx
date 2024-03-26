import React from "react";
import sofa from "../assets/hero-sofa.webp";
const PopularCategories = () => {
  return (
    <section className=" relative w-full lg:w-[80%] mx-auto mt-5">
      <img
        src={sofa}
        alt="sofa"
        className="h-[40vh] lg:h-[80vh] w-full object-cover"
      />
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[80vh] bg-black/75 " />
      <div className="absolute top-0 left-0 w-full">
        <h1 className="w-full text-center text-white/55 text-2xl absolute top-10">
          Popular Categories
        </h1>
        <table
          className="absolute top-[50%] left[50%] lg:translate-x-[14%] translate-y-[50%] 
        table-fixed w-full lg:w-[80%] mx-auto text-center border-separate lg:border-spacing-5 "
        >
          <thead className=" border-b-2 border-black border-t-0 border-spacing-7 text-white">
            <tr>
              <th>Living Room</th>
              <th>Tech Product</th>
              <th>Furniture</th>
              <th>Shoe</th>
              <th>Shirt</th>
            </tr>
          </thead>
          <tbody className="text-white font-light text-sm">
            <tr>
              <td>Accessories</td>
              <td>Iphone</td>
              <td>Sofa</td>
              <td>Nike</td>
              <td>Polo</td>
            </tr>
            <tr>
              <td>Cabinets</td>
              <td>Samsung</td>
              <td>Lamp</td>
              <td>Puma</td> <td>Denver</td>
            </tr>
            <tr>
              <td>Armchairs</td>
              <td>OnePlus</td>
              <td>Table</td>
              <td>Adidas</td>
              <td>Giga</td>
            </tr>{" "}
            <tr>
              <td>Curtains</td>
              <td>Google</td>
              <td>Diven L-Shaped</td>
              <td>Jordan</td>
              <td>Yellow</td>
            </tr>{" "}
            <tr>
              <td>Bookcases</td>
              <td>Realme</td>
              <td>Easy Chair</td>
              <td>Yeezy</td>
              <td>Aarong</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PopularCategories;
