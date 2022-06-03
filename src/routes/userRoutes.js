const express = require("express");
const router = express.Router();
const { postUser } = require("../controller/userController");

router.route("/").get().post(postUser);

module.exports = router;
