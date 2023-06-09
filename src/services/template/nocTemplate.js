const nocTemplate = (userData) => {
	console.log("IN NOC TEMPLATE------->>>", userData);
	const today = new Date();
	return `<!DOCTYPE html>
	<html>
		<head>
			<title>HTML content</title>
			<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
		</head>
		<body>
		<div class="d-flex justify-content-center mt-3">
		<h1>MrBorrower.com</h1>
		</div>
		<div class="d-flex justify-content-center">
		<p>Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011</p>
		</div>
		<div class="d-flex justify-content-center">
		<h3>No Objection Certificate</h3>
		</div>
		<br/>
		<div class="ms-5">
		<p>Date: ${`${today.getDate()}-${
			today.getMonth() + 1
		}-${today.getFullYear()}`}</p>
		<p>Name: ${userData.name}</p>
		<p>Loan Id: ${userData.LoanId} </p>
		
		</div>
                <div class="ms-5">
                <p>This is to certify that ${
									userData.name
								} has made complete payment of &#8377; ${
		userData.totalAmount
	} with reference to Loan Id ${userData.LoanId}.</p>
                </div>
                <br/>
                <br/>
                <div class="ms-5">
               <p> There is no further amount outstanding and payable by the borrower and the loan account is closed.</p>
                </div>
                 <br/>
                <br/>
                <div class="ms-5 text-danger">
                <p>Please note that the cheques you had submitted at the time of loan disbursal will be cancelled to avoid misuse.</p>
                </div>
                <br/>
                <br/>
                <div class="ms-5">
                <p>Regards</p>
                <p>
                Team Borrower
                <br/>
                Lemon Tree Hotel, 5C & 5D, 5th Floor, Sector 60, Gurugram, Haryana 122011
                <br/>
                +0120 465 9902
                <br/>
                faircentmrborrower@gmail.com</p>

                <br/>
                <br/>
                <p class = "text-center font-italic">This is a system generated mail and does not require any signature.</p>
                </div>
		</body>
	</html>`;
};
module.exports = nocTemplate;
