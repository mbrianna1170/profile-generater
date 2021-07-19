const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../profile-generator/lib/Employee');

// begin generator
init ();

function init () {
    console.log('Welcome to the Profile Generator for Teams! Please Begin.');
}

// array for user information
function Team () {
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

new Team();

const employee = Employee(Team) {
    console.log(employee);
}