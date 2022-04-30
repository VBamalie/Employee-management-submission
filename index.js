const connection = require ("./helpers/connection");
const inquirer = require("inquirer")
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
                    // value: "VIEW_EMPLOYEES"
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View Dapartments",
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
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ])
    .then((res) =>{
        let choices = res.choice
        //now we call the appropriate function depending on what the user chooses
        // if(choices == "VIEW_EMPLOYEES"){
        //     console.log("These are our employees:")
        //     viewEmployees();
        // }
        // if(choices == "VIEW_DEPARTMENTS"){
        //     console.log("These are our departments:")
        //     viewDepartments();
        // }
        // if(choices == "VIEW_ROLES"){
        //     console.log("These are our Roles:")
        //     viewRoles();
        // }
        // if(choices == "ADD_EMPLOYEE"){
        //     console.log("Add employee")
        // }
        // if(choices =="ADD_DEPARTMENT"){
        //     console.log("Add employee")
        // }
        // if(choices == "QUIT"){
        //     quit()
        // }

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
                console.log("Add employee")
                break;
            case "QUIT":
                quit()
                break
        }
    })
}

//conditional statement here- call correspoding function

// async function viewEmployees(){
//     let employees= awai debugger.findAllEmployees();
//     console.table(employees)
// }

function viewEmployees(){
    connection.query(
        `SELECT employee.id, employee.first_name, employee.last_name, employee.manager_name, roles.title, roles.salary, department.name
        FROM department
        JOIN roles ON roles.department_id  = department.id
        JOIN employee ON employee.role_id = roles.id;`, async function(err , rows){
            console.table(rows)
            await mainMenu();
            })
}

function viewDepartments(){
    connection.query(
        `SELECT * FROM department`, async function (err, rows){
            console.table(rows)
            await mainMenu();
        }
    )
}
function viewRoles(){
    connection.query(
    `SELECT roles.title, roles.id, roles.salary, department.name FROM department JOIN roles ON roles.department_id  = department.id;`, async function(err, rows){
        console.table(rows)
        await mainMenu();
        }
    )
}


function quit(){
    console.log("Goodbye!");
    process.exit()
}

mainMenu()