const { saveReqRes } = require("../../mongodb");
const { Log_service } = require("../../services");
const {
	GenerateRequest,
	GenerateResponse,
} = require("../../utils/Request_Response");

const logService = new Log_service();

// -----------------------------------
// insert into table
// -----------------------------------
const createLogController = async (data) => {
	try {
		const logControllerData = await logService.createLogService(data);
		return logControllerData;
	} catch (error) {
		console.log(error);
		throw { error };
	}
};

// ----------------------------------------
// particular user log details using  uid
// ----------------------------------------

const getLogController = async (req, res) => {
	// generate  request
	const dataReqRes = {};
	dataReqRes.request = GenerateRequest(req);

	try {
		const getlogControllerData = await logService.getLogService(req.params.id);
		// generate  response
		dataReqRes.response = GenerateResponse({
			data: getlogControllerData,
			success: true,
			message: "Successfully fetched Log data",
			err: {},
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);
		return res.status(201).json({
			data: getlogControllerData,
			success: true,
			message: "Successfully fetched Log data",
			err: {},
		});
	} catch (error) {
		// generate  response
		dataReqRes.response = GenerateResponse({
			data: {},
			success: false,
			message: "Not able to  fetched Log data",
			err: error,
		});

		// store request response in mongodb
		saveReqRes(dataReqRes);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to  fetched Log data",
			err: error,
		});
	}
};

module.exports = {
	createLogController,
	getLogController,
};
