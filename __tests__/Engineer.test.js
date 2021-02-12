const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Nate', '1', 'n8dogg59@hotmail.com');

    expect(engineer.name).toBe('Nate');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('n8dogg59@hotmail.com')
})
