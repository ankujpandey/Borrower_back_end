const { Log_table } = require("../models/index");

class Log_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLogRepo(data) {
    console.log("Log repositry");
    try {
      const createLogData = await Log_table.create(data);
      return createLogData;
    } catch (error) {
      console.log("Something went wrong Log repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Log_repository;
