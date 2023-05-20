const colors = require("colors");
const { Logcondition_service } = require("../services");

const LogconditionService = new Logcondition_service();

const getLogConditionController = async (req, res) => {
  try {
    const getLogConditionControllerData =
      await LogconditionService.getLogconditionService(req.body);
    return res.status(201).json({
      data: getLogConditionControllerData,
      success: true,
      message: "Successfully fetched log condition data ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from log condition",
      err: error,
    });
  }
};

module.exports = {
  getLogConditionController,
};
