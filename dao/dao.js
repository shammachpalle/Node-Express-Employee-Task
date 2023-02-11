
//get serever connection string
var ServerConnectionString = require('../config/db_connection').getservercall;
var connection;
// import express
const express = require("express");
// create the router
let router = express.Router();


//To create a connection
function getConnection() {
    return connection = ServerConnectionString;
}

module.exports = {

    //To get all employees
    getemployees: (callback) => {
        var sql = "select * from Employee;";
        getConnection().query(sql, function (err, recordsArray, fields) {
            if (err) {
                loggerError.error(err)
                callback(JSON.stringify(err));
            } else {
                callback(JSON.stringify(recordsArray));
            }
        });
    },

    //Update employee by id,if employee id is not available,will show the message.
    updateemplyeebyid: (data, id, callback) => {
        var employeeId = "select EmployeeID from Employee;";
        var idArr = [];
        var recordsArray = [];
        getConnection().query(employeeId, function (err, recordsArray, fields) {
            if (err) {
            } else {
                idArr=JSON.stringify(recordsArray);
               
                if (idArr.includes(id)) {
                    var sql = `UPDATE Employee SET ? WHERE EmployeeID=` + id + ';';
                    getConnection().query(sql, [data], function (err, data) {
                        if (err) {
                            callback("err");
                        } else {
                            callback(JSON.stringify(data));
                        }
                        console.log(data.affectedRows + " record(s) updated");
                    });
                } else {
                    callback(JSON.stringify({ Message: "Employee id is not available to update." }));
                }
            }
        });
    },



}