const generatePage = require('./generatePage');
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


class index {

}

// if (!employeeArr.employee) {
//     employeeArr.employee = [];
// }

function promptQuestions(employeeArr) {
    const employee = new Employee()
    return employee.getData()
        .then((answers) => {
            // inquirer prompt if user selects manager option
            if (answers.role === 'Manager') {
                const manager = new Manager(answers.email, answers.name, answers.id, answers.role);
                employeeArr.push(manager);
                return manager.getOfficeNum()
            } else if (answers.role === 'Intern') {
                const intern = new Intern(answers.email, answers.name, answers.id, answers.role);
                employeeArr.push(intern);
                return intern.getSchool()
            } else if (answers.role === 'Engineer') {
                const engineer = new Engineer(answers.email, answers.name, answers.id, answers.role);
                employeeArr.push(engineer);
                return engineer.getGitHub()
            }
        })
        .then(() => {
            return inquirer.prompt({
                type: 'confirm',
                name: 'newProject',
                message: 'Would you like to add another team member?',
                default: false
            })
        }).then(questionData => {
            if (questionData.newProject) {
                return promptQuestions(employeeArr);
            } else {
                return employeeArr;
            }
        })
}

async function init() {
    const employeeArr = [];
    try {
        await promptQuestions(employeeArr);

        const divArray = employeeArr.map(employee => employee.buildCard());

        console.log(divArray);
        
        const html = generatePage(divArray);

        fs.writeFileSync('./employeeHtml.html', html);
    } catch (err) {
        console.log(err);
    }
};

init();