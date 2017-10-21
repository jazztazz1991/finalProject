const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/login")
    .post(userController.doLogin);

router.route("/register")
    .post(userController.doRegister);

router.route("/logout")
    .get(userController.logout);

module.exports = router;