const {
  SendAgreement_service,
  Loan_service,
  JobAssignees_service,
  GeneratePdf_service,
} = require("../../services");

const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const SendAgreementService = new SendAgreement_service();
const LoanService = new Loan_service();
const JobAssigneesService = new JobAssignees_service();
const GeneratePdfService = new GeneratePdf_service();

// -----------------------------------
// send Agreement Pdf
// -----------------------------------

const sendArgeementController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const loanData = await LoanService.getLoanWithEMIService(req.body.uid);

    const pdf = await GeneratePdfService.generateAgreementPdfServices(
      req.body.uid,
      loanData
    );

    const agent = await JobAssigneesService.getJobAssigneesService(
      loanData.jobAssignees_id
    );
    const sendAgreementControllerData =
      await SendAgreementService.sendAgreementUserService(req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: sendAgreementControllerData,
      success: true,
      message: "Successful sent agreement",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: sendAgreementControllerData,
      success: true,
      message: "Successful sent agreement",
      err: {},
    });

    // res.sendFile(`${__dirname}/result.pdf`);
  } catch (error) {
    console.log("error", error.message);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to sent agreement",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to sent agreement",
      err: error,
    });
  }
};

module.exports = { sendArgeementController };
