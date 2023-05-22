const { poolTxn_Service } = require("../services");

const PoolTxnService = new poolTxn_Service();

// -----------------------------------
// insert into table
// -----------------------------------

const createTransactionController = async (req, res) => {
  console.log("In Pool Transaction Controller");

  try {
    const transaction = await PoolTxnService.createTransaction(req.body);

    return res.status(201).json({
      data: transaction,
      success: true,
      message: "Successfully created a transaction",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create transaction",
      err: error,
    });
  }
};

// -----------------------------------
// find all transactions
// -----------------------------------

const findAllTransactionsController = async (req, res) => {
  console.log("In Pool Transaction Controller");

  try {
    const transactions = await PoolTxnService.findAllTransactions(req.query);

    return res.status(201).json({
      data: transactions,
      success: true,
      message: "Successfully fetched all transactions",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch transactions",
      err: error,
    });
  }
};

// ---------------------------------------------------
// find Particular transactions using pool Id
// ---------------------------------------------------
const getParticularTransactionController = async (req, res) => {
  console.log(" find Particular transactions using pool Id Controller");
  try {
    const getParticularTransactionControllerData =
      await PoolTxnService.getParticularTransacationService(req.params.id);

    return res.status(201).json({
      data: getParticularTransactionControllerData,
      success: true,
      message: "Successfully fetch particular transactions table",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch particular transactions table",
      err: error,
    });
  }
};

module.exports = {
  createTransactionController,
  findAllTransactionsController,
  getParticularTransactionController,
};