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
  EMI_calculator,
  JobAssigneeController,
  Generate_PdfController,
  LogconditionController,
  AgreementController,
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

// router.post("/user_info/:id", JWTToken.verifyToken, UserInfoController.create);
router.get("/user_info/:id", JWTToken.verifyToken, UserInfoController.get);
router.delete(
  "/user_info/:id",
  JWTToken.verifyToken,
  UserInfoController.destroy
);
router.post("/user_info/:id", JWTToken.verifyToken, UserInfoController.update);
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
router.get(
  "/getLoan/:id",
  JWTToken.verifyToken,
  LoanController.getLoanDataController
);

router.get(
  "/getLoanStatus/:id",
  JWTToken.verifyToken,
  LoanController.getLoanStatusController
);

router.post(
  "/updateLoanStatus",
  JWTToken.verifyToken,
  LoanController.updateLoanStatusController
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
// 	Update User By Admin API
// --------------------------------------

router.post(
  "/update/user/admin/:id",
  JWTToken.verifyToken,
  UsersController.updateUser
);

// --------------------------------------
// 	EMI Calculator API
// --------------------------------------

router.post("/calculateEMI", EMI_calculator.getEmiCalculations);

// --------------------------------------
// 	PDF downloaded API
// --------------------------------------

router.get("/createPdf/:id", Generate_PdfController.generatepdfController);

// --------------------------------------
// 	API for Job Assignees
// --------------------------------------

router.post(
  "/insert/JobAssignee",
  JobAssigneeController.createJobAssigneesController
);
router.get(
  "/get/JobAssignee/:id",
  JobAssigneeController.getJobAssigneeController
);
router.get(
  "/getAll/JobAssignee",
  JobAssigneeController.getAllJobAssigneeController
);
router.get("/sort/JobAssignee", JobAssigneeController.assignAgentsController);
router.get("/assignAgent", JobAssigneeController.MinJobAgentController);
router.post(
  "/updateJobsAssigned/:id",
  JobAssigneeController.UpdateJobsAssignedController
);

// ------------------------------------------
// route for log condition table
// ------------------------------------------
router.get(
  "/getlogCondition",
  LogconditionController.getLogConditionController
);

// ------------------------------------------
// route for send Agreement
// ------------------------------------------
router.post("/sendAgreement", AgreementController.sendArgeementController);

module.exports = router;
