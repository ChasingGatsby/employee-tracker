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
const { addDept, addRole, addEmployee } = require("./table_edits");

const viewDept = db.query("SELECT * FROM department", (err, result) => {
  console.log(result);
});

// const viewRole = db.query("SELECT * FROM role", (err, result) => {
//   console.log(result);
// });

// const viewEmployee = db.query("SELECT * FROM employee", (err, result) =>
//   console.log(result)
// );

// function selectOption(choice) {
//   switch (choice) {
//     case "View All Departments":
//       viewDept();
//       break
//     case "View All Roles":
//       viewRole();
//       break
//     case "View All Employees":
//       viewEmployee();
//       break
//     case "Add Department":
//       addDept();
//       break
//     case "Add Role":
//       addRole();
//       break
//     case "Add Employee":
//       addEmployee();
//       break
//   }
// }

const options = {selectOption}

module.exports = options;
