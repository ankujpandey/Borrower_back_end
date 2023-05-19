const { borrowerTxn_Service } = require("../services");
const schedule = require("node-schedule");

const BorrowerTxnService = new borrowerTxn_Service();

// -----------------------------------
// insert into table
// -----------------------------------

const createTransactionController = async (req, res) => {
  console.log("In Borrower Transaction Controller");

  try {
    const transaction = await BorrowerTxnService.createTransaction(req.body);
    return res.status(201).json({
      data: transaction,
      success: true,
      message: "Successfully created a transaction",
      err: {},
    });
  } catch (error) {
    console.log("error detected in wallet transaction", typeof error);
    if (error.error.message === "Please Add Money!") {
      return res.status(503).json({
        data: {},
        success: false,
        message: "Unable to create transaction",
        err: error.error.message,
      });
    }
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create transaction",
      err: error.error.message,
    });
  }
};

// -----------------------------------
// self deduct Seduled EMI
// -----------------------------------

const selfDeductTransactionController = async (req, res) => {
  console.log("In Borrower self deduct transaction Controller");

  try {
    const startTime = new Date(Date.now() + 5000);
    const endTime = new Date(startTime.getTime() + 100000);
    let tenure = 5;
    const job = await schedule.scheduleJob(
      { start: startTime, end: endTime, rule: "*/5 * * * * *" },
      async function () {
        try {
          const transaction = await BorrowerTxnService.createTransaction(
            req.body
          );

          console.log("transaction---->>>>>>>>>>", transaction);
        } catch (error) {
          console.log("error detected in wallet transaction", typeof error);
          if (error.error.message === "Please Add Money!") {
            let time = 0;
            const j = await schedule.scheduleJob(
              { rule: "*/1 * * * * *" },
              async function () {
                let Charge = (parseFloat(req?.body?.debit_Amount) * 5) / 100;
                req.body.extraCharge = Charge;
                try {
                  console.log("transaction---->>>>>>>>>>", req.body);

                  const transaction =
                    await BorrowerTxnService.createTransaction(req.body);

                  console.log("transaction---->>>>>>>>>>", transaction);

                  req.body.extraCharge = 0;
                  j.cancel();
                } catch (error) {
                  console.log(
                    "error detected in wallet transaction",
                    typeof error
                  );
                  if (error.error.message === "Please Add Money!") {
                  }
                }

                if (time === 5) {
                  j.cancel();
                }
                time = time + 1;
              }
            );
          }
        }

        if (tenure === 0) {
          job.cancel();
        }
        tenure = tenure - 1;
      }
    );
    console.log("schedule ended");
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create transaction",
      err: error.error.message,
    });
  }
};

// ---------------------------------------------
// finding transactions of a particular user
// ---------------------------------------------

const findUserTransactionController = async (req, res) => {
  console.log("In Borrower Transaction Controller");

  try {
    const transactions = await BorrowerTxnService.findUserTransaction(
      req.params.id
    );

    return res.status(201).json({
      data: transactions,
      success: true,
      message: "Successfully fetched user's transactions",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch user's transactions",
      err: error,
    });
  }
};

// ---------------------------------------------------------------
// finding transactions of a particular user of particular loan
// ---------------------------------------------------------------

const findUserLoanTransactionController = async (req, res) => {
  console.log("In Borrower Transaction Controller");

  try {
    const transactions = await BorrowerTxnService.findUserLoanTransaction(
      req.params.id,
      req.body.loanId
    );

    return res.status(201).json({
      data: transactions,
      success: true,
      message: "Successfully fetched user's loan transactions",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch user's loan transactions",
      err: error,
    });
  }
};

module.exports = {
  createTransactionController,
  findUserTransactionController,
  findUserLoanTransactionController,
  selfDeductTransactionController,
};
