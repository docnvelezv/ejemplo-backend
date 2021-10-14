'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var routesauth = require('./routes/auth');
var routescontacts = require('./routes/contacts');

var application = express();

application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

application.use('/api', routesauth);
application.use('/api', routescontacts);

application.get('/health-check', function(req, resp){
    resp.status(200).send({mensaje:"OK"});
});

module.exports = application;
