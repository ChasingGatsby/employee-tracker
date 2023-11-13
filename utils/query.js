const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
  },
  console.log("Connected to employee_db database")
);

const viewDept = function () {
  db.query("SELECT * FROM department", (err, result) => {
    console.log(result);
  });
};

const viewRole = function () {
  db.query("SELECT * FROM role", (err, result) => {
    console.log(result);
  });
};

const viewEmployee = function () {
  db.query("SELECT * FROM employee", (err, result) => console.log(result));
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

const insertDept = (name) =>
  db.query(
    `INSERT INTO department (department_name) VALUES ('${name}')`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Department added");
    }
  );

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
    .then((answer) => insertRole(answer));
};

const insertRole = (data) =>
  db.query(
    `INSERT INTO role (title, salary, department_id) VALUES ('${data.title}', ${data.salary}, ${data.department})`,
    (err, result) => {
      if (err) {
        console.log * err;
      }
      console.log("New Role Added");
    }
  );

const insertEmployee = (data) =>
  db.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.firstName}', '${data.lastName}', ${data.role}, ${data.manager})`,
    (err, result) => {
      if (err) {
        console.log * err;
      }
      console.log(result);
    }
  );

const addEmployee = function () {
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
        type: "input",
        name: "manager",
        message: "Who is the employee's manager?",
      },
    ])
    .then((answers) => insertEmployee(answers));
};

const edits = {
  viewDept,
  viewRole,
  viewEmployee,
  addDept,
  addRole,
  addEmployee,
};

module.exports = edits;
