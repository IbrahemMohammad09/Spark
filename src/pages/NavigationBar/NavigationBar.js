import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [activeClass, setActiveClass] = useState("active1");
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/student_courses" ||
      location.pathname === "/student_projects"
    ) {
      setActiveClass("active1");
    } else {
      setActiveClass("active2");
    }
  }, [location.pathname]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check each section's position on the page
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once on mount
  const navLinks = document.querySelectorAll("Link Nav");
  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove 'active' class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add 'active' class to the clicked link
      link.classList.add("active");
    });
  });
  // Function to update active link based on scroll position
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Check each section's position on the page
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        // Add 'active' class to the corresponding link
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });

  return (
    <div className={classNames("nav", activeClass)}>
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
              <Link
                className={activeLink === "hero" ? "navlink-active" : "navlink"}
                to="/"
                href="#hero"
                onClick={() => handleSetActiveLink("home")}
              >
                Home
              </Link>
              <Link
                className={classNames(
                  activeLink === "about" ? "navlink-active" : "navlink"
                )}
                to="/about_us"
                href="#about"
                onClick={() => handleSetActiveLink("about")}
              >
                About US
              </Link>
              <Link
                className={classNames(
                  activeLink === "services" ? "navlink-active" : "navlink"
                )}
                to="/services"
                href="#services"
                onClick={() => handleSetActiveLink("services")}
              >
                Services
              </Link>
              <Link
                className={classNames(
                  activeLink === "ourProject" ? "navlink-active" : "navlink"
                )}
                to="/our_projects"
                id="ourProject"
                href="#ourProject"
                onClick={() => handleSetActiveLink("ourProject")}
              >
                Our Projects
              </Link>
              <Link
                className={classNames(
                  activeLink === "contact" ? "navlink-active" : "navlink"
                )}
                to="/contact_us"
                href="#contact"
                onClick={() => handleSetActiveLink("contact")}
              >
                Contact US
              </Link>
              <Link
                className={classNames(
                  activeLink === "ourTeam" ? "navlink-active" : "navlink"
                )}
                to="/our_team"
                href="#ourTeam"
                onClick={() => handleSetActiveLink("ourTeam")}
              >
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
