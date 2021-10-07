'use strict'

var express = require('express');
var authcontroller = require('../controllers/authcontroller');

var application = express.Router();

//application.get('/pruebas-controlador', authcontroller.pruebas);


application.get('/controlador', authcontroller.pruebaController);


module.exports = application;