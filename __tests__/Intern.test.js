const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('gets interns school', () => {
    const intern = new Intern('Koda', 1, 'email', 'Manager');

    expect(intern.school).toEqual(expect.any(String))
});