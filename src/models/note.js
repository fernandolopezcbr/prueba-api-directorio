'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({

    nombre:String,
    departamento: String,
    ubicacion: String,
    categoria: String,
    imagen: String,
    email: String,
    telefono: String,
    whatsapp: String,
    horario: String,
    website: String,

    title: String,
    date: {type: Date, default: Date.now},
    description: String

});

module.exports = mongoose.model('Note', NoteSchema);