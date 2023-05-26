const { pool_table, sequelize } = require("../../models");

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

  // -----------------------------------------
  // get particular pool data using poolId
  // -----------------------------------------

  async getParticularPoolRepo(id) {
    console.log("Pool get Particular repository");
    try {
      const getParticularPoolRepoData = await pool_table.findOne({
        where: { poolId: id },
      });
      return getParticularPoolRepoData;
    } catch (error) {
      console.log(
        "Something went wrong in get Particular repository layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------------
  // find pool Balance
  // -----------------------------------------
  async getPoolBalance() {
    try {
      const balance = await pool_table.findAll({
        attributes: [
          [sequelize.fn("sum", sequelize.col("available_balance")), "balance"],
        ],
        raw: true,
      });

      return balance;
    } catch (error) {
      console.log(
        "Something went wrong in get Particular repository layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------------
  // update pool Balance
  // -----------------------------------------
  async updatePoolBalance(data) {
    try {
      const balance = await pool_table.update(data, {
        where: {
          poolId: 1,
          isDeleted: false,
        },
      });
      return balance;
    } catch (error) {
      console.log(
        "Something went wrong in get Particular repository layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = Pool_repository;
