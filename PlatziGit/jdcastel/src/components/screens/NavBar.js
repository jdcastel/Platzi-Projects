import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo1.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "60%", height: "60%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#homes"
                className={
                  activeLink === "homes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("homes")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#profiles"
                className={
                  activeLink === "profiles"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("profiles")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                href="#expertises"
                className={
                  activeLink === "expertises"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("expertises")}
              >
                Expertise
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={
                  activeLink === "experiences"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experiences")}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
