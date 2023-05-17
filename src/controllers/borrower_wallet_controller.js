const { BorrowerWallet_service } = require("../services");

const BorrowerWalletService = new BorrowerWallet_service();

// -----------------------------------
// insert into table
// -----------------------------------

const createWalletController = async (req, res) => {
	console.log("In Borrower Wallet Controller");

	try {
		const transaction = await BorrowerWalletService.createWalletServices(
			req.body
		);

		return res.status(201).json({
			data: transaction,
			success: true,
			message: "Successfully created a wallet",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
	console.log("In Borrower Wallet Controller");

	try {
		const transaction = await BorrowerWalletService.getWalletServices(
			req.params.id
		);

		return res.status(201).json({
			data: transaction,
			success: true,
			message: "Successfully got wallet data",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
