const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

const employee1 = new Employee('Koda', 2, 'email', 'Manager');

test('checks for employee name', () => {

    expect(employee1.name).toEqual(expect.any(String));
});

test('checks for employee id', () => {

    expect(employee1.id).toEqual(expect.any(String));
});

test('checks for employee email', () => {

    expect(employee1.email).toEqual(expect.any(String));
});
