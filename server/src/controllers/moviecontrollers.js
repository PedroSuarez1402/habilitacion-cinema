
const Movie = require('../models/movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMovie = async (req, res) => {
  const { title, description, duration, genre } = req.body;
  try {
    const newMovie = await Movie.create({ title, description, duration, genre });
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesForAdults = async (req, res) => {
  try {
    const moviesForAdults = await Movie.findAll({
      where: {
        isForAdults: true,
      },
    });
    res.json(moviesForAdults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.setMovieForAdults = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findByPk(movieId);
    if (movie) {
      movie.isForAdults = true;
      await movie.save();
      res.json({ message: 'Película marcada como para adultos.' });
    } else {
      res.status(404).json({ message: 'Película no encontrada.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeMovieForAdults = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findByPk(movieId);
    if (movie) {
      movie.isForAdults = false;
      await movie.save();
      res.json({ message: 'Película marcada como para todos los públicos.' });
    } else {
      res.status(404).json({ message: 'Película no encontrada.' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

