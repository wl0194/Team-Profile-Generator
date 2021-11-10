const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = requre('fs');
const path = require('path');

const questions = {
    Manager = [
        {
            type:"input",
            name:"name",
            message:"What is the manager's name?"

        },
        {
            type:"input",
            name:"id",
            message:"What is the manager's ID?"

        },
        {
            type:"input",
            name:"email",
            message:"What is the manager's email?"

        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the manager's office number?"

        },
        {
            type:"list",
            name:"addNew",
            message:"Do you want to add another employee?",
            choices:["yes", "no"]

        },
    ], 

    Engineer = [
        {
            type:"input",
            name:"name",
            message:"What is the engineer's name?"

        },
        {
            type:"input",
            name:"id",
            message:"What is the engineer's ID?"

        },
        {
            type:"input",
            name:"email",
            message:"What is the engineer's email?"

        },
        {
            type:"input",
            name:"github",
            message:"What is the engineer's GitHub account?"

        },
        {
            type:"list",
            name:"addNew",
            message:"Do you want to add another employee?",
            choices:["yes", "no"]

        },
    ],
    
    Intern = [
        {
            type:"input",
            name:"name",
            message:"What is the Intern's name?"

        },
        {
            type:"input",
            name:"id",
            message:"What is the Intern's ID?"

        },
        {
            type:"input",
            name:"email",
            message:"What is Intern's email?"

        },
        {
            type:"input",
            name:"school",
            message:"What school is the intern attending?"

        },
        {
            type:"list",
            name:"addNew",
            message:"Do you want to add another employee?",
            choices:["yes", "no"]

        },
    ]
};

