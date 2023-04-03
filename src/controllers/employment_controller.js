const { Employment_service } = require("../services");

const employmentService = new Employment_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createEmploymentController = async (req, res) => {
  console.log("employement controller");
  try {
    const employmentData = await employmentService.createEmploymentService(
      req.body
    );

    return res.status(201).json({
      data: employmentData,
      success: true,
      message: "Successfully Inserted Employement Details",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert Employement Details",
      err: error,
    });
  }
};

module.exports = {
  createEmploymentController,
};
