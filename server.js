var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var logger = require("./util/logging/winston-logger");

app.use(morgan('combined', { "stream": logger.stream}));
logger.debug("Overidding 'Express' logger");

var customerRoute = require('./router/routes-customer');
customerRoute(app);

var AccountRoute = require('./router/routes-account');
AccountRoute(app);

var TransactionRoute = require('./router/routes-transaction');
TransactionRoute(app);

app.listen(port);
// console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
logger.debug('Learn Node JS With Kiddy, RESTful API server started on: ' + port);