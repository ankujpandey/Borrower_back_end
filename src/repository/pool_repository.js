const { pool_table } = require("../models");

class Pool_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createPoolRepo(data) {
    console.log("Pool create  Repository");

    try {
      const createPoolRepoData = await pool_table.create(data);
      return createPoolRepoData;
    } catch (error) {
      console.log("Something went wrong in Pool create Repository".magenta);

      throw { error };
    }
  }
}

module.exports = Pool_repository;
