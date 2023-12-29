// src/components/shared/MovieDetail.js
import React from 'react';

const MovieDetail = ({ movie }) => {
    return (
        <div className="container mt-4">
            <h2>Detalles de la Película</h2>
            {movie ? (
                <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p>Sala: {movie.room}</p>
                    <p>Horario: {movie.time}</p>
                    {/* Aquí puedes agregar más detalles según tus necesidades */}
                </div>
            ) : (
                <p>No se ha seleccionado ninguna película.</p>
            )}
        </div>
    );
};

export default MovieDetail;
