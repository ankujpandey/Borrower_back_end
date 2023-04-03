const { Users_service } = require("../services");

const usersService = new Users_service();

// -----------------------------------
// insert into table
// -----------------------------------
const create = async (req, res) => {
  try {
    const user = await usersService.createUser(req.body);
    console.log("wrng in controller", user);
    return res.status(201).json({
      data: user,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
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
  try {
    const response = await usersService.deleteUser(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
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
  try {
    const response = await usersService.updateUser(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
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

  try {
    const response = await usersService.getUser(req.query);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
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
// get all data from table
// -----------------------------------
const getAll = async (req, res) => {
  try {
    const response = await usersService.getAllUser();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
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
// get all data from table for admin
// -----------------------------------
const getAllByAdmin = async (req, res) => {
  try {
    const response = await usersService.getAllUserByAdmin();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
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
};
