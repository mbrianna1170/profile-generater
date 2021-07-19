const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// begin generator
init ();

function init () {
    console.log('Welcome to the Profile Generator for Teams! Please Begin.');
}

// array for user information
function getInfo () {
    inquirer.prompt([
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
            type: 'checkbox',
            name: 'roles',
            message: 'Please select correct role:',
            choices: ['Intern', 'Engineer', 'Manager']

        }
    ])
};

new getInfo();

