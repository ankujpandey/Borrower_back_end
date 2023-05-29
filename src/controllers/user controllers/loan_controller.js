const {
  Loan_service,
  SendAgreement_service,
  poolTxn_Service,
  borrowerTxn_Service,
  BorrowerWallet_service,
  GeneratePdf_service,
  UserInfo_service,
} = require("../../services");
const schedule = require("node-schedule");
const { saveReqRes } = require("../../mongodb/index");
const { createLogController } = require("../admin controllers/log_controller");
const { LoanCombineData } = require("../common controllers/log_combine_data");
const { GenerateRequest } = require("../../utils/Request_Response");

const loanService = new Loan_service();
const SendAgreementService = new SendAgreement_service();
const poolTxnService = new poolTxn_Service();
const borrowerTxnService = new borrowerTxn_Service();
const walletServices = new BorrowerWallet_service();
const GeneratePdfService = new GeneratePdf_service();
const UserInfoService = new UserInfo_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLoanController = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const loanData = await loanService.createLoanService(req.body);
    console.log("loanData-----", loanData);

    dataReqRes.response = GenerateResponse({
      data: result,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    if (req.body.emailUser) {
      const emailReq = await SendAgreementService.sendAgreementUserService(
        loanData.uid,
        loanData.jobAssignees_id,
        loanData.Loan_state
      );
    }
    if (req.body.emailAgent) {
      const emailReq = await SendAgreementService.sendAgreementAgentService(
        loanData.uid,
        loanData.jobAssignees_id,
        loanData.Loan_state
      );
    }

    const Data = {};
    Data.oldState = "1100";
    Data.loanData = loanData;
    Data.req = req;
    console.log("------------------1", Data);
    const data = LoanCombineData(Data);
    console.log("-----------------", data);
    createLogController(data);
    return res.status(201).json({
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
  } catch (error) {
    console.log(error);

    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    });
  }
};

// -----------------------------------------
// get particular loan data from the table
// -----------------------------------------

const getLoanDataController = async (req, res) => {
  console.log("loan controller");

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const LoanStatus = await loanService.getLoanDataService(req.params.id);

    dataReqRes.response = GenerateResponse({
      data: LoanStatus,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: LoanStatus,
      success: true,
      message: "Successfully fetched loan status",
      err: {},
    });
  } catch (error) {
    console.log(error);

    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to fetched loan status",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetched loan status",
      err: error,
    });
  }
};

// -----------------------------------------
// update loan status in the table
// -----------------------------------------
const updateLoanStatusController = async (req, res) => {
  // console.log("loan controller");

  // console.log("this is body----->>>>>>>>>>>>>>>>>", req.body);

  try {
    const updatedLoanStatus = await loanService.updateLoanStatusService(
      req.body
    );

    console.log("bxhwxiwu", updatedLoanStatus);

    // if (req.body.emailUser) {
    //   const emailReq = await SendAgreementService.sendAgreementUserService(
    //     updatedLoanStatus.uid,
    //     updatedLoanStatus.jobAssignees_id,
    //     updatedLoanStatus.Loan_state
    //   );
    // }
    // if (req.body.emailAgent) {
    //   const emailReq = await SendAgreementService.sendAgreementAgentService(
    //     updatedLoanStatus.uid,
    //     updatedLoanStatus.jobAssignees_id,
    //     updatedLoanStatus.Loan_state
    //   );
    // }
    // // storeRequestResponse.response = {
    // //   data: updatedLoanStatus,
    // //   success: true,
    // //   message: "Successfully updated Loan status",
    // //   err: {},
    // // };
    // // saveReqRes(storeRequestResponse);
    // return res.status(201).json({
    //   data: updatedLoanStatus,
    //   success: true,
    //   message: "Successfully updated loan status",
    //   err: {},
    // });
  } catch (error) {
    // console.log(error);
    // // storeRequestResponse.response = {
    // //   data: {},
    // //   success: false,
    // //   message: "Unable to updated loan status",
    // //   err: error,
    // // };
    // // saveReqRes(storeRequestResponse);
    // return res.status(500).json({
    //   data: {},
    //   success: false,
    //   message: "Unable to updated loan status",
    //   err: error,
    // });
  }
};

// -----------------------------------------
// get loan status from the table
// -----------------------------------------

const getLoanStatusController = async (req, res) => {
  console.log("loan controller");

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const loanStatus = await loanService.getLoanStatusService(req.params.id);

    dataReqRes.response = GenerateResponse({
      data: loanStatus,
      success: true,
      message: "Successfully updated Loan status",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: loanStatus,
      success: true,
      message: "Successfully fetched loan status",
      err: {},
    });
  } catch (error) {
    console.log(error);

    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to fetch loan status",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch loan status",
      err: error,
    });
  }
};

// ------------------------------------------------
// get particular loan data with EMI calculations
// ------------------------------------------------
const getLoanWithEMIController = async (req, res) => {
  console.log("loan controller");

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const loanStatus = await loanService.getLoanWithEMIService(req.params.id);

    dataReqRes.response = GenerateResponse({
      data: loanStatus,
      success: true,
      message: "Successfully updated Loan status",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: loanStatus,
      success: true,
      message: "Successfully fetched loan status",
      err: {},
    });
  } catch (error) {
    console.log(error);

    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to fetch loan status",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch loan status",
      err: error,
    });
  }
};

