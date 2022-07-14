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
        return `<div class="card col-3 m-3">
        <div class="bio">
            <h1>${this.name}</h1>
            <h2 class="role">${this.role}</h2>
        </div>

        <div class="description">
            <h2 class="desc">ID: ${this.id}</h2>
            <h2 class="desc">Email: <a href='mailto: ${this.email}'>${this.email}</a></h2>
            <h2 class="desc">Office Number: ${this.officeNumber}</h2>
        </div>
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