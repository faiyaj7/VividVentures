import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FiMinus } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { handleCategoryBasedFilter } from "../../axios";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { incQty, decQty, addToCart } from "../../store/productSlice";
import { addProducts } from "../../store/RecentViewSlice";
import useDocumentTitle from "../ComponentTitle";
const SingleProduct = () => {
  const { id } = useParams();
  const [breadcrumbs, setBreadcrumbs] = useState(["Home", "Menu"]);
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [similarProduct, setSimilarProduct] = useState([]);

  const discount = 30;
  const qty = useSelector((state) => state.productSlice.qty);
  const products = useSelector((state) => state.recentView.products);
  const dispatch = useDispatch();

  const extractSingleProductInformation = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DOMAIN}/product/${id}`
    );

    // setting the product to views its information
    setProduct(response.data.product);
    // dispatching for recent view
    dispatch(addProducts(response.data.product));
    // for breadcrumb
    setBreadcrumbs([...breadcrumbs, response.data.product.name]);
    const filter = await handleCategoryBasedFilter(
      response.data.product.category
    );
    // for similar product data
    setSimilarProduct(filter.productsFilteredByCategory.slice(0, 4));
    if (response.data.success) {
      setLoading(false);
    }
  };

  useEffect(() => {
    extractSingleProductInformation();
  }, [id]);
  useDocumentTitle(`${product.name}`);

  return (
    <section className="flexContainer flex-col px-4 gap-4 mt-10">
      {/* Breadcrumb */}
      <div className="float-left w-full">
        <Breadcrumb items={breadcrumbs} />
      </div>
      {loading ? (
        <div className="w-[100vw] fixed top-0 left-0 right-0">
          <Loader />
        </div>
      ) : (
        // "loading"
        <>
          <div className="flexContainer flex-col lg:flex-row gap-10 w-full">
            {/* product image */}
            <div className="w-full h-[60vh]">
              <img
                width={200}
                height={200}
                src={product.images[0].url}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* product information */}
            <div className="w-full flexContainer flex-col gap-4 !items-start">
              {/* First part */}
              <div className="flexContainer w-full lg:w-[75%]">
                {/* Left part */}
                <div className="flexContainer gap-5 w-[70%] ">
                  <h1 className="font-bold text-2xl text-black/65 w-[70%]">
                    {product.name}
                  </h1>
                  <span className="bg-lime-500/45 text-sm py-2 px-4 rounded-sm font-medium">
                    {discount}%
                  </span>
                </div>
                {/* Right part */}
                rating
              </div>
              {/* Second part */}
              <div className="flexContainer   w-[75%]">
                <div className="flexContainer gap-5">
                  <h4 className="text-orange-500 font-bold text-2xl">
                    {product.price * (discount / 100)} BDT
                  </h4>
                  <h6 className="line-through  font-extralight text-black/50">
                    {product.price} BDT
                  </h6>
                </div>
                <h4 className="text-red-500 font-medium">
                  🔥 IN STOCK : {product.stock}
                </h4>
              </div>
              <p className=" w-full lg:w-[60%] font-medium text-black/75">
                {product.desc}
              </p>
              {/* Fourth part */}
              <div className="flexContainer gap-4">
                <span className="font-medium text-sm">Quantity</span>
                <div className="flexContainer  border-[0.5px] border-slate-500/20 py-2 px-5 gap-4 rounded-lg">
                  <button className="" onClick={() => dispatch(decQty())}>
                    <FiMinus />
                  </button>
                  <h4>{qty}</h4>
                  <button>
                    <MdAdd onClick={() => dispatch(incQty())} />
                  </button>
                </div>
                <button
                  disabled={qty === 0 ? true : false}
                  className={`${
                    qty === 0 ? "cursor-not-allowed" : "cursor-pointer"
                  } py-2 px-14 lg:px-32 bg-orange-500/85 hover:bg-orange-500
                   transition-all duration-300 text-white rounded-xl text-sm font-medium`}
                  onClick={() => dispatch(addToCart({ product, qty }))}
                >
                  Add to Cart
                </button>
              </div>
              <button className="w-full px-5 py-2 bg-slate-700/75 hover:bg-slate-700 text-white transition-all duration-300 rounded-xl font-medium text-sm">
                Buy it Now!
              </button>
              {/* sixth part */}
              <div className="flexContainer gap-3 flex-col ">
                <h1 className="text-xs font-medium text-start w-full">
                  Other people want this. {Math.floor(1 + Math.random() * 150)}{" "}
                  people have this in their carts right now.
                </h1>
                <h4 className="font-medium text-xs text-start w-full">
                  Want it delivered within 2 days. Order Right Now
                </h4>
                <div className="flexContainer gap-1">
                  <span className="font-medium">Share</span>
                  <span className="flexContainer text-sm font-medium bg-violet-500/25 text-violet-500 py-1 px-4 rounded-lg gap-2">
                    <FaFacebookF /> Facebook
                  </span>
                  <span className="flexContainer text-sm  font-medium  bg-red-500/25 text-red-500 py-1 px-4 rounded-lg gap-2">
                    <FaGoogle /> Google
                  </span>
                  <span className="flexContainer text-sm font-medium bg-blue-500/25 text-blue-500 py-1 px-4 rounded-lg gap-2">
                    <FaXTwitter className="" /> Twitter
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Similar Products */}
          <div className="flexContainer flex-col gap-7 mt-5">
            <h1 className="text-6xl text-black/20 text-center w-full">
              Similar Products
            </h1>{" "}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
              {similarProduct.map((item, index) => (
                <Link
                  to={`/product/${item._id}`}
                  key={index}
                  className="w-full"
                >
                  <div className="w-full rounded-lg h-[40vh] flexContainer flex-col ">
                    <img
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
          {/* Recently Viewed */}
          <div className="flexContainer flex-col gap-7 mt-5">
            <h1 className="text-6xl text-black/20 text-center w-full">
              Recently Viewed
            </h1>{" "}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
              {products.map((item, index) => (
                <Link
                  to={`/product/${item._id}`}
                  key={index}
                  className="w-full"
                >
                  <div className="w-full rounded-lg h-[40vh] flexContainer flex-col ">
                    <img
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
        </>
      )}
    </section>
  );
};

export default SingleProduct;
