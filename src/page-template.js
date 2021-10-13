const Manager = require("../lib/Manager");

const generatePage = function (employeeArray) {
  if (!employeeArray) {
    // if there are more calls to the function than members on a employee, return empty string
    return "";
  } else if (employeeArray.role === "Manager") {
    // different versions depending on role to change text description for the "otherInfo" value.
    return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card">
                  <div class="card-header">${Manager.role}</div>
                  <ul>
                    <li>Name: ${Manager.name}</li>
                    <li>ID: ${Manager.id}</li>
                    <li>Email Address: ${Manager.email}</li>
                    <li>Office Number: ${Manager.officeNumber}</li>
                  </ul>
                </div>
              </div>
            `;
  } else if (employeeArray.role === "Engineer") {
    // different versions depending on role to change text description for the "otherInfo" value.
    return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card">
                  <div class="card-header">${employeeArray.role}</div>
                  <ul>
                    <li>Name: ${employeeArray.name}</li>
                    <li>ID: ${employeeArray.id}</li>
                    <li>Email Address: ${employeeArray.email}</li>
                    <li>Github: <a href="http://github.com/${employeeArray.otherInfo}">${employeeArray.otherInfo}</a></li>
                  </ul>
                </div>
              </div>
            `;
  } else if (employeeArray.role === "Intern") {
    // different versions depending on role to change text description for the "otherInfo" value.
    return `
              <!-- EMPLOYEE CARD -->
              <div class="col-3">
                <div class="card">
                  <div class="card-header">${employeeArray.role}</div>
                  <ul>
                    <li>Name: ${employeeArray.name}</li>
                    <li>ID: ${employeeArray.id}</li>
                    <li>Email Address: ${employeeArray.email}</li>
                    <li>School: ${employeeArray.otherInfo}</li>
                  </ul>
                </div>
              </div>
            `;
  }
};

module.exports = (templateData) => {
  console.log("inside generatePage");
  console.log(templateData);
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link href="style.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Castoro&display=swap"
      rel="stylesheet"
    />
    <title>Team Profile</title>
  </head>
  <body>
    <header class=header>
      <h1>Team Profile</h1>
    </header>
    <main>
      <div class="container">
        <div class="row">
        <div class="col-3">${generatePage(templateData[0])}</div>
        <div class="col-3">${generatePage(templateData[1])}</div>
        <div class="col-3"> ${generatePage(templateData[2])}</div>
        <div class="col-3"> ${generatePage(templateData[3])}</div>
        <div class="col-3"> ${generatePage(templateData[4])}</div>
        </div>
      </div>
    </main>
  </body>
</html>
        `;
};
