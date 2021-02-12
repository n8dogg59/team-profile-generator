const Employee = require('../lib/Employee.js');

test('creates an engineer object', () => {
    const employee = new Employee('Nate', '1', 'n8dogg59@hotmail.com');

    expect(employee.name).toBe('Nate');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('n8dogg59@hotmail.com')
})
