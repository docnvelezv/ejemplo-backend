'use strict'

var express = require('express');
var contactscontroller = require('../controllers/contactscontroller');
var token = require('../helpers/token');

var application = express.Router();

application.post('/contacto/create', token.validarTokenDeUsuario , contactscontroller.crearContacto);

application.put('/contacto/edit', token.validarTokenDeUsuario , contactscontroller.modificarContacto);

application.delete('/contacto/delete', token.validarTokenDeUsuario , contactscontroller.eliminarContacto);

application.get('/contacto/list', token.validarTokenDeUsuario , contactscontroller.consultarContactosPorUsuario);

module.exports = application;