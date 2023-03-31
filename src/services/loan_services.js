const { Loan_repository } = require("../repository");

class Loan_service {
  constructor() {
    this.Loan_repository = new Loan_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createUser(data) {
    console.log("service loan");

    try {
      const createUserData = await this.Loan_repository.createUser(data);

      return createUserData;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Loan_service;
