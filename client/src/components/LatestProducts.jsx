import React, { useEffect, useState } from "react";
import discountedProduct from "../assets/discountedproduct.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
const LatestProducts = () => {
  const [products, setProduct] = useState([]);
  const handleProduct = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DOMAIN}/product/latestaddition`
    );
    setProduct(response.data.products);
  };
  useEffect(() => {
    handleProduct();
  }, []);
  return (
    <section className="flexContainer flex-col px-4 min-h-screen">
      {/* Header */}
      <h1 className="w-full  text-black/20 tracking-wider text-6xl text-center">
        Latest Products
      </h1>
      {/* Products two part */}
      <div className="flexContainer flex-col lg:flex-row w-full">
        {/* Discounted Product */}
        <div className="border-4 border-red-600 w-full lg:w-[30%] mx-auto h-[80vh] my-10 lg:my-0">
          <h1 className="text-center w-full text-red-600 text-4xl font-semibold mt-5">
            F <span className="text-red-700 ">⚡</span>ash Sale
          </h1>
          <img
            src={discountedProduct}
            alt="discountedProduct"
            className="object-contain w-full h-[60vh] "
          />
          <h1 className="text-xl text-center w-full  font-light">
            Miles Travertine Cocktail Table
          </h1>
          <div className="flexContainer !justify-around mb-5">
            {" "}
            <span className="text-red-600 font-semibold">24,000 BDT</span>
            <span className="line-through font-light text-xs">34,000 BDT</span>
          </div>
        </div>
        {/* Latest Product */}
        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
          {" "}
          {products.map((item, index) => (
            <Link to={`/product/${item._id}`} key={index} className="w-full">
              <div className="w-full rounded-lg h-[40vh] flexContainer flex-col ">
                <img
                  loading="lazy"
                  width={200}
                  height={200}
                  src={item.images[0].url}
                  alt={item.name}
                  className="object-cover h-[60%] w-full rounded-xl hover:scale-90 transition-all duration-300"
                />
                <h1 className="text-black/40">{item.name}</h1>
                <span className="font-semibold">{item.price} BDT</span>
                <button className="text-orange-500">Add to Cart</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
