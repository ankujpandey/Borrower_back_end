const colors = require("colors");
const { Company_service } = require("../../services");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");
const { saveReqRes } = require("../../mongodb");

const companyService = new Company_service();

const getAllCompanyController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    const getAllCompanyControllerData =
      await companyService.getCompanyService();
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: getAllCompanyControllerData,
      success: true,
      message: "Successfully fetched Company data ",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: getAllCompanyControllerData,
      success: true,
      message: "Successfully fetched Company data ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from Company",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from Company",
      err: error,
    });
  }
};

module.exports = {
  getAllCompanyController,
};
