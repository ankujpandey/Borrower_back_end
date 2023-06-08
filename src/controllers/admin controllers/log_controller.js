const { Log_service } = require("../../services");

const logService = new Log_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLogController = async (data) => {
  try {
    const logControllerData = await logService.createLogService(data);
    return logControllerData;
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

// ----------------------------------------
// particular user log details using  uid
// ----------------------------------------

const getLogController = async (req, res) => {
  try {
    const getlogControllerData = await logService.getLogService(req.params.id);
    return res.status(201).json({
      data: getlogControllerData,
      success: true,
      message: "Successfully fetched Log data",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to  fetched Log data",
      err: error,
    });
  }
};

module.exports = {
  createLogController,
  getLogController,
};
