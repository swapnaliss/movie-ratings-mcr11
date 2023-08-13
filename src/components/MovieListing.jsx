import React from 'react';
import { Container, Row, Col,Form , Button} from 'react-bootstrap';
import { movies } from './MoviesData'; 
import MovieCard from './MovieCard';
import '../App.css';

const MovieListing = () => {
  return (
    <div>
    <div className='Header'>
     <h3>Movies</h3>
     <Form.Group controlId="genreFilter">
        <Form.Control as="select" >
          <option value="All ">All Genre</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
        </Form.Control>
      </Form.Group>
     
      <Form.Group controlId="yearFilter">
        <Form.Control as="select" >
          <option value="All ">Release Year </option>
          <option value="Drama">1994</option>
          <option value="Crime">1992</option>
          <option value="Action">1999</option>
          <option value="Action">1991</option>
          <option value="Action">2008</option>
          <option value="Action">2010</option>
          <option value="Action">2001</option>
          <option value="Action">2003</option>

        </Form.Control>
      </Form.Group>

      <Form.Group controlId="ratingsFilter">
        <Form.Control as="select" >
          <option value="All ">Rating </option>
          <option value="Drama">8</option>
          <option value="Crime">9</option>
          <option value="Action">10</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" >
        Add Movie
      </Button>
    </div>
   
    <Container className='movieList'>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} showActions={true} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default MovieListing;
