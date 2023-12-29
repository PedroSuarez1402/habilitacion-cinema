// src/components/user/CancelMovie.js
import React, { useState } from 'react';

const CancelMovie = () => {
    // Ejemplo de datos simulados. Deberías obtener esta información de tu API.
    const userMovies = [
        { id: 1, movie: 'Pelicula 1', room: 'Sala 1', time: '18:00' },
        { id: 2, movie: 'Pelicula 2', room: 'Sala 2', time: '20:30' },
        // Agrega más funciones según las necesidades
    ];

    // Estado para almacenar las funciones adquiridas por el usuario
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Función para manejar la selección de la película a cancelar
    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
    };

    // Función para manejar la cancelación de la película
    const handleCancelMovie = () => {
        // Aquí deberías implementar la lógica para cancelar la película (por ejemplo, hacer una solicitud a tu API)
        console.log(`Cancelando película: ${selectedMovie.movie}`);
        // También deberías actualizar el estado o la información de funciones adquiridas después de la cancelación
        setSelectedMovie(null);
    };

    return (
        <div className="container mt-4">
            <h2>Cancelar Película</h2>
            {userMovies.length === 0 ? (
                <p>No has adquirido ninguna entrada.</p>
            ) : (
                <div>
                    <p>Selecciona la película que deseas cancelar:</p>
                    <ul className="list-group">
                        {userMovies.map((userMovie) => (
                            <li
                                key={userMovie.id}
                                className={`list-group-item ${selectedMovie === userMovie ? 'active' : ''}`}
                                onClick={() => handleMovieSelection(userMovie)}
                            >
                                <strong>{userMovie.movie}</strong> - {userMovie.room}, Horario {userMovie.time}
                            </li>
                        ))}
                    </ul>
                    {selectedMovie && (
                        <div className="mt-3">
                            <p>¿Estás seguro que deseas cancelar la película seleccionada?</p>
                            <button className="btn btn-danger" onClick={handleCancelMovie}>
                                Cancelar Película
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CancelMovie;
