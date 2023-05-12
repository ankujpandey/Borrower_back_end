const { Users_repository, Generate_Pdf } = require("../repository");
const { getImages } = require("../mongodb/kyc_image");
const pdfTemplate = require("./template/pdfTemplate");
const puppeteer = require("puppeteer");

class GeneratePdf_service {
	constructor() {
		this.usersRepository = new Users_repository();
		this.generetePDF = new Generate_Pdf();
	}
	// -----------------------------------
	// pdf download by admin
	// -----------------------------------
	async generatedpdfService(id) {
		let object = {};
		object.id = id;

		console.log("service==============", id);
		const UserData = await this.usersRepository.getAllData(id);
		const imageData = await getImages(id);

		object.UserData = UserData;
		object.imageData = imageData;
		object.path = "./src/controllers/result.pdf";
		object.pdfTemplate = pdfTemplate;
		await this.generetePDF.generatedpdfRepo(object);
	}
}
module.exports = GeneratePdf_service;
