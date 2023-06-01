const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    sobrenome: String,
    data_nascimento: Date, 
    telefone: String,
    endereco: String,
    cidade: String,
    estado: String,
    status: Boolean,
    imagem: Buffer,
});

module.exports = mongoose.model('usuarios', UsuarioSchema);