// var connection = require('../db/conn');

// const sqlGetById = "SELECT * FROM account WHERE accountNumber = ?";
// const sqlUpdate = "UPDATE account SET ? WHERE accountNumber = ?";
// const sqlGetAll = "SELECT * FROM account";
// const sqlInsert = "INSERT INTO account SET ?";
// const sqlDelete = "DELETE FROM account WHERE accountNumber = ?";

// exports.getById = function getById(id, callback) {
//     connection.query(sqlGetById,id, function (error, rows){
//         if(error){
//             console.log(error);
//             return callback(error);
//         } 
//         callback(null, rows[0]);
//     });
// };

// exports.getAll = function getAll(callback) {
//     connection.query(sqlGetAll, function (error, rows){
//         if(error){
//             console.log(error);
//             return callback(error);
//         } 
//         callback(null, rows);
//     });
// };

// exports.insert = function insert(data, callback) {
//     connection.query(sqlInsert, data, function (error, rows){
//         if(error){
//             console.log(error);
//             return callback(error);
//         } 
//         callback(null, rows);
//     });
// };

// exports.update = function update(id, data, callback) {
//     connection.query(sqlUpdate, [data, id], function (error, rows){
//         if(error){
//             console.log(error);
//             return callback(error);
//         } 
//         callback(null, rows);
//     });
// };

// exports.delAccount = function delAccount(id, callback) {
//     connection.query(sqlDelete, id, function (error, rows){
//         if(error){
//             console.log(error);
//             return callback(error);
//         } 
//         callback(null, rows);
//     });
// };
