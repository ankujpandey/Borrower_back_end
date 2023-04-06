const { Admin_service } = require("../services");

const adminService = new Admin_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createAdminController = async (req, res) => {
  console.log("admin controller");
  try {
    const adminData = await adminService.createAdminService(req.body);

    return res.status(201).json({
      data: adminData,
      success: true,
      message: "Successfully inserted data to Admin model",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(201).json({
      data: {},
      success: false,
      message: "Failed to insert data to Admin model",
      err: error,
    });
  }
};

// -----------------------------------
// get particular data from table
// -----------------------------------

const getAdminController = async (req, res) => {
  console.log("admin controller");
  try {
    const response = await adminService.getAdminService(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admin Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Admin Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------

const getAllAdminController = async (req, res) => {
  console.log("admin controller");
  try {
    const response = await adminService.getAllAdminsService();
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched Admins Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable fetch Admins Info",
      err: error,
    });
  }
};

module.exports = {
  createAdminController,
  getAdminController,
  getAllAdminController,
};
