
## Installation Instructions
Run npm install 

### Setup

node server.js


### Api test server endpoints.

```
Method type:- get
Api Endpoint:- http://localhost:3000/

expected result:- welcome user.

```

### Api get all employee endpoints.

```
It will return the list of employees.
Method type:- get
Api Endpoint:- http://localhost:3000/getemployees

expected result:- [
  {
    "EmployeeID": 1,
    "FirstName": "sham",
    "LastName": "reddy",
    "Email": "abc@gmai.com",
    "AddressLine": "btm layout",
    "City": "bng"
  },
  {
    "EmployeeID": 2,
    "FirstName": "maddy",
    "LastName": "reddy",
    "Email": "abc@gmai.com",
    "AddressLine": "btm layout",
    "City": "mysore"
  }
]

```

### Api update employee by id endpoints.

```
Method type:- put
Api Endpoint:- http://localhost:3000/updateemplyeebyid

req.query parameter:- 2
req.body to update:-{
    "EmployeeID": 7,
    "FirstName": "k",
    "LastName": "naik",
    "Email": "xyz@gmai.com",
    "AddressLine": "ttm layout",
    "City": "bng"
  }

expected result:- {
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "serverStatus": 34,
  "warningCount": 0,
  "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
  "protocol41": true,
  "changedRows": 1
}

```


### Api delete employee record by id endpoint.

```
Method type:- delete
Api Endpoint:- http://localhost:3000/deleteemployee

req.body to update:-   
{
"EmployeeID" : "7"
}

expected result:- 
{
  "message": "Employee deleted successfully"
}

```