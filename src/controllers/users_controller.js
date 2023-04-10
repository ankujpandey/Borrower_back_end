const { Users_service } = require("../services");
const { saveReqRes } = require("../mongodb/index");

const usersService = new Users_service();

// -----------------------------------
// insert into table
// -----------------------------------
const create = async (req, res) => {
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const user = await usersService.createUser(req.body);
    console.log("wrng in controller", user);
    storeRequestResponse.response = {
      data: user,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);

    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able to insert into User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.params.id;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await usersService.deleteUser(req.params.id);
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able delete from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;

  try {
    const response = await usersService.updateUser(req.params.id, req.body);
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able update User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  console.log("req.query", req.query);
  console.log("req.body", req.body);
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.query;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;

  try {
    const response = await usersService.getUser(req.query);
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body || "";
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await usersService.getAllUser();
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body || "";
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await usersService.getAllUserByAdmin();
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data of particular user
// -----------------------------------

const getAllData = async (req, res) => {
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.params.id;
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await usersService.getAllData(req.params.id);
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get user data
// -----------------------------------

const getUserData = async (req, res) => {
  const storeRequestResponse = {};
  const requestObj = {};
  requestObj.body = req.body || "";
  requestObj.headers = req.rawHeaders;
  storeRequestResponse.request = requestObj;
  try {
    const response = await usersService.getUserData();
    storeRequestResponse.response = {
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    };
    saveReqRes(storeRequestResponse);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    storeRequestResponse.response = {
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    };
    saveReqRes(storeRequestResponse);
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
  getUserData,
};
