import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeItemsFromCart,
  toggleCartItems,
} from "../../store/productSlice";
import { handleCategoryBasedFilter } from "../../axios";
import useDocumentTitle from "../ComponentTitle";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  useDocumentTitle("VividVentures | Cart");
  const qty = useSelector((state) => state.productSlice.qty);
  const totalPrice = useSelector((state) => state.productSlice.totalPrice);
  const cart = useSelector((state) => state.productSlice.cart);
  const [product, setproduct] = useState([]);
  const dispatch = useDispatch();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const makePayment = async () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    const stripe = await loadStripe(
      "pk_test_51O0qj0SCoK68ROrbLG1UaWDSQ6ZIkPONHF7dikGBKQwPqCZQRSmt9Nxfk83QpdkuuGPa0vdbgtsmPWo5HRYGMgUi00KDQ49ZJq"
    );
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DOMAIN}/order/create-checkout-session`,
      {
        products: cart,
      }
    );

    const result = stripe.redirectToCheckout({ sessionId: response.data.id });
    if (result.error) console.log(result.error);
  };
  useEffect(() => {
    async function fetch() {
      const response = await handleCategoryBasedFilter("");
      setproduct(response.productsFilteredByCategory.slice(0, 4));
    }
    fetch();
  }, []);

  return (
    <section className="px-4 mt-10">
      <h1 className="text-black tracking-wider text-lg font-bold">
        Shopping Cart
      </h1>
      {/* Second part */}
      <div className="overflow-x-auto flexContainer flex-col lg:flex-row !items-start gap-5">
        {/* Items Listed */}
        <table
          className="table-auto w-full lg:w-[65%] border-separate border-spacing-x-10 border-spacing-y-1
        border border-slate-500/20 "
        >
          <thead>
            <tr className=" border-b-black/45">
              <th> </th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item._id} className="border-b border-black ">
                <td>
                  <button
                    onClick={() =>
                      dispatch(removeItemsFromCart({ id: item._id }))
                    }
                  >
                    {" "}
                    <RxCross1 />
                  </button>
                </td>
                <td>
                  <div className="flexContainer flex-col lg:flex-row gap-4 !items-center !justify-center">
                    <img
                      src={item.images[0].url}
                      className="w-40 h-[10vh] object-cover rounded-lg"
                    />
                    <h1 className="text-sm text-center lg:text-start text-black/55  w-full">
                      {item.name}
                    </h1>
                  </div>
                </td>
                <td>
                  <div className="rounded-xl p-2 border border-slate-500 flexContainer">
                    {item.totalQuantity}
                    <div className="flexContainer flex-col">
                      <button
                        onClick={() =>
                          dispatch(
                            toggleCartItems({ id: item._id, operator: "inc" })
                          )
                        }
                      >
                        <IoIosArrowUp />
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            toggleCartItems({ id: item._id, operator: "dec" })
                          )
                        }
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className=" text-black/55 text-center w-full ">
                    {item.totalPrice * 0.3} BDT
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="w-full lg:w-[30%] border border-slate-500/20 p-5">
          {/* first part */}
          <h1 className="font-bold text-lg mb-2">Summary</h1>
          <div className="flexContainer mb-3">
            <h1 className="text-black/55">Subtotal</h1>
            <span className="font-semibold text-sm">{totalPrice * 0.3} BDT</span>
          </div>
          {/* second part */}
          <div className="flexContainer mb-3">
            <h1 className="text-black/55 ">Shipping</h1>
            <span className="font-semibold text-sm">Free</span>
          </div>
          <hr />
          {/* Third part */}
          <h1 className="text-black/55 my-3">Discount Code</h1>
          <div className="flexContainer !justify-start gap-4 mb-3 ">
            <input
              type="text"
              placeholder="Enter coupon"
              className="py-2 px-2 bg-slate-500/10 rounded-2xl"
            />
            <button className="text-white bg-orange-600 p-2 rounded-2xl">
              Apply
            </button>
          </div>
          <hr />
          {/* Fourth part */}
          <div className="flexContainer my-3">
            <h1 className="text-black/55">Total</h1>
            <h4 className="font-semibold text-sm">{totalPrice * 0.3} BDT</h4>
          </div>
          {/* Fifth part */}
          <button
            onClick={makePayment}
            className="w-full bg-black/85 hover:bg-black transition-all duration-300 text-white rounded-2xl p-2"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      {/* Backwards to home */}
      <Link to="/">
        <div className="flexContainer !justify-start gap-1">
          <IoIosArrowRoundBack size={30} />
          <h1 className="text-sm text-black/65">Continue Shopping</h1>
        </div>
      </Link>
      {/* others products */}
      <div className="flexContainer gap-5 flex-col mt-5 mb-10">
        <h1 className="w-full text-center capitalize text-black/20 tracking-wider text-6xl">
          Other products you'll love
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
          {product.map((product) => (
            <div
              className="w-full rounded-lg h-[30vh] flexContainer !justify-center flex-col gap-6 "
              key={product._id}
            >
              <Link to={`/product/${product._id}`} className="w-full h-[75%]">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="object-cover h-[80%] w-full rounded-xl hover:scale-90 transition-all duration-300"
                />
                <h1 className="text-black/40">{product.name}</h1>
                <span className="font-semibold">{product.price} BDT</span>
              </Link>
              {/* <PaymentElement /> */}

              <button
                // disabled={!stripe}
                className="text-orange-500 hover:text-orange-600 focus:text-orange-700 transition-all duration-300 h-[25%]"
                onClick={() => dispatch(addToCart({ product, qty }))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
