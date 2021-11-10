const Engineer = require('./Engineer');

class Intern extends Employee{
    constructor(name, id, email, github){
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

