import express from "express";
import {
  filterByPrice,
  getAllProduct,
  productBasedonLatestAddition,
  singleProduct,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/products/", getAllProduct);
router.get("/product/latestaddition", productBasedonLatestAddition);
router.post("/product/:id", singleProduct);
router.post("/products/filter", filterByPrice);

export default router;
