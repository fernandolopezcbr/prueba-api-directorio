//Diferentes métodos y rutas relacionadas con las notas. Definimos todos los métodos y objetos de la API

'use strict'

var Note = require('../models/note');

//creamos un objeto controller para disponer de todos los métodos de ruta:
var controller = {

    //Método para guardar un artículo:

    save: (req, res) => {

        var params = req.body;
        console.log(params);
        //Objeto a guardar
        var note = new Note();


        note.nombre = params.nombre;
        note.departamento = params.departamento;
        note.ubicacion = params.ubicacion;
        note.categoria = params.categoria;
        note.imagen = params.imagen;
        note.email = params.email;
        note.telefono = params.telefono;
        note.whatsapp = params.whatsapp;
        note.horario = params.horario;
        note.website = params.website;
        // Asignar valores
        note.title = params.title;
        note.description = params.description;

        // Guardamos el articulo
        note.save((err, noteStored) => {

            if (err || !noteStored) {
                return res.status(404).send({
                    status: 'error',
                    message: 'La nota no se ha guardado !!!'
                });
            }

            // Devolver una respuesta 
            return res.status(200).send({
                status: 'success',
                noteStored
            });

        });

    },

    //Método para obtener o listar los artículos:

    getNotes: (req, res) => {

        var query = Note.find({});

        query.sort('-date').exec((err, notes) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al extraer los datos"
                });
            }

            //Si no existen artículos:
            if (!notes) {
                return res.status(404).send({
                    status: "error",
                    message: "No hay notas para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                notes
            });

        });

    },

    //Eliminar un artículo:

    delete: (req, res) => {

        //Recogemos el id de la url
        var noteId = req.params.id;

        Note.findOneAndDelete({ _id: noteId }, (err, noteRemoved) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al eliminar!!"
                });
            }

            if (!noteRemoved) {
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado la nota que deseas aliminar!!"
                });
            }

            //Si no hay ningún error obtenemos el artículo eliminado

            return res.status(200).send({
                status: "success",
                note: noteRemoved
            });

        });

    },

    update: (req, res) => {
        var noteId = req.params.id;

        //Recogemos los datos del body
        var params = req.body;

        // Asignar valores

        const nombre = params.nombre,
        departamento = params.departamento,
        ubicacion = params.ubicacion,
        categoria = params.categoria,
        imagen = params.imagen,
        email = params.email,
        telefono = params.telefono,
        whatsapp = params.whatsapp,
        horario = params.horario,
        website = params.website;


        const title = params.title;
        const description = params.description;

        Note.findOneAndUpdate({ _id: noteId }, { nombre:nombre, departamento:departamento, ubicacion:ubicacion , categoria: categoria, imagen:imagen, email:email , telefono: telefono, whatsapp:whatsapp, horario:horario, website:website, title: title, description: description }, { new: true }, (err, noteUpdated) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: "Error al actualizar!!"

                });
            }

            if (!noteUpdated) {
                return res.status(404).send({
                    status: "error",
                    message: "Error, no existe la nota!!"
                });
            }

            //Si no hay ningún error obtenemos la nota actualizada

            return res.status(200).send({
                status: "success",
                article: noteUpdated
            });
        });

    }

};

module.exports = controller;