const {
  Users_service,
  UserInfo_service,
  Employment_service,
  Bank_service,
} = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
  GenerateRequest,
  GenerateResponse,
} = require("../../utils/Request_Response");
const { createLogController } = require("../admin controllers/log_controller");

const usersService = new Users_service();

// -----------------------------------
// insert into table
// -----------------------------------

const create = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const user = await usersService.createUser(req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: user,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    // ------------------------------
    // Creating log
    // ------------------------------

    const data = {
      uid: user.result.loanData.uid,
      LoanId: user.result.loanData.LoanId,
      assigned: user.result.loanData.jobAssignees_id,
      old_state: "1000",
      current_state: user.result.loanData.Loan_state,
      user_ip: req.socket.remoteAddress,
    };

    createLogController(data);

    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert into User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into User Info",
      err: error,
    });
  }
};

// -----------------------------------
// delete from table
// -----------------------------------

const destroy = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.deleteUser(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able delete from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able delete from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// update table
// -----------------------------------

const update = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.updateUser(req.params.id, req.body);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able update User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able update User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get from table
// -----------------------------------

const get = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getUser(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------

const getAll = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getAllUser();

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table for admin
// -----------------------------------

const getAllByAdmin = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getAllUserByAdmin();

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -------------------------------------
// get all data for user details page
// -------------------------------------

const getAllData = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getAllData(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// --------------------------------------------------
// get user+user_info data for admin dashboard table
// --------------------------------------------------

const getUserData = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getUserData(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// --------------------------------------------------
// get user+user_info data for agent dashboard table
// --------------------------------------------------

const getUserDataAgent = async (req, res) => {
  // generate  request
  const dataReqRes = {};
  dataReqRes.request = GenerateRequest(req);

  try {
    const response = await usersService.getUserDataAgent(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// update user data by Admin
// -----------------------------------

const updateUser = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const dataReqRes = {};

  // generate  request
  dataReqRes.request = GenerateRequest(req);

  try {
    console.log("In controller id:- ", id);
    console.log("In controller data:-", data);
    const userInfo_service = new UserInfo_service();
    const employment_service = new Employment_service();
    const bank_service = new Bank_service();
    const userInfo = await userInfo_service.updateUserInfo(id, data);
    const empInfo = await employment_service.updateEmploymentService(data);
    const bankInfo = await bank_service.updateBankService(data);

    const result = { userInfo, empInfo, bankInfo };

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: result,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: result,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
  } catch (error) {
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });

    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  getAllByAdmin,
  getAllData,
  getUserDataAgent,
  getUserData,
  updateUser,
};
