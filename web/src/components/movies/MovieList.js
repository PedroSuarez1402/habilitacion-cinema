// src/components/user/MovieList.js
import React from 'react';
import MovieCard from './MovieCard.js';

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;
