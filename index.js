const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const render = require('./src/generateHTML.js');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");
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

const team = [];
function appMenu() {

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

                let manager = await inquirer.prompt(managerQuestions);
                output = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
                
                team.push(output);
    
                break;

            case "Make Engineer":

                let engineer = await inquirer.prompt(engineerQuestions);
                output = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        
                team.push(output);

                break;

            case "Make Intern":
                let intern = await inquirer.prompt(internQuestions);
                output = new Intern(intern.name, intern.id, intern.email, intern.school)
  
                team.push(output);

                break;

            default:
                console.log("generating...");

                writeToFile();
        }
   
     

        run();
    }

run();

};

function writeToFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    console.log(team);
    fs.writeFile(outputPath, render(team), "utf-8", (err) => {
        if (err) {
            throw err
        }
        else {
            console.log("Successfully added");
        }

    });
}
appMenu();




