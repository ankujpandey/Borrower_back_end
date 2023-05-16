const { Pool_repository } = require("../repository");

class Pool_Service {
  constructor() {
    this.PoolRepository = new Pool_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createPoolService(data) {
    console.log("Pool create Service");
    try {
      const createPoolServiceData = await this.PoolRepository.createPoolRepo(
        data
      );
      return createPoolServiceData;
    } catch (error) {
      console.log("Something went wrong in Pool create services layer".magenta);

      throw { error };
    }
  }
}

module.exports = Pool_Service;
