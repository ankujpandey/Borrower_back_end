const { saveReqRes } = require("../../mongodb");
const { EMI_calculator_services } = require("../../services");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const EmiCalcService = new EMI_calculator_services();

const getEmiCalculations = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    // let obj = {};
    console.log(req.body);
    const emi = await EmiCalcService.getCalculations(req.body);
    // const table = await EmiCalcService.getTable(req.body);
    // obj.EMI = emi;
    // onj.Table = table;

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: emi,
      success: true,
      message: "Successfully Got the data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: emi,
      success: true,
      message: "Successfully Got the data",
      err: {},
    });
  } catch (error) {
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to get EMI data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get EMI data",
      err: error,
    });
  }
};

module.exports = {
  getEmiCalculations,
};
