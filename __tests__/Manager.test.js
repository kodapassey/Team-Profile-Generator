const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager employee object', () => {
    const manager = new Manager('Koda');

    expect(manager.name).toBe('Koda');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
})