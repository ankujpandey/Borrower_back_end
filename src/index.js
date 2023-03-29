const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes");
const cors = require("cors");

const PORT = 4000;

const setupAndStartServer = async () => {
	//create the express object
	const app = express();
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use("/api", ApiRoutes);

	app.listen(PORT, () => {
		console.log(`server started at ${PORT}`);
	});
};

setupAndStartServer();
