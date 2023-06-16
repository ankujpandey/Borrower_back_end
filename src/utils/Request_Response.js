const GenerateRequest = (req) => {
	const requestObj = {};
	requestObj.body = req.body || req.query || req.params.id || req.files || "";
	requestObj.headers = req.rawHeaders || "";
	return requestObj;
};

const GenerateResponse = (data) => {
	const responseObj = {};
	responseObj.data = data.data;
	responseObj.success = data.success;
	responseObj.message = data.message;
	responseObj.err = data.err;
	return responseObj;
};

module.exports = { GenerateRequest, GenerateResponse };
