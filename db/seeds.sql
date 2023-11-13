INSERT INTO department (department_name)
VALUES ("Alpha"), ("Beta"), ("Gamma"), ("Delta");

INSERT INTO role (title, salary, department_id)
VALUES ("Fixer", 80000, 1), 
    ("Breaker", 90000, 1),
    ("Watcher", 50000,2),
    ("Sleeper", 85000, 2),
    ("Spinner", 66662, 3),
    ("Habituator", 500, 4),
    ("Janitor", 5000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values ('Aiden', 'DeGalles', 4, 7),
    ('Jasper', 'Castello', 5, null),
    ('Noelle', 'Pulcinea', 3,1),
    ('Luciana', 'Roland,', 2,2),
    ('Sarah', 'Haystrom', 6, null),
    ('Karen', 'Kolter', 2, 1),
    ('Graham', 'Pulcinea', 3, null);