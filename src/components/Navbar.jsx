import React from 'react'
import {  Navbar, Form, FormControl, Button } from 'react-bootstrap';

const NavbarItems = () => {
  return (
    <div>  
        <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">IMDB</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Form className="mx-auto" inline >
        <FormControl type="text" placeholder="Search moviesby title , cast and director.." className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Button variant="outline-light" className="mr-2">Movies</Button>
      <Button variant="outline-light" className="mr-2">WatchList </Button>
      <Button variant="outline-light">Starred Movies</Button>
    </Navbar.Collapse>
  </Navbar>
  </div>
  )
}

export default NavbarItems