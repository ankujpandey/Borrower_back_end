const fs = require("fs");
require("./config");

const user_document = require("./user_document_schema");

// -----------------------------------------------------------
// 	Saves Images in mongo- Aadhaar, pan and biometric images
// -----------------------------------------------------------
const saveDocument = async (data) => {
	console.log("data---------->>>>>>>>", Object.keys(data));

	if (Object.keys(data).length > 2) {
		const userData = new user_document({
			uid: data.uid,
			profile_photo: data.profile_image.toString("base64"),
			aadhaar_front: fs
				.readFileSync(`./src/middleware/uploads/${data.aadhaar_front}`)
				.toString("base64"),
			aadhaar_back: fs
				.readFileSync(`./src/middleware/uploads/${data.aadhaar_back}`)
				.toString("base64"),
			PAN_card: null,
		});
		let result = await userData.save();

		fs.unlinkSync(`./src/middleware/uploads/${data.aadhaar_front}`);
		fs.unlinkSync(`./src/middleware/uploads/${data.aadhaar_back}`);
		console.log(result);
	} else {
		let userData = await user_document.updateOne(
			{ uid: data.uid },
			{
				$set: {
					PAN_card: fs
						.readFileSync(`./src/middleware/uploads/${data.PAN_card}`)
						.toString("base64"),
				},
			}
		);
		console.log("image data upload result ------>>>", userData);
		fs.unlinkSync(`./src/middleware/uploads/${data.PAN_card}`);
	}
};

module.exports = {
	saveDocument,
};
