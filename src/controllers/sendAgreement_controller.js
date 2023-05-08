const { SendAgreement_service } = require("../services");

// -----------------------------------
// send Agreement Pdf
// -----------------------------------

const sendArgeementController = async (req, res) => {
  try {
    const sendAgreementControllerData =
      await SendAgreement_service.sendAgreementService(req.body);

    // res.sendFile(`${__dirname}/result.pdf`);
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

module.exports = { sendArgeementController };
