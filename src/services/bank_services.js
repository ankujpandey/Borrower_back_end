const { Bank_repository } = require("../repository");

class Bank_service {
  constructor() {
    this.Bank_repository = new Bank_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createBankService(data) {
    console.log("service bank");

    try {
      const createBankData = await this.Bank_repository.createBankRepo(data);

      return createBankData;
    } catch (error) {
      console.log("Something went wrong in Bank services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Bank_service;
