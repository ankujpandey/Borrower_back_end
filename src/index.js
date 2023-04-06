const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes");
const PORT = 4000;
const cors = require("cors");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};

setupAndStartServer();
