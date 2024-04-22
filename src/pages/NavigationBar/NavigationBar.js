import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav">
      <Navbar expand="sm" fixed="top" bg="white">
        <Container>
          <Navbar.Brand to="/">
            <img
              className="logo"
              loading="lazy"
              alt=""
              src={require("../../images/logo.png")}
            />
            <div className="spark">SPARK</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ paddingLeft: "15px" }}>
            <Nav className="justify-content-center" style={{ width: "85%" }}>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about_us">
                About US
              </Link>
              <Link className="nav-link" to="/our_services" href="#Services">
                Services
              </Link>
              <Link
                className="nav-link"
                to="/our_projects"
                href="#Our_Projects"
              >
                Our Projects
              </Link>
              <Link className="nav-link" to="/contact_us" href="#Contact_us">
                Contact US
              </Link>
              <Link className="nav-link" to="/our_team" href="#Our_Family">
                Our Team
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
