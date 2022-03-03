import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Emotions from './Emotions';
import Statistics from './Statistics';

export default function Navbarcomp() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          {/* <Container> */}
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/statistics'}>Statistics</Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
      <div>
        <Routes>
            <Route exact path="/statistics" element={<Statistics />} />
              {/* <Statistics />
            </Route> */}
            <Route exact path="/" element={<Emotions />} /> 
              {/* <Emotions />
            </Route> */}
        </Routes>
      </div>
    </Router>

  )
}
