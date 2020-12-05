var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "asdl",
    password: "asdllab",
    database: "ASDL"
});

module.exports = con;