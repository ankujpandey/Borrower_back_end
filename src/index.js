const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const PORT = 4000;

const setupAndStartServer = async () => {
	//create the express object
	const app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.listen(PORT, () => {
		console.log(`server started at ${PORT}`);
	});
};

setupAndStartServer();
