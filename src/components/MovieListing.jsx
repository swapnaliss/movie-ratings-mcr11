import React, {useState, useEffect} from 'react';
import { Container, Row, Col,Form , Button,Modal} from 'react-bootstrap';
import { movies as initialMovies } from './MoviesData'; 
import MovieCard from './MovieCard';
import '../App.css';

const MovieListing = () => {

    const [genreFilter, setGenreFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    summary: '',
    year: '',
    cast: [],
    genre: [],
    rating: '',
    director: '',
    writer: '',
    imageURL: '',
  });
  const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'));
  const [movies, setMovies] = useState(moviesFromLocalStorage || initialMovies);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = () => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
    setShowAddForm(false);
    setNewMovie({
      title: '',
      summary: '',
      year: '',
      cast: [],
      genre: [],
      rating: '',
      director: '',
      writer: '',
      imageURL: '',
    });
  };

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

      <Button variant="primary" onClick={() => setShowAddForm(true)} >
        Add Movie
      </Button>
    </div>
   
    <Modal show={showAddForm} onHide={() => setShowAddForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="title">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="summary">
      <Form.Label>Summary</Form.Label>
      <Form.Control
        as="textarea"
        value={newMovie.summary}
        onChange={(e) => setNewMovie({ ...newMovie, summary: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="year">
      <Form.Label>Year</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.year}
        onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
      />
    </Form.Group>

    <Form.Group controlId="cast">
      <Form.Label>Cast (Comma-separated)</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.cast.join(', ')}
        onChange={(e) => setNewMovie({ ...newMovie, cast: e.target.value.split(', ') })}
      />
    </Form.Group>
    <Form.Group controlId="genre">
      <Form.Label>Genre</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.genre}
        onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
      />
    </Form.Group>
    <Form.Group controlId="rating">
      <Form.Label>Rating</Form.Label>
      <Form.Control
        type="number"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
      />
    </Form.Group>
    <Form.Group controlId="director">
      <Form.Label>Director</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.director}
        onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })}
      />
    </Form.Group>
    <Form.Group controlId="writer">
      <Form.Label>Writer</Form.Label>
      <Form.Control
        type="text"
        value={newMovie.writer}
        onChange={(e) => setNewMovie({ ...newMovie, writer: e.target.value })}
      />
    </Form.Group>
    <Form.Group controlId="image">
      <Form.Label>ImageURL</Form.Label>
      <Form.Control
        type="tex   t"
        value={newMovie.imageURL}
        onChange={(e) => setNewMovie({ ...newMovie, imageURL: e.target.value })}
      />
    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddForm(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
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
