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
      message: "Successfully created a transaction",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create transaction",
      err: error,
    });
  }
};

module.exports = {
  createPoolController,
};
