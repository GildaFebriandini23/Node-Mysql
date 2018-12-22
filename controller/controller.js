'use strict';

var response = require('../model/res');
var connection = require('../db/conn');

var util = require('util');

exports.customers = function(req, res) {
    connection.query('SELECT * FROM customer', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.testpost = function(req, res) {
    response.ok("Post masuk : " + util.inspect(req.body), res)
};

// exports.createCustomers = function(req, res) {
    
    // var firstname = req.body.firstname;
    // var lastname = req.body.lastname;
    // var birthdate = req.body.birthdate;
    // var username = req.body.username;
    // var password = req.body.password;
    // var phonenumber = req.body.phonenumber;
    // var phonetype = req.body.phonetype;

//     connection.query('INSERT INTO customer (firstname, lastname, birthdate, username, password, phonenumber, phonetype) values (?,?,?,?,?,?,?)',
//     [ firstname, lastname, birthdate, username, password, phonenumber, phonetype ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok("Berhasil menambahkan customer!", res)
//         }
//     });
// };

exports.insertCustomer = function(req, res) {
    connection.query('insert into customer set ? ', req.body, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

const sqlGetById = "SELECT * FROM customer where customernumber = ?";
exports.getCustomerById = function(req, res) {
    connection.query(sqlGetById, req.params['id'], function (error, rows){
        if(error){
            console.log(error)
        }else {
            response.ok(rows[0], res)
        }
    });
};

const sqlDeleteById = "DELETE FROM customer where customernumber = ?";
exports.deleteCustomerById = function(req, res) {
    connection.query(sqlDeleteById, req.params['id'], function (error, rows){
        if(error){
            console.log(error)
        }else {
            response.ok(rows[0], res)
        }
    });
};

// exports.updateCustomer = function(req, res) {
    
//     var customernumber = req.body.customernumber;
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     var birthdate = req.body.birthdate;
//     var username = req.body.username;
//     var password = req.body.password;
//     var phonenumber = req.body.phonenumber;
//     var phonetype = req.body.phonetype;

//     connection.query('UPDATE customer SET firstname = ?, lastname = ?, birthdate = ?, username = ?, password = ?, phonenumber = ?, phonetype = ? WHERE customernumber = ?',
//     [ firstname, lastname, birthdate, username, password, phonenumber, phonetype, customernumber ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok("Berhasil merubah customer!", res)
//         }
//     });
// };

const sqlUpdate = "UPDATE customer set ? where customernumber = ?";

exports.updateCustomer = function(req, res) {
    getById(req.body.customernumber, function(err, data){
        if(err || data==null){
            console.log('error call getById : '+err);
            response.ok('error / data kosong ', res);
        }else {
            connection.query(sqlUpdate, [req.body, req.body.customernumber], function (error, rows){
                if(error){
                    console.log(error);
                }
                response.ok(rows, res);
            });
        }
    });
};

