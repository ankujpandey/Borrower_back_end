const { GeneratePdf_service } = require("../services");
const GeneratePdfService = new GeneratePdf_service();
const fs = require("fs");

// -----------------------------------
// Generate Pdf
// -----------------------------------
const generatepdfController = async (req, res) => {
  console.log("backend====", req.params.id);
  try {
    const generatepdfControllerData =
      await GeneratePdfService.generatedpdfService(req.params.id);
    // res.sendFile(
    //   `/home/mohdazharuddin/Desktop/projectborrower/Borrower_back_end/Borrower_back_end/src/esult.pdf`
    // );
    res.sendFile(`${__dirname}/result.pdf`);

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

module.exports = { generatepdfController };
