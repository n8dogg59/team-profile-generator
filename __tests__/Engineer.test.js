const Engineer = require('../lib/Engineer.js');

test('get the GitHub username of the employee from created object through the getGithub() function', () => {
    const userName = "n8dogg59";
    const engineer = new Engineer('Nate', '1', 'n8dogg59@hotmail.com', userName);

    expect(engineer.getGithub()).toBe('n8dogg59');
})

