const { Admin } = require("../../models/index");

class Admin_repo {
  // -----------------------------------
  // inserting in table
  // -----------------------------------

  async createAdminRepo(data) {
    console.log("Admin repository");
    try {
      const AdminData = await Admin.create(data);
      return AdminData;
    } catch (error) {
      console.log("Something went wrong in Admin Repository Layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get particular data from table
  // -----------------------------------
  async getAdminInfo(ID) {
    try {
      const adminInfo = await Admin.findOne({
        where: {
          adminID: ID,
          isDeleted: false,
        },
      });
      console.log(adminInfo.brightCyan);
      return adminInfo;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get all admins data from table
  // -----------------------------------

  async getAllAdmins() {
    try {
      const admins = await Admin.findAll({
        where: {
          isDeleted: false,
        },
      });
      console.log(admins.brightCyan);
      return admins;
    } catch (error) {
      console.log("Something went wrong in repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Admin_repo;
