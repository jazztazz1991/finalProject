const router = require("express").Router();
const houseRoutes = require("./houses");

// Book routes
router.use("/house", houseRoutes);

module.exports = router;

