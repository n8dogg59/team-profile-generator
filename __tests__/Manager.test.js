const Manager = require('../lib/Manager.js');

test("get the manager's phone number from created object through the officeNumer() function", () => {
    const number = "512-555-0123";
    const manager = new Manager('Nate', '1', 'n8dogg59@hotmail.com', number);

    expect(manager.officeNumber()).toBe('512-555-0123');
})