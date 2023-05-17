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

      throw { error };
    }
  }
}

module.exports = poolTxn_Repo;
