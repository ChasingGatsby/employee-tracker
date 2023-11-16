const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const keypress = require("keypress");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_db",
  },
  console.log("Connected to employee_db database")
);
const {
  insertDept,
  insertRole,
  insertEmployee,
  updateRole,
} = require("./query");

const viewDept = function () {
  db.query(
    "SELECT id, department_name as Department FROM department",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    }
  );
};

const viewRole = function () {
  db.query(
    "SELECT id, title as Title, salary as Salary, department_id as Dept_ID FROM role",
    (err, result) => {
      console.table(result);
    }
  );
};

const viewEmployee = function () {
  db.query(
    "SELECT e.id, CONCAT(e.first_name, ' ', e.last_name) as Name, r.title as Title, d.department_name as Department, CONCAT(m.first_name, ' ', m.last_name) AS Manager, r.salary as Salary FROM employee e JOIN role r ON e.role_id = r.id JOIN department d ON r.department_id = d.id LEFT JOIN employee m ON e.manager_id = m.id",
    (err, result) => {
      console.table(result);
    }
  );
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
  db.query("SELECT department_name FROM department", (err, result) => {
    deptList = result.map((dept) => {
      return `${dept.department_name}`;
    });
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
          type: "list",
          name: "department",
          message: "What department does this role belong to?",
          choices: deptList,
        },
      ])
      .then((answer) => {
        const newRole = answer;
        insertRole(newRole);
      });
  });
};

const addEmployee = function () {
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
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: roleList,
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
