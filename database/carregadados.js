require("./mongodb");
const mongoose = require("mongoose");
const Usuario = require("../models/Usuario");
const usuarios = require("./usuarios.json");

async function carregarDados() {
    try {
     
        for (const usuario of usuarios) {
            await Usuario.create(usuario);
        }
        console.log("Carga de usuarios feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();