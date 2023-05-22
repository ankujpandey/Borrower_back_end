const nocTemplate = (UserData, loanData) => {
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
		<p>EVERY % COUNTS</p>
		</div>
		<div class="d-flex justify-content-center">
		<p>SR 31 Siris Road,DLF Phase 3 ,Gurgaon,Haryana,122002 </p>
		</div>
		<div class="d-flex justify-content-center">
		<h3>No Objection Certificate</h3>
		</div>
		<br/>
		<div class="ms-5">
		<p>Date: ${`${today.getDate()}-${
      today.getMonth() + 1
    }-${today.getFullYear()}`}</p>
		<p>Name:</p>
		<p>Loan Id: </p>
		
		</div>
                <div class="ms-5">
                <p>This is to certify that (-Name------) has made complete payment of &#8377;0 with reference to Loan Id ------ taken on </p>
                </div>
                <br/>
                <br/>
                <div class="ms-5">
               <p> There is no further amount outstanding and payable by the borrower and the loan account is closed.</p>
                </div>
                 <br/>
                <br/>
                <div class="ms-5 text-danger">
                <p>Please note that the cheques you had submitted at the time of loan disbursal will be cancelled to avoid misuse</p>
                </div>
                <br/>
                <br/>
                <div class="ms-5">
                <p>Regards</p>
                <p>MrBorrower.com</p>
                </div>
		</body>
	</html>`;
};
module.exports = nocTemplate;
