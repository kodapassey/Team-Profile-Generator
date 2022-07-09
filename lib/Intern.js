const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = '';
    }

    getSchool() {
        return inquirer.prompt({
            type: 'text',
            name: 'school',
            message: 'What school did you go to?'
        }).then(
            answers => {
                this.school = answers.school
            }
        )
    };

    buildCard() {
        return `<div>
        <h1>${this.name} </h1>

        <h2>${this.id} </h2>
        <h2>${this.email} </h2>
        <h2>${this.role} </h2>
        <h2>${this.school} </h2>
    </div>`
    }
}

module.exports = Intern;


// class Intern extends Employee {
//     constructor(name) {
//         this.school = school;
//     }

//     getSchool() { };

//     getRole() { };
// }
