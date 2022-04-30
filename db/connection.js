const mysql = require('mysql2')

const express = require('express');
// Import and require mysql2

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  module.exports =  connection