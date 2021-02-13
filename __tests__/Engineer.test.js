const Engineer = require('../lib/Engineer.js');

test('get the GitHub username of the employee from created object through the getGithub() function', () => {
    const userName = "n8dogg59";
    const engineer = new Engineer('Nate', '1', 'n8dogg59@hotmail.com', userName);

    expect(engineer.getGithub()).toBe('n8dogg59');
})

test('getRole() function should return "Engineer"', () => {
    const jobType = "Engineer";
    const engineer = new Engineer('Nate', '1', 'n8dogg59@hotmail.com', 'n8dogg59');
    expect(engineer.getRole()).toBe(jobType);
})

