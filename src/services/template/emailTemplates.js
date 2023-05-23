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
	 <br/>
	 Your application is under process now.
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
// Email template for Loan_state = 1200
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
	 User contact: ${userData.contact}
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
// Email template for Loan_state = 1400
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
// Email template for Loan_state = 1500 || -1000
// The user has read and accepted/rejected the loan agreement. This is a
// notification mail to the agent regarding the acceptance/rejection.
// ------------------------------------------------------------------------

const acceptRejectAgent = (agentData, loanState) => {
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

// ------------------------------------------------------------------------
// Email template for Loan_state = 1500 || -1000
// The user has read and accepted/rejected the loan agreement. This is a
// notification mail to the user regarding the acceptance/rejection.
// ------------------------------------------------------------------------

const acceptRejectUser = (userData, loanState) => {
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
	
		   The loan agreement provided to you has been ${
         loanState ? "accepted" : "rejected"
       } by you. Kindly visit your dashboard for more details.

	   <br/>
	   You can find the attachment of the agreement with this email.

	   <br/>
		   
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
// Email template for Loan_state = 1600
// The user has read and accepted/rejected the loan agreement. This is a
// notification mail to the user regarding the acceptance/rejection.
// ------------------------------------------------------------------------

const loanDisburse = (userData) => {
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

			<div>
			Your loan has been disbursed by our team. You may check your wallet for balance.

			</div>
	  
			 
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

// ---------------------------------------
// To tell admin about low pool balance
// ---------------------------------------

const sendEmailtoAdmin = () => {
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
		  Hello Admin !!
		</div>
		
		<br/>
	  <div>
  
	  <div>
	  The pool balance is low!! Kindly add money to the pool balance so that the pending loans can be disbursed.
  
	  </div>
  
	  
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

const loanRepaidUser = (userData) => {
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
	
		<div>
		The loan provided by you has been repaid successfully. The NOC certificate has been attached to the mail. Kindly refer to it for more details.
	
		</div>
	
		
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
    return "Agreement initiated.";
  } else if (loanState == 1500) {
    return "Loan agreement accepted.";
  } else if (loanState == 1600) {
    return "Loan disbursed.";
  } else if (loanState == 1700) {
    return "Loan repaid successfully, NOC generated";
  } else return "Loan agreement rejected.";
};

const emailTemplateDecide = (userData, loanState, agentData) => {
  console;
  if (loanState == 1200) {
    const userTemplate = appliedUser(userData, agentData);
    const agentTemplate = appliedAgent(userData, agentData);

    return { userTemplate, agentTemplate };
  } else if (loanState == 1400) {
    return agreementInitiated(userData);
  } else if (loanState == 1500) {
    const userTemplate = acceptRejectUser(userData, true);
    const agentTemplate = acceptRejectAgent(agentData, true);

    return { userTemplate, agentTemplate };
  } else if (loanState == 1600) {
    return loanDisburse(userData);
  } else if (loanState == 1700) {
    return loanRepaidUser(userData);
  } else return acceptRejectAgent(agentData, false);
};

module.exports = {
  emailTemplateDecide,
  subjectDecide,
  sendEmailtoAdmin,
};
