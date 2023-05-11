const nodemailer = require("nodemailer");
const {
  appliedUser,
  subjectDecide,
  emailTemplateDecide,
} = require("./template/emailTemplates");

class SendAgreement_service {
  // -----------------------------------
  // send agreement loan
  // -----------------------------------
  async sendAgreementService(userData, agentData, loanStatus) {
    // console.log("user data---", userData);
    console.log("agent data---", agentData);
    // console.log("loan data---", loanData);

    const html = emailTemplateDecide(userData, agentData, loanStatus);
    console.log("html-----", html);

    try {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "faircentmrborrower@gmail.com",
          pass: "amdozngheogafooc",
        },
      });

      let message1, message2;

      if (loanStatus == 1200) {
        message1 = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.userTemplate,
        };
        // message2 = {
        //   to: `${agentData.email}`,
        //   subject: subjectDecide(loanStatus),
        //   html: html.agentTemplate,
        // };
      } else if (loanStatus == 1400) {
        message1 = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      } else {
        message1 = {
          to: `${agentData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      }

      const info = await transporter.sendMail(message1);
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
