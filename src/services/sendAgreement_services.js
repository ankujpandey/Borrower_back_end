const nodemailer = require("nodemailer");

class SendAgreement_service {
  // -----------------------------------
  // send agreement
  // -----------------------------------
  async sendAgreementService(data) {
    console.log("----------service----------");
    let testAccount = await nodemailer.createTestAccount();

    // connect with the SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "neha.altenwerth@ethereal.email",
        pass: "nCcvnatMf7bk5NNK2E",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"MrBorrower" <azharuddin9792@gmail.com>', // sender address
      to: "bcasazharuddin@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("mail sent", info);
    return info;
  }
}

module.exports = SendAgreement_service;
