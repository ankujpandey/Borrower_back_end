const { Users_repository, Generate_Pdf } = require("../../repository");
const { getImages } = require("../../mongodb/kyc_image");
const userDetailsPdf = require("../template/pdfTemplate");
const agreementTemplate = require("../template/agreementTemplate");
const { Loan_service } = require("../user services/loan_services");
const nocTemplate = require("../template/nocTemplate");
// const puppeteer = require("puppeteer");

class GeneratePdf_service {
	constructor() {
		this.usersRepository = new Users_repository();
		this.generetePDF = new Generate_Pdf();
	}
	// -----------------------------------
	// user details pdf download by admin
	// -----------------------------------
	async generateUserPdfServices(id) {
		let object = {};
		object.id = id;

		console.log("service==============", id);
		const UserData = await this.usersRepository.getAllData(id);
		const imageData = await getImages(id);

		object.UserData = UserData;
		object.SecondaryData = imageData;
		object.path = "./src/controllers/pdf/userData.pdf";
		object.pdfTemplate = userDetailsPdf;
		await this.generetePDF.generatedpdfRepo(object);
	}

	// -----------------------------------
	// user agreement download
	// -----------------------------------
	async generateAgreementPdfServices(id, loanData) {
		let object = {};
		object.id = id;

		console.log("service==============", loanData);
		const UserData = await this.usersRepository.getAllData(id);

		object.UserData = UserData;
		object.SecondaryData = loanData;
		object.path = "./src/controllers/pdf/agreement.pdf";
		object.pdfTemplate = agreementTemplate;
		await this.generetePDF.generatedpdfRepo(object);
	}
	// -----------------------------------
	// user noc download
	// -----------------------------------
	async generateNocPdfServices(userData) {
		let object = {};
		object.id = userData.uid;
		object.UserData = userData;
		object.path = "./src/controllers/pdf/noc.pdf";
		object.pdfTemplate = nocTemplate;
		await this.generetePDF.generatedpdfRepo(object);
	}
}
module.exports = GeneratePdf_service;
