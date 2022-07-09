const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


class index {

}

promptQuestions() {
    return inquirer
        .prompt([
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
            }
        ])
}