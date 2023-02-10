
//mysql package
const mysql = require("mysql");
//server connection string
const db = require("./db_properties");

module.exports = {
    getservercall: mysql.createPool({
        connectionLimit: 10,
        host: db.host,
        user: db.user,
        password: db.password,
        database: db.database,
    })
}









