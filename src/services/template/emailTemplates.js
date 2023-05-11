// ---------------------------------------------
// Email template for Loan_state = 1200
// The user has applied for loan and this is
// a confirmation mail for him/her.
// ---------------------------------------------

const appliedUser = (userData, agentData) => {
  return `<!DOCTYPE html>
	<html>
		<head>
			<title>Email Template</title>
			<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
		</head>
		<body>

    <br/>
    <div class="fw-bold">
	    Hello ${userData.name} !
	  </div>
	  
	  <br/>
	 <div> You have successfully applied for loan. ${agentData.name} has been assigned to you as your agent.
	  </div>
	  <br/>
	  <br/>
	  
	  <div>Regards,
	  <br/>
	  Team Borrower
	  <br/>
	  Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011
	  <br/>
	  +0120 465 9902
	  <br/>
	  faircentmrborrower@gmail.com</div>

		</body>
	</html>`;
};

// -------------------------------------------------------
// Email template for Loan_state = 1400
// The user has applied for loan and this is a
// confirmation mail for the agent about application.
// -------------------------------------------------------

const appliedAgent = (userData, agentData) => {
  return `<!DOCTYPE html>
	<html>
		<head>
			<title>Email Template</title>
			<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
		</head>
		<body>

    <br/>
    <div class="fw-bold">
	    Hello ${agentData.name} !
	  </div>
	  
	  <br/>
	 <div>A user has been assigned to you regarding loan disbursement.
	 
	 <br/>
	 
	 User name: ${userData.name}
	 <br/>
	 User email: ${userData.email}
	 <br/>
	 Kindly check your dashboard for more details.
	  </div>
	  <br/>
	  <br/>
	  
	  <div>Regards,
	  <br/>
	  Team Borrower
	  <br/>
	  Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011
	  <br/>
	  +0120 465 9902
	  <br/>
	  faircentmrborrower@gmail.com</div>

		</body>
	</html>`;
};

// ------------------------------------------------------------------------
// Email template for Loan_state = 1200
// The loan application of the user has been reviewed and agreement
// has ben initiated. This is a notification mail to the user regarding
// the agreement.
// ------------------------------------------------------------------------

const agreementInitiated = (userData) => {
  return `<!DOCTYPE html>
	  <html>
		  <head>
			  <title>Email Template</title>
			  <link
		  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
		  rel="stylesheet"
		/>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
		  </head>
		  <body>
  
	  <br/>
	  <div class="fw-bold">
		  Hello ${userData.name} !
		</div>
		
		<br/>
	   <div>

	   Your loan application has been reviewed by our agent and a response has been sent to you on your dashboard. Kindly review the agreement on the dashboard for complete details of the loan.
	   
		</div>
		<br/>
		<br/>
		
		<div>Regards,
		<br/>
		Team Borrower
		<br/>
		Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011
		<br/>
		+0120 465 9902
		<br/>
		faircentmrborrower@gmail.com</div>
  
		  </body>
	  </html>`;
};

// ------------------------------------------------------------------------
// Email template for Loan_state = 1200
// The user has read and accepted/rejected the loan agreement. This is a
// notification mail to the agent regarding the acceptance/rejection.
// ------------------------------------------------------------------------

const acceptReject = (agentData, loanState) => {
  return `<!DOCTYPE html>
		<html>
			<head>
				<title>Email Template</title>
				<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
		  />
		  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
			</head>
			<body>
	
		<br/>
		<div class="fw-bold">
			Hello ${agentData.name} !
		  </div>
		  
		  <br/>
		 <div>
  
		 The loan agreement provided by you has been ${
       loanState ? "accepted" : "rejected"
     } by the user. Kindly visit your dashboard for more details.
		 
		  </div>
		  <br/>
		  <br/>
		  
		  <div>Regards,
		  <br/>
		  Team Borrower
		  <br/>
		  Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011
		  <br/>
		  +0120 465 9902
		  <br/>
		  faircentmrborrower@gmail.com</div>
	
			</body>
		</html>`;
};

const subjectDecide = (loanState) => {
  if (loanState == 1200) {
    return "Loan application submitted.";
  } else if (loanState == 1400) {
    return "Agreement initiated";
  } else if (loanState == 1500) {
    return "Loan agreement accepted";
  } else return "Loan agreement rejected";
};

const emailTemplateDecide = (userData, agentData, loanState) => {
  if (loanState == 1200) {
    const userTemplate = appliedUser(userData, agentData);
    const agentTemplate = appliedAgent(userData, agentData);

    return { userTemplate, agentTemplate };
  } else if (loanState == 1400) {
    return agreementInitiated(userData);
  } else if (loanState == 1500) {
    return acceptReject(agentData, true);
  } else return acceptReject(agentData, false);
};

module.exports = {
  emailTemplateDecide,
  subjectDecide,
};
