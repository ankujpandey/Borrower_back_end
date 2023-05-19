const {
	Loan_service,
	SendAgreement_service,
	poolTxn_Service,
	borrowerTxn_Service,
	BorrowerWallet_service,
} = require("../services");
const { saveReqRes } = require("../mongodb/index");
const { createLogController } = require("./log_controller");
const { LoanCombineData } = require("./log_combine_data");

const loanService = new Loan_service();
const SendAgreementService = new SendAgreement_service();
const poolTxnService = new poolTxn_Service();
const borrowerTxnService = new borrowerTxn_Service();
const walletServices = new BorrowerWallet_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLoanController = async (req, res) => {
	// console.log("loan contorller");
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		const loanData = await loanService.createLoanService(req.body);
		console.log("loanData-----", loanData);
		// storeRequestResponse.response = {
		//   data: loanData,
		//   success: true,
		//   message: "Successfully Inserted Loan Data",
		//   err: {},
		// };
		// saveReqRes(storeRequestResponse);
		if (req.body.emailUser) {
			const emailReq = await SendAgreementService.sendAgreementUserService(
				loanData.uid,
				loanData.jobAssignees_id,
				loanData.Loan_state
			);
		}
		if (req.body.emailAgent) {
			const emailReq = await SendAgreementService.sendAgreementAgentService(
				loanData.uid,
				loanData.jobAssignees_id,
				loanData.Loan_state
			);
		}

		const Data = {};
		Data.oldState = "1100";
		Data.loanData = loanData;
		Data.req = req;
		console.log("------------------1", Data);
		const data = LoanCombineData(Data);
		console.log("-----------------", data);
		createLogController(data);
		return res.status(201).json({
			data: loanData,
			success: true,
			message: "Successfully Inserted Loan Data",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Not able to insert into Loan Data",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to insert into Loan Data",
			err: error,
		});
	}
};

// -----------------------------------------
// get particular loan data from the table
// -----------------------------------------

const getLoanDataController = async (req, res) => {
	console.log("loan controller");
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		const LoanStatus = await loanService.getLoanDataService(req.params.id);
		// storeRequestResponse.response = {
		//   data: LoanStatus,
		//   success: true,
		//   message: "Successfully Inserted Loan Data",
		//   err: {},
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(201).json({
			data: LoanStatus,
			success: true,
			message: "Successfully fetched loan status",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Unable to fetched loan status",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to fetched loan status",
			err: error,
		});
	}
};

// -----------------------------------------
// update loan status in the table
// -----------------------------------------

const updateLoanStatusController = async (req, res) => {
	// console.log("loan controller");

	console.log("this is body----->>>>>>>>>>>>>>>>>", req.body.Loan_state);
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		if (req.body.Loan_state === 1500) {
			const wallet = await walletServices.createWalletServices(req.body);
		}

		const updatedLoanStatus = await loanService.updateLoanStatusService(
			req.body
		);

		if (req.body.emailUser) {
			const emailReq = await SendAgreementService.sendAgreementUserService(
				updatedLoanStatus.uid,
				updatedLoanStatus.jobAssignees_id,
				updatedLoanStatus.Loan_state
			);
		}
		if (req.body.emailAgent) {
			const emailReq = await SendAgreementService.sendAgreementAgentService(
				updatedLoanStatus.uid,
				updatedLoanStatus.jobAssignees_id,
				updatedLoanStatus.Loan_state
			);
		}
		// storeRequestResponse.response = {
		//   data: updatedLoanStatus,
		//   success: true,
		//   message: "Successfully updated Loan status",
		//   err: {},
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(201).json({
			data: updatedLoanStatus,
			success: true,
			message: "Successfully updated loan status",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Unable to updated loan status",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to updated loan status",
			err: error,
		});
	}
};

// -----------------------------------------
// get loan status from the table
// -----------------------------------------

const getLoanStatusController = async (req, res) => {
	console.log("loan controller");
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		const loanStatus = await loanService.getLoanStatusService(req.params.id);
		// storeRequestResponse.response = {
		//   data: loanStatus,
		//   success: true,
		//   message: "Successfully updated Loan status",
		//   err: {},
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(201).json({
			data: loanStatus,
			success: true,
			message: "Successfully fetched loan status",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Unable to updated loan status",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to fetch loan status",
			err: error,
		});
	}
};

// ------------------------------------------------
// get particular loan data with EMI calculations
// ------------------------------------------------
const getLoanWithEMIController = async (req, res) => {
	console.log("loan csontroller");
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		const loanStatus = await loanService.getLoanWithEMIService(req.params.id);
		// storeRequestResponse.response = {
		//   data: loanStatus,
		//   success: true,
		//   message: "Successfully updated Loan status",
		//   err: {},
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(201).json({
			data: loanStatus,
			success: true,
			message: "Successfully fetched loan status",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Unable to updated loan status",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to fetch loan status",
			err: error,
		});
	}
};

// -----------------------------------------
// loan Disbursement
// -----------------------------------------
const loanDisbursementController = async (req, res) => {
	console.log("loan controller");
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		console.log("data", req.body);

		const updateLoanState = await loanService.updateLoanStatusService(req.body);

		const poolData = {
			debit_Amount: req.body.amount,
			txn_type: "loan disbursement",
			poolId: 1,
		};

		const walletData = {
			uid: req.body.uid,
			LoanID: req.body.LoanID,
			credit_Amount: req.body.amount,
			txn_type: "loan amount recieved",
		};

		if (updateLoanState) {
			// await poolTxnService.createTransaction(poolData);
			await borrowerTxnService.createTransaction(walletData);
			// await SendAgreementService.sendAgreementUserService(
			// 	req.body.uid,
			// 	req.body.jobAssignees_id,
			// 	req.body.Loan_state
			// );
		}
		return res.status(201).json({
			data: updateLoanState,
			success: true,
			message: "Successfully fetched loan status",
			err: {},
		});
	} catch (error) {
		console.log(error);
		// storeRequestResponse.response = {
		//   data: {},
		//   success: false,
		//   message: "Unable to updated loan status",
		//   err: error,
		// };
		// saveReqRes(storeRequestResponse);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to disburse loan",
			err: error,
		});
	}
};

module.exports = {
	createLoanController,
	getLoanDataController,
	updateLoanStatusController,
	getLoanStatusController,
	getLoanWithEMIController,
	loanDisbursementController,
};
