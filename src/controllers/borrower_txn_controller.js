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
};
