const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");

const postUser = asyncHandler(async (req, res) => {
	if (!req.body.name || !req.body.password) {
		res.status(400);
		throw new Error("missing fields");
	}

	const userData = User.create({ name: req.body.name, password: req.body.password });

	res.status(200).json({ message: "success", data: userData });
});

module.exports = { postUser };
