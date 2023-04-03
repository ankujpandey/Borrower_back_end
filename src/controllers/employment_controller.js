const { Employment_service } = require("../services");

const employmentService = new Employment_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createEmploymentController = async (req, res) => {
  console.log("employemnt contorller");
  try {
    const employmentData = await employmentService.createEmploymentService(
      req.body
    );

    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Loan Data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into Loan Data",
      err: error,
    });
  }
};

module.exports = {
  createEmploymentController,
};
