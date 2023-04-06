const { RoleTable_repository } = require("../repository");

class RoleTable_service {
  constructor() {
    this.RoleTable_repository = new RoleTable_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createRoleTable(data) {
    console.log("role table service");

    try {
      const RoleTableServiceData =
        await this.RoleTable_repository.createRoleTabeRepo(data);
      return RoleTableServiceData;
    } catch (error) {
      console.log("Something went wrong in Role Table services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // get Role ID
  // -----------------------------------

  async getRoleID(data) {
    console.log("role table services");

    try {
      const RoleTableServiceData =
        await this.RoleTable_repository.createRoleTabeRepo(data);
      return RoleTableServiceData;
    } catch (error) {}
  }
}
