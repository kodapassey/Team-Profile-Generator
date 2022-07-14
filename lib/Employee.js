const inquirer = require('inquirer');

class Employee {
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
        this.role = '';
    }

    getData() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'What is this employess role',
                    choices: [
                        'Engineer',
                        'Intern',
                        'Manager'
                    ]
                },
                {
                    type: 'text',
                    name: 'name',
                    message: 'What is your first employees name?'
                },
                {
                    type: 'text',
                    name: 'id',
                    message: 'What is this employess id number?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is this employess email?'
                },
                {
                    type: 'text',
                    name: 'email',
                    message: 'What is this employess email?'
                },

            ])
    };
}

module.exports = Employee;