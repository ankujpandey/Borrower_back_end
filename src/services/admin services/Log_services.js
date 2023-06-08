const { Log_repository } = require("../../repository");

class Log_service {
  constructor() {
    this.Log_repository = new Log_repository();
  }
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async createLogService(data) {
    console.log("service Log");

    try {
      const createLogData = await this.Log_repository.createLogRepo(data);
      return createLogData;
    } catch (error) {
      console.log("Something went wrong in log services layer".magenta);
      throw { error };
    }
  }

  async getLogService(id) {
    try {
      const getLogData = await this.Log_repository.getLogRepo(id);
      return getLogData;
    } catch (error) {
      console.log("Something went wrong in log services layer".magenta);
      throw { error };
    }
  }
}

module.exports = Log_service;
