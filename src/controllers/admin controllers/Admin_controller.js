const { Admin_service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const adminService = new Admin_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createAdminController = async (req, res) => {
  console.log("admin controller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const adminData = await adminService.createAdminService(req.body);
    storeRequestResponse.response = {
      data: adminData,
      success: true,
      message: "Successfully inserted data to Admin model",
      err: {},
    };
    saveReqRes(storeRequestResponse);

    return res.status(201).json({
      data: adminData,
      success: true,
      message: "Successfully inserted data to Admin model",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Failed to insert data to Admin model",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  console.log("admin controller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.params.id;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await adminService.getAdminService(req.params.id);
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched Admin Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admin Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Unable fetch Admin Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  console.log("admin controller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body || "";
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await adminService.getAllAdminsService();
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched Admins Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admins Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Unable fetch Admins Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
