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
        return `<div class="card col-3 m-3">
        <div class="bio">
            <h1>${this.name}</h1>
            <h2 class="role">${this.role}</h2>
        </div>

        <div class="description">
            <h2 class="desc">ID: ${this.id}</h2>
            <h2 class="desc">Email: <a href='mailto: ${this.email}'>${this.email}</a></h2>
            <h2 class="desc">GitHub: <a href='https://github.com/${this.gitHub}'>${this.gitHub}</a></h2>
        </div>
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