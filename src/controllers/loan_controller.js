const { Loan_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const loanService = new Loan_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLoanController = async (req, res) => {
  console.log("loan contorller");
  console.log("loan==============", req);
  const responseObj = {};
  try {
    responseObj.request = req;
    const loanData = await loanService.createLoanService(req.body);
    // console.log("wrng in controller", loanData);
    responseObj.response = {
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    };

    saveReqRes(responseObj);
    return res.status(201).json({
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    responseObj.response = {
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    };

    saveReqRes(responseObj);
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
