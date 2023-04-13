const { Employment_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const employmentService = new Employment_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createEmploymentController = async (req, res) => {
  console.log("employemnt contorller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const employmentData = await employmentService.createEmploymentService(
      req.body
    );
    storeRequestResponse.response = {
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    };
    saveReqRes(storeRequestResponse);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    });
  }
};

// -----------------------------------
// update into table using uid
// -----------------------------------
const updateEmploymentController = async (req, res) => {
  console.log("employment controller");
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const employmentData = await employmentService.updateEmploymentService(
      req.body
    );
    storeRequestResponse.response = {
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    };
    saveReqRes(storeRequestResponse);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    });
  }
};

module.exports = {
  createEmploymentController,
  updateEmploymentController,
};
