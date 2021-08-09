const express = require("express");
const router = express.Router();

const {isSignedIn, isAuthenticated} = require("../controllers/auth");
const { processPayment } = require("../controllers/paymentb.js");
const { getToken } = require("../controllers/paymentb.js");

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);

router.post("/payment/braintree/:userId", isSignedIn, isAuthenticated, processPayment);

module.exports = router;