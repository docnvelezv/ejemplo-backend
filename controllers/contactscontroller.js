'use strict'

var Contactos = require('../models/contactos');

var Usuarios = require('../models/usuarios');
var token = require('../helpers/token');
var bcrypt = require('bcrypt-nodejs');

function crearContacto(req, resp){

    var nuevoContacto = new Contactos();

    var parametros = req.body;

    nuevoContacto.nombre = parametros.nombre;
    nuevoContacto.apellidos = parametros.apellidos;
    nuevoContacto.email = parametros.email;
    nuevoContacto.telefono = parametros.telefono;
    nuevoContacto.propietario = req.headers.userId;

    nuevoContacto.save(
        (err, contactoGuardado) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear el contacto"});
            }
            else{
                resp.status(200).send({contactCreated: contactoGuardado});
            }
    });
}

function modificarContacto(req, resp){

    var parametros = req.body;

    Contactos.findByIdAndUpdate(parametros._id, {
        nombre: parametros.nombre,
        apellidos: parametros.apellidos,
        email: parametros.email,
        telefono: parametros.telefono
    }, function(err, contactoActualizado){
        if(err){
            resp.status(500).send({message: "No se pudo modificar el contacto"});
        }
        else{
            resp.status(200).send({contactUpdated: contactoActualizado});
        }

    }) ;


}

function eliminarContacto(req, resp){

    var parametros = req.body;

    Contactos.findByIdAndDelete(parametros._id, function(err, contactoEliminado){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar el contacto"});
        }
        else{
            resp.status(200).send({contactDeleted: contactoEliminado});
        }
    }) ;

}

function consultarContactosPorUsuario(req, resp){

    Contactos.find({propietario:req.headers.userId}, (err, contactosEncontrados) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({contactList: contactosEncontrados});
        }
    });

}

module.exports = {
    crearContacto,
    modificarContacto,
    eliminarContacto,
    consultarContactosPorUsuario
};