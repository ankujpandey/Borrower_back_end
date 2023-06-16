const { log_condition } = require("../../models/index");

class Logcondition_repository {
  // -----------------------------------
  // get into table
  // -----------------------------------

  async getLogconditionRepo(code) {
    console.log("----------", code);
    try {
      const getLogconditionRepoData = await log_condition.findOne({
        where: {
          cndtn_code: code.cndtn_code,
        },
      });
      console.log("-------111", getLogconditionRepoData);
      return getLogconditionRepoData;
    } catch (error) {
      console.log(
        "Something went wrong in logCondtion repository layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = Logcondition_repository;
