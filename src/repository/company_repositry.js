const { Op } = require("sequelize");
const { company_table } = require("../models/index");

class Company_repository {
  // -----------------------------------
  // get into table
  // -----------------------------------

  async getCompanyRepo(filter) {
    console.log("Company repositry", filter);
    try {
      if (filter) {
        const getCompanyData = await company_table.findAll({
          where: {
            company_name: {
              [Op.startsWith]: filter.company,
            },
          },
        });

        return getCompanyData;
      }
      const getCompanyData = await company_table.findAll();
      return getCompanyData;
    } catch (error) {
      console.log("Something went wrong in company repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Company_repository;
