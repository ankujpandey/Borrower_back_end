const { GeneratePdf_service } = require("../../services");
const { Loan_service } = require("../../services");

const GeneratePdfService = new GeneratePdf_service();
const loaService = new Loan_service();

const fs = require("fs");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");
const { saveReqRes } = require("../../mongodb");

// -----------------------------------
// Generate user prfile Pdf for admin
// -----------------------------------
const generatepdfController = async (req, res) => {
  console.log("backend====", req.params.id);
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    const generatepdfControllerData =
      await GeneratePdfService.generateUserPdfServices(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: generatepdfControllerData,
      success: true,
      message: "Successfully Generated Pdf Data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    console.log(`${__dirname}/pdf/userData.pdf`);
    res.sendFile(`${process.cwd()}/src/controllers/pdf/userData.pdf`);

    // return res.status(201).json({
    //   data: generatepdfControllerData,
    //   success: true,
    //   message: "Successfully Generated Pdf Data",
    //   err: {},
    // });
  } catch (error) {
    console.log("error", error.message);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });
  }
};

// -----------------------------------
// Generate agreement pdf
// -----------------------------------
const generateAgreementPdfController = async (req, res) => {
  console.log("backend====", req.params.id);
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    const loanData = await loaService.getLoanWithEMIService(req.params.id);
    console.log("pdf controller", loanData);
    const generatepdfControllerData =
      await GeneratePdfService.generateAgreementPdfServices(
        req.params.id,
        loanData
      );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: generatepdfControllerData,
      success: true,
      message: "Successfully Generated Pdf Data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    res.sendFile(`${process.cwd()}/src/controllers/pdf/agreement.pdf`);

    // return res.status(201).json({
    // 	data: generatepdfControllerData,
    // 	success: true,
    // 	message: "Successfully Generated Pdf Data",
    // 	err: {},
    // });
  } catch (error) {
    console.log("error", error.message);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });
  }
};

// -----------------------------------
// Generate Noc pdf
// -----------------------------------

const generateNocPdfController = async (req, res) => {
  console.log("backend====", req.params.id);
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);
  try {
    const generateNocPdfControllerData =
      await GeneratePdfService.generateNocPdfServices(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: generateNocPdfControllerData,
      success: true,
      message: "Successfully Generated Pdf Data",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: generateNocPdfControllerData,
      success: true,
      message: "Successfully Generated Pdf Data",
      err: {},
    });
  } catch (error) {
    console.log("error", error.message);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Generated Pdf Data",
      err: error,
    });
  }
};

module.exports = {
  generatepdfController,
  generateAgreementPdfController,
  generateNocPdfController,
};
