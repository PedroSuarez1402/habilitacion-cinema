// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from '../services/axiosConfig.js';

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/server/src/models/movie.js')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Error fetching movies: ', error);
        });
    }, [])
    return (
        <div className="container mt-4">
            <h2>Cine junior tu papa</h2>
            <div>
            <h3>Carteleras hoy</h3>
                <ul>
                    {movies.map(movie => (
                        <li key={movie._id}>
                            <strong>{movie.title}</strong>
                            <p>{movie.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>Carteleras pronto</p>
            </div>
            
        </div>
    );
};

export default Home;
