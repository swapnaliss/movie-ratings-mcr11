import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListing from './components/MovieListing'
import { Container } from 'react-bootstrap';
import NavbarItems from './components/Navbar';

function App() {
  return (
    <div>
      <div>
        <NavbarItems/>
      </div>
      <div className="App">
        <Router>
          <Container>
        <Routes>
        <Route path="/" element={<MovieListing />} />
        </Routes>
        </Container>
        </Router>
      </div>
      </div>
  );
}

export default App;
