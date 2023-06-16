const { poolTxn_Repo, Pool_repository } = require("../../repository");

class poolTxn_Service {
  constructor() {
    this.poolTxnRepo = new poolTxn_Repo();
    this.poolRepo = new Pool_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createTransaction(data) {
    console.log("Pool Transaction Service");

    try {
      const poolData = await this.poolRepo.getPoolBalance();
      var poolBalance = poolData[0].balance;

      if (data?.credit_Amount) {
        data.txn_flow = "credit";
        poolBalance = parseFloat(poolBalance) + parseFloat(data?.credit_Amount);
      } else if (poolBalance < data?.debit_Amount) {
        console.log("pool balance low!!");
        throw new Error("Please Add Money!");
      } else {
        data.txn_flow = "debit";
        poolBalance = parseFloat(poolBalance) - parseFloat(data?.debit_Amount);
      }

      data.running_Amount = poolBalance;

      const transaction = await this.poolTxnRepo.createTransaction(data);

      const updatePoolBalance = await this.poolRepo.updatePoolBalance({
        available_balance: poolBalance,
      });

      console.log(updatePoolBalance);
      return transaction;
    } catch (error) {
      console.log(
        "Something went wrong in Pool Transaction services layer".magenta
      );

      throw { error };
    }
  }

  // ---------------------------------------------
  // get all transactions of pool table
  // ---------------------------------------------

  async findAllTransactions(req) {
    console.log("Pool Transaction Service");

    try {
      const transactions = await this.poolTxnRepo.findAllTransactions(req);
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

  async getParticularTransacationService(id) {
    console.log("Transcations get particular Service");
    try {
      const getParticularTransacationServiceData =
        await this.poolTxnRepo.getParticularTranscationRepo(id);
      return getParticularTransacationServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in  get particluar transcations services layer"
          .magenta
      );

      throw { error };
    }
  }
}

module.exports = poolTxn_Service;
