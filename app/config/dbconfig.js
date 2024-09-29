const mysql = require('mysql2')

// create a pool of simultaneous connections; can connect different databases at the exact same time

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
})

module.exports = pool