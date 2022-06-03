const mongoose = require("mongoose");

const DBCONN = async () => {
	try {
		const conn = await mongoose.connect("mongodb://172.19.64.1:27017/request-api", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports = DBCONN;
