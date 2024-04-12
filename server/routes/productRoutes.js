import express from "express";
import {
  filterByPrice,
  getAllProduct,
  groupTheCategories,
  productBasedonLatestAddition,
  singleProduct,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/products/", getAllProduct);
router.get("/product/latestaddition", productBasedonLatestAddition);
router.post("/product/:id", singleProduct);
router.post("/products/filter", filterByPrice);
router.get("/products/group-categories", groupTheCategories);

export default router;
