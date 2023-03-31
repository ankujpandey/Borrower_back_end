const { bank_details } = require("../models/index");

class Bank_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createUser(data) {
    console.log("Bank repositry");
    try {
      const createUserData = await bank_details.create(data);
      return createUserData;
    } catch (error) {
      console.log("Something went wrong in Bank repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Bank_repository;
