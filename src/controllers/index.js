module.exports = {
  UserInfoController: require("./user controllers/userInfo_controller"),
  UsersController: require("./user controllers/users_controller"),
  LoanController: require("./user controllers/loan_controller"),
  BankController: require("./user controllers/bank_controller"),
  EmploymentController: require("./user controllers/employment_controller"),
  CompanyController: require("./common controllers/company_controller"),
  AdminController: require("./admin controllers/Admin_controller"),
  E_kyc: require("./common controllers/aadhaar_controller"),
  Pancard: require("./common controllers/pancard_controllers"),
  Kyc_ImageController: require("./common controllers/kyc_image_controller"),
  EMI_calculator: require("./common controllers/emiCalculator_controller"),
  JobAssigneeController: require("./admin controllers/JobAssignees_controller"),
  Generate_PdfController: require("./common controllers/generatePdf_controller"),
  LogconditionController: require("./admin controllers/logCondition_controller"),
  AgreementController: require("./common controllers/sendAgreement_controller"),
  BorrowerTransactionController: require("./user controllers/borrower_txn_controller"),
  PoolTransactionController: require("./admin controllers/pool_txn_controller"),
  BorrowerWalletController: require("./user controllers/borrower_wallet_controller"),
  PoolController: require("./admin controllers/pool_controller"),
  LogController: require("./admin controllers/log_controller"),
};
