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
} = require("../../controllers");

// ----------------------------------------
// jwt token
// ----------------------------------------
const Jwt = require("jsonwebtoken");
const jwtKey = "aaa";

// ------------------------------------------
// route for User_Info Table
// ------------------------------------------

router.post("/user_info/:id", UserInfoController.create);
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

// ------------------------------------------
// route for Loan Table
// ------------------------------------------
router.post("/createLoan", LoanController.createLoanController);

// ------------------------------------------
// route for Bank Table
// ------------------------------------------
router.post("/createBank", BankController.createBankController);

// ------------------------------------------
// route for Employement Table
// ------------------------------------------
router.post(
  "/createEmployment",
  EmploymentController.createEmploymentController
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

module.exports = router;
