const { Admin_repository } = require("../repository");

class Admin_service {
  constructor() {
    this.Admin_repository = new Admin_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createAdminService(data) {
    console.log("admin service");

    try {
      const AdminServiceData = await this.Admin_repository.createAdminRepo(
        data
      );
      return AdminServiceData;
    } catch (error) {
      console.log("Something went wrong in Admin services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async getAdminService(ID) {
    console.log("admin service");

    try {
      const AdminServiceData = await this.Admin_repository.getAdminInfo(ID);
      return AdminServiceData;
    } catch (error) {
      console.log("Something went wrong in Admin services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get all admins from table
  // -----------------------------------

  async getAllAdminsService() {
    try {
      const result = await this.Admin_repository.getAllAdmins();
      return result;
    } catch (error) {
      console.log("Something went wrong in Admin services".magenta);
      throw { error };
    }
  }
}

module.exports = Admin_service;
