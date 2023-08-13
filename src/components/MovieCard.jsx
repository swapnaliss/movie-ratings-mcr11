import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, showActions = true }) => {

    const navigate = useNavigate();

  const toggleStarred = () => {
    movie.isStarred = !movie.isStarred;
  };

  const toggleWatchlist = () => {
    movie.isAddedToWatchlist = !movie.isAddedToWatchlist;
  };

  return (
    <Card style={{ width: '18rem' }} className='cards'
    onClick={() => navigate(`/MovieDetailesPage/${movie.id}`)}
    >
      <Card.Img variant="top" src={movie.imageURL} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.summary}</Card.Text>
        {showActions && (
          <div>
            <Button variant={movie.isStarred ? 'warning' : 'outline-warning'} onClick={toggleStarred}>
              {movie.isStarred ? 'Starred' : 'Star'}
            </Button>
            <Button
              variant={movie.isAddedToWatchlist ? 'success' : 'outline-success'}
              className="ml-2"
              onClick={toggleWatchlist}
            >
              {movie.isAddedToWatchlist ? 'Added to Watchlist' : 'Add to Watchlist'}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
