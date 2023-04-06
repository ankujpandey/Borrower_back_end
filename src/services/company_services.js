const { Company_repository } = require("../repository");

class Company_service {
  constructor() {
    this.Company_repository = new Company_repository();
  }

  // -----------------------------------
  // get into table
  // -----------------------------------
  async getCompanyService() {
    try {
      const getCompanyData = await this.Company_repository.getCompanyRepo();
      return getCompanyData;
    } catch (error) {
      console.log("Something went wrong in Company services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Company_service;
