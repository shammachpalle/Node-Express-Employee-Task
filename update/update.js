//import express module
var express = require("express");
const dao = require("../dao/dao")

var router = express.Router();

//Update  employee by id
router.updateemplyeebyid = (req, res) => {
    var id = req.query.id;
    var data = req.body
    dao.updateemplyeebyid(data, id, function (data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
}

//export router
module.exports = router;