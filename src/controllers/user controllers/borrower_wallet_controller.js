const { BorrowerWallet_service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const {
	GenerateRequest,
	GenerateResponse,
} = require("../../utils/Request_Response");

const BorrowerWalletService = new BorrowerWallet_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createWalletController = async (req, res) => {
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const transaction = await BorrowerWalletService.createWalletServices(
			req.body
		);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: transaction,
			success: true,
			message: "Successfully created a wallet",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(201).json({
			data: transaction,
			success: true,
			message: "Successfully created a wallet",
			err: {},
		});
	} catch (error) {
		console.log(error);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Unable to create wallet",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to create wallet",
			err: error,
		});
	}
};

// -----------------------------------
// insert into table
// -----------------------------------

const getWalletController = async (req, res) => {
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const transaction = await BorrowerWalletService.getWalletServices(
			req.params.id
		);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: transaction,
			success: true,
			message: "Successfully got wallet data",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(201).json({
			data: transaction,
			success: true,
			message: "Successfully got wallet data",
			err: {},
		});
	} catch (error) {
		console.log(error);

		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Unable to get wallet data",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);

		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to get wallet data",
			err: error,
		});
	}
};

module.exports = {
	createWalletController,
	getWalletController,
};