// -----------------------------------------
// loan Disbursement
// -----------------------------------------
const loanDisbursementController = async (req, res) => {
  console.log("loan controller");

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    console.log("data", req.body);

    req.body.amount -= req.body.amount * 0.05;

    const poolData = {
      debit_Amount: req.body.amount,
      txn_type: "loan disbursement",
      poolId: 1,
    };

    const walletData = {
      uid: req.body.uid,
      LoanID: req.body.LoanID,
      credit_Amount: req.body.amount,
      txn_type: "loan amount recieved",
    };

    const poolBalance = await poolTxnService.createTransaction(poolData);
    if (poolBalance) {
      var updateLoanState = await loanService.updateLoanStatusService(req.body);

      if (updateLoanState) {
        await borrowerTxnService.createTransaction(walletData);
        await SendAgreementService.sendAgreementUserService(
          req.body.uid,
          req.body.jobAssignees_id,
          req.body.Loan_state
        );
      }
    }

    if (req.body.Loan_state === 1600) {
      await selfDeductTransactionController(req.body);
    }

    dataReqRes.response = GenerateResponse({
      data: updateLoanState,
      success: true,
      message: "Successfully fetched loan status",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: updateLoanState,
      success: true,
      message: "Successfully fetched loan status",
      err: {},
    });
  } catch (error) {
    console.log(error);

    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to disburse loan",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    if (error.error.message === "Please Add Money!") {
      await SendAgreementService.sendEmailAdminService();
      return res.status(503).json({
        data: {},
        success: false,
        message: "Unable to create transaction",
        err: error.error.message,
      });
    }
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to disburse loan",
      err: error,
    });
  }
};

// -----------------------------------
// self deduct Seduled EMI
// -----------------------------------

const selfDeductTransactionController = async (req) => {
  console.log("In Borrower self deduct transaction Controller");

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    // console.log("in automatic emi pay", req);

    const LoanData = await loanService.getLoanWithEMIService(req.uid);
    // console.log("Loan Data as user got it", LoanData);
    // console.log("Loan Data as user got it", LoanData.EMI);
    const startTime = new Date(LoanData.loanData.dataValues.updatedAt);
    console.log(startTime);
    const endTime = new Date(startTime.getTime() + 10000000);
    console.log(endTime);
    let tenure = LoanData.loanData.dataValues.tenureApproved;

    let borrowingTransactionObject = {};
    borrowingTransactionObject.uid = LoanData.loanData.dataValues.uid;
    borrowingTransactionObject.LoanId = LoanData.loanData.dataValues.LoanId;
    borrowingTransactionObject.txn_type = "EMI Payment";
    borrowingTransactionObject.txn_flow = "debit";
    borrowingTransactionObject.debit_Amount = LoanData.EMI.EMI;

    console.log("in automatic emi pay", borrowingTransactionObject);

    const job = await schedule.scheduleJob(
      { start: startTime, end: endTime, rule: "*/5 * * * * *" },
      async function () {
        console.log("crone called");
        try {
          const transaction = await borrowerTxnService.createTransaction(
            borrowingTransactionObject
          );

          console.log("transaction---->>>>>>>>>>", transaction);
        } catch (error) {
          console.log("error detected in wallet transaction", error);
          if (error.error.message === "Please Add Money!") {
            console.log("Please Add Money".yellow);
            let time = 0;
            let charge = 0;
            const j = await schedule.scheduleJob(
              { rule: "*/1 * * * * *" },
              async function () {
                console.log("5time function called");
                charge = (parseFloat(req?.body?.debit_Amount) * 5) / 100;
                req.body.extraCharge = Charge;
                try {
                  console.log("transaction---->>>>>>>>>>", req.body);

                  const transaction =
                    await borrowerTxnService.createTransaction(
                      borrowingTransactionObject
                    );

                  console.log("transaction---->>>>>>>>>>", transaction);

                  req.body.extraCharge = 0;
                  j.cancel();
                } catch (error) {
                  console.log(
                    "error detected in wallet transaction",
                    typeof error
                  );
                  if (error.error.message === "Please Add Money!") {
                  }
                }

                if (time === 5) {
                  j.cancel();
                }
                time = time + 1;
              }
            );
          }
        }
        tenure = tenure - 1;
        if (tenure === 0) {
          borrowingTransactionObject.Loan_state = 1700;
          await loanRepaid(borrowingTransactionObject.uid);
          job.cancel();
        }
      }
    );
    console.log("schedule ended");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create transaction",
      err: error.error.message,
    });
  }
};

//------------------------------
//Generate and send NOC
//------------------------------

const loanRepaid = async (uid) => {
  const updateLoanState = await loanService.updateLoanStatusService({
    Loan_state: 1700,
    uid: uid,
  });

  if (updateLoanState) {
    const userInfo = await UserInfoService.getUserInfo(uid);
    // console.log("userData", userData);

    const emi = await loanService.getLoanWithEMIService(uid);

    if (emi) {
      const userData = {
        name: userInfo.firstName + " " + userInfo.lastName,
        LoanId: emi.loanData.LoanId,
        totalAmount: emi.EMI.total_Amount,
      };

      const pdf = await GeneratePdfService.generateNocPdfServices(userData);

      await SendAgreementService.sendNocUserService(
        emi.loanData.uid,
        emi.loanData.Loan_state,
        userData
      );
    }
  }
};

module.exports = {
  createLoanController,
  getLoanDataController,
  updateLoanStatusController,
  getLoanStatusController,
  getLoanWithEMIController,
  loanDisbursementController,
  selfDeductTransactionController,
};