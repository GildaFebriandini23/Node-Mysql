var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');

exports.transactions = function(req, res){
    transactionDao.getAll(function (error, rows){
        if(error){
            logger.error('error while select: '+error);
            response.err(ress, err);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.getTransactionById = function(req, res){
    transactionDao.getById(req.params['id'], function(err, data){
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.updateTransaction = function(req, res){
    transactionDao.getById(req.body.id, function(err, data){ //check transaction exists
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }else if(data == null){
            response.datanotfound('transaction not found', res);
        } else {
            //if exists, then continue update
        transactionDao.update(req.body.id, req.body, function(err, data){
            if(err){
                logger.error('error while select: '+error);
                response.err(error, res);
            }
            response.ok('updated data : '+data.message, res);
            });
        }
    });
};

exports.insertTransaction = function(req, res){
    transactionDao.insert(req.body, function(err, data){
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }
        response.ok('data inserted with id '+ data.indertId, res);
    });
};

exports.delTransaction = function(req, res) {
    transactionDao.getById(req.params['id'], function(err, data){ //check transaction exists
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('transaction not found', res);
        } else{
            //if exists, continue delete
            transactionDao.delTransaction(req.params['id'], function(err, data){
                if(err){
                    logger.error('error while select: '+error);
                    response.err(error, res);
                }
                response.ok(data, res);
            });
        }
    });
};