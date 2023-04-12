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

// -----------------------------------
// update into table using uid
// -----------------------------------
const updateBankController = async (req, res) => {
  console.log("Bank controller");
  const responseObj = {};
  responseObj.request = req.body;
  try {
    const bankData = await bankService.updateBankService(req.body);
    responseObj.response = {
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Details",
      err: {},
    };
    saveReqRes(responseObj);
    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Details",
      err: {},
    });
  } catch (error) {
    console.log(error);
    responseObj.response = {
      data: {},
      success: false,
      message: "Not able to insert into Bank Details",
      err: error,
    };
    saveReqRes(responseObj);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert Bank Details",
      err: error,
    });
  }
};

module.exports = {
  createBankController,
  updateBankController,
};
