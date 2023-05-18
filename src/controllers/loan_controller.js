const { Loan_service, SendAgreement_service } = require("../services");
const { borrowerTxn_Service } = require("../services");
const schedule = require("node-schedule");

const { saveReqRes } = require("../mongodb/index");
const { createLogController } = require("./log_controller");
const { LoanCombineData } = require("./log_combine_data");

const loanService = new Loan_service();
const SendAgreementService = new SendAgreement_service();
const BorrowerTxnService = new borrowerTxn_Service();

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
				loanData.dataValues.uid,
				loanData.dataValues.jobAssignees_id,
				loanData.dataValues.Loan_state
			);
		}
		if (req.body.emailAgent) {
			const emailReq = await SendAgreementService.sendAgreementAgentService(
				loanData.dataValues.uid,
				loanData.dataValues.jobAssignees_id,
				loanData.dataValues.Loan_state
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

	console.log("this is body----->>>>>>>>>>>>>>>>>", req.body);
	// const storeRequestResponse = {};
	// const requestObj = {};
	// requestObj.body = req.body;
	// requestObj.headers = req.rawHeaders;
	// storeRequestResponse.request = requestObj;
	try {
		const updatedLoanStatus = await loanService.updateLoanStatusService(
			req.body
		);

		if (req.body.emailUser) {
			const emailReq = await SendAgreementService.sendAgreementUserService(
				updatedLoanStatus.dataValues.uid,
				updatedLoanStatus.dataValues.jobAssignees_id,
				updatedLoanStatus.dataValues.Loan_state
			);
		}
		if (req.body.emailAgent) {
			const emailReq = await SendAgreementService.sendAgreementAgentService(
				updatedLoanStatus.dataValues.uid,
				updatedLoanStatus.dataValues.jobAssignees_id,
				updatedLoanStatus.dataValues.Loan_state
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

// -----------------------------------------
// get particular loan data with EMI calculations
// -----------------------------------------
const getLoanWithEMIController = async (req, res) => {
	console.log("loan controller");
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

// -----------------------------------
// self deduct Seduled EMI
// -----------------------------------

const selfDeductTransactionController = async (req, res) => {
	console.log("In Borrower self deduct transaction Controller");

	try {
		const startTime = new Date(Date.now() + 5000);
		const endTime = new Date(startTime.getTime() + 5000);
		const job = schedule.scheduleJob(
			{ start: startTime, end: endTime, rule: "*/1 * * * * *" },
			function () {
				console.log("Time for tea!");
			}
		);
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
		}
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: false,
			message: "Unable to create transaction",
			err: error.error.message,
		});
	}
};

module.exports = {
	createLoanController,
	getLoanDataController,
	updateLoanStatusController,
	getLoanStatusController,
	getLoanWithEMIController,
};
