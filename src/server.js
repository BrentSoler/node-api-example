const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 8080;
const DBCONN = require("./config/db");
const RequestRoutes = require("./routes/requestRoutes");
const UserRoutes = require("./routes/userRoutes");
const errHandler = require("./middleWare/errHandler");

DBCONN();

app.use(express.json());

app.use("/request", RequestRoutes);
app.use("/user", UserRoutes);

app.use(errHandler);

app.use("*", (req, res) => {
	res.status(300).json({ message: "wrong url" });
});

mongoose.connection.once("open", () => {
	console.log("SERVER NOW CONNECTED TO DB");

	app.listen(PORT, () => {
		console.log("server now running");
	});
});
