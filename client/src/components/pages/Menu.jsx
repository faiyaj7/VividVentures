import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/productSlice";

import Filter from "../Filter";
import Loader from "../Loader";
import useDocumentTitle from "../ComponentTitle";
import Pagination from "../Pagination";

const Menu = () => {
  useDocumentTitle("VividVentures | Menu");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productInfo, setProductInfo] = useState({
    productCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0,
  });
  const [filteringOptions, setFilteringOptions] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    category: "",
    rating: "",
    page: 1,
  });

  const dispatch = useDispatch();
  const qty = 1;

  // sorting price from high to low and vice versa
  const handleFilter = async (value) => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DOMAIN}/products/filter`,
      { value, products }
    );

    setProducts(response.data);
  };

  const handleServerFilter = async () => {
    setLoading(true);
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DOMAIN}/products?category=${
        filteringOptions.category
      }&price[lte]=${filteringOptions.maxPrice}&price[gte]=${
        filteringOptions.minPrice
      }&rating=${filteringOptions.rating}&page=${filteringOptions.page}`
    );

    setProducts(response.data.products);
    setProductInfo({
      productCount: response.data.productCount,
      resultPerPage: response.data.resultPerPage,
      filteredProductsCount: response.data.filteredProductsCount,
    });
    setLoading(false);
  };

  // sending the filter values to the server for every input change except image
  useEffect(() => {
    handleServerFilter();
  }, [
    filteringOptions.page,
    filteringOptions.category,
    filteringOptions.rating,
  ]);

  // finding all the categories for filtering at initial load only
  useEffect(() => {
    async function findCategories() {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_DOMAIN}/products/group-categories`
      );
      setCategories(response.data);
    }
    findCategories();
  }, []);

  if (loading) return <Loader />;
  return (
    <section className="flexContainer gap-12 flex-col px-10 mt-10">
      {/* First part */}
      <div className="w-full flexContainer flex-col lg:flex-row gap-7">
        <h1 className="text-black/20 tracking-wider text-6xl text-center ml-[25px]">
          Menu
        </h1>

        <div className="flexContainer gap-7">
          <h1 className="ml-auto w-15">Sort By</h1>
          {/* Sorting based filter */}
          <Filter handleFilter={handleFilter} products={products} />
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
                value={
                  filteringOptions.minPrice > 0
                    ? filteringOptions.minPrice
                    : null
                }
                placeholder="Enter min price"
                onChange={(e) => {
                  setFilteringOptions((prevState) => ({
                    ...prevState,
                    minPrice: e.target.value,
                  }));
                }}
                onBlur={handleServerFilter}
              />
              <input
                className="bg-slate-500/20 py-1 px-2 rounded-2xl outline-none w-full placeholder:text-black/50 text-black/70 tracking-wider font-medium"
                type="number"
                value={
                  filteringOptions.maxPrice < 1000000
                    ? filteringOptions.maxPrice
                    : null
                }
                placeholder="Enter max price"
                onChange={(e) => {
                  setFilteringOptions((prevState) => ({
                    ...prevState,
                    maxPrice: e.target.value,
                  }));
                }}
                onBlur={handleServerFilter}
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
                  className="ms-2 text-sm font-medium text-gray-500 "
                >
                  All
                </label>
              </div>
              {categories.map((item) => (
                <div className="flex items-center mb-4" key={item._id}>
                  <input
                    checked={filteringOptions.category === `${item._id}`}
                    onChange={(e) => {
                      setFilteringOptions((prevState) => ({
                        ...prevState,
                        category: e.target.value,
                      }));
                    }}
                    id="default-radio-1"
                    type="radio"
                    value={`${item._id}`}
                    name="category-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-500"
                  >
                    {item._id[0].toUpperCase() + item._id.slice(1)}
                  </label>
                </div>
              ))}
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
                  className="ms-2 text-sm font-medium text-gray-500"
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
                  className="ms-2 text-sm font-medium text-gray-500"
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
                  className="ms-2 text-sm font-medium text-gray-500"
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
                  className="ms-2 text-sm font-medium text-gray-500"
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
                  className="ms-2 text-sm font-medium text-gray-500"
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
            {products.map((product) => (
              <div
                className="w-full rounded-lg h-[30vh] flexContainer !justify-center flex-col gap-6 "
                key={product._id}
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

      {/* Pagination */}
      <Pagination
        filteringOptions={filteringOptions}
        setFilteringOptions={setFilteringOptions}
        productInfo={productInfo}
      />
    </section>
  );
};

export default Menu;
