import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleCategoryBasedFilter } from "../axios";
import { addToCart } from "../store/productSlice";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
const FeaturedProducts = () => {
  const qty = 1;
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("");

  const handleFilteringCategory = async (value) => {
    setActiveButton(value);
    const response = await handleCategoryBasedFilter(value);
    setProducts(response.productsFilteredByCategory);
  };

  useEffect(() => {
    handleFilteringCategory("");
  }, []);
  return (
    <section className="flexContainer !justify-start flex-col gap-10 px-4 my-5 h-fit">
      <h1 className="w-full  text-black/20 tracking-wider text-6xl text-center">
        Featured Products
      </h1>
      {/* Filtering button based on category */}
      <div className="flexContainer gap-5">
        <button
          className={`p-2 text-sm rounded-full
            ${
              activeButton === ""
                ? "bg-orange-500 text-white "
                : " text-orange-500  bg-slate-300/25"
            }`}
          onClick={() => handleFilteringCategory("")}
        >
          All
        </button>
        <button
          className={` p-2 text-sm rounded-full
          ${
            activeButton === "furniture"
              ? "bg-orange-500 text-white "
              : " text-orange-500  bg-slate-300/25"
          }`}
          onClick={() => handleFilteringCategory("furniture")}
        >
          Furniture
        </button>
        <button
          className={` p-2 text-sm rounded-full
             ${
               activeButton === "shoe"
                 ? "bg-orange-500 text-white "
                 : " text-orange-500  bg-slate-300/25"
             }`}
          onClick={() => handleFilteringCategory("shoe")}
        >
          Shoe
        </button>
      </div>

      {/* Products based on category */}
      <div className="w-[90%] lg:w-[65%] grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        {products.map((product) => (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-lg h-[30vh] flexContainer !justify-center flex-col gap-6 "
              key={product._id}
            >
              <Link to={`/product/${product._id}`} className="w-full h-[75%]">
                <img
                  loading="lazy"
                  src={product.images[0].url}
                  alt={product.name}
                  className="object-cover h-[80%] w-full rounded-xl hover:scale-90 transition-all duration-300"
                />
                <h1 className="text-black/40 text-sm text-nowrap">
                  {product.name}
                </h1>
                <span className="font-semibold text-sm">
                  {product.price} BDT
                </span>
              </Link>
              <button
                className="text-orange-500 hover:text-orange-600 focus:text-orange-700 transition-all duration-300 h-[25%]"
                onClick={() => dispatch(addToCart({ product, qty }))}
              >
                Add to Cart
              </button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
