const { Loan_repository } = require("../repository");

class Loan_service {
  constructor() {
    this.Loan_repository = new Loan_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLoanService(data) {
    console.log("service loan");

    try {
      const createLoanData = await this.Loan_repository.createLoanRepo(data);

      return createLoanData;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // get particular loan data from the table
  // -----------------------------------------

  async getLoanDataService(ID) {
    console.log("service loan");

    try {
      const LoanStatus = await this.Loan_repository.getLoanDataRepo(ID);

      return LoanStatus;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // update loan status
  // -----------------------------------------

  async updateLoanStatusService(data) {
    console.log("service loan");

    try {
      const updatedLoanStatus = await this.Loan_repository.updateLoanStatusRepo(
        data
      );

      return updatedLoanStatus;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Loan_service;
