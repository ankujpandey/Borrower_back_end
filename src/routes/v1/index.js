// ----------------------------------------
// Version 1 router
// ----------------------------------------

const express = require("express");
const uploadImage = require("../../middleware/uploadImage");
const router = express.Router();

const {
	UsersController,
	UserInfoController,
	E_kyc,
} = require("../../controllers");

// ----------------------------------------
// jwt token
// ----------------------------------------
const Jwt = require("jsonwebtoken");
const jwtKey = "aaa";

// ------------------------------------------
// route for User_Info Table
// ------------------------------------------

router.post("/user_info", UserInfoController.create);
router.get("/user_info/:id", UserInfoController.get);
router.delete("/user_info/:id", UserInfoController.destroy);
router.patch("/user_info/:id", UserInfoController.update);
router.get("/user_info", UserInfoController.getAll);
router.get("/user_info/admin/admin", UserInfoController.getAllByAdmin);

// ------------------------------------------
// route for Users Table
// ------------------------------------------

router.post("/signUp", UsersController.create);
router.get("/logIn/", UsersController.get);
router.delete("/user/:id", UsersController.destroy);
router.patch("/user/:id", UsersController.update);
router.get("/user", UsersController.getAll);
router.get("/user/admin/admin", UsersController.getAllByAdmin);

// -------------------------------------------
//  E- KYC
// -------------------------------------------

router.post("/uploadImage/:id", uploadImage.upload, E_kyc.checkData);

module.exports = router;
