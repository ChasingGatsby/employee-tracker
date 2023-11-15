const inquirer = require("inquirer");

const {
  viewDept,
  viewRole,
  viewEmployee,
  addDept,
  addRole,
  addEmployee,
  updateEmployee,
} = require("./utils/inquirer");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      const choice = answers.option;
      if (choice === "View All Departments") {
        viewDept();
      } else if (choice === "View All Roles") {
        viewRole();
      } else if (choice === "View All Employees") {
        viewEmployee();
      } else if (choice === "Add Department") {
        addDept();
      } else if (choice === "Add Role") {
        addRole();
      } else if (choice === "Add Employee") {
        addEmployee();
      } else if (choice === "Update Employee Role") {
        updateEmployee();
      } else if (choice === "Quit") {
        process.exit(0);
      }
    });
}

function init() {
  promptUser();
}

init();
