const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, github, school){
        super(name, id, email, github)
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
   
}

module.exports = Intern;

