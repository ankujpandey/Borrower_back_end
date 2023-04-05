const uploadImage = require("../middleware/uploadImage");
const coreAPI = require("../services/index");

// ------------------------------------------------
//	Save images and send Analysis of Aadhaar
// ------------------------------------------------

const checkData = async (req, res) => {
	console.log("myfilename", req.body.myfilename);
	imageFiles = [];
	try {
		console.log(req.params.id);
		const analysis = await coreAPI.Id_analyzer.idScan(
			req.body.myfilename[0],
			req.body.myfilename[1],
			req.body.myfilename[2],
			req.params.id
		);

		console.log("analysis======>>>>>", analysis);

		return res.status(201).json({
			data: analysis,
			success: true,
			message: "Data fetched and Analisys Successful.",
			err: {},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Data not fetched or not able to Analyse.",
			err: error,
		});
	}
};

module.exports = {
	checkData,
};
