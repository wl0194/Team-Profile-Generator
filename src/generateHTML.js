const path = require("path");
const fs = require("fs");
const render = (employees) => {
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
  <div>
  <h1>${manager.getName()}</h1>
  <h2>${manager.getId()}</h2>
  <h3>${manager.getEmail()}</h3>
  <h4>${manager.getofficeNumber()}</h4>
  </div>
  `
};

function renderEngineer(engineer) {
  return `
  <div>
  <h1>${engineer.getName()}</h1>
  <h2>${engineer.getId()}</h2>
  <h3>${engineer.getEmail()}</h3>
  <h4>${engineer.getGithub()}</h4>
  </div>
  `
};

function renderIntern(intern) {
  return `
  <div>
  <h1>${intern.getName()}</h1>
  <h2>${intern.getId()}</h2>
  <h3>${intern.getEmail()}</h3>
  <h4>${intern.getSchool()}</h4>
  </div>
  `
};




module.exports = render;

