import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/productSlice";
import MultiRangeSlider from "multi-range-slider-react";

import Filter from "../Filter";
import Loader from "../Loader";
import useDocumentTitle from "../ComponentTitle";
const Menu = () => {
  useDocumentTitle("VividVentures | Menu");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteringOptions, setFilteringOptions] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    category: "",
    rating: 5,
  });

  const dispatch = useDispatch();
  const qty = 1;
  const handleFilter = async (value) => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DOMAIN}/products/filter`,
      { value }
    );

    setProducts(response.data);
  };
  useEffect(() => {
    setLoading(true);
    async function fetch() {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_DOMAIN}/products?category=${
          filteringOptions.category
        }&price[lte]=${filteringOptions.maxPrice}&price[gte]=${
          filteringOptions.minPrice
        }&rating=${filteringOptions.rating}`
      );
      setProducts(response.data.products);
      setLoading(false);
    }
    fetch();
  }, [filteringOptions]);
  if (loading) return <Loader />;
  return (
    <section className="flexContainer gap-12 flex-col px-4 mt-10">
      {/* First part */}
      <div className="w-full flexContainer flex-col lg:flex-row gap-7">
        <h1 className="text-black/20 tracking-wider text-6xl text-center ml-[25px]">
          Menu
        </h1>

        <div className="flexContainer gap-7">
          <h1 className="ml-auto w-15">Sort By</h1>
          <Filter handleFilter={handleFilter} />
        </div>
      </div>
      {/* Second part */}
      <div className="w-full flexContainer flex-col lg:flex-row gap-5 px-4 items-start">
        {/* Filter part */}
        <div className="w-full lg:w-[15%] h-fit border border-black/25 rounded-2xl p-2 ">
          {/* Price */}
          <div className="flexContainer flex-col w-full">
            <h1 className="text-black/70 tracking-wider font-medium text-sm float-left w-full">
              Price
            </h1>
            <div className="flexContainer flex-col !justify-start !items-start w-full gap-5">
              {" "}
              <input
                className="bg-slate-500/20 w-full py-1 px-2 rounded-2xl outline-none  placeholder:text-black/50 text-black/70 tracking-wider font-medium "
                type="number"
                value={filteringOptions.minPrice}
                placeholder="Enter min price"
                onChange={(e) => {
                  setFilteringOptions((prevState) => ({
                    ...prevState,
                    minPrice: e.target.value,
                  }));
                }}
              />
              <input
                className="bg-slate-500/20 py-1 px-2 rounded-2xl outline-none w-full placeholder:text-black/50 text-black/70 tracking-wider font-medium"
                type="number"
                value={filteringOptions.maxPrice}
                placeholder="Enter max price"
                onChange={(e) => {
                  setFilteringOptions((prevState) => ({
                    ...prevState,
                    maxPrice: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          {/* Category */}
          <div className="flexContainer flex-col !items-start mt-2 gap-2">
            <h1 className="text-black/70 tracking-wider font-medium  text-sm float-left w-full">
              Category
            </h1>
            {/* radio button */}
            <div className="w-full flexContainer !items-start !justify-start gap-3 lg:gap-0 flex-row lg:flex-col">
              <div className="flex items-center mb-4">
                <input
                  checked={filteringOptions.category === ""}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      category: e.target.value,
                    }));
                  }}
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="category-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  All
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked={filteringOptions.category === "furniture"}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      category: e.target.value,
                    }));
                  }}
                  id="default-radio-1"
                  type="radio"
                  value="furniture"
                  name="category-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Furniture
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={filteringOptions.category === "shoe"}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      category: e.target.value,
                    }));
                  }}
                  id="default-radio-2"
                  type="radio"
                  value="shoe"
                  name="category-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Shoe
                </label>
              </div>
            </div>
          </div>
          {/* Rating */}
          <div className="flexContainer flex-col !items-start gap-2">
            <h1 className="text-black/70 tracking-wider font-medium  text-sm float-left w-full">
              Rating
            </h1>
            <div className="flexContainer lg:flex-col gap-2">
              {" "}
              <div className="flexContainer">
                <input
                  checked={filteringOptions.rating === 1}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      rating: Number(e.target.value),
                    }));
                  }}
                  id="default-radio-1"
                  type="radio"
                  value={1}
                  name="rating-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                "
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  1
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={filteringOptions.rating === 2}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      rating: Number(e.target.value),
                    }));
                  }}
                  id="default-radio-2"
                  type="radio"
                  value={2}
                  name="rating-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  2
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={filteringOptions.rating === 3}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      rating: Number(e.target.value),
                    }));
                  }}
                  id="default-radio-2"
                  type="radio"
                  value={3}
                  name="rating-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  3
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={filteringOptions.rating === 4}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      rating: Number(e.target.value),
                    }));
                  }}
                  id="default-radio-2"
                  type="radio"
                  value={4}
                  name="rating-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  4
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={filteringOptions.rating === 5}
                  onChange={(e) => {
                    setFilteringOptions((prevState) => ({
                      ...prevState,
                      rating: Number(e.target.value),
                    }));
                  }}
                  id="default-radio-2"
                  type="radio"
                  value={5}
                  name="rating-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                   "
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  5
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        {products.length === 0 ? (
          <h1 className="w-[85%] ">No Product Present based on your filter.</h1>
        ) : (
          <div className="w-full lg:w-[85%] grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
            {products.map((product, index) => (
              <div
                className="w-full rounded-lg h-[30vh] flexContainer !justify-center flex-col gap-6 "
                key={index}
              >
                <Link to={`/product/${product._id}`} className="w-full h-[75%]">
                  <img
                    loading="lazy"
                    src={product.images[0].url}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover h-[80%] w-full rounded-xl hover:scale-90 transition-all duration-300"
                  />
                  <h1 className="text-black/40">{product.name}</h1>
                  <span className="font-semibold">{product.price} BDT</span>
                </Link>
                <button
                  className="text-orange-500 hover:text-orange-600 focus:text-orange-700 transition-all duration-300 h-[25%]"
                  onClick={() => dispatch(addToCart({ product, qty }))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
