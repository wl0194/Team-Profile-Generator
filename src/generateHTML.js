const path = require("path");
const fs = require("fs");
const render = employees => {
  const html = [];


  html.push(...employees
    .filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));

  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)));

  html.push(...employees
    .filter(employee => employee.getRole() === "Intern").map(intern => renderIntern(intern)));


  return `
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <meta charset="UTF-8" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
    ${html.join('')}
    </body>
</html>
        
        `
};

function renderManager(manager) {
  return `
  <div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager </h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
      </ul>
  </div>
</div>
  `
};

function renderEngineer(engineer) {
  return `
  <div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Engineer </h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: ${engineer.getGithub()}</li>
      </ul>
  </div>
</div>
  `
};

function renderIntern(intern) {
  return `
  <div class="card employee-card mr-4 ml-4 mb-3">
  <div class="card-header text-center">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Intern </h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:{{ email }}">${intern.getEmail()}</a></li>
          <li class="list-group-item">Github: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>
  `
};



module.exports = render;

