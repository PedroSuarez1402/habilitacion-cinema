// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from '../services/axiosConfig.js';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('/movies')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Error fetching movies: ', error);
        });
    }, []);
    return (
        <div className="container mt-4">
            <h2 className="text-dark text-center">CinePolis JS</h2>
            <Carousel className='carousel-dark'>
                {movies.map(movie => (
                    <Carousel.Item key={movie._id}>
                        <img
                            className="d-block mx-auto"
                            style={{height: '500px', width:'300px', objectFit:'cover'}}
                            src={movie.imageUrl}
                            alt={movie.title}
                        />
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="bg-dark text-light p-4 mt-4">
                <h3>Carteleras hoy</h3>
                <ul className="list-unstyled">
                    {movies.map(movie => (
                        <li key={movie._id} className="mb-3">
                            <strong>{movie.title}</strong>
                            <p>{movie.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-dark text-light p-5 mt-5">
                <p>Carteleras pronto</p>
            </div>
        </div>
    );
};


export default Home;
