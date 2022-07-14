const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('gets engineers GitHub', () => {
    const engineer = new Engineer('Koda', 1, 'email', 'Manager');

    expect(engineer.gitHub).toEqual(expect.any(String))
});