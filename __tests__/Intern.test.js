const Intern = require('../lib/Intern.js');

test("get the intern's school from created object through the getSchool() function", () => {
    const school = "University of Texas";
    const intern = new Intern('Nate', '1', 'n8dogg59@hotmail.com', school);

    expect(intern.getSchool()).toBe('University of Texas');
})