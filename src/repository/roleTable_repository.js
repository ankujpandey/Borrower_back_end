const { RoleTable } = require("../models");

class RoleTable_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createRoleTabeRepo(data) {
    console.log("Role Table Repository");
    try {
      const createdRole = await RoleTable.create(data);
      return createdRole;
    } catch (error) {
      console.log(
        "Something went wrong in Role Table repository layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------
  // get RoleID from table
  // -----------------------------------
  async getAdminInfo(data) {
    try {
      const RoleInfo = await Admin.findOne({
        where: {
          email: data.email,
          password: data.password,
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
}

module.exports = RoleTable_repository;
