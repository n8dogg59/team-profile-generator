// tests all the functions that the three employees share

const Employee = require('../lib/Employee.js');

test('creates an engineer object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('gets the name of the employee from created object', () => {
    const name = "Nate";
    const employee = new Employee(name, '1', 'n8dogg59@hotmail.com', 'n8dogg59');

    expect(employee.getName()).toBe('Nate');
})

test('gets the id of the employee from created object through the getId() function', () => {
    const id = '24';
    const employee = new Employee('Nate', id, 'n8dogg59@hotmail.com', 'n8dogg59');

    expect(employee.getId()).toBe('24');
})

test('gets the email of the employee from created object through the getEmail() function', () => {
    const email = 'n8dogg59@hotmail.com';
    const employee = new Employee('Nate', '24', email, 'n8dogg59');

    expect(employee.getEmail()).toBe('n8dogg59@hotmail.com');
})

test('should return the name of the class "Employee" from the getRole() function', () => {
    const employee = new Employee('Nate', '24', 'n8dogg59@hotmail.com', 'n8dogg59');

    expect(employee.getRole()).toBe('Employee');
})

