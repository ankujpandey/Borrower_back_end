const { employment_details } = require("../models/index");

class Employment_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createEmploymentRepo(data) {
    console.log("Employment repositry");
    try {
      const createEmploymentData = await employment_details.create(data);
      return createEmploymentData;
    } catch (error) {
      console.log(
        "Something went wrong in Employment repository layer".magenta
      );
      throw { error };
    }
  }

  // -----------------------------------
  // update into table
  // -----------------------------------
  async updateEmploymentRepo(data) {
    console.log("Employment repository");
    try {
      const updatedEmploymentData = await employment_details.update(data, {
        where: {
          uid: data.uid,
        },
      });
      return updatedEmploymentData;
    } catch (error) {
      console.log(
        "Something went wrong in Employment repository layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = Employment_repository;
