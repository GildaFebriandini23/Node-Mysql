var response = require('../model/res');
var customerDaoSequelize = require('../dao/customer-dao-sequelize');
var logger = require('../util/logging/winston-logger');
var util = require('util');

exports.customers = function(req, res) {
    customerDaoSequelize.getAll(function (error, rows){
        if(error){
            logger.error('error while select: '+error);
            response.err(ress, err);
        } else {
        //  return res.json(rows)
         response.ok(rows, res)
        }
    });
};

exports.getCustomerById = function(req, res) {
    customerDaoSequelize.getById(req.params['id'], function(err, data){
        if(err){
            logger.error('error while select: '+error);
            response.err(err, res);
        }
        response.ok(data, res);
    });
};

exports.updateCustomer = function(req, res) {
    logger.info('request for update :');
    logger.debug(req.body);
    customerDaoSequelize.getById(req.body.customerNumber, function(err, data){ //check customer exists
        if(err){
            logger.error('error call getById: '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        }else {
            //if exists, then continue update
            customerDaoSequelize.update(req.body.customerNumber, req.body, function(err, data){
                if(err){
                    logger.error('error while select: '+error);
                    response.err(error, res);
                }
                response.ok('updated data :'+ data.customerNumber, res);
            });
        }
    });
};

exports.insertCustomer = function(req, res) {
    logger.info('request for insert :');
    logger.debug(req.body);
    customerDaoSequelize.insert(req.body, function(err, data){
        if(err){
            logger.error('error call insert: '+err);
            response.err(err, res);
        }
        response.ok('data inserted with id :'+ data.customerNumber, res);
    });
};

exports.del = function(req, res) {
    logger.info(util.format('deleting customer id %s', req.params['id']));
    customerDaoSequelize.getById(req.params['id'], function(err, data){ //check customer exists
        if(err){
            logger.error('error while select: '+err);
            response.err(err, res);
        } else if(data==null){
            response.datanotfound('customer not found', res);
        } else{
            //if exists, continue delete
            customerDaoSequelize.del(req.params['id'], function(err, data){
                if(err){
                    logger.error('error while select: '+err);
                    response.err(error, res);
                }
                response.ok(data, res);
            });
        }
    });
};