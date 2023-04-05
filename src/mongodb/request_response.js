const mongoose = require("mongoose");
const Req_Res_schema = new mongoose.Schema({
  request: Object,
  response: Object,
});

module.exports = mongoose.model("Req_Res", Req_Res_schema, "Req_Res");
