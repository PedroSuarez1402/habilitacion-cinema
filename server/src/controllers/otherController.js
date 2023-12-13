

exports.someRoute = async (req, res) => {
    try {
      // Lógica para obtener datos o realizar operaciones
      res.json({ message: 'Ruta disponible.' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.anotherRoute = async (req, res) => {
    try {
      // Lógica para crear o actualizar datos, etc.
      res.json({ message: 'Ruta disponible.' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  