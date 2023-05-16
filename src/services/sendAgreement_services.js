const nodemailer = require("nodemailer");
const {
  appliedUser,
  subjectDecide,
  emailTemplateDecide,
} = require("./template/emailTemplates");

const {
  UserInfo_repository,
  Users_repository,
  JobAssignee_Repo,
} = require("../repository");

class SendAgreement_service {
  // -----------------------------------
  // send email to user
  // -----------------------------------
  async sendAgreementUserService(data) {
    console.log("--------data", data);
    try {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "faircentmrborrower@gmail.com",
          pass: "amdozngheogafooc",
        },
      });

      message = {
        to: `${data.to}`,
        subject: `${data.subject}`,
      };
      console.log("-------------data", message);
      const info = await transporter.sendMail(message);
      console.log(info);
      return info;
    } catch (error) {
      console.log(
        "Something went wrong in Send Agreement services layer".magenta
      );
      console.log("------------", error.message);
      throw { error };
    }
  }
}

module.exports = SendAgreement_service;
