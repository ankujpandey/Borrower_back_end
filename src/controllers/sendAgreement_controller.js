const { SendAgreement_service } = require("../services");
const SendAgreementService = new SendAgreement_service();

// -----------------------------------
// send Agreement Pdf
// -----------------------------------

const sendArgeementController = async (req, res) => {
  console.log("----------controller----------", req.body);
  try {
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
