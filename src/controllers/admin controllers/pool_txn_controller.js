const { poolTxn_Service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
	GenerateRequest,
	GenerateResponse,
} = require("../../utils/Request_Response");

const PoolTxnService = new poolTxn_Service();

// -----------------------------------
// insert into table
// -----------------------------------

const createTransactionController = async (req, res) => {
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const transaction = await PoolTxnService.createTransaction(req.body);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: transaction,
			success: true,
			message: "Successfully created a transaction",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(201).json({
			data: transaction,
			success: true,
			message: "Successfully created a transaction",
			err: {},
		});
	} catch (error) {
		console.log(error);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Unable to create transaction",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

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
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const transactions = await PoolTxnService.findAllTransactions(req.query);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: transactions,
			success: true,
			message: "Successfully fetched all transactions",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(201).json({
			data: transactions,
			success: true,
			message: "Successfully fetched all transactions",
			err: {},
		});
	} catch (error) {
		console.log(error);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Unable to fetch transactions",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

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
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const getParticularTransactionControllerData =
			await PoolTxnService.getParticularTransacationService(req.params.id);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: getParticularTransactionControllerData,
			success: true,
			message: "Successfully fetch particular transactions table",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(201).json({
			data: getParticularTransactionControllerData,
			success: true,
			message: "Successfully fetch particular transactions table",
			err: {},
		});
	} catch (error) {
		console.log(error);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Unable to fetch particular transactions table",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

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
