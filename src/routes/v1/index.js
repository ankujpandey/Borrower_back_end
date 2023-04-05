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
} = require("../../controllers");

// ----------------------------------------
// jwt token
// ----------------------------------------
const Jwt = require("jsonwebtoken");
const jwtKey = "anakaz";
// const verifyToken = require("../../middleware/index").verifyToken;
const { verifyToken } = require("../../middleware/index");
// ------------------------------------------
// route for User_Info Table
// ------------------------------------------

router.post("/user_info/:id", verifyToken, UserInfoController.create);
router.get("/user_info/:id", verifyToken, UserInfoController.get);
router.delete("/user_info/:id", verifyToken, UserInfoController.destroy);
router.patch("/user_info/:id", verifyToken, UserInfoController.update);
router.get("/user_info", verifyToken, UserInfoController.getAll);
router.get(
  "/user_info/admin/admin",
  verifyToken,
  UserInfoController.getAllByAdmin
);

// ------------------------------------------
// route for Users Table
// ------------------------------------------

router.post("/signUp", UsersController.create);
router.get("/logIn/", UsersController.get);
router.delete("/user/:id", verifyToken, UsersController.destroy);
router.patch("/user/:id", verifyToken, UsersController.update);
router.get("/user", verifyToken, UsersController.getAll);
router.get("/user/admin/admin", verifyToken, UsersController.getAllByAdmin);

// ------------------------------------------
// route for Loan Table
// ------------------------------------------
router.post("/createLoan", verifyToken, LoanController.createLoanController);

// ------------------------------------------
// route for Bank Table
// ------------------------------------------
router.post("/createBank", verifyToken, BankController.createBankController);

// ------------------------------------------
// route for Employement Table
// ------------------------------------------
router.post(
  "/createEmployment",
  verifyToken,
  EmploymentController.createEmploymentController
);

// ------------------------------------------
// route for Company Table
// ------------------------------------------
router.get("/getAllCompany", CompanyController.getAllCompanyController);
module.exports = router;
