const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, github, school, officeNumber){
        super(name, id, email, github, school)
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return "Intern";
    }
   
}

module.exports = Manager;

