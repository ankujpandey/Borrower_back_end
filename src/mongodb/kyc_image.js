const fs = require("fs");
require("./config");

const user_document = require("./user_document_schema");

// -----------------------------------
// insert into table
// -----------------------------------
async function getImages(id) {
	try {
		const kyc_image = await user_document.find({ uid: id });
		return kyc_image;
	} catch (error) {
		console.log("Something went wrong in kyc_Image in mongoDb".magenta);
		throw { error };
	}
}

module.exports = { getImages };
