const { EMI_calculator_services } = require("../../services");

const EmiCalcService = new EMI_calculator_services();

const getEmiCalculations = async (req, res) => {
  try {
    // let obj = {};
    console.log(req.body);
    const emi = await EmiCalcService.getCalculations(req.body);
    // const table = await EmiCalcService.getTable(req.body);
    // obj.EMI = emi;
    // onj.Table = table;
    return res.status(201).json({
      data: emi,
      success: true,
      message: "Successfully Got the data",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get EMI data",
      err: error,
    });
  }
};

module.exports = {
  getEmiCalculations,
};
