const { JobAssignees_service } = require("../../services");

const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");

const JobAssigneeService = new JobAssignees_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createJobAssigneesController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const JobAssigneeData = await JobAssigneeService.createJobAssigneesService(
      req.body
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: JobAssigneeData,
      success: true,
      message: "Successfully inserted data to Job Assignee model",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: JobAssigneeData,
      success: true,
      message: "Successfully inserted data to Job Assignee model",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Failed to insert data to Job Assignee model",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: {},
      success: false,
      message: "Failed to insert data to Job Assignee model",
      err: error,
    });
  }
};

// -----------------------------------
// get particular data from table
// -----------------------------------

const getJobAssigneeController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await JobAssigneeService.getJobAssigneesService(
      req.params.id
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched Assignee Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Assignee Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable fetch Assignee Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Assignee Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------

const getAllJobAssigneeController = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await JobAssigneeService.getAllJobAssigneesService();

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched Job Assignees Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Job Assignees Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Unable fetch Job Assignees Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Job Assignees Info",
      err: error,
    });
  }
};

// -------------------------------------------
// order agents by no. of jobs assigned
// -------------------------------------------

const assignAgentsController = async (req, res) => {
  try {
    const response = await JobAssigneeService.assignAgentsService();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully sorted Job Assignees Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to sort Job Assignees Info",
      err: error,
    });
  }
};

// -------------------------------------------
// find agent with min no. of jobs
// -------------------------------------------

const MinJobAgentController = async (req, res) => {
  try {
    const response = await JobAssigneeService.minJobAgentService();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully incremented no. of Jobs assigned",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to increment no. of Jobs assigned",
      err: error,
    });
  }
};

// -------------------------------------------
// increment no. of jobs
// -------------------------------------------

const UpdateJobsAssignedController = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await JobAssigneeService.UpdateJobsAssignedService(id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully found min Job Assignee Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to find min Job Assignee Info",
      err: error,
    });
  }
};

module.exports = {
  createJobAssigneesController,
  getAllJobAssigneeController,
  getJobAssigneeController,
  assignAgentsController,
  MinJobAgentController,
  UpdateJobsAssignedController,
};
