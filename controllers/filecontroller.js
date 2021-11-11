'use strict'

function subirImagen(req, resp){
    resp.status(200).send({fileUploaded: req.file.filename});
}

function retornarImagen(req, resp){
    resp.sendFile('uploads/'+req.params.imagename, {root:'.'});
}

module.exports = {
    subirImagen,
    retornarImagen
};