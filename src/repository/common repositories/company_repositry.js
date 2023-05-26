const { company_table } = require("../../models/index");

class Company_repository {
  // -----------------------------------
  // get into table
  // -----------------------------------

  async getCompanyRepo() {
    try {
      const getCompanyData = await company_table.findAll({
        attributes: ["company_id", "company_name", "company_domain"],
      });
      return getCompanyData;
    } catch (error) {
      console.log("Something went wrong in company repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Company_repository;
