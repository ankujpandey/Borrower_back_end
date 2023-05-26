const { Logcondition_repository } = require("../../repository");

class Logcondition_service {
  constructor() {
    this.Logcondition_repository = new Logcondition_repository();
  }

  // -----------------------------------
  // get into table
  // -----------------------------------
  async getLogconditionService(code) {
    try {
      const getLogconditionServiceData =
        await this.Logcondition_repository.getLogconditionRepo(code);
      return getLogconditionServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in log condition services layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = Logcondition_service;
