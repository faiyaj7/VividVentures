import express from "express";
import { orderProducts } from "../controllers/orderController.js";

const router = express.Router();
router.post("/create-checkout-session", orderProducts);


export default router;
