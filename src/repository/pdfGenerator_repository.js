// const { getImages } = require("../mongodb/kyc_image");
// const pdfTemplate = require("../services/template/pdfTemplate");
const puppeteer = require("puppeteer");

class Generate_Pdf {
	async generatedpdfRepo(data) {
		const path = console.log("service====+++==========", data);

		// Create a browser instance
		const browser = await puppeteer.launch();

		//Create a new page
		const page = await browser.newPage();

		const html = data.pdfTemplate(
			data.UserData,
			data.imageData[0].profile_photo
		);
		await page.setContent(html, { waitUntil: "domcontentloaded" });

		// To reflect CSS used for screens instead of print
		await page.emulateMediaType("screen");

		// Downlaod the PDF
		const pdf = await page.pdf({
			path: "./src/controllers/result.pdf",
			margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
			printBackground: true,
			format: "A4",
		});

		// Close the browser instance
		await browser.close();
	}
}

module.exports = Generate_Pdf;
