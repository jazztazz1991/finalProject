const router = require("express").Router();
const houseRoutes = require("./houses");
const userRoutes = require("./users");

// Book routes
router.use("/house", houseRoutes);
router.use("/users", userRoutes);

module.exports = router;

