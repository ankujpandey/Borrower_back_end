const { pool_transaction } = require("../models");

class poolTxn_Repo {
  // -----------------------------------
  // inserting in table
  // -----------------------------------

  async createTransaction(data) {
    console.log("Pool Transaction Repository");

    try {
      const transaction = await pool_transaction.create(data);
      return transaction;
    } catch (error) {
      console.log("Something went wrong in Pool Transaction Repo".magenta);
      console.log(error);

      throw { error };
    }
  }

  // ---------------------------------------------
  // get all transactions of pool table
  // ---------------------------------------------

  async findAllTransactions() {
    console.log("Pool Transaction Repository");

    try {
      const transactions = await pool_transaction.findAll({
        where: { isDeleted: false },
      });
      return transactions;
    } catch (error) {
      console.log(
        "Something went wrong in Pool Transaction Repository layer".magenta
      );

      throw { error };
    }
  }

  // ---------------------------------------------------
  // find Particular transactions using pool Id
  // ---------------------------------------------------
  async getParticularTranscationRepo(id) {
    console.log("Pool get Particular repositroy");
    try {
      const getParticularTranscationRepoData = await pool_transaction.findOne({
        where: { poolId: id },
      });
      return getParticularTranscationRepoData;
    } catch (error) {
      console.log(
        "Something went wrong in get Particular repository layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = poolTxn_Repo;
