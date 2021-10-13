const fs = require('fs');

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generatePage = require('./src/page-template')
const {writeFile, copyFile} = require('./utils/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArray = {manager, engineer, intern};

// Start Team Profile Generator
const promptUser = () => {
    console.log('Welcome to the Team Profile Generator! Please begin.');
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter employee name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please enter employee email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please enter employee ID:',
            name: 'id'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select correct role:',
            choices: ['Intern', 'Engineer', 'Manager']
        },
    ])
    .then(({name, email, id, role}) => {
        if (role === "Manager") {
            return inquirer
                .prompt([{
                    type:'input',
                    name: 'officeNumber',
                    message:"Please enter the manager's office number:"
                },
                {
                    type:'confirm',
                    name:'confirmAddEmployee',
                    message: 'Would you like to add another employee to the profile?',
                    default: false
                }])
                .then(({officeNumber, confirmAddEmployee}) => {
                    manager.push(new Manager(name, email, id, officeNumber))
                    if (confirmAddEmployee) {
                        return promptUser();
                    }
                })
        } else if (role === "Engineer") {
            return inquirer
                .prompt([{
                    type: 'input',
                    name: 'github',
                    message: "Please enter the Github username for the engineer:"
                },
                {
                    type:'confirm',
                    name:'confirmAddEmployee',
                    message: 'Would you like to add another employee to the profile?',
                    default: false
                }])
                .then(({github, confirmAddEmployee}) => {
                    engineer.push(new Engineer(employee, email, id, github))
                    if (confirmAddEmployee) {
                        return promptUser();
                    }
                })
        } else if (role === 'Intern') {
             return inquirer
                .prompt([{
                    type:'input',
                    name:'school',
                    message: 'Please enter the school the intern attends:'
                },
                {
                    type:'confirm',
                    name:'confirmAddEmployee',
                    message:'Would you like to add another employee to the profile?',
                    default: false
                }])
                .then(({school, confirmAddEmployee}) => {
                    intern.push(new Intern(this.name, email, id, school))
                    if (confirmAddEmployee) {
                        return promptUser();
                    }
                })
        }
    })
};



promptUser()
.then(newData => {
    return generatePage(employeeArray)
})
.then(pageHTML => {
    return writeFile(pageHTML)
})