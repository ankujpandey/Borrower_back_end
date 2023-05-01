const { Log_service } = require("../services");

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

module.exports = {
  createLogController,
};
