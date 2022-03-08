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
import Journal from './Journal';
import Statistics from './Statistics';
import Wordcloud from './Wordcloud';
import { sortDate } from '../utilities/sort';
// import './CSS/Navbarcomp.css';

export default function Navbarcomp({entry, setEntry}) {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant={"light"} expand="lg">
          {/* <Navbar.Brand href="#home">Moodify - Be Your Own Therapist</Navbar.Brand> */}
          <Navbar.Brand href="/">Moodify </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/statistics'} >Statistics</Nav.Link>
              <Nav.Link as={Link} to={'/journal'}>Journal</Nav.Link>
              {/* <Nav.Link as={Link} to={'/wordcloud'}>Word Cloud</Nav.Link> */}

              <NavDropdown title="More info" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mental Health Crisis Helplines</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Meditation Exercise</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Routes>
            <Route exact path="/" element={<Emotions entry={entry} setEntry={setEntry}/>} />
            <Route exact path="/statistics" element={<Statistics entry={entry}/>} />
            <Route exact path="/journal" element={<Journal entry={sortDate(entry)} />} /> 
            {/* <Route exact path="/wordcloud" element={<Wordcloud entry={entry} />} />  */}
        </Routes>
      </div>
    </Router>

  )
}
