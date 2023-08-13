import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} 
    onClick={() => navigate(`/MovieDetailesPage/${movie.id}`)}>
        
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.summary}</Card.Text>
      </Card.Body>
     
    </Card>
  );
};

export default MovieCard;
