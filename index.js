const connection = require ("./db/connection");
const prompt = require("inquirer")

function mainMenu(){
    prompt([
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
    .then(res =>{
        let choices = res.choices;
        //now we call the appropriate function depending on what the user chooses
    })
}

//conditional statement here- call correspoding function

// async function viewEmployees(){
//     let employees= awai debugger.findAllEmployees();
//     console.table(employees)
// }

function viewEmployees(){
    connection.findAllEmployees()
    .then(([rows])=>{
        let employees = rows;
        console.log("\n");
        console.table(employees)
    })
    .then(()=> mainMenu())
}

function quit(){
    console.log("Goodbye!");
    process.exit()
}