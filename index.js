const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamInfo = [];

// Start Team Profile Generator
const teamQuestions = () => {
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
            name: 'roles',
            message: 'Please select correct role:',
            choices: ['Intern', 'Engineer', 'Manager']
        },
        {
            type: "input",
            name: "school",
            message: "Enter the school the intern goes to:",
            when: (responces) => responces.roles === 'Intern',
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Github username for the Engineer:",
            when: (responces) => responces.roles === 'Engineer',
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the phone number for the manager:",
            when: (responces) => responces.roles === 'Manager',
        },
       
    ]);
};

const addEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would you like to add another employee?",
          default: false,
        },
      ])
      .then((addEmployee) => {
        if (addEmployee.confirmAddEmployee === true) {
          teamQuestions();
        } else {
          console.log(answers);
        }
      });
  };

teamQuestions()
.then(addEmployee)
