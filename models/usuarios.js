'use strict'

var moongose = require('mongoose');

var Schema = moongose.Schema;

var UsuarioSchema = Schema({
    nombre: String,
    apellidos: String,
    email: String,
    passwod: String,
});

module.exports = moongose.model('usuarios');
