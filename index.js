const inquirer = require("inquirer");
const mysql = require("mysql2");
const { selectOption } = require("./utils/options");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
  },
  console.log("Connected to employee_db database")
);

const promptUser = () => {
  return inquirer.prompt([
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
      ],
    },
  ]);
};

function init() {
  promptUser().then((choice) => selectOption(choice)).then(promptUser());
}
