
// import express
const express = require("express");
var connection;
//get server connection string
var ServerConnectionString = require('../config/db_connection').getservercall;

function getConnection() {
    return connection = ServerConnectionString;
}

let router = express.Router();

//insert register data into table
router.storeemployee = function (req, res) {
  var EmployeeID = req.body.EmployeeID;
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var AddressLine = req.body.AddressLine;
  var City = req.body.City;

  var sql = "INSERT INTO Employee (EmployeeID,FirstName,LastName,Email,AddressLine,City) VALUES ('" + EmployeeID + "','" + FirstName + "','" + LastName + "','" + Email + "','" + AddressLine + "','" + City +"')";
  getConnection().query(sql, function (err, result) {
    if (err) {
      return err;
    } else {
      res.send({ Message: "Employee successfully Registered" });
    }
  });
}

module.exports = router;
