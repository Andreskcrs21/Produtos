const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de la tabla productos
const UserSchema = new Schema({
    nombre: {type: String},
    tipo: { type: String},
    precio: { type: String},
    cantidad: {type: String},
    fecha_caducidad:{type: String}
});

module.exports = Productos = mongoose.model('Productos', UserSchema);