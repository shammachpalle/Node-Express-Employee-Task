var express = require("express");
var connection = require('../config/db_connection').getservercall;

//create the module(Router)
var router = express.Router();
router.deleteemployee = function (req, res) {
    var EmployeeID = req.body.EmployeeID;
    connection.query("DELETE from Employee WHERE EmployeeID =" + EmployeeID,
        function (err) {
            if (err) {
                console.log("error while deleting the data !");
            } else {
                res.send({ message: "Employee deleted successfully" });
            }
        });
}

module.exports = router;