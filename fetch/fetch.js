//import dao file to access
const dao = require("../dao/dao")
var connection;
// import express
const express = require("express");
// create the router
let router = express.Router();


//get employee list
router.getemployees = function (req, res) {
    dao.getemployees(function (data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
}
module.exports = router;
