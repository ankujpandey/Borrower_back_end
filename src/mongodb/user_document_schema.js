const mongoose = require("mongoose");
const { INTEGER } = require("sequelize");
const user_document_schema = new mongoose.Schema({
  uid: { type: Number, required: true },
  profile_photo: String,
  aadhaar_front: String,
  aadhaar_back: String,
  PAN_card: String,
});

module.exports = mongoose.model(
  "user_document",
  user_document_schema,
  "user_document"
);
