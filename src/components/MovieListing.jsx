import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { movies } from './MoviesData'; 
import MovieCard from './MovieCard';

const MovieListing = () => {
  return (
    <Container className='movieList'>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieListing;
