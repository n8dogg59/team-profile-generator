const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const inquirer = require("inquirer");
const fs = require("fs");

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
                console.log(profileArr);

                let role = "Manager";
                addEmployee(manager, role);

                if (response.addEmployee) {
                    addTeammate();
                } else {
                    console.log("Your team is complete!")
                    finalHTML();
                }
            })


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
                    type: 'input',
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
                console.log(profileArr);

                let role = "Engineer";
                addEmployee(engineer, role);

                if (response.addEmployee) {
                    addTeammate();
                } else {
                    console.log("Your team is complete!")
                    finalHTML();
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
                    type: 'input',
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
                console.log(profileArr);
                
                let role = "Intern";
                addEmployee(intern, role);
                 
                if (response.addEmployee) {
                    addTeammate();
                } else {
                    console.log("Your team is complete!")
                    finalHTML();
                }
            })
    }
}

function initialHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">    
    </head>
    <body>
        <nav class="navbar bg-danger m-5">
            <span class="mb-4 mt-4 h2 w-100 text-light text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Starter HTML created!")
}

const addEmployee = (info, role) => {
    return new Promise(function(resolve, reject) {
    let newHtml = '';
    const name = info.getName();
    const id = info.getId();
    const email = info.getEmail();
    if (role === 'Manager') {
        const phone = info.officeNumber();
        newHtml = `<div class="col-4">
        <div class="card mx-auto mb-4 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-light">
                <h2 class="card-title">${name}</h2> 
                <h3 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Phone Number: ${phone}</li>
                </ul>
            </div>
        </div>
    </div>`;
    } else if (role === 'Engineer') {
        const github = info.getGithub();
        newHtml = `<div class="col-4">
        <div class="card mx-auto mb-4 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-light">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses"></i> Engineer</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    } else if (role === 'Intern') {
        const school = info.getSchool();
        newHtml = `<div class="col-4">
        <div class="card mx-auto mb-4 shadow" style="width: 20rem">
            <div class="card-header bg-primary text-light">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
    </div>`;
    }
    fs.appendFile("./dist/team.html", newHtml, function(err) {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'Team member added!'
        })
    })

    })
}

const finalHTML = () => {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("HTML Created!");
}


initialHTML();
getInfo();
