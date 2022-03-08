import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Emotions from './Emotions';
import Journal from './Journal';
import Statistics from './Statistics';
// import Wordcloud from './Wordcloud';
import { sortDate } from '../utilities/sort';
import './CSS/Navbarcomp.css';

export default function Navbarcomp({entry, setEntry}) {
  return (
    <Router>
      <div>
        <Navbar  variant={"light"} expand="lg" className='topnavbar'> 
          <Navbar.Brand href="/" id='title'>Moodify </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/statistics'} >Statistics</Nav.Link>
              <Nav.Link as={Link} to={'/journal'}>Journal</Nav.Link>
              <NavDropdown title="Other Resources" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline">NHS - Urgent Mental Health Helpline</NavDropdown.Item>
                <NavDropdown.Item href="https://www.rbht.nhs.uk/our-services/clinical_support/rehabilitation-and-therapies/psychological-medicine/relaxation-exercises">NHS - Meditation Exercise</NavDropdown.Item>
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
