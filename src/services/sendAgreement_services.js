const nodemailer = require("nodemailer");

class SendAgreement_service {
  // -----------------------------------
  // send agreement loan
  // -----------------------------------
  async sendAgreementService(data) {
    try {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "faircentmrborrower@gmail.com",
          pass: "amdozngheogafooc",
        },
      });

      const message = {
        to: `${data.to}`,
        subject: `${data.subject}`,
        // text: `${data.text}`,
        html: "<b>Hello world?</b>",
      };
      const info = await transporter.sendMail(message);
      console.log(info);
      return info;
    } catch (error) {
      console.log(
        "Something went wrong in Send Agreement services layer".magenta
      );
      throw { error };
    }
  }
}

module.exports = SendAgreement_service;
