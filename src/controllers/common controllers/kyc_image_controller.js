const { getImages } = require("../../mongodb/kyc_image");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

// ------------------------------------------------------
// 	Get all KYC images
// ------------------------------------------------------

const getImagesController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const getImageControllerData = await getImages(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: getImageControllerData,
      success: true,
      message: "Successfully fetched Image data ",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: getImageControllerData,
      success: true,
      message: "Successfully fetched Image data ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from Images",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from Images",
      err: error,
    });
  }
};

module.exports = {
  getImagesController,
};
