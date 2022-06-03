const asyncHandler = require("express-async-handler");
const Request = require("../models/requestModel");

//CREATE
const postRequest = asyncHandler(async (req, res) => {
	if (!req.body.name || !req.body.title || !req.body.request) {
		res.status(400);
		throw new Error("missing fields");
	}

	const requestData = await Request.create({
		name: req.body.name,
		title: req.body.title,
		request: req.body.request,
		status: "pending",
	});

	res.status(200).json({ message: "success", data: requestData });
});

//READ
const getRequest = asyncHandler(async (req, res) => {
	const data = req.query.id ? await Request.findById(req.query.id) : await Request.find();

	res.status(200).json(data ? { message: "success", data: data } : { message: "no id like that" });
});

//UPDATE
const updateRequest = asyncHandler(async (req, res) => {
	const oldData = await Request.findById(req.query.id);

	if (!oldData) {
		res.status(400);
		throw new Error("no id like that");
	}

	const data = await Request.findOneAndUpdate(
		{ _id: req.query.id },
		{
			name: !req.body.name ? oldData.name : req.body.name,
			title: !req.body.title ? oldData.title : req.body.title,
			request: !req.body.request ? oldData.request : req.body.request,
			status: !req.body.status ? oldData.status : req.body.status,
		}
	);

	res.status(200).json({ message: "success", data: data });
});

//DELETE
const deleteRequest = asyncHandler(async (req, res) => {
	const dataFound = await Request.findById(req.query.id);

	if (!dataFound) {
		res.status(404);
		throw new Error("no id like that");
	}

	const deletedData = await Request.findByIdAndDelete(req.query.id);

	res.status(200).json({ message: "success", data_deleted: dataFound });
});

module.exports = { postRequest, getRequest, updateRequest, deleteRequest };
