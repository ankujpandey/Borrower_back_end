const { Pool_Service } = require("../services");

const PoolService = new Pool_Service();

// -----------------------------------
// insert into table
// -----------------------------------

const createPoolController = async (req, res) => {
  console.log("Pool create Controller");
  try {
    const createPoolControllerData = await PoolService.createPoolService(
      req.body
    );

    return res.status(201).json({
      data: createPoolControllerData,
      success: true,
      message: "Successfully created a pool table data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create pool table data",
      err: error,
    });
  }
};

// -----------------------------------
// get Particular Pool Id data
// -----------------------------------

const getParticularPoolController = async (req, res) => {
  console.log("Pool get Particular Controller");
  try {
    const getParticularPoolControllerData =
      await PoolService.getParticularPoolService(req.params.id);

    return res.status(201).json({
      data: getParticularPoolControllerData,
      success: true,
      message: "Successfully fetch particular pool table",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch particular pool table",
      err: error,
    });
  }
};

// --------------------------------------------------
// get pool+pool_transcation  data for pool table
// --------------------------------------------------
const getPoolController = async (req, res) => {
  console.log("Pool get Controller", req.query);

  try {
    const getPoolControllerData = await PoolService.getPoolService(req.query);

    return res.status(201).json({
      data: getPoolControllerData,
      success: true,
      message: "Successfully fetch  pool table data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch pool table data",
      err: error,
    });
  }
};
module.exports = {
  createPoolController,
  getPoolController,
  getParticularPoolController,
};
