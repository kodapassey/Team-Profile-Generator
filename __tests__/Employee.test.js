const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('creates a manager employee object', () => {
    const manager = new Manager('Koda', 2, 'email', 'Manager');

    expect(manager.name).toBe('Koda');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');
    expect(manager.role).toBe('Manager');
});