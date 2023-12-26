import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo1.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon-git.png";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "20%", height: "20%" }}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jdcastel/">
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a href="https://github.com/jdcastel">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/juandcastel_21/">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Made with Passion by Juan Castelblanco. Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
