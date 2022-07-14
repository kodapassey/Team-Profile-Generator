const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('gets managers office number', () => {
    const manager = new Manager('Koda', 1, 'email', 'Manager');

    expect(manager.officeNumber).toEqual(expect.any(String))
});