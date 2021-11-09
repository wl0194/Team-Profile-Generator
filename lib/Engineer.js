const Emplyoee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
   
}

module.exports = Engineer;