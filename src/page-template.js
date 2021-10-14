const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

const generatePage = function (manager) {
  // manager
  return `
        <div class="col-3">
        <div class="card">
        <div class="card-header">${Manager.name}</div>
        <ul>
        <li>Name: ${Manager.name}</li>
        <li>ID: ${Manager.id}</li>
        <li>Email Address: ${Manager.email}</li>
        <li>Office Number: ${Manager.officeNumber}</li>
        </ul>
        </div>
        </div>
        `;
};

// export function
module.exports = (employeeArray) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
            <div class="header">
                <h1 class="text-center">My Team</h1>
            </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generatePage(employeeArray)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
