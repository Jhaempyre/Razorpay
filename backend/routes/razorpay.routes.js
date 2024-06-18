import express from "express";
import { checkout, paymentVerification } from "../controllers/razorpay.controllers.js";


const router = express.Router();

router.route("/checkout").post(checkout)
router.route("/paymentVerification").post(paymentVerification)

export default router;