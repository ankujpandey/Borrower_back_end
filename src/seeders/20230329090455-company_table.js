"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("company_tables", [
      {
        company_name: "Faircent",
        company_domain: "faircent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: " TCS",
        company_domain: "tcs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Wipro",
        company_domain: "wipro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Infosys",
        company_domain: "infosys",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "HCL",
        company_domain: "hcl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Tech Mahindra",
        company_domain: "techmahindra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Mphais",
        company_domain: "mphais",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Mindtree",
        company_domain: "mindtree",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "LTI",
        company_domain: "lti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Cognizant",
        company_domain: "cognizant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Eclerx",
        company_domain: "eclerx",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Accenture",
        company_domain: "accenture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Oracle",
        company_domain: "oracle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Capgemini",
        company_domain: "capgemini",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "WNS Global",
        company_domain: "wnsglobal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Syntel",
        company_domain: "syntel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Adobe Systems",
        company_domain: "adobesystems",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "SAP Labs",
        company_domain: "saplabs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Intuit India",
        company_domain: "intuitindia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Trigent",
        company_domain: "trigent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Symantec",
        company_domain: "symantec",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Datamatics",
        company_domain: "datamatics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Deloitte",
        company_domain: "deloitte",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Zoho Corporation",
        company_domain: "zohocorporation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Sutherland Global Service",
        company_domain: "sutherlandglobalservice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "FIS Global",
        company_domain: "fisglobal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "SOCGEN",
        company_domain: "socgen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "EY",
        company_domain: "ey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Vmware",
        company_domain: "vmware",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Salesforce",
        company_domain: "salesforce",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Rolta India",
        company_domain: "roltaindia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Genpact",
        company_domain: "genpact",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "CISCO",
        company_domain: "cisco",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "KPMG",
        company_domain: "kpmg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "MU Sigma",
        company_domain: "musigma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Microsoft",
        company_domain: "microsoft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Sonata Software",
        company_domain: "sonatasoftware",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "PWC",
        company_domain: "pwc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "KPIT Tech",
        company_domain: "kpittech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Birlasoft",
        company_domain: "birlasoft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
