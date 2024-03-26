import express from "express";
import {
  createProduct,
  productBasedOnCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/product/create", createProduct);
router.post("/product/filter", productBasedOnCategory);

export default router;
