const connection = require ("./helpers/connection");
const inquirer = require("inquirer");
const {viewEmployees, viewDepartments, viewRoles, addDepartment, quit} = require("./helpers/modules")

function mainMenu(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ])
    .then((res) =>{
        let choices = res.choice
       
        switch(choices){
            case "VIEW_EMPLOYEES":
                console.log("These are our employees:")
                viewEmployees()
                break;
            case "VIEW_DEPARTMENTS":
                console.log("These are our departments:")
                viewDepartments();
                break;
            case "VIEW_ROLES":
                console.log("These are our roles:")
                viewRoles();
                break;
            case "ADD_EMPLOYEE":
                console.log("Add employee")
                break;
            case "ADD_DEPARTMENT":
                addDepartment()
                break;
            case "ADD_ROLE":
                addRole()
                break;
            case "QUIT":
                quit()
                break
        }
    })
}


// function viewEmployees(){
//     connection.query(
//         `SELECT employee.id, employee.first_name, employee.last_name, employee.manager_name, roles.title, roles.salary, department.name
//         FROM department
//         JOIN roles ON roles.department_id  = department.id
//         JOIN employee ON employee.role_id = roles.id;`, async function(err , rows){
//             console.table(rows)
//             await mainMenu();
//             })
// }

// function viewDepartments(){
//     connection.query(
//         `SELECT * FROM department`, async function (err, rows){
//             console.log(rows)
//             await mainMenu();
//         }
//     )
// }

// function viewRoles(){
//     connection.query(
//     `SELECT roles.title, roles.id, roles.salary, department.name FROM department JOIN roles ON roles.department_id  = department.id;`, async function(err, rows){
//         console.table(rows)
//         await mainMenu();
//         }
//     )
// }

// function addDepartment(){
//     inquirer
//         .prompt([
//             {
//                 type: "input",
//                 message: "What's the new department's name?",
//                 name: "DepartmentName"
//             }
//         ])
//         .then((res)=>{
//             let newName = res.DepartmentName
//             connection.query(
//             `INSERT INTO department (name) VALUES ("${newName}");`, async function (){
//                 console.log("Successfully added!")
//                 mainMenu();
//             })
//         })
// }

function addRole(){
    // depTable = connection.query(
    //     `SELECT * FROM department`, function (err, rows){ return rows
    // });
    // console.log(depTable)
    // // depOptions = depTable.forEach(element => {element.value = `${element.id}`
    // });
    console.log(depOptions)
    inquirer
        .prompt([
            {
                 name: "title",
                 message: "What's the new role's title?",
                 type: "input"
             },
             {
                 name: "salary",
                 message: "How much does this role make?",
                 type: "input"
             },
            {
                 name: "deparment_id",
                 message: "What department does this belong to?",
                 type: "list",
                 choices: {...departmentOptions}
             }
         ])
    }




function quit(){
    console.log("Goodbye!");
    process.exit()
}

mainMenu()
module.exports = {mainMenu}