const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../profile-generator/lib/Employee');

// array for user information

function teamMemberInfo() {
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
    .then(answers => {
        if (answers.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter the office phone number:',
                    name: 'officeNumber'
                }
            ])
        }
    })
};

new teamMemberInfo();
