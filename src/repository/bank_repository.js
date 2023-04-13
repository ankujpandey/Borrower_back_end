const { bank_details } = require("../models/index");

class Bank_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createBankRepo(data) {
    console.log("Bank repositry");
    try {
      const createBankData = await bank_details.create(data);
      return createBankData;
    } catch (error) {
      console.log("Something went wrong in Bank repository layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // update into table using uid
  // -----------------------------------
  async updateBankRepo(data) {
    console.log("Bank repository");
    try {
      const updatedBankData = await bank_details.update(data, {
        where: {
          uid: data.uid,
        },
      });
      return updatedBankData;
    } catch (error) {
      console.log("Something went wrong in Bank repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Bank_repository;
