const Employee = require('./Employee');
const index = require('../index');
const inquirer = require('inquirer');

class Manager {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = '';
    }

    getOfficeNum() {
        return inquirer.prompt({
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?'
        }).then(
            answers => {
                this.officeNumber = answers.officeNumber
            }
        )
    }

    buildCard() {
        return `<div>
        <h1>${this.name} </h1>
        <h2>${this.role} </h2>

        <h2>${this.id} </h2>
        <h2>${this.email} </h2>
        <h2>${this.officeNumber} </h2>
    </div>`
    }
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