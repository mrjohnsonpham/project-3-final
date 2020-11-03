const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");

//Book routes  /api/books* 
router.use("/books", bookRoutes);

// user routes /api/user*
router.use("/user", userRoutes);

module.exports = router;