const Employee = require('./Employee');

class Manager {
    constructor(name) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() { };

    getId() { };

    getEmail() { };

    getRole() { };
}

module.exports = Manager;



// class Manager extends Employee {
//     constructor(name) {
//         super(name);

//         this.officeNumber = officeNumber;
//     }

//     getRole() { };
// }

// module.exports = Manager;