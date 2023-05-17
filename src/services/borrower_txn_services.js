const { borrowerTxn_Repo } = require("../repository");

class borrowerTxn_Service {
  constructor() {
    this.borrowerTxnRepo = new borrowerTxn_Repo();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createTransaction(data) {
    console.log("Borrower Transaction Service");

    try {
      const transaction = await this.borrowerTxnRepo.createTransaction(data);
      return transaction;
    } catch (error) {
      console.log(
        "Something went wrong in Borrower Transaction services layer".magenta
      );
      throw { error };
    }
  }

  // ---------------------------------------------
  // finding transactions of a particular user
  // ---------------------------------------------

  async findUserTransaction(uid) {
    console.log("Borrower Transaction Service");

    try {
      const transactions = await this.borrowerTxnRepo.findUserTransaction(uid);
      return transactions;
    } catch (error) {
      console.log(
        "Something went wrong in Borrower Transaction services layer".magenta
      );

      throw { error };
    }
  }

  // ---------------------------------------------------------------
  // finding transactions of a particular user of particular loan
  // ---------------------------------------------------------------

  async findUserLoanTransaction(uid, loanId) {
    console.log("Borrower Transaction Service");

    try {
      const transactions = await this.borrowerTxnRepo.findUserLoanTransaction(
        uid,
        loanId
      );
      return transactions;
    } catch (error) {
      console.log(
        "Something went wrong in Borrower Transaction services layer".magenta
      );

      throw { error };
    }
  }
}

module.exports = borrowerTxn_Service;
