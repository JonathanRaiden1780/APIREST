var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var cliente = new Schema({
    Cliente_ID: { type: Number },
    Nombre_Usuario: { type: String },
    Contrasena: { type: String },
    Nombre: { type: String },
    Apellidos: { type: String },
    Correo_Electronico: { type: String },
    Edad: { type: Number },
    Estatura: { type: Number },
    Peso: { type: Number },
    IMC: { type: Number },
    GEB: { type: Number },
    ETA: { type: Number },
    Fecha_Creacion: { type: String },
    Fecha_Actualizacion: { type: String }
});

module.exports = mongoose.model('Cliente', cliente);

