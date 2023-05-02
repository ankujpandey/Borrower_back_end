const { Loan_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const loanService = new Loan_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLoanController = async (req, res) => {
  console.log("loan contorller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const loanData = await loanService.createLoanService(req.body);
    storeRequestResponse.response = {
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    };
    saveReqRes(storeRequestResponse);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    });
  }
};

module.exports = {
  createLoanController,
};
