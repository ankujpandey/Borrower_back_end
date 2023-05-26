const colors = require("colors");
const { Company_service } = require("../../services");

const companyService = new Company_service();

const getAllCompanyController = async (req, res) => {
  try {
    const getAllCompanyControllerData =
      await companyService.getCompanyService();
    return res.status(201).json({
      data: getAllCompanyControllerData,
      success: true,
      message: "Successfully fetched Company data ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from Company",
      err: error,
    });
  }
};

module.exports = {
  getAllCompanyController,
};
