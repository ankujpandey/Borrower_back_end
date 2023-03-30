"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("company_tables", [
      {
        company_name: "Faircent",
        domain: "faircent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: " TCS",
        domain: "tcs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Wipro",
        domain: "wipro",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Infosys",
        domain: "infosys",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "HCL",
        domain: "hcl",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Tech Mahindra",
        domain: "techmahindra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Mphais",
        domain: "mphais",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Mindtree",
        domain: "mindtree",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "LTI",
        domain: "lti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Cognizant",
        domain: "cognizant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Eclerx",
        domain: "eclerx",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Accenture",
        domain: "accenture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Oracle",
        domain: "oracle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Capgemini",
        domain: "capgemini",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "WNS Global",
        domain: "wnsglobal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Syntel",
        domain: "syntel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Adobe Systems",
        domain: "adobesystems",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "SAP Labs",
        domain: "saplabs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Intuit India",
        domain: "intuitindia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Trigent",
        domain: "trigent",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Symantec",
        domain: "symantec",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Datamatics",
        domain: "datamatics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Deloitte",
        domain: "deloitte",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Zoho Corporation",
        domain: "zohocorporation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Sutherland Global Service",
        domain: "sutherlandglobalservice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "FIS Global",
        domain: "fisglobal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "SOCGEN",
        domain: "socgen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "EY",
        domain: "ey",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Vmware",
        domain: "vmware",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Salesforce",
        domain: "salesforce",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Rolta India",
        domain: "roltaindia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Genpact",
        domain: "genpact",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "CISCO",
        domain: "cisco",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "KPMG",
        domain: "kpmg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "MU Sigma",
        domain: "musigma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Microsoft",
        domain: "microsoft",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Sonata Software",
        domain: "sonatasoftware",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "PWC",
        domain: "pwc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "KPIT Tech",
        domain: "kpittech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_name: "Birlasoft",
        domain: "birlasoft",
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
