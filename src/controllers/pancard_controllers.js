const uploadImage = require("../middleware/uploadImage");
const { PanCardAnalyzer } = require("../services/index");
const { LogCombineData } = require("./log_combine_data");
const { createLogController } = require("./log_controller");

// ------------------------------------------------
//	Save images and send Analysis of Pancard
// ------------------------------------------------

const checkDataController = async (req, res) => {
  console.log("myfilename", req.files);

  try {
    console.log(req.params.id);
    const analysis = await PanCardAnalyzer.pancardScan(
      req.files[0].filename,
      req.params.id
    );

    console.log("analysis======>>>>>", analysis);
    // ------------------------------
    // Creating log
    // ------------------------------
    const Data = {};
    Data.currentStatus = "1100";
    Data.req = req;
    // console.log("------------------1", Data);
    const data = LogCombineData(Data);
    console.log("------------------1", data);
    createLogController(data);

    return res.status(201).json({
      data: analysis,
      success: true,
      message: "Data fetched and Analisys Successful.",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Data not fetched or not able to Analyse.",
      err: error,
    });
  }
};

module.exports = {
  checkDataController,
};
