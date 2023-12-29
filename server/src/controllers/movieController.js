import Movie from "../models/movie.js";

const getMovie = async (req, res) =>{
    const {id} = req.params;

    try {
        const movie = await Movie.findById(id).exec()
        if (movie) {
            return res.json(movie)
        }
        return res.status(404).json({message: 'Pelicula no encontrada'})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const createMovie = async (req, res) => {
    try {
        const {title, description} = req.body;
        const newMovie = new Movie({title, description});
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const updateMovie = async (req, res) => {
    const {id} = req.params;
    const movieData = req.body;

    try {
        const movie = Movie.findById(id);

        if(movie) {
            movie.title = movieData.title;
            movie.description = movieData.description;
            movie.tipo = movieData.tipo;

            await movie.save();

            res.json(movie);
        }
        return res.status(404).json({ message: 'Pelicula no encontrada'});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = Movie.findById(id);

        if(movie) {

            await movie.remove();
            res.json({message: 'pelicula eliminada'});
        }
        res.status(404).json({message: 'pelicula no encontrada'});

    } catch (error) {

        res.status(500).json({message: error.message})
    }
}

export { getMovie, getMovies, createMovie, updateMovie, deleteMovie };