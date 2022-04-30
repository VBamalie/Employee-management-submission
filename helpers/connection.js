const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'rootroot',
      database: 'employees'
    },
    console.log(`Connected to employees db`)
  );


  

  module.exports =  connection