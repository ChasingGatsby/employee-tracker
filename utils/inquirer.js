const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
  },
  console.log("Connected to employee_db database")
);
const { insertDept, insertRole, insertEmployee } = require("./query");

const viewDept = function () {
  db.query("SELECT * FROM department", (err, result) => {
    console.table(result);
  });
};

const viewRole = function () {
  db.query("SELECT * FROM role", (err, result) => {
    console.table(result);
  });
};

const viewEmployee = function () {
  db.query("SELECT * FROM employee", (err, result) => console.table(result));
};

const addDept = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      const departmentName = answer.name;
      insertDept(departmentName);
    });
};

const addRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "department",
        message: "What department does this role belong to?",
      },
    ])
    .then((answer) => {
      const newRole = answer;
      insertRole(newRole);
    });
};

const addEmployee = function () {
  let employeeList;
  db.query("SELECT first_name, last_name FROM employee", (err, result) => {
    employeeList = result.map((emp) => {
      return `${emp.first_name} ${emp.last_name}`;
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the employee's first name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the employee's last name?",
        },
        {
          type: "input",
          name: "role",
          message: "What is the employee's role?",
        },
        {
          type: "list",
          name: "manager",
          message: "Who is the employee's manager?",
          choices: employeeList,
        },
      ])
      .then((answers) => {
        const newEmployee = answers;
        insertEmployee(newEmployee);
      });
  });
};

const updateEmployee = function () {
  let employeeList;
  let roleList;
  db.query("SELECT first_name, last_name FROM employee", (err, result) => {
    employeeList = result.map((emp) => {
      return `${emp.first_name} ${emp.last_name}`;
    });
    db.query("SELECT title FROM role", (err, result) => {
      roleList = result.map((role) => {
        return `${role.title}`;
      });
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee",
            message: "Which employee's role do you want to update?",
            choices: employeeList,
          },
          {
            type: "list",
            name: "newRole",
            message: "What is their new role?",
            choices: roleList,
          },
        ])
        .then((answers) => {
          const newRole = answers;
          updateRole(newRole);
        });
    });
  });
};


const edits = {
  viewDept,
  viewRole,
  viewEmployee,
  addDept,
  addRole,
  addEmployee,
  updateEmployee,
};

module.exports = edits;
