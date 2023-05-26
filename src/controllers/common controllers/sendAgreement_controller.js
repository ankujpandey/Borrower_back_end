const {
  SendAgreement_service,
  Loan_service,
  JobAssignees_service,
  GeneratePdf_service,
} = require("../../services");
const SendAgreementService = new SendAgreement_service();
const LoanService = new Loan_service();
const JobAssigneesService = new JobAssignees_service();
const GeneratePdfService = new GeneratePdf_service();

// -----------------------------------
// send Agreement Pdf
// -----------------------------------

const sendArgeementController = async (req, res) => {
  console.log("----------controller----------", req.body);
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

    return res.status(201).json({
      data: sendAgreementControllerData,
      success: true,
      message: "Successful sent agreement",
      err: {},
    });

    // res.sendFile(`${__dirname}/result.pdf`);
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to sent agreement",
      err: error,
    });
  }
};

module.exports = { sendArgeementController };
