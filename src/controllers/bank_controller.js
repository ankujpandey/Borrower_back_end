const { Bank_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const bankService = new Bank_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createBankController = async (req, res) => {
  console.log("bank contorller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;

  try {
    const bankData = await bankService.createBankService(req.body);
    storeRequestResponse.response = {
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    });
  } catch (error) {
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able to insert into Bank Data",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
