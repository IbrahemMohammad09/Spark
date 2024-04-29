import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [activeClass, setActiveClass] = useState("active1");
  const [test, setTest] = useState("");
  console.log("🚀 ~ NavigationBar ~ test:", test);
  let isLastSectionActive = false;
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
            // setTest("");
          } else if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            // This means we're at the bottom of the page
            // The -1 is to ensure this condition is true even when the user is at the absolute bottom
            isLastSectionActive = true;
            setActiveLink(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once on mount
  useEffect(() => {
    // تحديث الرابط النشط استنادًا إلى المسار
    setActiveLink(location.pathname.substring(1) || "hero");
    setTest("");
  }, [location]);
  console.log(
    "🚀 ~ useEffect ~ location.pathname.substring(1):",
    location.pathname.substring(1)
  );
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

  const handleSetActiveLink = (link) => {
    setActiveLink("");
    setTest(link);
  };

  // دالة للتحقق مما إذا كان العنصر مرئيًا على الشاشة
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
    <div className={classNames("nav", activeClass)}>
      <Navbar expand="sm" fixed="top">
        <Container>
          <Navbar.Brand to="/">
            <img
              className="logo"
              loading="lazy"
              alt=""
              src={require("../../images/About.png")}
            />
            <div className="spark">SPARK</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse style={{ paddingLeft: "15px" }}>
            <Nav className="justify-content-center" style={{ width: "85%" }}>
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
                  activeLink === "our_projects" || test === "ourProject"
                    ? "navlink-active"
                    : "navlink"
                )}
                to="/our_projects"
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
