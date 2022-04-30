USE employees;

INSERT INTO department
    (name)
VALUES
    ("Management"),
    ("Human Resources"),
    ("Engineering"),
    ("Operations");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Operations Manager", 200000, 1),
    ("HR Business Partner", 190000, 2),
    ("Senior Developer", 100000, 3),
    ("Junior Developer", 75000, 3),
    ("Data Clerk", 55000, 4),
    ("Secretary", 42000, 4);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ("Bruce", "Warne", 1),
    ("Lucius", "Fox", 2),
    ("Richard", "Grayson", 3),
    ("Barbara", "Gordon", 4),
    ("Timothy", "Drake", 5),
    ("Jason", "Todd", 6);
