import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
