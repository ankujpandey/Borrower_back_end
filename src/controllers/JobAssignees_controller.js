const { JobAssignees_service } = require("../services");

const JobAssigneeService = new JobAssignees_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createJobAssigneesController = async (req, res) => {
  console.log("Job Assignees controller");
  // const storeRequestResponse = {};
  // const requestObj = {};
  // requestObj.body = req.body;
  // requestObj.headers = req.rawHeaders;
  // storeRequestResponse.request = requestObj;
  try {
    const JobAssigneeData = await JobAssigneeService.createJobAssigneesService(
      req.body
    );
    // storeRequestResponse.response = {
    // 	data: adminData,
    // 	success: true,
    // 	message: "Successfully inserted data to Admin model",
    // 	err: {},
    // };
    // saveReqRes(storeRequestResponse);

    return res.status(201).json({
      data: JobAssigneeData,
      success: true,
      message: "Successfully inserted data to Job Assignee model",
      err: {},
    });
  } catch (error) {
    console.log(error);
    // storeRequestResponse.response = {
    // 	data: {},
    // 	success: false,
    // 	message: "Failed to insert data to Admin model",
    // 	err: error,
    // };
    // saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: {},
      success: false,
      message: "Failed to insert data to Job Assignee model",
      err: error,
    });
  }
};

module.exports = {
  createJobAssigneesController,
};
