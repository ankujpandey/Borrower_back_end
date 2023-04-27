const createTemplate = (UserData, imgRes) => {
  return `<!DOCTYPE html>
          <html>
              <head>
                  <title>HTML content</title>
                  <linkUserData
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
              </head>
              <body>
             <div class="container py-3 px-5">
          <div class="row mt-5">
            <div class="col-12 text-center">
              <div data-wow-delay="0.1s">
                <h1 class="text-white animated zoomIn mt-5">
                  User Details...
                </h1>
              </div>
              <hr
                class="bg-white mx-auto mt-0 mb-5"
                style={{ width: 90 }}
              />
              <nav aria-label="breadcrumb"></nav>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-start align-items-center mt-5">
        {!imgRes ? (
          <div class="d-flex justify-content-center">
            <div
              class="card d-flex justify-content-center align-items-center"
              style={{ width: "150px", height: "150px" }}
            >
              {Icons.person}
            </div>
          </div>
        ) : (
          <div class="d-flex justify-content-center">
            <img
               src={"data:image/jpg;base64,${imgRes}"}
              className="img-thumbnail"
              alt=""
              height={150}
              width={150}
            />
          </div>
        )}
        <div class="ms-3">
          <h3 class="menu-title fs-1 fw-bold">
            ${UserData[0].firstName}  ${UserData[0].lastName}
          </h3>
          <div class="menu-text fs-5 fw-0 mb-2">
            ${UserData[0].email}
          </div>
          <h6 class="menu-text fs-6 mb-1 fw-bold">
            Active Status
          </h6>
          <div
            class="menu-text fs-6 mt-0"
            style={{
              color: setColor(user.isActive),
            }}
          >
           {{${UserData[0].isActive}== 1 ? "Yes" : "No"}}
          </div>
        </div>
      </div>

      <hr />

      <h3 class="menu-title fs-3 mt-5 fw-bold">
      Personal Details
    </h3>
    <ul class="list-group ">
    <li class="list-group-item">
      {Icons.call} ${UserData[0].contact}
      <span class="float-end text-secondary">Contact</span>
    </li>
    <li class="list-group-item">
      {Icons.pan} ${UserData[0].pan}
      <span class="float-end text-secondary">PAN</span>
    </li>
    <li class="list-group-item">
      {Icons.aadhar} ${UserData[0].aadhaar}
      <span class="float-end text-secondary">Aadhaar</span>
    </li>
    <li class="list-group-item">
      {Icons.location} ${UserData[0].postOffice}, ${UserData[0].city},
      ${UserData[0].state}, ${UserData[0].pinCode}.
      <span class="float-end text-secondary">Location</span>
    </li>
  </ul>

  <h3 class="menu-title fs-3 mt-5 fw-bold">
  Employment Details
</h3>

<ul class="list-group ">
  <li class="list-group-item">
    {Icons.employmentType} ${UserData[0].employment_type}
    <span class="float-end text-secondary">
      Employment Type
    </span>
  </li>
  ${UserData[0].company_name}? (
      <li class="list-group-item">
        {Icons.workPlace} ${UserData[0].company_name}
        <span class="float-end text-secondary">Company Name</span>
      </li>
    ) : null
  
  <li class="list-group-item">
    {Icons.email} ${UserData[0].professional_email}
    <span class="float-end text-secondary">
      Professional Email
    </span>
  </li>
  {
    ${UserData[0].business_nature} ? (
      <li class="list-group-item">
        {Icons.bussiness} ${UserData[0].business_nature}
        <span class="float-end text-secondary">Nature of Bussiness</span>
      </li>
    ) : null
  }
  <li class="list-group-item">
    {Icons.salary} ${UserData[0].monthly_income}
    <span class="float-end text-secondary">
      Monthly Income
    </span>
  </li>
</ul>

<h3 class="menu-title fs-3 mt-5 fw-bold">Bank Details</h3>

<ul class="list-group ">
  <li class="list-group-item">
    {Icons.account} ${UserData[0].account_number}
    <span class="float-end text-secondary">
      Account Number
    </span>
  </li>

  <li class="list-group-item">
    {Icons.searchWorld} ${UserData[0].ifsc_code}
    <span class="float-end text-secondary">IFSC</span>
  </li>

  <li class="list-group-item">
    {Icons.pin} ${UserData[0].branch_name}
    <span class="float-end text-secondary">Branch</span>
  </li>

  <li class="list-group-item">
    {Icons.bank} ${UserData[0].bank_name}
    <span class="float-end text-secondary">Bank</span>
  </li>
</ul>

              </body>
          </html>`;
};

module.exports = createTemplate;
