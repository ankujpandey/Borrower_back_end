// -----------------------------------
// Creating a global router
// -----------------------------------

var colors = require("colors");
const express = require("express");
const router = express.Router();

const v1Apiroutes = require("./v1/index.js");

router.use("/v1", v1Apiroutes);

console.log("routes are working".blue);

module.exports = router;
