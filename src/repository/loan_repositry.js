const { loan_details } = require("../models/index");

class Loan_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLoanRepo(data) {
    console.log("Loan repository");
    try {
      const createLoanData = await loan_details.create(data);

      return createLoanData;
    } catch (error) {
      console.log("Something went wrong in loan repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // get particular loan data from the table
  // -----------------------------------------
  async getLoanDataRepo(ID) {
    console.log("Loan repository");
    try {
      const LoanStatus = await loan_details.findOne({
        where: {
          uid: ID,
          isDeleted: false,
        },
      });
      return LoanStatus;
    } catch (error) {
      console.log("Something went wrong in loan repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------------
  // update loan status
  // -----------------------------------------
  async updateLoanStatusRepo(data) {
    console.log("Loan repository");
    try {
      const updatedLoanStatus = await loan_details.update(data, {
        where: {
          LoanId: data.LoanId,
          isDeleted: false,
        },
      });
      return updatedLoanStatus;
    } catch (error) {
      console.log("Something went wrong in loan repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Loan_repository;
