// const { getImages } = require("../mongodb/kyc_image");
// const pdfTemplate = require("../services/template/pdfTemplate");
const puppeteer = require("puppeteer");

class Generate_Pdf {
	async generatedpdfRepo(data) {
		console.log("service====+++==========", data.UserData);

		// Create a browser instance
		const browser = await puppeteer.launch();

		//Create a new page
		const page = await browser.newPage();

		const html = data.pdfTemplate(data.UserData, data.SecondaryData);
		await page.setContent(html, { waitUntil: "domcontentloaded" });

		// To reflect CSS used for screens instead of print
		await page.emulateMediaType("screen");

		// Downlaod the PDF
		const pdf = await page.pdf({
			path: data.path,
			margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
			printBackground: true,
			format: "A4",
		});

		// Close the browser instance
		await browser.close();
	}
}

module.exports = Generate_Pdf;
