const { Admin_service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const adminService = new Admin_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createAdminController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const adminData = await adminService.createAdminService(req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: adminData,
      success: true,
      message: "Successfully inserted data to Admin model",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: adminData,
      success: true,
      message: "Successfully inserted data to Admin model",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Failed to insert data to Admin model",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: {},
      success: false,
      message: "Failed to insert data to Admin model",
      err: error,
    });
  }
};

// -----------------------------------
// get particular data from table
// -----------------------------------

const getAdminController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await adminService.getAdminService(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched Admin Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admin Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable fetch Admin Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Admin Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------

const getAllAdminController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await adminService.getAllAdminsService();

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched Admins Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admins Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable fetch Admins Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Admins Info",
      err: error,
    });
  }
};

module.exports = {
  createAdminController,
  getAdminController,
  getAllAdminController,
};
