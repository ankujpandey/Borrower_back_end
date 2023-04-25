const { Log_service } = require("../services");

const logService = new Log_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLogController = async (data) => {
  console.log("log contorller");

  try {
    const logControllerData = await logService.createLogService(data);

    return res.status(201).json({
      data: logControllerDataw1,
      success: true,
      message: "Successfully Inserted Log Data",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Log Data",
      err: error,
    });
  }
};

module.exports = {
  createLogController,
};
