const { Bank_repository } = require("../repository");

class Bank_service {
  constructor() {
    this.Bank_repository = new Bank_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createUser(data) {
    console.log("service bank");

    try {
      const createUserData = await this.Bank_repository.createUser(data);

      return createUserData;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Bank_service;
