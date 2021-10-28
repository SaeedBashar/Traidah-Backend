const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'balance12',
    database: 'ecommerce'
}); 

module.exports = db;