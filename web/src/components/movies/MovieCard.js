import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div>
            <img src={movie.coverImage} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
    )
}

export default MovieCard;