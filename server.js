const express = require("express");
const fetch = require("./fetch/fetch");
const update = require("./update/update");
const insert = require("./insert/insert");
const bodyparser = require("body-parser");
const remove = require("./delete/delete");

let app = express();

app.use(bodyparser.json());

// check for form data
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("Welcome user");
})
app.post("/storeemployee",insert.storeemployee)
app.get("/getemployees", fetch.getemployees);
app.put("/updateemplyeebyid", update.updateemplyeebyid);
app.delete("/deleteemployee", remove.deleteemployee);

// Assign port number
app.listen(3000);
console.log("server is listening at port no. 3000");
