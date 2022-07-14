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
        return `
        <div class="card col-3 m-3">
                <div class="bio">
                    <h1>${this.name}</h1>
                    <h2 class="role">${this.role}</h2>
                </div>

                <div class="description">
                    <h2 class="desc">ID: ${this.id}</h2>
                    <h2 class="desc">Email: <a href=mailto: ${this.email}>${this.email}</a></h2>
                    <h2 class="desc">School: ${this.school}</h2>
                </div>
            </div>`
    };
};

module.exports = Intern;


// class Intern extends Employee {
//     constructor(name) {
//         this.school = school;
//     }

//     getSchool() { };

//     getRole() { };
// }
