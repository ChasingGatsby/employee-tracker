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

const insertRole = (data) => {
  const { title, salary, department } = data;
  db.query(
    `SELECT id FROM department WHERE department_name = ?`,
    department,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const deptID = result[0].id;
        console.log(deptID);
        db.query(
          `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${deptID})`,
          (err, result) => {
            if (err) {
              console.log * err;
            }
            console.log("New Role Added");
          }
        );
      }
    }
  );
};

const insertEmployee = (data) => {
  const { firstName, lastName, role, manager } = data;
  const managerName = manager.split(" ");
  db.query(
    `SELECT id FROM employee WHERE first_name = '${managerName[0]}' AND last_name = '${managerName[1]}'`,
    (err, mgrResult) => {
      if (err) {
        console.log(err);
        return;
      }
      db.query(
        `SELECT id FROM role WHERE title = '${role}'`,
        (err, roleResult) => {
          if (err) {
            console.log(err);
            return;
          }
          db.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roleResult[0].id}, ${mgrResult[0].id})`
          );
          console.log("New Employee Added");
        }
      );
    }
  );
};

const query = { insertDept, insertRole, insertEmployee };

module.exports = query;
