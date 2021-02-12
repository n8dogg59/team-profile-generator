const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, userName) {
        super(name, id, email);
        this.userName = userName;
    }

    getGithub() {
        return this.userName;
    }
}

module.exports = Engineer;