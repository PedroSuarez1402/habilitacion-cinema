// src/components/user/UserMovies.js
import React from 'react';

const UserMovies = () => {
    // Ejemplo de datos simulados. Deberías obtener esta información de tu API.
    const userMovies = [
        { id: 1, movie: 'Pelicula 1', room: 'Sala 1', time: '18:00' },
        { id: 2, movie: 'Pelicula 2', room: 'Sala 2', time: '20:30' },
        // Agrega más funciones según las necesidades
    ];

    return (
        <div className="container mt-4">
            <h2>Mis Películas Adquiridas</h2>
            {userMovies.length === 0 ? (
                <p>No has adquirido ninguna entrada.</p>
            ) : (
                <ul className="list-group">
                    {userMovies.map((userMovie) => (
                        <li key={userMovie.id} className="list-group-item">
                            <strong>{userMovie.movie}</strong> - {userMovie.room}, Horario {userMovie.time}
                            <button className="btn btn-danger ml-2">Cancelar Entrada</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserMovies;
