const { Bank_service } = require("../../services");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");
const { saveReqRes } = require("../../mongodb/index");

const bankService = new Bank_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createBankController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const bankData = await bankService.createBankService(req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert into Bank Data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

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
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const bankData = await bankService.updateBankService(req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Details",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Details",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert Bank Details",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

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
