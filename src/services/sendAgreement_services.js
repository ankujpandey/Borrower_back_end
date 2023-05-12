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
  constructor() {
    this.userinfoRepository = new UserInfo_repository();
    this.usersRepository = new Users_repository();
    this.jobAssigneeRepo = new JobAssignee_Repo();
  }

  // -----------------------------------
  // send email to user
  // -----------------------------------
  async sendAgreementUserService(uid, jobAssignees_id, loanStatus) {
    const usersRepoResult = await this.usersRepository.getUserDataEmail(uid);
    const userInfoRepoResult =
      await this.userinfoRepository.getUserInfoDataEmail(uid);
    const userData = {
      name:
        userInfoRepoResult.dataValues.firstName +
        " " +
        userInfoRepoResult.dataValues.lastName,
      email: usersRepoResult.email,
      contact: userInfoRepoResult.dataValues.contact,
    };

    const jobAssigneeRepoData = await this.jobAssigneeRepo.getJobAssigneeInfo(
      jobAssignees_id
    );

    const agentData = {
      name: jobAssigneeRepoData.dataValues.name,
      email: jobAssigneeRepoData.dataValues.email,
    };

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
      let message;
      if (loanStatus == 1200) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.userTemplate,
        };
      } else if (loanStatus == 1400) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      }
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

  // -----------------------------------
  // send email to agent
  // -----------------------------------
  async sendAgreementAgentService(uid, jobAssignees_id, loanStatus) {
    const usersRepoResult = await this.usersRepository.getUserDataEmail(uid);
    const userInfoRepoResult =
      await this.userinfoRepository.getUserInfoDataEmail(uid);
    const userData = {
      name:
        userInfoRepoResult.dataValues.firstName +
        " " +
        userInfoRepoResult.dataValues.lastName,
      email: usersRepoResult.email,
      contact: userInfoRepoResult.dataValues.contact,
    };

    const jobAssigneeRepoData = await this.jobAssigneeRepo.getJobAssigneeInfo(
      jobAssignees_id
    );

    const agentData = {
      name: jobAssigneeRepoData.dataValues.name,
      email: jobAssigneeRepoData.dataValues.email,
    };

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

      let message;

      if (loanStatus == 1200) {
        message = {
          to: `${agentData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.agentTemplate,
        };
      } else if (loanStatus == 1500 || loanStatus == -1000) {
        message = {
          to: `${agentData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      }

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
