var response = require('../model/res');
var accountDao = require('../dao/account-dao');
var logger = require('../util/logging/winston-logger');
var util = require('util');

exports.accounts = function(req, res) {
    accountDao.getAll(function (error, rows){
        if(error){
            logger.error('error while select: '+error);
            response.err(ress, err);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.getAccountById = function(req, res) {
    accountDao.getById(req.params['id'], function(err, data){
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.updateAccount = function(req, res) {
    accountDao.getById(req.body.accountNumber, function(err, data){ //check account exists
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('account not found', res);
        }else {
            //if exists, then continue update
            accountDao.update(req.body.accountNumber, req.body, function(err, data){
                if(err){
                    logger.error('error while select: '+error);
                    response.err(error, res);
                }
                response.ok('updated data :'+ data.message, res);
            });
        }
    });
};

exports.insertAccount = function(req, res) {
    accountDao.insert(req.body, function(err, data){
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }
        response.ok('data inserted with id '+data.insertId, res);
    });
};

exports.delAccount = function(req, res) {
    accountDao.getById(req.params['id'], function(err, data){ //check account exists
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('account not found', res);
        } else{
            //if exists, continue delete
            accountDao.delAccount(req.params['id'], function(err, data){
                if(err){
                    logger.error('error while select: '+error);
                    response.err(error, res);
                }
                response.ok(data, res);
            });
        }
    });
};