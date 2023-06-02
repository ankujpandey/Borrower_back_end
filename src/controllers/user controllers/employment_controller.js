const { Employment_service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const employmentService = new Employment_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createEmploymentController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const employmentData = await employmentService.createEmploymentService(
      req.body
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

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
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const employmentData = await employmentService.updateEmploymentService(
      req.body
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
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
