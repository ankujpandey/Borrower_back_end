const { pool_transaction, sequelize } = require("../../models");

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

  async findAllTransactions(req) {
    try {
      let [len, meta] = await sequelize.query(
        `SELECT COUNT(*) as length FROM pool_transactions`
      );
      console.log("len-----------", len);
      const page = parseInt(req.page) || 1;
      const limit = parseInt(req.limit) || 2;
      let reqObj = {};
      const skip = (page - 1) * limit;
      const [data, metadata] = await sequelize.query(
        `SELECT * FROM pool_transactions LIMIT ${limit} OFFSET ${skip} `
      );
      console.log("daATA-----------", data);
      reqObj.data = data;
      reqObj.length = len;
      return reqObj;
    } catch (error) {
      console.log(
        "Something went wrong in pool transcation repository layer".magenta.bold
      );
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
