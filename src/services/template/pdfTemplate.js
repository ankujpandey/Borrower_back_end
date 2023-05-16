const createTemplate = (UserData, imgRes) => {
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
		<div class="d-flex justify-content-center"><h1>Document</h1></div>

    <div class="d-flex justify-content-start align-items-center mt-5">
      <div class="d-flex justify-content-center">
        <img
          src="data:image/jpg;base64,${imgRes[0].profile_photo}"
          className="img-thumbnail m-3"
          alt=""
          height="100"
          width="100"
        />
      </div>
    
      <div class="ms-3">
        <h3 class="menu-title fs-1 fw-bold">
          ${UserData[0]?.firstName}  ${UserData[0]?.lastName}
        </h3>
        <div class="menu-text fs-5 fw-0 mb-2">
          ${UserData[0]?.email}
        </div>
      </div>
    </div>     

		<hr />

    <small>
    <h3 class="menu-title fs-3 mt-3 fw-bold">
	    Personal Details
	  </h3>

    <ul class="list-group ">
	    <li class="list-group-item">
	      ${UserData[0].contact}
	      <span class="float-end text-secondary">Contact</span>
	    </li>
	    <li class="list-group-item">
	      ${UserData[0].pan}
	      <span class="float-end text-secondary">PAN</span>
	    </li>
	    <li class="list-group-item">
	      ${UserData[0].aadhaar}
	      <span class="float-end text-secondary">Aadhaar</span>
	    </li>
	    <li class="list-group-item">
	      ${UserData[0].postOffice}, ${UserData[0].city},
	      ${UserData[0].state}, ${UserData[0].pinCode}.
	      <span class="float-end text-secondary">Location</span>
	    </li>
	  </ul>

    <h3 class="menu-title fs-3 mt-3 fw-bold">
	    Employment Details
	  </h3>

    <ul class="list-group ">
	  <li class="list-group-item">
      ${UserData[0].employment_type}
	    <span class="float-end text-secondary">
	      Employment Type
	    </span>
	  </li>
	  <li class="list-group-item">
	    ${UserData[0].company_name}
	    <span class="float-end text-secondary">Company Name</span>
	  </li>

	  <li class="list-group-item">
	    ${UserData[0].professional_email}
	    <span class="float-end text-secondary">
	      Professional Email
	    </span>
	  </li>
	  <li class="list-group-item">
	      ${UserData[0].business_nature}
	      <span class="float-end text-secondary">Nature of Bussiness</span>
	  </li>
	  <li class="list-group-item">
	    ${UserData[0].monthly_income}
	    <span class="float-end text-secondary">
	      Monthly Income
	    </span>
	  </li>
	</ul>

  <h3 class="menu-title fs-3 mt-3 fw-bold">Bank Details</h3>

  
  <ul class="list-group ">
	  <li class="list-group-item">
      ${UserData[0].account_number}
	    <span class="float-end text-secondary">
	      Account Number
	    </span>
	  </li>

	  <li class="list-group-item">
	    ${UserData[0].ifsc_code}
	    <span class="float-end text-secondary">IFSC</span>
	  </li>

	  <li class="list-group-item">
	    ${UserData[0].branch_name}
	    <span class="float-end text-secondary">Branch</span>
	  </li>

	  <li class="list-group-item">
	    ${UserData[0].bank_name}
	    <span class="float-end text-secondary">Bank</span>
	  </li>
	</ul>

  <p class="mt-3 row justify-content-end me-2">Download File Date : ${`${today.getDate()}.${
		today.getMonth() + 1
	}.${today.getFullYear()} ${today.getHours()}:${
		today.getMinutes() < 10 ? `0${today.getMinutes()}` : `${today.getMinutes()}`
	}:${today.getSeconds()}.`}</p>
  </small>
    
  </div>
	  </div>
		</body>
	</html>`;
};

module.exports = createTemplate;
