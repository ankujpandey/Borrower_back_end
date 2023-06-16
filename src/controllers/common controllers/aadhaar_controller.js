const uploadImage = require("../../middleware/uploadImage");
const { saveReqRes } = require("../../mongodb");
const { Id_analyzer } = require("../../services/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

// ------------------------------------------------
//	Save images and send Analysis of Aadhaar
// ------------------------------------------------

const checkData = async (req, res) => {
  console.log("myfilename", req.files);
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    // console.log(req.body.userInfo.firstName);
    var profileImage = req.body.biometric.split("base64,");
    profileImage = profileImage[1];
    // console.log(profileImage);

    const analysis = await Id_analyzer.idScan(
      req.files[0].filename,
      req.files[1].filename,
      profileImage,
      req.params.id
    );

    console.log("analysis======>>>>>", analysis);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: analysis,
      success: true,
      message: "Data fetched and Analisys Successful.",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: analysis,
      success: true,
      message: "Data fetched and Analisys Successful.",
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
  checkData,
};
