const express = require("express");

require("./config");

const reqres = require("./user_document_schema");
const { model } = require("mongoose");

const app = express();
app.use(express.json());

const saveDocument = async (data) => {
  const reqresdata = new reqres({
    uid: data.uid,
    profile_photo: data.profile_photo,
    aadhaar_front: data.aadhaar_front,
    aadhaar_back: data.aadhaar_back,
    PAN_card: data.PAN_card,
  });
  let result = await reqresdata.save();
  console.log(result);
};

module.exports = {
  saveDocument,
};
