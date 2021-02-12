const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    officeNumber() {
        return this.number;
    }
}

module.exports = Manager;