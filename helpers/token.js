'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
const { model } = require('mongoose');
var secret = "micontraseñasecreta";

function obtenerTokenDeUsuario(usuario){

    var payload = {
        sub: usuario._id,
        name: usuario.nombre,
        email: usuario.email,
        iat: moment().unix(),
        exp: moment().add(20, 'seconds').unix()
    }

    return jwt.encode(payload, secret);

}

function validarTokenDeUsuario(req, resp, nextStep){

    var tokenEnviado = req.headers.authorization;

    try{
        var payload = jwt.decode(tokenEnviado, secret);

        if( moment().unix() >= payload.exp ){
            resp.status(403).send({message:"Token Expiró"});
        }
        else{
            nextStep();
        }
    }
    catch(ex){
        resp.status(403).send({message:"Token Inválido"});
    }
}


module.exports ={
    obtenerTokenDeUsuario,
    validarTokenDeUsuario
}