// ----------------------------------------
// Version 1 router
// ----------------------------------------

const express = require("express");

const router = express.Router();

const {
  UsersController,
  UserInfoController,
  LoanController,
  BankController,
  EmploymentController,
  CompanyController,
  AdminController,
  E_kyc,
  Pancard,
  Kyc_ImageController,
  Generate_PdfController,
} = require("../../controllers");

// ----------------------------------------
// jwt token
// ----------------------------------------

const Jwt = require("jsonwebtoken");
const jwtKey = "anakaz";
// const verifyToken = require("../../middleware/index").verifyToken;
const { JWTToken, UploadAadhaar } = require("../../middleware/index");

// ------------------------------------------
// route for User_Info Table
// ------------------------------------------

router.post("/user_info/:id", JWTToken.verifyToken, UserInfoController.create);
router.get("/user_info/:id", JWTToken.verifyToken, UserInfoController.get);
router.delete(
  "/user_info/:id",
  JWTToken.verifyToken,
  UserInfoController.destroy
);
router.patch("/user_info/:id", JWTToken.verifyToken, UserInfoController.update);
router.get("/user_info", UserInfoController.getAll);
router.get(
  "/user_info/admin/admin",
  JWTToken.verifyToken,
  UserInfoController.getAllByAdmin
);

// ------------------------------------------
// route for Users Table
// ------------------------------------------

router.post("/signUp", UsersController.create);
router.get("/logIn/", UsersController.get);
router.delete("/user/:id", JWTToken.verifyToken, UsersController.destroy);
router.patch("/user/:id", JWTToken.verifyToken, UsersController.update);
router.get("/user", JWTToken.verifyToken, UsersController.getAll);
router.get(
  "/user/admin/admin",
  JWTToken.verifyToken,
  UsersController.getAllByAdmin
);

// ------------------------------------------
// route for Loan Table
// ------------------------------------------
router.post(
  "/createLoan",
  JWTToken.verifyToken,
  LoanController.createLoanController
);

// ------------------------------------------
// route for Bank Table
// ------------------------------------------
router.post(
  "/createBank",
  JWTToken.verifyToken,
  BankController.updateBankController
);

// ------------------------------------------
// route for Employement Table
// ------------------------------------------
router.post(
  "/createEmployment",
  JWTToken.verifyToken,
  EmploymentController.updateEmploymentController
);

// ------------------------------------------
// route for Company Table
// ------------------------------------------
router.get("/getAllCompany", CompanyController.getAllCompanyController);

// ------------------------------------------
// route for Admin Table
// ------------------------------------------
router.post("/admin", AdminController.createAdminController);
router.get("/admin/:id", AdminController.getAdminController);
router.get("/admins", AdminController.getAllAdminController);

// ------------------------------------------
// route to fetch all data
// ------------------------------------------
router.get("/getAllData/:id", UsersController.getAllData);
router.get("/getUserData", UsersController.getUserData);

// -------------------------------------------
//  Aadhaar Card Verification
// -------------------------------------------

router.post(
  "/uploadImage/:id",
  JWTToken.verifyToken,
  UploadAadhaar.upload.array("aadharBiometric", 2),
  E_kyc.checkData
);

// -------------------------------------------
//  Pan Card Verification
// -------------------------------------------

router.post(
  "/uploadPancard/:id",
  JWTToken.verifyToken,
  UploadAadhaar.upload.array("PAN_Card", 1),
  Pancard.checkDataController
);

// --------------------------------------
// 	Get Images API
// --------------------------------------

router.get(
  "/getImage/:id",
  JWTToken.verifyToken,
  Kyc_ImageController.getImagesController
);

// --------------------------------------
// 	PDF downloaded API
// --------------------------------------

router.get("/createPdf/:id", Generate_PdfController.generatepdfController);

module.exports = router;
