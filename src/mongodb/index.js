const express = require("express");

require("./config");

const reqres = require("./request_response");
const { model } = require("mongoose");

const app = express();
app.use(express.json());

const saveReqRes = async (data) => {
  const reqresdata = new reqres({
    request: data.request,
    response: data.response,
  });
  let result = await reqresdata.save();
  // console.log(result);
};

module.exports = {
  saveReqRes,
};
