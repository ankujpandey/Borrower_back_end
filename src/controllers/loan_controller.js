const { Loan_service } = require("../services");

const loanService = new Loan_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLoanController = async (req, res) => {
  console.log("loan contorller");
  try {
    const loanData = await loanService.createLoanService(req.body);
    console.log("wrng in controller", loanData);
    return res.status(201).json({
      data: loanData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
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
