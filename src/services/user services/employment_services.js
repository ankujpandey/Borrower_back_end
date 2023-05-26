const { Employment_repository } = require("../../repository");

class Employment_service {
  constructor() {
    this.Employment_repository = new Employment_repository();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createEmploymentService(data) {
    console.log("service employment");

    try {
      const createEmploymentData =
        await this.Employment_repository.createEmploymentRepo(data);

      return createEmploymentData;
    } catch (error) {
      console.log("Something went wrong in Loan services layer".magenta);
      throw { error };
    }
  }

  // -----------------------------------
  // update table
  // -----------------------------------
  async updateEmploymentService(data) {
    console.log("service employment");

    try {
      const updatedEmploymentData =
        await this.Employment_repository.updateEmploymentRepo(data);

      return updatedEmploymentData;
    } catch (error) {
      console.log("Something went wrong in Employment services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Employment_service;
