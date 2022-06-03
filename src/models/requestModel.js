const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
	name: { type: String, required: true },
	title: { type: String, required: true },
	request: { type: String, required: true },
	status: { type: String, required: true },
});

module.exports = mongoose.model("requests", requestSchema);
