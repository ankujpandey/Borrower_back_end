const { Pool_repository, poolTxn_Repo } = require("../repository");

class Pool_Service {
  constructor() {
    this.PoolRepository = new Pool_repository();
    this.poolTxnRepo = new poolTxn_Repo();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createPoolService(data) {
    console.log("Pool create Service");
    try {
      const createPoolServiceData = await this.PoolRepository.createPoolRepo(
        data
      );
      return createPoolServiceData;
    } catch (error) {
      console.log("Something went wrong in Pool create services layer".magenta);

      throw { error };
    }
  }

  // -----------------------------------
  // get particular pool ID table data
  // -----------------------------------
  async getParticularPoolService(id) {
    console.log("Pool get particular Service");
    try {
      const getParticularPoolServiceData =
        await this.PoolRepository.getParticularPoolRepo(id);
      return getParticularPoolServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in Pool get particluar services layer".magenta
      );

      throw { error };
    }
  }

  // --------------------------------------------------
  // get pool+pool_transcation  data for pool table
  // --------------------------------------------------
  async getPoolService(id) {
    console.log("Pool get  Service");
    const getPoolServiceData = {};
    try {
      getPoolServiceData.pool_table =
        await this.PoolRepository.getParticularPoolRepo(id.PoolId);
      getPoolServiceData.poolTxn_table =
        await this.poolTxnRepo.getParticularTranscationRepo(id.PoolId);
      return getPoolServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in Pool get particluar services layer".magenta
      );

      throw { error };
    }
  }
}

module.exports = Pool_Service;
