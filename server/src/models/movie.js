import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required:true,
    },
    tipo: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;