const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.gitHub = '';
    }

    getGitHub() {
        return inquirer.prompt({
            type: 'text',
            name: 'gitHub',
            message: 'What is your GitHub username?'
        }).then(
            answers => {
                this.gitHub = answers.gitHub
            }
        )
    };

    buildCard() {
        return `<div>
        <h1>${this.name} </h1>

        <h2>${this.id} </h2>
        <h2>${this.email} </h2>
        <h2>${this.role} </h2>
        <h2>${this.gitHub} </h2>
    </div>`
    }
}

module.exports = Engineer;



// class Engineer extends Employee {
//     constructor(name) {
//         this.gitHub = gitHub;
//     }

//     gitHub() { };

//     getRole() { };
// }