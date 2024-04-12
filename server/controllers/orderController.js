import { asyncTryCatch } from "../middleware/promiseHandling.js";
import Product from "../models/productSchema.js";
import ApiFeature from "../utils/apifeature.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });
const stripe = new Stripe(process.env.STRIPE_SECRET);

export const orderProducts = asyncTryCatch(async (req, res, next) => {
  const { products } = req.body;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "bdt",
      product_data: {
        name: product.name,
        images: [product.images[0].url],
      },
      // 0.3 as a discount value
      unit_amount: Math.round(product.price * 100 * 0.3),
    },
    quantity: product.totalQuantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });
  
  res.status(200).json({ id: session.id });
});
