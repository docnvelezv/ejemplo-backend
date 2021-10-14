'use strict'

var moongose = require('mongoose');

var Schema = moongose.Schema;

var ContactosSchema = Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: String,
    propietario : {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios'
    }
});

module.exports = moongose.model('contactos', ContactosSchema);
