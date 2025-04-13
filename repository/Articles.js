const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        subTitulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        fecha: {
            type: Date,
            required: true
        },
        categoria: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Articles', articleSchema);