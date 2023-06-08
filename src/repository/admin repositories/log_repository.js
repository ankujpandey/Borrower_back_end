const { Log_table } = require("../../models/index");

class Log_repository {
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLogRepo(data) {
    console.log("Log repositry");
    try {
      const createLogData = await Log_table.create(data);
      console.log("create log data", createLogData);
      return createLogData;
    } catch (error) {
      console.log("Something went wrong Log repository layer".magenta);
      throw { error };
    }
  }

  async getLogRepo(id) {
    try {
      const getLogData = await Log_table.findAll({
        where: {
          uid: id,
          isDeleted: false,
        },
      });
      return getLogData;
    } catch (error) {
      console.log("Something went wrong Log repository layer".magenta);
      throw { error };
    }
  }
}

module.exports = Log_repository;
