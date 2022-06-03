const express = require("express");
const router = express.Router();
const {
	postRequest,
	getRequest,
	updateRequest,
	deleteRequest,
} = require("../controller/requestController");

router.route("/").get(getRequest).post(postRequest).patch(updateRequest).delete(deleteRequest);

module.exports = router;
