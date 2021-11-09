const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = requre('fs');

const questions = {
    Employee = [
        {
            type:"input",
            name:"name",
            message:"What is the name of the Employee?"

        },
        {
            type:"input",
            name:"id",
            message:"What is the id of the Employee?"

        },
        {
            type:"input",
            name:"email",
            message:"What is the email of the Employee?"

        },
    


    ]




}