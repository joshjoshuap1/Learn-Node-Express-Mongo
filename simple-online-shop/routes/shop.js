const express = require("express");

const router = express.Router();

const shopController = require("../controllers/shop");

// Get: /
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrder);
router.get("/checkout", shopController.getCheckout);

module.exports = router;