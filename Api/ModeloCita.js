const mongoose = require('mongoose');//npm install mongoose package paquetes

//definir el esquema que tendra nuestra coleccion
let EsquemaCita = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'el nombre de la persona es necesario para la cita']
    },
    Apellido: {
        type: String,
        required: [true, 'el apellido de la persona es necesario para la cita']
    },
    Documento: {
        type: Number,
        required: [true, 'el documento es necesario para la cita']
    },
    Fecha_Nacimiento: {
        type: Number,
        required: [true, 'la fecha de nacimiento es necesaria para la cita']
    },
    Ciudad: {
        type: String,
        required: [true, 'la ciudad es necesaria para la cita']
    },
    Barrio: {
        type: String,
        required: [true, 'el barrio es necesario para la cita']
    },
    Numero_Celular: {
        type: Number,
        required: [true,'el numero de celular es necesario para la cita ']
    }


});

module.exports = mongoose.model('modeloCita', EsquemaCita)
