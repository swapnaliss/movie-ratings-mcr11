import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from './MoviesData';
import { Button } from 'react-bootstrap';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id.toString() === id);
  console.log(movie);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.imageURL} alt={movie.title} style={{ maxWidth: '300px' }} />
      <p>{movie.summary}</p>
      <p>Year: {movie.year}</p>
     <p>Director: {movie.director}</p>
      <p>Writer: {movie.writer}</p>
      <p>Cast: {movie.cast.join(', ')}</p>
      <p>Genre: {movie.genre.join(', ')}</p>
       <Button>Star</Button>
        <Button>Add To WatchList</Button>
    </div>
  );
};

export default MovieDetail;
