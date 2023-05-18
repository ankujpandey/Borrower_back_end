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

  // -----------------------------------
  // get particular pool ID table data
  // -----------------------------------

  async getParticularPoolRepo(id) {
    console.log("Pool get Particular repositroy");
    try {
      const getParticularPoolRepoData = await pool_table.findOne({
        where: { poolId: id },
      });
      // console.log(user.brightCyan);
      return getParticularPoolRepoData;
    } catch (error) {
      console.log(
        "Something went wrong in get Particular repository layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = Pool_repository;
