
const Usuario = require('../models/usuario');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { username } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    if (usuario.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Aquí podrías generar un token JWT para el usuario y enviarlo en la respuesta
    res.json({ message: 'Login exitoso.' /*, token: ... */ });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = (req, res) => {
  // Lógica para cerrar sesión
  res.json({ message: 'Logout exitoso.' });
};
