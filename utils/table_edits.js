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

const deptQuery = (name) =>
  db.query(
    `INSERT INTO department (department_name) VALUES (${name})`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );

function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ])
    .then((name) => deptQuery(name));
}

const edits = {
    addDept
}

module.exports = edits