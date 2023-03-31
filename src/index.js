const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes");
const cors = require("cors");

const PORT = 4000;
const cors = require("cors");

const setupAndStartServer = async () => {
<<<<<<< HEAD
  //create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
=======
	//create the express object
	const app = express();
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 69684cacc14e462a5f537d6e9e598795509b035a

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
