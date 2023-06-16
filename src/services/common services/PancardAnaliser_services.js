const IDAnalyzer = require("idanalyzer");
const { UserInfo_repository } = require("../../repository");
const fs = require("fs");
const { saveDocument } = require("../../mongodb/user_document");

let CoreAPI = new IDAnalyzer.CoreAPI("vY5V2bPkt1KmMdTofSqT3SnacCUaCdUI", "US");

const userinfoRepository = new UserInfo_repository();

async function pancardScan(primary_img, id) {
	// Enable authentication module v2 to check if ID is authenti
	CoreAPI.enableAuthentication(true, 2);

	console.log("id----------->>>>>", id);
	const userInfo = await userinfoRepository.getUserInfo(id);

	CoreAPI.verifyDocumentNumber(userInfo.dataValues.pan);
	CoreAPI.verifyName(userInfo.dataValues.firstName);

	// Analyze ID image by passing URL of the ID image (you may also use a local file)

	try {
		const response = await CoreAPI.scan({
			document_primary: `./src/middleware/uploads/${primary_img}`,
		});
		if (!response.error) {
			console.log("this is response------------", response);
			// All the information about this ID will be returned in an associative array
			let data_result = response["result"];
			let authentication_result = response["authentication"];
			let verification_data = response["verification"];
			if (
				verification_data.result.name === false ||
				verification_data.result.documentNumber === false
			) {
				console.log("Wrong data");
				let data = {};
				data.PAN_card = primary_img;
				data.uid = id;
				saveDocument(data);
			} else {
				console.log(`Hello your name is ${data_result["fullName"]}`);
				let data = {};
				data.PAN_card = primary_img;
				data.uid = id;
				saveDocument(data);
			}

			// Parse document authentication results
			if (authentication_result) {
				if (authentication_result["score"] > 0.5) {
					console.log("The document uploaded is authentic");
				} else if (authentication_result["score"] > 0.3) {
					console.log("The document uploaded looks little bit suspicious");
				} else {
					console.log("The document uploaded is fake");
				}
			}
		}
		return response;
	} catch (error) {
		console.log("something went wrong in the id analzer in services");
		throw { error };
	}
}

module.exports = { pancardScan };
