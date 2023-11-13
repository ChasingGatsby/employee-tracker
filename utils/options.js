const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
  },
  console.log("Connected to employee_db database")
);
const inquirer = require("inquirer");
const{addDept} = require('./table_edits')

const viewDept = db.query("SELECT * FROM department", (err, result) => {
  console.log(result);
});

const viewRole = db.query("SELECT * FROM role", (err, result) => {
  console.log(result);
});

const viewEmployee = db.query("SELECT * FROM employee", (err, result) =>
  console.log(result)
);

function addDept() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ]).then();
}

function selectOption(choice) {
  switch (choice) {
    case "View All Departments":
      viewDept();
    case "View All Roles":
      viewRole();
    case "View All Employees":
      viewEmployee();
    case "Add Department":
        addDept();
  }
}

module.exports = options
