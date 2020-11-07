const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./user");

//Book routes  /api/books* 
router.use("/products", productRoutes);

// user routes /api/user*
router.use("/user", userRoutes);

module.exports = router;