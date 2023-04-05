const { Bank_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const bankService = new Bank_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createBankController = async (req, res) => {
  console.log("bank contorller");
  console.log(req.body);
  const responseObj = {};
  responseObj.request = req.body;

  try {
    const bankData = await bankService.createBankService(req.body);
    responseObj.response = {
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    };
    saveReqRes(responseObj);
    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    responseObj.response = {
      data: {},
      success: false,
      message: "Not able to insert into Bank Data",
      err: error,
    };
    saveReqRes(responseObj);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Bank Data",
      err: error,
    });
  }
};

module.exports = {
  createBankController,
};
