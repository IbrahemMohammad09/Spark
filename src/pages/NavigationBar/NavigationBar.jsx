import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import generateAlt from "../../utils/GenerateImageAlt";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [activeClass, setActiveClass] = useState("active1");
  const [test, setTest] = useState("");
  const [hideNav, setHideNav] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check each section's position on the page
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (sectionId) {
          if (
            (scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight) ||
            isElementInViewport(section)
          ) {
            setActiveLink(sectionId);
          } else if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            setActiveLink(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname.substring(1) || "hero");
    setTest("");
  }, [location]);

  useEffect(() => {
    if (
      location.pathname === "/student_courses" ||
      location.pathname === "/student-projects"
    ) {
      setActiveClass("active1");
    } else {
      setActiveClass("active2");
    }
  }, [location.pathname]);

  useEffect(() => {
    setHideNav(
      location.pathname.includes("/view-project") ||
        location.pathname.includes("/coming") ||
        location.pathname.includes("/error-page")
    );
  }, [location.pathname]);

  const handleSetActiveLink = (link) => {
    setActiveLink("");
    setTest(link);
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <div
      className={`navbar ${classNames("nav", activeClass)} ${
        hideNav && "d-none"
      }`}
    >
      <Navbar expand="lg" fixed="top" expanded={expanded}>
        <Container
          style={{
            width: "100%",
            height: "100%",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          <Navbar.Brand to="/">
            <img
              className="logo"
              loading="lazy"
              alt={generateAlt(require("../../images/log.webp"))}
              src={require("../../images/log.webp")}
            />
            <div className="spark">SPARK</div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="burger-btn"
            onClick={() => setExpanded(!expanded)}
          />

          <Navbar.Collapse
            className="nav-links"
            id="responsive-navbar-nav"
            style={{
              paddingLeft: "75px",
            }}
          >
            <Nav className="justify-content-center" style={{ width: "90%" }}>
              <NavLink
                className={
                  activeLink === "hero" || test === "home"
                    ? "navlink-active"
                    : "navlink"
                }
                to="/"
                href="#hero"
                onClick={() => handleSetActiveLink("home")}
              >
                Home
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "services" || test === "services"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/services"
                href="#services"
                onClick={() => handleSetActiveLink("services")}
              >
                Our Services
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "our-projects" || test === "ourProject"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/our-projects"
                href="#ourProject"
                onClick={() => handleSetActiveLink("ourProject")}
              >
                Our Projects
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "our_app" || test === "ourApp"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/our_app"
                href="#ourApp"
                onClick={() => handleSetActiveLink("ourApp")}
              >
                Our App
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "contact_us" || test === "contact"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/contact_us"
                href="#contact"
                onClick={() => handleSetActiveLink("contact")}
              >
                Contact US
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "our_team" || test === "ourTeam"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/our_team"
                href="#ourTeam"
                onClick={() => handleSetActiveLink("ourTeam")}
              >
                Our Team
              </NavLink>
              <NavLink
                className={classNames(
                  activeLink === "about_us" || test === "about"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/about_us"
                href="#about"
                onClick={() => handleSetActiveLink("about")}
              >
                About US
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
