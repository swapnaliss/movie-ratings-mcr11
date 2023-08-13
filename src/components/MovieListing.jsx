import React, {useState} from 'react';
import { Container, Row, Col,Form , Button} from 'react-bootstrap';
import { movies } from './MoviesData'; 
import MovieCard from './MovieCard';
import '../App.css';

const MovieListing = () => {

    const [genreFilter, setGenreFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

  const filteredMovies = movies.filter(movie => {
    const genreMatch = genreFilter === 'All' || movie.genre.includes(genreFilter);
    const yearMatch = yearFilter === 'All' || movie.year.toString() === yearFilter;
    const ratingMatch = ratingFilter === 'All' || movie.rating.toString() === ratingFilter;

    return genreMatch && yearMatch && ratingMatch;
  });
  return (
    <div>
    <div className='Header'>
     <h3>Movies</h3>
     <Form.Group controlId="genreFilter">
        <Form.Control as="select" onChange={(e) => setGenreFilter(e.target.value)}>
          <option value="All ">All Genre</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
        </Form.Control>
      </Form.Group>
     
      <Form.Group controlId="yearFilter">
        <Form.Control as="select" onChange={(e) => setYearFilter(e.target.value)} >
          <option value="All ">Release Year </option>
          <option value="1994">1994</option>
          <option value="1992">1992</option>
          <option value="1999">1999</option>
          <option value="1991">1991</option>
          <option value="2008">2008</option>
          <option value="2010">2010</option>
          <option value="2001">2001</option>
          <option value="2003">2003</option>

        </Form.Control>
      </Form.Group>

      <Form.Group controlId="ratingsFilter">
        <Form.Control as="select" onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="All ">Rating </option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" >
        Add Movie
      </Button>
    </div>
   
    <Container className='movieList'>
      <Row>
        {filteredMovies.map((movie) => (
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
