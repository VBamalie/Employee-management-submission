const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'rootroot',
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );

  module.exports =  connection