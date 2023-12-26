import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../controls/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import navIcon2 from "../../assets/img/nav-icon-git.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInLeft" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Prj 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Prj 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Prj 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInLeft"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="align-items-center">
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projImg1} />
                              <div className="proj-txtx">
                                <h4>Business Startup</h4>
                                <span>Design & Development</span>
                              </div>
                            </div>
                          </Col>
                          <Col size={12}>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quam, quod neque provident velit, rem
                              explicabo excepturi id illo molestiae blanditiis,
                              eligendi dicta officiis asperiores delectus quasi
                              inventore debitis quo.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="align-items-center">
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projImg1} />
                              <div className="proj-txtx">
                                <h4>Business Startup</h4>
                                <span>Design & Development</span>
                              </div>
                            </div>
                          </Col>
                          <Col size={12}>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quam, quod neque provident velit, rem
                              explicabo excepturi id illo molestiae blanditiis,
                              eligendi dicta officiis asperiores delectus quasi
                              inventore debitis quo.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="align-items-center">
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projImg1} />
                              <div className="proj-txtx">
                                <h4>Business Startup</h4>
                                <span>Design & Development</span>
                              </div>
                            </div>
                          </Col>
                          <Col size={12}>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Cumque quam, quod neque provident velit, rem
                              explicabo excepturi id illo molestiae blanditiis,
                              eligendi dicta officiis asperiores delectus quasi
                              inventore debitis quo.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <p style={{ textAlign: "center" }}>
                    You can find all my Projects in my GitHub:
                    <div className="social-icon">
                      <a href="https://github.com/jdcastel">
                        <img src={navIcon2} alt="GitHub" />
                      </a>
                    </div>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
