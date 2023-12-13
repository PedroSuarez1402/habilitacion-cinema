const Horario = require('../models/Schelude');

const horarioController = {
  async getAllHorarios(req, res) {
    try {
      const horarios = await Horario.findAll();
      res.json(horarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createHorario(req, res) {
    const { hora } = req.body;
    try {
      const newHorario = await Horario.create({ hora });
      res.status(201).json(newHorario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

};

module.exports = horarioController;
