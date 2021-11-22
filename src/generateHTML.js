const path = require("path");
const fs = require("fs");
const render = employees => {
  const html = [];


  html.push(...employees
      .filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));

  // html.push(...employees
  //       .filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)));
  

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
        <!-- Here is where you want to have the code for your team members -->
    </body>
</html>
        
        `
}

function renderManager(manager){
  return `
  <div>
  <h1>${manager.getName()}</h1>
  <h2>${manager.getId()}</h2>
  <h3>${manager.getEmail()}</h3>
  <h4>${manager.getofficeNumber()}</h4>
  </div>
  `
};

//
// generateHTML(data) {

//     return `
//       <div>
//        ${data.map(person => {
//          return `
//            ${person.role === "Manager" && `html for the manager`}
//          `
//       }).join('')}
//       </div>
//     `








module.exports = render;

