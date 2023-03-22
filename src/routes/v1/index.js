// ----------------------------------------
// Version 1 router
// ----------------------------------------

const express = require("express");
const router = express.Router();

const userInfoController = require("../../controllers/userInfo_controller");

router.post("/user_info", userInfoController.create);

module.exports = router;
