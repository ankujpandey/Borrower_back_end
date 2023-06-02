const { Pool_Service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const PoolService = new Pool_Service();

// -----------------------------------
// insert into table
// -----------------------------------

const createPoolController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const createPoolControllerData = await PoolService.createPoolService(
      req.body
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: createPoolControllerData,
      success: true,
      message: "Successfully created a pool table data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: createPoolControllerData,
      success: true,
      message: "Successfully created a pool table data",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to create pool table data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create pool table data",
      err: error,
    });
  }
};

// -----------------------------------
// get Particular Pool Id data
// -----------------------------------

const getParticularPoolController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const getParticularPoolControllerData =
      await PoolService.getParticularPoolService(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: getParticularPoolControllerData,
      success: true,
      message: "Successfully fetch particular pool table",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: getParticularPoolControllerData,
      success: true,
      message: "Successfully fetch particular pool table",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to fetch particular pool table",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch particular pool table",
      err: error,
    });
  }
};

// --------------------------------------------------
// get pool+pool_transcation  data for pool table
// --------------------------------------------------
const getPoolController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const getPoolControllerData = await PoolService.getPoolService(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: getPoolControllerData,
      success: true,
      message: "Successfully fetch  pool table data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: getPoolControllerData,
      success: true,
      message: "Successfully fetch  pool table data",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable to fetch pool table data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch pool table data",
      err: error,
    });
  }
};

// -----------------------------------------
// find pool Balance
// -----------------------------------------
const getPoolBalanceController = async (req, res) => {
  console.log("Pool get Pool balance Controller");
  try {
    const getPoolBalanceControllerData =
      await PoolService.getPoolBalanceService();

    return res.status(201).json({
      data: getPoolBalanceControllerData,
      success: true,
      message: "Successfully fetch balance pool table",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch balance pool table",
      err: error,
    });
  }
};

module.exports = {
  createPoolController,
  getPoolController,
  getParticularPoolController,
  getPoolBalanceController,
};
