'use strict'

function pruebaController(req, resp){
    resp.status(200).send({mensaje:"OK 2"});
}

function validarPassword(){

}

module.exports = {
    pruebaController,
    validarPassword
};