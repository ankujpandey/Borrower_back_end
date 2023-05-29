const uploadImage = require("../../middleware/uploadImage");
const { PanCardAnalyzer } = require("../../services/index");
const { LogCombineData } = require("./log_combine_data");
const { createLogController } = require("../admin controllers/log_controller");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

// ------------------------------------------------
//	Save images and send Analysis of Pancard
// ------------------------------------------------

const checkDataController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    console.log(req.params.id);
    const analysis = await PanCardAnalyzer.pancardScan(
      req.files[0].filename,
      req.params.id
    );

    console.log("analysis======>>>>>", analysis);
    // ------------------------------
    // Creating log
    // ------------------------------
    const Data = {};
    Data.oldState = "1000";
    Data.currentState = "1100";
    Data.req = req;
    const data = LogCombineData(Data);
    createLogController(data);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: analysis,
      success: true,
      message: "Data fetched and Analysis Successful.",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: analysis,
      success: true,
      message: "Data fetched and Analysis Successful.",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Data not fetched or not able to Analyse.",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Data not fetched or not able to Analyse.",
      err: error,
    });
  }
};

module.exports = {
  checkDataController,
};
