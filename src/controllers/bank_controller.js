const { Bank_service } = require("../services");

const bankService = new Bank_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createBankController = async (req, res) => {
  console.log("bank controller");
  try {
    const bankData = await bankService.createBankService(req.body);

    return res.status(201).json({
      data: bankData,
      success: true,
      message: "Successfully Inserted Bank Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Bank Data",
      err: error,
    });
  }
};

module.exports = {
  createBankController,
};
