import React from 'react'
import MovieCard from "./MovieCard";


const MovieList = ({ movies, searchTxt, searchRate, setMovies }) => {
    return (
    <div>
         {movies
        .filter((el) =>
          el.title.toLowerCase().includes(searchTxt.toLowerCase())
        )
        .map((movie, i) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

export default MovieList