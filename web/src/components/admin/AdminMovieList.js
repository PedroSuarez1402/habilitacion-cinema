// src/components/admin/AdminMovieList.js
import React, { useState } from 'react';

const AdminMovieList = () => {
    // Ejemplo de datos simulados. Deberías obtener esta información de tu API.
    const initialMovies = [
        { id: 1, title: 'Pelicula 1', description: 'Descripción de la Película 1', room: 'Sala 1', time: '18:00' },
        { id: 2, title: 'Pelicula 2', description: 'Descripción de la Película 2', room: 'Sala 2', time: '20:30' },
        // Agrega más películas según las necesidades
    ];

    // Estado para almacenar las películas
    const [movies, setMovies] = useState(initialMovies);

    // Función para manejar la eliminación de una película
    const handleDeleteMovie = (movieId) => {
        // Aquí deberías implementar la lógica para eliminar la película (por ejemplo, hacer una solicitud a tu API)
        console.log(`Eliminando película con ID ${movieId}`);
        // También deberías actualizar el estado de las películas después de la eliminación
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Películas Registradas</h2>
            {movies.length === 0 ? (
                <p>No hay películas registradas en este momento.</p>
            ) : (
                <ul className="list-group">
                    {movies.map((movie) => (
                        <li key={movie.id} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h4>{movie.title}</h4>
                                    <p>{movie.description}</p>
                                    <p>Sala: {movie.room}</p>
                                    <p>Horario: {movie.time}</p>
                                </div>
                                <div>
                                    <button className="btn btn-warning mr-2">Editar</button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteMovie(movie.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AdminMovieList;
