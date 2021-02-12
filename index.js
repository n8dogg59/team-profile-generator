const inquirer = require("inquirer");

let profileArr = [];

const getInfo = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "'What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "'What is the team manager's email address?"
            },
            {
                type: 'input',
                name: 'phone',
                message: "What is the team manager's phone number?"
                
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another team member to finish building the team?',
            }
        ])
        .then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.phone);
            profileArr.push(manager);
            
            console.log(manager);

            if (response.addEmployee) {
                addTeammate();
            } else {
                console.log("Your team is complete!")
                return;
            }
        })
}

const addTeammate = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an engineer or intern to finish building the team?',
                choices: [
                    "Add an engineer",
                    "Add an intern",
                ],
            }
        ])
        .then(response => {
            if (response.addEmployee === "Add an engineer") {
                engineerQuestion();
            } else {
                internQuestion();
            }

        })
}

const engineerQuestion = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "'What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "'What is the engineer's email address?"
            },
            {
                type: 'list',
                name: 'github',
                message: "What is the engineer's GitHub username?"
                
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another team member to finish building the team?',
            }
        ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            profileArr.push(engineer);
            
            console.log(engineer);

            if (response.addEmployee) {
                addTeammate();
            } else {
                console.log("Your team is complete!")
                return;
            }
        })
}

const internQuestion = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "'What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "'What is the intern's email address?"
            },
            {
                type: 'list',
                name: 'school',
                message: "What is the intern's school?"
                
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another team member to finish building the team?',
            }
        ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            profileArr.push(intern);
            
            console.log(engineer);

            if (response.addEmployee) {
                addTeammate();
            } else {
                console.log("Your team is complete!")
                return;
            }
        })
}

getInfo();