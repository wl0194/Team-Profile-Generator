const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./generateHTML.js');

// an array of objects 
const managerQuestions = ([
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's name." }
        },

    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's ID." }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's email." }
        },

    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter manager's office number." }
        },

    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee?",
        choices: ["yes", "no"]

    },
]);

const engineerQuestions = ([
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter engineer's name." }
        },

    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter engineer's ID." }
        },

    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter engineer's email." }
        },

    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub account?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter engineer's Github account." }
        },

    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee?",
        choices: ["yes", "no"]

    },
]);

const internQuestions = ([
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter Intern's name." }
        },

    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's ID?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter Intern's ID." }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is Intern's email?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter Intern's email." }
        },
    },
    {
        type: "input",
        name: "school",
        message: "What school is the intern attending?",
        validate: (value) => {
            if (value) {
                return true
            } else { return "Please enter Intern's school name" }
        },
    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee?",
        choices: ["yes", "no"]

    },
]);

const data = [];

async function run() {
    const { selection } = await inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What would you like to do?",
            choices: ["Make Manager", "Make Engineer", "Make Intern", "Exit"]
        },
    ]);
    let output;

    switch (selection) {
        case "Make Manager":
            output = await inquirer.prompt(managerQuestions);
            break;
        case "Make Engineer":
            output = await inquirer.prompt(engineerQuestions);
            break;
        case "Make Intern":
            output = await inquirer.prompt(internQuestions);
            break;
        default:
            console.log("generating...");
        writeToFile();      
    }
    data.push(output);

    // console.log(data);

    run();
}

run();

function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFile(path.join(__dirname, fileName), data, function (err) {
        if (err)
            console.error(err);
    })
};


// Create a function to initialize app
// function init() {
//     // inquirer.prompt(managerQuestions).then((inquirerResponses) => {
//     //     console.log('generating...');
//     writeToFile('main.html', generateHTML({}));
// };



// Function call to initialize app
// init();
