USE employees;

INSERT INTO department
    (name)
VALUES
    ("Management"),
    ("Human Resources"),
    ("Engineering"),
    ("Operations");

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("CEO", 1100000, 1),
    ("Operations Manager", 200000, 1),
    ("HR Business Partner", 190000, 2),
    ("Senior Developer", 100000, 3),
    ("Junior Developer", 75000, 3),
    ("Data Clerk", 55000, 4),
    ("Secretary", 42000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_name)
VALUES
    ("Bruce", "Wayne", 1, "None"),
    ("Lucius", "Fox", 2, "Bruce Wayne"),
    ("Richard", "Grayson", 3, "Bruce Wayne"),
    ("Barbara", "Gordon", 4, "Lucius Fox"),
    ("Timothy", "Drake", 5, "Barbara Gordon"),
    ("Selina", "Kyle", 6, "Lucius Fox"),
    ("Jason", "Todd", 7, "Lucius Fox");
