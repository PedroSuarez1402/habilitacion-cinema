// controllers/usuarioController.js
const Usuario = require('../models/usuario');

const usuarioController = {
  async getAllUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createUsuario(req, res) {
    const { username, email, password, role } = req.body;
    try {
      const newUsuario = await Usuario.create({ username, email, password, role });
      res.status(201).json(newUsuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

};

module.exports = usuarioController;
