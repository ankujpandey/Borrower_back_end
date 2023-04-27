const { Users_repository } = require("../repository");
const { getImages } = require("../mongodb/kyc_image");
const pdfTemplate = require("./template/pdfTemplate");
const puppeteer = require("puppeteer");

class GeneratePdf_service {
  constructor() {
    this.usersRepository = new Users_repository();
  }
  // -----------------------------------
  // insert into table
  // -----------------------------------
  async generatedpdfService(id) {
    console.log("service==============", id);
    const UserData = await this.usersRepository.getAllData(id);
    const imageData = await getImages(id);
    console.log("user============", UserData);
    console.log("image==============", imageData[0].profile_photo);

    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    const html = pdfTemplate(UserData, imageData[0].profile_photo);
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
module.exports = GeneratePdf_service;
