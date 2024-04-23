import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import useActiveSection from "../../hooks/useActiveSection";


const NavigationBar = (props) => {

  

  const [activeSection, setActiveSection] = useState(props.activePage1);
  console.log(useActiveSection);
 
  useEffect(() => {

    
      const handleScroll = () => {
        const sections = document.querySelectorAll('section'); 
        const scrollPosition = window.scrollY;
        sections.forEach(section => {
          const top = (section.offsetTop);
          const height = (section.offsetHeight);
          if (scrollPosition >= top && scrollPosition <(top + height)) {
            setActiveSection(section.id);
          }
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };


  
  }, []);
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
              <Link className={activeSection === 'home' ? 'navlink-active' : 'navlink'} to="" >
                Home
              </Link>
              <Link className={activeSection === 'about-us' ? 'navlink-active' : 'navlink' }  to="/about_us">
                About US
              </Link>
              <Link className={activeSection === 'services' ? 'navlink-active' : 'navlink'} to="/services" href="#Services" >
                Services
              </Link>
              <Link className={activeSection === 'our-projects' ? 'navlink-active' : 'navlink'} to="/our_projects" href="#Our_Projects">
                Our Projects
              </Link>
              <Link className={activeSection === 'contact-us' ? 'navlink-active' : 'navlink'} to="/contact_us" href="#Contact_us">
                Contact US
              </Link>
              <Link className={activeSection === 'our-team' ? 'navlink-active' : 'navlink'} to="/our_team" href="#Our_Family">
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
