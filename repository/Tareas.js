const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        asignado: {
            type: String,
            required: true
        },
        fecha_fin: {
            type: Date,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Tareas', tareaSchema);