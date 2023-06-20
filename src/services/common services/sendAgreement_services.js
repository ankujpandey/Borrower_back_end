const nodemailer = require("nodemailer");
const {
  appliedUser,
  subjectDecide,
  emailTemplateDecide,
  sendEmailtoAdmin,
} = require("../template/emailTemplates");

const {
  UserInfo_repository,
  Users_repository,
  JobAssignee_Repo,
  Admin_repository,
} = require("../../repository");

class SendAgreement_service {
  constructor() {
    this.userinfoRepository = new UserInfo_repository();
    this.usersRepository = new Users_repository();
    this.jobAssigneeRepo = new JobAssignee_Repo();
    this.AdminRepository = new Admin_repository();
  }

  // -----------------------------------
  // send email to user
  // -----------------------------------
  async sendAgreementUserService(uid, jobAssignees_id, loanStatus) {
    console.log("loanStatus", loanStatus);
    const usersRepoResult = await this.usersRepository.getUserDataEmail(uid);
    const userInfoRepoResult =
      await this.userinfoRepository.getUserInfoDataEmail(uid);
    const userData = {
      name: userInfoRepoResult.firstName + " " + userInfoRepoResult.lastName,
      email: usersRepoResult.email,
      contact: userInfoRepoResult.contact,
    };
    // console.log("usersRepoResult", usersRepoResult.email);
    // console.log("userInfoRepoResult", userInfoRepoResult.lastName);

    const jobAssigneeRepoData = await this.jobAssigneeRepo.getJobAssigneeInfo(
      jobAssignees_id
    );
    // console.log("jobAssigneeRepoData", jobAssigneeRepoData.name);

    const agentData = {
      name: jobAssigneeRepoData.name,
      email: jobAssigneeRepoData.email,
    };

    const html = emailTemplateDecide(userData, loanStatus, agentData);
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
      } else if (loanStatus == 1500) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.userTemplate,
          attachments: [
            {
              filename: "agreement.pdf",
              path: "src/controllers/pdf/agreement.pdf",
            },
          ],
        };
      } else if (loanStatus == 1600) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      } else if (loanStatus == 1700) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html,
        };
      } else if (loanStatus == -1000) {
        message = {
          to: `${userData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.userTemplate,
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
      name: userInfoRepoResult.firstName + " " + userInfoRepoResult.lastName,
      email: usersRepoResult.email,
      contact: userInfoRepoResult.contact,
    };

    const jobAssigneeRepoData = await this.jobAssigneeRepo.getJobAssigneeInfo(
      jobAssignees_id
    );

    const agentData = {
      name: jobAssigneeRepoData.name,
      email: jobAssigneeRepoData.email,
    };

    const html = emailTemplateDecide(userData, loanStatus, agentData);
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
      } else if (loanStatus == 1500) {
        message = {
          to: `${agentData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.agentTemplate,
          attachments: [
            {
              filename: "agreement.pdf",
              path: "src/controllers/pdf/agreement.pdf",
            },
          ],
        };
      } else if (loanStatus == -1000) {
        message = {
          to: `${agentData.email}`,
          subject: subjectDecide(loanStatus),
          html: html.agentTemplate,
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
  // send email to admin
  // -----------------------------------

  async sendEmailAdminService() {
    const admin = await this.AdminRepository.getAllAdmins();

    let mailList = [];
    admin.forEach((element) => {
      mailList.push(element.email);
    });
    console.log("mailList", mailList);
    const html = sendEmailtoAdmin();
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

      const message = {
        to: mailList,
        subject: "Pool balance low!! Please add money.",
        html: html,
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

  // -----------------------------------
  // send NOC to User
  // -----------------------------------

  async sendNocUserService(uid, loanState, userData) {
    try {
      const usersRepoResult = await this.usersRepository.getUserDataEmail(uid);

      const html = emailTemplateDecide(userData, loanState);

      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "faircentmrborrower@gmail.com",
          pass: "amdozngheogafooc",
        },
      });

      const message = {
        to: usersRepoResult.email,
        subject: subjectDecide(loanState),
        html: html,
        attachments: [
          {
            filename: "noc.pdf",
            path: "src/controllers/pdf/noc.pdf",
          },
        ],
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
