const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./user");

// Book routes /api/products*
router.use("/products", productRoutes);
// User routes /api/user*
router.use("/user", userRoutes);

module.exports = router;
