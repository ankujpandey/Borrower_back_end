const { Company_repository } = require("../repository");

class Company_service {
  constructor() {
    this.Company_repository = new Company_repository();
  }

  // -----------------------------------
  // get into table
  // -----------------------------------
  async getCompanyService(filter) {
    console.log("service company", filter);

    try {
      const getCompanyData = await this.Company_repository.getCompanyRepo(
        filter
      );
      return getCompanyData;
    } catch (error) {
      console.log("Something went wrong in Company services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Company_service;
