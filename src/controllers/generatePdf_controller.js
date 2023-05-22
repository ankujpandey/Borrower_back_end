const { GeneratePdf_service } = require("../services");
const { Loan_service } = require("../services");

const GeneratePdfService = new GeneratePdf_service();
const loaService = new Loan_service();

const fs = require("fs");

// -----------------------------------
// Generate user prfile Pdf for admin
// -----------------------------------
const generatepdfController = async (req, res) => {
  console.log("backend====", req.params.id);
  try {
    const generatepdfControllerData =
      await GeneratePdfService.generateUserPdfServices(req.params.id);
    // res.sendFile(
    //   `/home/mohdazharuddin/Desktop/projectborrower/Borrower_back_end/Borrower_back_end/src/result.pdf`
    // );
    res.sendFile(`${__dirname}/userData.pdf`);

    // return res.status(201).json({
    //   data: generatepdfControllerData,
    //   success: true,
    //   message: "Successfully Generated Pdf Data",
    //   err: {},
    // });
  } catch (error) {
    console.log("error", error.message);
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
  try {
    const loanData = await loaService.getLoanWithEMIService(req.params.id);
    const generatepdfControllerData =
      await GeneratePdfService.generateAgreementPdfServices(
        req.params.id,
        loanData
      );
    // res.sendFile(
    //   `/home/mohdazharuddin/Desktop/projectborrower/Borrower_back_end/Borrower_back_end/src/result.pdf`
    // );
    res.sendFile(`${__dirname}/agreement.pdf`);

    // return res.status(201).json({
    //   data: generatepdfControllerData,
    //   success: true,
    //   message: "Successfully Generated Pdf Data",
    //   err: {},
    // });
  } catch (error) {
    console.log("error", error.message);
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
  try {
    const generateNocPdfControllerData =
      await GeneratePdfService.generateNocPdfServices(req.params.id);

    return res.status(201).json({
      data: generateNocPdfControllerData,
      success: true,
      message: "Successfully Generated Pdf Data",
      err: {},
    });
  } catch (error) {
    console.log("error", error.message);
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
